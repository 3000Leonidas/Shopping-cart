import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {XMarkIcon} from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../Utils'
import './style.css'

const CheckoutSideMenu = () => {

    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) =>{
        const filteredProduct=context.cardProducts.filter(product => product.id != id)
        context.setCardProducts(filteredProduct)
    }

    const handleCheckout = () =>{
        const orderToAdd ={
            date: '14.08.24',
            products: context.cardProducts,
            totalProducts: context.cardProducts.length,
            totalPrice: totalPrice(context.cardProducts)
        }

        context.setOrder([...context.order, orderToAdd])
        context.setCardProducts([])
        context.setSearchByTitle(null)
    }

    return(
        <aside       
        className= {`${context.isCheckoutSideMenuOpen ? `flex` : `hidden`} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order </h2>
                <div>
                    <XMarkIcon
                    className='h-6 w-6 text-black cursor-pointer' 
                    onClick={() => context.closeCheckoutSideMenu()}/>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
            {
                context.cardProducts.map(product =>(
                    <OrderCard  
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        images={product.images}
                        price ={product.price}
                        handleDelete={handleDelete}
                    />
                ))
            }
            </div>
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-3 '>
                    <span className='font-light'>
                        Total:
                    </span>
                    <span className='font-medium text-2xl '>
                        ${totalPrice(context.cardProducts)}
                    </span>
                </p>
                <Link to={'/my-orders/last'}>
                <button onClick={() =>handleCheckout()} className='w-full bg-black py-3 text-white rounded-lg '>Checkout</button>
                </Link>
            </div>
        </aside>
    )
}

export default CheckoutSideMenu