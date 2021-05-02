class Meal {
    constructor(
        id, 
        categoryIds, 
        titulo, 
        preço, 
        dificuldade, 
        imageURL, 
        duracao, 
        ingredientes, 
        passos, 
        isGlutenFree, 
        isVegano, 
        isVegetariano, 
        isLactoseFree
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.titulo = titulo;
        this.preço = preço;
        this.dificuldade = dificuldade;
        this.imageURL = imageURL;
        this.duracao = duracao;
        this.ingredientes = ingredientes;
        this.passos = passos;
        this.isGlutenFree = isGlutenFree;
        this.isVegano = isVegano;
        this.isVegetariano = isVegetariano;
        this.isLactoseFree = isLactoseFree
    }
};

export default Meal;