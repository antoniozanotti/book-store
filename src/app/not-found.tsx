import type { Metadata } from "next";
import { NotFoundPageContainer } from "@/domain/layout/containers/not-found-page-container";

export function generateMetadata(): Metadata {
  return {
    title: "Emmanuel's Book Store: Page Not Found",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, officia. Aperiam, quasi. Rem rerum corporis at aspernatur aperiam iusto? Fugit ipsum odit eos, repudiandae officiis id vero ipsam temporibus voluptates",
  };
}

export default async function NotFound() {
  return (
    <NotFoundPageContainer />
  );
}
