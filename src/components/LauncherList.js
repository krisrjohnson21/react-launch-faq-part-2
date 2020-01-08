import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"

const LauncherList = (props) => {
  const [launchers, setLaunchers] = useState([])
  useEffect(() => {
    fetch("/api/v1/launchers")
    .then(response => {
      if (response.ok) {
        return response
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
      }
    })
    .then(response => response.json())
    .then(response => {
      setLaunchers(response)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const launcherList = launchers.map((launcher) => {
    let id = launcher.id
    return(
      <li key={launcher.id}>
        <Link to={`/launcher/${id}`}>{launcher.name}</Link>
      </li>
    )
  })

  return(
    <div className="bioList">
      <h1 className="bioHeader">Famous Launchers Throughout The Ages</h1>
      <ul>
        {launcherList}
      </ul>
    </div>
  )
}

export default LauncherList;
