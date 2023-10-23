const initialStates=''

const SettingStore=(state=initialStates,action)=>{
    switch(action.type){
        case "Setting":return action.payload;
        default:return initialStates
    }
}

export default SettingStore;