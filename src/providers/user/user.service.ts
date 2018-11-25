import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';

import { BaseService } from '../base/base.service';
import { FirebaseApp } from 'angularfire2';
import { User } from '../../models/user.model';

import 'firebase/storage';

@Injectable()
export class UserService extends BaseService {

  users: Observable<User[]>;
  currentUser: AngularFireObject<User>;

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public firebaseApp: FirebaseApp
  ) {
    super();
    this.users = db.list<User>(`/users`).valueChanges();
    this.listenAuthState();
  }

  private listenAuthState(): void {
    this.afAuth
      .authState
      .subscribe((authUser: firebase.User) => {
        if (authUser)
          this.currentUser = this.db.object(`/users/${authUser.uid}`);
      });
  }

  create(user: User, uuid: string): Promise<void> {
    return this.db.object(`/users/${uuid}`)
      .set(user)
      .catch(this.handlePromiseError);
  }

  edit(user: {name: string, username: string, photo: string}): Promise<void> {
    return this.currentUser
      .update(user)
      .catch(this.handlePromiseError);
  }

  findUser(uuid: string): Promise<User> {
    return new Promise((resolve, reject) => {
      this.db.database.ref('users').child(uuid)
      .once('value')
      .then((snapshot) => {
        resolve(snapshot.val());
      }).catch((err) => {
        reject(err);
      });
    });
  }

  // getAuthCurrentUser(): any {
  //   return this.firebaseApp.auth().currentUser;
  // }

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

  uploadPhoto(file: File, userId: string): firebase.storage.UploadTask {
    return this.firebaseApp
      .storage()
      .ref()
      .child(`/users/${userId}`)
      .put(file);
  }

}