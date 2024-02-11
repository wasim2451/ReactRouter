import React, { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data= useLoaderData()
    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-2xl '>Github followers : {data.followers}
        <img src={data.avatar_url} alt="img" className='text-center' width={200}/>
        </div>
    )
}

export default Github
export const githubInfoLoader=async()=>{
   const response = await fetch('https://api.github.com/users/wasim2451')
   return response.json()
}
