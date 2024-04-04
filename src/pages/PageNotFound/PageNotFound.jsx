import Styles from './PageNotFound.module.css';
import {  NavLink } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <section className={Styles.page_404}>
      <div className={Styles.container}>
        <div className={Styles.row}>
          <div className={`${Styles['col-sm-12']} ${Styles['text-center']}`}>
            <div className={`${Styles['col-sm-10']} ${Styles['col-sm-offset-1']} ${Styles['text-center']}`}>
              <div className={Styles.four_zero_four_bg}>
                <h1 className={Styles['text-center']}>404</h1>
              </div>

              <div className={Styles.contant_box_404}>
                <h3 className={Styles.h2}>
                  Look like you are lost
                </h3>

                <p>The page you are looking for is not available!</p>

                <NavLink to="/" className={Styles.link_404}>Go to Home</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
