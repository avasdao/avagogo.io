const admin = require('firebase-admin')

const token = 'cN1JoK-qTnKnY0o1rTA0Xa:APA91bGIHXRjYzlZArOxSk6bV69OMrnhwK7VPXwd_Bj827dL3UYf563e_1yET6h_nvQj6xmBUeaqookmC-Z39-HHIcv2yrbDY1jm6lQ7jLYksufPKMpiQWPB67wdiaNG94tL8h-zSSAZ'

const notification = {
    title: 'FCM Notification',
    body: 'This is an FCM notification that displays an image!',
}

const apns = {
    payload: {
        aps: {
            'mutable-content': 1,
        },
    },
    fcm_options: {
        image: 'https://avagogo.io/logo.png',
    },
}

const android = {
    notification: {
        image: 'https://avagogo.io/logo.png',
    },
}

const message = {
    token,
    notification,
    apns,
    android,
}

/* Set service account. */
const serviceAccount = require('./.admin.json')

/* Initialize application. */
admin
    .initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })

/* Send notifications. */
// admin
//     .messaging()
//     .send(message)
//     .then(response => {
//         console.log('Successfully sent message:', response)
//     })
//     .catch(error => {
//         console.log('Error sending message:', error);
//     })

;(async () => {
    const response = await admin
        .messaging()
        .send(message)
        .catch(error => {
            console.log('Error sending message:', error)
        })
        console.log('Successfully sent message (async):', response)

})()

// ;(async () => {
//     const payload = {
//       notification: {
//           title: 'FCM Notification',
//           body: 'This is an FCM notification that displays an image!',
//           image: 'https://avagogo.io/logo.png',
//       },
//       // android: {
//       //   notification: {
//       //     image: 'https://avagogo.io/logo.png',
//       //   },
//       // },
//     }
//     console.log('PAYLOAD', payload);
//
//     await admin
//         .messaging()
//         .sendToDevice(
//             registrationTokens,
//             // owner.tokens, // ['token_1', 'token_2', ...]
//             payload,
//             {
//                 // Required for background/quit data-only messages on iOS
//                 contentAvailable: true,
//                 // Required for background/quit data-only messages on Android
//                 priority: 'high',
//             },
//         )
//         .catch(err => console.error(err))
// })()
