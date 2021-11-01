
import { FC } from "react";
import { props } from '../configs/Types'
import styles from '../../styles/Main.module.css'
import Header from "./Header";
import Overview from "./Charts/Overview";
import Languages from "./Charts/Languages";

const Main: FC<props> = ({ provider }): JSX.Element => {
    return (
        <div className={styles.main}>
            <Header provider={provider} />
            <Languages provider={provider} />
            <Overview provider={provider} />
        </div>
    )
}

export default Main