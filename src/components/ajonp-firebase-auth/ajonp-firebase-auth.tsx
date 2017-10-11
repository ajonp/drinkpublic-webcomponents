import { Component } from '@stencil/core';


@Component({
    tag: 'ajonp-firebase-auth',
    styleUrl: 'ajonp-firebase-auth.scss'
})
export class AjonpFirebaseAuth {

    componentDidLoad() {
    }

    render() {
        return (
            <div>
                {<script src="/__/firebase/4.5.0/firebase-auth.js"></script>}
            </div>
        );
    }
}