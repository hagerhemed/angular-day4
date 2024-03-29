import { StaticProductsService } from './../../services/static-products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproducts } from '../../models/iproducts';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  currentId:number=0;
  product:Iproducts | null= null;
  constructor(private _activatedRoute:ActivatedRoute,private _StaticProductsService:StaticProductsService){

  }
  ngOnInit(): void {
  this.currentId=Number(this._activatedRoute.snapshot.paramMap.get('id'))
  this.product=this._StaticProductsService.getProductById(this.currentId)
  }


}
