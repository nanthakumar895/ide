import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()

        # Test Home Page Desktop Header
        page = await browser.new_page()
        await page.goto("http://localhost:5175/index.html")
        await page.wait_for_selector(".home-header")
        await page.screenshot(path="home_desktop_header_redesign.png")

        # Test Theme Toggle on Home
        await page.click("#home-theme-toggle")
        await asyncio.sleep(0.5)
        await page.screenshot(path="home_light_mode.png")

        # Test Editor Header Mobile (Run/Submit removal)
        mobile_context = await browser.new_context(
            viewport={'width': 375, 'height': 812},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
        )
        mobile_page = await mobile_context.new_page()
        await mobile_page.goto("http://localhost:5175/editor.html?id=1")
        await mobile_page.wait_for_selector("header")
        await mobile_page.screenshot(path="editor_mobile_header_no_run.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
