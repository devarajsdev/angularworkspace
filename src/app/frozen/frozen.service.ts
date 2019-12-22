export class FrozenService{
   private  _frozen=["ice Cream","Medicine"]
    constructor(){

    }
    get frozenItem(){
        return this._frozen;
    }
}