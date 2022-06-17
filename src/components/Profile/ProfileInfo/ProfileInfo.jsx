import React from "react";
import Preloader from "../../common/preloader/Preloader";
import classes from "./ProfileInfo.module.css"
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.item}>
            {/* <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2020/02/Photoshop.panorama.stitch.mishra.chicago.skyline-1024x290.jpg' /> */}
            <div className={classes.content_block}>
                <div>
                    <img src={props.profile.photos.large} />
                    <h2>
                        {props.profile.aboutMe}
                    </h2>
                    <h2> Full Name: {props.profile.fullName}</h2>
                    <div className={classes.divS}>
                        Facebook: {props.profile.contacts.facebook}<br />
                        Website: {props.profile.contacts.website}<br />
                        Twitter: {props.profile.contacts.twitter}<br />
                        instagram:  {props.profile.contacts.instagram}<br />
                        Youtube: {props.profile.contacts.youtube}<br />
                        Github: {props.profile.contacts.github}<br />
                    </div>
                </div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
                {/* <img className={classes.img} src='https://static.vecteezy.com/system/resources/previews/002/205/989/large_2x/user-profile-icon-free-vector.jpg' />
                <div className={classes.about_me}>
                    <h2>
                        Arthur Shevtsov
                    </h2>
                    <p>Date of Bird: 22 jul<br /> Country: Ukraine <br />Status: developer</p>
                </div> */}
            </div>
        </div>

    )

}

export default ProfileInfo;