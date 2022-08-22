import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {  HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,MatButtonModule,MatToolbarModule,MatIconModule,MatInputModule,MatGridListModule,MatFormFieldModule
  ],

exports:[ CommonModule,
  ReactiveFormsModule,MatError,
    HttpClientModule,
  MatCardModule,MatButtonModule,MatToolbarModule,MatIconModule,MatInputModule,MatGridListModule,MatFormFieldModule
],



  declarations: []
})
export class SharedModule { }