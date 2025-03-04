import Post from './Post'
import classes from './PostList.module.css'

function PostList(){
    const author = Math.random() > 0.5 ? 'Mikle' : 'Entony' ;
    const text = Math.random() > 0.5 ? 'First text' : 'Second text' ;

    const posts = [{author, text}, 
        {author : author === 'Mikle' ? 'Entony' : 'Mikle', text}]

    return (
        <ul className={classes.posts}>
            <Post author = {author} text = { text }/>
        {posts.map(post => <Post key = {post.author} author = {post.author} text = {post.text}  />)}
      </ul>
    )
}

export default PostList;