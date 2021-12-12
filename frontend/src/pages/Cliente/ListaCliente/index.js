import React,{useEffect,useState} from 'react';
import {FiTrash2} from 'react-icons/fi'
import "./style.css"

import api from '../../../services/api'


export default function ListaClientes(){

    const [clientes, setClientes] = useState([]);

    useEffect(()=>{
        api.get('/cliente/listar').then(response =>{
            setClientes(response.data)

        })
    },[])

    async function deletarCliente(id){
        try{
            await api.delete(`/cliente/apagar/${id}`)
            setClientes(clientes.filter(clientes => clientes.id != id))
        }catch (error){
            alert('Erro ao apagar o cadastro do cliente, tente novamente')
        }
    }

    return(
        <div className='lista-cliente-container'>
            <div className='conteudo'>
                <div className='titulo-lista-cliente'>
                    <h1>Relatório de Clientes</h1>
                </div>
                <div className='lista-clientes'>
                    <table>
                        <thead>
                            <tr className='tabela-titulo'>
                                <td>Cód</td>
                                <td>Nome Completo</td>
                                <td>CPF</td>
                                <td>Endereço</td>
                                <td>Cidade</td>
                                <td>Celular</td>
                                <td>E-mail</td>
                                <td>Apagar</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                clientes.map( cliente =>(
                                    <tr key={cliente.id}>
                                        <td>{cliente.id}</td>
                                        <td>{cliente.nome+" "+cliente.sobrenome}</td>
                                        <td>{cliente.cpf}</td>
                                        <td>{cliente.endereco}</td>
                                        <td>{cliente.cidade}</td>
                                        <td>{cliente.celular}</td>
                                        <td>{cliente.email}</td>
                                        <td>
                                            <button type='button' onClick={()=> deletarCliente(cliente.id)}>
                                                <FiTrash2 className='icon-apagar'/>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                            
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )
}