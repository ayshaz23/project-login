import { AuthguardGuard } from './authenticate/authguard.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule, Routes, CanActivate } from '@angular/router';



const routes: Routes = [

  {
    path: '',
   component: LoginComponent,
  },


  {
    path: 'signup',
   component: SignupComponent,
  },

  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardGuard]
  },

];


@NgModule({
  declarations: [LoginComponent, SignupComponent, DashboardComponent],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(routes),

  ReactiveFormsModule,
  MatInputModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatPaginatorModule,
  MatSelectModule,
  MatExpansionModule,
  MatDialogModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  ]
})
export class MainModule { }
