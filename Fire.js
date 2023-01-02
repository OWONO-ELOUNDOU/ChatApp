import firebase from 'firebase'

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if(!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyD4Gft-tQVGdAkPxEnUABcsJlz8SdmQ0SE",
                authDomain: "chatapp-87ee6.firebaseapp.com",
                projectId: "chatapp-87ee6",
                storageBucket: "chatapp-87ee6.appspot.com",
                messagingSenderId: "249803278224",
                appId: "1:249803278224:web:b82522eaa78e034f959515"
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChange(user => {
            if(!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP
            }
        })
    }
}