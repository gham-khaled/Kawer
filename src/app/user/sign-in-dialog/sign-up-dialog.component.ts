import {Component} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {Auth} from 'aws-amplify';
import {LoginDialogComponent} from "../login-dialog/login-dialog.component";
import {UserService} from "../user.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-sign-up-dialog',
  templateUrl: './sign-up-dialog.component.html',
  styleUrls: ['./sign-up-dialog.component.scss'],

})
export class SignUpDialogComponent {

  matcher = new MyErrorStateMatcher();
  hide: boolean = true;
  formCounter: number = 0;
  isLoading = false;
  errorMessage: string = null
  formInfo: FormGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.minLength(3)]),
    family_name: new FormControl('', [Validators.minLength(3)]),
    birthdate: new FormControl('', [Validators.required]),
  })
  formUser: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),

    password: new FormControl('', [Validators.minLength(8)]),
    confirmPassword: new FormControl(''),
    newsletter: new FormControl('')
  }, {validator: this.checkPasswords})
  formCode: FormGroup = this.formBuilder.group({
    code: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  minDate: Date;
  maxDate: Date;
  startDate: Date;

  constructor(public dialogRef: MatDialogRef<SignUpDialogComponent>,
              private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private userService: UserService) {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 80, 0, 1);
    this.maxDate = new Date(currentYear - 3, 0, 1);
    this.startDate = new Date(1999, 0, 1);

  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;
    return pass === confirmPass ? null : {notSame: true}
  }


  getErrorMessage(formControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    } else if (formControl.hasError('email')) {
      return 'Not a valid email';
    } else if (formControl.hasError('minlength')) {
      return `Minimum length is ${formControl.errors.minlength.requiredLength}`;
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }


  incrementCounter() {
    this.formCounter++;
  }

  decrementCounter() {
    this.formCounter--;
  }

  async onSignUp() {
    try {
      this.isLoading = true
      const {email, password} = this.formUser.value
      const {name, family_name, birthdate} = this.formInfo.value
      await this.userService.signUp(email, password, email, name, family_name, birthdate)
      this.formCounter += 1;
    } catch (error) {
      console.log('error signing up:', error);
      this.errorMessage = error.message
    }
    this.isLoading = false

  }

  async onSendCode() {
    const {code} = this.formCode.value
    try {
      this.isLoading = true
      await this.userService.sendCode(this.formUser.value.email, code)
      this.onNoClick()
      this.dialog.open(LoginDialogComponent, {
        height: '450px',
        width: '470px',
        panelClass: 'my-dialog',
        autoFocus: false
      })
    } catch (error) {
      console.log('error confirming sign up', error);
      this.errorMessage = error.message

    }
    this.isLoading = false
  }

  async onResendCode() {
    this.isLoading = true
    try {
      await this.userService.resendCode(this.formUser.value.email)
      console.log('code resent successfully');
    } catch (error) {
      console.log('error resending code: ', error);
      this.errorMessage = error.message
    }
    this.isLoading = false
  }
}
