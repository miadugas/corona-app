import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

import image from './images/image.png';

//class based because its easier 
class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
}

handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
}


render() {
    const { data, country } = this.state;


    
    





    return (
    <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <hr/>
        <br/>
        <p className={styles.copyright} >&copy; 2020 Mia Dugas Designs. Built in React.js Some Rights Reserved.</p>
    </div>
    
    );
}
}

export default App;