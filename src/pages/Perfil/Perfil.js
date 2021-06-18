import React from "react";
import Error from "../../Components/Error/Erro";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import useFetch from "../../Hooks/useFetch";
import { ALL_PEDIDOS_GET } from "../../Api/api";

import styles from "./Perfil.module.scss";
import { UserContext } from "../../UserContext";
import PerfilItem from "./PerfilItem";
import PerfilItemNotAdmin from "./PerfilItemNotAdmin";

const Perfil = () => {
  const { data, loading, error, request } = useFetch();
  const cx = React.useContext(UserContext);  
  console.log(cx) 
  const idUsuario = cx.data.id;
  const nomeUsuario = cx.data.username;
  
  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = ALL_PEDIDOS_GET();
      const { response, json } = await request(url, options);
      if (response && response.ok) return json;
      console.log(json);
    }
    fetchPhotos();
  }, [request]);
  console.log(data)

  if (error) return <Error error={error} />;
  if (loading) return <p>Carregando...</p>;

  if (data === null)
    return <p className={styles.noPost}>Você ainda não possui pedidos...</p>;

    
      if (data  && nomeUsuario === 'lionsburguer' && idUsuario === 1)
      return (
        <>
          <Header />
          <main className="container animeLeft">
            <div>
                <h1 className={styles.title}>Pedidos:</h1>
              <div className={styles.gridItem}>
                {data.map((item) => (
                  <PerfilItem item={item}/>
                ))}
              </div>
            </div>
          </main>
          <Footer />
        </>
      );

  if (data ) 
    return <PerfilItemNotAdmin user={nomeUsuario}  />
};

export default Perfil;
