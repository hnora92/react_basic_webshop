import React from "react"

function Card({ data }) {

    const [text, setText] = React.useState("Show opinions")
    const [toggle, setToggle] = React.useState(true)

    const btnTextChangeFunction = () => {
        (text === "Show opinions") ? setText("Show description") : setText("Show opinions")
    }

    const descriptionBox =
        <div className="descriptionBox">
            <p>{data.description}</p> <p>{data.price}</p>
        </div>

    const opinionBox =
        <div className="opinionBox">
                {data.opinions.map(op => <><p>{op.text}</p> <p>{op.username}</p></>)}
        </div>

    return (
        <div className="cards">
            {data.isRecommended ? <div className="foryou">For You</div> : null}
            <h1 id="cardTitle">{data.name}</h1>
            <hr />
            {toggle ? descriptionBox : opinionBox}
            <hr />
            <div className="button-container">
            <button className="btn" onClick={() => setToggle(!toggle) > btnTextChangeFunction()}>{text}</button>
            <button className="btn greyBtn">Add to cart</button> </div>
            {data.discount ? <p>Discount!</p> : null}
        </div>
    )
}

export default Card;