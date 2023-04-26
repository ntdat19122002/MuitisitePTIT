import axios from '../axios'

const getAllUsers = (inputId) => {
    return axios.get(`/api/users?id=${inputId}`);
}

const createNewUserService = (data) => {
    return axios.post('/api/users', data);
}
const DeleteUserService = (userId, token) => {
    return axios.delete('/api/users', {
        data: {
            id: userId
        },
        headers: { Authorization: `Bearer ${token}` },
    });
}
const editUserService = (inputData, token) => {
    return axios.put('/api/users', inputData, {
        headers: { Authorization: `Bearer ${token}` }
    });
}
const getAllcodeSevice = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`);
}
const getTopDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}
const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`)
}
const saveDetailDoctorService = (data) => {
    return axios.post(`/api/save-infor-doctors`, data)
}
const getDetailInforDoctor = (inputId) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`)
}
const saveBulkScheduleDoctor = (data) => {
    return axios.post('/api/bulk-create-schedule', data);
}
const getScheduleDoctorByDate = (doctorId, date) => {
    return axios.get(
        `/api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`
    )
}
const getExtraInforDoctorById = (doctorId) => {
    return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`)
}
const getProfileDoctorById = (doctorId) => {
    return axios.get(`/api/get-profile-doctor-by-id?doctorId=${doctorId}`);
};
const postPatientBookAppointment = (data) => {
    return axios.post('/api/patient-book-appointment', data)
}
const postVerifyBookAppointment = (data) => {
    return axios.post('/api/verify-book-appointment', data)
}
const creatNewSpecialty = (data) => {
    return axios.post('/api/create-new-specialty', data)
}
const getAllSpecialty = () => {
    return axios.get('/api/get-specialty')
}
const getDetailSpecialtyById = (data) => {
    return axios.get(`/api/get-detail-specialty-by-id?id=${data.id}&location=${data.location}`)
}
const creatNewClinic = (data) => {
    return axios.post('/api/create-new-clinic', data)
}
const getAllClinic = () => {
    return axios.get(`/api/get-clinic`)
}
const getDetailClinicById = (data) => {
    return axios.get(`/api/get-detail-clinic-by-id?id=${data.id}`)
}
const getAllPatientForDoctor = (data) => {
    return axios.get(`/api/get-list-patient-for-doctor?doctorId=${data.doctorId}&date=${data.date}`)
}
const postSendRemedy = (data) => {
    return axios.post('/api/send-remedy', data)
}

export { postSendRemedy, getAllPatientForDoctor, getDetailClinicById, getAllClinic, creatNewClinic, getDetailSpecialtyById, getAllSpecialty, creatNewSpecialty, postVerifyBookAppointment, postPatientBookAppointment, getProfileDoctorById, getExtraInforDoctorById, getScheduleDoctorByDate, saveBulkScheduleDoctor, getDetailInforDoctor, saveDetailDoctorService, getAllDoctors, getTopDoctorHomeService, getAllcodeSevice, getAllUsers, createNewUserService, DeleteUserService, editUserService };

