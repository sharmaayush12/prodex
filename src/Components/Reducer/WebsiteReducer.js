const initialState=false

const WebsiteStore=(state=initialState,action)=>{
    switch(action.type){
        case "WebsiteStore":return action.payload;
        default: return initialState;
    }
}

export default WebsiteStore;