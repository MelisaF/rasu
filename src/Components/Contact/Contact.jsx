import React from 'react';
import './contact.css'

export const Contact = () => {
    return (
        <div className="sectionContacto">
            <div className="section_contact my-5">
                <h1 className="titleSesion">CONTACTANOS</h1>
                <form id="formContacto">
                    <input name="nombre" id="nombre" type="text" placeholder="Nombre"/>
                    <input name="apellido" id="apellido" type="text" placeholder="Apellido"/>
                    <input name="telefono" id="tel" type="number" placeholder="Teléfono"/>
                    <input name="email" id="email" type="text" placeholder="Email"/>
                    <textarea name="comentario" value="">Escribe aquí tu comentario</textarea>
                    <div id="btnEnviarForm">
                        <button type="submit" className="btn btn-outline-dark tamañoBtn">Enviar</button>
                    </div>
                </form>
                <div className="email-dress">
                    <h3>Consultas</h3>
                    <a href="mailto: rasuindumentaria@gmail.com">rasuindumentaria@gmail.com</a>
                </div>
            </div>
        <div>
            <img src="/img-contact.jpg"  alt="imagen de contacto"className="imgContacto"/>
        </div>
    </div>
    )
}
