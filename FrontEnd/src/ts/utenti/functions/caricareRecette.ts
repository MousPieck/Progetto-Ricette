import { eliminareFigli } from "../../utils/eliminareFigli";
import { utenteAxios } from "../../axios";
import { main } from "../utenti";
import { mostrareForm } from "./mostrareForm";
import { inserireDati } from "./inserireDati";
import { recette } from "../../interface/interface";
import { AxiosResponse } from "axios";

export async function caricareRecette(): Promise<void> {
	const id = sessionStorage.getItem("id");
	try {
		await utenteAxios.get(`/prodotti/${id}`).then((r: AxiosResponse) => {
			const card = <HTMLDivElement>document.createElement("div");
			card.classList.add("umain_card");
			const { prodotti }: { prodotti: object[] } = r.data;
			prodotti.forEach((s: recette) => {
				const { _id, istruzioni, titolo, immagine } = s;
				card.innerHTML += `
					<div class="card" id="${_id}">
					<img src="${immagine.img}" class="card-img-top"
						alt="Fissure in Sandstone" />
					<div class="card-body">
						<h5 class="card-title">${titolo}</h5>
						<p class="card-text">${istruzioni}</p>
						<button class="btn btn-primary" id="ubtn-modifica">Modifica</button>
						<button class="btn btn-danger" id="ubtn-elimina">Elimina</button>
					</div>
				</div>
						`;
			});
			eliminareFigli(main);
			main.appendChild(card);
			const editButtons: NodeListOf<Element> =
				main.querySelectorAll("#ubtn-modifica");
			editButtons.forEach((s: HTMLButtonElement) => {
				s.addEventListener("click", (e: any) => {
					const id =
						e.target.parentElement.parentElement.getAttribute("id");

					const titolo =
						e.target.parentElement.children[0].textContent;
					const istruzioni =
						e.target.parentElement.children[1].textContent;
					const data = {
						id,
						titolo,
						istruzioni,
					};
					mostrareForm();
					inserireDati(data);
				});
			});
			const deleteButtons: NodeListOf<Element> =
				main.querySelectorAll("#ubtn-elimina");
			deleteButtons.forEach((s: HTMLButtonElement) => {
				s.addEventListener("click", async (e: any) => {
					const id =
						e.target.parentElement.parentElement.getAttribute("id");
					await utenteAxios.delete(`/prodotti/${id}`);
					caricareRecette();
				});
			});
		});
	} catch (error) {
		console.log(error);
	}
}
