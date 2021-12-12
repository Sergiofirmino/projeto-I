import React, { useState } from 'react';
import api from '../../../services/api'
import {FiArrowLeftCircle} from "react-icons/fi";
import {Link,useNavigate} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import './style.css'

import CarrinhoCompras from '../../../assets/img/carrinho_de_compra.png'

export default function NovoCliente() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [sexo, setSexo] = useState('')
    const [endereco, setEndereco] = useState('')
    const [cidade, setCidade] = useState('')
    const [uf, setUf] = useState('')
    const [email, setEmail] = useState('')
    const [celular, setCelular] = useState('')

    const navegacao = useNavigate();
    
   async function executarCadastro(e){
        e.preventDefault();

        const data = {
            nome, sobrenome, cpf, sexo, endereco, cidade, uf, email, celular
        }
        try{
           const response = await api.post('/cliente/cadastro', data)
           alert(`Cadastro realizado com sucesso e seu id de acesso é ${response.data}`)

           navegacao('/')
        }catch (error){
            alert('Erro ao tentar cadastrar, tente novamente.')
        }
       
        
    }

    return (
        <div className="novo-cliente-container">
            <div className="content">
                
            <section className="cliente-form">
                <section className="logo-carrinho-compras"> 
                    <img src={CarrinhoCompras} alt="Carrinho de compras"/>
                    <Link to="/"><FiArrowLeftCircle className="icon" size={30} color="#e02041"/></Link>
                    
                </section>
                <section className="form-cadastro-cliente">
                    <h1>Cadastro de clientes</h1>
                
                    <form onSubmit={executarCadastro}>
                        
                    <div>    
                    <input
                            type="text"
                            placeholder="Digite seu Nome"
                            value={nome}
                            onChange={e => setNome(e.target.value)} style={{width:'30%'}}/>
                       
   
                        <input
                            type="text"
                            placeholder="Digite seu Sobrenome"
                            value={sobrenome}
                            onChange={e => setSobrenome(e.target.value)} style={{width:'60%'}}/>

                        <input
                            type="text"
                            placeholder="Digite seu CPF"
                            value={cpf}
                            onChange={e => setCpf(e.target.value)} style={{width:'50%'}}/>
                       
                        
                        <input
                            type="text"
                            placeholder="Sexo"
                            value={sexo}
                            onChange={e => setSexo(e.target.value)} style={{width:'40%'}} />

                        <input
                            type="text"
                            placeholder="Endereço"
                            value={endereco}
                            onChange={e => setEndereco(e.target.value)} style={{width:'92%'}}/>  <br/>

                        <input
                            type="text"
                            placeholder="Cidade"
                            value={cidade}
                            onChange={e => setCidade(e.target.value)} />   

                        <input
                            type="text"
                            placeholder="UF"
                            value={uf}
                            onChange={e => setUf(e.target.value)} style={{width:'33%'}} />  

                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={e => setEmail(e.target.value)} style={{width:'60%'}} />

                        <input
                            type="text"
                            placeholder="Celular"
                            value={celular}
                            onChange={e => setCelular(e.target.value)} style={{width:'30%'}} /> 

                        
                            <button class="button">Cadastrar</button>
                           
                          
                        </div> 
                    </form>

                </section>
            </section>
            </div>
        </div>
    )
}