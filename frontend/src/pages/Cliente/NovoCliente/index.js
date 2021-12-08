import React, { useState } from 'react';

import './style.css'

export default function NovoCliente() {

    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState('')
    const [sexo, setSexo] = useState('')
    const [Endereco, setEndereco] = useState('')
    const [Cidade, setCidade] = useState('')
    const [Uf, setUf] = useState('')
    const [Email, setEmail] = useState('')
    const [Celular, setCelular] = useState('')

    return (
        <div className="novo-cliente-container">
            <section className="titulo-cadastro-cliente">
                <h1>Cadastro de clientes</h1>
            </section>
            <section className="cliente-form">
                <form action="">
                    <label>
                        <span>Nome</span>
                        <input
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />
                    </label>

                    <label>
                        <span>Sobrenome</span>
                        <input
                            value={sobrenome}
                            onChange={e => setSobrenome(e.target.value)}
                        />
                    </label>

                    <label htmlFor="cpf">
                        <span>CPF</span>
                        <input
                            value={cpf}
                            onChange={e => setCpf(e.target.value)}
                        />
                    </label>

                    <label>
                        <span>Sexo</span>
                        <input
                            value={sexo}
                            onChange={e => setSexo(e.target.value)}
                        />
                    </label>

                    <label>
                        <span>Endereco</span>
                        <input
                            value={Endereco}
                            onChange={e => setEndereco(e.target.value)}
                        />
                    </label>

                    <label>
                        <span>Cidade</span>
                        <input
                            value={Cidade}
                            onChange={e => setCidade(e.target.value)}
                        />
                    </label>

                    <label>
                        <span>Uf</span>
                        <input
                            value={Uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Email</span>
                        <input
                            value={Email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>

                    <label>
                        <span>Celular</span>
                        <input
                            value={Celular}
                            onChange={e => setCelular(e.target.value)}
                        />
                    </label>
                </form>


            </section>
        </div>
    )
}