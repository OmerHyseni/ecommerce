import { Link } from 'react-router-dom'
import './Header.css'

export default function Header({cartItems}) {
    return <>
        <Link to='/ecommerce' className='ml-4 bg-blue-100 hover:bg-blue-200 rounded-[10px] p-2'>Home</Link>
        <Link to='/ecommerce/cartitems' className='ml-[1125px] bg-blue-100 hover:bg-blue-200 rounded-[10px] p-2'>Cart <span>{cartItems.length}</span></Link>
        <hr className='mt-3'></hr>
    </>
}