import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ActionSheetController, AlertController, LoadingController, ToastController} from "ionic-angular";

/*
  Generated class for the UtilityProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export const PLEASE_WAIT = 'Please wait...';
export const ERROR_TITLE = 'Error';
export const ERROR_MESSAGE = 'Something went wrong, please try again';


@Injectable()
export class UtilityProvider {

  loading: any;

  constructor(public http: HttpClient, public alertCtrl: AlertController, public toastCtrl: ToastController, public loaderCtrl: LoadingController,
              public actionSheetCtrl: ActionSheetController) {
    console.log('Hello UtilityProvider Provider');
  }

  validateEmail(email): boolean {
    console.log(email)
    var emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log("write later phone no  here ")
    return emailValid.test(String(email).toLowerCase());
  }

  showAlert(title, message) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
  }

  showLoader(msg) {
    this.loading = this.loaderCtrl.create({
      spinner: 'circles',
      content: msg
    });
    this.loading.present();
  }

  hideLoader() {
    this.loading.dismissAll();
  }

  showAlertWithPop(title, message, navCtrl) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  presentActionSheet() {
    return new Promise((resolve, reject) => {
      this.actionSheetCtrl.create({
        title: 'Select Image Source',
        buttons: [
          {
            text: 'Load from Library',
            handler: () => {
              resolve('Library');
            }
          },
          {
            text: 'Use Camera',
            handler: () => {
              resolve('Camera');
            }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      }).present()
    })

  }
}
