import React from 'react';

const TokenRequestPage = () => {
    return (
        <div className="token-request-page">
            <h1>Pedido de Token</h1>
            <p>Insira seu token de acesso:</p>
            <input type="text" placeholder="Token de Acesso" />
            <button>Enviar</button>
        </div>
    );
}

export default TokenRequestPage;
