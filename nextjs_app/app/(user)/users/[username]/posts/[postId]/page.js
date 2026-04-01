const SinglePage = async(props)=>{
    const user = await props.params;

    return(
        <>
        <h1>user = {user.username}</h1>
        <p>postId:{user.postId}</p>
        </>
    )
}

export default SinglePage