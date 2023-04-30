import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../HomePage/HomeHeader';

class ManageSchedule extends Component {

    render() {
        return (
            <>
            <HomeHeader
                        isShowBanner={false}
                    />
            <div>
                Manage Schedule
            </div >
            </>
            


        );
    }

}
const mapStateToProps = (state) => {
    return {
        language: state.app.language,
    };
};


const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);

