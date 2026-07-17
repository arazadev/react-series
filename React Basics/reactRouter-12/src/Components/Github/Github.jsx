/**
 * File purpose:
 * Displays GitHub profile information fetched from the GitHub API.
 *
 * Main logic:
 * Uses React Router's loader data mechanism to receive pre-fetched GitHub
 * user data and displays follower count with the user's avatar.
 *
 * Gotchas:
 * The loader runs before rendering the route component, so API failures should
 * be handled in route error boundaries for production use.
 */

import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

/**
 * Renders GitHub profile details from loader-provided data.
 */
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/arazadev')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

/**
 * Fetches GitHub profile information before rendering the GitHub route.
 */
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/arazadev')
    return response.json()
}