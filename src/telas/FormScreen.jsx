import React from 'react';
import './FormScreen.css';

const FormScreen = () => {
    return (
        <div className="form-screen-container">
            <header className="header">
                <h1 className="logo-title">
                    <img src="../Group%20(1).png" alt="logo1" className="logo" />
                    FixClick
                </h1>
            </header>

            <div className="form-wrapper">
                <h2 className="form-title">Cadastre um novo material</h2>
                <form className="form">
                    <input type="text" placeholder="Nome do material" className="input" />
                    <select className="dropdown">
                        <option value="">Unidade de medida</option>
                        <option value="unidade">Unidade</option>
                        <option value="kg">Kg</option>
                        <option value="litro">Litro</option>
                    </select>
                    <input type="text" placeholder="Valor" className="input" />
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default FormScreen;
