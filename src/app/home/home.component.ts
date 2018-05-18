import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('goals', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, offset: 0}),
            style({opacity: .5, offset: .3}),
            style({opacity: 1,  offset: 1}),
          ]))]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  itemCount: number;
   btnText: string = 'Add item';
   textReq: string = 'Insert text';
   insertGoal: string = '';
   insertTitle: string = '';
   titles = [];
   goals = [];


 // constructor(private _data: DataService) { }

   ngOnInit() {
     // this._data.goal.subscribe(res => this.goals = res);
     this.itemCount = this.goals.length;
     // this._data.changeGoal(this.goals);



   }

   addItem() {
if (this.insertGoal=='')
{
  document.querySelector('.txt').classList.add('redText');

this.textReq='Text required!';
} else{
  document.querySelector('.txt').classList.remove('redText');

     this.goals.push(this.insertGoal);
     this.titles.push(this.insertTitle);
     this.insertGoal = '';
     this.textReq='Insert text';
     this.itemCount = this.goals.length;
   }
 }

   removeItem(i) {
     this.goals.splice(i, 1);



 }
}
