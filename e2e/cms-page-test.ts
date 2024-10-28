import { test, expect } from "@playwright/test";
import { closeCautionModal } from "./helpers/close-caution-modal";
import { stepMatchScreenshot } from "./helpers/step-match-screenshot";
import { stepNoAccessibilityViolations } from "./helpers/step-no-accessibility-violations";

test.describe("CMS Page", () => {
  test("should display page elements", async ({ page }) => {
    await page.goto("/contact-us");
    await closeCautionModal(page);
    
    const content = page.getByTestId("content");
    
    // Meta title
    await expect(page).toHaveTitle("Contact Us");
    
    // Heading
    await expect(
      page.getByRole("heading", { level: 1, name: "Contact Us" })
    ).toBeVisible();
    
    await stepMatchScreenshot(test, page);
    await stepNoAccessibilityViolations(test, page);
  });
});
