import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


const StatDescriptionCard = ({title,value}) => {
   return(
      <Grid item xs>
         <Typography>{title}</Typography>
         <Typography variant="h5">{value}</Typography>
      </Grid>
   );
}

export default StatDescriptionCard;