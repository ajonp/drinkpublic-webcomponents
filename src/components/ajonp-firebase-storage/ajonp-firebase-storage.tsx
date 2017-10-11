import { Component } from '@stencil/core';


@Component({
    tag: 'ajonp-firebase-storage',
    styleUrl: 'ajonp-firebase-storage.scss'
})
export class AjonpFirebaseStorage {

    componentDidLoad() {
    }

    render() {
        return (
            <div>
                <script src="/__/firebase/4.5.0/firebase-storage.js"></script>
            </div>
        );
    }
}