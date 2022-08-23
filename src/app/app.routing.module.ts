import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';

import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {
    path: '',
    component: ProductComponent,pathMatch:"full"
  },
  
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'product/:id', component: CatalogueComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}