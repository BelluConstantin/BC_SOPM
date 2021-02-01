import { Component } from '@angular/core';

import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public lightsLivingRoom: string[]
  public lightsBedRoom: string[]
  public lightsOutside: string[]
  

  constructor(public alertController: AlertController) {

    this.lightsLivingRoom = [
      'Tavan',
      'Televizor',
      'Veioza'
    ];
    
    this.lightsBedRoom = [
      'Tavan',
      'Veioza dreapta',
      'Veioza stanga'
    ];

    this.lightsOutside= [
      'Usa principala',
      'Balcon',
      'Usa garaj'
    ];
  } 
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Locatie',
      inputs: [
        {
          name: 'lightsLivingRoom',
          type: 'radio',
          label: 'Sufragerie',
          value: 'value1',
          checked: true
        },
        {
          name: 'lightsBedRoom',
          type: 'radio',
          label: 'Dormitor',
          value: 'value2'
        },
        {
          name: 'lightsOutside',
          type: 'radio',
          label: 'Exterior',
          value: 'value3'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Nume',
          handler: async() => {
            const alert = await this.alertController.create({
              header: 'Denumire',
              inputs:[
                {
                  name: 'name1',
                  type: 'text',
                  placeholder: 'Denumire lumina'
                },
              ],
              buttons: [
                {
                  text:'Confirmare',
                  role: 'cancel',
                  handler: ()=> {
                    console.log('');
                  }
                }
              ]
            });
            await alert.present();
          }
        }
      ]
    });

    await alert.present();
  }
}
