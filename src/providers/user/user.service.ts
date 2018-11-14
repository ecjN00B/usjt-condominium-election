import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable()
export class UserService {

  users: Observable<User[]>;

  constructor(public db: AngularFireDatabase) {
    this.users = db.list<User>(`/users`).valueChanges();
  }

  create(user: User): any {
    return this.db.list(`/users`)
      .push(user);
  }

}