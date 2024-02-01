import { useState } from 'react';
import React from 'react'
import { MultiSelect } from 'primereact/multiselect';
import '../style/FilterSection.css'
const FilterSection = () => {
    const [selectedCities, setSelectedCities] = useState([]);

  // Sample options for cities
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Los Angeles', code: 'LA' },
    { name: 'Chicago', code: 'CHI' },
    // Add more cities as needed
  ];
  return (
    <div className='FilterSection'>
      <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name" 
        placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
    </div>
  )
}

export default FilterSection
// rating lang categ

