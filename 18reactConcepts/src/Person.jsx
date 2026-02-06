import React from "react";
import Star from "./Star";

export default function Person(){
    const [contact, setContact] = React.useState({
        firstName : "Rahul",
        lastName : "Sharma",
        phone : "12345678",
        email : "thisgmail.com",
        isFav : false
    })


    function toggleFav(){
     setContact(prevContact => ({
        ...prevContact,
        lastName : "Arora",
        isFav : !prevContact.isFav

     }))
    }

    return (
        <main>
            <div>
                 <Star 
                 //here by using handleClick we are providing custom function which will 
                 isFilled = {contact.isFav} handleClick={toggleFav}/>
                <h2>
                        {contact.firstName} {contact.lastName = contact.isFav? "Sharma" : "Arora"}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
            </div>
        </main>
    )
}