import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCart = () => {

  const [myCart,setMyCart] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-cart/${user.email}`)
        .then((res) => res.json())
        .then((item) => {
          setMyCart(item);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loader or loading state
  }

console.log(myCart);
  return (
    <div>
      <p>My cart page</p>
      <div className="flex gap-10">
      {
        myCart.map(cart =>{
          return <>
          <div className="">
          <img src={cart?.img} alt="" />
          </div>
          </>
        })
      }
      </div>

    </div>
  );
};

export default MyCart;