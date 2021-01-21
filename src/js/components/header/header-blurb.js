import React from 'react';
import {icon} from '../helpers/icons';

export function HeaderBlurb({iconName, text, className=''}) {
    return (
        <div className={`header__blurb ${className}`}>
            <span className="header__blurb__icon">{icon[iconName]}</span>
            <span className="header__blurb__text">{text}</span>
        </div>
    );
}