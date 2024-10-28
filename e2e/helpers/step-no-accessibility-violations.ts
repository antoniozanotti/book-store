import { Page, expect } from "@playwright/test";
import type {
  PlaywrightTestArgs,
  PlaywrightTestOptions,
  PlaywrightWorkerArgs,
  PlaywrightWorkerOptions,
  TestType,
} from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

export async function stepNoAccessibilityViolations(
  test: TestType<
    PlaywrightTestArgs & PlaywrightTestOptions,
    PlaywrightWorkerArgs & PlaywrightWorkerOptions
  >,
  page: Page
) {
  return await test.step("should have no accessibility violations", async () => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    await expect(accessibilityScanResults.violations).toEqual([]);
  });
}
