import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent }from './catalogue/catalogue.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
//import { ProductFormComponent } from './catalogue/product-form/product-form.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
//import { CatalogueModule } from './catalogue/catalogue.module';
//import { Validators,  FormGroup } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProductComponent,CatalogueComponent],
  imports: [
    //Validators,
    //FormGroup,
   
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
   MatIconModule,
   MatCardModule,
   MatInputModule,
   MatTooltipModule,
   MatTooltipModule,
   MatDividerModule,
   MatProgressBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
