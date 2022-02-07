export const menssageError = (msg: string): HTMLDivElement => {
	const error = <HTMLDivElement>document.createElement("div");
	error.classList.add("error");
	const menssage = <HTMLElement>document.createElement("p");
	menssage.textContent = msg;
	error.appendChild(menssage);
	return error;
};
