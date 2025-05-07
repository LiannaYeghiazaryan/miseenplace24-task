import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.footerContent}>
                <div className={styles.logo}>
                    <img
                        src="https://miseenplace24.com/wp-content/uploads/2022/08/Logo.png"
                        alt="Mise en place Logo"
                    />
                </div>

                <nav className={styles.info} aria-label="Footer navigation">
                    <ul className={styles.menu}>
                        <li><a href="https://miseenplace24.com/impressum/">Impressum</a></li>
                        <li><a href="#">Délégué</a></li>
                        <li><a href="#">Kontakt</a></li>
                    </ul>

                    <address className={styles.address}>
                        <div>Mise en place Gastro Solutions GmbH & Co. KG</div>
                        <div>Philosophenweg 21</div>
                        <div>47061 Duisburg</div>
                        <div>T.: <a href="tel:+492032962519">+49 203 2962519</a></div>
                        <div>E: <a href="mailto:info@miseenplace24.com">info@miseenplace24.com</a></div>
                    </address>
                </nav>

                <div className={styles.social} aria-label="Social media links">
                    <a href="#"><img src="https://miseenplace24.com/wp-content/themes/Divi-child/assets/faceook.png" alt="Facebook" /></a>
                    <a href="#"><img src="https://miseenplace24.com/wp-content/themes/Divi-child/assets/linkedin.png" alt="LinkedIn" /></a>
                    <a href="#"><img src="https://miseenplace24.com/wp-content/themes/Divi-child/assets/youtube.png" alt="YouTube" /></a>
                    <a href="#"><img src="https://miseenplace24.com/wp-content/themes/Divi-child/assets/insta.png" alt="Instagram" /></a>
                    <a href="#"><img src="https://miseenplace24.com/wp-content/themes/Divi-child/assets/xing.png" alt="Xing" /></a>
                </div>
            </div>

            <div className={styles.copyright}>
                <small>© Mise en place® Gastro Solutions GmbH & Co. KG</small>
            </div>
        </footer>
    );
};

export default Footer;
