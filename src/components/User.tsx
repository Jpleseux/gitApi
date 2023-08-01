import { userProps } from "../types/user"

import styles from "./User.module.css"

import {MdLocationPin} from "react-icons/md"

import { Link } from "react-router-dom"

function User({avatar_url,followers, following, login, location}:userProps){

    return(
        <div className={styles.user}>
            <img src={avatar_url} alt={login}/>

            <h2>{login}</h2>
            {location && (
                <p className={styles.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
                <div className={styles.stats}>
                    <div>
                        <p>Seguidores</p>
                        <p className={styles.number}>{followers}</p>
                    </div>
                    <div>
                        <p>Seguindo:</p>
                        <p className={styles.number}>{following}</p>
                    </div>
                </div>
            <Link to={`/repos/${login}`}>Ver Melhores projetos</Link>
        </div>
    )
}

export default User