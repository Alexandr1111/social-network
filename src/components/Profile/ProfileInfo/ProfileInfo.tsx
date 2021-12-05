import React, {ChangeEvent, FC, useState} from "react";
import c from "./ProfileInfo.module.css";
import user from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false);

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = ( formData: ProfileType ) => {
        saveProfile(formData)
            .then(() => setEditMode(false));
    }

    return (
        <div>
            <div>
                {/*<img src="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png" alt=""/>*/}
            </div>
            <div className={c.descriptionBlock}>
                <img src={profile.photos.large || user} alt="" className={c.mainPhoto}/>
                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
                <div>
                    <div>
                        <b>Status</b>: <ProfileStatus status={status} updateStatus={updateStatus}/>
                    </div>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
                        : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={() => setEditMode(true)} />}
                </div>
            </div>
        </div>
    )
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    activateEditMode: () => void
}

const ProfileData: FC<ProfileDataPropsType> = ({profile, isOwner, activateEditMode}) => {
    return (
        <>
            <div>
                <b>FullName</b>: {profile.fullName && profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription && profile.lookingForAJobDescription}
            </div>}
            <div>
                <b>About me</b>: {profile.aboutMe && profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
            })}
            </div>
            {isOwner &&<div>
                <button className={c.btn} onClick={activateEditMode}>Редактировать</button>
            </div>}
        </>
    )
}

type ContactPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return (
        <div className={c.contact}>
            <b>{contactTitle}</b>: <a className={c.contactValue} href={contactValue} target='_blank' rel='noreferrer'><b>{contactValue}</b></a>
        </div>
    )
}

export default ProfileInfo;
