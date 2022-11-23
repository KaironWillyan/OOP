export class AlreadyDeletedException extends Error{
    constructor(message: string){
        super(message)
    }
}