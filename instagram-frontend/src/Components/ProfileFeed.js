import React from 'react'
import { AiFillHeart } from 'react-icons/ai';

export default function ProfileFeed({ userPoster }) {
  console.log(userPoster)
  return (
    <>
      <div className="profile-picts">
        
        { userPoster.length > 0 ?
        userPoster.map(post => (
            <div key={post._id}>
              <img src={post.picture} />
            </div>
          ))
        : null
        }
      </div>
    </>
  )
}
