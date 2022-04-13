export class VideoGame {
    id;
    nom;
    is_started;

    constructor(nom, is_started) {
        this.nom = nom;
        this.is_started = is_started;
    }
}