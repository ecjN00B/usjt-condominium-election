import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { BaseService } from '../base/base.service';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService extends BaseService {

  constructor(public afAuth: AngularFireAuth) {
    super();
  }

  createAuthUser(user: {email: string, password: string}): any {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .catch(this.handlePromiseError);
  }

  loginWithEmail(user: {email: string, password: string}): Promise<boolean> {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((authUser) => {
          return authUser != null;
      }).catch(this.handlePromiseError);
  }

  logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  get authenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afAuth
        .authState
        .pipe(
          first()
        )
        .subscribe((authUser: firebase.User) => {
          (authUser) ? resolve(true) : reject(false);
        });
    });
  }

}