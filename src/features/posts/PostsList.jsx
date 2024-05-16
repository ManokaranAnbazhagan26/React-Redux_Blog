import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts , getPostsError, getPostsStatus , fetchPosts, selectPostIds } from "./postsSlice";

import PostsExcerpt from "./PostsExcerpt";



const PostsList = () => {
    
    // const dispatch = useDispatch();
    const orderedPostsIds = useSelector(selectPostIds);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);
    
    // useEffect(()=>{
    //     if (postStatus === 'idle'){
    //         dispatch(fetchPosts())
    //     }
    // },[postStatus,dispatch])
    
    let content;
    if (postStatus === 'loading'){
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded'){
    // const orderedPosts = posts.slice().sort((a,b)=>b.data.localeCompare(a.date))

    content = orderedPostsIds.map(postId=> <PostsExcerpt key={postId.id} postId={postId}/>)

    }else if (postStatus === 'failed'){
        content = <p>{error}</p>
    }
    return(
        <section>
            {content}
        </section>
    )
}

export default PostsList