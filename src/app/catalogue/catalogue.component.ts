import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../module/product';
import { appConstant } from '../app.constant';

import { ApiService } from '../service/api.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  product: Product | any = '';
  id: number | String = '';
  showMessage :boolean=false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private apiService: ApiService,
   
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getAbout((data as any).id);
    });
   // this.initialize();
  }

  


  getAbout(id: number) {
    this.apiService
     // .get(`${environment.dummyurl}${appConstant.apiRoute.products}/${id}`)
      .httpGet(`${appConstant.apiRoute.products}/${id}`)
      .subscribe((data) => {
        this.product = data;
       // this.initializeForm(data);
        console.log(data);
      });
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