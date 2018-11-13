import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../models/user.model';

@Injectable()
export class UserService {

  constructor(public db: AngularFireDatabase) {

  }

  create(user: User): Promise<void> {
    return this.db.object(`/users`)
      .set(user);
  }

}