import React, { useEffect, useState } from 'react'
import FeedCard from './FeedCard'
import axiosAPI from '../Services/axios-api';


export default function FeedContainer() {
    const [allPosts, setAllPosts] = useState(null)

    const [postInteraction, setPostInteraction] = useState(false);

    function interaction(){
        setPostInteraction(!postInteraction)
    }


    useEffect(() => {
        async function getAllPosts() {
            try {
                const loadPosts = await axiosAPI.get('posts')
                const { data } = loadPosts
                setAllPosts(data.data)
                
            } catch (error) {
                console.log(error)
            }
        }
        getAllPosts();
    }, [postInteraction])

    return (
        <>
           
            {allPosts === null && <h3>Carregando...</h3>}
            {
                allPosts && //Se houver devolve true
                allPosts.map(post => (
                    <FeedCard
                        id={post._id}
                        picture={post.picture}
                        description={post.description}
                        user={post.user}
                        avatar={post.user.avata}
                        likes={post.likes} 
                        interactionCard={interaction}
                        />
                        
                ))
            }
        </>
    )
}
