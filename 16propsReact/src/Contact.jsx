//function Contact({img, name, phone, email}) => prop destructuring
//we can have variable too so to not get confused we are not destructuring it

function Contact(props) {  
    console.log(props)
    const num = 10  //to access this variable we use {num}
    return (
        <div className="contacts">
            <article className="contact-card">
                <img 
                    src={props.img}
                    alt="Photo of Mr. Whiskerson"
                />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img 
                        src="src/tele.png" 
                        alt="phone icon" 
                    />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="src/mail.png" 
                        alt="mail icon"
                    />
                    <p>{props.email}</p>
                </div>
            </article>
            
        </div>
    )
}

export default Contact


//object destructuring => prop destructuring is same as prop is also an object
const person = {
    img:"this is an image",
    name:"reactapp",
    phone:"234111",
    email:"reactapp.com"
}

const {img, name} = person
console.log(img);