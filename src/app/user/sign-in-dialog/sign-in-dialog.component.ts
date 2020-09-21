import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-sign-in-dialog',
  templateUrl: './sign-in-dialog.component.html',
  styleUrls: ['./sign-in-dialog.component.css'],

})
export class SignInDialogComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  hide: boolean = true;
  formCounter: number = 0;
  isLoading = false
  formInfo: FormGroup = this.formBuilder.group({
    name: new FormControl('', [Validators.minLength(3)]),
    lastName: new FormControl('', [Validators.minLength(3)]),
    date: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  formUser: FormGroup = this.formBuilder.group({
      username: new FormControl('', [Validators.minLength(3)]),
      password: new FormControl('', [Validators.minLength(3)]),
      confirmPassword: new FormControl(''),
      newsletter: new FormControl('')
    },
    {validator: this.checkPasswords})

  minDate: Date;
  maxDate: Date;
  startDate: Date;

  constructor(public dialogRef: MatDialogRef<SignInDialogComponent>, private formBuilder: FormBuilder) {
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

  ngOnInit(): void {
  }

  getErrorMessage(formControl) {
    console.log(formControl.errors)
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    } else if (formControl.hasError('email')) {
      return 'Not a valid email';
    } else if (formControl.hasError('minlength')) {
      return 'Minimum length is 3';
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
}
