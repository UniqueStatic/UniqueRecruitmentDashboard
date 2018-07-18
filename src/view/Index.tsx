import * as React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import withRoot from "../style/withRoot";
import styles from "../style/index";
import Login from '../container/Login/index';
import logo from '../image/logo.png';
import welcome from '../image/welcome.png';

class Index extends React.Component<WithStyles> {
    render() {
        const { classes } = this.props;
        return (
            <>
                <div className={classes.indexImage}>
                    <img src={logo} />
                    <img src={welcome} />
                </div>
                <Login />
            </>
        );
    }
}

export default withRoot(withStyles(styles)(Index));