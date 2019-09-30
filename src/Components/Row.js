import React from 'react'

export default ({ avatar_url, login, handleClick }) => {
  return (
    <div className="item" onClick={handleClick(login)}>
      <img src={avatar_url} alt="user avatar" className="ui avatar tiny image" />
      <div className="content">
        <div className="header">
          {login}
        </div>
      </div>
    </div>
  )
}
