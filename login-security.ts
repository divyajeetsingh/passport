import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

/*
  Generated class for the LoginSecurityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export const LOGIN_KEY: string = "userToken";
export const USER_ID: string = "userId";
export const USER_PROFILE_ID: string = 'userProfileID';
export const USER_ROLE: string = 'userRole';
export const CRICKET_ID: string = 'cricketId';
export const FOOTBALL_ID: string = 'footballId';
export const BASKETBALL_ID: string = 'basketballId';
export const BASEBALL_ID: string = 'baseballId';
export const HOCKEY_ID: string = 'hockeyId';
export const RUGBY_ID: string = 'rugbyId';
export const GOLF_ID: string = 'golfId';
export const RUNNING_ID: string = 'runningId';
export const SOCCER_ID: string = 'soccerId';
export const SWIMMING_ID: string = 'swimmingId';

@Injectable()
export class LoginSecurityProvider {

  constructor(public http: HttpClient, public storage: Storage) {
    console.log('Hello LoginSecurityProvider Provider');
  }

  setLocalData(key, value) {
    return this.storage.set(key, value);
  }

  getToken(key) {
    return new Promise((resolve, reject) => {
      this.storage.get(key).then((data) => {
        if (data) {
          let accessToken = "JWT " + data;
          console.log(accessToken, "Access")
          resolve(accessToken);
        } else {
          reject();
        }
      }).catch((error) => {
        reject();
      });
    });
  }

  // getHeaders() {
  //   return new Promise((resolve, reject) => {
  //     this.getToken(LOGIN_KEY).then((token: any) => {
  //       let header: any = {};
  //       header.authorization = token;
  //       resolve(header)
  //     }).catch((error) => {
  //       console.log("error", error)
  //     })
  //   })
  // }

  getHeaders() {
    console.log("==getHeaders==");
    return new Promise((resolve, reject) => {
      // console.log("==resolve==", resolve);
      // console.log("==reject==", reject);
      this.getToken(LOGIN_KEY).then((accessToken) => {
        // console.log("==accessToken==", accessToken);
        let headers = new HttpHeaders({
          'Authorization': accessToken.toString(),

        });
        resolve(headers);
      }).catch((error) => {
        reject(error);
      });
    })
  }

  getHeadersWithoutCache() {
    console.log("==getHeaders==");
    return new Promise((resolve, reject) => {
      // console.log("==resolve==", resolve);
      // console.log("==reject==", reject);
      this.getToken(LOGIN_KEY).then((accessToken) => {
        // console.log("==accessToken==", accessToken);
        let headers = new HttpHeaders({
          'Authorization': accessToken.toString(),
          'Cache-control': 'no-cache',
          // 'Cache-control': 'no-store',
          // 'Expires': '0',
          // 'Pragma': 'no-cache'

        });
        resolve(headers);
      }).catch((error) => {
        reject(error);
      });
    })
  }

  getLocalData(key) {
    return new Promise((resolve, reject) => {
      this.storage.get(key).then((data) => {
        // console.log("==data get=", data)
        if (data) {
          resolve(data);
        } else {
          reject("123");
        }
      }).catch((error) => {
        reject("1213");
      });
    });
  }

  clearStorage() {
    this.storage.clear();
  }

}
