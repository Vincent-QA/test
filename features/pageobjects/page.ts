
export default class Page {
    public open (path: string) {
        return browser.url(`https://develop.alliance-warehouse.link/${path}`)
    }
}
