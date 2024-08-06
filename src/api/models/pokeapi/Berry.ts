export default class Berry {
    id!: number;
    name!: string;
    growth_time!: number;
    max_harvest!: number;
    natural_gift_power!: number;
    size!: number;
    smoothness!: number;
    soil_dryness!: number;
    firmness!: NameUrlPair;
    flavors!: FlavorPotency[];
    item!: NameUrlPair;
    natural_gift_type!: NameUrlPair
}

class FlavorPotency {
    potency!: number;
    flavor!: NameUrlPair
}
