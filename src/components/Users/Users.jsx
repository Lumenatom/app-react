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
                                    ? <button onClick={() => { props.unfollow(u.id) }} >Unfollow</button>
                                    : <button onClick={() => { props.follow(u.id) }} >Follow</button>
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