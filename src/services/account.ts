import {Injectable} from '@angular/core';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import {Platform} from 'ionic-angular';
import {MeteorObservable} from "meteor-rxjs";

export interface AccountDetails  {
  name: string;
  password: string;
  profile?: Object;
}

@Injectable()
export class AccountService {
  constructor(private platform: Platform) {

  }

  verify(token: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      Accounts.verifyEmail(token, (e: Error) => {
        if (e) {
          return reject(e);
        }
        resolve();
      });
    });
  }

  sendVerification(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      MeteorObservable.call('sendVerification').subscribe({
        next: () => {
          resolve();
        },
        error: (e: Error) => {
          return reject(e);
        }
      });
    });
  }

  register(user: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // TODO: Put these calls into server side!
      Accounts.createUser({email: user, password: password}, (e: Error) => {
        if (e) {
          return reject(e);
        }
        let userId = Meteor.userId();
        if ( userId ) {
          // return Accounts.sendVerificationEmail( userId );
          this.sendVerification();
        }
        resolve();
      });
    });
  }

  login(user: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      Meteor.loginWithPassword(user, password, (e: Error) => {
        if (e) {
          return reject(e);
        }

        resolve();
      });
    });
  }

  loginGoogle(): Promise<void> {
    // TODO: fix issue with callback! meteor gets the callback and does not know what to do with it.
    // console.log(Meteor.absoluteUrl());
    return new Promise<void>((resolve, reject) => {
      Meteor.loginWithGoogle({loginStyle: 'popup', 'redirectUrl': 'http://localhost:3000/_oauth/google?close'}, (e: Error) => {
        if (e) {
          return reject(e);
        }

        resolve();
      });
    });
  }

  logout(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      Meteor.logout((e: Error) => {
        if (e) {
          return reject(e);
        }

        resolve();
      });
    });
  }
}
