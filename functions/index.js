const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);


 exports.helloWorld = functions.https.onRequest((request, response) => {
  
   response.send("Wagwan bro!");
 });

 const createNotification = (notification => {
     return admin.firestore().collection('notifications')
     .add(notification)
     .then(doc => console.log('notification added', doc));
 })

 exports.commentCreated = functions.firestore.document('comments/{commentId}')
 .onCreate(doc => {

    const comment = doc.data();
    const notification = {
        content: ' made a comment',
        user: `${comment.authorFirstName} ${comment.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
 });

 exports.userJoined = functions.auth.user()
 .onCreate(user => {

    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc => { 

        const newUser = doc.data();
        const notification = {
            content: 'joined as a new user',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }

        return createNotification(notification);

    })
 })
