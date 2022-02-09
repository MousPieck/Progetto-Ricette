import { URLS } from "../../utils/constants";
import { eliminareFigli } from "../../utils/eliminareFigli";
import { AxiosResponse } from "axios";
import { menssageError } from "../../utils/menssageError";
import { signUp } from "../../interface/interface";
import { utenteAxios } from "../../axios";

const form = <HTMLInputElement>document.querySelector("#aformulario");

const signUp = (): void => {
	eliminareFigli(form);
	cambiareLogin();
	const buttonSignUp = <HTMLInputElement>document.querySelector("#abt1");
	buttonSignUp.addEventListener("click", leggereDatiSignUp);
};
const leggereDatiSignUp = (): void => {
	const data: signUp = {
		nome: (<HTMLInputElement>document.querySelector("#snome")).value,
		cognome: (<HTMLInputElement>document.querySelector("#scognome")).value,
		email: (<HTMLInputElement>document.querySelector("#correo")).value,
		password: (<HTMLInputElement>document.querySelector("#password")).value,
	};
	enviareRichiestaLogin(data);
};

const cambiareLogin = (): void => {
	form.innerHTML = `
    <div id="alogo"></div>
            <div class="snoms">
                <div class="mb-3 ls">

                    <label for="exampleInputEmail1" class="form-label">Nome</label>
                    <input type="text" class="form-control aform-control" id="snome" placeholder="NOME">
                </div>
                <div class="mb-3 ls">

                    <label for="exampleInputEmail1" class="form-label">Cognome</label>
                    <input type="text" class="form-control aform-control" id="scognome" placeholder="COGNOME">
                </div>
            </div>

            <div class="mb-3 ls">

                <label for="exampleInputEmail1" class="form-label">E-mail</label>
                <input type="email" class="form-control aform-control" id="correo" placeholder="Inserisci Email">
            </div>
            <div class="mb-3 ls">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control aform-control" id="password" placeholder="Inserisci Password">
            </div>
            <div class="abuttons">
                <button id="abt1" type="button" class="btn btn-dark">Register</button>
                <button id="abt2" type="button" class="btn" onclick="location.reload()">Login</button>
            </div>
    `;
};

async function enviareRichiestaLogin(data: signUp): Promise<void> {
	try {
		await utenteAxios
			.post("/signup", data)
			.then((res: AxiosResponse<any>): void => {
				const { msg }: { msg: string } = res.data;
				if (msg == "register") {
					window.location.replace(URLS.LOGIN);
					return;
				}
				menssageError(msg);
			});
	} catch (err) {
		console.log(err);
	}
}

export { signUp };
