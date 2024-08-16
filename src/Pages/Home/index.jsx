import { useContext} from 'react'
import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Home() {

    const context = useContext(ShoppingCartContext)

    const renderView = ()=>{
      if(context.searchByTitle?.length > 0){        
        if (context.filteredItems?.length > 0 ) {
          return(
            context.filteredItems?.map(item => ( 
              <Card key={item.id} data={item}w/>
            )) 
          )
        }else{
          return(
            <div>We don t have anything :P </div>
          )
        }
      }else{
        return(
          context.items?.map(item => ( 
            <Card key={item.id} data={item}/>
          ))        
        )        
      }
    }
    
   
    return (
        <Layout>
          <div className='flex items-center justify-center relative w-80 mb-4'> 
            <h1 className="font-medium text-lg">
              Exclusive Products
            </h1> 
          </div>
          <div className='flex items-center justify-center gap-6'>
          <input 
          type="text" 
          placeholder='Search a Product' 
          className='border-b-2 border-black p-3 mb-3  w-96 rounded-lg focus:outline-none'
          onChange={(event) => context.setSearchByTitle(event.target.value)}
          />
    
          <MagnifyingGlassIcon className='w-6 h-6 text-black' />
          </div>
          <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {
            renderView()
          }
          </div>
          <ProductDetail />
        </Layout>
    )
  }
  
export default Home