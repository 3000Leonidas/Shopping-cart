import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingCartIcon } from "@heroicons/react/24/solid"


const Navbar =()=>{

    const context = useContext(ShoppingCartContext)
    const activeStyle = "underline underline-offset-4"

    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink 
                    to='/'>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    onClick={()=> context.setSearchByCategory()}
                    className={({ isActive })=>
                        isActive ? activeStyle : undefined }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    onClick={()=> context.setSearchByCategory('clothes')}
                    className={({ isActive })=>
                        isActive ? activeStyle : undefined }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    onClick={()=> context.setSearchByCategory('electronics')}
                    className={({ isActive })=>
                        isActive ? activeStyle : undefined }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/furniture'
                    onClick={()=> context.setSearchByCategory('furniture')}
                    className={({ isActive })=>
                        isActive ? activeStyle : undefined }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/shoes'
                    onClick={()=> context.setSearchByCategory('shoes')}
                    className={({ isActive })=>
                        isActive ? activeStyle : undefined }>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                    onClick={()=> context.setSearchByCategory('miscellaneous')}
                    className={({ isActive })=>
                        isActive ? activeStyle : undefined }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    leconaandre51@gmail.com
                </li>
                <li>
                    <NavLink to='/my-orders'>
                        MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'>
                        MyAccount
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/signin'>
                        SingIn
                    </NavLink>
                </li>
                <li className='flex gap-2'>
                <ShoppingCartIcon className= 'h-6 w-6 text-black'/> 
                 <div>
                {context.cardProducts.length}    
                </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar