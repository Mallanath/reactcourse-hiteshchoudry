import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

const data =  useLoaderData()

  // const [data, setData] = React.useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/Mallanath')
  //   .then((res) => res.json())
  //   .then((data)=> {
  //     console.log(data);
  //     setData(data)})
  // }, [])
  
  return (

    <div
    className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'
    >Github followers: {data.followers}
    <img src={data.avatar_url} width={ 300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const respone = await fetch('https://api.github.com/users/Mallanath')
  return respone.json()
}