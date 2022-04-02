import React from "react"
import data from "./data"
import Cards from "./components/Cards"
import Nav from "./components/Nav"

export default function App(){
    const cardinfo = data.map(data=>
        <Cards
            key={data.Id}
            {...data}
        />
    )
    return(
        <>
            <Nav/>
            {cardinfo}
        </>
    )
}