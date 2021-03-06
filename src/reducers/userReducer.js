const initialState = {
    username: '',
    email: '',
    id: null,
    image_url: '',
};



function userReducer(state = initialState, action) {
    const { type, payload } = action;
    const reducer = {
       
        user: {
            ...state,
            ...payload
        }

    };

    return reducer[type] || state;
};

export default userReducer;