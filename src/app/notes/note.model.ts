export interface INote 
{
    id ?: number,
    content ?: string
}

export class Note implements INote{

    constructor(public id ?:number, public content ?:string){
        
    }

}