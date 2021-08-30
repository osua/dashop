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
                <h1>Dashop, el mercado online con Snipcart</h1>
                <p>
                  Ecommerce con Stackeado:{" "}
                  <a href="https://www.gatsbyjs.org/">Gatsby</a> +{" "}
                  <a href="https://flotiq.com">Flotiq</a> +{" "}
                  <a href="https://snipcart.com">Snipcart</a>.
                </p>
                <ul>
                  <li>
                    <p>
                      <strong>
                        Este Marketplace te brindara una serie de Productos
                        curadoss con la mejor calidad.{" "}
                        <a href="https://www.gatsbyjs.org/tutorial/">
                          Arriba podras fijarte en un Paso a paso para recrear
                          esta tienda.
                        </a>
                        .
                      </strong>{" "}
                      Empezaremos sin asumir ningun nivel de tu parte, el camino
                      y su respectivo paso a paso se encuentran en el tutorial.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>
                        Puedes ir directo a Muestras de codigo, head{" "}
                        <a href="https://www.gatsbyjs.org/docs/">
                          en la documentacion de Gatsby.js
                        </a>
                        .
                      </strong>{" "}
                      En particular puedes revisar las <em>Guias</em>,{" "}
                      <em>referencia API</em>, y <em> Tutoriales avanzados</em>{" "}
                      sectiones en la sidebar.
                    </p>
                  </li>
                </ul>

                <h2 id="learningflotiq">Utilizando Flotiq</h2>

                <p>
                  Usando Flotiq puedes modelar, crear y Consumir, tu contenido a
                  tu manera. Flotiq Utiliza structuras de CMS sin cabeza y APIs
                  en un modelo offline que asegura que tu contenido siempre este
                  disponible.
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
                  <li>
                    <p>
                      <a href="https://github.com/flotiq">
                        Explora Repositorios de ejemplos.
                      </a>
                    </p>
                  </li>
                </ul>

                <h2 id="deploy">Despliega</h2>
                <p>
                  Este proyeto tambien lo puedes desplegar en Heroku de una
                  manera sencilla:
                </p>
                <p>
                  <a href="https://heroku.com/deploy?template=https://github.com/flotiq/gatsby-starter-products">
                    <img
                      src="https://www.herokucdn.com/deploy/button.svg"
                      alt="Desplegar"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default About
