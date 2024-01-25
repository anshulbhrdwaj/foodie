import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useCartItems = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [subTotalAmount, setSubTotalAmount] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  const [deliveryAmount, setDeliveryAmount] = useState(0);

  useEffect(() => {
    cartItems[0]?.quantity === 1 ? setDeliveryAmount(50) : setDeliveryAmount(0);
    setSubTotalAmount(
      cartItems.reduce((acc, item) => {
        const orderAmount =
          ((item?.info?.price || item?.info?.defaultPrice) * item?.quantity) /
          100;
        return acc + orderAmount;
      }, 0),
    );
  }, [cartItems]);

  useEffect(() => {
    setTotalAmount(subTotalAmount + deliveryAmount);
  }, [subTotalAmount]);

  return { totalAmount, subTotalAmount, deliveryAmount };
};

export default useCartItems;
