import asyncio
from playwright.async_api import async_playwright

async def verify_auth_ui():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        try:
            print("Navigating to editor.html...")
            await page.goto('http://localhost:5173/editor.html')
            await page.wait_for_timeout(5000)

            # Check for Clerk UI elements (usually within a clerk-branded container or specific classes)
            clerk_root = await page.query_selector('.cl-root')
            if clerk_root:
                print("Clerk Auth UI detected.")
            else:
                # Fallback check for the "ProCode IDE" heading in our custom wrapper
                heading = await page.query_selector('h2:has-text("ProCode IDE")')
                if heading:
                    print("Clerk Auth wrapper detected.")
                else:
                    print("Auth UI NOT detected!")

            await page.screenshot(path='clerk_auth_verification.png')
            print("Clerk Auth screenshot saved.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_auth_ui())
