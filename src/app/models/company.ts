import { Phone } from "./phone";
import { Address } from "./address";

export interface Company {
    id: number;
    name: string;
    document: string;
    email: string;
    phones: Phone[];
    address: Address;
}
