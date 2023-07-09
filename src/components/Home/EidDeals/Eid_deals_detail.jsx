import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Eid_deals_detail = () => {
  const {id} = useParams()
  // console.log('yes',id);
  const [singlePd,setSinglePd] = useState([])
  const {user} = useContext(AuthContext)
  // if(!user){
  //   return "Loading"
  // }
  // console.log(user.email);


  useEffect(()=>{
    fetch(`http://localhost:3000/eidDeals/${id}`)
    .then(res => res.json())
    .then(data => setSinglePd(data))
  },[])
  // const {img,pName,pid,price,} = singlePd[0]
  const pName = singlePd[0]?.pName
  const img = singlePd[0]?.img
  const pid = singlePd[0]?.pid;
  const price = singlePd[0]?.price;

    const item = {
      pName,
      img,
      pid,
      price,
      from: "eid_deals",
      user: {
        email: user?.email,
        displayName: user?.displayName,
        photoURL: user?.photoURL
      }
    }
  
    console.log(item);

  const handleAddToCart = () => {
    console.log('okkkkkkkk');
    fetch('http://localhost:3000/addToCart',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'added to cart successfully.',
      showConfirmButton: false,
      timer: 1500
  });
  }


  return (
    <div>
      <img src={img} alt="" />
      <button className="bg-orange-400 p-3 rounded-md text-2xl font-bold text-gray-50" onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default Eid_deals_detail;