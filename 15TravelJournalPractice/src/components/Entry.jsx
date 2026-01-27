export default function Entry(props) {
    console.log(props)
    return (
        <article className="main-con">
            <div className="main-img-con">
                <img className="main-img" src={props.entry.img.src} alt={props.entry.img.alt} />
            </div>

            <div className="info-con">
                <img className="small-img" img src="src/images/marker.png" alt="marker" />
                <span className="country">{props.entry.country}</span>
                <a href={props.entry.googleMapLink}>View on google maps</a>

                <h2 className="title">{props.entry.title}</h2>
                <p className="dates">{props.entry.dates}</p>
                <p className="entry-text">{props.entry.text}</p>
            </div>
        </article>
    )
}