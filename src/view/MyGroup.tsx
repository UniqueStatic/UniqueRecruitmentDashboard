import React, { PureComponent } from 'react';

import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import Group from '../container/Group';

class MyGroup extends PureComponent<WithStyles> {
    render() {
        return <Group />;
    }
}

export default withStyles({})(MyGroup);
