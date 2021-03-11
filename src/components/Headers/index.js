import React from 'react';

import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        backgroundColor: 'lightblue',
        border: '1px solid black',
    },
});

const Headers = ({ data }) => {
    const classes = useStyles();

    return data
        ? data.map((header) => (
              <TableCell className={classes.header} key={header}>
                  {header}
              </TableCell>
          ))
        : null;
};

export default Headers;
