import React from 'react'


export default function Profileheader({name, username, avatar, description, site}) {
  return (
    <div className="profile-header">
      <img src={avatar} className="avatar" />
      <div className="profile-user-info">
        <h1>{username}</h1>
        <h2>{name}</h2>
        <p>{description}</p>
        <a href="#">{site}</a>
      </div>
    </div>
  )
}
