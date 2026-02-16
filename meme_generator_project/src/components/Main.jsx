import { useState } from "react"

export default function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not",
        bottomText: "walk into mirror",
        imageUrl: "src/images/image2.png"
    })

    function handleChange(event){
        const {value, name} = event.currentTarget

        setMeme(prevMeme => ({
            ...prevMeme,
            [name] : value,
            
        }))

    }

    return (
        <main>
            <div className="form">
                <label htmlFor="topText">Top Text
                    <input type="text" name="topText" 
                    onChange={handleChange}
                    value={meme.topText}/>
                    
                </label>

                <label htmlFor="bottomText">Bottom Text
                    <input type="text" name="bottomText" 
                    onChange={handleChange}
                    value={meme.bottomText}/>
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