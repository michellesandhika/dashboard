import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { pink } from '@mui/material/colors';

const TitleHeader = () => {
<Box>
   <Typography variant="h4" noWrap component="div"> HSBC </Typography>
   <Typography variant="h6" noWrap component="div"> HSBC Holdings plc </Typography>
   <Typography variant="h6" noWrap component="div"> NYSE - Nasdaq </Typography>
   
   <Grid item xs>
      <Typography>PriceNow</Typography>
      <Grid container justifyContent="center" alignItems="flex-end">
         <Typography variant="h3">1,230</Typography>
         <ArrowDownwardIcon sx={{ color: pink[500] }}/>
         <Typography color={{ color: pink[500] }}>1.01%</Typography>
      </Grid>
   </Grid>
</Box>
}
export default TitleHeader

