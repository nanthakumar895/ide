import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Mobile view
        page = await browser.new_page(viewport={'width': 375, 'height': 812}, is_mobile=True)
        await page.goto('http://localhost:5175/')
        await page.wait_for_timeout(5000)
        await page.screenshot(path='mobile_v3_home.png')

        # Desktop view
        page_desktop = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page_desktop.goto('http://localhost:5175/')
        await page_desktop.wait_for_timeout(5000)
        await page_desktop.screenshot(path='desktop_v3_home.png')

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
