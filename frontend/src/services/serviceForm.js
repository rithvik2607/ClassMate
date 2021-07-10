import http from "../http-common";

class FormDataService {
  sendLoginDetail(data) {
    return http.post("/checkLogin", data);
  }
}

export default new FormDataService();