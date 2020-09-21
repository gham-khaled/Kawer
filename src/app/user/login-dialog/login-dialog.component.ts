import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SignInDialogComponent} from "../sign-in-dialog/sign-in-dialog.component";
import {UserService} from "../user.service";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['../sign-in-dialog/sign-in-dialog.component.css', './login-dialog.component.css'],

})
export class LoginDialogComponent implements OnInit {
  isLoading: boolean = false;
  formLogin: FormGroup = this.formBuilder.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(false)
  })

  constructor(private dialogRef: MatDialogRef<LoginDialogComponent>,
              private formBuilder: FormBuilder, private dialog: MatDialog, private userService: UserService) {
  }

  ngOnInit(): void {
  }

  onLogin() {
    const username = this.formLogin.value.username;
    const password = this.formLogin.value.password;
    this.userService.login(username, password)
    this.isLoading = false
    this.formLogin.reset()
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onNoAccount() {
    this.onNoClick()
    const dialogRefSignUp = this.dialog.open(SignInDialogComponent, {
      height: '500px',
      width: '470px',
      panelClass: 'my-dialog',
      autoFocus: false

    })

  }
}
