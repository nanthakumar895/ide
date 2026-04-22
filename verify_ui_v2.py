import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Mobile view
        page = await browser.new_page(viewport={'width': 375, 'height': 812}, is_mobile=True)
        await page.goto('http://localhost:5175/')
        await page.wait_for_timeout(3000)
        await page.screenshot(path='mobile_ui_final_check_v2.png')

        # Click on Testcase tab in footer - search for button with text "Testcase"
        buttons = await page.query_selector_all('footer button')
        for btn in buttons:
            text = await btn.inner_text()
            if "Testcase" in text:
                await btn.click()
                break

        await page.wait_for_timeout(1000)
        await page.screenshot(path='mobile_testcase_tab_final_v2.png')

        # Desktop view
        page_desktop = await browser.new_page(viewport={'width': 1440, 'height': 900})
        await page_desktop.goto('http://localhost:5175/')
        await page_desktop.wait_for_timeout(3000)
        await page_desktop.screenshot(path='desktop_ui_final_check_v2.png')

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
