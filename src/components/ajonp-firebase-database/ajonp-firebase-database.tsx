import { Component } from '@stencil/core';


@Component({
    tag: 'ajonp-firebase-database',
    styleUrl: 'ajonp-firebase-database.scss'
})
export class AjonpFirebaseDatabase {

    componentDidLoad() {
    }

    render() {
        return (
            <div>
                <script src="/__/firebase/4.5.0/firebase-database.js"></script>
            </div>
        );
    }
}