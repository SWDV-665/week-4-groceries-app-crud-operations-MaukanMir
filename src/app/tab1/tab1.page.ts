import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],

})
export class Tab1Page {
  title = 'Grocery Items';
  items = [
    // {
    //   name:'Milk',
    //   quantity:2,
    // },
    // {
    //   name:'Olive oil',
    //   quantity:1,
    // },
    // {
    //   name:'bread',
    //   quantity:1,
    // },
  ];

  constructor(public toastController: ToastController, public alertController: AlertController ) {}


  async removeItem(item,index){
    console.log('removing item: ',item,index);
    const toast = await this.toastController.create({
      message: `Removing the item: ${item.name}`,
      duration: 2000
    });
    toast.present();
    this.items.splice(index,1);
  }

  async shareItem(item,index){
    console.log('sharing item: ',item,index);
    const toast = await this.toastController.create({
      message: `Sharing the item: ${item.name}`,
      duration: 2000
    });
    toast.present();
    this.items.splice(index,1);
  }

   async editItem(item,index){
    console.log('Editing item: ',item,index);
    const toast = await this.toastController.create({
      message: `Editing the item: ${item.name}`,
      duration: 2000
    });
    toast.present();
    this.editAlertPrompt(item,index);
  }

  addItem(){
    console.log('adding item');
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Please Enter an Item',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Item'
        },
        {
          name: 'quantity',
          type: 'text',
          id: 'item-id',
          placeholder: 'Quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: data=> {
            console.log('Confirm Cancel',data);
          }
        }, {
          text: 'save',
          handler: data => {
            console.log('Confirm Ok',data);
            this.items.push(data);
          }
        }
      ]
    });

    await alert.present();
  }



  async editAlertPrompt(item,index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Edit Your Item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Item',
          value: item.name
        },
        {
          name: 'quantity',
          placeholder: 'Quantity',
          value:item.quantity
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: data=> {
            console.log('Confirm Cancel',item.name);
          }
        }, {
          text: 'save',
          handler: item=> {
            console.log('Confirm Ok',item);
            this.items[index] = item;
          }
        }
      ]
    });

    await alert.present();
  }
};

