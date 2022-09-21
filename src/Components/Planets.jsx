import React, { useState } from 'react'
import { useQuery } from 'react-query'




const Planets = () => {
    const [page, setPage] = useState(1)

    const planetsFetch = async (key, page) => {
        const res = await fetch(`https://swapi.dev/api/planets/?page=${key.queryKey[1]}`);
        return res.json();
    }

    const { data, status } = useQuery(['planets', page], planetsFetch)


    return (
        <div>
           <div style={{width: '600px'}}>
                <h1>Planets</h1>

                <div>
                    <button onClick={() => setPage(page - 1)}>Prev</button>
                    <span>{page}</span>
                    {status !== 'error' && <button onClick={() => setPage(page + 1)}>Next</button>}
                </div>

                {status === 'loading' && <div><h2 style={{ color: 'indigo' }}>Loading ...</h2></div>}
                {status === 'success' && <div><h2 style={{ color: 'green' }}>Success</h2></div>}
                {status === 'error' && <div><h2 style={{ color: 'red' }}>404 Error</h2></div>}

           </div>
            <div>
                <h4></h4>
            </div>
            {data?.results?.map((value, index) => <div key={index} style={{border:'2px solid teal', minWidth: '600px', margin: '6px auto', padding: '10px', fontSize: '20px'}}>
                <h3>Planet: {value.name}</h3>
                <p>Population: {value.population}</p>
            </div>)}
        </div>
    )
}

export default Planets