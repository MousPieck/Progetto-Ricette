import { main } from "../utenti";

export function mostrareForm(): void {
	main.innerHTML = `
    <form id="uform">
            <div class="mb-4">
                <label class="form-label" for="customFile">Immagine</label>
                <input type="file" class="form-control" id="ufileimg" accept="image/*"/>
            </div>
            <div class="mb-4">
                <label class="form-label" for="form5Example1">Titolo</label>
                <input type="text" id="uftitolo" class="form-control" />
            </div>
            <div class="mb-4">
                <label class="form-label" for="form4Example3">Istruzioni</label>
                <textarea class="form-control" id="ufistruzioni" rows="4"></textarea>
            </div>
            <div class="buttons">
                <button type="button" class="btn btn-success" id="ufcrea">Crea</button>
                <button type="button" class="btn btn-danger" id="ufcancel">Cancella</button>
            </div>
        </form>
    `;
}
