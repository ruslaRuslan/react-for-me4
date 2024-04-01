import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css"

// const url = "https://restcountries.com/v3.1/all" //close

// const Countries = () => {
//     const [countries, setCountries] = useState([])
//     function deleteCountry(name) {
//         const filteredCountries = countries.filter((contry) => contry.name.common !== name)
//         setCountries(filteredCountries)
//     }

//     useEffect(() => {
//         axios.get(url).then(({ data }) => {
//             setCountries(data)
//         })
//     }, [])

//     return (
//         <div className="countries">
//             {
//                 countries.map((contry) => {
//                     return (
//                         <div onClick={() => { deleteCountry(contry.name.common) }} key={contry.name.common}>
//                             <img src={contry.flags.png} alt="" />
//                             <h3>{contry.name.official}</h3>
//                             <h4>{contry.capital && contry.capital[0]}</h4>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// ------------------------------------------------------------------------------------------------------------------------------

// const url = "https://restcountries.com/v3.1/all" //close

// const Countries = () => {
//     const [countries, setCountries] = useState([])
//     function deleteCountry(name) {
//         setCountries((pre) => pre.filter((contry) => contry.name.common !== name))
//     }

//     useEffect(() => {
//         axios.get(url).then(({ data }) => {
//             setCountries(data)
//         })
//     }, [])

//     return (
//         <div className="countries">
//             {
//                 countries.map((contry) => {
//                     return (
//                         <div onClick={() => { deleteCountry(contry.name.common) }} key={contry.name.common}>
//                             <img src={contry.flags.png} alt="" />
//                             <h3>{contry.name.official}</h3>
//                             <h4>{contry.capital && contry.capital[0]}</h4>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// ----------------------------------------------------------------------------------------------------------------------------------

// const url = "https://restcountries.com/v3.1/all" //close

// const Countries = () => {
//     const [countries, setCountries] = useState([])

//     function deleteCountry(name) {
//         setCountries((pre) => pre.filter((country) => country.name.common !== name))
//     }

//     useEffect(() => {
//         axios.get(url).then(({ data }) => {
//             setCountries(data)
//         })
//     }, [])


//     useEffect(() => {
//         console.log('countries state-i deyisdi');
//     }, [countries])


//     return (
//         <div className="countries">
//             {
//                 countries.map((country) => {
//                     return (
//                         <div key={country.name.common}>
//                             <img src={country.flags.png} alt="" />
//                             <h3>{country.name.official} <button onClick={() => { deleteCountry(country.name.common) }} key={country.name.common}>x</button></h3>
//                             <h4>{country.capital && country.capital[0]}</h4>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// -----------------------------------------------------------------------------------------------------------------------------------

const url = "https://restcountries.com/v3.1/all" //close

const Countries = () => {
    const [countries, setCountries] = useState([])

    function deleteCountry(name) {
        setCountries((pre) => pre.filter((country) => country.name.common !== name))
    }

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            setCountries(data)
        })
    }, [])


    useEffect(() => {
        console.log('countries state-i deyisdi');
    }, [countries])


    return (
        <div className="countries">
            {
                countries.map((country, index) => {
                    return (
                        <div key={index}>
                            <img src={country.flags.png} alt="" />
                            <h3>{country.name.official} <button onClick={() => { deleteCountry(country.name.common) }} key={country.name.common}>x</button></h3>
                            <h4>{country.capital && country.capital[0]}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Countries;