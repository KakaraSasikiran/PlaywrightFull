import { expect, test } from "../fixtures/fixture";
import { Google } from "../pages/Google";

test("Handling multiple tabs", async ({ google }) => {
  await google.page.goto("https://www.google.com");
  await expect(google.page).toHaveTitle("Google");
  await google.storeClick();
  await google.page.pause();
});
