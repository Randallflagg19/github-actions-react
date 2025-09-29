import { test } from '@playwright/test';
import { MainPage } from '../models/MainPage';

test.describe('Тесты главной страницы', () => {
  let mainPage: MainPage;

  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage();
  });
  test('Проверка отображения элементов навигации хедера', async () => {
    await mainPage.checkElementsVisibility();
  });
  test('Проверка названия элементов навигации хедера', async () => {
    await mainPage.checkElementsText();
  });
  test('Проверка атрибутов href элементов навигации хедера', async () => {
    await mainPage.checkElementsHrefAttribute();
  });
  test('Проверка переключения темы', async () => {
    await test.step('Нажатие иконки переключения темы', async () => {
      await mainPage.clickSwitchThemeIcon();
    });
    await test.step('Проверка смены значения атрибута', async () => {
      await mainPage.checkDataThemeAttribute();
    });
  });
  test(`Проверка стилей со светлой темой`, async () => {
    await test.step('Установка светлой темы', async () => {
      await mainPage.setLightMode();
    });
    await test.step('Скриншотная проверка с активной светлой темой', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });
  test(`Проверка стилей с темной темой`, async () => {
    await test.step('Установка светлой темы', async () => {
      await mainPage.setDarkMode();
    });
    await test.step('Скриншотная проверка с активной темной темой', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});
