import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import styles from "./Perfil.module.scss";
import { PEDIDOS_GET } from "../../Api/api";
import useFetch from "../../Hooks/useFetch";
import PerfilItem from "./PerfilItem";
import { UserContext } from "../../UserContext";
import Error from "../../Components/Error/Erro";
import { Link } from "react-router-dom";

const PerfilItemNotAdmin = ({ user }) => {
  const { data, loading, error, request } = useFetch();
  const cx = React.useContext(UserContext);
  const nomeUsuario = cx.data.username;

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PEDIDOS_GET({ user });
      console.log(url, "url");
      const { response, json } = await request(url, options);
      console.log(json, "json");
      if (response && response.ok) return json;
    }
    fetchPhotos();
  }, [request, user]);
  //console.log(data, 'on item')

  if (error) return <Error error={error} />;
  if (loading) return <p>Carregando...</p>;

  if (data === null || data.length === 0)
    return (
      <>
        <Header />
        <section className="container animeLeft">
          <div style={{height: '60vh'}}>
            <h1 className={styles.title}>Seus pedidos {user}:</h1>
            <p className={styles.noPost} style={{margin : '1rem'}}>Você ainda não possui pedidos...</p>
            <Link to={"/pedido"}>
              <span style={{textDecoration : 'underline'}}>Faça seu pedido !</span>
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );

  if (data)
    return (
      <>
        <Header />
        <main className="container animeLeft">
          <div style={{minHeight: '60vh'}}>
            <h1 className={styles.title}>Seus pedidos {nomeUsuario}:</h1>
            <div className={styles.gridItem}>
              {data.map((item) => (
                <PerfilItem item={item} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
};

export default PerfilItemNotAdmin;
