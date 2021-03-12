import React, { useState } from 'react';
import CSVReader from 'react-csv-reader';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Headers from './components/Headers';
import Items from './components/Items';
import Error from './components/Error';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        border: '1px solid black',
    },
    tablecontainer: {
        width: '98%',
        margin: '1rem',
    },
    item: {
        border: '1px solid black',
    },
    header: {
        backgroundColor: 'lightblue',
        border: '1px solid black',
    },
    error: {
        backgroundColor: 'lightcoral',
    },
});

function App() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const formatData = (data) => {
        const newData = data.map((item, idx) => {
            if (idx === 0) return ['ID', ...item, 'Duplicated With'];
            return [idx, ...item];
        });

        setData(newData);
    };

    if (data.length > 0) {
        const keys = [...data[0]].map((item) => item.toLowerCase());
        const isFullName = keys.includes('full name');
        const isPhone = keys.includes('phone');
        const isEmail = keys.includes('email');

        if (!(isFullName && isPhone && isEmail)) {
            return <Error />;
        }
    }

    return (
        <div className="container">
            <CSVReader
                label="Import Users"
                parserOptions={{ delimiter: ';' }}
                onFileLoaded={(data) => formatData(data)}
            />
            <TableContainer className={classes.tablecontainer} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <Headers data={data[0]} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Items data={data} />
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default App;
