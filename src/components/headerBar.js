import React from 'react'

export default function Header(page) {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-md">
            <a className="navbar-brand" href="/">ARclassName</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#textoNavbar" aria-controls="textoNavbar" aria-expanded="false" aria-label="Alterna navegação">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="textoNavbar">
                <ul className="navbar-nav mr-auto">
                <li className={"nav-item " + (page == "inicio"? "active":"")}>
                    <a className="nav-link" href="/">Início <span className="sr-only">(Página atual)</span></a>
                </li>
                <li className={"nav-item " + (page == "loja"? "active":"")}>
                    <a className="nav-link" href="/shop">Loja</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => alert("Este site é apenas uma amostra! Esta função não foi implementada!")}>Seus Conteúdos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => alert("Este site é apenas uma amostra! Esta função não foi implementada!")} >Sua Conta</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}
