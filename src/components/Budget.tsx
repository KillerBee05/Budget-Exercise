import React, { FC, useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import CurrencyTextField from '@unicef/material-ui-currency-textfield'
import "../styles/budget.css";

interface BudgetProps {
  budget?: number;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Budget: React.FC<BudgetProps> = ( { handleChange } ) => {

  // Set budget
  const [budget, setBudget] = React.useState<number>();

  // Reference the div so it can be used for checklist component
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div className="pad" ref={divRef}>
      <CurrencyTextField
        label="What's your budget?"
        value={budget}
        variant="standard"
        currencySymbol="$"
        outputFormat="number"
        decimalCharacter="."
        digitGroupSeparator=","
        onChange={ handleChange }
       />
    </div>
  );
};
