import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.interface';

@Component({
  selector: 'ngr-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    //already  i have some Users
  users : User[]= [
    { name : 'Rohan',
      username : 'rohan23',
      email : 'rohan@gmail.com'
    },

    { name : 'vishal',
      username : 'vishal34',
      email : 'vishal@gmail.com'
    },

    { name : 'sumit',
      username : 'sumit90',
      email : 'sumit@gmail.com'
    },
];

    name : string = '';
    username : string = '';
    email : string = '';

    constructor() { 
      
    }

    ngOnInit(): void {
    }

    takeInput(
       input_1 : HTMLInputElement,
       input_2 : HTMLInputElement,
       input_3 : HTMLInputElement){
        let newUser=[];
         for(let u of this.users){
          newUser.push(u);
         }
         this.name = input_1.value;
         this.username = input_2.value;
         this.email = input_3.value;
          let userData = {
          name : this.name,
          username : this.username,
          email : this.email
        }
      
       newUser.push(userData);
      this.users = newUser;
      // console.log(this.users);
    }

    deleteUser(deleteIndex:number){
      let newUser =[];
      let index = 0;
      for(let u of this.users){
          if(index == deleteIndex){
            index++;
            continue;
          }
          newUser.push(u);
          index++;
      }
      this.users = newUser;
    }

    highlightRow(u){
      this.email = u.email;
    }
}
