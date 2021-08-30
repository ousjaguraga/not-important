import React, {ChangeEventHandler, MouseEventHandler} from 'react'


interface IFormEventHandlers {
    handleValueChange: ChangeEventHandler
    handleSubmit: MouseEventHandler<HTMLButtonElement>
    urgencyValue: string | number | readonly string[] | undefined
    importantValue: string | number | readonly string[] | undefined

}
export default function Entry(props: IFormEventHandlers) {
    
    return (
        <div id='Entry-form'>
            <div><span>Name</span><input type="text" placeholder='Name'   name='name' onChange={props.handleValueChange}/></div>
            <div><span>Time</span><input type="date" placeholder='When'  name='time' onChange={props.handleValueChange}/></div>
            <div><span>Importance</span><input type="checkbox"  value={props.importantValue} placeholder='Is this important?' name='important' onChange={props.handleValueChange}/></div>
            <div><span>Urgency</span><input type="checkbox" value={props.urgencyValue} placeholder='Is this urgent?'  name='urgent' onChange={props.handleValueChange}/></div>
            
            <button id="Submit-button"  onClick={props.handleSubmit}>add</button>
        </div>
        
    )
}

