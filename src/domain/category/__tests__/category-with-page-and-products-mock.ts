import { CategoryWithPageAndProductsPrisma } from "../types/category-prisma";

export const categoryWithPageAndProductsMock: CategoryWithPageAndProductsPrisma = {
  id: 1,
  name: "Arts and Entertainment",
  description:
    "Stipes repellat cupiditate vestrum ago consequatur sunt acsi angustus aegre. Aequus eveniet decor vesica succedo laboriosam fugit. Aro aeternus suffoco cometes.",
  pageId: 15,
  page: {
    id: 15,
    title: "Arts and Entertainment Books",
    description:
      "Stipes repellat cupiditate vestrum ago consequatur sunt acsi angustus aegre. Aequus eveniet decor vesica succedo laboriosam fugit. Aro aeternus suffoco comet...",
    slug: "arts-and-entertainment",
    type: "category",
  },
  products: [
    {
      id: 1,
      name: "Crazy Rich Asians",
      description:
        "Carbo suscipit stips eligendi ago canonicus coepi. Caput suppellex tondeo auctor tabgo asperiores. Argumentum speciosus nulla antea aranea astrum turbo thorax.",
      price: "29",
      isbn: "978-1-7900-7991-9",
      pageId: 16,
      book: {
        id: 1,
        productId: 1,
        publisherId: 1,
        year: 2018,
        pages: 443,
        authors: [
          {
            id: 1,
            name: "Kevin Kwan",
            description:
              "Arbor color cras trepide commodi illo dolores porro harum. Versus error maxime substantia conor animadverto traho spiculum sed. Vulgivagus amo supra solio correptius strues corroboro speculum.",
            pageId: 18,
          },
        ],
      },
      page: {
        id: 16,
        title: "Book Crazy Rich Asians",
        description:
          "Carbo suscipit stips eligendi ago canonicus coepi. Caput suppellex tondeo auctor tabgo asperiores. Argumentum speciosus nulla antea aranea astrum turbo thora...",
        slug: "crazy-rich-asians",
        type: "product",
      },
    },
    {
      id: 2,
      name: "The Artist's Way: A Spiritual Path to Higher Creativity",
      description:
        "Cupressus verecundia surgo tactus. Solium ait tergeo benevolentia cur constans vae vapulus speculum dignissimos. Audax arceo concedo venustas volaticus corporis aedificium mollitia contabesco.",
      price: "78",
      isbn: "978-0-12-180727-6",
      pageId: 19,
      book: {
        id: 2,
        productId: 2,
        publisherId: 2,
        year: 1997,
        pages: 184,
        authors: [
          {
            id: 2,
            name: "Julia Cameron",
            description:
              "Tero versus aliquid tempus argumentum blanditiis angulus quibusdam baiulus quia. Corporis coniecto amet ab laborum conculco iusto vigilo. Accusamus adhuc voluptate virtus teneo cedo.",
            pageId: 21,
          },
        ],
      },
      page: {
        id: 19,
        title: "Book The Artist's Way: A Spiritual Path to Higher Creativ...",
        description:
          "Cupressus verecundia surgo tactus. Solium ait tergeo benevolentia cur constans vae vapulus speculum dignissimos. Audax arceo concedo venustas volaticus corpo...",
        slug: "the-artists-way-a-spiritual-path-to-higher-creativity",
        type: "product",
      },
    },
    {
      id: 3,
      name: "How Music Works",
      description:
        "Combibo soluta contra celebrer. Vado convoco cursim vicinus cogo turba undique ventus valde somnus. Paulatim verumtamen culpa collum utique tenax quisquam considero molestias.",
      price: "120",
      isbn: "978-1-148-42632-7",
      pageId: 22,
      book: {
        id: 3,
        productId: 3,
        publisherId: 3,
        year: 1994,
        pages: 460,
        authors: [
          {
            id: 3,
            name: "David Byrne",
            description:
              "Terminatio vero terra tot. Ara provident adopto facere advenio adiuvo bis teres apparatus. Arbustum sulum absens asper cerno arguo.",
            pageId: 24,
          },
        ],
      },
      page: {
        id: 22,
        title: "Book How Music Works",
        description:
          "Combibo soluta contra celebrer. Vado convoco cursim vicinus cogo turba undique ventus valde somnus. Paulatim verumtamen culpa collum utique tenax quisquam co...",
        slug: "how-music-works",
        type: "product",
      },
    },
    {
      id: 4,
      name: "The Goldfinch",
      description:
        "Depulso textor degusto video crapula circumvenio viriliter admoneo venio. Delicate aspernatur vesco cedo nisi abeo similique causa. Supellex copiose suggero villa conventus auctus.",
      price: "378",
      isbn: "978-0-555-38623-1",
      pageId: 25,
      book: {
        id: 4,
        productId: 4,
        publisherId: 4,
        year: 2015,
        pages: 258,
        authors: [
          {
            id: 4,
            name: "Donna Tartt",
            description:
              "Mollitia alius uter. Auditor deleo vacuus amicitia virtus super. Vesica sto derelinquo uxor deserunt succurro caveo una.",
            pageId: 27,
          },
        ],
      },
      page: {
        id: 25,
        title: "Book The Goldfinch",
        description:
          "Depulso textor degusto video crapula circumvenio viriliter admoneo venio. Delicate aspernatur vesco cedo nisi abeo similique causa. Supellex copiose suggero ...",
        slug: "the-goldfinch",
        type: "product",
      },
    },
    {
      id: 5,
      name: "Hamilton: The Revolution",
      description:
        "Communis canto comedo cogito. Acer callide quam curiositas. Turpis ceno alienus arx derelinquo titulus.",
      price: "224",
      isbn: "978-1-125-85293-4",
      pageId: 28,
      book: {
        id: 5,
        productId: 5,
        publisherId: 5,
        year: 1997,
        pages: 199,
        authors: [
          {
            id: 5,
            name: "Jeremy McCarter",
            description:
              "Verbum harum ex argumentum vehemens alienus degero animus aeternus. Crapula alius verus curatio texo. Suggero ambitus tepesco patria certus.",
            pageId: 30,
          },
          {
            id: 6,
            name: "Lin-Manuel Miranda",
            description:
              "Damno sortitus trucido atque auctor bis maiores abundans. Officiis impedit dapifer expedita universe sollicito derideo suus. Arbustum comminor taedium aureus mollitia suadeo spiritus.",
            pageId: 31,
          },
        ],
      },
      page: {
        id: 28,
        title: "Book Hamilton: The Revolution",
        description:
          "Communis canto comedo cogito. Acer callide quam curiositas. Turpis ceno alienus arx derelinquo titulus.",
        slug: "hamilton-the-revolution",
        type: "product",
      },
    },
    {
      id: 6,
      name: "Just Kids",
      description:
        "Adimpleo sursum accommodo natus. Adicio curia carmen canto defessus conturbo synagoga apto. Correptius vulpes defleo deludo.",
      price: "439",
      isbn: "978-0-374-92156-9",
      pageId: 32,
      book: {
        id: 6,
        productId: 6,
        publisherId: 6,
        year: 2006,
        pages: 280,
        authors: [
          {
            id: 7,
            name: "Patti Smith",
            description:
              "Degenero deripio arcesso. Vulnero terminatio patior. Vesco conor vestigium sit.",
            pageId: 34,
          },
        ],
      },
      page: {
        id: 32,
        title: "Book Just Kids",
        description:
          "Adimpleo sursum accommodo natus. Adicio curia carmen canto defessus conturbo synagoga apto. Correptius vulpes defleo deludo.",
        slug: "just-kids",
        type: "product",
      },
    },
    {
      id: 7,
      name: "Steal Like an Artist: 10 Things Nobody Told You About Being Creative",
      description:
        "Tergo venustas vester utique subseco temporibus pecto textus bonus textilis. Paulatim conqueror doloremque. Curo creber adipisci vinculum.",
      price: "308",
      isbn: "978-1-4597-0735-1",
      pageId: 35,
      book: {
        id: 7,
        productId: 7,
        publisherId: 7,
        year: 1996,
        pages: 191,
        authors: [
          {
            id: 8,
            name: "Austin Kleon",
            description:
              "Inventore aut ascit. Acervus despecto repellat agnosco praesentium alias eos coepi. Sortitus decor excepturi cuius thymum turpis conservo.",
            pageId: 37,
          },
        ],
      },
      page: {
        id: 35,
        title: "Book Steal Like an Artist: 10 Things Nobody Told You Abou...",
        description:
          "Tergo venustas vester utique subseco temporibus pecto textus bonus textilis. Paulatim conqueror doloremque. Curo creber adipisci vinculum.",
        slug: "steal-like-an-artist-10-things-nobody-told-you-about-being-creative",
        type: "product",
      },
    },
    {
      id: 8,
      name: "Born to Run",
      description:
        "Ex eligendi sufficio dedico. Tergum contra verto tam claro arguo aedificium veritas audax amitto. Urbanus supra abstergo ait denuncio vomito fugiat.",
      price: "410",
      isbn: "978-1-62672-977-3",
      pageId: 38,
      book: {
        id: 8,
        productId: 8,
        publisherId: 8,
        year: 2010,
        pages: 383,
        authors: [
          {
            id: 9,
            name: "Bruce Springsteen",
            description:
              "Versus trepide colligo caveo conscendo aestas adduco. Copiose varius utique carpo tabula absque amplitudo. Antepono canis ancilla capitulus eos spiculum desipio.",
            pageId: 40,
          },
        ],
      },
      page: {
        id: 38,
        title: "Book Born to Run",
        description:
          "Ex eligendi sufficio dedico. Tergum contra verto tam claro arguo aedificium veritas audax amitto. Urbanus supra abstergo ait denuncio vomito fugiat.",
        slug: "born-to-run",
        type: "product",
      },
    },
    {
      id: 9,
      name: "The Art of Pixar: 25th Anniversary",
      description:
        "Tergum caste sequi reiciendis. Causa omnis absorbeo ea allatus beneficium viriliter decor utpote placeat. Corporis capto supellex curriculum repellat adsuesco tamquam torqueo.",
      price: "386",
      isbn: "978-1-889216-25-6",
      pageId: 41,
      book: {
        id: 9,
        productId: 9,
        publisherId: 9,
        year: 1997,
        pages: 95,
        authors: [
          {
            id: 10,
            name: "John Lasseter",
            description:
              "Cuppedia uberrime auctus coma. Clarus turba paens cervus aufero tripudio vestigium. Repellat appono ara commemoro tollo velut agnosco.",
            pageId: 43,
          },
          {
            id: 11,
            name: "Amid Amidi",
            description:
              "Agnosco somnus demergo aut copia labore constans. Omnis templum comedo contigo tametsi arma sophismata adsuesco ea patrocinor. Vivo minus umquam.",
            pageId: 44,
          },
        ],
      },
      page: {
        id: 41,
        title: "Book The Art of Pixar: 25th Anniversary",
        description:
          "Tergum caste sequi reiciendis. Causa omnis absorbeo ea allatus beneficium viriliter decor utpote placeat. Corporis capto supellex curriculum repellat adsuesc...",
        slug: "the-art-of-pixar-25th-anniversary",
        type: "product",
      },
    },
    {
      id: 10,
      name: "The Warhol Economy",
      description:
        "Coaegresco a tandem suffoco. Dens coaegresco sint trado chirographum accedo. Taedium tibi utique.",
      price: "266",
      isbn: "978-0-06-777614-8",
      pageId: 45,
      book: {
        id: 10,
        productId: 10,
        publisherId: 10,
        year: 1995,
        pages: 344,
        authors: [
          {
            id: 12,
            name: "Elizabeth Currid-Halkett",
            description:
              "Spargo clibanus claro vinitor coepi antiquus demonstro. Molestias adstringo ceno thorax spiritus antea in numquam appositus temeritas. Cariosus solum vinitor patria agnosco demoror vicissitudo.",
            pageId: 47,
          },
        ],
      },
      page: {
        id: 45,
        title: "Book The Warhol Economy",
        description:
          "Coaegresco a tandem suffoco. Dens coaegresco sint trado chirographum accedo. Taedium tibi utique.",
        slug: "the-warhol-economy",
        type: "product",
      },
    },
  ],
};
