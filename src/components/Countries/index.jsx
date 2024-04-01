import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css"

const url = "https://restcountries.com/v3.1/all" //close

let Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setCountries(data)
        })
    }, [])

    return (
        <div className="countries">
            {
                countries.map((contry) => {
                    return (
                        <div key={contry.name.common}>
                            <img src={contry.flags.png} alt="" />
                            <h3>{contry.name.official}</h3>
                            <h4>{contry.capital && contry.capital[0]}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Countries;
