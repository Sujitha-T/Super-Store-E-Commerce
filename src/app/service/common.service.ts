import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { appConstant } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  productMessageSubject:Subject<boolean>= new Subject();
  $productMessageObservable: Observable<boolean> = this.productMessageSubject.asObservable()

  constructor(private fb: FormBuilder,) { }

  createProductForm(product: any){
   return this.fb.group({
      [appConstant.forms.product.title]: [product.title,[Validators.required]],
      [appConstant.forms.product.description]: [product.description, [Validators.required]],
      [appConstant.forms.product.category]: [product.category, [Validators.required]],
      [appConstant.forms.product. discountPercentage]: [product. discountPercentage, [Validators.required]],
      [appConstant.forms.product.price]: [product.price, [Validators.required]],
      [appConstant.forms.product.stock]: [product.stock, [Validators.required]],
      [appConstant.forms.product.brand]: [product.brand, [Validators.required]],
      [appConstant.forms.product.rating]: [product.rating,[ Validators.compose([Validators.required, Validators.max(10)])]],
    });
  }
  sendProductMessage(data:boolean){
    this.productMessageSubject.next(data);
  }
  getProductMessage():Observable<boolean>{
    return this.$productMessageObservable;
  }



}
