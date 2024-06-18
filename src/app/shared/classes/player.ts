export class Player {

  id: number;
  nbMax: number;
  poste: string;
  cout: number;
  compMvmt: number;
  compForce: number;
  compAgilite: string;
  compPasse: string;
  compArmure: string;
  principale: string;
  secondaire: string;
  comp: string;

    constructor(id: number, nbMax: number, poste: string, cout: number, compMvmt: number, compForce: number, compAgilite: string, compPasse: string, compArmure: string, principale: string, secondaire: string, comp: string) {
        this.id = id;
        this.nbMax = nbMax;
        this.poste = poste;
        this.cout = cout;
        this.compMvmt = compMvmt;
        this.compForce = compForce;
        this.compAgilite = compAgilite;
        this.compPasse = compPasse;
        this.compArmure = compArmure;
        this.principale = principale;
        this.secondaire = secondaire;
        this.comp = comp;
    }
}
