import React from "react";
import userPhoto from "./../../assets/img/photo.png"
import style from "./users.module.css"

let Users = (props) => {
    return <div className={style.usersPage}>
        <div className={style.itemsPage}>
            <div className={style.countPage}>{
                pages.map(p => {
                    return <div className={this.props.currentPage === p && style.selectedPage}
                        onClick={(e) => { this.onPageChanged(p); }}> {p}</div>
                })
            }</div>
        </div>
        {
            this.props.users.map(u => <div key={u.id}>
                <div>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { this.props.unfollow(u.id) }} >Unfollow</button>
                            : <button onClick={() => { this.props.follow(u.id) }} >Follow</button>
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </div>
                </div>
            </div>)
        }
    </div >
}

export default Users;