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
      apiKey: "AIzaSyDHynHmkdmfopsdv*IJVkmdkv89ijKVMd8ivJ(Iv",
      authDomain: "jta-instagram-clone-c5308.firebaseapp.com",
      databaseURL: "https://firebaseio.com",
      projectId: "",
      storageBucket: "appspot.com",
      messagingSenderId: "8764568283230347236"
    };

    fb.initializeApp(config)
  }

}
