import { test, expect } from "@playwright/test";
import { closeCautionModal } from "./helpers/close-caution-modal";
import { stepMatchScreenshot } from "./helpers/step-match-screenshot";
import { stepNoAccessibilityViolations } from "./helpers/step-no-accessibility-violations";

test.describe("Not Found Page", () => {
  test("should display not found page", async ({ page }) => {
    await page.goto("/asdf");
    await closeCautionModal(page);
    await expect(
      page.getByRole("heading", { level: 1, name: "Not Found" })
    ).toBeVisible();
    await stepMatchScreenshot(test, page);
    await stepNoAccessibilityViolations(test, page);
  });
});
