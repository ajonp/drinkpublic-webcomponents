import { Component } from '@stencil/core';

@Component({
  tag: 'ajonp-drinkpublic',
  styleUrl: 'ajonp-drinkpublic.scss'
})
export class drinkpublic {

  render() {
    return (
      <ion-app>
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
