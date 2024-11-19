import { it, expect } from 'vitest'
import * as utilities from './index.js'

it("should scrape Craigslist", async () => {
    const url = "https://worcester.craigslist.org/search/apa#search=1~gallery~0~11"
    const stream = await utilities.scrape(url);
    const html = await utilities.stream(stream)
    expect(html).not.toBe("");
})

it("should scrape Zilllow", async () => {
    const url = 'https://www.zillow.com/dover-vt-05356/?searchQueryState=%7B%22pagination%22%3A%7B%7D%2C%22isMapVisible%22%3Atrue%2C%22mapBounds%22%3A%7B%22west%22%3A-72.90286002661134%2C%22east%22%3A-72.76793418432618%2C%22south%22%3A42.93204822841562%2C%22north%22%3A43.002391016542354%7D%2C%22regionSelection%22%3A%5B%7B%22regionId%22%3A59868%2C%22regionType%22%3A7%7D%5D%2C%22filterState%22%3A%7B%22sort%22%3A%7B%22value%22%3A%22globalrelevanceex%22%7D%7D%2C%22isListVisible%22%3Atrue%2C%22mapZoom%22%3A13%7D'
    const stream = await utilities.scrape(url);
    const html = await utilities.stream(stream)
    expect(html).not.toBe("");

})