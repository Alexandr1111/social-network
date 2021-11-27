import React, {FC, memo} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {FilterType, UserType} from "../../types/types";
import {Field, Form, Formik, FormikHelpers, FormikProps, withFormik} from "formik";

export type UsersProps = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    filter: FilterType

    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
    onFilterChanged: ( filter: FilterType ) => void
}

interface FormValuesType {
    term: string
    friend: null | boolean
}

type PropsType = {
    // onSubmit: (userName: string) => void
    filter: FilterType
    onFilterChanged: ( filter: FilterType ) => void
}

const UsersSearchForm: FC<PropsType> = memo((props) => {
    const initialValues: FormValuesType = { term: '', friend: null };

    const submit = (values: FilterType, actions: FormikHelpers<FormValuesType>) => {
        console.log({ values, actions });
        // actions.setSubmitting(false);
        props.onFilterChanged(values);
        // actions.resetForm();
    }

    return (
        <div>
            <h1>Пользователи</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
            >
                <Form>
                    <Field type="text" name="term" placeholder="Start typing..." />
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <button type="submit">Find</button>
                </Form>
            </Formik>
        </div>
    )
})

// interface MyFormProps {
//     searchUser: (userName: string) => void
// }

// const MyForm = withFormik<MyFormProps, FormValuesType>({
//     // Transform outer props into form values
//     mapPropsToValues: props => {
//         return {
//             searchingUser: ''
//         };
//     },
//
//     // Add a custom validation function (this can be async too!)
//     // validate: (values: FormValues) => {
//     //     let errors: FormikErrors<FormValues> = {};
//     //     if (!values.email) {
//     //         errors.email = 'Required';
//     //     } else if (!isValidEmail(values.email)) {
//     //         errors.email = 'Invalid email address';
//     //     }
//     //     return errors;
//     // },
//
//     handleSubmit: values => {
//         alert(JSON.stringify(values))
//         // do submitting things
//     },
// })(InnerForm);

const Users: FC<UsersProps> =
    ({totalUsersCount, pageSize, currentPage, onPageChanged, users, follow, unfollow, followingInProgress, filter, onFilterChanged}) => {
    return (
        <div>
            <UsersSearchForm filter={filter} onFilterChanged={onFilterChanged} />
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            {users.map(u => <User user={u} key={u.id} followingInProgress={followingInProgress} follow={follow}
                                  unfollow={unfollow}/>)}
        </div>
    )
}

export default Users;
