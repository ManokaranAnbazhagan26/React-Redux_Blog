import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";

const PostsExcerpt = ({postId}) => {
  
  const post = useSelector(state => selectPostById(state, postId))

  return (
    <article>
      <Link   to={`post/${post.id}` } style={{ textDecoration: 'none', color: 'inherit' }}>
    <h2>{post.title}</h2>
    <p className="excerpt">{post.body.substring(0, 75)}...</p>
    <p className="postCredit">
        
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
    </p></Link>
    <ReactionButtons post={post} />
</article>
)
}
// PostsExcerpt = React.memo(PostsExcerpt) // so ipd memo panna ha yadha change pandromoo athu mattum tha render aakum

export default PostsExcerpt 