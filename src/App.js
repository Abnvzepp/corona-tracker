import React, { useState, useEffect } from 'react';

import { Cards, Chart, CountryPicker } from './components';

import styles from './App.module.css';
import { fetchData } from './api';

const App = () => {

  const [data, setData] = useState([]);
  const [countries, setCountries] = useState('');

  useEffect(() => {
    const fetchedData = async () => {
      setData(await fetchData());
    }
    fetchedData();
  }, [setData])

  const ChangeCountries = async(country) => {
    const data = await fetchData(country);
    setData(data);
    setCountries(country);
  }

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker ChangeCountries={ChangeCountries}/>
      <Chart data={data} countries={countries}/>
    </div>
  )
}

export default App



