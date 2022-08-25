import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }

  foodDetails=[
    {
      id:1,
      foodName:"Chilled Cold Drink",
      foodDetails:"A very chilled cold drink",
      foodPrice:150,
      foodImg:"/assets/image/Chilled Cold Drink.jpg"

    },
    {
      id:2,
      foodName:"Drilled Chicken",
      foodDetails:"very delicious to eat drilled chicken",
      foodPrice:200,
      foodImg:"/assets/image/Drilled Chicken.jpg"


    },
    {
      id:3,
      foodName:"Indian Thali",
      foodDetails:"We also provide Indian Thali you can taste",
      foodPrice:500,
      foodImg:"/assets/image/Indian Thali.jpg"
    },
    {
      id:4,
      foodName:"Pan Frried Mommos",
      foodDetails:"Pan fried momo is also in damand ",
      foodPrice:250,
      foodImg:"/assets/image/Mommos.jpg"
    },
    {
      id:5,
      foodName:"Samosa",
      foodDetails:"Samosa is very light evening snacks",
      foodPrice:175,
      foodImg:"/assets/image/Samosa.jpg"
    },
    {
      id:6,
      foodName:"Ice- Cream Fluffy",
      foodDetails:"Fluffy Ice Cream is very delicious",
      foodPrice:190,
      foodImg:"/assets/image/Ice-Cream Fluffy.jpg"
    },
    {
      id:7,
      foodName:" Pan Fried Mommos",
      foodDetails:"Pan fried momo is also in demand",
      foodPrice:250,
      foodImg:"/assets/image/Mommos.jpg"
    },
    {
      id:8,
      foodName:"Samosa",
      foodDetails:"Samosa is very light evening snacks",
      foodPrice:150,
      foodImg:"/assets/image/Samosa.jpg"
    },
    {
      id:9,
      foodName:"Chilled Cold Drink",
      foodDetails:"A very chilled cold drink",
      foodPrice:150,
      foodImg:"/assets/image/Chilled Cold Drink.jpg"
    },
    {
      id:10,
      foodName:"Pan Fried Mommos",
      foodDetails:"Pan Fried mommos is also in demand",
      foodPrice:250,
      foodImg:"/assets/image/Mommos.jpg"
    },
    
  ]
}
