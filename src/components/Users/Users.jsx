import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "./../../assets/img/photo.png"
import style from "./users.module.css"

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div className={style.usersPage}>
        <div className={style.item}>
            <div className={style.itemsPage}>
                <div className={style.countPage}>{
                    pages.map(p => {
                        return <div className={props.currentPage === p && style.selectedPage}
                            onClick={(e) => { props.onPageChanged(p); }}> {p}</div>
                    })
                }</div>
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <div className={style.item_users}>
                        <div className={style.users}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img className={style.img} src={u.photos.small != null ? u.photos.small : userPhoto} />
                                </NavLink>
                            </div>
                            <div>
                                {u.followed
                                    ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id);
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "4843f12d-0ef6-4935-a403-700e690cf031"
                                            }
                                        })
                                            .then((response) => {
                                                if (response.data.resultCode == 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            })

                                    }} >Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                        props.toggleFollowingProgress(true, u.id);
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "4843f12d-0ef6-4935-a403-700e690cf031"
                                            }
                                        })
                                            .then((response) => {
                                                if (response.data.resultCode == 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id);
                                            })
                                    }} >Follow</button>
                                }
                            </div>
                        </div>
                        <div className={style.location}>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{"u.location.city"}</div>
                                <div>{"u.location.country"}</div>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>

    </div >
}

export default Users;