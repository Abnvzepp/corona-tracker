import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { countriesData } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ ChangeCountries }) => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            setCountries(await countriesData());
        }
        fetchCountries();
    },[setCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => ChangeCountries(e.target.value)}>
                <option value="">Global</option>
                {countries.map((country,i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
