import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,SharedModule,HttpClientModule,MatFormFieldModule,MatInputModule,FormsModule,ReactiveFormsModule,MatGridListModule,MatIconModule,MatButtonModule
  ],
  declarations: [CatalogueComponent,ProductFormComponent,ProductListComponent],
  exports:[CatalogueComponent,ProductFormComponent,ProductListComponent]
})
export class CatalogueModule { }