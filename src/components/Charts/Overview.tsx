import { FC } from "react"
import { props } from '../../configs/Types'
import styles from '../../../styles/Charts.module.css'
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    LineMarkSeries
} from 'react-vis';
import { DATA } from "../../Data/Data"


const Overview: FC<props> = (props): JSX.Element => {



    return (
        <div className={styles.Charts}>
            <span className={styles.titleFont}>{DATA.OVW}</span>
            <span>
                Comming soon ...
            </span>
            <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineMarkSeries
                    className="area-elevated-line-series"
                    data={[{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]}
                />
            </XYPlot>
        </div>
    )
}

export default Overview