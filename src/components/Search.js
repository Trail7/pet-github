import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/AlertContext";
import {GithubContext} from "../context/github/githubContext";

export const Search = () => {

    const [value, setValue] = useState('')

    const alert = useContext(AlertContext)
    const github = useContext(GithubContext)


    const onSubmit = event => {
        if (event.key !== 'Enter') return

        github.clearUsers()

        if (value.trim()){
            alert.hide()
            github.search(value.trim())
        } else {
            alert.show('No search results')
        }

    }
    return (
        <div className='form-group'>
            <input
                type='text'
                value={value}
                className='form-control'
                placeholder="Enter user's nickname"
                onKeyPress={onSubmit}
                onChange={event => setValue(event.target.value)}
            />
        </div>
    )
}