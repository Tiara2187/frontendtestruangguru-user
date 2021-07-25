export interface User {
    _id: string;
    product: string;
    username: string;
    email: string;
    contactnumber: string;
    contactperson: string;
}

export class Product{
    _id: string;
    productName: string;

}

export class UpdatedUser{
    product : string | undefined;
    username : string | undefined;
    email: string | undefined;
    contactnumber: string | undefined;
    contactperson: string | undefined;
}