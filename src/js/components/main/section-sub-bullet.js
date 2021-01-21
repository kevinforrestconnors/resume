export function SectionSubBullet(props) {
    return (
        <div className={`${props.parentClassName}__section-content__bullets__subbullet`}>
            <div>
                <div className={`${props.parentClassName}__section-content__bullets__subbullet_content`}>{props.content}</div>
            </div>
        </div>
    );
}