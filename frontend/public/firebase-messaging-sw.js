importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js');

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

// 백그라운드 상태에서 받은 알림 처리
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {

    const title = "매치온 화이팅!";
    const options = {
        body: payload.data.message
    };

    return self.registration.showNotification(title, options);
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