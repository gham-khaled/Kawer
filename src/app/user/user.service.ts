import {Injectable, OnInit} from "@angular/core";
import {Auth} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class UserService  {
  user = null
  isLoggedIn: boolean = !!this.user
  session = null

  constructor() {
       Auth.currentAuthenticatedUser()
        .then(user => {
          this.user = user
          this.isLoggedIn = true
          console.log("User Authenticated")
        })
        .catch(error => console.log("Not Authenticated"))
  }


  async getSession() {
    return await Auth.currentSession()
  }

  async login(username: string, password: string) {
    const user = await Auth.signIn(username, password);
    console.log(user);
    this.isLoggedIn = true
    this.user = user
  }
  async signOut () {
    await  Auth.signOut()
  }
  async signUp(username: string, password: string, email: string, name: string, family_name: string, birthdate: string) {
    const {user} = await Auth.signUp({
      username,
      password,
      attributes: {
        name,
        family_name,
        birthdate,
        email
      }
    });
    console.log(user);

  }

  async sendCode(username: string, code) {
    await Auth.confirmSignUp(username, code);
  }

  async resendCode(username: string) {
    await Auth.resendSignUp(username);
  }


}
