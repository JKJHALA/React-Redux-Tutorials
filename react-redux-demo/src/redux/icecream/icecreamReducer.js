import {buy_icecream} from './icecreamTypes'

const initialState ={
    numberOfIcecream: 10
}

 const icecreamReducer= ( state=initialState,action)=>{

    switch(action.type)
    {
        case buy_icecream: return{
            state: state,
            numberOfIcecream: state.numberOfIcecream -1
        }

        default:
        return state

    }


}

export default icecreamReducer;