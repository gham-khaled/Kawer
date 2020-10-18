import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatDialog} from "@angular/material/dialog";
import {SignUpDialogComponent} from "../user/sign-in-dialog/sign-up-dialog.component";
import {LoginDialogComponent} from "../user/login-dialog/login-dialog.component";
import {UserService} from "../user/user.service";
import {Subscription} from "rxjs";
import {User} from "../user/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {
  collapse = false
  userSub: Subscription;
  isLoggedIn: boolean = false;
  isOwner: boolean = false
  constructor(private dialog: MatDialog, private userService: UserService) {
  }

  ngOnInit() {
    this.userSub = this.userService.user.subscribe( user => {
      console.log("Checking If user connected ")
      this.isLoggedIn = !!user ;
      this.isOwner = user.group.includes("owner")
      console.log("Is Owner ?", this.isOwner)
    });
    console.log(this.isLoggedIn);
  }
  ngOnDestroy() {
    this.userSub.unsubscribe()
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
