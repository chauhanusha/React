export default function Entry(props) {
    console.log(props)
    return (
        <article className="main-con">
            <div className="main-img-con">
                <img className="main-img" src={props.img.src} alt={props.img.alt} />
            </div>

            <div className="info-con">
                <img className="small-img" img src="src/images/marker.png" alt="marker" />
                <span className="country">{props.country}</span>
                <a href={props.googleMapLink}>View on google maps</a>

                <h2 className="title">{props.title}</h2>
                <p className="dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
}