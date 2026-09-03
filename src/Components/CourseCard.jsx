const CourseCard = ({ title, category, level, duration }) => {
    return (
        <article className="course-card">
            <div className="course-card-topline">
                <span className="course-icon" aria-hidden="true">{title.slice(0, 1)}</span>
                <span className="course-category">{category}</span>
            </div>
            <h2>{title}</h2>
            <div className="course-details">
                <span>{level}</span>
                <span className="detail-divider" aria-hidden="true" />
                <span>{duration}</span>
            </div>
            <a className="course-link" href={`#course-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                Explore course <span aria-hidden="true">-&gt;</span>
            </a>
        </article>
    )
}


export default CourseCard;
