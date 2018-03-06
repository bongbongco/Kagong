import React from 'react';
import PropTypes from "prop-types";
import styles from './styles.scss';


const Footer = (props, context) => (
    <footer className={styles.footer}>
        <div className={styles.column}>
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>{context.t("카공 정보")}</li>
                    <li className={styles.listItem}>{context.t("지원")}</li>
                    <li className={styles.listItem}>{context.t("블로그")}</li>
                    <li className={styles.listItem}>{context.t("홍보")}</li>
                    <li className={styles.listItem}>{context.t("개인정보처리방침")}</li>
                    <li className={styles.listItem}>{context.t("약관")}</li>
                    <li className={styles.listItem}>{context.t("언어")}</li>
                </ul>
            </nav>
        </div>
        <div className={styles.column}>
            <span className={styles.copyright}>© 2018 Kagong</span>
        </div>
    </footer>
);

Footer.contextTypes = {
    t: PropTypes.func.isRequired
};
export default Footer; 