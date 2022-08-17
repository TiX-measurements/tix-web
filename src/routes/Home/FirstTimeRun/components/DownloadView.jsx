import React, { Component } from 'react';
import InstallatorsView from './InstallatorsView';

class DownloadView extends Component {
  render() {
    return (
      <section id='typography'>
        <div className='page-header'>
          <h1>Descarga aplicación</h1>
        </div>
        <div className='row'>
        </div>
        <InstallatorsView />
        <div className='row'>
          <div className='span12'>
            <h3>Instrucciones de instalaci&oacute;n</h3>
            <h4>Android</h4>
            <p>Para instalar la aplicación en su dispositivo android debes seguir los siguientes pasos:</p>
            <ul>
              <li>Haciendo click sobre el logo del sistema android se dirigirá a un repositorio github</li>
              <li>Puede descargar el archivo APK desde la carpeta <strong>release</strong> para instalarlo en su dispositivo</li>
              <li>Alternativamente podra compilar la aplicacion para ser ejecutada en un emulador siguiendo las instrucciones en el README del repositorio</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='span12'>
            <h4>Cliente web</h4>
            <p>También puede descargarse y compilar el cliente Java desde <a href="https://github.com/TiX-measurements/tix-time-client">Github</a>.</p>
          </div>
        </div>

      </section>
    );
  }

}

export default DownloadView;
