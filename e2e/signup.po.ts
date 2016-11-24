import { browser, element, by, ExpectedConditions } from 'protractor';
export class SignUpPage {
  navigateTo() {
    return browser.get('/app/registration');
  }

  fillForm({name, email, password, password_confirmation}) {
    let form = element(by.tagName('form'));
    let name_input = element(by.css('input[name="name"]'))
    let email_input = element(by.css('input[name="email"]'))
    let password_input = element(by.css('input[name="password"]'))
    let password_confirmation_input = element(by.css('input[name="password_confirmation"]'))

    name_input.sendKeys(name);
    email_input.sendKeys(email);
    password_input.sendKeys(password);
    password_confirmation_input.sendKeys(password_confirmation);
  }

  submit() {

    let button = element(by.tagName('button'))
    button.click()

  }

  hasError(str) {
    expect(element(by.css('.alert-danger')).getText()).toContain(str)
  }

}
