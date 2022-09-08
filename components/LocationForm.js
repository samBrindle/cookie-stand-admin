export default function LocationForm({ onLocation }) {

    function handleSubmit(event) {
        event.preventDefault();
        onLocation(event.target.location.value, event.target.min.value, event.target.max.value, event.target.avg.value)
        event.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center w-3/4 p-2 bg-emerald-300 rounded">
        <legend className='pt-1 pb-2 text-xl'>Create Cookie Stand</legend>
        <label className='pb-2'>
          Location:
        <input name="location" className="items-stretch" type="text" placeholder='Enter city here...' required/>
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