export default function Footer({locationsList: locations}) {
    return (
        <footer className='p-4 bg-emerald-500 text-black-50'>
          <p>{locations.length} Locations World Wide</p>
        </footer>
      )
}