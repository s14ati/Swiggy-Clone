import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";
import { FiShoppingCart } from "react-icons/fi";
import cart from "../../public/cart.png";
import { useState, useEffect } from "react";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price || 0;
    }
    setTotal(total / 100);
  }, [cartItems]);

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="p-6 h-170 mt-5 flex justify-center items-center">
          <div>
            <img src={cart} />
            <p className="text-gray-600 mt-2 font-bold text-[20px] text-center  ">
              Your cart is empty.
            </p>
            <p className="text-[15px] text-center text-gray-500">
              You can go to home page to view more restaurants
            </p>
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-4xl font-bold m-6 text-orange-600 ">
            <FiShoppingCart className="inline text-[50px] mr-2 mt-[-10px] text-orange-600" />{" "}
            Your Cart
          </h1>

          <div className="m-20">
            <ul className="space-y-4">
              {cartItems.map((item, index) => (
                <li
                  key={item.id + index}
                  className="flex justify-between items-center p-4 rounded-lg shadow"
                >
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-700">
                      ₹ {Math.round(item.price / 100)}
                    </p>
                    {item.description && (
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-white bg-red-600 font-bold px-4 py-1 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-black text-center mb-10">
            Total: ₹ {Math.ceil(total)}
          </h2>
        </>
      )}
    </>
  );
}

export default Cart;
