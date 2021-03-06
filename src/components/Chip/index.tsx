import React, { FC, memo, MouseEventHandler, useState } from 'react';

import classNames from 'classnames';

import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';

import { Comment } from '../../config/types';

import useStyles from '../../styles/chip';

interface Props {
    comment: Comment;
    onRemove?: () => void;
    onCopy?: () => void;
}

const CommentChip: FC<Props> = memo(({ comment: { content, evaluation, username }, onCopy, onRemove }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState<Element | null>(null);

    const handleOpen: MouseEventHandler = ({ currentTarget }) => {
        setAnchorEl(currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const text = `${username}： ${content}`;
    const color = ['danger', 'warning', 'success'][evaluation];
    return (
        <>
            <Chip
                label={text}
                className={classes.chip}
                classes={{
                    root: classNames(classes[color], classes[`root-${color}`]),
                }}
                onMouseOver={handleOpen}
                onMouseOut={handleClose}
                onClick={onCopy}
                onDelete={onRemove}
            />
            <Popover
                className={classes.popover}
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={handleClose}
                disableRestoreFocus
                disableEnforceFocus>
                <Paper className={classNames(classes.content, classes[color])}>{content}</Paper>
            </Popover>
        </>
    );
});

export default CommentChip;
