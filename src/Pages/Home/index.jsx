import { useContext} from 'react'
import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Home() {

    const context = useContext(ShoppingCartContext)
    
   
    return (
        <Layout>
          <div className='flex items-center justify-center relative w-80 mb-4'> 
            <h1 className="font-medium text-lg">
              Exclusive Products
            </h1> 
          </div>
          <div className='flex items-center justify-center gap-6'>
          <input 
          className='border-b-2 border-black p-3 mb-3  w-96 rounded-lg focus:outline-none'
          placeholder='Search a Product' 
          type="text" 
          onChange={(event) => context.searchByTitle(event.target.value)}
          />
    
          <MagnifyingGlassIcon className='w-6 h-6 text-black' />
          </div>
          <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            context.items?.map(item => ( 
              <Card key={item.id} data={item}w/>
            ))
          }
          </div>
          <ProductDetail />
        </Layout>
    )
  }
  
export default Home