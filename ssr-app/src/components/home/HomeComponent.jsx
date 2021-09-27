// import React from 'react';
// import DataTable from '../common/DataTable';
// import apiClient from '../../services/apiClient';

// class HomeComponent extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { data: [], message: "Loading Data, please wait..." };
//         this.handleCall = this.handleCall.bind(this);
//     }

//     render() {
//         return (
//             <div>
//                 <h1 className="text-primary"> Hello, {this.props.name} </h1>
//                 <hr />
//                 <button className="btn btn-primary" onClick={this.handleCall}>Call Users API</button>
//                 <h3 className="text-danger">{this.state.message}</h3>

//                 <DataTable items={this.state.data}>
//                     <h4 className="text-primary text-uppercase font-weight-bold">Data Table</h4>
//                 </DataTable>
//             </div>
//         );
//     }

//     handleCall(e) {
//         apiClient.getAllUsers().then((resultData) => {
//             this.setState({ data: [...resultData], message: "" });
//         }).catch((eMsg) => {
//             this.setState({ message: eMsg });
//         });
//     }

//     componentDidMount() {
//         apiClient.getAllProducts().then((resultData) => {
//             this.setState({ data: [...resultData], message: "" });
//         }).catch((eMsg) => {
//             this.setState({ message: eMsg });
//         });
//     }
// }

// export default HomeComponent;

// ------------------------------------------------------ Using Functional Component

// import React, { useEffect, useState } from 'react';
// import DataTable from '../common/DataTable';
// import apiClient from '../../services/apiClient';

// const HomeComponent = (props) => {
//     let [data, setData] = useState([]);
//     let [message, setMessage] = useState("Loading Data, please wait...");

//     const handleCall = (e) => {
//         apiClient.getAllUsers().then((resultData) => {
//             setData(resultData);
//             setMessage("");
//         }).catch((eMsg) => {
//             setMessage(eMsg);
//         });
//     }

//     useEffect(() => {
//         apiClient.getAllProducts().then((resultData) => {
//             setData(resultData);
//             setMessage("");
//         }).catch((eMsg) => {
//             setMessage(eMsg);
//         });
//     }, []);

//     return (
//         <div>
//             <h1 className="text-primary"> Hello, {props.name} </h1>
//             <hr />
//             <button className="btn btn-primary" onClick={handleCall}>Call Users API</button>
//             <h3 className="text-danger">{message}</h3>

//             <DataTable items={data}>
//                 <h4 className="text-primary text-uppercase font-weight-bold">Data Table</h4>
//             </DataTable>
//         </div>
//     );
// };

// export default HomeComponent;

// ------------------------------------------------------ Using Functional Component with Context API
import React, { useContext, useEffect, useState } from 'react';
import DataTable from '../common/DataTable';
import apiClient from '../../services/apiClient';
import { AppContext } from '../../context/AppContext';

const HomeComponent = (props) => {
    const [appData, setAppData] = useContext(AppContext);
    let [message, setMessage] = useState("Loading Data, please wait...");

    const handleCall = (e) => {
        apiClient.getAllUsers().then((resultData) => {
            setAppData(resultData);
            setMessage("");
        }).catch((eMsg) => {
            setMessage(eMsg);
        });
    }

    useEffect(() => {
        apiClient.getAllProducts().then((resultData) => {
            setAppData(resultData);
            setMessage("");
        }).catch((eMsg) => {
            setMessage(eMsg);
        });
    }, [setAppData]);

    return (
        <div>
            <h1 className="text-primary"> Hello, {props.name} </h1>
            <hr />
            <button className="btn btn-primary" onClick={handleCall}>Call Users API</button>
            <h3 className="text-danger">{message}</h3>

            <DataTable items={appData}>
                <h4 className="text-primary text-uppercase font-weight-bold">Data Table</h4>
            </DataTable>
        </div>
    );
};

HomeComponent.defaultProps = {
    name: "Anonymous"
};

export default HomeComponent;