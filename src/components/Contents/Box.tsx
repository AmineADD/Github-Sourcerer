import { FC } from "react"
import styles from '../../../styles/Box.module.css'

type props = {
    description?: string;
    value?: number
}
const Box: FC<props> = (props): JSX.Element => {
    return (
        <div className={styles.box}>
            <span className={styles.textColor} >{props.description}</span>
            <span className={styles.textColor} >{props.value?.toLocaleString(
                undefined,
                { minimumFractionDigits: 0 }
            )}</span>
        </div>
    )
}

export default Box