const initialState = {
    currentRepo: '',
};



function repoReducer(state = initialState, action) {
    const { type, payload } = action;
    const reducer = {
       
        repo: {
            ...state,
            ...payload
        }

    };

    return reducer[type] || state;
};

export default repoReducer;