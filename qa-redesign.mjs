import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const desktop = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const desktopLogs = [];
desktop.on("console", (msg) => { if (["warning", "error"].includes(msg.type())) desktopLogs.push(`${msg.type()}: ${msg.text()}`); });
desktop.on("pageerror", (error) => desktopLogs.push(`pageerror: ${error.message}`));
await desktop.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
await desktop.waitForTimeout(2600);
const canvas = desktop.locator(".hero-system canvas");
const box = await canvas.boundingBox();
if (box) {
  await desktop.mouse.move(box.x + box.width * .62, box.y + box.height * .48);
  await desktop.mouse.down();
  await desktop.mouse.move(box.x + box.width * .42, box.y + box.height * .4, { steps: 10 });
  await desktop.mouse.up();
}
await desktop.screenshot({ path: "/tmp/redesign-desktop-hero.png", fullPage: false });
const desktopMetrics = await desktop.evaluate(() => ({
  title: document.title,
  canvas: document.querySelectorAll("canvas").length,
  oldEmail: document.body.innerText.includes("dzcoding75"),
  newEmail: document.body.innerText.includes("dzikrijombang@gmail.com"),
  overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
  resourcesKB: Math.round(performance.getEntriesByType("resource").reduce((sum, entry) => sum + (entry.transferSize || 0), 0) / 1024),
}));
await desktop.locator("#projects").scrollIntoViewIfNeeded();
await desktop.waitForTimeout(500);
await desktop.locator("#projects").screenshot({ path: "/tmp/redesign-desktop-work.png" });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
const mobileLogs = [];
mobile.on("console", (msg) => { if (["warning", "error"].includes(msg.type())) mobileLogs.push(`${msg.type()}: ${msg.text()}`); });
mobile.on("pageerror", (error) => mobileLogs.push(`pageerror: ${error.message}`));
await mobile.goto("http://127.0.0.1:3000", { waitUntil: "networkidle" });
await mobile.waitForTimeout(900);
await mobile.screenshot({ path: "/tmp/redesign-mobile-hero.png", fullPage: false });
const mobileMetrics = await mobile.evaluate(() => ({
  canvas: document.querySelectorAll("canvas").length,
  posterVisible: getComputedStyle(document.querySelector(".system-poster")).opacity,
  overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
}));
await mobile.locator(".menu-button").click();
await mobile.waitForTimeout(550);
const menuOpen = await mobile.locator(".mobile-menu").evaluate((element) => element.classList.contains("open"));

console.log(JSON.stringify({ desktopMetrics, mobileMetrics, menuOpen, desktopLogs, mobileLogs }, null, 2));
await browser.close();
