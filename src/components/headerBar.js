import React from 'react'

export default function Header(page) {
    return (
        <nav class="navbar navbar-toggleable-lg navbar-dark bg-primary">
            <div class="navbar-brand">ARClass</div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#textoNavbar" aria-controls="textoNavbar" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="textoNavbar">
                <ul class="navbar-nav mr-auto">
                <li class={"nav-item " + (page == "inicio"? "active font-weight-bold":"")}>
                    <a class="nav-link" href="/">Início <span class="sr-only">(Página atual)</span></a>
                </li>
                <li class={"nav-item " + (page == "loja"? "active font-weight-bold":"")}>
                    <a class="nav-link" href="/shop">Loja</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => alert("Este site é apenas uma amostra! Esta função não foi implementada!")}>Seus Conteúdos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" onClick={() => alert("Este site é apenas uma amostra! Esta função não foi implementada!")} >Sua Conta</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}
