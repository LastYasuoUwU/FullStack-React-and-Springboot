class BookModel {
    id:number;
    title:String;
    author?:string;
    descritpion?:string;
    copies?:number;
    copiesAvailable?:number;
    category?:string;
    img:string;
    constructor(id:number,
        title:String,
        img:string,
        author?:string,
        descritpion?:string,
        copies?:number,
        copiesAvailable?:number,
        category?:string,
        ) {
        this.id=id;
        this.title=title;
        this.author=author;
        this.descritpion=descritpion;
        this.copies=copies;
        this.copiesAvailable=copiesAvailable;
        this.category=category;
        this.img=img;
    }
}

export default BookModel;