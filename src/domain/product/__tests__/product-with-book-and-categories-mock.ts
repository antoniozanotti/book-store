import { ProductWithBookAndCategoriesPrisma } from "../types/product-prisma";

export const productWithBookAndCategoriesMock: ProductWithBookAndCategoriesPrisma = {
  id: 138,
  name: "The Four Agreements: A Practical Guide to Personal Freedom",
  description:
    "Canto eum versus somniculosus mollitia conforto celebrer iste. Surculus facere vix acceptus. Cohaero demo sufficio venio autus animi ex adversus quam.",
  price: "302",
  isbn: "978-1-315-92574-5",
  pageId: 448,
  page: {
    id: 448,
    title: "Book The Four Agreements: A Practical Guide to Personal F...",
    description:
      "Canto eum versus somniculosus mollitia conforto celebrer iste. Surculus facere vix acceptus. Cohaero demo sufficio venio autus animi ex adversus quam.",
    slug: "the-four-agreements-a-practical-guide-to-personal-freedom",
    type: "product",
  },
  book: {
    id: 138,
    productId: 138,
    publisherId: 138,
    year: 2024,
    pages: 400,
    authors: [
      {
        id: 146,
        name: "Don Miguel Ruiz",
        description:
          "Victus nisi carus consequuntur tubineus nostrum. Harum umquam vaco patruus absens. Corrigo vereor molestiae cresco varietas depraedor cetera.",
        pageId: 450,
        page: {
          id: 450,
          title: "Don Miguel Ruiz's Books",
          description:
            "Victus nisi carus consequuntur tubineus nostrum. Harum umquam vaco patruus absens. Corrigo vereor molestiae cresco varietas depraedor cetera.",
          slug: "don-miguel-ruiz",
          type: "author",
        },
        books: [],
      },
    ],
    publisher: {
      id: 138,
      name: "Hoeger - Swaniawski",
      description:
        "Laborum cedo decumbo adhuc explicabo anser corpus congregatio. Facere colo apud callide adipiscor auctus vitiosus aro. Templum adulatio creptio deleniti eum colo.",
      pageId: 449,
      page: {
        id: 449,
        title: "Books published by Hoeger - Swaniawski",
        description:
          "Laborum cedo decumbo adhuc explicabo anser corpus congregatio. Facere colo apud callide adipiscor auctus vitiosus aro. Templum adulatio creptio deleniti eum ...",
        slug: "hoeger--swaniawski",
        type: "publisher",
      },
    },
  },
  categories: [
    {
      id: 14,
      name: "Spirituality and Philosophy",
      description:
        "Thema tripudio aliquid eum. Enim stultus bis vetus pecus tersus. Debilito nihil demulceo tepesco adhuc admiratio tremo timor.",
      pageId: 426,
      page: {
        id: 426,
        title: "Spirituality and Philosophy Books",
        description:
          "Thema tripudio aliquid eum. Enim stultus bis vetus pecus tersus. Debilito nihil demulceo tepesco adhuc admiratio tremo timor.",
        slug: "spirituality-and-philosophy",
        type: "category",
      },
      products: [
        {
          id: 131,
          name: "The Prophet",
          description:
            "Aeternus saepe error barba tabula chirographum eaque careo. Omnis cicuta adiuvo itaque accusamus aufero sto. Asporto deludo sto voluptatum trans crudelis terror.",
          price: "433",
          isbn: "978-1-60898-018-5",
          pageId: 427,
          page: {
            id: 427,
            title: "Book The Prophet",
            description:
              "Aeternus saepe error barba tabula chirographum eaque careo. Omnis cicuta adiuvo itaque accusamus aufero sto. Asporto deludo sto voluptatum trans crudelis ter...",
            slug: "the-prophet",
            type: "product",
          },
          book: {
            id: 131,
            productId: 131,
            publisherId: 131,
            year: 2000,
            pages: 376,
            authors: [
              {
                id: 139,
                name: "Kahlil Gibran",
                description:
                  "Ultio ago aeneus vesica eligendi summa titulus spiritus appello admitto. Utpote amiculum dedico ultra condico commemoro aiunt amissio aliquam anser. Auctus adeptio suscipit triumphus.",
                pageId: 429,
              },
            ],
          },
        },
        {
          id: 132,
          name: "Tao of Pooh",
          description:
            "Sustineo vesco celer tantillus cubo paens ocer. Tumultus toties sufficio virga vaco sto eaque acervus vestrum adinventitias. Veritatis accommodo curvo minus crur textilis nesciunt repudiandae carpo attollo.",
          price: "496",
          isbn: "978-1-383-22780-2",
          pageId: 430,
          page: {
            id: 430,
            title: "Book Tao of Pooh",
            description:
              "Sustineo vesco celer tantillus cubo paens ocer. Tumultus toties sufficio virga vaco sto eaque acervus vestrum adinventitias. Veritatis accommodo curvo minus ...",
            slug: "tao-of-pooh",
            type: "product",
          },
          book: {
            id: 132,
            productId: 132,
            publisherId: 132,
            year: 2012,
            pages: 305,
            authors: [
              {
                id: 140,
                name: "Benjamin Hoff",
                description:
                  "Arguo thesis victus caelum teneo auxilium tantillus autem impedit. Vulpes civis ara vulnus. Truculenter vigilo derideo coerceo voro suppono calamitas copia.",
                pageId: 432,
              },
            ],
          },
        },
        {
          id: 133,
          name: "The Road Less Traveled: A New Psychology of Love, Traditional Values, and Spiritual Growth",
          description:
            "Approbo accendo cedo bene caritas. Demens conspergo adipisci statua cervus corroboro averto cur. Libero aperio apto.",
          price: "461",
          isbn: "978-0-374-28271-4",
          pageId: 433,
          page: {
            id: 433,
            title:
              "Book The Road Less Traveled: A New Psychology of Love, Tr...",
            description:
              "Approbo accendo cedo bene caritas. Demens conspergo adipisci statua cervus corroboro averto cur. Libero aperio apto.",
            slug: "the-road-less-traveled-a-new-psychology-of-love-traditional-values-and-spiritual-growth",
            type: "product",
          },
          book: {
            id: 133,
            productId: 133,
            publisherId: 133,
            year: 2000,
            pages: 271,
            authors: [
              {
                id: 141,
                name: "M. Scott Peck",
                description:
                  "Unus expedita dapifer dens aequitas venustas casso. Adfectus urbanus alioqui vesica creta tribuo. Adnuo ver stipes capto tamdiu statim ait aegre vapulus.",
                pageId: 435,
              },
            ],
          },
        },
      ],
    },
  ],
};
