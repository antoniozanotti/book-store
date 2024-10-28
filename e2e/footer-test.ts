import { test, expect } from "@playwright/test";
import { closeCautionModal } from "./helpers/close-caution-modal";

test.describe("Footer", () => {

  test("should display footer elements", async ({ page }) => {
    await page.goto("/");
    await closeCautionModal(page);

    await test.step("should display copyright", async () => {
      const footer = page.getByTestId("footer");

      await expect(
        footer.getByText(`© ${new Date().getFullYear()} emmanuelsbookstore.com`)
      ).toBeVisible;
    });

    await test.step("should display headings", async () => {
      const headings = ["Stay Connected", "Help", "Explore"];
      const footer = page.getByTestId("footer");

      for (let i = 0; i < headings.length; i++) {
        await expect(
          footer.getByRole("heading", { name: headings[i] })
        ).toBeVisible();
      }
    });

    await test.step("should allow me to navigate the help pages", async () => {
      const footer = page.getByTestId("footer");
      const links = ["Contact Us", "Guarantee", "Shipping", "Privacy", "Terms"];

      for (let i = 0; i < links.length; i++) {
        let link = footer.getByRole("link", { name: links[i] });
        await expect(link).toBeVisible();
        await link.click();
        await expect(
          page.getByRole("heading", { level: 1, name: links[i] })
        ).toBeVisible();
      }
    });

    await test.step("should allow me to navigate the explore pages", async () => {
      const footer = page.getByTestId("footer");
      const links = [
        "Featured Authors",
        "New Release Books",
        "Top Categories",
        "Latest Blog Articles",
        "Publishers",
        "About Us",
      ];

      for (let i = 0; i < links.length; i++) {
        let link = footer.getByRole("link", { name: links[i] });
        await expect(link).toBeVisible();
        await link.click();
        await expect(
          page.getByRole("heading", { level: 1, name: links[i] })
        ).toBeVisible();
      }
    });
  });
  
});
