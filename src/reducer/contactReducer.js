import { connect } from "react-redux";

const initialState = [
    {
        id: 1,
        name:"venky",
        number: 9632587410,
        mail: "venky@gmail.com"
    },
    {
        id: 2,
        name:"Happy",
        number: 7410258963,
        mail: "Happy@gmail.com"
    },
]

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTECT":
            state = [...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updatestate = state.map(connect =>connect.id === action.payload.id ? action.payload : connect)
            state = updatestate;
            return state;
        default:
            return state;
    }

}
export default contactReducer;