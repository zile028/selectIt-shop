# selectIt-shop

Kada se dodje na stranicu za subsctribe, unosi se email adresa koja se upisuje u novu kolekciju "subscribers"
Prilikom upisivanja,backend skripta prolazi kroz sve registrovane usere, i sve subscribovane usere i proverava da li postoji takav email.
(mozda bi moglo da se dopusti da registrovani user moze da se sub-uje)
Ako u navedenim kolekcijama vec postoji email, vraca nam kroz response poruku koja se na front-end manifestuje kroz toastfy paket shodno tipu poruke/greske.
Ako se korisnik uspesno sub-uje , upisuje se novi sub u subscribers-> kolekciju, i stize konfirmacioni mail, koji usera vraca na SELECTIT-SHOP.
