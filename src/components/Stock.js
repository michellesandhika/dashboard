import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import DataTable from './DataTable';
import StatDescriptionCard from './StatDescriptionCard';
import { Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { pink } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import {data} from './Data'

import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function createData(name, calories, fat) {
   return { name, calories, fat };
 }
 
 const rows = [
   createData('Previous Close', 159),
   createData('Open', 237),
   createData('Bid', 262),
   createData('Ask', 305),
   createData('Volume', 356),
 ];

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
 }));

const data = [ {date: '05/07/2022', open: 159, close: 100, bid: 2400, ask: 100, volume: 1000}, 
{date: '06/07/2022', open: 200, close: 101, bid: 2410, ask: 100, volume: 1200},  
{date: '07/07/2022', open: 110, close: 110, bid: 2420, ask: 120, volume: 800}, 
{date: '08/07/2022', open: 210, close: 200, bid: 2440, ask: 140, volume: 1000}, 
{date: '09/07/2022', open: 230, close: 210, bid: 2450, ask: 150, volume: 1500}
]

function Home(){
   return(
   <Box>
      <Box sx={{ flexGrow: 1 }} padding='2%'>
         <Grid container spacing={5}>
         <Grid item xs={3}>
            <Typography variant="h4" noWrap component="div"> HSBC </Typography>
            <Typography variant="h6" noWrap component="div"> HSBC Holdings plc </Typography>
            <Typography variant="h8" noWrap component="div"> NYSE - Nasdaq </Typography>
        </Grid>
         <Grid item xs={3}>
            <Item>
            <Grid item pl={2}>
               <Grid container justifyContent="left" alignItems="flex-end">
                  <Typography variant="h3">1,230</Typography>
                  <ArrowDownwardIcon sx={{ color: pink[500] }}/>
                  <Typography color={{ color: pink[500] }}>1.01%</Typography>
               </Grid>
               <Typography align="left">As of 10:49pm HKT</Typography>
            </Grid>
            </Item>
         </Grid>
         <Grid item xs={12}>
            <Item>
            <Grid container>
               <StatDescriptionCard title="Previous Close" value="159"/>
               <Divider orientation="vertical" flexItem />
               <StatDescriptionCard title="Open" value="237"/>
               <Divider orientation="vertical" flexItem />
               <StatDescriptionCard title="Bid" value="262"/>
               <Divider orientation="vertical" flexItem />
               <StatDescriptionCard title="Ask" value="305"/>
               <Divider orientation="vertical" flexItem />
               <StatDescriptionCard title="Volume" value="356"/>
            </Grid>
            </Item>
         </Grid>
         <Grid item xs={8}>
            <Item>
            <LineChart width={700} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
               <Line type="monotone" dataKey="open" stroke="#8884d8" />
               <Line type="monotone" dataKey="close" stroke="#82ca9d" />
               <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
               <XAxis dataKey="name" />
               <YAxis />
               <Tooltip />
            </LineChart>
            </Item>
         </Grid>
         <Grid item xs={4}>
            <Grid item xs>
            <TableContainer component={Paper}>
               <Table sx={{ minWidth: 300 }} aria-label="simple table">
               <TableHead>
                  <TableRow>
                     <TableCell sx={{ fontWeight: 'bold' }}>Statistics</TableCell>
                     <TableCell sx={{ fontWeight: 'bold' }}>Amount</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows.map((row) => (
                     <TableRow
                     key={row.name}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                     <TableCell component="th" scope="row">
                        {row.name}
                     </TableCell>
                     <TableCell>{row.calories}</TableCell>
                     </TableRow>
                  ))}
               </TableBody>
               </Table>
            </TableContainer>
            </Grid>
         </Grid>
         <Grid item xs={8}>
               <DataTable/>
         </Grid>
         {/* <Grid item xs={4}>
            <Item>xs=8</Item>
         </Grid> */}
         </Grid>

      </Box>
   </Box>
      
   );
}

export default Home;