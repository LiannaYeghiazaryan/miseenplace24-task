import React from 'react';
import styles from './ServiceCenter.module.scss';

const ServiceCenter = () => {
    const serviceLinks = [
        {
            label: 'Fehler melden',
            img: 'https://miseenplace24.com/wp-content/plugins/qr-system/templates/img/1@2x.png',
        },
        {
            label: 'Pflegeprodukte / Ersatzteile',
            img: 'https://miseenplace24.com/wp-content/plugins/qr-system/templates/img/2@2x.png',
        },
        {
            label: 'Handbücher / Videos',
            img: 'https://miseenplace24.com/wp-content/plugins/qr-system/templates/img/3@2x.png',
        },
        {
            label: 'Techniker-Ebene / Service-Historie',
            img: 'https://miseenplace24.com/wp-content/plugins/qr-system/templates/img/4@2x.png',
        },
    ];

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                Mise en place® – Servicecenter
            </header>

            <section className={styles.mainContent} aria-label="Service Information">
                <article className={styles.deviceInfo}>
                    <strong>Gerätetyp</strong>
                    <strong>Seriennummer</strong>
                    <strong>Standort</strong>
                    <strong>Gewährleistung bis</strong>
                </article>

                <article className={styles.deviceInfo}>
                    <div>Mise en place® FrischeHeld Arbeitsstation</div>
                    <div>E6033602</div>
                    <div>Hotel Panorama, Rosenbergstr. 26, 54550 Daun, Deutschland</div>
                    <div>08.03.2025</div>
                </article>

                {serviceLinks.map((item, index) => (
                    <article key={index} className={`${styles.deviceInfo} ${styles.card}`}>
                        <figure>
                            <img
                                src={item.img}
                                alt={item.label}
                                className={styles.bugLogo}
                            />
                            <figcaption>{item.label}</figcaption>
                        </figure>
                    </article>
                ))}
            </section>
        </main>
    );
};

export default ServiceCenter;
