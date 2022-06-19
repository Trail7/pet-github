import React, {useContext} from "react";
import {Search} from "../components/Search";
import {Card} from "../components/Card";
import {GithubContext} from "../context/github/githubContext";

export const Home = () => {

    // const cards = new Array(15).fill("").map((_, i) => i)

    const {loading, users} = useContext(GithubContext)


    return (
        <>
            <Search/>
            <div className="row pt-4">
                {
                    loading
                        ? <p className='text-center'>Loading...</p>
                        : users.map(user => (
                            <div className="col-sm-4 mb-4" key={user.id}>
                                <Card user={user}/>
                            </div>
                        ))
                }
            </div>
        </>
    )
}