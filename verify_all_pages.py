import asyncio
from playwright.async_api import async_playwright

async def verify_pages():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})

        pages = [
            ('profile.html', 'Profile'),
            ('premium.html', 'Premium'),
            ('interview.html', 'Interview'),
            ('store.html', 'Store')
        ]

        try:
            for url, name in pages:
                print(f"Verifying {name} page...")
                await page.goto(f'http://localhost:5173/{url}')
                await page.wait_for_timeout(2000)
                await page.screenshot(path=f'verify_{name.lower()}.png', full_page=True)
                print(f"{name} page screenshot saved.")

                # Check for header
                header = await page.query_selector('header')
                if header:
                    print(f"Header found on {name} page.")

                # Check for footer
                footer = await page.query_selector('footer')
                if footer:
                    print(f"Footer found on {name} page.")

        except Exception as e:
            print(f"Error during verification: {e}")
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_pages())
