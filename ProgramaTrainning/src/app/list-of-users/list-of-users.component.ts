import { Component, OnInit } from '@angular/core';
import { User} from '../user'

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent implements OnInit {
  userList: User = {name: '', photo: '', url:''};
  usersArray: User[]= [];
  url: string;
  
  constructor() { }

  ngOnInit() {
    this.showListOfUsers();
  }

  async showListOfUsers(){
    this.url = "https://api.github.com/users";
    
    const response = await fetch(this.url);
    const result = await response.json();
    result.forEach(element => {
      this.userList = {
        name: element.login,
        photo: element.avatar_url,
        url: element.html_url
      }
      this.usersArray.push(this.userList);
      
    });
  }

  goToRepository(url){
    window.open(url);
  }

}
