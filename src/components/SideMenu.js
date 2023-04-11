import api, { url } from "../data/api";
import { useEffect, useState } from "react";
import "./SideMenu.css";
const SideMenu = (props) => {
  const [cart, setCart] = useState([]);


  // useEffect(() => {
  //   api.get(`${url}/${props.bought}`).then((res) => setCart([...res.data]));
  // }, []);
  // console.log(cart);
  // const data = props.bought;

  // useEffect(() => {
  //   (async () => {
  //     const requests = props.bought.map(async (e) => {
  //       const item = await api.get(`${url}/${e}`);
  //       const order = { item: item, quantity: e.quantity };
  //       return order;
  //     });
  //     const responses = await Promise.all(requests);
  //     const data = responses.map((res) => {
  //       const order = { item: res.item.data, quantity: res.item.quantity };
  //       return order;
  //     });
  //     setCart(data);
  //   })();
  // }, [props.bought]);

  const fetchDatas = async (item) => {
    const response = await fetch(`${url}/${item}`);
    const result = await response.json();
    return result;
  }

  useEffect(() => {
    const fetchDataForArray = async () => {
      const result = await Promise.all([...props.bought].map(cart => fetchDatas(cart)));
      setCart([...result])
    }
    fetchDataForArray();
  }, []);

  console.log(cart);

  if (props.bought.length === 0) {
    return (
      <div>
        <p> not found</p>
      </div>
    )
  } else {
    return (
      <div className="side-menu">
        {props.bought.length > 0 && cart.map((p, index) => {
          return [
            <div key={index}>
              <img
                className="thumb"
                src={p.thumbnail}
                alt={'ronaldo'}
              >
              </img>
            </div>

          ]
        })}
      </div>
    );
  }


};

export default SideMenu;
