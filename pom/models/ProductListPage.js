const BasePage = require('./BasePage');

class ProductListPage extends BasePage {
    constructor(page) {
        super(page);

        // locators 
        this.maximumField = 'input[name="Maximum"]';
        this.cordobaCity = '//*[@id="root-app"]//div[2]/aside/section[2]/div[7]/ul/li[6]/a/span[1]';
        this.orderDropdown = 'text=Más relevantes';
        this.orderByMinorPrice = 'text=Menor precio';
        this.numberOfResults = '.ui-search-search-result__quantity-results';  
    }

    async findPriceBelowTwoMillions(text) {
        await this.page.locator(this.maximumField).first().scrollIntoViewIfNeeded();
        await this.page.click(this.maximumField);
        await this.page.fill(this.maximumField, text);
        await this.page.keyboard.press('Enter');
    }

     async filterByCordoba() {
        await this.page.locator(this.cordobaCity).first().scrollIntoViewIfNeeded();
        await this.page.locator(this.cordobaCity).click();
    }

    async chooseAscOrder() {
        await this.page.click(this.orderDropdown);
        await this.page.click(this.orderByMinorPrice);
    }

    async getNumberOfResults() {
        let results = await this.page.$(this.numberOfResults);
        return await results.innerText();
    }
}

module.exports = ProductListPage;