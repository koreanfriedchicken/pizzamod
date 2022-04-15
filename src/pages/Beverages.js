import React, { useEffect, useState } from 'react'
import CardGrid from '../components/CardGrid'
import { db } from '../firebase/config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

const Beverages = () => {

    const [beverages, setBeverages] = useState(null)

    useEffect(() => {
        const ref = collection(db, 'beverages')

        const q = query(ref, orderBy("position"))


        getDocs(q)
            .then((snapshot) => {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()})
                })
                setBeverages(results)
            })
    }, [])

  return (
    <div className='page'>
        <div className='page-title'>Beverages</div>
        {beverages && <CardGrid items={beverages}/>}
    </div>
  )
}

export default Beverages