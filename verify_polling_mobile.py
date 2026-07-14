import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Test Desktop
        page = await browser.new_page()
        await page.goto("http://localhost:5175/editor.html")
        await page.wait_for_selector(".procode-app")
        await page.screenshot(path="desktop_editor_v2.png")

        # Test Mobile
        mobile_context = await browser.new_context(
            viewport={'width': 375, 'height': 812},
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
        )
        mobile_page = await mobile_context.new_page()
        await mobile_page.goto("http://localhost:5175/editor.html")
        await mobile_page.wait_for_selector("footer")
        await mobile_page.screenshot(path="mobile_footer_v2.png")

        # Click Testcase tab in footer
        await mobile_page.click("button[aria-label='Test Cases and Results']")
        await asyncio.sleep(1)
        await mobile_page.screenshot(path="mobile_testcase_tab_v2.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
