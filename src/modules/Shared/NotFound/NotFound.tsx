import notFoundImg from '../../../assets/NotFound/404-not-found.png';
import styles from './notFound.module.css';

export default function NotFound() {
    return (
        <div className={styles.notFound__handler}>
            <img src={notFoundImg} alt="not found page" />
        </div>
    );
};
