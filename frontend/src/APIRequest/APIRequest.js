import axios from 'axios';
import { ErrorToast, SuccessToast } from '../helper/FormHelper';
import { HideLoader, ShowLoader } from '../redux/state-slice/settings-slice';
import store from '../redux/store/store';
const BASE_URL = 'https://task-manager-2023.onrender.com/api/v1';

export function RegistrationRequest(registrationData) {
  // response start
  store.dispatch(ShowLoader());
  const postURL = BASE_URL + '/registration';
  const postBody = registrationData;

  return axios
    .post(postURL, postBody)
    .then((res) => {
      store.dispatch(HideLoader());
      // response end
      if (res.status === 200) {
        if (res.data.status === 'Fail') {
          if (res.data.data['keyPattern']['email'] === 1) {
            ErrorToast('Email already exist!');
            return false;
          } else {
            ErrorToast('Something went wrong!');
            return false;
          }
        } else {
          SuccessToast('Registration Success!');
          return true;
        }
      } else {
        ErrorToast('Something Went Wrong');
        return false;
      }
    })
    .catch((err) => {
      store.dispatch(HideLoader());
      // response end
      ErrorToast('Something Went Wrong');
      console.log(err);
      return false;
    });
}
