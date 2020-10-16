import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {SignUpDialogComponent} from "../sign-in-dialog/sign-up-dialog.component";
import {UserService} from "../user.service";
import {a} from "@aws-amplify/ui";

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['../sign-in-dialog/sign-up-dialog.component.css', './login-dialog.component.css'],

})
export class LoginDialogComponent implements OnInit {
  isLoading: boolean = false;
  errorMessage: string = null;
  formLogin: FormGroup = this.formBuilder.group({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(false)
  })

  constructor(private dialogRef: MatDialogRef<LoginDialogComponent>,
              private formBuilder: FormBuilder, private dialog: MatDialog,
              private userService: UserService) {
  }

  ngOnInit(): void {
  }

  async onLogin() {
    this.isLoading = true

    const username = this.formLogin.value.username;
    const password = this.formLogin.value.password;
    try {
      await this.userService.login(username, password)
      this.onNoClick()
    } catch (error) {
      console.log('error signing in', error);
      this.errorMessage = error.message
    }
    this.isLoading = false

  }

  onNoClick() {
    this.dialogRef.close();
  }

  onNoAccount() {
    this.onNoClick()
    const dialogRefSignUp = this.dialog.open(SignUpDialogComponent, {
      height: '500px',
      width: '470px',
      panelClass: 'my-dialog',
      autoFocus: false

    })

  }
}
