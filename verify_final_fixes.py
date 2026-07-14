import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Test Dark Mode (Default)
        await page.goto("http://localhost:5175/editor.html?id=1")
        await page.wait_for_selector(".test-results-panel")
        await page.screenshot(path="final_dark_mode.png")

        # Toggle to Light Mode
        await page.click("button[title='Toggle Theme']")
        await asyncio.sleep(0.5)
        await page.screenshot(path="final_light_mode.png")

        # Click Result tab in light mode to check contrast
        await page.click("button:has-text('Result')")
        await asyncio.sleep(0.5)
        await page.screenshot(path="final_light_mode_result.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
