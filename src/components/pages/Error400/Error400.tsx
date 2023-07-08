import React from 'react'
import { useRouteError } from 'react-router-dom';

function Error400() {
    let error = useRouteError();
    console.error(error)
  return (
    <div>Error400</div>
  )
}

export default Error400