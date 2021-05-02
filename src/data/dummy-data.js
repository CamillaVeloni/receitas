import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIAS = [
    new Category('c1', 'Italiana', '#f5428d'),
    new Category('c2', 'Fácil e Rápido', '#f54242'),
    new Category('c3', 'Lanches', '#f5a442'),
    new Category('c4', 'Alemã', '#f5d142'),
    new Category('c5', 'Saudável', '#368dff'),
    new Category('c6', 'Exotico', '#41d95d'),
    new Category('c7', 'Café da manhã', '#9eecff'),
    new Category('c8', 'Asiatica', '#b9ffb0'),
    new Category('c9', 'Francesa', '#ffc7ff'),
    new Category('c10', 'Verão', '#47fced')
  ];

  export const RECEITAS = [
    new Meal(
      'm1',
      ['c1', 'c2'],
      'Espaguete ao molho de tomate',
      'Acessível',
      'Simples',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
      20,
      [
        '1 pacote de espaguete',
        '1 litro de água',
        '1 cebola pequena',
        'Óleo para fritar',
        'Molho de tomate',
        '1 colher (sopa) de mostarda', 
        'Pimenta-do-reino',
        'Orégano',
        'Queijo (opcional)'
      ],
      [
        'Ferva a água e o óleo em uma panela.',
        'Depois de a água começar a borbulhar, adicione o pacote de espaguete.',
        'Faça o molho em uma outra panela: coloque o alho a cebola e o óleo para fritar.',
        'Quando o alho e a cebola estiverem fritando, acrescente o molho de tomate.',
        'Em seguida, adicione a mostarda, a pimenta-do-reino a gosto e o orégano.',
        'Depois que o molho estiver pronto, desligue o fogo.',
        'Mexa o macarrão de 5 em 5 minutos para não queimar nem grudar.',
        'Escorra o macarrão e adicione o molho e, para enfeitar, acrescente o queijo que fica uma delícia.'
      ],
      false,
      true,
      true,
      true
    ),
  
    new Meal(
      'm2',
      ['c2'],
      'Torrada Havaiana',
      'Acessível',
      'Simples',
      'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
      10,
      [
        '1 fatia de pão de forma',
        '1 fatia de presunto cozido',
        '1 fatia de abacaxi em calda',
        '1-2 fatias de queijo',
        '4 colheres (sopa) de manteiga', 
        '2 colheres (chá) de óleo',
        '1 cereja em calda'
      ],
      [
        'Torrar levemente a fatia de pão',
        'Passar manteiga e colocar a fatia sobre uma forma',
        'Aquecer o óleo numa frigideira e fritar rapidamente as fatias de presunto',
        'Colocá-las sobre as fatias de pão',
        'Escorrer bem as fatias de abacaxi e dispor sobre as de presunto',
        'Por fim, cobrir o abacaxi com as fatias de queijo',
        'Assar em forno preaquecido a 200 °C por cerca de oito minutos.',
        'Decorar torrada com uma cereja no centro da fatia de abacaxi.'
      ],
      false,
      false,
      false,
      false
    ),
  
    new Meal(
      'm3',
      ['c3'],
      'Clássico Hambúrguer',
      'Mediano',
      'Simples',
      'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
      45,
      [
        '2 e 1/2 colheres de sopa de azeite',
        '1 cebola média picada',
        '2 dentes de alho bem picadinho',
        '300 g de cenouras raladas',
        '300 g de abobrinha ralada',
        '100 g de farinha de rosca',
        '1 ovo batido',
        '2 tomates picados',
        '2 colheres sopa de ketchup',
        '4 pães de hambúrguer',
        '2 colheres de sopa de maionese',
        '4 folhas de alface',
        'Sal a gosto'
      ],
      [
        'Coloque o azeite na panela, deixe aquecer.',
        'Em seguida junte o alho, a cebola e deixe cozinhar em fogo moderado, mexendo sempre, até dourar a cebola e o alho.',
        'Junte a cenoura, abobrinha e refogue por 10 minutos, mexendo sempre, até ficarem macias',
        'Retire do fogo, junte a farinha de rosca e o ovo, mexendo para que se incorporem em uma massa',
        'A mistura deve ficar bem umida. Modele 4 hambúrgueres grossos com cerca de 10 cm de diâmetro.',
        'Limpe a frigideira, aqueça 1/2 colher sopa de azeite e frite os hambúrgueres em fogo médio',
        'Corte os pães, espalhe a maionese, catchup, tomate e a alface.'
      ],
      false,
      false,
      false,
      true
    ),
  
    new Meal(
      'm4',
      ['c4'],
      'Wiener Schnitzel',
      'Caro',
      'Mediano',
      'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
      60,
      [
        '200 gramas de filé de lombo de porco',
        '1/4 xícara de farinha de trigo',
        '1/4 xícara de farinha de rosca / pão ralado',
        '1 unidade ovos',
        '1/2 unidade de limão siciliano/limão amarelo',
        'Sal',
        'Pimenta-preta/pimenta-do-reino',
        '1 xícara de óleo vegetal neutro (canola, girassol, milho, etc)'
      ],
      [
        'Coloque os filés sobre uma camada de filme plástico.',
        'Tempere-os com sal e pimenta dos dois lados.',
        'Cubra com outra camada de filme plástico e bata levemente, utilizando o martelo. Eles devem ser finos, mas não quebradiços',
        'O resultado final deve ser um filé fino, com cerca de 5 a 6 milimetros de espessura.',
        'Em um frigideira média, coloque óleo suficiente para que o schnitzel possa "boiar" um pouco, ou ele irá queimar.',
        'Deixe esquentar até ficar bem quente, 170 graus Celsius.',
        'Tempere as 3 misturas com um pouco de sal e de pimenta-do-reino, ou o schnitzel ficará sem sabor.',
        'Passe os dois lados da carne pela farinha de trigo e retire o excesso de farinha',
        'Passe os dois lado da carne pelo ovo mexido e retire o excesso de ovo mexido',
        'Passe os dois lados da carne pela farinha de rosca (pão ralado); não aperte a carne mas tenha certeza toda a carne esteja coberta pela farinha',
        'Leve o schnitzel diretamente para a frigideira com óleo quente e frite por cerca de 2 a 3 minutos de cada lado, até ficar dourado.',
        'Seque em toalha absorvente por alguns segundos de cada lado',
        'Sirva imediatamente com fatias de limão e folhas de salsinha'
      ],
      false,
      false,
      false,
      false
    ),
  
    new Meal(
      'm5',
      ['c2', 'c5', 'c10'],
      'Salada com salmão defumado',
      'Caro',
      'Simples',
      'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
      15,
      [
        'Alface',
        "1 tomate",
        '1 maçã reineta',
        '1 ramo pequeno aipo',
        '1/2 cebola roxa',
        '6 framboesas',
        '2-3 colheres tahini',
        '5 folhas manjericão',
        'Salmão fumado',
        'Vinagre de maçã',
        'Azeite',
        'Sal'
      ],
      [
        'Cortar o salmão em tiras longas',
        'Cortar e misturar os ingredientes todos numa taça.',
        'Juntar os ingredientes do molho e temperar.',
      ],
      true,
      false,
      true,
      true
    ),
  
    new Meal(
      'm6',
      ['c6', 'c10'],
      'Delicioso mousse de laranja',
      'Acessível',
      'Difícil',
      'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
      240,
      [
        '4 Sheets of Gelatine',
        '150ml Orange Juice',
        '80g Sugar',
        '300g Yoghurt',
        '200g Cream',
        'Orange Peel'
      ],
      [
        'Dissolve gelatine in pot',
        'Add orange juice and sugar',
        'Take pot off the stove',
        'Add 2 tablespoons of yoghurt',
        'Stir gelatin under remaining yoghurt',
        'Cool everything down in the refrigerator',
        'Whip the cream and lift it under die orange mass',
        'Cool down again for at least 4 hours',
        'Serve with orange peel'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm7',
      ['c7'],
      'Panquecas',
      'Acessível',
      'Simples',
      'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
      20,
      [
        '1 1/2 Cups all-purpose Flour',
        '3 1/2 Teaspoons Baking Powder',
        '1 Teaspoon Salt',
        '1 Tablespoon White Sugar',
        '1 1/4 cups Milk',
        '1 Egg',
        '3 Tablespoons Butter, melted'
      ],
      [
        'In a large bowl, sift together the flour, baking powder, salt and sugar.',
        'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
        'Heat a lightly oiled griddle or frying pan over medium high heat.',
        'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
      ],
      true,
      false,
      true,
      false
    ),
  
    new Meal(
      'm8',
      ['c8'],
      'Creamy Indian Chicken Curry',
      'Mediano',
      'Mediano',
      'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
      35,
      [
        '4 Chicken Breasts',
        '1 Onion',
        '2 Cloves of Garlic',
        '1 Piece of Ginger',
        '4 Tablespoons Almonds',
        '1 Teaspoon Cayenne Pepper',
        '500ml Coconut Milk'
      ],
      [
        'Slice and fry the chicken breast',
        'Process onion, garlic and ginger into paste and sauté everything',
        'Add spices and stir fry',
        'Add chicken breast + 250ml of water and cook everything for 10 minutes',
        'Add coconut milk',
        'Serve with rice'
      ],
      true,
      false,
      false,
      true
    ),
  
    new Meal(
      'm9',
      ['c9'],
      'Chocolate Souffle',
      'Acessível',
      'Difícil',
      'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
      45,
      [
        '1 Teaspoon melted Butter',
        '2 Tablespoons white Sugar',
        '2 Ounces 70% dark Chocolate, broken into pieces',
        '1 Tablespoon Butter',
        '1 Tablespoon all-purpose Flour',
        '4 1/3 tablespoons cold Milk',
        '1 Pinch Salt',
        '1 Pinch Cayenne Pepper',
        '1 Large Egg Yolk',
        '2 Large Egg Whites',
        '1 Pinch Cream of Tartar',
        '1 Tablespoon white Sugar'
      ],
      [
        'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
        'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
        'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
        'Place chocolate pieces in a metal mixing bowl.',
        'Place bowl over a pan of about 3 cups hot water over low heat.',
        'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
        'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
        'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
        'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
        'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
        'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
        'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
        'Transfer a little less than half of egg whites to chocolate.',
        'Mix until egg whites are thoroughly incorporated into the chocolate.',
        'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
        'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
        'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
      ],
      true,
      false,
      true,
      false
    ),
    new Meal(
      'm10',
      ['c2', 'c5', 'c10'],
      'Asparagus Salad with Cherry Tomatoes',
      'Caro',
      'Simples',
      'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
      30,
      [
        'White and Green Asparagus',
        '30g Pine Nuts',
        '300g Cherry Tomatoes',
        'Salad',
        'Salt, Pepper and Olive Oil'
      ],
      [
        'Wash, peel and cut the asparagus',
        'Cook in salted water',
        'Salt and pepper the asparagus',
        'Roast the pine nuts',
        'Halve the tomatoes',
        'Mix with asparagus, salad and dressing',
        'Serve with Baguette'
      ],
      true,
      true,
      true,
      true
    )
  ];