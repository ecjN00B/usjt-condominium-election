import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { BaseService } from '../base/base.service';

@Injectable()
export class UserService extends BaseService{

  users: Observable<User[]>;

  constructor(public db: AngularFireDatabase) {
    super();
    this.users = db.list<User>(`/users`).valueChanges();
  }

  create(user: User, uuid:string): Promise<void> {
    return this.db.object(`/users/${uuid}`)
      .set(user)
      .catch(this.handlePromiseError);
  }

}