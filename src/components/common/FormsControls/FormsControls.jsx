import React from 'react';
import s from './FormsControls.module.css';

const FormControl = ({input, meta, children, ...props}) => {

    const hasError = meta.error && meta.touched;

    return (
        <div className={`${s.formControl} ${hasError ? s.error : ""}`}>
            <div>
                {children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {

    const { input, meta, child, restProps } = props;

    return (
        <FormControl {...props}>
            <textarea {...input} {...props} {...restProps} />
        </FormControl>
    )
}

export const Input = (props) => {

    const { input, meta, child, restProps } = props;

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
