import React, { useState } from 'react'

import OutHeart from '../Assets/imgs/heart-null.svg';
import FilltHeart from '../Assets/imgs/heart-preench.svg';
import axiosAPI from '../Services/axios-api';

export default function FeedCard({ key, picture, description, user, avatar, likes, id, interactionCard }) {
  const [userId, setUserId] = useState(localStorage.getItem('InstagramUserId'))
  async function likePost() {
    try {
      await axiosAPI.post(`post/${id}/like`, null, {
        headers: {
          user_id: userId
        }
      })
    } catch (error) {
      alert(error)
    }
    interactionCard()
  }

  async function unlikePost() {
    try {
      await axiosAPI.post(`post/${id}/dislike`, null, {
        headers: {
          user_id: userId
        }
      })

    } catch (error) {
      alert(error)
    }
    interactionCard()
  }

  return (
    <>

      <div className='card-container'>
        <div className='card-header'>
          <img src={avatar} />
          <h2>{user.username}</h2>
        </div>
        <div className='card-photo'>
          <img src={picture} alt='image' />
        </div>
        <div className='card-footer'>
          <div className='card-metadata'>
            {likes.includes(userId) ? <img src={FilltHeart} onClick={() => { unlikePost() }} alt='likes' /> : <img src={OutHeart} onClick={() => { likePost() }} alt='likes' />}

            {
              likes > 1 ?
                <h3>{likes.length} pessoas gostaram</h3>
                : likes === 1 ?
                  <h3>{likes.length} pessoa gostou</h3>
                  :
                  null
            }
          </div>
          <div className='card-info'>
            <p><a href='/feed'>{user.username}</a> {description}</p>
          </div>

        </div>
      </div>
    </>
  )
}
