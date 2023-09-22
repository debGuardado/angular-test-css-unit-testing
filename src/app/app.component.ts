import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Users } from './users.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  users: Users[] = [];
  constructor(private userService: UsersService){

  }

  ngOnInit() : void {
    this.userService.getUsers().subscribe( (users: Users[]) => {
      this.users = users;
    });
  }
}
