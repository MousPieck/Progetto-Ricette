interface recette {
	_id: String;
	titolo: String;
	istruzioni: String;
	immagine: {
		img: String;
		public_id: String;
	};
	autore: {
		nome: String;
		_id: String;
	};
	createdAt: String;
	updatedAt: String;
}

interface dataForm {
	img?: File;
	id?: string;
	titolo: string;
	istruzioni: string;
}

interface login {
	email: string;
	password: string;
}

interface signUp {
	nome: string;
	cognome: string;
	email: string;
	password: string;
}

export { recette, dataForm, login, signUp };
