import { test, expect } from "@playwright/test";
import { closeCautionModal } from "./helpers/close-caution-modal";
import { stepMatchScreenshot } from "./helpers/step-match-screenshot";
import { stepNoAccessibilityViolations } from "./helpers/step-no-accessibility-violations";

test.describe("Product", () => {
  test("should display page elements", async ({ page, isMobile }) => {
    await page.goto("/product/the-goldfinch");
    await closeCautionModal(page);

    const content = page.getByTestId("content");

    await test.step("should show meta title", async () => {
      await expect(page).toHaveTitle("Book The Goldfinch");
    });

    await test.step("should show categories", async () => {
      if (isMobile) {
        await expect(content.getByText("Categories")).toBeHidden();
      } else {
        await expect(content.getByText("Categories")).toBeVisible();
        await expect(
          content.getByRole("listitem").filter({ hasText: /Horror/ })
        ).toBeVisible();
        await expect(
          content.getByRole("listitem").filter({ hasText: /Romance/ })
        ).toBeVisible();
      }
    });

    await test.step("should show heading", async () => {
      await expect(
        page.getByRole("heading", { level: 1, name: "The Goldfinch" })
      ).toBeVisible();
    });

    await test.step("should show author", async () => {
      await expect(
        page.getByRole("link").filter({ hasText: /^Donna Tartt$/ })
      ).toBeVisible();
    });

    await test.step("should show synopses", async () => {
      await expect(
        page.getByRole("heading", { level: 2 }).filter({ hasText: /Synopses/ })
      ).toBeVisible();
    });

    await test.step("should show product details", async () => {
      await expect(
        page
          .getByRole("heading", { level: 2 })
          .filter({ hasText: /Product Details/ })
      ).toBeVisible();
    });

    await test.step("should show products by author", async () => {
      await expect(
        page
          .getByRole("heading", { level: 3 })
          .filter({ hasText: /Arts and Entertainment Books You May Also Like/ })
      ).toBeVisible();
      await expect(
        content
          .locator("_react=ProductListItemComponent")
          .filter({ hasText: /The Secret History/ })
      ).toHaveCount(1);
      await expect(
        page
          .getByRole("link")
          .filter({ hasText: "See all books from Arts and Entertainment" })
      ).toBeVisible();
    });

    await test.step("should show products from category", async () => {
      await expect(
        page
          .getByRole("heading", { level: 3 })
          .filter({ hasText: /Books Also Written by Donna Tartt/ })
      ).toBeVisible();
      await expect(
        await content.locator("_react=ProductListItemComponent").count()
      ).toBeGreaterThan(1);
      await expect(
        page.getByRole("link").filter({ hasText: "See all books by Donna Tartt" })
      ).toBeVisible();
    });

    const addToCartComponent = page.getByTestId("add-to-cart-component");
    await test.step("should show price", async () => {
      await expect(addToCartComponent).toHaveText(/^\$([0-9]+)\.([0-9]{2})(.*)/);
    });

    await test.step("should show add to cart", async () => {
      await expect(
        addToCartComponent.getByRole("button", { name: "ADD TO CART" })
      ).toBeVisible();
    });

    await test.step("should show shipping", async () => {
      await expect(addToCartComponent.getByText("Ships in")).toBeVisible();
    });

    await stepMatchScreenshot(test, page);
    await stepNoAccessibilityViolations(test, page);
  });

  test("shouldn't display products by author", async ({ page }) => {
    await page.goto("/product/the-martian");
    await closeCautionModal(page);

    await expect(
      page
        .getByRole("link")
        .filter({ hasText: "See all books from Arts and Entertainment" })
    ).toBeHidden();

    await stepMatchScreenshot(test, page);
    await stepNoAccessibilityViolations(test, page);
  });
});
