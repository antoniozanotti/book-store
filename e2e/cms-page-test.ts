import { test, expect } from "@playwright/test";
import { closeCautionModal } from "./helpers/close-caution-modal";
import { stepMatchScreenshot } from "./helpers/step-match-screenshot";
import { stepNoAccessibilityViolations } from "./helpers/step-no-accessibility-violations";

test.describe("CMS Page", () => {
  test("should display page elements", async ({ page }) => {
    await page.goto("/contact-us");
    await closeCautionModal(page);
    
    await test.step("should show meta title", async () => {
      await expect(page).toHaveTitle("Contact Us");
    });
    
    await test.step("should show heading", async () => {
      await expect(
        page.getByRole("heading", { level: 1, name: "Contact Us" })
      ).toBeVisible();
    });
    
    await stepMatchScreenshot(test, page);
    await stepNoAccessibilityViolations(test, page);
  });
});
