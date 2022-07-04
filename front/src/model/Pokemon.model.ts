class PokemonEntity {
    readonly image_url: string;
    readonly name: string;

    constructor(name: string, image_url: string) {
        this.name = image_url;
        this.image_url = image_url;
    }
}

export default PokemonEntity;
