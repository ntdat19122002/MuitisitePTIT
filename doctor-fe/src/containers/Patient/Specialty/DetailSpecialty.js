import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import './DetailSpecialty.scss';
import HomeHeader from '../../HomePage/HomeHeader';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorExtraInfor from '../Doctor/DoctorExtraInfor';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import { getDetailSpecialtyById, getAllcodeSevice } from '../../../services/userService';
// import { getDetailInforDoctor } from '../../../services/userService';
import _ from 'lodash';
import { LANGUAGES } from '../../../utils';


class DetailSpecialty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctorId: [],
            dataDetaitlSpecialty: {},
            listProvince: []
        };
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await getDetailSpecialtyById({
                id: id,
                location: 'ALL'
            });
            let resProvinced = await getAllcodeSevice('PROVINCE');
            if (res && res.errCode === 0 && resProvinced && resProvinced.errCode === 0) {
                let data = res.data;
                let arrDoctorId = [];
                if (data && !_.isEmpty(res.data)) {
                    let arr = data.doctorSpecialty;
                    if (arr && arr.length > 0) {
                        arr.map(item => {
                            arrDoctorId.push(item.doctorId)
                        })
                    }
                }
                let dataProvince = resProvinced.data;
                if (dataProvince && dataProvince.length > 0) {
                    dataProvince.unshift({
                        creatAt: null,
                        keyMap: "ALL",
                        type: "PROVINCE",
                        valueEn: "Nationwide",
                        valueVi: "Toàn quốc",
                    })
                }

                this.setState({
                    dataDetaitlSpecialty: res.data,
                    arrDoctorId: arrDoctorId,
                    listProvince: dataProvince ? dataProvince : []
                })
            }
        }
    }
    async componentDidUpdate(prevProps, prevstate, snapshot) {
        if (this.props.language !== prevProps.language) {
        }

    }
    handleOnChangeSelect = async (event) => {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let location = event.target.value;


            let res = await getDetailSpecialtyById({
                id: id,
                location: location
            });


            if (res && res.errCode === 0) {
                let data = res.data;
                let arrDoctorId = [];
                if (data && !_.isEmpty(res.data)) {
                    let arr = data.doctorSpecialty;
                    if (arr && arr.length > 0) {
                        arr.map(item => {
                            arrDoctorId.push(item.doctorId)
                        })
                    }
                }
                this.setState({
                    dataDetailSpecialty: res.data,
                    arrDoctorId: arrDoctorId,
                })
            }
        }
    }


    render() {
        let { arrDoctorId, dataDetaitlSpecialty, listProvince } = this.state;
        console.log('check state: ', this.state)
        let { language } = this.props;
        return (
            <div className="detail-specialty-container">
                <HomeHeader />
                <div className="detail-specialty-body" >
                    <div className="description-specialty">
                        {dataDetaitlSpecialty && !_.isEmpty(dataDetaitlSpecialty)
                            &&
                            <div dangerouslySetInnerHTML={{ __html: dataDetaitlSpecialty.descriptionHTML }}>

                            </div>
                        }
                    </div>
                    <div className="search-sp-doctor">
                        <select onChange={(event) => this.handleOnChangeSelect(event)}>
                            {listProvince && listProvince.length > 0 &&
                                listProvince.map((item, index) => {
                                    return (
                                        <option key={index} value={item.keyMap}>
                                            {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    {arrDoctorId && arrDoctorId.length > 0
                        && arrDoctorId.map((item, index) => {
                            return (
                                <div className="each-doctor" key={index}>
                                    <div className="dt-content-left">
                                        <div className="profile-doctor">
                                            <ProfileDoctor
                                                doctorId={item}
                                                isShowDescriptionDoctor={true}
                                                isShowLinkDetail={true}
                                                isShowPrice={false}
                                            />
                                        </div>
                                    </div>
                                    <div className="dt-content-right">
                                        <div className="doctor-schedule">
                                            <DoctorSchedule
                                                doctorIdFromParent={item}
                                            />
                                        </div>
                                        <div className="doctor-extra-infor">
                                            <DoctorExtraInfor
                                                doctorIdFromParent={item}
                                            />
                                        </div>


                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div >


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
export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);

