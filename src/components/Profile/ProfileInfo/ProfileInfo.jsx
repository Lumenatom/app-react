import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div className={classes.item}>
            <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2020/02/Photoshop.panorama.stitch.mishra.chicago.skyline-1024x290.jpg' />
            <div className={classes.content_block}>
                <img className={classes.img} src='https://static.vecteezy.com/system/resources/previews/002/205/989/large_2x/user-profile-icon-free-vector.jpg' />
                <div className={classes.about_me}>
                    <h2>
                        Arthur Shevtsov
                    </h2>
                    <p>Date of Bird: 22 jul<br /> Country: Ukraine <br />Status: developer</p>
                </div>
            </div>
        </div>

    )

}

export default ProfileInfo;