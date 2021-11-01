import { FC } from "react"
import styles from '../../../styles/Box.module.css'

type props = {
    description?: string;
}
const Box: FC<props> = (props): JSX.Element => {

    return (
        <div className={[styles.buttonbox, styles.container].join(" ")} onClick={() => window.location.reload()}>
            <span className={styles.textColor} >{props.description}</span>
        </div>
    )
}

export default Box