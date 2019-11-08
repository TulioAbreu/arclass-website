import React from 'react'
import './header-bar.css'

class Header extends React.Component {
    render() {
        return (
            <div className="header-container">
                {/* <img className="header-logo" src={logo} alt="ARClass Logo"/> */}
                <div className="header-title" alt="ARClass">
                    ARClass
                </div>

                <ul>
                    <li>
                        <a href="/">
                            Início
                        </a>
                    </li>
                    <li>
                        <a href="/shop">
                            Loja
                        </a>
                    </li>
                    <li>
                        Seus Conteúdos
                    </li>
                    <li>
                        Sua Conta
                    </li>
                </ul>

            </div>
        )
    }
}

export default Header;