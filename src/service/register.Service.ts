import {urls} from "../config";
import {axiosService} from "./axios.Service";

const registerService = {
    login: (email: string, password: string) => axiosService.post(urls.login, { email, password }),
    register: (email: string, password: string) => axiosService.post(urls.register, { email, password }),
};

export {
    registerService
}