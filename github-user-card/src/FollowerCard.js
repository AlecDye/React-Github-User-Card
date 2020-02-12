import React from "react";

const FollowerCard = props => {
    return (
        <div>
            {props.followerList.map(follower => (
                <div>
                    <div>
                        <img src={follower.avatar_url} key={follower} alt={follower} />
                    </div>
                    <div>
                        <h2>{follower.login}</h2>
                        <a href={follower.url}>GitHub Profile</a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default FollowerCard;