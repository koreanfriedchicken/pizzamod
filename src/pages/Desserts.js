import React, { useEffect, useState } from 'react'
import CardGrid from '../components/CardGrid'
import { db } from '../firebase/config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

const Desserts = () => {

    const [desserts, setDesserts] = useState(null)

    useEffect(() => {
        const ref = collection(db, 'desserts')

        const q = query(ref, orderBy("position"))


        getDocs(q)
            .then((snapshot) => {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()})
                })
                setDesserts(results)
            })
    }, [])

  return (
    <div className='page'>
        <div className='page-title'>DESSERTS</div>
        {desserts && <CardGrid items={desserts}/>}
    </div>
  )
}

export default Desserts