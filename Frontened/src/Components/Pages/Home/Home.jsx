import React from 'react';
import { useGlobalContext } from '../../component/globalContext/GlobalContext';






const Home = () => {
  const {message}= useGlobalContext();
  return (
    <h3>{message}</h3>
  )
}

export default Home