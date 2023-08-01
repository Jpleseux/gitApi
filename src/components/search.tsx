import {BsSearch} from "react-icons/bs"

import styles from "./Search.module.css"

import { useState, KeyboardEvent } from "react"

type SearchProps ={
    loadUser: (userName: String) => Promise<void>
}


function Search({loadUser}:SearchProps){

    const [userName, setUserName]= useState("");

    function handleKeyDown(e:KeyboardEvent){
        if(e.key ==="Enter"){
            loadUser(userName)
        }
    }

    return(
        <div className={styles.search}>
            <h2>Busque por usuarios</h2>
            <p>Conheça os melhores repositórios </p>

            <div className={styles.searchContainer} >
                <input type="text" placeholder="Digite o usuario " onChange={(e)=> setUserName(e.target.value)}
                onKeyDown={handleKeyDown}/>
                <button onClick={()=> loadUser(userName)}><BsSearch /></button>
            </div>
        </div>
    )
}

export default Search