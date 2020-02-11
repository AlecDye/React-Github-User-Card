import React from "react";

const UserCard = props => {
    return (
        <div name="card">
            <div className="img-container">
                <img src={props.userList.avatar_url} />
            </div>
            <div className="text-container">
                <h3>{props.userList.login}</h3>
                <p>Followers: {props.userList.followers}</p>
                <p>Following: {props.userList.following}</p>
                <a href={props.userList.url}>GitHub Profile</a>
            </div>
        </div>
    )
}

export default UserCard;