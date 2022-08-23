import { Component,EventEmitter, Input,Output, OnInit } from '@angular/core';
import { appConstant } from '../../app.constant';
import { CommonService } from '../../service/common.service';
import { Product } from '../../module/product';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm:any;
  max:number=10;
  id: number | String = '';

  @Input() product:Product;
  @Output() submit: EventEmitter<boolean>=new EventEmitter(false);
  constructor(private commonService: CommonService, private apiService: ApiService) { }

  ngOnInit() :void{
    console.log(this.product);
    if (this.product){
      this.initializeForm(this.product)
    }
  }
  initializeForm(product: any) {
    this.productForm = this.commonService.createProductForm(product);
  }
  get appConstant() {
    return appConstant;
  }
  // onSubmit(formData: any, isValid: boolean) {
  //   if (isValid) {
  //     //console.log(formData);
  //     this.apiService
  //       .httpPut(`${appConstant.apiRoute.products}/${this.id}`, formData)
  //       .subscribe(
  //         (data) => {
  //           console.log('data updated');
  //           console.log(data);
  //           this.submit.emit(true);
  //         },
  //         (err) => {
  //          // console.log(err);
  //         }
  //       );
  //   }
  // }
  onSubmit(formValue: any, isValid: boolean){
    // console.log(formValue)
    if (isValid){
     this.apiService.httpPut(`${appConstant.apiRoute.products}/${this.product?.id}`,formValue)
     .subscribe(data=> {
       console.log(data);
       this.submit.emit(true);
       this.commonService.sendProductMessage(true);
     },(err)=>{
       //console.log(err);
     });
    }
   }
}