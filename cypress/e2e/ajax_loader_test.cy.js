import { waitForAjaxAndClick, assertModalAndClose } from '../helpers/ajaxHelpers';

describe('AJAX Loader Modal Test', () => {
  beforeEach(() => {
    cy.visit('/Ajax-Loader/index.html');
  });

  it('should wait for loader, click the button and validate modal', () => {
    waitForAjaxAndClick();
    assertModalAndClose();
  });
});
