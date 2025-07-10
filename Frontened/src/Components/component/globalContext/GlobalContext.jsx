import React from 'react'


const AppContext = React.createContext();


export const GlobalContext = ({children}) => {
    const [message,setMessage]= React.useState(null)

    const handleMessage = (messages)=>{
        setMessage(messages)

        setTimeout(
            ()=>{
               return  setMessage(null);
            },5000
        )
    }


  return (
    <AppContext.Provider value={{handleMessage,message}}>
        {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = ()=>{
    const context = React.useContext(AppContext);

    if (!context){
        throw new Error(`useGlobalContext must be wrapped around `)
    }
    return context
}