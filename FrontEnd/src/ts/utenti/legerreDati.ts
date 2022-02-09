import { serverAxios, utenteAxios } from "../axios";
import { dataForm } from "../interface/interface";
import { caricareRecette } from "./functions/caricareRecette";
import { btnCrea } from "./utenti";

export async function legerreDati(data: dataForm): Promise<void> {
	resetForm();
	await enviareDati(data);
	caricareRecette();

	btnCrea.style.display = "block";
}

async function enviareDati(data: dataForm): Promise<void> {
	const formData = new FormData();
	const { id, img, titolo, istruzioni }: dataForm = data;
	formData.append("file", img, "file");
	formData.append("titolo", titolo);
	formData.append("istruzioni", istruzioni);

	if (id) {
		try {
			await serverAxios.put(`/prodotti/${id}`, formData);
		} catch (error) {
			console.log(error);
		}
		return;
	} else {
		try {
			const id = sessionStorage.getItem("id");
			await serverAxios.post(`/prodotti/${id}`, formData);
		} catch (error) {
			console.log(error);
		}
	}
}
export function resetForm(): void {
	const form = <HTMLFormElement>document.querySelector("#uform");
	form.reset();
}
