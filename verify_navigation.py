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

            # Check for sidebar on desktop
            sidebar = await page.query_selector('aside.hidden.md\\:flex')
            if sidebar:
                print("Desktop sidebar found.")
            else:
                print("Desktop sidebar NOT found!")

            # Check if footer is hidden on desktop
            footer = await page.query_selector('footer.md\\:hidden')
            if footer:
                print("Bottom footer is hidden on desktop as expected.")
            else:
                print("Bottom footer visibility issue on desktop.")

            # Check for transparent scrollbar (no visual way, but can check style)
            scrollbar_hidden = await page.evaluate("getComputedStyle(document.documentElement).scrollbarWidth === 'none'")
            print(f"Scrollbar hidden state: {scrollbar_hidden}")

            await page.screenshot(path='desktop_layout_verification.png')
            print("Desktop layout screenshot saved.")

            # Test mobile view
            print("Switching to mobile view...")
            await page.set_viewport_size({'width': 375, 'height': 812})
            await page.wait_for_timeout(1000)

            mobile_footer = await page.query_selector('footer')
            if mobile_footer:
                print("Mobile bottom navigation found.")

            await page.screenshot(path='mobile_layout_verification.png')
            print("Mobile layout screenshot saved.")

        except Exception as e:
            print(f"Error during verification: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_ui())
