import Head from 'next/head'
import { useState } from 'react';

export default function Home() {

  const [location, setLocation] = useState("Enter a location...");
  // const [min, setMin] = 

  function createLocationHandler(event) {
    event.preventDefault();
    setLocation(JSON.stringify({location: event.target.location.value, minCustomers: event.target.min.value , maxCustomers: event.target.max.value, avgCookies: event.target.avg.value}));
    event.target.reset();
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center py-4 space-y-8 bg-emerald-100">
        <LocationForm onSubmit={createLocationHandler}/>
        <p>Report Table Coming Soon...</p>
        <p>{location}</p>
      </main>
      <Footer copyright="2022"/> 
    </div>
  )
}

function Header() {
  return (
    <header className='p-4 text-4xl bg-emerald-500 text-black-50'>
      <h1>Cookie Stand Admin</h1>
    </header>
  )
}

function Footer(props) {
  return (
    <footer className='p-4 bg-emerald-500 text-black-50'>
      <p>&copy;{props.copyright}</p>
    </footer>
  )
}

function LocationForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="flex flex-col items-center w-3/4 p-2 bg-emerald-300 rounded">
    <legend className='pt-1 pb-2 text-xl'>Create Cookie Stand</legend>
    <label className='pb-2'>
      Location:
    <input name="location" type="text" placeholder='Enter city here...' required/>
    </label>
    <div className='flex flex-auto pb-2'>
      <label className='flex flex-col pr-4'>
        Minimum Customers per Hour
        <input name="min" type="text" placeholder='Enter city here...' required/>
      </label>
      <label className='flex flex-col pr-4'>
        Maximum Customers per Hour
        <input name="max" type="text" placeholder='Enter city here...' required/>
      </label>
      <label className='flex flex-col pr-4'>
        Average Cookies per Sale
        <input name="avg" type="text" placeholder='Enter city here...' required/>
      </label>
      <button type="submit" className="px-8 py-2 bg-emerald-500 text-black">Create</button>
    </div>
</form>
  )
}

// function Response(props) {
//   return (

//   )
// }