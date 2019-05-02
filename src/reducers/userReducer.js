const initialState = {
    username: '',
    email: '',
    id: null,
};



export function userReducer(state = initialState, action) {
    const { type, payload } = action;
    const reducer = {
        username: {
            ...state,
            username: payload, 
        },
        email: {
            ...state,
            email: payload,
        },
        id: {
            ...state,
            id: payload,
        }

    };

    return reducer[type] || state;
};