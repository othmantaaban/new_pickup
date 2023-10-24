import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-eleves-location',
  templateUrl: './eleves-location.page.html',
  styleUrls: ['./eleves-location.page.scss'],
})
export class ElevesLocationPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {

  }

  goTo(id: number) {
    this.navCtrl.navigateForward(`/eleve-location/${id}`)
  }

  goBack() {
    this.navCtrl.navigateBack("/trajets")
    // this.navCtrl.back()

  }
}
