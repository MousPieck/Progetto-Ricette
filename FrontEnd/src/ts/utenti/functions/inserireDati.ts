import { btnCrea } from "./../utenti";
import { dataForm } from "../../interface/interface";
import { legerreDati, resetForm } from "../legerreDati";
import { caricareRecette } from "./caricareRecette";

export function inserireDati(data: dataForm): void {
	const titolo = <HTMLInputElement>document.querySelector("#uftitolo");
	const istruzioni = <HTMLTextAreaElement>(
		document.querySelector("#ufistruzioni")
	);
	const fbtnCrea = <HTMLButtonElement>document.querySelector("#ufcrea");
	const fbtnCancellare = <HTMLButtonElement>(
		document.querySelector("#ufcancel")
	);

	btnCrea.style.display = "none";
	titolo.name = data.id;
	(titolo.value = data.titolo), (istruzioni.value = data.istruzioni);
	fbtnCrea.classList.remove("btn-success");
	fbtnCrea.classList.add("btn-primary");
	fbtnCrea.textContent = "Edita";
	fbtnCrea.addEventListener("click", () => {
		const dati: dataForm = {
			id: titolo.getAttribute("name"),
			img: (<HTMLInputElement>document.querySelector("#ufileimg"))
				.files[0],
			titolo: titolo.value,
			istruzioni: istruzioni.value,
		};
		legerreDati(dati);
	});
	fbtnCancellare.addEventListener("click", () => {
		resetForm();
		btnCrea.style.display = "block";
		caricareRecette();
	});
}
