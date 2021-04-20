import {Injectable} from "@angular/core";
import { efood } from '../food-items/food-items';
import {Subject} from 'rxjs';
//import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class fruitservice{
 
  constructor(){}
  // baseurl=global.apiBaseUrl;
   cartSubject=new Subject<any>();
   //openLoginService=new Subject<any>();
 private fruit:efood[]=[{
    "Item":4,
    "Name":"Oranges",
    "Cost":100,
    "Rating":5.0,
    "qnt":1,
    "Img":"assets/oranges.jpg"
    },
    {
      "Item":5,
      "Name":"Pomegranate",
      "Cost":150,
      "Rating":5.0,
      "qnt":1,
      "Img":"assets/pome.jpg"
      },
      {
        "Item":6,
        "Name":"Apples",
        "Cost":250,
        "Rating":5.0,
        "qnt":1,
        "Img":"assets/apples.jpg"
        }
      ]
      getFruit():efood[]
      {
         return this.fruit;
      }
      getf(id:number):efood{
       const f1=this.fruit.find(f1=>f1.Item===id)
       return f1;       
      }
  
}
