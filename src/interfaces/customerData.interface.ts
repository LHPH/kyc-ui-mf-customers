export interface CustomerAddress{
    street: string,
    streetNumber: string,
    idNeighborhood: string,
    neighborhood?: string,
    idState: string,
    state?: string,
    idCity: string,
    city?: string
    postalCode: string,
}

export interface Customer{

    id: string,
    firstName: string,
    secondName?: string,
    lastName: string,
    secondLastName?: string,
    rfc: string,
    age: string,
    homePhone?: string,
    cellPhone: string,
    email: string,
    active?: boolean,
    address: CustomerAddress
}