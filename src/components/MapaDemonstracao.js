import React, { Component } from "react";
import { 
  Map, 
  TileLayer, 
  CircleMarker, 
  Popup 
} from "react-leaflet";
import {
  atribuicao,
  telhaUrl,
  estadoPadrao,
} from './utils/Utilidades';
import MapaConfig from "./MapaConfig";
import "leaflet/dist/leaflet.css";

export default class DemoMap extends Component {
    state = estadoPadrao;
    render() {
        return this.props.referencia ? (
        <Map
            center={[this.state.lat, this.state.lng]}
            zoom={this.state.zoom}
            style={{ width: "100%", position: "absolute", top: 0, bottom: 0, zIndex: 500, }}
            updateWhenZooming={false}
            updateWhenIdle={true}
            preferCanvas={true}
            minZoom={this.state.minZoom}
        >
            <TileLayer
                attribution={atribuicao}
                url={telhaUrl}
            />
            {this.props.referencia.map((ponto, idx) => 
                <CircleMarker 
                    key={`mountain-${ponto.id}`}
                    color='black'
                    radius={15}
                    weight={2}
                    onClick={() => { 
                        this.setState({ referenciaAtivada: ponto });
                    }}
                    center={ponto.point}>
                </CircleMarker>
            )}
            {this.state.referenciaAtivada && <Popup
                position={this.state.referenciaAtivada.point}
                onClose={() => {
                    this.setState({ referenciaAtivada: null })
                }}
            >
                <MapaConfig
                    localizacao={this.state.referenciaAtivada}
                />
            </Popup>}
        </Map>
        ) : (
            "Data is loading..."
        );
    }
}