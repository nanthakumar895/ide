import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        await page.goto("http://localhost:5175/index.html")
        await page.wait_for_selector(".problem-row")

        # Check problem count on home page
        rows = await page.query_selector_all(".problem-row")
        print(f"Total problems on home page: {len(rows)}")

        # Scroll to bottom
        await page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        await asyncio.sleep(1)
        await page.screenshot(path="home_page_250_bottom.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
