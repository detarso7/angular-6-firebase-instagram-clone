import { Component, OnInit } from '@angular/core';
import * as fb from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit():void{

    var config = {
      apiKey: "AIzaSyDHynHLpuGEEhol7jJN1ehU1HtKW264xe8",
      authDomain: "jta-instagram-clone-c5308.firebaseapp.com",
      databaseURL: "https://jta-instagram-clone-c5308.firebaseio.com",
      projectId: "jta-instagram-clone-c5308",
      storageBucket: "jta-instagram-clone-c5308.appspot.com",
      messagingSenderId: "876828303476"
    };

    fb.initializeApp(config)
  }

}
