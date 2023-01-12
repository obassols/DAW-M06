import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/Entities/User';
import { UserApi } from '../../Services/API/UserApi/UserApi';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users!: Array<{
    id: number,
    name: string,
    email: string,
    gender: string,
    status: string,
  }>;

  newUser: User;

  constructor(private httpClient: UserApi) {
    const USER = {
      name: 'UserNou',
      gender: 'Male',
      email: 'email@local',
      status: 'active'
    };

    this.newUser = new User();

    this.httpClient.addUser(USER).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.getAllUsers();
      }
    });
  }

  ngOnInit(): void {
  }

  getAllUsers(): void {
    this.httpClient.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
