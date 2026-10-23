import { chromium } from 'playwright'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } })
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
const info = await page.evaluate(() => {
  const span = document.querySelector('header img').parentElement
  const cs = getComputedStyle(span)
  return { tag: span.tagName, className: span.className, bg: cs.backgroundColor }
})
console.log(JSON.stringify(info, null, 2))

// also read the --canvas variable actually resolved on :root
const varVal = await page.evaluate(() => getComputedStyle(document.documentElement).getPropertyValue('--canvas'))
console.log('--canvas var:', varVal)
await browser.close()
