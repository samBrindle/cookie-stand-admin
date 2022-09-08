import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';
import LocationForm from '../components/LocationForm';
import LocationsTable from '../components/LocationsTable';
import { useState } from 'react';

export default function Home() {

  const [locations, setLocations] = useState([]);

  function handleLocation(location, min, max, avg) {
    const locationObj = {
      location: location,
      minCustomers: min,
      maxCustomers: max,
      avgCookies: avg, 
    };

    setLocations([...locations, locationObj]);
  }

  // function createLocationHandler(event) {
  //   event.preventDefault();
  //   setLocation(JSON.stringify({location: event.target.location.value, minCustomers: event.target.min.value , maxCustomers: event.target.max.value, avgCookies: event.target.avg.value}));
  //   event.target.reset();
  // }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <Header />
      <main className="flex flex-col items-center py-4 space-y-8 bg-emerald-100">
        <LocationForm onLocation={handleLocation}/>
        <LocationsTable locationsList = {locations}/>
        {/* <p>{locations || "No Cookie Stands Available"}</p> */}
      </main>
      <Footer locationsList = {locations}/> 
    </div>
  )
}
