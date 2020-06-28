import React from 'react';

const Dog = (props) => {
return (
    <section>
        <div onClick={props.click}>{props.name} the dog. The dog is {props.age} years old.
            <span>{props.children}</span>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    </section>
    )
}

export default Dog;
