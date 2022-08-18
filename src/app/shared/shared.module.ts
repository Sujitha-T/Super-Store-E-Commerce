import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,MatButtonModule,MatToolbarModule,MatIconModule,MatInputModule
  ],

exports:[ CommonModule,
  ReactiveFormsModule,
  FormsModule,
    HttpClientModule,
  MatCardModule,MatButtonModule,MatToolbarModule,MatIconModule,MatInputModule
],



  declarations: []
})
export class SharedModule { }