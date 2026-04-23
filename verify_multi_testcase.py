import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("http://localhost:5175/editor.html?id=1")
        await page.wait_for_selector(".procode-app")

        # Click the Testcase tab to see multiple cases
        await page.click("button:has-text('Testcase')")
        await asyncio.sleep(1)
        await page.screenshot(path="multi_testcase_selection.png")

        # Simulate running code (mock results for UI verification usually preferred, but here we just check layout)
        await page.screenshot(path="editor_workspace_v3.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
