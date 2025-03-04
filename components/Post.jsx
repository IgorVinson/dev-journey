function Post(props){
    return (
        <li>
            <p className="author">{props.author}</p>
            <p className="text">{props.text}</p>
        </li> 
    )
}

 export default Post;