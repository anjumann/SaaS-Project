import Link from "next/link"

const Navigation = () => {
  return (
    <div className='flex justify-center gap-x-4 items-center w-screen' >
      <Link href='/'>Home </Link>
      <Link href='/contact'>Contact </Link>
      <Link href='/services'>Services </Link>
      <Link href='/portfolio'>Portfolio </Link>
      <Link href='/team'>Team </Link>
      <Link href='/career'>Career </Link>
    </div>
  )
}

export default Navigation