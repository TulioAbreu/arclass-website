import React from 'react'
import underConstruction from '../assets/underConstruction.png'
import logo from '../assets/logoBlack.png'
import './headerBar.css'

export default function Header(page) {
    return (
        <nav class="navbar navbar-toggleable-lg navbar-dark bg-primary">
            <div id="devModal" class="modal" tabIndex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Em construção!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Este site é apenas uma amostra, portanto funções como esta não estão disponíveis.</p>
                        <div class="text-center">
                            <img src={underConstruction} alt="Em Construção" width="80%">
                            </img>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-dismiss="modal">Fechar</button>
                    </div>
                    </div>
                </div>
            </div>


            <div class="navbar-brand logoFont"> <img className="logoImg" src={logo} width="20%"/>ARClass</div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#textoNavbar" aria-controls="textoNavbar" aria-expanded="false" aria-label="Alterna navegação">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="textoNavbar">
                <ul class="navbar-nav mr-auto">
                <li class={"nav-item  mr-5 " + (page == "inicio"? "active font-weight-bold":"")}>
                    <a class="nav-link" href="/">Início <span class="sr-only">(Página atual)</span></a>
                </li>
                <li class={"nav-item  mr-5  " + (page == "loja"? "active font-weight-bold":"")}>
                    <a class="nav-link" href="/shop">Loja</a>
                </li>
                <li class="nav-item  mr-5 ">
                    <a class="nav-link" href="#" data-toggle="modal" data-target={"#devModal"}>Seus Conteúdos</a>
                </li>
                <li class="nav-item  mr-5 ">
                    <a class="nav-link" href="#" data-toggle="modal" data-target={"#devModal"} >Sua Conta</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}
