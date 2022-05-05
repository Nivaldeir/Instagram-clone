import axiosAPI from '../Services/axios-api';
import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import {  LoginAuth, RequireAuth } from '../Utils/Login'
import InputSantard from './InputSantard';

import Feed from '../Pages/Feed';


export default function PostContainer() {
  const [picture, setPicutre] = useState()
  const [description, setDescription] = useState()

  async function postImage(e) {
    e.preventDefault();
    const data = {
      picture,
      description
    }
    try {
      await axiosAPI.post('posts', data,
        {
          headers: {
            user: localStorage.getItem('InstagramUserId')
          }
        })
      console.log('sucesso')
      window.location.href = "/feed"
  } catch (error) {
    alert(error.message)
  }

}

return (
  <main className="post-container">
    <img src='' />
    <form>
      <div className="content">
        <InputSantard
          id='foto'
          type='text'
          placeholder='Link da foto'
          state={picture}
          setState={e => setPicutre(e.target.value)}

        />
      </div>
      <div className="content">
        <InputSantard
          id='Usuario'
          type='text'
          placeholder='Descricao'
          state={description}
          setState={e => setDescription(e.target.value)}

        />
      </div>

      <button onClick={postImage}>Posta Image</button>
    </form>
  </main>
)
}
