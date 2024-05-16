import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectUserById } from './usersSlice'
import { SelectPostByUser, selectAllPosts } from '../posts/postsSlice'

const UserPage = () => {
    
    const {userId} = useParams() // user id ha vagurom useParam use panni
    
    const user = useSelector(state => selectUserById(state, Number(userId)))//user ha select panni inga kondu varom
// ya number ha use pandrom na string tha varum athaa number ha covert pandrom apoo === pottum podhu work aakum
  
    // const postForUser = useSelector(state => {
    //     const allPosts = selectAllPosts(state)
    //     return allPosts.filter(post => post.userId === Number(userId)) //filter aagi aagi kamikarathunala andha page vandhu render aakum so intha stop panna ha memoztion ha use panna porom (see down the chageing code | )
    // })

    const postForUser = useSelector(state => SelectPostByUser(state, Number(userId)))

     const postTitles = postForUser.map(post =>(
        <li key={post.id}><Link to={`/post/${post.id}`}>{post.title}</Link></li>
     ))

    return (
        <section>
        <h2>{user?.name}</h2>

        <ol>{postTitles}</ol>
    </section>
)
}

export default UserPage