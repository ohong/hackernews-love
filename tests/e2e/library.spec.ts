import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { posts } from "../../data/posts";

test("search, category filters, empty states and sorting compose", async ({
  page,
}) => {
  await page.goto("/");
  const items = page.locator(".collection-item");
  await expect(items).toHaveCount(posts.length);
  await page
    .getByRole("button", { name: "Developer tools", exact: true })
    .click();
  await expect(items).toHaveCount(
    posts.filter((p) => p.category === "Developer tools").length,
  );
  await page.getByRole("searchbox", { name: "Search stories" }).fill("figma");
  await expect(items).toHaveCount(1);
  await expect(items).toContainText("Figma");
  await expect(page).toHaveURL(/q=figma/);
  await page.getByRole("searchbox").fill("this-does-not-exist");
  await expect(items).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "That story isn’t on this shelf. Yet." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Browse all stories" }).click();
  await expect(items).toHaveCount(posts.length);
  await page
    .getByRole("combobox", { name: "Sort stories" })
    .selectOption("newest");
  await expect(items.first()).toContainText("OpenClaw");
  await page.getByRole("combobox").selectOption("az");
  await expect(items.first()).toContainText("Airbnb");
  await page.getByRole("button", { name: "List view", exact: true }).click();
  await expect(page.locator(".collection-items")).toHaveClass(/list/);
});

test("shelf selection and surprise reveal the selected volume", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("button", { name: "Preview Figma", exact: true })
    .click();
  await expect(
    page.getByRole("link", { name: "Open the story", exact: true }),
  ).toHaveAttribute("href", "/stories/figma");
  await page.getByRole("button", { name: "Surprise me" }).click();
  await expect(
    page.getByRole("button", { name: "Preview Figma", exact: true }),
  ).toHaveAttribute("aria-pressed", "false");
  const visible = await page.locator(".shelf-scroll").evaluate((rail) => {
    const selected = rail.querySelector(".selected")!.getBoundingClientRect();
    const bounds = rail.getBoundingClientRect();
    return (
      selected.left >= bounds.left - 1 && selected.right <= bounds.right + 1
    );
  });
  expect(visible).toBe(true);
  await page.getByRole("link", { name: "Open the story", exact: true }).click();
  await expect(page).toHaveURL(/\/stories\//);
  await expect(
    page.getByRole("navigation", { name: "In this story" }),
  ).toBeVisible();
});

test("reading list persists and stays synchronized between pages", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Save Dropbox", exact: true }).click();
  await page.getByRole("button", { name: /^Saved/ }).click();
  await expect(page.locator(".collection-item")).toHaveCount(1);
  await page.reload();
  await expect(page.locator(".collection-item")).toHaveCount(1);
  await page
    .getByRole("link", {
      name: "Read Dropbox: The cloud in a box",
      exact: true,
    })
    .click();
  await expect(
    page.getByRole("button", { name: "Unsave Dropbox", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page
    .getByRole("button", { name: "Unsave Dropbox", exact: true })
    .click();
  await page.goBack();
  await expect(
    page.getByRole("heading", { name: "Keep a little curiosity for later." }),
  ).toBeVisible();
});

test("Back restores a filtered reading journey", async ({ page }) => {
  await page.goto("/?category=Developer+tools&q=figma&view=list#collection");
  await expect(page.locator(".collection-item")).toHaveCount(1);
  await page
    .getByRole("link", {
      name: "Read Figma: A canvas without walls",
      exact: true,
    })
    .click();
  await expect(page).toHaveURL(/\/stories\/figma/);
  await page.goBack();
  await expect(page.getByRole("searchbox")).toHaveValue("figma");
  await expect(page.locator(".collection-items")).toHaveClass(/list/);
  await expect(page.locator(".collection-item")).toHaveCount(1);
});

test("all story routes have quotes, source links, context and a next chapter", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const post of posts) {
    const response = await page.goto(`/stories/${post.id}`);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      post.coverTitle,
    );
    await expect(page.locator(".story-quote")).toHaveCount(post.quotes.length);
    await expect(page.locator("#what-happened .source-link")).toHaveAttribute(
      "href",
      post.outcomeSource.url,
    );
    await expect(page.locator("#the-other-side")).toContainText(post.nuance);
    await expect(page.getByRole("link", { name: "Next story" })).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://hackernews.love/stories/${post.id}`,
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
  expect(errors).toEqual([]);
});

test("theme persists and reduced motion removes transforms on interaction", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce", colorScheme: "light" });
  await page.goto("/");
  await page
    .getByRole("button", { name: "Toggle light or dark theme" })
    .click();
  await expect(page.locator("html")).toHaveClass("dark");
  await page.reload();
  await expect(page.locator("html")).toHaveClass("dark");
  expect(
    await page
      .locator(".book-object")
      .first()
      .evaluate((el) => getComputedStyle(el).transitionDuration),
  ).toBe("0s");
  expect(
    await page
      .locator(".book-spine")
      .first()
      .evaluate((el) => getComputedStyle(el).transitionDuration),
  ).toBe("0s");
});

test("unavailable and malformed storage do not break reading or saving", async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem("hn-love-saved", "broken-json");
    Storage.prototype.setItem = () => {
      throw new DOMException("Storage unavailable", "SecurityError");
    };
  });
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await page.getByRole("button", { name: "Save Dropbox", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Unsave Dropbox", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("button", { name: /^Saved/ }).click();
  await expect(page.locator(".collection-item")).toHaveCount(1);
  await page
    .getByRole("button", { name: "Toggle light or dark theme" })
    .click();
  await expect(page.locator("html")).toHaveClass("dark");
  expect(errors).toEqual([]);
});

test("normal scrolling, keyboard reading and 320px reflow work", async ({
  page,
  isMobile,
}) => {
  await page.goto("/stories/dropbox");
  await page.evaluate(() => window.scrollTo(0, 230));
  expect(await page.evaluate(() => Math.round(window.scrollY))).toBe(230);
  await page.waitForTimeout(250);
  expect(await page.evaluate(() => Math.round(window.scrollY))).toBe(230);
  if (!isMobile) {
    await page.keyboard.press("ArrowDown");
    await page.waitForTimeout(200);
    const position = await page.evaluate(() => window.scrollY);
    expect(position).toBeGreaterThan(230);
    expect(position).toBeLessThan(400);
  }
  await page.setViewportSize({ width: 320, height: 800 });
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth <= 320),
  ).toBe(true);
  await page.goto("/");
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth <= 320),
  ).toBe(true);
  await page.screenshot({
    path: `test-results/mobile-320-${test.info().project.name}.png`,
    fullPage: true,
  });
});

test("keyboard users can select a book without animated navigation", async ({
  page,
}) => {
  await page.goto("/");
  const book = page.getByRole("button", {
    name: "Preview GitHub",
    exact: true,
  });
  await book.focus();
  await page.keyboard.press("Enter");
  await expect(book).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator(".shelf-books")).toHaveAttribute(
    "data-pointer-selection",
    "false",
  );
});

test("light and dark collection and story pass WCAG AA automated checks", async ({
  page,
}) => {
  for (const path of ["/", "/stories/dropbox"]) {
    await page.goto(path);
    for (const dark of [false, true]) {
      await page.evaluate(
        (value) => document.documentElement.classList.toggle("dark", value),
        dark,
      );
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      expect(
        results.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => n.target),
        })),
      ).toEqual([]);
    }
  }
});

test("missing stories, metadata and assets resolve correctly", async ({
  page,
  request,
}) => {
  expect(
    (await page.goto("/stories/this-story-does-not-exist"))?.status(),
  ).toBe(404);
  await expect(
    page.getByRole("link", { name: "Back to the collection" }),
  ).toBeVisible();
  expect((await request.get("/opengraph-image")).status()).toBe(200);
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect((await sitemap.text()).match(/<url>/g)?.length).toBe(posts.length + 1);
  expect((await request.get("/art/cloud-archive.webp")).status()).toBe(200);
});

test("readable content and story links work without JavaScript", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("http://localhost:3007/", { waitUntil: "domcontentloaded" });
  await expect(page.locator(".collection-item")).toHaveCount(posts.length);
  await page
    .getByRole("link", {
      name: "Read Dropbox: The cloud in a box",
      exact: true,
    })
    .click();
  await expect(
    page.getByRole("heading", {
      name: "The other side of the story",
      exact: true,
    }),
  ).toBeVisible();
  await context.close();
});
