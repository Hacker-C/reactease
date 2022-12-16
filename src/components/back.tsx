import { Link } from 'react-router-dom'

export default function Back() {
  return (
    <Link to="/">
      <button className='btn-primary'>
        Back
      </button>
    </Link>
  )
}
