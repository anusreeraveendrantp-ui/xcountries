import React, { useState,useEffect } from "react";
const Card = ({ flag,abbr,name }) => {
    return (
        <div
        style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            border:"1px solid black",
            borderRadius:"8px",
            height:"200px",
            width:"200px",
            textAlign:"center",
        }}>
            <img src={flag} alt={`Flag of ${abbr}`} style={{width:"100px"}}/>
            <h2>{name}</h2>
        </div>
    );
};

const ENDPOINT = "https://xcountries-backend.labs.crio.do/all"
export default function Countries() {  
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch(ENDPOINT)
            .then((response) => response.json())
            .then((data) => setCountries(data))
            .catch((error) => console.error("Error fetching countries:", error));
    }, []);   
    return (
        <div>
            
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px"   }}>
                {countries.map((country) => (
                    <Card flag={country.flag} abbr={country.abbr}  name={country.name} />
                ))}
            </div>
        </div>
    );
}