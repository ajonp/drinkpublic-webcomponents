import { Component } from '@stencil/core';


@Component({
    tag: 'welcome-page',
    styleUrl: 'welcome-page.scss'
})
export class WelcomePage {

    componentDidLoad() {
    }

    render() {
        return (
            <ion-page class='show-page'>
                <ion-content padding>
                    <ion-grid>
                        <ion-row align-items-center>
                            <ion-col>
                            </ion-col>
                            <ion-col>
                                <img src="./assets/icon.png" />
                            </ion-col>
                            <ion-col>
                            </ion-col>
                        </ion-row>
                        <ion-row align-items-center>
                            <ion-col>
                            </ion-col>
                            <ion-col col-auto>
                                <h1>Welcome to Drink Public</h1>
                            </ion-col>
                            <ion-col>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <firebase-ui></firebase-ui>
                </ion-content>
            </ion-page>
        );
    }
}