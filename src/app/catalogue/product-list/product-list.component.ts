import { Component, Input,OnInit } from '@angular/core';
import { Product } from '../../module/product';
import { CommonService } from '../../service/common.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  showMessage :boolean=false;
  @Input() product:Product;
  constructor(private commonService: CommonService) { }

  ngOnInit():void {
    this.initialization();
  }
  initialization(){
    this.commonService.getProductMessage().subscribe(data => {
      this.showMessage = data;
      setTimeout(()=>{
        this.showMessage=false;
      },5000)
    })
    }

}