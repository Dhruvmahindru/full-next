import React from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react';


function Hi(bata,props) {
    // // isse aap jo value di hai aapne router mein vo le skte ho 
    const router = useRouter()
    const  go  = router.query
    // let hi= go.toString()
    let bro=go.id
    const [first, setfirst] = useState(bro)
    
  
    console.log(bata)
    return (
        <div>
        <h1>
        {bata.bata.id} - {bata.bata.title}

            </h1> 
             </div>
  )
}
export default Hi 

export async function  getServerSideProps(context){
  const {params} = context
    const {id}=params
    
    
    
    const go = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const bata = await go.json()
    
    return {
      props: {
        bata,
      }, // will be passed to the page component as props
    }
  }