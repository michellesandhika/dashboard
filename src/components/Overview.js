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


import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function createData(name, calories, fat) {
   return { name, calories, fat };
 }
 
 const rows = [
   createData('0992.HK', 'Lenovo Group Limited	'),
   createData('9633.HK', 'Nongfu Spring Co., Ltd.'),
   createData('0267.HK', 'CITIC Limited'),
   createData('0669.HK', 'Techtronic Industries Company Limited	'),
   createData('1398.HK', 'Industrial and Commercial Bank of China Limited'),
 ];

 const rows2 = [
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

const data = [{date: '06/07/2022', open: 400, close: 2500, amt: 2400}, {date: '07/07/2022', open: 100, close: 2400, amt: 3000}, 
               {date: '08/07/2022', open: 600, close: 1200, amt: 2400}, {date: '09/07/2022', open: 500, close: 2400, amt: 2400}];

function Home(){
   return(
   <Box>
      <Box sx={{ flexGrow: 1 }} padding='2%'>
         <Grid container spacing={5}>
         <Grid item xs={3}>
            <Typography variant="h4" noWrap component="div"> Hang Seng Index </Typography>
            <Typography variant="h6" noWrap component="div"> INDEXHANGSENG: HSI</Typography>
            <Typography variant="h8" noWrap component="div"> HKSE - HKSE </Typography>
        </Grid>
         <Grid item xs={3}>
            <Item>
            <Grid item pl={2}>
               <Grid container justifyContent="left" alignItems="flex-end">
                  <Typography variant="h4">1,230</Typography>
                  <ArrowDownwardIcon sx={{ color: pink[500] }}/>
                  <Typography color={{ color: pink[500] }}>1.01%</Typography>
               </Grid>
               <Typography align="left">As of 10:49pm HKT</Typography>
            </Grid>
            </Item>
         </Grid>
         <Grid item xs={6}>
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
            <LineChart width={700} height={350} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
               <Line type="monotone" dataKey="open" stroke="#8884d8" />
               <Line type="monotone" dataKey="close" stroke="#82ca9d" />
               <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
               <XAxis dataKey="date" />
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
               <TableCell align="center" colSpan={2}>
                  Top 5 Stocks
               </TableCell>
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
                  {rows2.map((row) => (
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
         </Grid>

      </Box>
   </Box>
      
   );
}

export default Home;