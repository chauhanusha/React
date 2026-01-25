import Contact from "./Contact"
import cat from "./cat.png"

function MainCon(){
    return(
         <div className="contacts">
            <Contact
                img={cat}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contact
                img={cat}
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contact
                img={cat}
                name="Felix"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contact 
                img={cat}
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
    )
}

export default MainCon