import React from 'react';

// const Greet = (props) => {
//     console.log(props)
//     return <h1>Hello {props.name}</h1>
// }

// Destructuring

const Greet = (props) => {
    const {name, heroName} = props;
    return <h1>Hello {name} a.k.a {heroName}</h1>
}
export default Greet;