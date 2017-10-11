import { Component } from '@stencil/core';


@Component({
    tag: 'ajonp-firebase-init',
    styleUrl: 'ajonp-firebase-init.scss'
})
export class AjonpFirebaseInit {

    componentDidLoad() {
    }

    render() {
        return (
            <div>
                <script src="/__/firebase/init.js"></script>
            </div>
        );
    }
}