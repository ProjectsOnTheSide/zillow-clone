import { connect } from 'react-redux';
import DesktopNavBar from '../components/DesktopNavBar.jsx';

const mapStateToProps = (state) => (
    {
        //Dont' forget to put user id here
    }
)

const ConnectedDesktopNavBar = connect(mapStateToProps)(DesktopNavBar)

export default ConnectedDesktopNavBar