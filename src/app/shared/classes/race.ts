export class Race {

    id: number;
    nom: string;
    relance: number;
    isApothicaire: boolean;

    constructor(id: number, nom: string, relance: number, isApothicaire: boolean) {
        this.id = id;
        this.nom = nom;
        this.relance = relance;
        this.isApothicaire = isApothicaire;
    }
}
