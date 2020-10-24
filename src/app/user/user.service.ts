import {Injectable} from "@angular/core";
import {API, Auth} from 'aws-amplify';
import {BehaviorSubject, Subject} from "rxjs";
import {User} from "./user.model";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User = null
  session = null
  private default_picture = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"

  constructor() {
    this._initializeUser(false)
  }


  async getSession() {
    return await Auth.currentSession()
  }

  async login(username: string, password: string) {
    const newUser = await Auth.signIn(username, password)
    this.user = this._createUser(newUser)
  }

  async signOut() {
    await Auth.signOut()
    this.user = null
  }

  async signUp(username: string, password: string, email: string, name: string, family_name: string, birthdate: string) {
    const picture = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
    const {user} = await Auth.signUp({
      username,
      password,
      attributes: {
        name,
        family_name,
        birthdate,
        email,
        picture
      }
    });
    console.log(user);

  }

  async addPicture(formData: FormData) {
    const url = "https://ua84sa3gl7.execute-api.us-east-1.amazonaws.com/prod/user"
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      let user = await Auth.currentAuthenticatedUser();

      const result = await Auth.updateUserAttributes(user, {
        'picture': response.data
      });
      this._initializeUser(true)
      this.user.picture = response.data
      return result
    } catch (e) {
      console.log(e);
    }
  }

  async sendCode(username: string, code) {
    await Auth.confirmSignUp(username, code);
  }

  async resendCode(username: string) {
    await Auth.resendSignUp(username);
  }

  getPermission(group: string) {
    return this.user && this.user.group.includes(group)
  }


  getUserAttribute(attribute) {
    return this.user ? this.user[attribute] : null

  }

  getUser() {
    return this.user
  }

  private _createUser(user) {
    const groups = user.signInUserSession.accessToken.payload["cognito:groups"]
    let {name, family_name, birthdate, email, picture} = user.attributes
    return new User(name, family_name, email, picture, birthdate, groups)
  }

  private _initializeUser(cache: boolean) {
    Auth.currentAuthenticatedUser({
      bypassCache: cache  // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(user => {
        this.user = this._createUser(user)
      })
      .catch(error => console.log("Not Authenticated"))
  }
}
