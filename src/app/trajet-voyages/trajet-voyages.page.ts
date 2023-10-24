import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trajet-voyages',
  templateUrl: './trajet-voyages.page.html',
  styleUrls: ['./trajet-voyages.page.scss'],
})
export class TrajetVoyagesPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goBack() {
    // this.navCtrl.navigateBack("/trajets")
    this.navCtrl.back()

  }
}
