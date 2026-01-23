function Contact(props) {
    console.log(props)
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