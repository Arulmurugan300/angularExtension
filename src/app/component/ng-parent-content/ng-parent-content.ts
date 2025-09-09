import { Component, computed, effect, resource, signal } from '@angular/core';
import { NgContent } from '../ng-content/ng-content';
import { ComponentAnotomy } from "../component-anotomy/component-anotomy";

@Component({
  selector: 'app-ng-parent-content',
  imports: [NgContent, ComponentAnotomy],
  templateUrl: './ng-parent-content.html',
  styleUrl: './ng-parent-content.scss'
})
export class NgParentContent {
  currentUser = {
    name:"arul",
    age:20
  };

  // print = computed(() => this.currentUser());
  // signalRes=computed(()=>this.currentUser());
  constructor(){
      effect(() => {
        // console.log(this.currentUser());
      //     const user = this.currentUser();
      //     const timer = setTimeout(() => {
  //       console.log(`1 second ago, the user became ${user}`);
  //     }, 1000);
  //     onCleanups(() => {
    //       console.log("cleanup");

    //       clearTimeout(timer);
    //     });
      });
  }

  ngOnInit(): void {

    // setTimeout(()=>{
    //     this.currentUser.set("bharath");
    //   },2000)

    //       setTimeout(()=>{
    //       this.currentUser.update((value:string)=>value+"ss");
    //     },1000)




  }
  changeUser(){
    this.currentUser={
      name:"bharath",
      age:20
    }
    // console.log(this.currentUser());

  }
}
