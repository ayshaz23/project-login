import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector'
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  signupForm: FormGroup
  public deviceInfo



  constructor(public fb: FormBuilder, public router: Router, public _snackbar: MatSnackBar, public _apiService: MainService ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required],
      name: ['', Validators.required]

    })
  }


  openSnackBarSuccess(){
    this._snackbar.open('User Created Successfully', 'End Now', {
      duration: 15000
    })
  }

  openSnackBarError(){
    this._snackbar.open('Error in creating User', 'End Now', {
      duration: 15000
    })
  }

  signUp(){

    let user = this.signupForm.value
    this.openSnackBarSuccess()
    this.router.navigate(['/'])
  }

}
