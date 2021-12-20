
// NOTES:
// - base map from this repo: https://github.com/visgl/react-map-gl/blob/5.2-release/examples/get-started/classic/app.js


import * as React from 'react';
import {render} from 'react-dom';
import MapGL, {Layer} from 'react-map-gl';

const MAPBOX_TOKEN = "pk.eyJ1IjoiZmFuZGlsbGFkcCIsImEiOiJja2t2bGhtdW8xNWE1MnBsbXR5bTFyNm94In0.Cw8RqeLPToDY7XpQuI4cjw";

const parkLayer = {
  id: 'resikoBanjirTanggamus',
  type: 'fill',
  source: 'mapbox',
  'source-layer': 'resikoBanjirTanggamus',
  filter: ['==', 'class', 'park'],
};

class CustomMap extends React.Component {


  constructor(props) {
      super(props);
      this.state = {
        viewport: {
          latitude: -5.61578 ,
          longitude: 104.79068,
          zoom: 9.91,
          pitch: 60.0,
          bearing: -27.72,
        },
        scrollPosition : 0
      };
    }
    listenToScrollEvent = () => {
      document.addEventListener("scroll", () => {
        requestAnimationFrame(() => {
          this.calculateScrollDistance();
        });
      });
    }
    calculateScrollDistance = () => {
      const scrollTop = window.pageYOffset; // how much the user has scrolled by
      const winHeight = window.innerHeight;
      const docHeight = this.getDocHeight();
  
      const totalDocScrollLength = docHeight - winHeight;
      const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100)
  
      this.setState({
        scrollPostion,
      });
      console.log(scrollPostion);
    }
  
    getDocHeight = () => {
      return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
      );
    }

    componentDidMount() {
      this.listenToScrollEvent();
      setTimeout(() => {
      this.setState({viewport: {
          latitude: -5.53842,
          longitude: 104.62852,
          zoom: 9.90,
          pitch: 0.00,
          bearing: -50.92
        }});  
      }, 10000)
  
      // if(scrollPostion == 96){
      //   this.setState({viewport: {
      //     latitude: -5.53842,
      //     longitude: 104.62852,
      //     zoom: 9.90,
      //     pitch: 0.00,
      //     bearing: -50.92
      //   }});  
      // }else if (scrollPostion == 100){
      //   this.setState({viewport: {
      //     latitude: -5.53842,
      //     longitude: 104.62852,
      //     zoom: 9.90,
      //     pitch: 0.00,
      //     bearing: -50.92
      //   }});
      // }else if (scrollPostion == 106){
      //   this.setState({viewport: {
      //     latitude: -5.50425 ,
      //     longitude: 104.4957,
      //     zoom: 11.87,
      //     pitch: 60.0,
      //     bearing: 101.08,
      //   }});
      // }
    }
  
    render() {
      return (
        <MapGL
          {...this.state.viewport}
          width="100vw"
          height="100vh"
          mapStyle="mapbox://styles/fandilladp/ckxdi9e6qeyjl15luv88kx85q"
          onViewportChange={viewport => this.setState({viewport})}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        >
          <Layer  {...parkLayer}/>
        </MapGL>
      );
    }
}

module.exports = CustomMap;