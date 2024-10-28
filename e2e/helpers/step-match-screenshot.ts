import { Page, expect } from "@playwright/test";
import type {
  PlaywrightTestArgs,
  PlaywrightTestOptions,
  PlaywrightWorkerArgs,
  PlaywrightWorkerOptions,
  TestType,
} from "@playwright/test";

export async function stepMatchScreenshot(
  test: TestType<
    PlaywrightTestArgs & PlaywrightTestOptions,
    PlaywrightWorkerArgs & PlaywrightWorkerOptions
  >,
  page: Page
) {
  return await test.step("should match screenshot", async () => {
    await page.waitForLoadState("domcontentloaded");
    await expect(page).toHaveScreenshot();
  });
}
