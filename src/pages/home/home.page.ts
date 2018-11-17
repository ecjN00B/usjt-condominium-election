import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs';

import { AuthService } from '../../providers/auth/auth.service';
import { User } from '../../models/user.model';
import { UserService } from '../../providers/user/user.service';

@IonicPage({
  priority: 'high'
})

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html'
})

export class HomePage {

  users: Observable<User[]>;

  constructor(public authService: AuthService ,public userService: UserService){}

  ionViewCanEnter(): Promise<boolean> {
    return this.authService.authenticated;
  }

  ionViewDidLoad(){
    this.users = this.userService.users;
 
    this.users.subscribe(usersList => {
        console.log(usersList);
    });

  }
  
  onSelectUser(user){
    console.log(user);
  }

}
