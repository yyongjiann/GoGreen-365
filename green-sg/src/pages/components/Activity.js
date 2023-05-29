import React from 'react'

export default function activity({date, activity, remarks, points}){
    
    const formattedDate = new Date(date).toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    }).replace(",", " ")

    return(
        <tr>
        <td>{formattedDate}</td>
        <td>{activity}</td>
        <td>{remarks}</td>
        <td className={points === "Pending approval"? "pending-cell":"points-cell"}>{points}</td>
        </tr>
)


}