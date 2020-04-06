import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

//class based because its easier 
class App extends React.Component {

async componentDidMount() {
    const data = await fetchData();

    console.log(data);
}




render() {
return (
    <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
    </div>
)


}
}

export default App;