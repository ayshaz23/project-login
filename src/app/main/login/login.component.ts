import { MainService } from './../main.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {DeviceDetectorService} from 'ngx-device-detector'
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup
  public deviceInfo


  constructor(public deviceService: DeviceDetectorService,public fb: FormBuilder, public router: Router, public _snackbar: MatSnackBar, public _apiService: MainService ) {
    this.loginForm = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]

    })
  }

  ngOnInit() {
    this.detectDevice()
  }

  openSnackBarSuccess(){
    this._snackbar.open('Logged in Successfully', 'End Now', {
      duration: 15000
    })
  }

  openSnackBarError(message){
    this._snackbar.open(message, 'End Now', {
      duration: 15000
    })
  }



  detectDevice(){

    this.deviceInfo = this.deviceService.getDeviceInfo()
    console.log(this.deviceInfo)
  }

  login(){
    let obj = {

       "email": this.loginForm.controls['email'].value,
       "password": this.loginForm.controls['password'].value,
       "deviceInfo": this.deviceInfo
    }

    console.log(obj)

   this._apiService.postUser(obj).subscribe(
     (success) => {this.openSnackBarSuccess(),
      localStorage.setItem('token', 'Logged In')
      this.router.navigate(['/dashboard'])
    },
     (error: HttpErrorResponse) => {
       this.openSnackBarError(error.error.message)
     }
   )
  }

}
