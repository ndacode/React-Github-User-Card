import React from 'react';



const UserCard = props => {
    console.log(props)
    return (
       <div>
           <img src={props.img}/>
           <h1>{props.name}</h1>
           <h3>{props.login}</h3>
        <p>{props.bio}</p>
        <h4>{props.followers}</h4>
        <a>{props.html_url}</a>
       </div>
 )
}

export default UserCard;

// githubUrl={follower.url}
//         followers={follower.follower_url}
