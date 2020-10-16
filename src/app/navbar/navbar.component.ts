import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatDialog} from "@angular/material/dialog";
import {SignUpDialogComponent} from "../user/sign-in-dialog/sign-up-dialog.component";
import {LoginDialogComponent} from "../user/login-dialog/login-dialog.component";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapse = false
  isLoggedIn: boolean = false;

  constructor(private dialog: MatDialog, private userService: UserService) {
  }

  async ngOnInit() {
    this.isLoggedIn = this.userService.isLoggedIn ;
    console.log(this.isLoggedIn);
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
  async onSignOut () {
    await this.userService.signOut()
  }
}
