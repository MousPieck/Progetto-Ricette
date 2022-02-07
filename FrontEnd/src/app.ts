import "./scss/global/normalize.scss";
import "mdb-ui-kit/css/mdb.min.css";
import "./scss/main.scss";
import { mostrareRicette } from "./ts/home/ricette";
import { login } from "./ts/auth/login";
import { utentiPanele } from "./ts/utenti/utenti";
import { validatareCredenziale } from "./ts/auth/validator/validator";

window.addEventListener("DOMContentLoaded", () => {
	validatareCredenziale();
	login();
	mostrareRicette();
	utentiPanele();
});
