import { Component, signal } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import {  Router, RouterOutlet } from '@angular/router';
import { UserComponent } from "./user/user.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {


  userDetails=[
    {
    Id:'1',
    Name:'Anurag',
    Age:18
  },
  {
    Id:'2',
    Name:'ganesh',
    Age:48
  },
  {
    Id:'3',
    Name:'pratik',
    Age:58
  },


]
 
  title = 'my-app';
  count=signal<string | number>(10);
  getdata()
  {
  console.log("hi");
  console.log(this.count.set("hello"));
  }
  
  student=[{
    name:"anurag",age:13,email:"anurag@gmail.com"   
  },{
    name:"parag",age:43,email:"parag@gmail.com"   
  },{
    name:"giri",age:53,email:"giri@gmail.com"   
  }]


}
function provideClientHydration(): import("@angular/core").Provider {
  throw new Error('Function not implemented.');
}

