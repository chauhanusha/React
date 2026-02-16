import { useState } from "react"

export default function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not",
        bottomText: "walk into mirror",
        imageUrl: "src/images/image2.png"
    })
    return (
        <main>
            <div className="form">
                <label htmlFor="top">Top Text
                    <input type="text" name="top" />
                </label>

                <label htmlFor="bottom">Bottom Text
                    <input type="text" name="bottom" />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>

            <div className="meme">
                <img src={meme.imageUrl} alt="" />
                <span className="topLine">{meme.topText}</span>
                <span className="bottomLine">{meme.bottomText}</span>
            </div>
        </main>
    )
}