import React from 'react';
import classnames from 'classnames';

export const Input = ({ className, ...rest }) => {
    return <input className={classnames('input', className)} {...rest} />;
};