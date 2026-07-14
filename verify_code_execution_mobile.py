import asyncio
from playwright.async_api import async_playwright

async def verify_execution():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page(viewport={'width': 375, 'height': 812})

        try:
            print("Navigating to editor.html")
            await page.goto('http://localhost:5173/editor.html')

            await page.wait_for_selector('footer', timeout=60000)
            print("App loaded.")

            run_btn_selector = "footer button:has(svg.lucide-play)"
            await page.wait_for_selector(run_btn_selector, timeout=10000)

            print("Clicking Run button...")
            await page.click(run_btn_selector)

            # Wait for any status indicator to appear
            print("Waiting for any status (max 60s)...")
            # Possible statuses: "Accepted", "Wrong Answer", "Runtime Error", "Compilation Error"
            await page.wait_for_selector('span:has-text("Accepted"), span:has-text("Wrong Answer"), span:has-text("Runtime Error")', timeout=60000)

            status_text = await page.eval_on_selector('span:has-text("Accepted"), span:has-text("Wrong Answer"), span:has-text("Runtime Error")', 'el => el.textContent')
            print(f"Execution finished with status: {status_text}")
            await page.screenshot(path='mobile_execution_final.png')

        except Exception as e:
            print(f"Error: {e}")
            await page.screenshot(path='mobile_execution_debug_error.png')
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(verify_execution())
