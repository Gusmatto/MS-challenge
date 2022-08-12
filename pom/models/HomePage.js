const BasePage = require('./BasePage');

class HomePage extends BasePage {
    constructor(page) {
        super(page);

        // locators 
        this.searchField = '#cb1-edit';
    }

    async typeSearchTxt(text) {
        await this.page.click(this.searchField);
        await this.page.fill(this.searchField, text);
        await this.page.keyboard.press('Enter');
    }
}

module.exports = HomePage;