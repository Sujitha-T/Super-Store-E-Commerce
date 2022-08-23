import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../service/Dataproduct.service';
import { PageEvent } from '@angular/material/paginator';
import { appConstant } from '../app.constant';
import { environment } from '../environment/environment';
import { Product } from '../module/product';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: Array<Product> = [];
  length:number ;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  constructor(private product: DataService,  private http:HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.getProducts(this.pageSize)
    // this.product.getproducts().subscribe((data: any[]) => {
    //   this.products = (data as any).products;
    //   console.log(this.products);
    //   console.log(data);
    // });
  }
  getProducts(limit?:number, skip?:number , filter?:string){
    let productApiUrl:string;
    if(limit && !skip){
      productApiUrl=`${environment.dummyurl}${appConstant.apiRoute.products}?limit=${limit}`
    }
    else if(skip && !limit){
      productApiUrl=`${environment.dummyurl}${appConstant.apiRoute.products}?skip=${skip}`
    }
    else if(limit && skip){
      productApiUrl=`${environment.dummyurl}${appConstant.apiRoute.products}?limit=${limit}&skip=${skip}`
    }
    else{
      productApiUrl=`${environment.dummyurl}${appConstant.apiRoute.products}`
    }
    
    this.http.get(productApiUrl).subscribe(data=>{
      this.products = (data as any).products;
      this.length = (data as any).total;
    })
  }
  onPagination(event:  PageEvent){
    this.pageEvent=event;
    let skip:number = event.pageSize * event.pageIndex;
   
    this.getProducts(event.pageSize, event.pageSize * event.pageIndex)
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }


  ngOnDestroy(){

  }


  getCatalogue(event: any, product: any): void {
    console.log(event);
    this.router.navigate(['/product', product.id]);
  }



}