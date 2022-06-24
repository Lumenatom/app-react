import React, { useEffect, useState } from "react";
import classes from "./ProfileStatus.module.css"


const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])


    function activeteEditMode() {
        setEditMode(true);
    }
    function deactiveteEditMode() {
        setEditMode(false);
        props.updateStatus(status)
    }
    function onStatusChange(e) {
        setStatus(e.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
                <div className={classes.statusInp}>
                    <h2>Status:</h2>
                    <span onDoubleClick={activeteEditMode} >
                        {props.status || "-------"} </span>
                </div>
            }
            {editMode &&
                <div>
                    <div>
                        <input onChange={onStatusChange} value={status} onBlur={deactiveteEditMode} autoFocus={true} />
                    </div>
                    {/* <button>{props.status}</button> */}
                </div>
            }
        </div>
    )
}




export default ProfileStatusWithHooks;