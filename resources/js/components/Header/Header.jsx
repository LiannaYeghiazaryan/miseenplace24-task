import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
    <header className={styles.container}>
        <div className={styles.logo}>
            <a href="/" aria-label="Home" />
        </div>
        <nav className={styles.navMenu} aria-label="Main navigation">
            <ul>
                <li><a href="#prozesskueche" className={styles.navItem}>Prozessküche</a></li>
                <li><a href="#kundenstimmen" className={styles.navItem}>Kundenstimmen</a></li>
                <li><a href="#live-erleben" className={styles.navItem}>Live erleben</a></li>
                <li><a href="#fragen" className={styles.navItem}>Fragen</a></li>
                <li><a href="#jobs" className={styles.navItem}>Better Jobs</a></li>
                <li><a href="#shop" className={styles.navItem}>Shop</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
