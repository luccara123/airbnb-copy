// always returns an object that have a property of type

export default (openClose, content) =>{
    return{
        type: "OPEN_MODAL",
        payload: {
            openClose,
            content,
        }
    }
}
