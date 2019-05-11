const initialState = {
    username: '',
    email: '',
    id: null,
    imageUrl: '',
};



export function userReducer(state = initialState, action) {
    const { type, payload } = action;
    const reducer = {
       
        user: {
            ...state,
            ...payload
        }

    };

    return reducer[type] || state;
};