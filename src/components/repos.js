import React, { useEffect, useState } from "react";
// import repos from "../data/repos"
import Repo from "../components/repo"




export default () =>{

    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);
    
    useEffect(() =>{

        const data= sessionStorage.getItem("repos");
        let myRepos;
        if(data){
            myRepos = JSON.parse(data);

            setReposCount(myRepos.length);
            
            myRepos = myRepos.slice(0,12);
            return setRepos(myRepos);
        }



        async function fetchRepos() {
            const response = await fetch("https://api.github.com/users/kevingo710/repos");
            myRepos = await response.json();
            setReposCount(myRepos.length);


            sessionStorage.setItem("repos", JSON.stringify(myRepos));
            setRepos(myRepos);

        }

        fetchRepos();

    }, []);

    return (
    <div className="max-w-4xl mx-auto mt-12">
        <header className="text-center"> 
            <h2 className="text-3xl font-bold">Mis proyectos en Github</h2>
            <p> Colaboracion y contribucion de codigo abierto</p>
        </header>

        <ul className="repos-list">
            {
                repos.map((repo)=>{
                return <Repo repo={repo} key={repo.id} />
                })
            }
        </ul>

        <div className="mt-8 text-center">
            <a href="https://github.com/kevingo710" className="btn" target="_blank" rel="noopener noreferrer">
                Ver mas en GitHub ({reposCount})
            </a>

        </div>
    </div>
    )


};