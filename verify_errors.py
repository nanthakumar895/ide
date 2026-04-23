import asyncio
from playwright.async_api import async_playwright

async def check_errors():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Log console errors
        page.on("console", lambda msg: print(f"CONSOLE {msg.type}: {msg.text}"))
        page.on("pageerror", lambda err: print(f"PAGE ERROR: {err}"))

        try:
            print("--- Checking editor.html ---")
            await page.goto('http://localhost:5173/editor.html')
            await page.wait_for_timeout(5000)
            await page.screenshot(path='error_editor_check.png')

            print("\n--- Checking home page ---")
            await page.goto('http://localhost:5173/')
            await page.wait_for_timeout(3000)
            await page.screenshot(path='error_home_check.png')

        except Exception as e:
            print(f"FAILED TO LOAD: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(check_errors())
