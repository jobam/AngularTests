import { Component, OnInit } from '@angular/core';
import { UserViewModel } from '../user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: UserViewModel[];

  constructor() {
    var user1: UserViewModel = new UserViewModel('Marc');
    var user2: UserViewModel = new UserViewModel('Bo');
    var user3: UserViewModel = new UserViewModel('Felipe');
    this.users = [user1, user2, user3];
  }

  ngOnInit() {
  }

}
