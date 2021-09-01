export const createComment = (comment) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        //async call to db
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('comments').add({
            ...comment,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_COMMENT', comment});
        }).catch((err) => {
            dispatch({ type: 'CREATE_COMMENT_ERROR', err});
        })
       

    }
};