import { Link } from "react-router-dom";

function Logo() {
  return (
   <div  className='flex flex-row justify-between items-center'>

    <div className='hidden sm:flex sm:flex-row '>
    <div className='flex flex-col items-start m-1'>
    <Link to="/" className='btn btn-ghost normal-case text-xl pr-0'> شرکت من</Link>
    <p className="text-xs"> سرویس SaaS مدیریت صنایع کوچک</p>
    </div>
    </div>

  <div className='hover:scale-110 hover:text-purple-700 hover:animate-pulse p-2 sm:p-0'>
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-file-check" viewBox="0 0 16 16">
  <path d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
  </svg>
  </div>

</div>

  )
}

export default Logo