import {Injectable} from "@angular/core";
import { efood } from '../food-items/food-items';
import {Subject} from 'rxjs';
//import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class cereservice{
 
  constructor(){}
  // baseurl=global.apiBaseUrl;
   cartSubject=new Subject<any>();
   //openLoginService=new Subject<any>();
 private cere:efood[]=[{
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
      getcere():efood[]
      {
         return this.cere;
      }
      getf(id:number):efood{
       const f1=this.cere.find(f1=>f1.Item===id)
       return f1;       
      }
}
