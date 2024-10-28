import { test, expect } from "@playwright/test";
import { closeCautionModal } from "./helpers/close-caution-modal";
import { stepMatchScreenshot } from "./helpers/step-match-screenshot";
import { stepNoAccessibilityViolations } from "./helpers/step-no-accessibility-violations";

test.describe("Home", () => {
  test("should display page elements", async ({ page }) => {
    await page.goto("/");
    await closeCautionModal(page);

    await test.step("should display new release books", async () => {
      const heading = page.getByRole("heading", { name: "New Release Books" });
      await expect(heading).toBeVisible();

      const products = page.locator("_react=ProductListItemComponent");
      await expect(products).toHaveCount(6);

      await stepMatchScreenshot(test, page);
      await stepNoAccessibilityViolations(test, page);
    });

    await test.step("should display top categories", async () => {
      const heading = page.getByRole("heading", {
        name: "Explore Our Top Categories",
      });
      await expect(heading).toBeVisible();

      const categories = page.locator("_react=CategoryCardComponent");
      await expect(categories).toHaveCount(16);
    });

    await test.step("should display featured authors", async () => {
      const heading = page.getByRole("heading", { name: "Featured Authors" });
      await expect(heading).toBeVisible();

      const authors = page.locator("_react=AuthorCardComponent");
      await expect(authors).toHaveCount(6);
    });
  });
});
