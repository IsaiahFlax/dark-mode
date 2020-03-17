import React, {useState} from "react";
import Chart from "./Chart";


const Router = ({ coinData }) => {

    const [displayed, setDisplayed] = useState();

    return (
        <div>
            {console.log(displayed)}
                <form>
                    <label><h2>Choose a coin:</h2></label>
                        <select onChange={e => setDisplayed(e.target.value)}>
                            {coinData.map(coin => <option key={coin.name} value={coin.sparkline_in_7d.price}> {coin.name}</option>)}
                        </select>
                </form>
            {displayed ? <Chart sparklineData={displayed} /> : "Please Select a Currency" }
        </div>
    )
}
 export default Router;