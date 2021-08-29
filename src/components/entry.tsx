import React, {ChangeEventHandler, MouseEventHandler} from 'react'


interface IFormEventHandlers {
    handleNameChange: ChangeEventHandler
    handleTimeChange: ChangeEventHandler
    handleImpChange: ChangeEventHandler
    handleUrgChange: ChangeEventHandler
    handleSubmit: MouseEventHandler<HTMLButtonElement>
    //urgValue: string

}
export default function Entry(props: IFormEventHandlers) {
    
    return (
        <div>
            <form id='Entry-form'>
            <div><input type="text" placeholder='Name'   onChange={props.handleNameChange}/></div>
            <div><input type="text" placeholder='When'   onChange={props.handleTimeChange}/></div>
            <div><input type="text" placeholder='Is this important?' onChange={props.handleImpChange}/></div>
            <div><input type="text" placeholder='Is this urgent?'  onChange={props.handleUrgChange}/></div>
                
            <button   id="Submit-button"  onClick={props.handleSubmit}>add </button>
            </form>
        </div>
    )
}

