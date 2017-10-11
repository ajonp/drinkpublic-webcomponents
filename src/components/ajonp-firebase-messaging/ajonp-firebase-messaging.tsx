import { Component } from '@stencil/core';


@Component({
    tag: 'ajonp-firebase-messaging',
    styleUrl: 'ajonp-firebase-messaging.scss'
})
export class AjonpFirebaseMessaging {

    componentDidLoad() {
    }

    render() {
        return (
            <div>
                {<script src="/__/firebase/4.5.0/firebase-messaging.js"></script>}
            </div>
        );
    }
}