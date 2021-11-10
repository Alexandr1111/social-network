import React, {FC} from 'react';
import s from './FormsControls.module.css';
import {WrappedFieldProps} from "redux-form";

type FormControlPropsType = {
    children: React.ReactNode
}

const FormControl: FC<FormControlPropsType & WrappedFieldProps> = (props: WrappedFieldProps & FormControlPropsType ) => {

    const hasError = props.meta.error && props.meta.touched;

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    )
}

type TextareaType = {
    restProps: string
}

export const Textarea: FC<TextareaType & WrappedFieldProps> = (props) => {

    const { input, meta, restProps } = props;

    return (
        <FormControl {...props}>
            <textarea {...input} {...props} {...restProps} />
        </FormControl>
    )
}

export const Input: FC<TextareaType & WrappedFieldProps> = (props) => {

    const { input, meta, restProps } = props;

    return (
        <FormControl {...props}>
            <input {...input} {...props} {...restProps} />
        </FormControl>
    )
}

// export const Textarea = ({input, meta, ...props}) => {
//
//     const hasError = meta.error && meta.touched;
//
//     return (
//         <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
//             <div>
//                 <textarea {...input} {...props} />
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

// export const Input = ({input, meta, ...props}) => {
//
//     const hasError = meta.error && meta.touched;
//
//     return (
//         <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
//             <div>
//                 <input {...input} {...props} />
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }
