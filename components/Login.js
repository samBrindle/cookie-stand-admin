export default function Login({ handleLogin}) {
    return (
        <form onSubmit={handleLogin} className='flex flex-col text-center p-4 border-2 border-emerald-400 bg-emerald-200 w-5/6 font-semibold space-y-5 rounded-md m-auto my-5'>
            <label className='flex flex-col text-4xl font-bold mb-5'>USERNAME
                <input name='username' type='text'></input>
            </label>
            <label className='flex flex-col text-4xl font-bold'>PASSWORD
                <input name='password' type='text'></input>
            </label>
            <button type='submit' className='bg-emerald-500 px-24 py-4 rounded-md text-4xl'>Login</button>
        </form>
    )
}