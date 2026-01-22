export default function Entry() {
    return (
        <article className="main-con">
            <div className="main-img-con">
                <img className="main-img" src="src/images/mount.png" alt="mount" />
            </div>

            <div className="info-con">
                <img className="small-img" img src="src/images/marker.png" alt="marker" />
                <span className="country">JAPAN</span>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on google maps</a>

                <h2 className="title">Mount Fuji</h2>
                <p className="dates">12 Jan, 2024 - 20 Jan, 2024</p>
                <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists. Japan is an island country in East Asia. Located in the Pacific Ocean off the northeast coast of the Asian mainland, it is bordered to the west by the Sea of Japan and extends from the Sea of Okhotsk in the north to the East China Sea in the south.</p>
            </div>
        </article>
    )
}