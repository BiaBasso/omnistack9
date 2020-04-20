import React, { useState } from 'react';
import api from '../../services/api';

// Para auxiliar na navegação é usado os parametros que são passados como argumentos de funções
export default function Login ({ history }) {

    const [email, setEmail] = useState(''); // email sempre estará com o valor atualizado que eu digitei. setEmail serve para atualizar o meu estado

    async function handleSubmit(event) {
  
      event.preventDefault();
  
      const response = await api.post('/sessions', { email });
  
      const { _id } = response.data;
  
      localStorage.setItem('user', _id); // Salvando o id do usuário dentro do storage do navegador

      history.push('/dashboard');
    }

    return (
        <>
            <p>
                Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
            </p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input 
                type="email" 
                id="email" 
                placeholder="Seu melhor e-mail" 
                value={email}
                onChange={event => setEmail(event.target.value)}
                />

                <button className="btn" type="submit">Entrar</button>
            </form>
        </>
    )
}