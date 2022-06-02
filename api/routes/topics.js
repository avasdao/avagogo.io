/* Import modules. */
const moment = require('moment')
const superagent = require('superagent')
const { v4: uuidv4 } = require('uuid')

/**
 * Topics Module
 */
const topics = async function (req, res) {
    // const message = {
    //     data: {
    //         type: 'warning',
    //         content: 'A new weather warning has been created!',
    //     },
    //     topic: 'weather',
    //     // condition: "'weather' in topics && ('news' in topics || 'traffic' in topics)",
    // }

    // Create a list containing up to 500 registration tokens.
    // These registration tokens come from the client FCM SDKs.
    const registrationTokens = [
        'YOUR_REGISTRATION_TOKEN_1',
        'YOUR_REGISTRATION_TOKEN_2'
    ]

    const message = {
        tokens: registrationTokens,
        notification: {
            body: 'This is an FCM notification that displays an image!',
            title: 'FCM Notification',
        },
        apns: {
            payload: {
                aps: {
                    'mutable-content': 1,
                },
            },
            fcm_options: {
                image: 'image-url',
            },
        },
        android: {
            notification: {
                image: 'image-url',
            },
        },
    }

    admin
        .messaging()
        .send(message)
        .then(response => {
            console.log('Successfully sent message:', response)
        })
        .catch(error => {
            console.log('Error sending message:', error)
        })
}

/* Export module. */
module.exports = topics
