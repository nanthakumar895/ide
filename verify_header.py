import asyncio
from playwright.async_api import async_playwright

async def verify_header():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        # Go to the editor page where the React App (and Header) is rendered
        try:
            print("Navigating to http://localhost:5173/editor.html")
            await page.goto('http://localhost:5173/editor.html')

            print("Waiting for .procode-main-header")
            await page.wait_for_selector('.procode-main-header', timeout=60000)

            # Take a screenshot of the header area
            header = await page.query_selector('.procode-main-header')
            if header:
                await header.screenshot(path='header_redesign_verification.png')
                print("Header screenshot saved as header_redesign_verification.png")
            else:
                print("Header element not found!")

            # Verify basic structure
            left = await page.query_selector('.header-left')
            center = await page.query_selector('.header-center')
            right = await page.query_selector('.header-right')

            if left and center and right:
                print("Basic header layout structure verified.")
            else:
                print(f"Structure check failed: Left: {bool(left)}, Center: {bool(center)}, Right: {bool(right)}")

            # Check for specific buttons
            run_btn = await page.query_selector('.header-run-btn-new')
            submit_btn = await page.query_selector('.header-submit-btn-new')
            prob_list_btn = await page.query_selector('.header-problem-list-btn')

            if run_btn and submit_btn and prob_list_btn:
                print("New action buttons verified.")
            else:
                print(f"Buttons check failed: Run: {bool(run_btn)}, Submit: {bool(submit_btn)}, ProbList: {bool(prob_list_btn)}")

        except Exception as e:
            print(f"Error during verification: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_header())
