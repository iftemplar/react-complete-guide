import React from 'react';

const Dog = (props) => {
return (
    <section>
        <div>{props.name} the dog. The dog is {props.age} years old. <span>{props.children}</span></div>
    </section>
    )
}

export default Dog;