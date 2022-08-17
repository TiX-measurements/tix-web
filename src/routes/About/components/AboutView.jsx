import React from 'react';
import PropTypes from 'prop-types';
import './AboutView.scss';
import InnovaRed from '../assets/innovared.jpg';
import ITBA from '../assets/itba.jpg';
import Lacnic from '../assets/lacnic.jpg';
import Udesa from '../assets/UdeSA.jpg';
import FIUBA from '../assets/fiuba.png'

function Colaborator({ link, alt, image, width }) {
  return (
    <li className='col-md-4 collaborator-center'>
      <a
        href={link}
        target='_blank'
      >
        <img
          alt={alt}
          className='img-thumbnail img-sizing'
          src={image}
          width={width}
        />
      </a>
    </li>
  );
}

export const AboutView = () => (
  <div className='container'>
    <section id='typography'>
      <div className='page-header'>
        <h1>Bienvenido al Proyecto TiX</h1>
      </div>

      <div className='row'>
        <div className='col-md-12'>
          <h3>Sobre el Proyecto TiX</h3>
          <p>El proyecto TiX nace de un subsidio de LACNIC con el fin de diponer de
            una herramienta para medir la calidad de los accesos a Internet.</p>
          <p>Del mismo participan las siguintes instituciones:</p>
        </div>
        <div className='col-md-12'>
          <div className='row-fluid'>
            <ul className='thumbnails'>
              <Colaborator alt='UBA' link='https://www.fi.uba.ar/' image={FIUBA} width="285" />
              <Colaborator alt='LacNIC' link='http://lacnic.net/' image={Lacnic} width="260"/>
            </ul>
          </div>
        </div>

        <div className='col-md-12 offset2'>
          <div className='row-fluid'>
            <ul className='thumbnails'>
              <Colaborator alt='ITBA' link='http://www.itba.edu.ar/' image={ITBA} width="200" />
              <Colaborator alt='UDESA' link='http://www.udesa.edu.ar/' image={Udesa} width="200" />
            </ul>
          </div>
        </div>

      </div>
      <hr />
      <div className='row'>
        <div className='col-md-12'>
          <h3>Investigadores responsables</h3>
          <p>Dr. Hern&aacute;n Galperin
            (<a href='https://annenberg.usc.edu/faculty/hernan-galperin'>USC, Anneberg</a>, USA)
          </p>
          <p>Dr. Ing. Jos&eacute; Ignacio Alvarez-Hamelin
            (<a href='http://www.conicet.gov.ar/new_scp/detalle.php?id=24474&datos_academicos=yes' >CONICET</a>,
            <a href='http://www.uba.ar/'> Facultad de Ingeniería, UBA</a>, Argentina)</p>
        </div>
      </div>
      <hr />
      <div className='row'>
        <div className='col-md-12'>
          <h3>Colaboradores</h3>
          <p>Axel Brian Erlich (<a href='http://www.uba.ar/' target='_blank'>Facultad de Ingeniería, UBA</a>, Argentina)</p>
          <p>Matias Ezequiel Iglesias (<a href='http://www.uba.ar/' target='_blank'>Facultad de Ingeniería, UBA</a>, Argentina)</p>
          <p>Axel Lijdens (<a href='http://www.uba.ar/' target='_blank'>Facultad de Ingeniería, UBA</a>, Argentina)</p>
          <p>Natalia Giselle Bartolom&eacute; (<a href='http://www.uba.ar/' target='_blank'>Facultad de Ingeniería, UBA</a>, Argentina)</p>
          <p>Agust&iacute;n Eduardo Caram&eacute;s (<a href='http://www.uba.ar/' target='_blank'>Facultad de Ingenier&iacute;a, UBA</a>, Argentina)</p>
          <p>Mart&iacute;n Cura (<a href='http://www.uba.ar/' target='_blank'>Facultad de Ingeniería, UBA</a>, Argentina)</p>
          <p>Octavio Iogha (<a href='http://www.uba.ar/' target='_blank'>Facultad de Ingeniería, UBA</a>, Argentina)</p>
          <p>Luis Ali (<a href='http://www.uba.ar/' target='_blank'>Facultad de Ingeniería, UBA</a>, Argentina)</p>
          <p>Eduardo Neira (<a href='http://www.uba.ar/' target='_blank'>Facultad de Ingeniería, UBA</a>, Argentina)</p>
          <p>Gast&oacute;n Snaider (<a href='http://www.uba.ar/' target='_blank'>Facultad de Ingeniería, UBA</a>, Argentina)</p>
          <p>Federicio Ezequiel Garc&iacute;a (<a href='http://www.uba.ar/' target='_blank'>Facultad de Ingeniería, UBA</a>, Argentina)</p>
          <p>Cristian Pereyra (<a href='http://www.itba.edu.ar/' target='_blank'>ITBA</a>, Argentina)</p>
          <p>Jose Ignacio Galindo (<a href='http://www.itba.edu.ar/' target='_blank'>ITBA</a>, Argentina)</p>
          <p>Alan Karpovsky (<a href='http://www.itba.edu.ar/' target='_blank'>ITBA</a>, Argentina)</p>
          <p>Nicolas Loreti (<a href='http://www.itba.edu.ar/' target='_blank'>ITBA</a>, Argentina)</p>
          <p>Paula Verghelet (<a href='http://www.uba.ar/' target='_blank'>Facultad de Ingeniería, UBA</a>, Argentina)</p>
          <p>Ing. Esteban Poggio (<a href='http://www.uba.ar/' target='_blank'>Facultad de Ingeniería, UBA</a>, Argentina)</p>
          <p>Estudiantes de Introduccion a los sistemas distribuidos, 2do cuatrimestre 2012.</p>
        </div>
      </div>
    </section>
  </div>
);

Colaborator.propTypes = {
  link: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.string,
};

export default AboutView;
