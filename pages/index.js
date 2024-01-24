import Main from '@/components/Main'
import { Inter } from 'next/font/google'
import { createContext, useContext } from "react";
import useCart from '@/components/contextapi/context';
// import Nav from './Nav/nav'

const inter = Inter({ subsets: ['latin'] })

const CartContext = createContext();
export function useCartContext() {
  return useContext(CartContext);
}

export default function Home() {
  const { servicesVisible, setservicesVisible,jumbotronMobview , setjumbotronMobview } = useCart()
  return (
    <main className={`${inter.className} cursor overflow-y-auto body  `} >
      <CartContext.Provider value={{ servicesVisible, setservicesVisible,jumbotronMobview , setjumbotronMobview }}>
        <Main />
      </CartContext.Provider>
    </main>
  )
}
