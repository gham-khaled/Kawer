import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Auth} from 'aws-amplify';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  constructor(@Inject(DOCUMENT) document) {
  }

  ngOnInit() {
  }


  onLogin() {
    // tslint:disable-next-line:max-line-length
    const URL = 'https://kawer.auth.us-east-1.amazoncognito.com/login?client_id=1fqjct9m5273fiifrdi5eijeq9&response_type=code&scope=email+profile+openid&redirect_uri=http://localhost:4200/';
    window.location.assign(URL);
  }

  async onLogout() {

    const currentUser = Auth.userPool.getCurrentUser()
    await currentUser.signOut()
  }


}
