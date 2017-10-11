import { Component } from '@stencil/core';

@Component({
  tag: 'ajonp-drinkpublic',
  styleUrl: 'ajonp-drinkpublic.scss'
})
export class AjonpDrinkPublic {

  render() {
    return (
      <ion-app>
        <ajonp-firebase-app-script></ajonp-firebase-app-script>
        <ajonp-firebase-auth-script></ajonp-firebase-auth-script>
        <ajonp-firebase-database-script></ajonp-firebase-database-script>
        <ajonp-firebase-messaging-script></ajonp-firebase-messaging-script>
        <ajonp-firebase-storage-script></ajonp-firebase-storage-script>
        <ajonp-firebase-init-script></ajonp-firebase-init-script>
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
