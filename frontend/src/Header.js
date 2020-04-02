import React from 'react';


/* function Header() {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
}
export default Header; */

/* export default function Header( props ) {
    return (
        <header>
            <h1>{props.title}</h1>
        </header>
    );
} */

/* export default function Header( props ) {
    return (
        <header>
            <h1>{props.children}</h1>
        </header>
    );
} */

export default function Header({ children }) {//ao invés de pegar todas as props (propriedades) do Header, recebe só as que vc quiser, nesse caso só a children
    return (
        <header>
            <h1>{children}</h1>
        </header>
    );
}

