import React, {FC, memo, useEffect} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {FilterType} from "../../types/types";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFilter, getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/selectors/users-selectors";
import {requestUsers, follow, unfollow} from "../../redux/users-reducer";

export type UsersProps = {}

interface FormValuesType {
    term: string
    friend: null | boolean
}

type PropsType = {
    // onSubmit: (userName: string) => void
    filter: FilterType
    onFilterChanged: (filter: FilterType) => void
}

const UsersSearchForm: FC<PropsType> = memo((props) => {
    const initialValues: FormValuesType = {term: '', friend: null};

    const submit = (values: FilterType, actions: FormikHelpers<FormValuesType>) => {
        console.log({values, actions});
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
                    <Field type="text" name="term" placeholder="Start typing..."/>
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

export const Users: FC<UsersProps> = (props) => {

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter));
    }, [])

    const users = useSelector(getUsers);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getFilter);
    const followingInProgress = useSelector(getFollowingInProgress);

    const dispatch = useDispatch();

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter));
    }

    const followDispatch = (userId: number) => {
        dispatch(follow(userId));
    }

    const unfollowDispatch = (userId: number) => {
        dispatch(unfollow(userId));
    }

    return (
        <div>
            <UsersSearchForm filter={filter} onFilterChanged={onFilterChanged}/>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount}
                pageSize={pageSize}
            />
            {users.map(u => <User user={u} key={u.id} followingInProgress={followingInProgress} follow={followDispatch}
                                  unfollow={unfollowDispatch} />)}
        </div>
    )
}