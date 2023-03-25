import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class FormHelper {
  isEmpty(value) {
    return value.length === 0;
  }
  isMobile(value) {
    return MobileRegx.test(value);
  }
  isEmail(value) {
    return !EmailRegx.test(value);
  }

  ErrorToast(msg) {
    toast.error(msg, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  SuccessToast(msg) {
    toast.success(msg, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

}

export const {
  isEmpty,
  isMobile,
  isEmail,
  ErrorToast,
  SuccessToast,
} = new FormHelper();