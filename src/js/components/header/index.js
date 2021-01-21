import {HeaderBlurb} from './header-blurb'; 

export function Header() {
    return (
        <div className="header">
            <h1 className="header__title">Kevin Forrest Connors</h1>
            <HeaderBlurb className="header__blurb__person" iconName="person-icon" text="he/him/his"></HeaderBlurb>
            <HeaderBlurb className="header__blurb__phone" iconName="phone-icon" text="+1 540-460-9871"></HeaderBlurb>
            <HeaderBlurb className="header__blurb__email" iconName="email-icon" text="kevinforrestconnors@gmail.com"></HeaderBlurb>
        </div>
    )
}