import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Input,Select, MenuItem} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default function SimpleCard() {
    return (
    <Card >
      <CardContent>
      <h1>FIND MOVIES BY:</h1>
      <FormControl>
  <InputLabel htmlFor="my-input">Movie Name</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
        <Select        
          inputProps={{ 'aria-label': 'Without label' }}>
          <MenuItem value="">
            <em>Genere</em>
          </MenuItem>
        </Select>
        <Select        
          inputProps={{ 'aria-label': 'Without label' }}>
          <MenuItem value="">
            <em>Artists</em>
          </MenuItem>
        </Select>
        <TextField
        id="date"
        label="Release Date Start"
        type="date"
        defaultValue="dd-mm-yy"
        InputLabelProps={{
          shrink: true,
        }}
      />
           <TextField
        id="date"
        label="Release Date End"
        type="date"
        defaultValue="dd-mm-yy"
        InputLabelProps={{
          shrink: true,
        }}
      />
        
   
  <Input id="my-input" aria-describedby="my-helper-text" />
</FormControl>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary">APPLY</Button>
      </CardActions>
    </Card>
  );
}
