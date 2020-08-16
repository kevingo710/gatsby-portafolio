import React from "react"

export default (props) => (
    <li className="flex items-center">
        <div className="w-8/12 overflow-x-hidden pb-5">
            <h4 className="text-purple-700 font-bold">{props.repo.name}</h4>
            <p className="text-sm text-gray-800 overflow-y-hidden" style={{height:"1.5em"}}>{props.repo.description}</p>
        </div>
        <div className="flex-1 text-right pb-10">  
        <a href={props.repo.html_url} target="_blank" rel="noopener noreferrer"> Ver</a>
        </div>


    </li>
);