import React, { useState, useEffect } from "react";

const ProfileStatus = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.target.value);
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input value={status} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus />
                  </div>
                : <div>
                    <span onDoubleClick={activateEditMode}>{status || '-----'}</span>
                  </div>}

        </div>
    )
}

export default ProfileStatus;
