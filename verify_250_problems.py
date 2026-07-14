import asyncio
from playwright.async_api import async_playwright

async def verify():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Test problem 250 loading
        await page.goto("http://localhost:5175/editor.html?id=250")
        await page.wait_for_selector("h1")
        title = await page.inner_text("h1")
        print(f"Loaded problem 250 title: {title}")

        # Take a screenshot to verify testcases render
        await page.screenshot(path="verify_prob_250.png")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(verify())
