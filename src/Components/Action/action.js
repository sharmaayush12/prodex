export const sidebarstore=(value)=>{
    return{
        type:"Storeside",
        payload:value
    }
}

export const website=(value)=>{
    return{
        type:"WebsiteStore",
        payload:value
    }
}

export const headerActive=(value)=>{
    return{
        type:"ActiveStore",
        payload:value
    }
}

export const swapSetting=(value)=>{
    return{
        type:"Setting",
        payload:value
    }
}

export const Lock=(value)=>{
    return{
        type:"lock",
        payload:value
    }
}