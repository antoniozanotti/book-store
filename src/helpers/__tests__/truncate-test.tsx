import { render, screen } from "@/lib/test";
import { truncate } from "../truncate";

describe("truncate", () => {
  it("should truncate text", async () => {
    const value = truncate("Antonio Zanotti", 5);
    expect(value).toMatchSnapshot();
  });

  it("should not truncate text", async () => {
    const value = truncate("Antonio Zanotti", 50);
    expect(value).toMatchSnapshot();
  });
});