import Header from "./components/Header"
import Entry from "./components/Entry"
import entries from "./data"

export default function MainCon() {
    const entryArr = entries.map((entry) => {
        return (<Entry
            key={entry.id}
            {...entry}
        />)
    })
    return (
        <>
            <Header />
            {entryArr}
        </>
    )
}