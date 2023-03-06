import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from "react";
import Cart from "../components/Cart";
import { api } from "../utils/api";
import axios from "axios";

type ToursProviderProps = {
  children: ReactNode;
};

type ToursType = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: number;
};

type CartType = {
  id: string;
  quantity: number;
};

type ToursContext = {
  open: boolean;
  tours: ToursType[];
  cart: CartType[];
  loading: boolean;
  closeSidebar: () => void;
  openSidebar: () => void;
  addToCart: (id: string) => void;
  quantity: number;
  getQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  decrease: (id: string) => void;
};

const ToursContext = createContext({} as ToursContext);

export const ToursProvider = ({ children }: ToursProviderProps) => {
  const [tours, setTours] = useState<ToursType[]>([]);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState<CartType[]>([]);
  const [open, setOpen] = useState(false);

  // Total quantity of all items
  const quantity = cart.reduce((quantity, item) => item.quantity + quantity, 0);

  // Quantity of single item
  const getQuantity = (id: string) => {
    return cart.find((item) => item.id === id)?.quantity;
  };

  // Fetch data
  const fetchTours = async (url: string) => {
    setLoading(true);
    try {
      const resp = await axios.get(url);
      setTours(resp.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  // Remove
  const removeItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Add to cart
  const addToCart = (id: string) => {
    setCart((current) => {
      if (current.find((item) => item.id === id) == undefined) {
        return [...current, { id, quantity: 1 }];
      } else {
        return current.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  // Increase
  const decrease = (id: string) => {
    setCart((current) => {
      if (current.find((item) => item.id === id)?.quantity === 1) {
        return [];
      } else {
        return current.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const closeSidebar = () => {
    setOpen(false);
  };

  const openSidebar = () => {
    setOpen(true);
  };

  useEffect(() => {
    fetchTours(api);
  }, []);

  return (
    <ToursContext.Provider
      value={{
        open,
        tours,
        cart,
        loading,
        addToCart,
        closeSidebar,
        openSidebar,
        quantity,
        getQuantity,
        removeItem,
        decrease,
      }}
    >
      {children}
    </ToursContext.Provider>
  );
};

export const useToursContext = () => {
  return useContext(ToursContext);
};
