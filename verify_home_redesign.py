import asyncio
from playwright.async_api import async_playwright

async def verify_ui():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        try:
            print("Navigating to http://localhost:5173/")
            await page.goto('http://localhost:5173/')
            await page.wait_for_timeout(2000)

            # Take a screenshot of the home page
            await page.screenshot(path='home_redesign_verification.png', full_page=True)
            print("Home page redesign screenshot saved.")

            # Verify Desktop Header
            header = await page.query_selector('header')
            if header:
                print("Desktop header found.")

            # Verify Progress Card
            progress_card = await page.query_selector('.bg-\\[#1a1d23\\]')
            if progress_card:
                print("Progress card UI found.")

            # Test mobile view
            print("Switching to mobile view...")
            await page.set_viewport_size({'width': 375, 'height': 812})
            await page.wait_for_timeout(1000)
            await page.screenshot(path='home_mobile_redesign_verification.png')
            print("Mobile home page screenshot saved.")

            footer = await page.query_selector('footer')
            if footer:
                print("Mobile bottom navigation found.")

        except Exception as e:
            print(f"Error during verification: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_ui())
