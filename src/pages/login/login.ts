import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = { username:null, bio:null };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if(localStorage.username) {
      this.user.username = localStorage.username;
      this.user.bio = localStorage.bio;
      this.navCtrl.push(HomePage, {
          username: localStorage.username, bio: localStorage.bio
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Login() {
      localStorage.username = this.user.username;
      localStorage.bio = this.user.bio;

      this.navCtrl.push(HomePage, {
          username: localStorage.username, bio: localStorage.bio
      });

  }

}
