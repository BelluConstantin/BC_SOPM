import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 
  constructor(private menu: MenuController, 
              private router: Router,
              public afAuth: AngularFireAuth,
              public toastController: ToastController
              ) {}
  
  lockAction : boolean;
  
  public lockImageStatus = 'assets/lock-open-outline.svg'

  onToggle() {
    this.lockAction = true;
    this.lockImageStatus = 'assets/lock-closed-outline.svg';
  }

  offToggle() {
    this.lockAction = false;
    this.lockImageStatus =  'assets/lock-open-outline.svg';
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      this.router.navigate(['login']);
    })
  }
  doorStatus : string = 'incuiata';

  async doorLocked(){
    this.doorStatus = 'incuiata';
    const toast = await this.toastController.create({
      message: 'Usa principala a fost incuiata.',
      duration: 500
    });
    toast.present();
    
  }

  async doorUnlocked(){
    this.doorStatus = 'descuiata';
    const toast = await this.toastController.create({
      message: 'Usa principala a fost descuiata.',
      duration: 500
    });
    toast.present();
  }
}
