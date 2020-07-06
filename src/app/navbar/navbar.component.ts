import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {MatDialog} from "@angular/material/dialog";
import {SignInDialogComponent} from "../sign-in-dialog/sign-in-dialog.component";
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";

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
  collapse = true

  constructor(private dialog: MatDialog) {
  }


  ngOnInit(): void {
  }

  onLogin() {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      height: '400px',
      width: '470px',
      panelClass: 'my-dialog',
      autoFocus: false
    })
  }

  onSignIn() {
    const dialogRef = this.dialog.open(SignInDialogComponent, {
      height: '500px',
      width: '470px',
      panelClass: 'my-dialog',
      autoFocus: false

    })

  }
}
