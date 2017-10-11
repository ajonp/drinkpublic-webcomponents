import { Component } from '@stencil/core';


@Component({
    tag: 'ajonp-firebase-app',
    styleUrl: 'ajonp-firebase-app.scss'
})
export class AjonpFirebaseApp {

    componentDidLoad() {
    }

    render() {
        return (
            <div>
                <script src="/__/firebase/4.5.0/firebase-app.js"></script>
            </div>
        );
    }
}