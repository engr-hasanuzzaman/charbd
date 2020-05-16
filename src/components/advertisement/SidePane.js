import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SidePane() {
  const classes = useStyles();
  const [category, setCategory] = React.useState(true);
  const categories = ['Dress', 'Shoe', 'Electronic'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("selected name is  " + name + ' and value is ' + value);
    setCategory(value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="filter-by-category">Category</InputLabel>
      <Select
        labelId="filter-by-category"
        id="category"
        value={category}
        onChange={handleChange}
      >
        { categories.map((c, i) => {
          return <MenuItem key={i} value={c}>{c}</MenuItem>;
        })}
      </Select>
    </FormControl>  
  );
}
