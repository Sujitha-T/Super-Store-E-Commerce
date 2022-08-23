import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../module/product';
import { appConstant } from '../app.constant';
import { environment } from '../environment/environment';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  product: Product | any = '';
  productForm:FormGroup|undefined;
  id: number | String = '';
  max:number=10;
  showMessage :boolean=false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private fb:FormBuilder,
    private apiService: ApiService,
    private commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getAbout((data as any).id);
    });
    this.initialize();
  }

  get appConstant() {
    return appConstant;
  }


initialize(){
  this.initializeForm(this.product);
}


initializeForm(product: any) {
  this.productForm = this.commonService.createProductForm(product);
}



  getAbout(id: number) {
    this.http
      .get(`${environment.dummyurl}${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        this.product = data;
        this.initializeForm(data);
        console.log(data);
      });
  }

/*onSubmit (formValue:any , isValid:boolean){
  if(isValid){console.log(formValue);
    console.log(isValid);
    this.http.put('${environment.dummyurl}${appConstant.apiRoute.products}/${id}')
    .subscribe((data)=>{
    console.log('data updated');
    console.log(data);
    })}

}*/

onSubmit(formData: any, isValid: boolean) {
  if (isValid) {
    console.log(formData);
    this.apiService
      .httpPut(`${appConstant.apiRoute.products}/${this.id}`, formData)
      .subscribe(
        (data) => {
          console.log('data updated');
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
productUpdate(event: boolean){
  if (!(event as any).target){
    this.showMessage= event;
  }
  setTimeout(()=>{
  this.showMessage=false;
},3000)
}
}