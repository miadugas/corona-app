import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

//class based because its easier 
class App extends React.Component {
    state = {
        data: {},
    }




async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
}




render() {
    const { data } = this.state;
return (
    <div className={styles.container}>
        <Cards data= { data } />
        <CountryPicker />
        <Chart />
    </div>
)


}
}

export default App;