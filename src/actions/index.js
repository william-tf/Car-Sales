export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_ADDED_FEATURE = "REMOVE_ADDED_FEATURE"

export const addFeature = (feature)=>{
    return({type:ADD_FEATURE, payload:feature})
}

export const removeFeature = (feature) =>{
    return({type:REMOVE_ADDED_FEATURE, payload:feature})
}

