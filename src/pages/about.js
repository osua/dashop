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
                  Dashop, El Mercado Online de Productos e Insumos Marinos.
                </h1>
                <p>
                  Ubicados en la Famosa Costa Este de Estados Unidos (U.S.A.)
                  brindamos servicios para nuestros clientes en Latino America
                  (Colombia y Argentina), utilizando Node.JS y React combinando
                  una plataforma de Ecommerce utilizando Full-Stack:{" "}
                  <a href="https://www.gatsbyjs.org/">Gatsby</a> +{" "}
                  <a href="https://flotiq.com">Flotiq</a> +{" "}
                  <a href="https://snipcart.com">Snipcart</a>.
                </p>
                <ul>
                  <li>
                    <p>
                      <strong>
                        Este Marketplace soportado por Snipcart, te brindara una
                        serie de Productos seleccionados con la mejor calidad.
                      </strong>{" "}
                      Podrás leer documentación de nuestro Stack principal{" "}
                      <a href="https://www.gatsbyjs.org/tutorial/">
                        Gatsby.js.
                      </a>
                      Utilizado principalmente para crear esta sitio.
                    </p>
                  </li>
                </ul>

                <h2 id="learningflotiq">
                  Nuestro contenido es compilado con Flotiq
                </h2>

                <p>
                  En donde puedes Modelar, Crear y Consumir, tu contenido a tu
                  manera. Flotiq Utiliza structuras de CMS "sin cabeza" y APIs
                  en un modelo offline que asegura que tu contenido siempre se
                  encuentre disponible.
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
