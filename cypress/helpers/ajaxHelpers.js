import { ajaxLocators } from '../locators/ajaxLocators';
import { DEFAULT_TIMEOUT } from '../constants/testSettings';

export const waitForAjaxAndClick = () => {
  cy.log('→ Waiting for loader');
  cy.get(ajaxLocators.loader, { timeout: DEFAULT_TIMEOUT }).should('not.be.visible');

  cy.log('→ Clicking the button');
  cy.get(ajaxLocators.clickMeBtn, { timeout: DEFAULT_TIMEOUT }).should('be.visible').click();
};

export const assertModalAndClose = () => {
  cy.log('→ Assert modal title contains "Well Done"');
  cy.get(ajaxLocators.modalTitle).should('contain.text', 'Well Done');

  cy.log('→ Click the modal close button');
  cy.get(ajaxLocators.modalCloseBtn).click();
};
