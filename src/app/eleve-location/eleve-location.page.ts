import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-eleve-location',
  templateUrl: './eleve-location.page.html',
  styleUrls: ['./eleve-location.page.scss'],
})
export class EleveLocationPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {

  }

  goTo(id: number) {
    this.navCtrl.navigateForward("/trajets")
  }

  goBack() {
    this.navCtrl.back()
  }

  async getCurrentLocation() {
    let granted = false
    const permision = await Geolocation.checkPermissions()
    console.log(permision);
    
    if(permision.location != "granted") {
        const requestPermissions = await Geolocation.requestPermissions()
        console.log(requestPermissions);

        if(requestPermissions.location != "granted") {
          return;
        }
    }
    
    const coordinates = await Geolocation.getCurrentPosition();
    console.log(coordinates);

  }

}
