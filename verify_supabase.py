import asyncio
from playwright.async_api import async_playwright

async def verify_auth_page():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        try:
            # When unauthenticated, App should redirect to Auth screen
            print("Navigating to http://localhost:5173/editor.html (should show Auth)")
            await page.goto('http://localhost:5173/editor.html')
            await page.wait_for_timeout(3000)

            # Check for Auth component markers
            auth_heading = await page.query_selector('h2:has-text("Welcome Back")')
            if auth_heading:
                print("Auth screen correctly displayed for unauthenticated user.")
            else:
                print("Auth screen NOT found. Check redirection logic.")

            await page.screenshot(path='auth_screen_verification.png')
            print("Auth screen screenshot saved.")

            # Check Home page state for unauthenticated user
            print("Navigating to http://localhost:5173/ (should show Sign In button)")
            await page.goto('http://localhost:5173/')
            await page.wait_for_timeout(2000)

            signin_btn = await page.query_selector('button:has-text("Sign In")')
            if signin_btn:
                print("Sign In button found on Home page for guest user.")

            await page.screenshot(path='home_guest_verification.png')

        except Exception as e:
            print(f"Error during verification: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_auth_page())
