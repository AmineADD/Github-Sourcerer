import { FC } from "react"
import styles from '../../../styles/Box.module.css'
import { DATA } from "../../Data/Data"
type props = {
    title?: string;
    color?: string;
    commits?: number;
    lineCode?: number;
}
const LanguageBox: FC<props> = ({ title, color, commits, lineCode }): JSX.Element => {
    return (
        <div className={styles.LanguageBox}>

            <div className={styles.LanguageBoxHeader}>
                <span> {title} </span>
                <span className={styles.LanguageBoxSpan} style={{ backgroundColor: color }}> </span>
            </div>


            <div className={styles.LanguageBoxBody}>
                <span> {DATA.BOXES.COMMITS} : </span>
                <span> {commits?.toLocaleString(
                    undefined,
                    { minimumFractionDigits: 0 }
                )}</span>
            </div>



            <div className={styles.LanguageBoxFooter}>
                <span>  {DATA.BOXES.LOC} </span>
                <span> {lineCode?.toLocaleString(
                    undefined,
                    { minimumFractionDigits: 0 }
                )} </span>
            </div>


        </div>
    )
}

export default LanguageBox