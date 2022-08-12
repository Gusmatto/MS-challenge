class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto("https://www.mercadolibre.com.ar/");
    }
}

module.exports = BasePage;