import { Component, OnInit } from '@angular/core';
import { efood } from '../food-items/food-items';
import { foodservice } from 'src/app/food-items/food-items.service';


@Component({
  selector: 'app-cere',
  templateUrl: './cere.component.html',
  styleUrls: ['./cere.component.css']
})
export class CereComponent implements OnInit {

  
  _searchterm:string;
  imgWidth1="600";
  imgHeight1="300";
  imgRadius="15";
  searchedItems:any[]=[];
    get searchterm():string{
       
        return this._searchterm;
        }

  set searchterm(value:string){
    
    this._searchterm=value;
    this.searchedItems=this.searchterm?this.searchkitchen(this.searchterm):this.cere;
   

  }
 
  
searchkitchen(searchby:string):any[]{
        searchby=searchby.toLocaleLowerCase();
        return this.cere.filter((Food:any)=>Food.Name.toLocaleLowerCase().indexOf(searchby)!==-1);
    }
    constructor(private foo:foodservice) { }

  ngOnInit(): void {
    this.searchedItems=this.cere;
  }
  inc(f)
  {
    if(f.qnt!=5)
    {
    f.qnt=f.qnt+1;
  }
  }
  dec(f)
  {
    if(f.qnt!=1)
    {
    f.qnt=f.qnt-1;
    }
  }
  itemsCart:any=[];
  add(f)
{
 let cdataNull=localStorage.getItem('cart');
 if(cdataNull==null)
 {
   let sdataget:any=[];
   sdataget.push(f);
   localStorage.setItem('cart',JSON.stringify(sdataget));
 }
 else{
   var id=f.Item;
   let index:number=-1;
   this.itemsCart=JSON.parse(localStorage.getItem('cart'));
   for(let i=0;i<this.itemsCart.length;i++)
   {
     if(parseInt(id) == parseInt(this.itemsCart[i].Item))
     {
         this.itemsCart[i].qnt=f.qnt; 

         index=i;
         break;  
     }
   }
if(index==-1)
{
  this.itemsCart.push(f);
  localStorage.setItem('cart',JSON.stringify(this.itemsCart));
}
else{
  localStorage.setItem('cart',JSON.stringify(this.itemsCart));
}
 }
 this.cartnumberf();
}
cartNumber:number=0;
  cartnumberf()
  {
      var cartValue=JSON.parse(localStorage.getItem('cart'));
      this.cartNumber= cartValue.length;
      this.foo.cartSubject.next( this.cartNumber);
  }
  cere:efood[]=[
    {
    "Item":1,
    "Name":"Muesli",
    "Cost":299,
    "Rating":5.0,
    "qnt":1,
    "Img":"assets/muesli.jpeg"
    },
    {
      "Item":2,
      "Name":"Oats",
      "Cost":350,
      "Rating":4.8,
      "qnt":1,
      "Img":"assets/oats.jpg"
      },
      {
        "Item":3,
        "Name":"Corn Flakes",
        "Cost":75,
        "Rating":5.0,
        "qnt":1,
        "Img":"assets/corn.jpg"
        }
      ]
}
