import { Component, OnInit, Input, Injectable } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() user:UserViewModel;

  constructor() {
    console.log(this.user);
   }

  ngOnInit() {
  }

}

@Injectable()
export class UserViewModel{

  name:string;

  constructor(name:string){
    this.name = name;
  }
}
