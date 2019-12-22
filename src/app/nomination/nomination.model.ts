export class NominationModel{
    private _candidateName;
    private _party;
    private _constituency;
    private _assets;


    constructor(candidateName,party,cons,assets){
        console.log('invoked Nomination model');
        this._assets=assets;
        this._candidateName=candidateName;
        this._constituency=cons;
        this._party=party;
    }

    get candidateName(){ return this._candidateName;}
    get party(){ return this._party;}
    get constituency(){ return this._constituency;}
    get assets(){ return this._assets;}

    set candidateName(candidateName){this._candidateName=candidateName;}
    set constituency(constituency){this._constituency=constituency;}
    set party(party){this._party=party;}
    set assets(assets){this._assets=assets;}
}