export function SectionTitle(props) {
    return (
        <div className={`${props.parentClassName}__section-title`}>
            <h2 className={`${props.parentClassName}__section-title__header`}>{props.title}</h2>
            <div className={`${props.parentClassName}__section-title__divider`}></div>
        </div>

    );
}