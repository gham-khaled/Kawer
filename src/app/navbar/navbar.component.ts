import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SignUpDialogComponent} from "../user/sign-in-dialog/sign-up-dialog.component";
import {LoginDialogComponent} from "../user/login-dialog/login-dialog.component";
import {UserService} from "../user/user.service";
import {NavigationStart, Router} from "@angular/router";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],

})
export class NavbarComponent implements OnInit {
  collapse = false
  dropdown = false
  profileURL : boolean

  constructor(private dialog: MatDialog, public userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe(event => this.profileURL = event["url"] === "/profile")

  }


  onLogin() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      height: '450px',
      width: '470px',
      panelClass: 'my-dialog',
      autoFocus: false
    })
  }

  onSignUp() {
    const dialogRef = this.dialog.open(SignUpDialogComponent, {
      height: '550px',
      width: '470px',
      panelClass: 'my-dialog',
      autoFocus: false
    })
  }

  async onSignOut() {
    await this.userService.signOut()
  }
}
