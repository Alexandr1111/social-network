import React, { useState, useRef } from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [localStatus, setStatus] = useState(props.status);
    const statusInputRef = useRef();

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(localStatus);
    }

    const onStatusChange = () => {
        setStatus(statusInputRef.current.value);
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input type="text" value={localStatus || '-----'} ref={statusInputRef} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus />
                  </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{props.status}</span>
                  </div>}

        </div>
    )
}

export default ProfileStatus;
