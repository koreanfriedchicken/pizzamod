import React, { useEffect, useState } from 'react'
import CardGrid from '../components/CardGrid'
import { db } from '../firebase/config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

const Salads = () => {

    const [salads, setSalads] = useState(null)

    useEffect(() => {
        const ref = collection(db, 'salads')

        const q = query(ref, orderBy("position"))


        getDocs(q)
            .then((snapshot) => {
                let results = []
                snapshot.docs.forEach(doc => {
                    results.push({id: doc.id, ...doc.data()})
                })
                setSalads(results)
            })
    }, [])

  return (
    <div className='page'>
        <div className='page-title'>SALADS</div>
        {salads && <CardGrid items={salads}/>}
    </div>
  )
}

export default Salads