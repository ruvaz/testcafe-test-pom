import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import MyNotesPage from '../pages/MyNotesPage'
import CREDENTIALS from '../data/Constants'

fixture('Login feature testing')
    .page`http://testapp.galenframework.com/`


test('User can login using valid credentials', async t => {
    await t
        .click(WelcomePage.loginButton)
        .typeText(LoginPage.userNameField, CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.passwordField, CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(MyNotesPage.pageTitle.exists).ok()
    await t.expect(MyNotesPage.errorMessage.exists).ok()
    await t.expect(LoginPage.errorMessage.innerText).eql('The username or password are incorrecta')

})

// testcafe chrome 'login.test.js'

