export const passData=(data)=>{
    return (dispatch)=>{
        dispatch({
        type:"pass",
        payload:data
    })
}

}

export const unPassData=(data)=>{
    return (dispatch)=>{
        dispatch({
        type:"unPass",
        payload:data
    })
}

}