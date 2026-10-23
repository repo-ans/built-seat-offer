import { chromium } from 'playwright'
const SP = process.env.SP
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1920, height: 1000 } })
const errors = []
page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()) })
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' })
await page.waitForTimeout(1500)

const bodyBg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor)
console.log('body bg:', bodyBg)

await page.screenshot({ path: SP + '/match-top.png', clip: { x: 0, y: 0, width: 900, height: 420 } })

await page.evaluate(() => window.scrollTo(0, 300))
await page.waitForTimeout(600)
const headerBg = await page.evaluate(() => getComputedStyle(document.querySelector('header')).backgroundColor)
console.log('header bg scrolled:', headerBg)
await page.screenshot({ path: SP + '/match-scrolled.png', clip: { x: 0, y: 0, width: 900, height: 200 } })

await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
await page.waitForTimeout(600)
await page.screenshot({ path: SP + '/match-footer.png', clip: { x: 0, y: 0, width: 900, height: 300 } })

console.log('CONSOLE_ERRORS:', JSON.stringify(errors))
await browser.close()
