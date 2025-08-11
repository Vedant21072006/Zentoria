export const setvalue=(place)=>{
    localStorage.setItem("location",place)
}
export const getvalue=()=>{
    return localStorage.getItem("location")
}