import React from 'react'

interface label {
    name: string
    when: string
    important: string
    urgent: string
    
}
export default function entry(props: label) {
    return (
        <div>
            <form id='Entry-form'>
            <div><input type="text" placeholder='Name' id="name" /></div>
            <div><input type="text" placeholder='When' id="name"  /></div>
            <div><input type="text" placeholder='Is this important' /></div>
            <div><input type="text" placeholder='Is this urgent'  /></div>
                
            <input id="Submit-button" type="submit" value="add"/>
            </form>
        </div>
    )
}

