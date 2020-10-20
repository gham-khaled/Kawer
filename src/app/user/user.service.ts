import {Injectable} from "@angular/core";
import {Auth} from 'aws-amplify';
import {BehaviorSubject, Subject} from "rxjs";
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = new BehaviorSubject<User>(null)
  session = null

  constructor() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.user.next(this._createUser(user))
        console.log(user);
      })
      .catch(error => console.log("Not Authenticated"))
  }


  async getSession() {
    return await Auth.currentSession()
  }

  async login(username: string, password: string) {
    const newUser = await Auth.signIn(username, password)
    this.user.next(this._createUser(newUser))
  }

  async signOut() {
    await Auth.signOut()
    this.user.next(null)
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

  getPermission (group: string) {

    return this.user.getValue() && this.user.getValue().group.includes(group)
  }
  private _createUser(user) {
    const groups = user.signInUserSession.accessToken.payload["cognito:groups"]
    const {name, family_name, birthdate, email, picture} = user.attributes
    return new User(name, family_name, email, picture, birthdate, groups)
  }

}
