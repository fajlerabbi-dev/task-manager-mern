import axios from 'axios';
import { ErrorToast, SuccessToast } from '../helper/FormHelper';
const BASE_URL = 'https://task-manager-2023.onrender.com/api/v1';


export function RegistrationRequest(registrationData) {
  const postURL = BASE_URL + '/registration';
  const postBody = registrationData;

  return axios.post(postURL, postBody)
    .then((res) => {
      if (res.status === 200) {
        if (res.data['status'] === "fail") {
          if (res.data['data']['keyPattern']['email'] === 1) {
            ErrorToast("Email Already Exist")
            return false;
          }
          else {
            ErrorToast("Something Went Wrong")
            return false;
          }
        }
        else {
          SuccessToast("Registration Success")
          return true;
        }
      }
      else {
        ErrorToast("Something Went Wrong")
        return false;
      }
    })
    .catch(err => {
      ErrorToast("Something Went Wrong");
      console.log(err)
      return false;
    })
}