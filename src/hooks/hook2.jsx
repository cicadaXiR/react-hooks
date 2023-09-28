import React, { useEffect, useState } from 'react'

function hook2() {
    const [resourceType,setResourceType] = useState('posts');
    console.log("render");

    useEffect(() =>{
      console.log("OnMount")
    },[]);
  return (
    <div>
      <button onClick={()=>setResourceType("posts")}>Posts</button>
      <button onClick={()=>setResourceType("users")}>Users</button>
      <button onClick={()=>setResourceType("comments")}>Comments</button>

      <h1>{resourceType}</h1>
    </div>
  )
}

export default hook2
