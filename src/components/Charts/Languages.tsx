import { FC } from "react"
import { props, langArray, lang } from '../../configs/Types'
import styles from '../../../styles/Charts.module.css'
import { DATA } from "../../Data/Data"
import {
    RadialChart
} from 'react-vis';
import LanguageBox from "../Contents/LanguageBox";

const Languages: FC<props> = ({ provider }): JSX.Element => {


    const arrayOfLanguagesBoxes: langArray = [];


    const transformBeforePush = (value: lang) => {
        let find = false;
        arrayOfLanguagesBoxes.forEach((lang, index) => {
            if (lang.data.title === value.title) {
                find = true
                arrayOfLanguagesBoxes[index].data.commits += value.commits
                arrayOfLanguagesBoxes[index].data.lines += value.lines
                arrayOfLanguagesBoxes[index].exist += 1
            }
        });
        if (!find) {
            arrayOfLanguagesBoxes.push({
                data: value,
                exist: 1
            })
        }
    }
    provider?.repositories.edges.forEach(repo => {

        if (repo.node.primaryLanguage) {
            const data: lang = {
                title: repo.node.primaryLanguage.name,
                color: repo.node.primaryLanguage.color,
                lines: repo.node.languages.totalSize,
                commits: 0
            }
            if (repo.node.refs.edges) {
                repo.node.refs.edges.forEach(edg => {
                    if (edg.node.name === DATA?.REPO || edg.node.name === DATA?.MAIN) {
                        data.commits += edg.node.target.history.totalCount
                    }
                })
            }
            transformBeforePush(data)
        }



    })




    const dataCircle = arrayOfLanguagesBoxes.map((lng, i) => {
        return {
            color: lng.data.color,
            name: lng.data.title,
            angle: lng.exist
        }
    });

    return (
        <div className={styles.Charts}>
            <span className={styles.titleFont}>{DATA.LNG}</span>
            <div className={styles.insideLanguagesCharts}>
                <div className={styles.boxes}>
                    {
                        arrayOfLanguagesBoxes.map((lang, i) => <LanguageBox key={i} color={lang.data.color} commits={lang.data.commits} lineCode={lang.data.lines} title={lang.data.title} />)
                    }
                </div>
                <div className={styles.cercle}>
                    <RadialChart
                        colorType={'literal'}
                        colorDomain={[0, 100]}
                        colorRange={[0, 10]}
                        margin={{ top: 100 }}
                        getLabel={d => d.name}
                        data={dataCircle}
                        labelsAboveChildren
                        labelsRadiusMultiplier={1.1}
                        labelsStyle={{ fontSize: 16, fill: '#222' }}
                        showLabels
                        style={{ stroke: '#fff', strokeWidth: 2 }}
                        width={500}
                        height={400}
                    />
                </div>
            </div>
        </div>
    )
}

export default Languages