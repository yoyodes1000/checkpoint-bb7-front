export class Team {
    id: number;
    nom: string;
    tresorerie: number;
    cheerleader: number;
    assistant: number;
    apothicaire: number;
    relance: number;

    constructor(id: number, nom: string, tresorerie: number, cheerleader: number, assistant: number, apothicaire: number, relance: number) {
        this.id = id;
        this.nom = nom;
        this.tresorerie = tresorerie;
        this.cheerleader = cheerleader;
        this.assistant = assistant;
        this.apothicaire = apothicaire;
        this.relance = relance;
    }
}
