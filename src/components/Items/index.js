import React from 'react';
import cn from 'classnames';

import { makeStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {
    checkAge,
    checkChildren,
    checkDate,
    checkEmail,
    checkExperience,
    checkLicense,
    checkYearlyIncome,
    formatChildren,
    formatPhone,
    formatState,
    formatYearlyIncome,
} from '../../_functions';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        border: '1px solid black',
    },
    tablecontainer: {
        width: '95%',
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

const Items = ({ data }) => {
    const classes = useStyles();

    const newData = data.map((item, index) => {
        const cleanPhone = item[2].replace(/^(\+1|^1)/, ''); //Clean up the phone number
        const duplicatedIDs = [];
        data.forEach((element, ind) => {
            if (index !== ind && (element[2].includes(cleanPhone) || item[3] === element[2])) {
                duplicatedIDs.push(element[0]);
            }
            if (index !== ind && (element[3] === item[3] || item[3] === element[3])) {
                duplicatedIDs.push(element[0]);
            }
        });
        index && item.push(duplicatedIDs);
        return item;
    });

    return newData.map((item, idx) => {
        if (idx === 0) return null;
        return (
            <TableRow key={idx}>
                <TableCell className={classes.item}>{item[0]}</TableCell>
                <TableCell className={classes.item}>{item[1]}</TableCell>
                <TableCell className={classes.item}>{formatPhone(item[2])}</TableCell>
                <TableCell className={cn(classes.item, checkEmail(item[3]) ? '' : classes.error)}>
                    {item[3]}
                </TableCell>
                <TableCell className={cn(classes.item, checkAge(item[4]) ? '' : classes.error)}>
                    {item[4]}
                </TableCell>
                <TableCell
                    className={cn(
                        classes.item,
                        checkExperience(item[5], item[4]) ? '' : classes.error,
                    )}>
                    {item[5]}
                </TableCell>
                <TableCell
                    className={cn(classes.item, checkYearlyIncome(item[6]) ? '' : classes.error)}>
                    {formatYearlyIncome(item[6])}
                </TableCell>
                <TableCell
                    className={cn(classes.item, checkChildren(item[7]) ? '' : classes.error)}>
                    {formatChildren(item[7])}
                </TableCell>
                <TableCell className={classes.item}>{formatState(item[8])}</TableCell>
                <TableCell className={cn(classes.item, checkDate(item[9]) ? '' : classes.error)}>
                    {item[9]}
                </TableCell>
                <TableCell
                    className={cn(classes.item, checkLicense(item[10]) ? '' : classes.error)}>
                    {item[10]}
                </TableCell>
                <TableCell className={classes.item}>{item[11].join(', ')}</TableCell>
            </TableRow>
        );
    });
};

export default Items;
