import React, { useState } from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input type="text" value={props.status} onBlur={deactivateEditMode} autoFocus />
                  </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                  </div>}

        </div>
    )
}

export default ProfileStatus;
