import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { efood } from '../food-items/food-items';
import { foodservice } from '../food-items/food-items.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  imgWidth="100";
  imgHeight="100";
  imgRadius="20";
  vtbl:efood[]=[];
  

  constructor(private route:Router,private aroute:ActivatedRoute,private utservice:foodservice){
    
  }

  ngOnInit(): void {
    this.vtbl=this.utservice.getFood();
    
      }
      deleteItem(name:string)
      {
        const index=this.vtbl.findIndex(
          item=>item.Name===name
        )
        if(index>=0){
          this.vtbl.splice(index,1);
        }
      }
    
    onDelete(name:string)
    {
      if(window.confirm("delete"))
      {
        this.deleteItem(name);
        this.route.navigate(['/admin']);
      }
    }
    Food:efood[]=[
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
          },
          {
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
                },
                 {
                "Item":7,
                "Name":"Almonds",
                "Cost":700,
                "Rating":5.0,
                "qnt":1,
                "Img":"assets/almond.jpg"
                },
                {
                  "Item":8,
                  "Name":"Cashew",
                  "Cost":500,
                  "Rating":5.0,
                  "qnt":1,
                  "Img":"assets/cashew.jpg"
                  },
                  {
                    "Item":9,
                    "Name":"Groundnuts",
                    "Cost":120,
                    "Rating":5.0,
                    "qnt":1,
                    "Img":"assets/ground.jpg"
                    },
    ]
  }
   


