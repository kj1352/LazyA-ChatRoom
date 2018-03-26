import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GetServiceProvider } from '../../providers/get-service/get-service';
import { PostServiceProvider } from '../../providers/post-service/post-service';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  queries: {
    content: new ViewChild('content')
  }
})
export class HomePage {
  user = { username:null, bio:null };
  chats : any;
  message = {text:null};

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public getService: GetServiceProvider, public postService: PostServiceProvider,
      private iab: InAppBrowser) {

      this.user.username = navParams.get('username');
      this.user.bio = navParams.get('bio');
      this.getService.getChatsData().subscribe(data => {
          this.chats = data.json();
      });

      Observable.interval(1000).subscribe(x => {
          this.Refresh();
      });

  }

  ionViewDidEnter(){
    this.content.scrollToBottom(300);//300ms animation speed
  }

  Send() {
    this.message.author = this.user.username;
    this.message.link = this.user.bio;
    this.message.published_date = new Date();
    this.postService.PostMyChat(this.message).subscribe(data => {
      this.Refresh();
      this.message  = {
        text: null
      }
    });
  }

  Refresh() {
    this.getService.getChatsData().subscribe(data => {
        this.chats = data.json();
    });
  }

  visitBio(bio) {
    const browser = this.iab.create(bio);
    browser.executeScript();
  }

}
