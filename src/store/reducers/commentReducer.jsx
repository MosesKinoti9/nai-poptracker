const initState = {
    comments: [
        {id: '1', title: 'Few People masking in BuruBuru', content: 'Folks not masking'},
        {id: '1', title: 'Few People masking in BuruBuru', content: 'Folks not masking'},
        {id: '1', title: 'Few People masking in BuruBuru', content: 'Folks not masking'}
    ]
}

const commentReducer = (state = initState, action) => {

    switch (action.type){
        case 'CREATE_COMMENT':
            console.log('comment posted', action.comment);
            return state;
        case 'CREATE_COMMENT_ERROR':
            console.log('comment posting error', action.err);
            return state;
        default:
            return state;
    }
    
}

export default commentReducer