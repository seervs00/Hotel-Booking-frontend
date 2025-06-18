// AppProvider.jsx
import axios from "axios";
import { useUser, useAuth } from "@clerk/clerk-react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const currency = import.meta.env.VITE_CURRENCY || "$";
  const { user } = useUser();
  const { getToken } = useAuth();
  const [isOwner, setIsOwner] = useState(false);
  const [showHotelReg, setShowHotelReg] = useState(false);
  const [searchedCities, setSearchedCities] = useState([]);
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async() => {
    try{
      const res = await axios.get("/api/rooms");
      if(res.data.success){
        setRooms(res.data.rooms);

      }
      else{
        toast.error(res.data.message)
      }
    }
    catch(err){
      toast.error(err.message)
    }
  }

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/user", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });

      if (data.success) {
        setIsOwner(data.role === "hotelOwner");
        setSearchedCities(data.recentSearchedCities);
      } else {
        setTimeout(fetchUser, 5000);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  useEffect(() => {
    if (user) fetchUser();
  }, [user]);

  useEffect(() => {
    fetchRooms();
  },[])

  const value = {
    currency,
    axios,
    user,
    getToken,
    isOwner,
    setIsOwner,
    showHotelReg,
    setShowHotelReg,
    navigate,
    searchedCities,
    setSearchedCities,
    rooms,
    setRooms
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
