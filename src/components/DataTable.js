import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Data from './Data'

function createData(name, calories, fat, carbs, protein, hello) {
  return { name, calories, fat, carbs, protein, hello };
}

const rows = [
  createData('05/07/2022', 159, 100, 2400, 100, 1000),
  createData('06/07/2022', 200, 101, 2410, 100, 1200),
  createData('07/07/2022', 110, 110, 2420, 120, 800),
  createData('08/07/2022', 210, 200, 2440, 140, 1000),
  createData('09/07/2022', 230, 210, 2450, 150, 1500),
];

const data = [ {date: '05/07/2022', open: 159, close: 100, bid: 2400, ask: 100, volume: 1000}, 
{date: '06/07/2022', open: 200, close: 101, bid: 2410, ask: 100, volume: 1200},  
{date: '07/07/2022', open: 110, close: 110, bid: 2420, ask: 120, volume: 800}, 
{date: '08/07/2022', open: 210, close: 200, bid: 2440, ask: 140, volume: 1000}, 
{date: '09/07/2022', open: 230, close: 210, bid: 2450, ask: 150, volume: 1500}
]

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Previous Close</TableCell>
            <TableCell align="right">Open</TableCell>
            <TableCell align="right">Bid</TableCell>
            <TableCell align="right">Ask</TableCell>
            <TableCell align="right">Volume</TableCell>
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
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.hello}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
