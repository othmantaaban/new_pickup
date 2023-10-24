import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-trajets',
  templateUrl: './trajets.page.html',
  styleUrls: ['./trajets.page.scss'],
})
export class TrajetsPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  goToTrajet(id: number) {
    this.navCtrl.navigateForward(`/trajet/${id}`)
  }

  goTo() {
    this.navCtrl.navigateRoot(`/eleves-location`)
  }

}
