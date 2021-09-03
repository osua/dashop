import React from "react"
import { Link } from "gatsby"

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="footer_inner">
          <div className="container">
            <div className="footer-widget footer-content">
              <section id="nav_menu-8" className="widget widget_nav_menu">
                <div className="menu-main-container">
                  <ul id="menu-main" className="menu">
                    <li>
                      <Link to="/">Inicio//</Link>
                    </li>
                    <li>
                      <Link to="/about">Sobre Nosotros//</Link>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="footer-bottom social-right-menu ">
              <div className="site-info">
                ©2021 Dashop. Todos los derechos reservados. x{" "}
                <a href="https://github.com/osua/dashop">//0su.</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
