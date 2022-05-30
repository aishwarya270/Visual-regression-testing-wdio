describe("Example", () => {
  beforeEach(async () => {
    await browser.url("https://www.google.com/");
  });

  it("should save some screenshots", async () => {
    // Save a screen
    await browser.saveScreen("examplePaged", { /* some options */ });

    // Save an element
    await browser.saveElement(await $("//div[@class='SDkEP']"));

    // // Save a full page screenshot
    await browser.saveFullPageScreen("fullPage", { /* some options */ });

    // // Save a full page screenshot with all tab executions
    await browser.saveTabbablePage("save-tabbable", { /* some options, use the same options as for saveFullPageScreen */});
  });

  it("should compare successful with a baseline", async () => {
    // Check a screen
    await expect(await browser.checkScreen("examplePaged", { /* some options */})).toEqual(0);

    // Check an element
    // await expect(await (await browser.checkElement(await $("//input[@name='q']"),"firstButtonElement")).toEqual(0)
    await expect(await browser.checkElement(await $("//input[@name='q']"))).toEqual(0);

   // Check a full page screenshot
    await expect(await browser.checkFullPageScreen("fullPage", { /* some options */ })).toEqual(0);

    // Check a full page screenshot with all tab executions
    // await expect( await browser.checkTabbablePage("check-tabbable", {/* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
  });
});
