import { ProductWithPageAndBookPrisma } from "../types/product-prisma";

export const productsWithPagEandBookMock: ProductWithPageAndBookPrisma[] = [
  {
    id: 138,
    name: "The Four Agreements: A Practical Guide to Personal Freedom",
    description:
      "Canto eum versus somniculosus mollitia conforto celebrer iste. Surculus facere vix acceptus. Cohaero demo sufficio venio autus animi ex adversus quam.",
    price: "302",
    isbn: "978-1-315-92574-5",
    pageId: 448,
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
        },
      ],
    },
    page: {
      id: 448,
      title: "Book The Four Agreements: A Practical Guide to Personal F...",
      description:
        "Canto eum versus somniculosus mollitia conforto celebrer iste. Surculus facere vix acceptus. Cohaero demo sufficio venio autus animi ex adversus quam.",
      slug: "the-four-agreements-a-practical-guide-to-personal-freedom",
      type: "product",
    },
  },
  {
    id: 154,
    name: "The Perks of Being a Wallflower",
    description:
      "Aptus aer clarus centum. Confugo timor blanditiis contigo tersus sordeo universe titulus. Carus vita turba accommodo textilis voluptate terreo.",
    price: "467",
    isbn: "978-1-886201-83-5",
    pageId: 498,
    book: {
      id: 154,
      productId: 154,
      publisherId: 154,
      year: 2024,
      pages: 143,
      authors: [
        {
          id: 162,
          name: "Stephen Chbosky",
          description:
            "Commodo sufficio aqua dedecor culpa creo contigo. Assentator vallum talus sodalitas strenuus cognatus demulceo vae decumbo trepide. Stultus vis trado voro denuncio.",
          pageId: 500,
        },
      ],
    },
    page: {
      id: 498,
      title: "Book The Perks of Being a Wallflower",
      description:
        "Aptus aer clarus centum. Confugo timor blanditiis contigo tersus sordeo universe titulus. Carus vita turba accommodo textilis voluptate terreo.",
      slug: "the-perks-of-being-a-wallflower",
      type: "product",
    },
  },
  {
    id: 122,
    name: "The Martian",
    description:
      "Conspergo bellum cicuta averto comparo antea. Caterva culpa amaritudo adulescens et totam uxor crudelis verbum valde. Vindico carus tardus.",
    price: "386",
    isbn: "978-1-4606-4004-3",
    pageId: 399,
    book: {
      id: 122,
      productId: 122,
      publisherId: 122,
      year: 2024,
      pages: 278,
      authors: [
        {
          id: 130,
          name: "Andy Weir",
          description:
            "Non urbanus atque cerno copia damnatio. Vorago temeritas quod undique corona. Veritas strenuus corrupti.",
          pageId: 401,
        },
      ],
    },
    page: {
      id: 399,
      title: "Book The Martian",
      description:
        "Conspergo bellum cicuta averto comparo antea. Caterva culpa amaritudo adulescens et totam uxor crudelis verbum valde. Vindico carus tardus.",
      slug: "the-martian",
      type: "product",
    },
  },
  {
    id: 43,
    name: "Cozy: The Art of Arranging Yourself in the World",
    description:
      "Natus desolo admitto coadunatio ciminatio itaque tristis deserunt. Desolo tandem utrum ultio. Derideo voro aveho ab neque vel soleo custodia corpus.",
    price: "201",
    isbn: "978-1-7131-1984-5",
    pageId: 153,
    book: {
      id: 43,
      productId: 43,
      publisherId: 43,
      year: 2024,
      pages: 145,
      authors: [
        {
          id: 50,
          name: "Isabel Gillies",
          description:
            "Depromo creta creator suffragium cicuta astrum audentia ulterius coadunatio. Valde apto abduco quas clamo ait vestigium subnecto. Valetudo adfectus crur curis accedo vomica conitor doloribus colligo.",
          pageId: 155,
        },
      ],
    },
    page: {
      id: 153,
      title: "Book Cozy: The Art of Arranging Yourself in the World",
      description:
        "Natus desolo admitto coadunatio ciminatio itaque tristis deserunt. Desolo tandem utrum ultio. Derideo voro aveho ab neque vel soleo custodia corpus.",
      slug: "cozy-the-art-of-arranging-yourself-in-the-world",
      type: "product",
    },
  },
  {
    id: 24,
    name: "Bone",
    description:
      "Aranea uterque spargo. Ullam velociter aiunt conventus aduro amissio necessitatibus viduo ullam praesentium. Quas bibo cras crudelis absconditus perferendis delectus.",
    price: "436",
    isbn: "978-0-00-141481-5",
    pageId: 91,
    book: {
      id: 24,
      productId: 24,
      publisherId: 24,
      year: 2023,
      pages: 128,
      authors: [
        {
          id: 28,
          name: "Jeff Smith",
          description:
            "Considero calcar cui labore. Bestia abutor perferendis color ventus cilicium contigo thema peior. Patruus callide ad audax ara soluta usus peccatus abundans.",
          pageId: 93,
        },
      ],
    },
    page: {
      id: 91,
      title: "Book Bone",
      description:
        "Aranea uterque spargo. Ullam velociter aiunt conventus aduro amissio necessitatibus viduo ullam praesentium. Quas bibo cras crudelis absconditus perferendis ...",
      slug: "bone",
      type: "product",
    },
  },
  {
    id: 55,
    name: "Pet Sematary",
    description:
      "Currus conturbo solutio vere coerceo copiose adimpleo dicta. Sordeo tabernus adeptio ultra consequuntur ventito celebrer calco amo atrocitas. Temperantia correptius amplitudo absque torrens casso illo contra depraedor.",
    price: "242",
    isbn: "978-1-101-96204-6",
    pageId: 191,
    book: {
      id: 55,
      productId: 55,
      publisherId: 55,
      year: 2021,
      pages: 68,
      authors: [
        {
          id: 63,
          name: "Stephen King",
          description:
            "Quidem incidunt confugo aedificium minima ago asporto ascisco cernuus. Turba valeo verus armarium voluptatem at contego. Taceo spiculum administratio.",
          pageId: 193,
        },
      ],
    },
    page: {
      id: 191,
      title: "Book Pet Sematary",
      description:
        "Currus conturbo solutio vere coerceo copiose adimpleo dicta. Sordeo tabernus adeptio ultra consequuntur ventito celebrer calco amo atrocitas. Temperantia cor...",
      slug: "pet-sematary",
      type: "product",
    },
  },
];
