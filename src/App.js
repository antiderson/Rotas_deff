import React, {Component} from 'react';
import MapaDemonstracao from "./components/MapaDemonstracao";
import {referencia} from "./components/utils/Utilidades";
import "leaflet/dist/leaflet.css";

class App extends Component {
  state = {
    referencia: referencia,
  };

  render() {

    return (
      <div id="page-map">
        <MapaDemonstracao
        referencia={this.state.referencia}
        />
      </div>
    );
  }
}

export default App;