import { URLS } from "../utils/constants";
import { AxiosResponse } from "axios";
import { recette } from "../interface/interface";
import { utenteAxios } from "../axios";
const mostrareRicette = async () => {
	if (window.location.href === URLS.HOME) {
		await ricette();
	}
};

async function ricette(): Promise<void> {
	try {
		await utenteAxios.get(`/prodotti`).then((r: AxiosResponse) => {
			const { prodotti }: { prodotti: object[] } = r.data;
			if (prodotti.length) {
				const main = <HTMLElement>document.querySelector("#hmain");
				const card = <HTMLDivElement>document.createElement("div");
				card.classList.add("umain_card");
				prodotti.forEach((s: recette) => {
					const { istruzioni, titolo, autore, immagine }: recette = s;

					card.innerHTML += `
					<div class="card">
					<img src="${immagine.img}" class="card-img-top"
						alt="Fissure in Sandstone" />
					<div class="card-body">
						<h5 class="card-title">${titolo}</h5>
						<p class="card-text">${istruzioni}</p>
						<div class="footer">
							<p>Autore: <span>${autore.nome}<span></p>
						</div>
					</div>
				</div>
						`;
				});
				main.appendChild(card);
			}
		});
	} catch (error) {
		console.log(error);
	}
}

export { mostrareRicette };
