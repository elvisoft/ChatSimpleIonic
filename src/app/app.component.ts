import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCQduzotX5LtXwYFHCvvhLBWeqKlPP0_C0",
    authDomain: "chatsimple-965a9.firebaseapp.com",
    databaseURL: "https://chatsimple-965a9.firebaseio.com",
    projectId: "chatsimple-965a9",
    storageBucket: "chatsimple-965a9.appspot.com",
    messagingSenderId: "667987505749",
    appId: "1:667987505749:web:96c2b31dbde67b8108dadc"
  };

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    firebase.initializeApp(firebaseConfig);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
