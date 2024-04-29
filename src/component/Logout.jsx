const Logout = () =>{
    return(
        <button onClick={()=>{
            localStorage.setItem("auth","{}");
        }} >Logout</button>
    )
}

export default Logout;