import React, { useState } from "react";
import ResultCustomTestTube from "./result_testtube";
import labgif from './labgigbl.gif'

const InExpResult = ({num}) => {
    const all_details = [
        {
            "color": "#FFF000",
            "characterstics": ["jdndvmklv vrvr", "rjnr rn", "fjnv jrn kdne ejn", "dnkrngbn"]
        },
        {
            "color": "#FFF000",
            "characterstics": ["jdndvmklv vrvr", "rjnr rn", "fjnv jrn kdne ejn", "dnkrngbn"]
        },
        {
            "color": "#FFF000",
            "characterstics": ["jdndvmklv vrvr", "rjnr rn", "fjnv jrn kdne ejn", "dnkrngbn"]
        },
        {
            "color": "#FFF000",
            "characterstics": ["jdndvmklv vrvr", "rjnr rn", "fjnv jrn kdne ejn", "dnkrngbn"]
        },
        {
            "color": "#FFF000",
            "characterstics": ["jdndvmklv vrvr", "rjnr rn", "fjnv jrn kdne ejn", "dnkrngbn"]
        },
        {
            "color": "#FFF000",
            "characterstics": ["jdndvmklv vrvr", "rjnr rn", "fjnv jrn kdne ejn", "dnkrngbn"]
        },
        {
            "color": "#FFF000",
            "characterstics": ["jdndvmklv vrvr", "rjnr rn", "fjnv jrn kdne ejn", "dnkrngbn"]
        },
        {
            "color": "#FFF000",
            "characterstics": ["jdndvmklv vrvr", "rjnr rn", "fjnv jrn kdne ejn", "dnkrngbn"]
        }

    ]
    const [data, setData] = useState(undefined);
    setTimeout(() => {
        setData(all_details[0])
    }, 1000);

    return(
        <div>
        {
            (data === undefined)?(
                <div className="load_div">
                    <img src={labgif} alt="" />
                </div>
            ):
            (
                <div className="result_div">
                <ResultCustomTestTube color="#FFF000"/>
                <div className="info_1">{all_details[num].characterstics[0]}</div>
                <div className="info_2">{all_details[num].characterstics[1]}</div>
                <div className="info_3">{all_details[num].characterstics[2]}</div>
                <div className="info_4">{all_details[num].characterstics[3]}</div>
                <svg width="510" height="148" viewBox="0 0 510 148" className="arrow_1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="2.23401" y1="145.575" x2="198.039" y2="2.98853" stroke="black" stroke-width="6"/>
                    <line x1="198" y1="4" x2="510" y2="4" stroke="black" stroke-width="6"/>
                </svg>
                <svg width="530" height="6" className="arrow_2" viewBox="0 0 530 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="3" x2="530" y2="3" stroke="black" stroke-width="6"/>
                </svg>
                <svg width="166" height="6" className="arrow_3" viewBox="0 0 166 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="3" x2="166" y2="3" stroke="black" stroke-width="6"/>
                </svg>
                <svg width="443" height="74" className="arrow_4" viewBox="0 0 443 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="443" y1="71" x2="86" y2="71" stroke="black" stroke-width="6"/>
                    <line x1="86.1124" y1="70.3317" x2="2.1124" y2="2.33173" stroke="black" stroke-width="6"/>
                </svg>
            </div>
            )
        }
        </div>
    )
}

export default InExpResult;