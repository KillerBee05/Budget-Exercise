import React, { useState, useEffect }from 'react';
import { Budget } from './Budget';
import { Estimate } from './Estimate';
import Checkbox from '@material-ui/core/Checkbox';
import "../styles/checklist.css";

interface itemProps {
  type: string;
  name: string;
  lowPrice: any;
  highPrice: any;
}

export const Checklist: React.FC<itemProps> = (props) => {

  // Set API data state
  const [initialData, setInitialData] = React.useState<itemProps[]>([]);

  // Set selected items state
  const [selectedItems, setSelectedItems] = React.useState<any | []>();

  // Set budget from state
  const [budget, setBudget] = React.useState<number>();

  // Set lowTotal from state for status calculations
  const [lowTotal, setLowTotal] = React.useState<[] | 0>();

  // Set highTotal from state for status calculations
  const [highTotal, setHighTotal] = React.useState<[] | 0>();

  // Set statusMsg from state for status message
  const [statusMsg, setStatusMsg] = React.useState<string | 'Under Budget'>();

  // Get data from API to populate checkboxes
  useEffect(()=> {
    fetch("/api/getItems").then(res => {
      return res.json()
    }).then(response => {
        let data:itemProps[] = [];
        Object.keys(response.seeds).map(function(key){
          // format prices to decimals before initialData[state] is being set. I'm sure there's a better way to do this.
          let formatHighPrice = Math.round(response.seeds[key].highPrice/ 100).toFixed(2);
          let formatlowPrice = Math.round(response.seeds[key].lowPrice/ 100).toFixed(2);
            data.push({
              'type': response.seeds[key].type,
              'name': response.seeds[key].name,
              'highPrice': formatHighPrice,
              'lowPrice': formatlowPrice,
          })
            return data;
        });
      setInitialData(data)
    })
  }, []);

  // Setting user's checked data and send calculation data
  const setCheckboxItemData = (checkbox) => {
    setSelectedItems(checkbox);

    let values = checkbox.target.value.split(',');
    if(checkbox.target.checked){
      // Not sure how to get key associative. Hard coded array values
      //TODO sum together each price cost for each checkbox selected somehow \_(`-`)_/
      let highPrice = values[2];
      let lowPrice = values[1];
      setHighTotal(highPrice);
      setLowTotal(lowPrice);
    }
    else{
      //removing cost from budget
      let highPrice = values[2];
      let lowPrice = values[1];
      setHighTotal(highPrice);
      setLowTotal(lowPrice);
    }
    // passing calcuation data
    onTotalChange({budget, lowTotal, highTotal});
  }

  // Get checkbox value for calucation
  const handleChange = (newValue) => {
    setBudget(newValue.target.value);
    onTotalChange({budget, lowTotal, highTotal});
  }

  // Changing status message based on budget
  const onTotalChange = (total) => {
    if(total.budget > total.highTotal){
      setStatusMsg('Under Budget');
    }
    if(total.budget < total.highTotal){
      setStatusMsg('Over Budget');
    }
    if(total.budget >= total.lowTotal && total.budget <= total.highTotal){
      setStatusMsg('Within Budget');
    }
  }

  return(
    <div>
      <Budget budget={budget} handleChange={handleChange}/>
      {
        initialData.map(function(item, index){
         return (
           <li className="" key={index}>
            <Checkbox
            value={[item.name, item.lowPrice, item.highPrice]}
            onClick={ setCheckboxItemData }
            />
            {item.name}: ${item.lowPrice} - ${item.highPrice}
           </li>)
         })
       }
      <Estimate statusMsg={ statusMsg }/>
    </div>
  )
}
