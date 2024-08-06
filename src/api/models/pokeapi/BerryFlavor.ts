export default class BerryFlavor {
    id!: number;
    name!: string;
    berries!: BerryPotency[]
    contest_type!: NameUrlPair;
    names!: Name[]
}

class Name {
    name!: string;
    language!: NameUrlPair
}

export class BerryPotency {
    potency!: number;
    berry!: NameUrlPair
}
