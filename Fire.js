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
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };

            this.db.push(message);
        })
    };

    parse = message => {
        const {user, test, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        }
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off();
    };

    get db() {
        return firebase.database().ref("messages")
    };

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}


export default new Fire();