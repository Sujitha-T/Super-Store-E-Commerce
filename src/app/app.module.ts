import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent }from './catalogue/catalogue.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { ProductFormComponent } from './catalogue/product-form/product-form.component';
//import { Validators,  FormGroup } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ProductComponent,CatalogueComponent],
  imports: [
    //Validators,
    //FormGroup,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
