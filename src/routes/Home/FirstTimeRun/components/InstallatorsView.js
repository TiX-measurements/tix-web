import React, { Component } from 'react';
import AndroidLogo from './images/android.png';

class InstallatorsView extends Component {
  render() {
    return (
      <div>
        <div className='span12' style={{ marginRight: '35px' }}>
          <div className='row'>
            <ul className='thumbnails'>
              <li className='col-md-4'>
                <p>Android</p>
                <a href='https://github.com/TiX-measurements/app' className='thumbnail'>
                  <img
                    width='150'
                    alt='Android'
                    src={AndroidLogo}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

}

export default InstallatorsView;
