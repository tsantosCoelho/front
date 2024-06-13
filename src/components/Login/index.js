import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica de autenticação
        // Se a autenticação for bem-sucedida, redirecione para a página de gerenciamento
        navigate('/management');
    }

    return (
        <div className="login-page">
            <h1>Bem vindo, Thiago </h1>
            <Link to="/">Voltar para a página inicial</Link>
            <form onSubmit={handleSubmit} >
                <label>Email:</label>
                <input type="email" placeholder="Seu Email" />
                <label>Senha:</label>
                <input type="password" placeholder="Sua Senha" />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default LoginPage;
