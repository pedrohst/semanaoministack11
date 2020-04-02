import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.jpg';
import heroesImg from '../../assets/heroes.jpg';

export default function Logon() {

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try
        {
            const response = await api.post('sessions', {id});

            //console.log(response.data.name);
            // PARA SALVAR NO NAVEGADOR
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }
        catch (error)
        {
            alert('Falha ao acessar. Tente novamente.')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logotipo Projeto Renascer"/>

                <form onSubmit={handleLogin}>

                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={ e=> setId(e.target.value)}
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#8c0099" />
                        Não tenho cadastro
                    </Link>

                </form>

            </section>

            <img src={heroesImg} alt="Imagem com uma família soltando pipa" />
        </div>
    );
}