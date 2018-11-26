export class User {

    constructor(
        public $key: string,
        public access: number,
        public apt: string,
        public email: string,
        public name: string,
        public photo: string,
        public username: string,
        public voted: boolean
    ){

    }

}