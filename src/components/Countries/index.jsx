import axios from "axios";
import { useEffect, useState } from "react";


const url = "https://restcountries.com/v3.1/all" //close

let Countries = () => {

    const [countries, setCountries] = useState([])

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            console.log(data);
            setCountries(data)
        })
    }, [])

    return (
        <>
            {
                countries.map((contry) => {
                    return (
                        <div>
                            <img src={contry.flags.png} alt="" />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Countries;
