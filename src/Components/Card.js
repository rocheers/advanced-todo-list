import React from 'react';

export default ({avatar_url, login, name, location, email, repos}) => {
  return (
    <div>
      <img src={avatar_url} alt="user avatar" width="200px" height="200px" />
      <h3 className="ui header">{name}</h3>
      <div>{login}</div>
      <div>{location}</div>
      <div>{email}</div>
      <ol>
        {repos.map(repo => (
          <li key={repo.id}>
            <div>{repo.name}</div>
            <div>{repo.description}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}
