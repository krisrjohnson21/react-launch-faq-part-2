import React, { useState, useEffect } from 'react'

const LauncherShowPage = (props) => {
  const [launcher, setLauncher] = useState(0)

  useEffect(() => {
    let launcherId = props.match.params.id
    fetch(`/api/v1/launcher/${launcherId}`)
    .then(response => {
      return response.json()
    })
    .then(response => {
      setLauncher(response)
    })
  }, [])

  return(
    <div>
      <h1 className="bioHeader">{launcher.name}</h1>
      <div className="bio">{launcher.bio}</div>
    </div>

  )
}

export default LauncherShowPage
