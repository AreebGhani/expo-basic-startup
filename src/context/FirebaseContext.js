import { createContext, useContext, useState, useEffect } from 'react';
import { getData } from '../firebase/db';

const FirebaseContext = createContext();

export const useFirebase = () => {
  return useContext(FirebaseContext);
};

const FirebaseProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    //! Get Data From Firebase Collection
    // const storedData = await getData("test");
    setData([]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const values = {
    data,
    fetchData,
    loading
  };

  return (
    <FirebaseContext.Provider value={values}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
