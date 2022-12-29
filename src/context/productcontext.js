import { useEffect } from "react";
import  {createContext,useContext} from "react";
import axios from "axios";

const AppContext=createContext();

const API ="https://api.pujakaitem.com/api/products";

const AppProvider=({children})=>{ 
    const getProducts= async(url)=>{
      const res=await axios.get(url);  
      console.log(res);
      const product =await res.data;
      console.log(product);

    }
    useEffect(()=>{
          getProducts(API);
    },[])
    return <AppContext.Provider value={{myName:"Vinayak"}}>
        {children}
    </AppContext.Provider>
};

// custom hooks
const useProductContext=()=>{
    return useContext(AppContext);
}
export {AppProvider,AppContext,useProductContext};