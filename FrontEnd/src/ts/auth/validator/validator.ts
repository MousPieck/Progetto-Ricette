import { URLS } from "../../utils/constants";

const validatareCredenziale = () => {
	const id: string = sessionStorage.getItem("id");

	if (!id) {
		if (window.location.href === URLS.UTENTI) {
			return window.location.replace(URLS.HOME);
		}
	} else if (window.location.href === URLS.LOGIN) {
		return window.location.replace(URLS.UTENTI);
	} else if (window.location.href === URLS.HOME) {
		return window.location.replace(URLS.UTENTI);
	}
};

export { validatareCredenziale };
