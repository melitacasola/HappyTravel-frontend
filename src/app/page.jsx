"use client"
import {useFetchApi} from '../app/services/useFetch'


export default function Home() {

  const urlApi = 'http://localhost:8000/api/destinations'

  const { data, loading, error } = useFetchApi(urlApi);
  // console.log(data[0].attributes);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Destinos</h1>
        {
          data?.map((item)=>(
            <div key={item.attributes.id}>
              <h1 className='text-sm'>{item.attributes.title}</h1>
              <h3 className='text-sm'>{item.attributes.location}</h3>
              <p className='text-sm'>{item.attributes.description}</p>
            </div>
          ))
        }
      </div>
    </main>
  );
 
}
