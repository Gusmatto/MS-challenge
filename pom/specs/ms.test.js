const { chromium } = require('playwright');
const BasePage = require('../models/BasePage');
const HomePage = require('../models/HomePage');
const ProductListPage = require('../models/ProductListPage');

describe('User should be able to search cars by filters', () => {
    jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let basePage = null;
    let homePage = null;
    let productListPage = null;
    let dataSet = {
        productInput: 'automoviles',
        priceInput: '1999999',
        finalMessage: 'Your search of cars in Córdoba with prices below 2 millions pesos returned '
    }

    beforeAll(async() => {
        browser = await chromium.launch({ headless: false, slowMo: 1000 });
        context = await browser.newContext();
        page = await context.newPage();
        basePage = new BasePage(page);
        homePage = new HomePage(page);
        productListPage = new ProductListPage(page);
        await basePage.navigate();
    });

    afterAll(async() => {
        await context.close();
        await browser.close();
    });

    it('Should be able to search cars', async() => {
        await homePage.typeSearchTxt(dataSet.productInput);
        await productListPage.findPriceBelowTwoMillions(dataSet.priceInput);
        await productListPage.filterByCordoba();
        await productListPage.chooseAscOrder();
        console.log(`${dataSet.finalMessage}${await productListPage.getNumberOfResults()}`);
    });
});