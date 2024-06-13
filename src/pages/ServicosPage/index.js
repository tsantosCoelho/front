import styles from './Service.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

import logo from '../../assets/images/logo.svg'

function ServicesPage() {
    const baseURL = 'http://127.0.0.1:5000';

    const [isModalOpenCadastro, setIsModalOpenCadastro] = useState(false);
    const [isModalOpenDeletar, setIsModalOpenDeletar] = useState(false);
    const [isModalOpenEditar, setIsModalOpenEditar] = useState(false);
    const [idClienteEditado, setIdClienteEditado] = useState(null);

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axios.get(`${baseURL}/servico`)
            .then((response) => {
                setClientes(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    async function adicionarServico(novoServico) {
        try {
            await axios.post(`${baseURL}/servico`, novoServico);
            alert("Serviço adicionado com sucesso");
            handleCloseModalCadastro();
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert("Erro ao adicionar serviço");
        }
    }

    async function deletarServico(id) {
        try {
            await axios.delete(`${baseURL}/servico/${id}`);
            alert("Serviço excluído com sucesso");
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert("Erro ao excluir serviço");
        }
    }

    async function editarServico(id, servicoEditado) {
        try {
            await axios.put(`${baseURL}/servico/${id}`, servicoEditado);
            alert("Serviço editado com sucesso");
            handleCloseModalEditar();
            window.location.reload();
        } catch (error) {
            console.error(error);
            alert("Erro ao editar serviço");
        }
    }

    const handleOpenModalCadastro = () => {
        setIsModalOpenCadastro(true);
    };

    const handleCloseModalCadastro = () => {
        setIsModalOpenCadastro(false);
        const nome = document.getElementById('nomeServico').value;
        const descricao = document.getElementById('descricaoServico').value;
        const preco = parseFloat(document.getElementById('precoServico').value);
        const novoServico = { nome, descricao, preco };
        adicionarServico(novoServico);
    };

    const handleOpenModalDeletar = (id) => {
        setIsModalOpenDeletar(true);
        setIdClienteEditado(id);
    };

    const handleCloseModalDeletar = () => {
        setIsModalOpenDeletar(false);
        deletarServico(idClienteEditado);
    };

    const handleOpenModalEditar = (id) => {
        setIsModalOpenEditar(true);
        setIdClienteEditado(id);
    };

    const handleCloseModalEditar = () => {
        setIsModalOpenEditar(false);
        const nome = document.getElementById('nomeServicoEdit').value;
        const descricao = document.getElementById('descricaoServicoEdit').value;
        const preco = parseFloat(document.getElementById('precoServicoEdit').value);
        const servicoEditado = { nome, descricao, preco };
        editarServico(idClienteEditado, servicoEditado);
    };

    return (
        <section className={styles.container}>
            <header className={styles.headerAdmin}>
                <div className={styles.headerAdminContent}>
                    <img src={logo} width={60} style={{ marginLeft: '20px' }} />
                    <div className={styles.headerActions} style={{ marginRight: '20px' }}>
                        <a>Area de Clientes</a>
                        <a>Area de Serviços</a>
                    </div>
                </div>
            </header>
            <div className={styles.content}>
                <div className={styles.titulo}>
                    <p>Serviços</p>
                    <button style={{ backgroundColor: '#000', borderRadius: '20px', color: '#fff', padding: '10px' }} onClick={handleOpenModalCadastro}>Adicionar Serviço</button>
                </div>
                <div className={styles.borda}>
                    <div className={styles.bordaContent}>
                        {clientes.length > 0 && clientes.map((cliente) => {
                            return (
                                <div key={cliente.id} className={styles.cliente}>
                                    <p className={styles.clienteTitle}>{cliente.nome}</p>
                                    <p className={styles.clienteInfo}><strong>Descrição:</strong> {cliente.descricao}</p>
                                    <p className={styles.clienteInfo}><strong>Preço:</strong> R${cliente.preco.toFixed(2)}</p>
                                    <div className={styles.botoes}>
                                        <div className={styles.actions}>
                                            <button className={styles.actionButton} onClick={() => handleOpenModalEditar(cliente.id)}>Editar</button>
                                            <button className={styles.actionButton} onClick={() => handleOpenModalDeletar(cliente.id)}>Deletar</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {clientes.length === 0 && <p>Não há serviços cadastrados</p>}
                </div>
            </div>
            {isModalOpenCadastro && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <header className={styles.modalHeader}>
                            <h2>Novo Serviço</h2>
                            <span className={styles.modalClose} onClick={handleCloseModalCadastro}>&#10006;</span>
                        </header>
                        <form className={styles.modalForm}>
                            <input type="text" id="nomeServico" className={styles.modalField} placeholder="Nome do Serviço" />
                            <input type="text" id="descricaoServico" className={styles.modalField} placeholder="Descrição" />
                            <input type="text" id="precoServico" className={styles.modalField} placeholder="Preço" />
                        </form>
                        <footer className={styles.modalFooter}>
                            <button className={[styles.button, styles.green]}>Salvar</button>
                            <button className={[styles.button, styles.blue]} onClick={handleCloseModalCadastro}>Cancelar</button>
                        </footer>
                    </div>
                </div>
            )}

            {isModalOpenDeletar && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <header className={styles.modalHeader}>
                            <h2>Deletar Serviço</h2>
                            <span className={styles.modalClose} onClick={handleCloseModalDeletar}>&#10006;</span>
                        </header>
                        <p>Você realmente deseja deletar esse registro?</p>
                        <footer className={styles.modalFooter}>
                            <button className={[styles.modal, styles.green]} onClick={handleCloseModalDeletar}>Sim, tenho certeza.</button>
                            <button className={[styles.modal, styles.blue]} onClick={() => setIsModalOpenDeletar(false)}>Cancelar</button>
                        </footer>
                    </div>
                </div>
            )}

            {isModalOpenEditar && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <header className={styles.modalHeader}>
                            <h2>Editar Serviço</h2>
                            <span className={styles.modalClose} onClick={handleCloseModalEditar}>&#10006;</span>
                        </header>
                        <form className={styles.modalForm}>
                            <input type="text" id="nomeServicoEdit" className={styles.modalField} placeholder="Nome do Serviço" />
                            <input type="text" id="descricaoServicoEdit" className={styles.modalField} placeholder="Descrição" />
                            <input type="text" id="precoServicoEdit" className={styles.modalField} placeholder="Preço" />
                        </form>
                        <footer className={styles.modalFooter}>
                            <button className={[styles.button, styles.green]} onClick={handleCloseModalEditar}>Salvar</button>
                            <button className={[styles.button, styles.blue]} onClick={() => setIsModalOpenEditar(false)}>Cancelar</button>
                        </footer>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ServicesPage;
