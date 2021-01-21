export function SectionBullet(props) {
    return (
        <div className={`${props.parentClassName}__section-content__bullets__bullet`}>
            <div>
                <div className={`${props.parentClassName}__section-content__bullets__bullet__content`}>{props.content}</div>
            </div>
            <div className={`${props.parentClassName}__section-content__bullets__bullet__subcontent`}>
                {props.children}
            </div>
        </div>
    );
}