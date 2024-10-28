import { test, expect } from "@playwright/test";
import { closeCautionModal } from "./helpers/close-caution-modal";
import { stepMatchScreenshot } from "./helpers/step-match-screenshot";
import { stepNoAccessibilityViolations } from "./helpers/step-no-accessibility-violations";


test.describe("Author", () => {
  test("should display page elements", async ({ page, isMobile }) => {
    await page.goto("/author/donna-tartt");
    await closeCautionModal(page);

    const content = page.getByTestId("content");

    await test.step("should show meta title", async () => {
      await expect(page).toHaveTitle("Donna Tartt's Books");
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
        page.getByRole("heading", { level: 1, name: "Donna Tartt" })
      ).toBeVisible();
    });

    await test.step("should show product list", async () => {
      await expect(
        content.locator("_react=ProductListItemComponent")
      ).toHaveCount(2);
    });

    await stepMatchScreenshot(test, page);
    await stepNoAccessibilityViolations(test, page);
    
  });
});
