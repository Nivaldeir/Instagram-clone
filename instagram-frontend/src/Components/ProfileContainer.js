import React, { useEffect, useState } from 'react'
import ProfileFeed from './ProfileFeed';
import Profileheader from './Profileheader';

import axiosAPI from '../Services/axios-api'




export default function ProfileContainer() {
  const [userId] = useState(localStorage.getItem('InstagramUserId'))
  const [userInformations, setUserInformations] = useState({})
  const [userPosts, setUserPosts] = useState({})
  
  useEffect(() => {
    async function getProfile() {
      try {
        const profileInfo = await axiosAPI.get(`users/${userId}`)
        const {data} = profileInfo
        console.log(data)
        setUserInformations(data.userInfo)
        setUserPosts(data.userPost)
      } catch (error) {
        
      }
    }
    getProfile()
  }, [])

  return (
    <>
      <main className='profile-container'>
        <Profileheader
          username={userInformations.username}
          name={userInformations.name}
          avatar={userInformations.avatar}
          description={userInformations.description}
          site={userInformations.site}
        />
        <ProfileFeed 
          userPoster={userPosts}
        />
      </main>
    </>
  )
}
