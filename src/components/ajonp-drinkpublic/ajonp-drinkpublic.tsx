import { Component } from '@stencil/core';

@Component({
  tag: 'ajonp-drinkpublic',
  styleUrl: 'ajonp-drinkpublic.scss'
})
export class AjonpDrinkPublic {

  render() {
    return (
      <ion-app>
        <ajonp-firebase-app></ajonp-firebase-app>
        <ajonp-firebase-auth></ajonp-firebase-auth>
        <ajonp-firebase-database></ajonp-firebase-database>
        <ajonp-firebase-messaging></ajonp-firebase-messaging>
        <ajonp-firebase-storage></ajonp-firebase-storage>
        <ajonp-firebase-init></ajonp-firebase-init>
        <stencil-router id='router'>
          <stencil-route
            url='/'
            component='welcome-page'
            exact={true}
          />
        </stencil-router>
      </ion-app>
    );
  }
}
