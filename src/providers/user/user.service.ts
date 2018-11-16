import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AngularFireDatabase } from 'angularfire2/database';

import { BaseService } from '../base/base.service';
import { User } from '../../models/user.model';

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

  userExists(username: string): Observable<boolean> {
    return this.db.list(`/users`,
      (ref: firebase.database.Reference) => ref.orderByChild('username').equalTo(username)
    )
    .valueChanges()
    .pipe(
      map((users: User[]) => {
        return users.length > 0;
      }),
      catchError(this.handleObservableError)
    );
  }

}