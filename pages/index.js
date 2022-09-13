import Head from 'next/head'
import Header from '../components/Header';
import Login from '../components/Login';
import Footer from '../components/Footer';
import LocationForm from '../components/LocationForm';
import LocationsTable from '../components/LocationsTable';
import { useState } from 'react';
import { useAuth } from '../contexts/auth';
import useResources from '../hooks/useResources';

export default function Home() {

  const [locations, setLocations] = useState([]);

  const { user, login, logout } = useAuth();
  const { resources, loading, createResource, deleteResource } = useResources();

  function handleLocation(location, min, max, avg) {
    const locationObj = {
      id: locations.length + 1,
      location: location,
      minCustomers: min,
      maxCustomers: max,
      avgCookies: avg, 
    };

    setLocations([...locations, locationObj]);
  }

  function handleLogin(event) {
    event.preventDefault();
    login(event.target.username.value, event.target.password.value)
  }

  return (
    <div>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      
      <Header logout={logout} />
      { user ? (
        <main className="flex flex-col items-center py-4 space-y-8 bg-emerald-100">
          <LocationForm onLocation={handleLocation}/>
          <LocationsTable locationsList = {locations}/>
        </main>
      ) : (
        <>
          <Login handleLogin={handleLogin}/>
        </>

      )

      }

      <Footer locationsList = {locations}/> 
    </div>
  )
}
