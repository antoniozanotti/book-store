import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
import { Author, Book, Category, Product, Publisher, data } from "../data/seed";
import PageType from "../src/const/page";

function truncate(text: string, maxLength: number) {
  return text.length > maxLength - 3
    ? text.substring(0, maxLength - 3) + "..."
    : text;
}

function getMetaTitle(pageType: PageType, text: string | string[]): string {
  if (pageType === PageType.CATEGORY) {
    return `Books ${text}`;
  }
  if (pageType === PageType.AUTHOR) {
    if (Array.isArray(text)) {
      return `Books by ${text.join(" and ")}`;
    } else {
      return `${text}'s Books`;
    }
  }
  if (pageType === PageType.PRODUCT) {
    return `Book ${truncate(text.toString(), 55)}`;
  }
  if (pageType === PageType.PUBLISHER) {
    return `Books published by ${text}`;
  }
  return Array.isArray(text) ? text.join(" and ") : text;
}

function getMetaDescription(pageType: PageType, text: string): string {
  return truncate(text, 160);
}

function getSlug(pageType: PageType, text: string): string {
  return text
    .replaceAll(/[^(a-z\s)]/gi, "")
    .split(" ")
    .join("-")
    .toLowerCase();
}

function createPage(pageType: PageType, title: string, description: string) {
  return {
    create: {
      title: getMetaTitle(pageType, title),
      description: getMetaDescription(pageType, description),
      slug: getSlug(pageType, title),
    },
  };
}

function createPublisher(publisher: Publisher) {
  return {
    name: publisher.name,
    description: publisher.description,
    page: createPage(PageType.PUBLISHER, publisher.name, publisher.description),
  };
}

function createAuthors(authors: Author[]) {
  return authors.map((author) => {
    return {
      name: author.name,
      description: author.description,
      page: createPage(PageType.AUTHOR, author.name, author.description),
    };
  });
}

function createBook(book: Book) {
  return {
    authors: {
      create: createAuthors(book.authors),
    },
    publisher: {
      create: createPublisher(book.publisher),
    },
    year: book.year,
    pages: book.pages,
  };
}

function createProducts(products: Product[]) {
  return products.map((product) => {
    return {
      name: product.name,
      description: product.description,
      price: product.price,
      isbn: product.isbn,
      book: {
        create: createBook(product.book),
      },
      page: createPage(PageType.PRODUCT, product.name, product.description),
    };
  });
}

function createCategory(category: Category) {
  return {
    name: category.name,
    description: category.description,
    products: {
      create: createProducts(category.products),
    },
    page: createPage(PageType.CATEGORY, category.name, category.description),
  };
}

async function main() {
  
  // Delete all records
  await prisma.book.deleteMany();
  await prisma.publisher.deleteMany();
  await prisma.author.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.page.deleteMany();

  // Insert records from /data/seed.ts
  for (let i = 0; i < data.length; i++) {
    let category = data[i];
    await prisma.category.create({
      data: createCategory(category),
    });
  }

  // Fix Duplicated Authors
  const duplicatedAuthorsByName = await prisma.author.groupBy({
    by: ["name"],
    _count: {
      name: true,
    },
    having: {
      name: {
        _count: {
          gt: 1,
        },
      },
    },
  });

  for (let k = 0; k < duplicatedAuthorsByName.length; k++) {
    let row = duplicatedAuthorsByName[k];
    let dubplicatedAuthorsWithId = await prisma.author.findMany({
      where: {
        name: row.name,
      },
    });

    // This author will not be deleted
    let keepAuthor = dubplicatedAuthorsWithId[0];

    for (let l = 1; l < dubplicatedAuthorsWithId.length; l++) {
      let l_row = dubplicatedAuthorsWithId[l];

      // get books with duplicated author
      let booksWithDuplicatedAuthor = await prisma.book.findMany({
        where: {
          authors: {
            some: {
              id: l_row.id,
            },
          },
        },
      });

      // connect booksWithDuplicatedAuthor with the same author
      for (let m = 0; m < booksWithDuplicatedAuthor.length; m++) {
        let book = booksWithDuplicatedAuthor[m];
        await prisma.book.update({
          where: {
            id: book.id,
          },
          data: {
            authors: {
              connect: {
                id: keepAuthor.id,
              },
            },
          },
        });
      }

      // delete duplicated author
      let duplicatedAuthorsId = dubplicatedAuthorsWithId
        .filter((author) => author.id != keepAuthor.id)
        .map((author) => author.id);
      await prisma.author.deleteMany({
        where: {
          id: {
            in: duplicatedAuthorsId,
          },
        },
      });
    }
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });