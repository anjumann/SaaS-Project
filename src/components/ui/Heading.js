import Link from 'next/link'
import { RxLink2 } from 'react-icons/ri'

const Heading = ({ children, center }) => {
  return (
    <h2 className={`text-xl ${center ?'text-center':''} font-bold text-gray-900 sm:text-3xl font-unbounded `}>
      {children} 
    </h2>
  )
}

export { Heading }