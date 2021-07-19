import React, { Component } from 'react';

export default class MapaConfig extends Component {
    render () {
        let localizacao = this.props.localizacao;
        return localizacao ? (
            <div className="identificador">
                <p>Refêrencias<br />
                <b>{localizacao.id}: {localizacao.nome}</b><br /> </p>
            </div>
        ) : (
            ""
        );
    }
}