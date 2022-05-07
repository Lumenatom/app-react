import React from "react";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(users: [
            {
                id: 1, photoUrl: 'https://www.meme-arsenal.com/memes/ef9c370f81baa60eeb292d620bd3595c.jpg',
                followed: false, fullName: 'Sergei', status: 'I am okay..', location: { city: 'Kharkov', country: 'Ukraine' }
            },
            {
                id: 2, photoUrl: 'https://www.meme-arsenal.com/memes/ef9c370f81baa60eeb292d620bd3595c.jpg',
                followed: true, fullName: 'Andrei', status: 'very good', location: { city: 'Kiev', country: 'Ukraine' }
            },
            {
                id: 3, photoUrl: 'https://www.meme-arsenal.com/memes/ef9c370f81baa60eeb292d620bd3595c.jpg',
                followed: false, fullName: 'Igor', status: 'I am okay..', location: { city: 'Kiev', country: 'Ukraine' }
            }
        ]
        )
    }


    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }} >Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;