import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Test Home Page (Verify 150 count)
        await page.goto("http://localhost:5175/index.html")
        await page.wait_for_selector(".problem-row")

        # Check if the text "Showing first 20 problems" is present or update it?
        # Actually I updated the main.ts to slice 0, 20.
        # Let's check the problem list drawer in the editor.

        await page.goto("http://localhost:5175/editor.html?id=150")
        await page.wait_for_selector(".procode-main-header")

        # Open Problem List Drawer
        await page.click("button:has-text('Problem List')")
        await asyncio.sleep(1)

        # Count items in drawer
        items = await page.query_selector_all(".problem-item-row")
        print(f"Total problems in drawer: {len(items)}")

        await page.screenshot(path="drawer_150_problems.png")

        # Verify specific problem 150
        title = await page.inner_text("h1")
        print(f"Current Problem Title: {title}")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
