import { useEffect } from "react";
import  {createContext,useContext} from "react";
import axios from "axios";
import { useReducer } from "react";

const AppContext=createContext();

const API ="https://api.pujakaitem.com/api/products";

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],

}

const AppProvider=({children})=>{ 

    const [state,dispatch]=useReducer(reducer,initialState);
    const getProducts= async(url)=>{
      const res=await axios.get(url);  
      console.log(res);
      const product =await res.data;
      console.log(product);

    }
    useEffect(()=>{
          getProducts(API);
    },[]);
    return <AppContext.Provider value={{...state}}>
        {children}
    </AppContext.Provider>
};

// custom hooks
const useProductContext=()=>{
    return useContext(AppContext);
}
export {AppProvider,AppContext,useProductContext};