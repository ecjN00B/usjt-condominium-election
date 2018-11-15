import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {}

  createAuthUser(user: {email: string, password: string}): any {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

}
