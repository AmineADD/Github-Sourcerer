
import { FC } from "react";
import { props } from '../configs/Types'
import ContainerBox from "./Contents/ContainerBox";
import styles from '../../styles/Main.module.css'
import { DATA } from "../Data/Data"


const Header: FC<props> = ({ provider }): JSX.Element => {
    const getNumbersOfCommit = () => {
        let numbersOfCommit = 0;
        provider?.repositories?.edges.forEach(e => {
            e.node.refs.edges.forEach(rep => {
                if (rep.node.name === DATA?.REPO || rep.node.name === DATA?.MAIN) {

                    numbersOfCommit += rep.node.target.history.totalCount
                }
            })
        })
        return {

            title: DATA.BOXES.COMMITS,
            value: numbersOfCommit

        }
    }

    const getNumbersOfRepos = () => {
        return {

            title: DATA.BOXES.REPOS,
            value: provider?.repositories?.totalCount ? provider?.repositories?.totalCount - 1 : provider?.repositories?.totalCount

        }
    }

    const getLinesOfCode = () => {
        let linesLength = 0;
        provider?.repositories?.edges.forEach(l => linesLength += l.node.languages.totalSize)
        return {

            title: DATA.BOXES.LINES,
            value: linesLength

        }
    }

    const getLinesOfFollowers = () => {
        return {

            title: DATA.BOXES.FOLLOWERS,
            value: provider?.followers?.totalCount

        }
    }

    const getLinesOfFollowing = () => {
        return {

            title: DATA.BOXES.Following,
            value: provider?.following?.totalCount

        }
    }

    const arrayOfBoxes = [

        getNumbersOfRepos()
        , getNumbersOfCommit()
        , getLinesOfCode()
        , getLinesOfFollowers()
        , getLinesOfFollowing()
    ]
    return (
        <div className={styles.header}>
            <div className={styles.description}>
                <span className={styles.titleFont}>📙{provider?.login}</span>
                <span className={styles.titleFont}>📌{provider?.location}</span>
            </div>
            <div className={styles.containerImageBox}>
                <span className={styles.containerImageTitle}>
                    <span className={styles.titleFont}>{provider?.name}</span>
                    <img className={styles.image} src={provider?.avatarUrl} alt={DATA.ALT} />
                </span>
                <ContainerBox arrayOfBoxes={arrayOfBoxes} />
            </div>
        </div>
    )
}

export default Header