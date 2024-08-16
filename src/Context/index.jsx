import { createContext, useEffect, useState } from 'react'

export const ShoppingCartContext= createContext()

export const ShoppingCartProvider = ({children}) =>{

    //Product Cart : Increment quanlity
    const [count,setCount]= useState(0)

    //Product Detail : Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen]= useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Checkout Side Menu : Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen]= useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Product Detail : Show Product
    const [productToShow, setProductToShow] = useState( {} )
    
    //Shopping card : Add product to card
    const [cardProducts, setCardProducts ] = useState( [] )

    //Shopping crad : Order
    const [order, setOrder ] = useState( [] )

    //Get Products 
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    //Get Products by Titles
    const [searchByTitle, setSearchByTitle] = useState(null)
    console.log(searchByTitle)

    useEffect(() =>{
        fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(error => console.error("Error fetching data: ", error)); // Manejo de errores
    }, []);

    const filteredItemsByTitle= (items, searchByTitle) =>{
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(()=>{ 
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])

    console.log('filter: ', filteredItemsByTitle)

    return( 
        <ShoppingCartContext.Provider value={
            {
                count,
                setCount,
                openProductDetail,
                closeProductDetail,
                isProductDetailOpen,
                productToShow,
                setProductToShow,
                cardProducts,
                setCardProducts,
                isCheckoutSideMenuOpen,
                openCheckoutSideMenu,
                closeCheckoutSideMenu,
                order,
                setOrder,
                items,
                setItems,
                searchByTitle,
                setSearchByTitle,
                filteredItems,
                setFilteredItems,
            }
        }>
            {children}
        </ShoppingCartContext.Provider>
    )
}