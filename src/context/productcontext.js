import { useEffect } from "react";
import  {createContext,useContext} from "react";
import axios from "axios";
import { useReducer } from "react";
import reducer from "../reducer/ProductReducer";

const AppContext=createContext();

const API ="https://api.pujakaitem.com/api/products";

const initialState={
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    isSingleProduct:false,
    singleProduct:{},

}

const AppProvider=({children})=>{ 

    const [state,dispatch]=useReducer(reducer,initialState);
    const getProducts= async(url)=>{
        dispatch({type:"SET_LOADING"});
        try{
            const res=await axios.get(url);  
            //   console.log(res);
              const products =await res.data;
            //   console.log(product);
            dispatch({type:"SET_API_DATA",payload:products})
        }
        catch(error){
           dispatch({type:"API_ERROR"});
        }
     

    }

// for single product 
const getSingleProduct= async(url)=>{
    dispatch({type:"SET_LOADING"});
    try{
        const res=await axios.get(url);  
        //   console.log(res);
          const products =await res.data;
        //   console.log(product);
        dispatch({type:"SET_API_DATA",payload:products})
    }
    catch(error){
       dispatch({type:"API_ERROR"});
    }
 

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