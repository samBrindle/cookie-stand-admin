export default function Header({ logout }) {
    return (
        <header className='flex justify-between items-center p-4 text-4xl bg-emerald-500 text-black-50'>
            <h1 >Cookie Stand Admin</h1>
            <div>
                <button onClick={logout} className='bg-emerald-600 text-gray-200 px-2.5 py-1.5  mx-2 rounded-md'>Logout</button>
                <a className="border rounded py-2 px-4 bg-white text-black" href="#">Overview</a>
            </div>
        </header>
      )
}