import { eliminareFigli } from "../utils/eliminareFigli";
import { mostrareForm } from "./functions/mostrareForm";
import { caricareRecette } from "./functions/caricareRecette";
import { legerreDati, resetForm } from "./legerreDati";
import { URLS } from "../utils/constants";
import { dataForm } from "../interface/interface";

export const btnCrea = <HTMLButtonElement>document.querySelector("#ucrea");
const main = <HTMLElement>document.querySelector("#umain");

function utentiPanele(): void {
	if (window.location.href === URLS.UTENTI) {
		caricareRecette();

		if (btnCrea) {
			btnCrea.addEventListener("click", (): void => {
				eliminareFigli(main);
				btnCrea.style.display = "none";
				mostrareForm();
				const fbtnCrea = <HTMLButtonElement>(
					document.querySelector("#ufcrea")
				);
				const fbtnCancell = <HTMLButtonElement>(
					document.querySelector("#ufcancel")
				);
				fbtnCrea.addEventListener("click", (): void => {
					const data: dataForm = {
						img: (<HTMLInputElement>(
							document.querySelector("#ufileimg")
						)).files[0],
						titolo: (<HTMLInputElement>(
							document.querySelector("#uftitolo")
						)).value,
						istruzioni: (<HTMLTextAreaElement>(
							document.querySelector("#ufistruzioni")
						)).value,
					};
					legerreDati(data);
				});

				fbtnCancell.addEventListener("click", (): void => {
					resetForm();
					btnCrea.style.display = "block";
					caricareRecette();
				});
			});
		}
	}
}

export { utentiPanele, main };
