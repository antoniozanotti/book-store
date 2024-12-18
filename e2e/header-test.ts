import { test, expect } from "@playwright/test";
import { closeCautionModal } from "./helpers/close-caution-modal";

test.describe("Header", () => {
  
  test("should display logo", async ({ page }) => {
    await page.goto("/");
    await closeCautionModal(page);
    const header = page.getByTestId("header");

    await expect(header.locator("_react=EmmanuelsBookStoreImage").first()).toBeVisible;
  });
  
});
