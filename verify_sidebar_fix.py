import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("http://localhost:5175/index.html")
        await page.wait_for_selector(".mock-calendar")

        # Take a specific screenshot of the sidebar
        sidebar = await page.query_selector(".side-content")
        if sidebar:
            await sidebar.screenshot(path="sidebar_fixed_verification.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
