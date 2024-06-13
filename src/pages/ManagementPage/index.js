import styles from './Service.module.css'
import { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import api from '../../utils/api'

function ManagementPage() {
    const [isModalOpenCadastro, setIsModalOpenCadastro] = useState(false);
    const [isModalOpenDeletar, setIsModalOpenDeletar] = useState(false);
    const [isModalOpenEditar, setIsModalOpenEditar] = useState(false);
    const [isModalOpenServicos, setIsModalOpenServicos] = useState(false);

    const [clientes, setClientes] = useState([]);
    const [clienteSelecionado, setClienteSelecionado] = useState({});
    const [novoCliente, setNovoCliente] = useState({
        nome: '',
        cpf: '',
        telefone: ''
    });
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        setNovoCliente({ ...novoCliente, [e.target.name]: e.target.value });
    }

    function validateCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g,'');
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
        let soma = 0;
        for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
        let resto = 11 - (soma % 11);
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpf.charAt(9))) return false;
        soma = 0;
        for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
        resto = 11 - (soma % 11);
        if (resto === 10 || resto === 11) resto = 0;
        return resto === parseInt(cpf.charAt(10));
    }

    function validatePhone(phone) {
        const phoneRegex = /^(\d{10,11})$/;
        return phoneRegex.test(phone.replace(/[^\d]+/g,''));
    }

    function validateForm() {
        const newErrors = {};
        if (!validateCPF(novoCliente.cpf)) newErrors.cpf = "CPF inválido";
        if (!validatePhone(novoCliente.telefone)) newErrors.telefone = "Telefone inválido";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    useEffect(() => {
        api.get("/cliente/listar").then((response) => {
            setClientes(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    async function deletarCliente(id) {
        try {
            await api.delete(`/cliente/${id}`).then((resp) => {
                alert("Cliente excluído com sucesso");
                setClientes(clientes.filter(cliente => cliente.id !== id));
            });
        } catch (error) {
            console.error(error);
        }
    }

    const handleOpenModalCadastro = () => {
        setIsModalOpenCadastro(true);
    };

    async function handleCloseModalCadastro() {
        if (validateForm()) {
            try {
                await api.post("/cliente/cadastrar", novoCliente).then((response) => {
                    alert("Cliente cadastrado com sucesso");
                    setClientes([...clientes, response.data]);
                    setNovoCliente({ nome: '', cpf: '', telefone: '' });
                    setIsModalOpenCadastro(false);
                });
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("Por favor, corrija os erros no formulário.");
        }
    }

    const handleOpenModalDeletar = (cliente) => {
        setClienteSelecionado(cliente);
        setIsModalOpenDeletar(true);
    };

    const handleCloseModalDeletar = () => {
        setIsModalOpenDeletar(false);
    };

    const handleOpenModalEditar = (cliente) => {
        setClienteSelecionado(cliente);
        setIsModalOpenEditar(true);
    };

    async function handleCloseModalEditar() {
        if (validateForm()) {
            try {
                await api.put(`/cliente/${clienteSelecionado.id}`, clienteSelecionado).then((response) => {
                    alert("Cliente editado com sucesso");
                    setClientes(clientes.map(cliente => cliente.id === clienteSelecionado.id ? response.data : cliente));
                    setIsModalOpenEditar(false);
                });
            } catch (error) {
                console.error(error);
            }
        } else {
            alert("Por favor, corrija os erros no formulário.");
        }
    }

    const handleOpenModalServicos = () => {
        setIsModalOpenServicos(true);
    };

    const handleCloseModalServicos = () => {
        setIsModalOpenServicos(false);
    };

    return (
        <section className={styles.container}>
            <header className={styles.headerAdmin}>
                <div className={styles.headerAdminContent}>
                    <img src={logo} width={60} style={{ marginLeft: '20px' }} />
                    <div className={styles.headerActions} style={{ marginRight: '20px' }}>
                        <Link to='/management'>Area de Clientes</Link>
                        <Link to='/servicos'>Area de Serviços</Link>
                    </div>
                </div>
            </header>
            <div className={styles.content}>
                <div className={styles.titulo}>
                    <p>Clientes</p>
                    <button style={{ backgroundColor: '#000', borderRadius: '20px', color: '#fff', padding: '10px' }} onClick={handleOpenModalCadastro}>Adicionar Cliente</button>
                </div>
                <div className={styles.borda}>
                    <div className={styles.bordaContent}>
                        {clientes.length > 0 && clientes.map((cliente) => (
                            <div className={styles.cliente} key={cliente.id}>
                                <p className={styles.clienteTitle}>{cliente.nome}</p>
                                <p className={styles.clienteInfo}><strong>CPF:</strong> {cliente.cpf}</p>
                                <p className={styles.clienteInfo}><strong>Contato:</strong> {cliente.contato}</p>
                                <div className={styles.botoes}>
                                    <div className={styles.actions}>
                                        <button className={styles.actionButton} onClick={() => handleOpenModalEditar(cliente)}>Editar</button>
                                        <button className={styles.actionButton} onClick={() => handleOpenModalDeletar(cliente)}>Deletar</button>
                                    </div>
                                    <button className={styles.link} onClick={handleOpenModalServicos}>Ver serviços</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {clientes.length === 0 && <p>Não há clientes cadastrados</p>}
                </div>
            </div>
            {isModalOpenCadastro && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <header className={styles.modalHeader}>
                            <h2>Novo Cliente</h2>
                            <span className={styles.modalClose} onClick={() => setIsModalOpenCadastro(false)}>&#10006;</span>
                        </header>
                        <form className={styles.modalForm}>
                            <input type="text" className={styles.modalField} name='nome' value={novoCliente.nome} onChange={handleChange} placeholder="Nome do Cliente" />
                            {errors.cpf && <span className={styles.error}>{errors.cpf}</span>}
                            <input type="text" className={styles.modalField} name='cpf' value={novoCliente.cpf} onChange={handleChange} placeholder="CPF do cliente" />
                            {errors.telefone && <span className={styles.error}>{errors.telefone}</span>}
                            <input type="text" className={styles.modalField} name='telefone' value={novoCliente.telefone} onChange={handleChange} placeholder="Telefone" />
                        </form>
                        <footer className={styles.modalFooter}>
                            <button className={[styles.button, styles.green]} onClick={handleCloseModalCadastro}>Salvar</button>
                            <button className={[styles.button, styles.blue]} onClick={() => setIsModalOpenCadastro(false)}>Cancelar</button>
                        </footer>
                    </div>
                </div>
            )}

            {isModalOpenDeletar && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <header className={styles.modalHeader}>
                            <h2>Deletar Cliente</h2>
                            <span className={styles.modalClose} onClick={() => setIsModalOpenDeletar(false)}>&#10006;</span>
                        </header>
                        <p>Você realmente deseja deletar o cliente {clienteSelecionado.nome}?</p>
                        <footer className={styles.modalFooter}>
                            <button className={[styles.button, styles.green]} onClick={() => deletarCliente(clienteSelecionado.id)}>Sim, tenho certeza.</button>
                            <button className={[styles.button, styles.blue]} onClick={handleCloseModalDeletar}>Cancelar</button>
                        </footer>
                    </div>
                </div>
            )}

            {isModalOpenEditar && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <header className={styles.modalHeader}>
                            <h2>Editar Cliente</h2>
                            <span className={styles.modalClose} onClick={() => setIsModalOpenEditar(false)}>&#10006;</span>
                        </header>
                        <form className={styles.modalForm}>
                            <input type="text" className={styles.modalField} name='nome' value={clienteSelecionado.nome} onChange={(e) => setClienteSelecionado({ ...clienteSelecionado, nome: e.target.value })} placeholder="Nome do Cliente" />
                            {errors.cpf && <span className={styles.error}>{errors.cpf}</span>}
                            <input type="text" className={styles.modalField} name='cpf' value={clienteSelecionado.cpf} onChange={(e) => setClienteSelecionado({ ...clienteSelecionado, cpf: e.target.value })} placeholder="CPF do Cliente" />
                            {errors.telefone && <span className={styles.error}>{errors.telefone}</span>}
                            <input type="text" className={styles.modalField} name='telefone' value={clienteSelecionado.telefone} onChange={(e) => setClienteSelecionado({ ...clienteSelecionado, telefone: e.target.value })} placeholder="Telefone do Cliente" />
                        </form>
                        <footer className={styles.modalFooter}>
                            <button className={[styles.button, styles.green]} onClick={handleCloseModalEditar}>Salvar</button>
                            <button className={[styles.button, styles.blue]} onClick={() => setIsModalOpenEditar(false)}>Cancelar</button>
                        </footer>
                    </div>
                </div>
            )}

            {isModalOpenServicos && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <header className={styles.modalHeader}>
                            <h2>Últimos Serviços</h2>
                            <span className={styles.modalClose} onClick={handleCloseModalServicos}>&#10006;</span>
                        </header>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                            <p><strong>Nome do serviço | Preço | Data Marcada | Data de Registro</strong></p>
                            <p>Corte normal | R$45,00 | 10-10-2024 | 09-10-2024</p>
                            <p>Barba completa | R$35,00 | 10-10-2024 | 09-10-2024</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default ManagementPage;
