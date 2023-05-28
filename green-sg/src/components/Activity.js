import React from 'react'

export default function activity({date, activity, remarks, points}){
    return(
        <tr>
        <td>{date}</td>
        <td>{activity}</td>
        <td>{remarks}</td>
        <td className="points-cell">{points}</td>
        </tr>
)


}