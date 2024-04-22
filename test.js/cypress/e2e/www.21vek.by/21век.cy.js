describe ('Тестирование формы авторизации www.21vek.by', function () {

    it('Позитивный тест на верный логин и пароль', function () {
        cy.visit('https://www.21vek.by/');
        cy.get('.AgreementCookie_buttonsNew__GDODK > .Button-module__blue-primary > .Button-module__buttonText').click();
        cy.get('.styles_userToolsToggler__c2aHe').click();
        cy.get('[data-testid="loginButton"] > .Button-module__buttonText > span').click();
        cy.get('[data-testid="login-form-email"]').type('Введите правильный логин');
        cy.get('[data-testid="login-form-password"]').type('Введите правильный пароль');
        cy.get('[data-testid="loginSubmit"] > .Button-module__buttonText').click();
    })

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://www.21vek.by/');
        cy.get('.AgreementCookie_buttonsNew__GDODK > .Button-module__blue-primary > .Button-module__buttonText').click();
        cy.get('.styles_userToolsToggler__c2aHe').click();
        cy.get('[data-testid="loginButton"] > .Button-module__buttonText > span').click();
        cy.get('[data-testid="login-form-email"]').type('Введите правильный логин');
        cy.get('.FieldWrapper-module__label > :nth-child(2) > .Button-module__button > .Button-module__buttonText').click();
        cy.get('#reset-password-email').type('Введите почту');
        cy.get('.Form-module__submitContainer > .Button-module__button > .Button-module__buttonText').click();
        cy.get('.styles_successTitle__YoP7v').contains('Письмо отправлено');
        cy.get('[data-testid="close-popup-icon"]').click();
    })
        
    it('Проверка на негативный кейс авторизации', function () {
        cy.visit('https://www.21vek.by/');
        cy.get('.AgreementCookie_buttonsNew__GDODK > .Button-module__blue-primary > .Button-module__buttonText').click();
        cy.get('.styles_userToolsToggler__c2aHe').click();
        cy.get('[data-testid="loginButton"] > .Button-module__buttonText > span').click();
        cy.get('[data-testid="login-form-email"]').type('Введите правильный логин');
        cy.get('[data-testid="login-form-password"]').type('Введите неправильный пароль');
        cy.get('[data-testid="loginSubmit"] > .Button-module__buttonText').click();
        cy.get('.styles_errorText__LEN7M').contains('Неправильный пароль');
    })

    it('Проверка на негативный кейс авторизации', function () {
        cy.visit('https://www.21vek.by/');
        cy.get('.AgreementCookie_buttonsNew__GDODK > .Button-module__blue-primary > .Button-module__buttonText').click();
        cy.get('.styles_userToolsToggler__c2aHe').click();
        cy.get('[data-testid="loginButton"] > .Button-module__buttonText > span').click();
        cy.get('[data-testid="login-form-email"]').type('Введите неправильный логин');
        cy.get('[data-testid="login-form-password"]').type('Введите правильный пароль');
        cy.get('[data-testid="loginSubmit"] > .Button-module__buttonText').click();
        cy.get('.styles_errorText__LEN7M').contains('Нет такого аккаунта');
    })
        
    it('Проверка на негативный кейс валидации', function () {
        cy.visit('https://www.21vek.by/');
        cy.get('.AgreementCookie_buttonsNew__GDODK > .Button-module__blue-primary > .Button-module__buttonText').click();
        cy.get('.styles_userToolsToggler__c2aHe').click();
        cy.get('[data-testid="loginButton"] > .Button-module__buttonText > span').click();
        cy.get('[data-testid="login-form-email"]').type('Ввод логина без @');
        cy.get('[data-testid="login-form-password"]').type('Введите правильный пароль');
        cy.get('[data-testid="loginSubmit"] > .Button-module__buttonText').click();
        cy.get('.ErrorMessage-module__message').contains('Неправильный формат электронной почты');
    }) 
    
    it('Проверка покупки товаров на сайте', function () {
        cy.visit('https://www.21vek.by/');
        cy.get('.AgreementCookie_buttonsNew__GDODK > .Button-module__blue-primary > .Button-module__buttonText').click();
        cy.get('.styles_userToolsToggler__c2aHe').click();
        cy.get('[data-testid="loginButton"] > .Button-module__buttonText > span').click();
        cy.get('[data-testid="login-form-email"]').type('Введите правильный логин');
        cy.get('[data-testid="login-form-password"]').type('Введите правильный пароль');
        cy.get('[data-testid="loginSubmit"] > .Button-module__buttonText').click();
        cy.get('.styles_promoItems__VAObM > :nth-child(7) > a').click();
        cy.get('.headerCartBox').click();
        cy.contains('Оформить заказ').should('not.be.disabled');
    })
})









