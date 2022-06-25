import Card from "./Card"
import sampleBrandIcon from "./Images/NavIcons/pottery-man.svg"
import cardContainerData from "./data"

const TopCardContainer = (props)=>{
    return (
        <div>
            <h2>Top Rated Products</h2>
            <div className="flex">
                {cardContainerData.map(function(val){ 
                    <Card cardImg={val.cardImg} cardAltImage={val.cardAltImg} rating={val.rating} />
                 })}
            </div>
        </div>
    )
}

export default TopCardContainer