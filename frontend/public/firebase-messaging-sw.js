// importScripts('https://www.gstatic.com/firebasejs/5.5.9/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/5.5.9/firebase-messaging.js');
// importScripts('https://www.gstatic.com/firebasejs/5.5.9/firebase-database.js');
// importScripts('https://www.gstatic.com/firebasejs/5.5.9/firebase-firestore.js');
import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDGdHvQgttXEKYkihDzYhpsKc6CPavUlD4",
    authDomain: "matchon-1521d.firebaseapp.com",
    databaseURL: "https://matchon-1521d.firebaseio.com",
    projectId: "matchon-1521d",
    storageBucket: "matchon-1521d.appspot.com",
    messagingSenderId: "993144676136",
    appId: "1:993144676136:web:f6d488819130f42d4cba1d",
    measurementId: "G-B56KGDSW1X"
};

firebase.initializeApp(config);

firebase.firestore().settings({ timestampsInSnapshots: true })

// 백그라운드 상태에서 받은 알림 처리
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload)
    const title = "매치온!";
    const options = {
        // body: payload.data.message
        body: "qwer"
    };

    return self.registration.showNotification(title, options);
});


self.addEventListener('push', function (event) {
    console.log('[Service Worker] Push Received.');
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);
    console.log(event.data.json());
    const title = '매치온!';
    const options = {
        body: `${event.data.json().data.message}`,
    };
    event.waitUntil(self.registration.showNotification(title, options));
});

// window.addEventListener('beforeinstallprompt', function (event) {
//     event.preventDefault();
//     //@ts-ignore
//     window.promptEvent = event;
//     if (window.matchMedia('(display-mode: standalone)').matches) {
//         console.log('display-mode is standalone');
//     } else {
//         setVisible(true)
//     }
// });

// function addToHomeScreen() {
//     //@ts-ignore
//     window.promptEvent.prompt();
//     //@ts-ignore
//     window.promptEvent.userChoice.then((choiceResult: any) => {
//         if (choiceResult.outcome === 'accepted') {
//             console.log('User accepted the A2HS prompt')
//         } else {
//             console.log('User dismissed the A2HS prompt')
//         }
//     })
// }