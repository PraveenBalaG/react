import React from "react";
import Card from "./Card";
import contact from "./contact";

function App(){
    return(<div>
        <h1>My Favorite mobiles</h1>
        <Card>name={contact[0].name}
        img={contact[0].img}
        phone={contact[0].phone} 
        email={contact[0].email}
        </Card>
        <Card> name={contact[1].name}
        img={contact[1].img}
        phone={contact[1].phone} 
        email={contact[1].email}
        </Card>
        <Card>name={contact[2].name}
        img={contact[2].img}
        phone={contact[2].phone} 
        email={contact[2].email}
        </Card>
        <Card> name={contact[3].name}
        img={contact[3].img}
        phone={contact[3].phone} 
        email={contact[3].email}
        </Card>
        <Card> name={contact[4].name}
        img={contact[4].img}
        phone={contact[4].phone} 
        email={contact[4].email}
        </Card>
    </div>);
}