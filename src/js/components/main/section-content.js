export function SectionContent(props) {
    return (
        <div className={`${props.parentClassName}__section-content`}>
            <h3 className={`${props.parentClassName}__section-content__header`}>
                <span>{props.header}</span>
                <span className={`${props.parentClassName}__section-content__info`}>
                    <span className={`${props.parentClassName}__section-content__info__location`}>, {props.location}</span>
                    <span className={`${props.parentClassName}__section-content__info__dates`}>, {props.dates}</span>
                </span> 
            </h3>
            <div className={`${props.parentClassName}__section-content__bullets`}>
                {props.children}
            </div>
        </div>

    );
}