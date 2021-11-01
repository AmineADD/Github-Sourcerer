import { FC } from "react"
import styles from '../../../styles/Box.module.css'
import Box from "./Box";
import ButtonBox from './ButtonBox'
type props = {
    arrayOfBoxes?: Array<any>
}
const ContainerBox: FC<props> = ({ arrayOfBoxes }): JSX.Element => {
    return (
        <div className={styles.container}>
            {
                arrayOfBoxes?.map((box, index) => (<Box key={index} description={box.title} value={box.value} />))
            }
            <ButtonBox description="Refresh" />
        </div>
    )
}

export default ContainerBox