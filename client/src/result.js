import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

const Result = (props) => {
    const location = useLocation();
    const [data, setData] = useState();
    useEffect(() => {
        fetch("/result/" + location.state.chemA + "/" + location.state.chemB + '/' + location.state.chemC + '/' + location.state.chemD).then(
          response => response.json()
        ).then(
          data => {
            setData(data)
          }
        )
      }, [])
    return(
        <div>
           <p>{location.state.chemA}</p>
           <p>{location.state.chemB}</p>
           <p>{location.state.chemC}</p>
           <p>{location.state.chemD}</p>
           {
                (typeof data === "undefined")?
                (
                    <p>Loading</p>
                ):
                data.map((item, index) => (
                <div key={index}>
                    <div>Conc_A: {item.conc_a}</div>
                    <div>Conc_B: {item.conc_b}</div>
                    <div>Conc_C: {item.conc_c}</div>
                    <div>Conc_D: {item.conc_d}</div>
                    <div>Result: {item.result}</div>
                    <div>Smell: {item.smell}</div>
                    <div>Color: {item.color}</div>
                    <div>Solid: {item.solid}</div>
                    <div>Solid_Color: {item.solid_color}</div>
                    <div>Gas: {item.gas}</div>
                    <div>Gas_Color: {item.gas_color}</div>
                    <div>Product Name: {item.product_name}</div>
                </div>
                ))
            }
        </div>
    )
}

export default Result;