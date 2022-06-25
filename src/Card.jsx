import Style from "./style.css"

const Card = (props)=>{
    return (
        <div className = "Card w-24  bg-purple-200 m-auto">
            <div>
                <img src={props.cardImg} alt={props.cardAltImg}/>
            </div>
            <div>
                <span className="bg-gray-200">{props.rating}</span>
            </div>
        </div>
    )
}

export default Card;