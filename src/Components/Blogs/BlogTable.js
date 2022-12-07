import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


export default function BlogTable({ rows }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500, maxHeight: 500, overflowY: 'scroll' }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>S.No</StyledTableCell>
                        <StyledTableCell align="center">Blog</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.values(rows).map((key, value) => (
                        <StyledTableRow key={value}>
                            <StyledTableCell component="th" scope="row">
                                {value}
                            </StyledTableCell>
                            <StyledTableCell align="center">{key?.blogMessage}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}