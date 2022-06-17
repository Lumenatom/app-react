import { logDOM } from "@testing-library/react";
import React from "react";
import classes from "./ProfileStatus.module.css"


class ProfileStatus extends React.Component {


    state = {
        editMode: false,
        status: this.props.status,
    }

    activeteEditMode = () => {
        console.log(this);
        this.setState({
            editMode: true
        })
    }
    deactiveteEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className={classes.statusInp}>
                        <h2>Status:</h2>
                        <span onDoubleClick={this.activeteEditMode}>
                            {this.props.status || "-------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <div>
                            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveteEditMode} value={this.state.status} />
                        </div>
                        {/* <button>{props.status}</button> */}
                    </div>
                }
            </div>
        )
    }


}

export default ProfileStatus;