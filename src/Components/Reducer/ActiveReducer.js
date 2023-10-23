const initialState='/'

const ActiveStore=(state=initialState,action)=>{
    switch(action.type){
        case "ActiveStore":return action.payload;
        default: return initialState;
    }
}

export default ActiveStore;