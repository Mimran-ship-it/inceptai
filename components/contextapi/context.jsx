import { useState } from "react"
const useCart = () => {
const [servicesVisible, setservicesVisible] = useState(false)
const [jumbotronMobview , setjumbotronMobview ] = useState(false)
return {servicesVisible,setservicesVisible,jumbotronMobview , setjumbotronMobview}
}

export default useCart