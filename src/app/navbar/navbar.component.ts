import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatDialog} from "@angular/material/dialog";
import {SignInDialogComponent} from "../user/sign-in-dialog/sign-in-dialog.component";
import {LoginDialogComponent} from "../user/login-dialog/login-dialog.component";

@Component({
  selector: 'app-navbar',
  animations: [
    trigger('collapsing', [

      transition('* => *', [
        animate('15s')
      ]),

    ]),
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  collapse = false

  constructor(private dialog: MatDialog) {
  }


  ngOnInit(): void {
  }

  onLogin() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      height: '450px',
      width: '470px',
      panelClass: 'my-dialog',
      autoFocus: false
    })
  }

  onSignIn() {
    const dialogRef = this.dialog.open(SignInDialogComponent, {
      height: '550px',
      width: '470px',
      panelClass: 'my-dialog',
      autoFocus: false

    })

  }
}
