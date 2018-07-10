import * as React from "react";
import {
    Divider,
    // Paper,
    Typography,
    WithStyles,
    withStyles
} from "@material-ui/core";
import { ContentCopy } from "@material-ui/icons";
// import { grey } from "@material-ui/core/colors";

import styles from "../style/style";
import Candidate from "../container/Candidate";
import withRoot from "../style/withRoot";
import Card from "./ThirdParty/Card/Card";
import CardHeader from "./ThirdParty/Card/CardHeader";
import CardIcon from "./ThirdParty/Card/CardIcon";
// import CardFooter from "./ThirdParty/Card/CardFooter";
// import { Divider } from "material-ui";

interface Props extends WithStyles {
    title: string;
    candidates: object;
}

const titleToStep = {
    '报名流程': '0',
    '笔试流程': '1',
    '面试流程': '2',
    '熬测流程': '3',
    '群面流程': '4',
};

class Column extends React.Component<Props> {
    render() {
        const { classes, title, candidates } = this.props;
        return (
            <Card elevation={0} className={classes.column}>
                <CardHeader color="success" stats icon>
                    <CardIcon color="success">
                        <ContentCopy />
                    </CardIcon>
                    <Typography style={{textAlign: 'right'}} variant="headline" className={classes.columnTitle}>
                        {title}
                    </Typography>
                </CardHeader>
                <Divider style={{ margin: '12px 4px' }}/>
                <div style={{ flex: 1 }}>
                        {Object.entries(candidates[titleToStep[title]]).map(i => (
                            <Candidate step={titleToStep[title]}
                                    name={i[0]}
                                    grade={i[1]['grade']}
                                    institute={i[1]['institute']}
                                    comments={i[1]['comments']}
                                    key={i[0]}
                            />
                        ))}
                    </div>
            </Card>
        );
    }
}

export default withRoot(withStyles(styles)(Column));
