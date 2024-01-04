import RestaurantCard from "./RestaurantCard";
import { allRestaurants } from "../utils/mockData";

const Body = () => {
    return (
      <>
        <div className="restaurants_container">
          {allRestaurants.map(eachRestaurant => (
            <RestaurantCard key={eachRestaurant.info.id} resData = {eachRestaurant}/>
          ))}
        </div>
      </>
    )
}
export default Body;