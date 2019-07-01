
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();
        this.getCustomers();
}
getCustomers(){
    axios.get(`${process.env.REACT_APP_CUSTOMERS_SERVICE_URL}/customers`)
    .then((res) => { console.log(res); })
    .catch((err) => { console.log(err); });
}
render () {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-one-third">
                        <br/>
                        <h1 className="title is-1 is-1">Todos los customers</h1>
                        <hr/><br/>
                    </div>
                </div>
            </div>
        </section>
    )
}
};

ReactDOM.render(<App />, document.getElementById('root'));