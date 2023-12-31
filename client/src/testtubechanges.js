import React from 'react';

const CustomTestTube = ({arr}) => {
    return(
        <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="7316977_3623545 1">
            <g id="OBJECTS">
            <g id="Group">
            <g id="Group_2">
            <g id="Group_3">
            <path id="Vector" d="M218.985 13.2115V384.283C218.985 397.931 232.87 409 250.003 409C267.136 409 281.02 397.935 281.02 384.283V13.2115H218.985Z" fill="#E6EEF2"/>
            <path id="permanent" d="M 218.985 165.204 V 384.283 C 218.985 397.931 232.87 409 250.003 409 C 267.136 409 281.02 397.935 281.02 384.283 V 385.966 H 218.985 Z" fill={arr[0]}/>
            <path id="Vector_3" d="M291 14.4467C291 18.0083 287.38 20.8934 282.91 20.8934H217.09C212.626 20.8934 209 18.0083 209 14.4467C209 10.8895 212.62 8 217.09 8H282.91C287.38 8 291 10.8851 291 14.4467Z" fill="white"/>
            <path id="Vector_4" opacity="0.6" d="M240.22 388.809C240.22 390.821 238.172 392.453 235.647 392.453C233.122 392.453 231.073 390.821 231.073 388.809V29.7188C231.073 27.7067 233.122 26.0742 235.647 26.0742C238.172 26.0742 240.22 27.7067 240.22 29.7188V388.809Z" fill="white"/>
            </g>
            </g>
            </g>
            </g>
            </g>
        </svg>
    )
}