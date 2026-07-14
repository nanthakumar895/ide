import asyncio
from playwright.async_api import async_playwright

async def debug():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Log all network requests and console
        page.on("console", lambda msg: print(f"CONSOLE {msg.type}: {msg.text}"))
        page.on("pageerror", lambda err: print(f"PAGE ERROR: {err}"))
        page.on("requestfailed", lambda req: print(f"REQUEST FAILED: {req.url} - {req.failure}"))

        try:
            print("--- Navigating to editor.html ---")
            # We can't easily sign in in this script without credentials,
            # but we can see if it's stuck on the loader BEFORE or AFTER auth check.
            await page.goto('http://localhost:5173/editor.html')
            await page.wait_for_timeout(10000)
            await page.screenshot(path='stuck_loading_check.png')

            # Check if useSupabase hook or profile sync is throwing errors
            print("Done debugging.")

        except Exception as e:
            print(f"FAILED: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(debug())
