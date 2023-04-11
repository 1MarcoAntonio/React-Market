import api, { url } from "../data/api";
import { useEffect, useState } from "react";
import Products from "./Products";
import "./Data.css";
import SideMenu from "./SideMenu";

export default function Data() {
  const [product, setProduct] = useState([]);
  const [arquivos, setArquivos] = useState([]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);

  }


  const adicionarArquivo = (novoArquivo) => {
    if (arquivos.length === 0) {
      setArquivos([novoArquivo])
      console.log(arquivos);
    } else {
      setArquivos([...arquivos, novoArquivo])

    }

  };


  useEffect(() => {
    api.get(url).then((res) => setProduct([...res.data.products]));
  }, []);



  // useEffect(() => {

  //   const fetchItems = async () => {
  //     try {
  //       const response = await fetch(API_URL);
  //       if (!response.ok) throw Error('Did no receive expect data')
  //       const listItems = await response.json();
  //       console.log(listItems);
  //       setProduct([listItems]);
  //       console.log('sorrizo', product);
  //       setFetchError(null);
  //     } catch (err) {
  //       setFetchError(err.message)
  //     }
  //   }

  //   (async () => await fetchItems())();
  // }, [])

  // useEffect(() => {
  //   function fetchdata() {
  //     fetch(API_URL).then(response => {
  //       return response.json();
  //     }).then(data => {
  //       setProduct([...data.products])
  //     })
  //   }

  //   fetchdata()
  // }, [])


  return (
    <div>
      <Products sideMenuHandler={toggleMenu} onAdd={adicionarArquivo} productData={product} />
      {isMenuOpen && <SideMenu bought={arquivos} />}
    </div>
  );
}
