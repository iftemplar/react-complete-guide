import React from 'react';
import './Dog.css';

const Dog = (props) => {
return (
    <section className='Dog'>
        <div onClick={props.click}>{props.name} the dog. The dog is {props.age} years old.
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    </section>
    )
}

export default Dog;
