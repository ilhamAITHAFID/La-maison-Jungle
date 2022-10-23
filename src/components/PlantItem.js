import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function handleClick(planName) {
    alert(`vous voulez acheter un ${planName} ? Trés bon choix ✨`)
}
function PlantItem ({id,cover, name, water, light}){
    
    return (
        <li className='lmj-plant-item' onClick={()=>handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )

}
export default PlantItem

