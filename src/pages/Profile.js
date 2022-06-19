import React, {useContext, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import {GithubContext} from "../context/github/githubContext";
import {Repos} from "../components/Repos";

export const Profile = () => {
    const {name} = useParams() //returns id from the URL
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)

    useEffect(() => {
        getUser(name)
        getRepos(name)
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <p className='text-center'>Loading...</p>
    }

    const {
        git_name,
        company,
        avatar_url,
        location,
        blog,
        bio,
        login,
        html_url,
        followers,
        public_repos,
        public_gists,
        following
    } = user


    return (
        <>
            <Link to='/' className='btn btn-link'>Home page</Link>

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img
                                src={avatar_url}
                                alt={git_name}
                                style={{width: '150px'}}
                            />
                            <h1> {git_name}</h1>
                            {location && <p>Location: ${location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </>
                            }
                            <a href={html_url} target='_blank' rel="noreferrer" className='btn btn-dark'>Open
                                profile</a>
                            <ul>
                                {login && <li>
                                    <strong>Login: </strong> {login}
                                </li>}
                                {company && <li>
                                    <strong>Company: </strong> {company}
                                </li>}
                                {blog && <li>
                                    <strong>Website: </strong> {blog}
                                </li>}
                            </ul>
                            <span className="badge text-bg-primary">Followers: {followers}</span>
                            <span className="badge text-bg-success">Following: {following}</span>
                            <span className="badge text-bg-info">Repos: {public_repos}</span>
                            <span className="badge text-bg-dark">Gists: {public_gists}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos}/>
        </>
    )
}