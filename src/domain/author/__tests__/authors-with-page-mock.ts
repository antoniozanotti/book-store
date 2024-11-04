import { AuthorWithPagePrisma } from "../types/author-prisma";

export const authorsWithPageMock: AuthorWithPagePrisma[] = [
  {
    id: 1,
    name: "Kevin Kwan",
    description:
      "Arbor color cras trepide commodi illo dolores porro harum. Versus error maxime substantia conor animadverto traho spiculum sed. Vulgivagus amo supra solio correptius strues corroboro speculum.",
    pageId: 18,
    page: {
      id: 18,
      title: "Kevin Kwan's Books",
      description:
        "Arbor color cras trepide commodi illo dolores porro harum. Versus error maxime substantia conor animadverto traho spiculum sed. Vulgivagus amo supra solio co...",
      slug: "kevin-kwan",
      type: "author",
    },
  },
  {
    id: 2,
    name: "Julia Cameron",
    description:
      "Tero versus aliquid tempus argumentum blanditiis angulus quibusdam baiulus quia. Corporis coniecto amet ab laborum conculco iusto vigilo. Accusamus adhuc voluptate virtus teneo cedo.",
    pageId: 21,
    page: {
      id: 21,
      title: "Julia Cameron's Books",
      description:
        "Tero versus aliquid tempus argumentum blanditiis angulus quibusdam baiulus quia. Corporis coniecto amet ab laborum conculco iusto vigilo. Accusamus adhuc vol...",
      slug: "julia-cameron",
      type: "author",
    },
  },
  {
    id: 3,
    name: "David Byrne",
    description:
      "Terminatio vero terra tot. Ara provident adopto facere advenio adiuvo bis teres apparatus. Arbustum sulum absens asper cerno arguo.",
    pageId: 24,
    page: {
      id: 24,
      title: "David Byrne's Books",
      description:
        "Terminatio vero terra tot. Ara provident adopto facere advenio adiuvo bis teres apparatus. Arbustum sulum absens asper cerno arguo.",
      slug: "david-byrne",
      type: "author",
    },
  },
  {
    id: 4,
    name: "Donna Tartt",
    description:
      "Mollitia alius uter. Auditor deleo vacuus amicitia virtus super. Vesica sto derelinquo uxor deserunt succurro caveo una.",
    pageId: 27,
    page: {
      id: 27,
      title: "Donna Tartt's Books",
      description:
        "Mollitia alius uter. Auditor deleo vacuus amicitia virtus super. Vesica sto derelinquo uxor deserunt succurro caveo una.",
      slug: "donna-tartt",
      type: "author",
    },
  },
  {
    id: 5,
    name: "Jeremy McCarter",
    description:
      "Verbum harum ex argumentum vehemens alienus degero animus aeternus. Crapula alius verus curatio texo. Suggero ambitus tepesco patria certus.",
    pageId: 30,
    page: {
      id: 30,
      title: "Jeremy McCarter's Books",
      description:
        "Verbum harum ex argumentum vehemens alienus degero animus aeternus. Crapula alius verus curatio texo. Suggero ambitus tepesco patria certus.",
      slug: "jeremy-mccarter",
      type: "author",
    },
  },
  {
    id: 6,
    name: "Lin-Manuel Miranda",
    description:
      "Damno sortitus trucido atque auctor bis maiores abundans. Officiis impedit dapifer expedita universe sollicito derideo suus. Arbustum comminor taedium aureus mollitia suadeo spiritus.",
    pageId: 31,
    page: {
      id: 31,
      title: "Lin-Manuel Miranda's Books",
      description:
        "Damno sortitus trucido atque auctor bis maiores abundans. Officiis impedit dapifer expedita universe sollicito derideo suus. Arbustum comminor taedium aureus...",
      slug: "linmanuel-miranda",
      type: "author",
    },
  },
];
