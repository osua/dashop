import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
class About extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
        <div className="site-About">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h1>
                  Dashop, El Mercado Online de productos e Insumos Marinos.
                </h1>
                <p>
                  Ubicados en la famosa Costa Este de Estados Unidos (U.S.A.)
                  para nuestros clientes en Latino America(Colombia y
                  Argentina), utilizando Node.JS y Snipcart plataforma de
                  Ecommerce Full-Stack:{" "}
                  <a href="https://www.gatsbyjs.org/">Gatsby</a> +{" "}
                  <a href="https://flotiq.com">Flotiq</a> +{" "}
                  <a href="https://snipcart.com">Snipcart</a>.
                </p>
                <ul>
                  <li>
                    <p>
                      <strong>
                        Este Marketplace te brindara una serie de Productos
                        curadoss con la mejor calidad. Tambien podras leer
                        documentacion de nuestro Stack principal{" "}
                        <a href="https://www.gatsbyjs.org/tutorial/">
                          Gatsby.js.
                        </a>
                        .
                      </strong>{" "}
                      Utilizados para crear esta tienda.
                    </p>
                  </li>
                </ul>

                <h2 id="learningflotiq">
                  Manejamos nuestro contenido con Flotiq
                </h2>

                <p>
                  Usando Flotiq puedes modelar, crear y Consumir, tu contenido a
                  tu manera. Flotiq Utiliza structuras de CMS "sin cabeza" y
                  APIs en un modelo offline que asegura que tu contenido siempre
                  se encuentre disponible.
                </p>
                <p>Mira lo que puedes hacer con Flotiq Headless CMS System:</p>
                <ul>
                  <li>
                    <p>
                      <a href="https://flotiq.com">Flotiq.com Pagina</a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="https://flotiq.com/docs">Flotiq docs</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default About
