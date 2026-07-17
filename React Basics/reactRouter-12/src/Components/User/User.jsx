/**
 * File purpose:
 * Displays a user page based on a dynamic route parameter.
 *
 * Main logic:
 * Extracts the user ID from the URL using React Router's useParams hook and
 * renders it as part of the page content.
 *
 * Gotchas:
 * The component assumes the route parameter exists. Validation or fallback UI
 * may be needed if users access an invalid route.
 */

import React from 'react'
import { useParams } from 'react-router-dom'

/**
 * Displays information for a specific user based on the URL parameter.
 */
function User() {
    const {userid} = useParams()

  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User