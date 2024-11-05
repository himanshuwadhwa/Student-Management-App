export interface StudentsTableData {
    StandardId: string,
    Students:Student[],
}


export interface Student {
    Id: string,
    Name: string
    Address: Address
}

export interface Address {
   Addres1: string,
   PostalCode: string,
   City: string,
   Country: string,
}