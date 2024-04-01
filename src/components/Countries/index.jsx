import {useEffect} from 'react';

const url = "https://restcountries.com/v3.1/all" //close

const Countries = () => {

    useEffect(() => {
        console.log('men geldim...');
     }, [])

    return (
        <div>Countries</div>
    )
}

export default Countries;