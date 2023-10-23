const initialState='/'

const LockStore=(state=initialState,action)=>{
    switch(action.type){
        case "lock":return action.payload;
        default: return initialState;
    }
}

export default LockStore;