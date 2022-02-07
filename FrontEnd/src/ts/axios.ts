import axios from "axios";
import { URLS } from "./utils/constants";

const serverAxios = axios.create({
	baseURL: URLS.SERVER,
	headers: { "Content-Type": "multipart/form-data" },
});
const utenteAxios = axios.create({
	baseURL: URLS.SERVER,
});
export { serverAxios, utenteAxios };
