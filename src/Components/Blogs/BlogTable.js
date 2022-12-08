import * as React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteChatDetails, getBlogDetails } from '../../Store/actions/actions';
import { useDispatch } from 'react-redux';

export default function BlogTable({ rows }) {
    const dispatch = useDispatch();
    const [page, setPage] = React.useState(0);
    const [dataCount, setDataCount] = React.useState();
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const onBlogItemDeletion = (id) => {
        deleteChatDetails(id)
        dispatch(getBlogDetails)
        dispatch(getBlogDetails)
    }
    return (
        <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={2}>
                                <b> S.No</b>
                            </TableCell>
                            <TableCell align="center" colSpan={3}>
                                <b>Blogs</b>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Object.keys(rows)
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((key, value) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={value}>
                                        <TableCell align='center' colSpan={2}>{value + 1}</TableCell>
                                        <TableCell key={value} align='center' colSpan={3}>
                                            {rows[key]?.blogMessage}
                                        </TableCell>
                                        <TableCell align='center'> <DeleteIcon onClick={() => onBlogItemDeletion(key)} /></TableCell>
                                    </TableRow>)
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={Object.keys(rows).length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}