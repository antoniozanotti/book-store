import { render, screen } from "@/lib/test";
import { getSlug } from "../get-slug";

describe("getSlug", () => {
  it("should return slug", async () => {
    const slug = getSlug("Antônio Ricardo Marcon,Zanotti123");
    
    expect(slug).toMatchSnapshot();
  });
});