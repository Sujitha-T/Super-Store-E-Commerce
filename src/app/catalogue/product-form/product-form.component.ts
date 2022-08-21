import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder, FormGroup } from '@angular/forms';
//import { appConstant } from 'src/app/app.constant';
//import { CommonService } from 'src/app/service/common.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm:FormGroup|undefined;
  //constructor(private commonService: CommonService) { }

  ngOnInit() {
  }
 // get appConstant() {
   // return appConstant;
 // }

}