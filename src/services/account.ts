import {Injectable} from '@angular/core';
import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import {Platform} from 'ionic-angular';

export interface AccountDetails  {
  name: string;
  password: string;
  profile?: Object;
}

@Injectable()
export class AccountService {
  constructor(private platform: Platform) {

  }

  verify(email: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      // Accounts.requestPhoneVerification(phoneNumber, (e: Error) => {
      //   if (e) {
      //     return reject(e);
      //   }
      //
      //   resolve();
      // });
    });
  }

  register(user: string, password: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      Accounts.createUser({email: user, password: password}, (e: Error) => {
        if (e) {
          return reject(e);
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
