import { URLS } from "../../utils/constants";
import { menssageError } from "../../utils/menssageError";
import { AxiosResponse } from "axios";
import { login } from "../../interface/interface";
import { utenteAxios } from "../../axios";

const email = <HTMLInputElement>document.querySelector("#correo");
const password = <HTMLInputElement>document.querySelector("#password");

const signIn = async () => {
	const data: login = {
		email: email.value,
		password: password.value,
	};
	await enviareDati(data);
};

const enviareDati = async (data: login) => {
	try {
		await utenteAxios.post("/login", data).then((r: AxiosResponse) => {
			const { id } = r.data;
			if (!id) {
				const form = <HTMLFormElement>(
					document.getElementById("aformulario")
				);
				form.appendChild(menssageError("Credenziale incorrette"));
				return;
			}
			sessionStorage.setItem("id", id);
			window.location.replace(URLS.UTENTI);
		});
	} catch (error) {
		console.log(error);
	}
};

export { signIn };
