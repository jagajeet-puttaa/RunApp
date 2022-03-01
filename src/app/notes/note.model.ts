export interface INote 
{
    id ?: string,
    content ?: string
}

export class Note implements INote{

    constructor(public id ?:string, public content ?:string){
        
    }

}