import Search from "../components/search"
import User from "../components/User";
import { useState } from "react"
import { userProps } from "../types/user"
import Error from "../components/Error";


function Home(){
    const [error, setError] = useState(false)
    const [user, setUser] =useState<userProps |null>(null);

    async function loadUser(userName: String){
        setError(false)
        setUser(null)
        
        const res = await fetch(`https://api.github.com/users/${userName}`)
        console.log(res)
        const data = await res.json()

        if(res.status ===404){
            setError(true)
            return
        }

        const {avatar_url, login, location, followers, following} = data;

        const userData:userProps={
            avatar_url,
            login,
            location,
            followers,
            following,
        };
        setUser(userData)
    }
    return(
        <div>
            <Search loadUser={loadUser}/>
            {user && <User {...user} />}

            {error && <Error />}
            
        </div>
    )
}
export default Home