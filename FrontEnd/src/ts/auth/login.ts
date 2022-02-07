import { URLS } from "../utils/constants";
import { signIn } from "./functions/signIn";
import { signUp } from "./functions/signUp";
const btnSignIn = <HTMLInputElement>document.querySelector("#abt1");
const btnSignUp = <HTMLInputElement>document.querySelector("#abt2");
const btnLogout = <HTMLInputElement>document.querySelector("#logout");

function login(): void {
	if (btnSignIn && btnSignUp) {
		btnSignIn.addEventListener("click", signIn);
		btnSignUp.addEventListener("click", signUp);
	}
	if (btnLogout) {
		btnLogout.addEventListener("click", (): void => {
			sessionStorage.removeItem("id");
			window.location.replace(URLS.HOME);
		});
	}
}
export { login };
