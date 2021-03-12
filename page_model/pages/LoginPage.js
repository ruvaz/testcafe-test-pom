import { Selector } from 'testcafe';

class LoginPage {

    constructor(){
        this.userNameField = Selector('input[name="login.username"]')
        this.passwordField = Selector('input[name="login.password"]')
        this.loginButton = Selector('')
        this.errorMessage = Selector('al')

    }
}