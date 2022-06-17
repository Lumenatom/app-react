import { logDOM } from "@testing-library/react";
import React from "react";
import classes from "./ProfileStatus.module.css"


class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    activeteEditMode = () => {
        console.log(this);
        this.setState({
            editMode: true
        })
    }
    deactiveteEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div className={classes.statusInp}>
                        <h2>Status:</h2>
                        <span onDoubleClick={this.activeteEditMode}>
                            {this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <div>
                            <input autoFocus={true} onBlur={this.deactiveteEditMode.bind(this)} value={this.props.status} />
                        </div>
                        {/* <button>{props.status}</button> */}
                    </div>
                }
            </div>
        )
    }


}

export default ProfileStatus;