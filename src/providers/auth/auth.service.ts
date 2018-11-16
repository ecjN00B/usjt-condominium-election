import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { BaseService } from '../base/base.service';

@Injectable()
export class AuthService extends BaseService {

  constructor(public afAuth: AngularFireAuth) {
    super();
  }

  createAuthUser(user: {email: string, password: string}): any {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .catch(this.handlePromiseError);
  }

}
