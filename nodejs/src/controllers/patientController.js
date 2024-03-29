import { reject } from 'lodash';
import patientService from '../services/patientService';


let postBookAppointment = async (req, res) => {
    try {
        let infor = await patientService.postBookAppointment(req.body);
        return res.status(200).json(infor)


    } catch (e) {
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the sever'
        })
        // console.log(e)
    }
}

let postVerifyBookAppointment = async (req, res) => {
    try {
        let infor = await patientService.postVerifyBookAppointment(req.body);
        return res.status(200).json(
            infor
        )
    } catch (e) {

        console.log(e);
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from the sever'
        })
    }
}


module.exports = {
    postBookAppointment: postBookAppointment,
    postVerifyBookAppointment: postVerifyBookAppointment
}
