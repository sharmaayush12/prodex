const initialState=false

const storeSide=(state=initialState,action)=>{
    switch(action.type){
        case "Storeside":return action.payload;
        default: return initialState;
    }
}

export default storeSide;