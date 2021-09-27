// import React from 'react';

// const RootComponent = (props) => {
//     return (
//         <div className="container">
//             <h1 className="text-primary">I am the Root Component</h1>
//         </div>
//     );
// }

// export default RootComponent;

// ------------------------------------------------------ With Props

// import React from 'react';
// import HomeComponent from '../home/HomeComponent';

// const RootComponent = (props) => {
//     return (
//         <div className="container">
//             <HomeComponent name={"Indiamart"} />
//         </div>
//     );
// }

// export default RootComponent;

// ------------------------------------------------------ Using Context
import React from 'react';
import HomeComponent from '../home/HomeComponent';
import { AppContextProvider } from '../../context/AppContext';

const RootComponent = (props) => {
    return (
        <div className="container">
            <AppContextProvider>
                <HomeComponent name={"Indiamart"} />
            </AppContextProvider>
        </div>
    );
}

export default RootComponent;