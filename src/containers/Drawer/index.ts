import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { toggleDrawerOpen, ToggleDrawerOpen } from 'Actions';
import { StoreState } from 'Reducers';

import Drawer from 'Components/Drawer';

const mapStateToProps = ({ component: { drawerOpen: open } }: StoreState) => ({
    open,
});

const mapDispatchToProps = (dispatch: Dispatch<ToggleDrawerOpen>) => ({
    toggleOpen: () => dispatch(toggleDrawerOpen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
