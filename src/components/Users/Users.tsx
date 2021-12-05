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
import { useHistory, useLocation } from "react-router-dom";
import c from './Users.module.css'
// import queryString from "querystring";

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
        <div className={c.form}>
            <h1 style={{color: '#000003'}}>Пользователи</h1>
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
    const users = useSelector(getUsers);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const filter = useSelector(getFilter);
    const followingInProgress = useSelector(getFollowingInProgress);


    const dispatch = useDispatch();

    const history = useHistory();
    const { search } = useLocation();

    useEffect(() => {
        let actualTerm = '';
        let actualFriend = '';
        let actualPage = '';
        if (filter.term) {
             actualTerm = `term=${filter.term}`;
        }
        if (filter.friend) {
            actualFriend = `$friend=${filter.friend}`;
        }
        if (currentPage && currentPage !== 1) {
            actualPage = `$page=${currentPage}`;
        }
        history.push({
            pathname: '/users',
            search: `?${actualTerm}${actualFriend}${actualPage}`
        })
    }, [filter, currentPage])

    useEffect(() => {
        // const parsed = queryString.parse(search)    //todo: doesn`t work. why?
        
        const parsed = Object.fromEntries(search
            .slice(1)
            .split('$')
            .map(i => i.split('=')));

        dispatch(requestUsers(currentPage, pageSize, filter));
    }, [])

    const onPageChanged = (e: any, pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter));
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter));
        history.push(`${history.location.pathname}/${filter.term}`)
    }

    const followDispatch = (userId: number) => {
        dispatch(follow(userId));
    }

    const unfollowDispatch = (userId: number) => {
        dispatch(unfollow(userId));
    }

    return (
        <div className={c.users}>
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