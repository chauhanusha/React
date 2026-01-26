import Header from "./components/Header"
import Entry from "./components/Entry"
import entries from "./data"

export default function MainCon() {
    const entryArr = entries.map((entry) => {
        return (<Entry
            img={entry.img}
            title={entry.title}
            country={entry.country}
            googleMapsLink={entry.googleMapsLink}
            dates={entry.dates}
            text={entry.text}
        />)
    })
    return (
        <>
            <Header />
            {entryArr}
        </>
    )
}