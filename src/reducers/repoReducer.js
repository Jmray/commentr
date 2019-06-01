const initialState = {
    currentRepo: '',
    comments: [],
    replies: [1],
};



function repoReducer(state = initialState, action) {
    const { type, payload } = action;
    console.log(action);
    console.log(state);

    const reducer = {
       
        repo: {
            ...state,
            ...payload
        },
    
        

    };

    return reducer[type] || state;
};

export default repoReducer;