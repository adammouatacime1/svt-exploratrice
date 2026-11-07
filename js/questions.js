// Questions originales. Les valeurs des expériences sont illustratives.
export const questions = [
  {
    id: 'a1', module: 'a', type: 'mcq',
    prompt: 'Dans une mare, qu’est-ce qui constitue le milieu naturel ?',
    options: ['Seulement les animaux', 'Les êtres vivants et les éléments non vivants qui les entourent', 'Seulement l’eau'],
    answer: 1, hint: 'Pense aussi à l’eau, au sol, à la lumière et aux végétaux.',
    explanation: 'Un milieu comprend des êtres vivants et des éléments non vivants. Leurs relations permettent de comprendre où vivent les organismes.'
  },
  {
    id: 'a2', module: 'a', type: 'sort',
    prompt: 'Classe ces éléments du bord d’un lac.',
    options: [], answer: 0, targets: ['Vivant', 'Non vivant'],
    pairs: [{item: 'Roseau', target: 'Vivant'}, {item: 'Grenouille', target: 'Vivant'}, {item: 'Eau', target: 'Non vivant'}, {item: 'Roche', target: 'Non vivant'}],
    hint: 'Un végétal est vivant, même s’il ne se déplace pas.',
    explanation: 'Le roseau et la grenouille sont des êtres vivants. L’eau et la roche font partie du milieu, mais ne sont pas des organismes.'
  },
  {
    id: 'a3', module: 'a', type: 'mcq',
    prompt: 'Quel groupe contient uniquement des milieux aquatiques ?',
    options: ['Forêt, prairie, désert', 'Plage, forêt, lac', 'Lac, mare, océan'],
    answer: 2, hint: '« Aquatique » signifie que le milieu est constitué d’eau.',
    explanation: 'Le lac, la mare et l’océan sont des milieux aquatiques. Une mare n’est donc pas un milieu terrestre. La plage est une zone de transition entre terre et eau.'
  },
  {
    id: 'a4', module: 'a', type: 'match',
    prompt: 'Associe les outils de terrain à leur rôle.',
    options: [], answer: 0,
    targets: ['Se repérer', 'Observer à distance', 'Recueillir un échantillon', 'Capturer un insecte pour l’observer'],
    pairs: [{item: 'Carte', target: 'Se repérer'}, {item: 'Jumelles', target: 'Observer à distance'}, {item: 'Bocal', target: 'Recueillir un échantillon'}, {item: 'Filet', target: 'Capturer un insecte pour l’observer'}],
    hint: 'Les jumelles rapprochent l’image d’un animal éloigné.',
    explanation: 'Chaque outil répond à une tâche. Sur le terrain, on limite les prélèvements et on respecte les êtres vivants et leur habitat.'
  },
  {
    id: 'a5', module: 'a', type: 'match',
    prompt: 'Choisis le bon outil pour chaque tâche scientifique.',
    options: [], answer: 0,
    targets: ['Mesurer une température', 'Mesurer le dioxygène', 'Prélever un échantillon en profondeur', 'Grossir de très petits détails'],
    pairs: [{item: 'Thermomètre', target: 'Mesurer une température'}, {item: 'Oxymètre', target: 'Mesurer le dioxygène'}, {item: 'Carottier', target: 'Prélever un échantillon en profondeur'}, {item: 'Microscope', target: 'Grossir de très petits détails'}],
    hint: 'Le carottier retire un échantillon en forme de cylindre.',
    explanation: 'Un appareil de mesure fournit une valeur avec une unité. Le carottier prélève. Le microscope permet de voir des détails trop petits pour l’œil.'
  },
  {
    id: 'a6', module: 'a', type: 'predict',
    prompt: 'Une plante qui a besoin d’humidité est placée dans un sol très sec. Que peux-tu prévoir ?',
    options: ['Elle se développera forcément mieux', 'Elle risque de moins bien se développer', 'La quantité d’eau ne peut rien changer'],
    answer: 1, hint: 'Les êtres vivants ont des besoins. Les conditions du milieu peuvent les satisfaire ou non.',
    explanation: 'L’eau disponible influence la présence et la croissance des organismes. Cette prévision devra être vérifiée : toutes les espèces n’ont pas les mêmes besoins.'
  },
  {
    id: 'a7', module: 'a', type: 'mcq',
    prompt: 'Quelle phrase décrit correctement la lumière ?',
    options: ['C’est une matière liquide', 'C’est un être vivant', 'C’est une condition du milieu, pas une matière solide, liquide ou gazeuse'],
    answer: 2, hint: 'La lumière éclaire. On ne la range pas avec les matières comme l’eau ou les roches.',
    explanation: 'La lumière apporte de l’énergie et influence les êtres vivants. On ne lui attribue pas un état solide, liquide ou gazeux comme à la matière.'
  },
  {
    id: 'a8', module: 'a', type: 'match',
    prompt: 'Associe chaque situation à une grande fonction du vivant.',
    options: [], answer: 0, targets: ['Nutrition', 'Respiration', 'Croissance', 'Reproduction'],
    pairs: [{item: 'Un lapin se nourrit', target: 'Nutrition'}, {item: 'Une souris prélève du dioxygène', target: 'Respiration'}, {item: 'Une jeune plante grandit', target: 'Croissance'}, {item: 'Un oiseau donne naissance à des petits', target: 'Reproduction'}],
    hint: 'La reproduction produit de nouveaux individus.',
    explanation: 'Se nourrir, respirer, grandir et se reproduire sont des fonctions étudiées chez les êtres vivants. Un individu ne réalise pas forcément toutes ces fonctions à chaque instant.'
  },
  {
    id: 'b1', module: 'b', type: 'mcq',
    prompt: 'À quoi sert l’appareil de Berlèse ?',
    options: ['À récolter de petits animaux du sol ou de la litière', 'À compter toutes les cellules du sol', 'À mesurer la température de l’océan'],
    answer: 0, hint: 'Pense aux animaux cachés entre les feuilles mortes.',
    explanation: 'Le dispositif permet de récolter certains petits animaux présents dans un échantillon. Il ne récolte pas tous les êtres vivants du sol.'
  },
  {
    id: 'b2', module: 'b', type: 'predict',
    prompt: 'La lampe chauffe et dessèche le haut de l’échantillon. Que font de nombreux petits animaux ?',
    options: ['Ils montent tous vers la lampe', 'Ils descendent pour fuir ces conditions', 'Ils se transforment en végétaux'],
    answer: 1, hint: 'Ces animaux recherchent généralement des conditions moins chaudes et moins sèches.',
    explanation: 'La chaleur et le dessèchement rendent le haut défavorable. Certains petits animaux descendent, passent à travers le tamis et sont guidés par l’entonnoir vers le récipient.'
  },
  {
    id: 'b3', module: 'b', type: 'match',
    prompt: 'Retrouve le rôle des éléments du montage.',
    options: [], answer: 0,
    targets: ['Chauffer et dessécher le haut', 'Porter l’échantillon en laissant passer les animaux', 'Guider les animaux vers le bas', 'Recueillir les animaux'],
    pairs: [{item: 'Lampe', target: 'Chauffer et dessécher le haut'}, {item: 'Tamis', target: 'Porter l’échantillon en laissant passer les animaux'}, {item: 'Entonnoir', target: 'Guider les animaux vers le bas'}, {item: 'Récipient collecteur', target: 'Recueillir les animaux'}],
    hint: 'Le tamis possède des ouvertures. L’entonnoir se rétrécit vers le bas.',
    explanation: 'Chaque pièce a un rôle. L’échantillon de sol ou de litière repose sur le tamis, au-dessus de l’entonnoir et du récipient.'
  },
  {
    id: 'b4', module: 'b', type: 'mcq',
    prompt: 'Après la récolte, pourquoi utiliser une loupe ?',
    options: ['Pour fabriquer de nouveaux animaux', 'Pour voir plus facilement leurs petits détails', 'Pour faire respirer le sol'],
    answer: 1, hint: 'Une loupe agrandit l’image de ce que tu observes.',
    explanation: 'Les animaux récoltés peuvent être très petits. La loupe aide à observer leur forme, leurs pattes ou leurs antennes.'
  },
  {
    id: 'b5', module: 'b', type: 'mcq',
    prompt: 'Dans une simulation de Berlèse, cinq animaux arrivent dans le récipient. Que peut-on affirmer ?',
    options: ['Tous les vrais sols contiennent exactement cinq animaux', 'L’animation illustre le fonctionnement ; ce n’est pas un comptage réel', 'Il n’existe que cinq espèces dans le sol'],
    answer: 1, hint: 'Une simulation est un modèle créé pour comprendre.',
    explanation: 'Les nombres et les mouvements de l’animation sont illustratifs. Une véritable observation demanderait un échantillon réel et un protocole adapté.'
  },
  {
    id: 'b6', module: 'b', type: 'mcq',
    prompt: 'Tu veux comprendre le montage chez toi. Quelle activité convient ici ?',
    options: ['Manipuler seule de l’alcool et une lampe chauffante', 'Utiliser la simulation et observer les éléments du schéma', 'Toucher la lampe pour vérifier sa chaleur'],
    answer: 1, hint: 'Le laboratoire virtuel permet de comprendre sans réaliser le montage.',
    explanation: 'La simulation suffit pour cette activité. Elle ne demande ni alcool, ni montage chauffant, ni manipulation risquée.'
  },
  {
    id: 'c1', module: 'c', type: 'mcq',
    prompt: 'Pourquoi utiliser un microscope pour observer l’épiderme d’oignon ?',
    options: ['Pour voir les cellules, trop petites pour être distinguées à l’œil', 'Pour faire grandir réellement l’oignon', 'Pour changer les cellules en animaux'],
    answer: 0, hint: 'Le microscope agrandit l’image, pas l’être vivant.',
    explanation: 'Le microscope permet d’observer des détails invisibles à l’œil nu. Le grossissement change l’image observée, pas la taille réelle des cellules.'
  },
  {
    id: 'c2', module: 'c', type: 'label',
    prompt: 'Replace les légendes des cellules animale et végétale étudiées.',
    options: [], answer: 0,
    targets: ['Membrane', 'Cytoplasme', 'Noyau', 'Paroi'],
    pairs: [{item: 'Fine limite de la cellule', target: 'Membrane'}, {item: 'Matière intérieure autour des structures', target: 'Cytoplasme'}, {item: 'Structure contenant l’information génétique', target: 'Noyau'}, {item: 'Enveloppe rigide extérieure de la cellule végétale', target: 'Paroi'}],
    hint: 'La paroi est à l’extérieur de la membrane dans la cellule végétale présentée.',
    explanation: 'Les cellules de joue et d’oignon étudiées possèdent membrane, cytoplasme et noyau. La cellule végétale présentée possède aussi une paroi et une grande vacuole.'
  },
  {
    id: 'c3', module: 'c', type: 'mcq',
    prompt: 'Quelle structure occupe souvent un grand espace dans la cellule végétale présentée ?',
    options: ['Une grande vacuole', 'Un poumon', 'Une branchie'],
    answer: 0, hint: 'C’est un compartiment contenant un liquide.',
    explanation: 'La grande vacuole est un compartiment rempli d’un liquide. Elle occupe une grande partie de la cellule végétale présentée.'
  },
  {
    id: 'c4', module: 'c', type: 'sort',
    prompt: 'Une seule cellule ou plusieurs cellules pour former l’organisme ?',
    options: [], answer: 0, targets: ['Unicellulaire', 'Pluricellulaire'],
    pairs: [{item: 'Paramécie', target: 'Unicellulaire'}, {item: 'Amibe', target: 'Unicellulaire'}, {item: 'Euglène', target: 'Unicellulaire'}, {item: 'Être humain', target: 'Pluricellulaire'}, {item: 'Oignon', target: 'Pluricellulaire'}],
    hint: '« Uni » signifie un ; « pluri » signifie plusieurs.',
    explanation: 'Une paramécie, une amibe ou une euglène est un organisme formé d’une cellule. Un être humain et un oignon sont formés de nombreuses cellules.'
  },
  {
    id: 'c5', module: 'c', type: 'mcq',
    prompt: 'Que peut-on dire du noyau ?',
    options: ['Toutes les cellules de tous les êtres vivants ont un noyau', 'Les cellules animales et végétales étudiées ici possèdent un noyau', 'Aucune cellule végétale n’a de noyau'],
    answer: 1, hint: 'Limite ta conclusion aux cellules observées dans ce cours.',
    explanation: 'Les cellules de joue et d’oignon étudiées possèdent un noyau. Certaines autres cellules, comme celles des bactéries, n’en possèdent pas : il ne faut pas généraliser à toutes les cellules.'
  },
  {
    id: 'c6', module: 'c', type: 'mcq',
    prompt: 'Quel dessin est adapté à l’épiderme du bulbe d’oignon étudié ?',
    options: ['Des cellules avec paroi, membrane, cytoplasme, noyau et grande vacuole, sans ajouter systématiquement de chloroplastes', 'Des cellules contenant des poumons', 'Des cellules toutes obligatoirement hexagonales et vertes'],
    answer: 0, hint: 'Un bulbe d’oignon n’est pas une feuille verte.',
    explanation: 'On ne représente pas systématiquement de chloroplastes dans l’épiderme du bulbe. Les formes des cellules végétales sont variées ; elles ne sont pas toutes hexagonales.'
  },
  {
    id: 'c7', module: 'c', type: 'predict',
    prompt: 'Tu augmentes le grossissement du microscope simulé. Que devient l’image ?',
    options: ['Les cellules semblent plus grandes et le champ observé se réduit', 'Les cellules réelles grandissent', 'On voit toujours une plus grande partie de l’échantillon'],
    answer: 0, hint: 'Imagine un zoom sur une petite zone.',
    explanation: 'Un grossissement plus élevé permet de voir davantage de détails dans une zone plus petite. Le nombre de cellules visibles peut diminuer.'
  },
  {
    id: 'c8', module: 'c', type: 'mcq',
    prompt: 'Un dessin coloré et simplifié de cellule est-il une véritable photographie microscopique ?',
    options: ['Oui, toujours', 'Non : c’est un schéma qui aide à comprendre les structures', 'Oui, s’il est très joli'],
    answer: 1, hint: 'Un schéma sélectionne et simplifie les détails.',
    explanation: 'Le schéma est une représentation pédagogique. Les couleurs, les proportions et le nombre de détails peuvent être simplifiés ; ce n’est pas une observation photographique.'
  },
  {
    id: 'd1', module: 'd', type: 'mcq',
    prompt: 'Lors de la respiration étudiée ici, quels échanges ont lieu ?',
    options: ['Prélèvement de dioxygène O₂ et rejet de dioxyde de carbone CO₂', 'Prélèvement de CO₂ et rejet d’O₂ uniquement', 'Disparition de tous les gaz'],
    answer: 0, hint: 'L’O₂ est prélevé ; le CO₂ est rejeté.',
    explanation: 'La respiration étudiée consomme du dioxygène et produit du dioxyde de carbone. Ces échanges concernent aussi les plantes.'
  },
  {
    id: 'd2', module: 'd', type: 'predict',
    prompt: 'Un air inspiré contient environ 21 % d’O₂. Après expiration, que prévoit-on ?',
    options: ['Il ne reste absolument aucun O₂', 'La proportion d’O₂ est plus faible, mais il en reste', 'Il n’y a plus que du CO₂'],
    answer: 1, hint: 'L’organisme ne prélève qu’une partie du dioxygène de l’air inspiré.',
    explanation: 'L’air expiré contient encore du dioxygène, souvent autour de 16 % dans un exemple courant. Ces valeurs sont indicatives et ne remplacent pas une mesure.'
  },
  {
    id: 'd3', module: 'd', type: 'predict',
    prompt: 'On place une plante terrestre dans une enceinte obscure. Quelle évolution illustre sa respiration ?',
    options: ['O₂ diminue et CO₂ augmente', 'O₂ augmente sans cesse', 'O₂ et CO₂ doivent disparaître en même temps'],
    answer: 0, hint: 'Dans l’obscurité, la photosynthèse ne masque pas les échanges de la respiration.',
    explanation: 'La plante respire : elle prélève de l’O₂ et rejette du CO₂. L’obscurité empêche la photosynthèse de produire de l’O₂ et de consommer du CO₂ pendant l’expérience.'
  },
  {
    id: 'd4', module: 'd', type: 'mcq',
    prompt: 'Quand les plantes respirent-elles ?',
    options: ['Uniquement la nuit', 'Uniquement le jour', 'Le jour et la nuit'],
    answer: 2, hint: 'L’obscurité sert à isoler la respiration dans l’expérience, pas à la déclencher.',
    explanation: 'Les plantes respirent le jour et la nuit. À la lumière, la photosynthèse peut modifier le bilan des échanges mesurés, mais la respiration continue.'
  },
  {
    id: 'd5', module: 'd', type: 'mcq',
    prompt: 'Quel dioxygène le poisson prélève-t-il ?',
    options: ['Le dioxygène dissous dans l’eau', 'Les atomes d’oxygène arrachés aux molécules d’eau', 'Seulement l’O₂ des bulles visibles'],
    answer: 0, hint: 'Du dioxygène peut être présent dans l’eau sans former de bulles visibles.',
    explanation: 'Le poisson prélève l’O₂ dissous grâce à ses branchies. Il ne décompose pas les molécules d’eau H₂O pour respirer.'
  },
  {
    id: 'd6', module: 'd', type: 'mcq',
    prompt: 'De l’eau de chaux devient trouble au contact d’un gaz. Que met-elle en évidence ?',
    options: ['Du dioxygène uniquement', 'Une quantité suffisante de dioxyde de carbone', 'Une absence totale de gaz'],
    answer: 1, hint: 'Le test concerne le CO₂.',
    explanation: 'Un trouble de l’eau de chaux met en évidence du CO₂ dans les conditions du test. Si elle reste limpide, on ne peut pas conclure à une absence absolue de CO₂ : il peut y en avoir trop peu pour produire un trouble visible.'
  },
  {
    id: 'd7', module: 'd', type: 'match',
    prompt: 'Associe chaque mesure à la bonne présentation.',
    options: [], answer: 0,
    targets: ['Pourcentage (%) dans l’air', 'Milligrammes par litre (mg/L) dans l’eau', 'Test du dioxyde de carbone', 'Mesure du dioxygène'],
    pairs: [{item: 'Proportion d’O₂ de l’air', target: 'Pourcentage (%) dans l’air'}, {item: 'Concentration d’O₂ dissous', target: 'Milligrammes par litre (mg/L) dans l’eau'}, {item: 'Eau de chaux', target: 'Test du dioxyde de carbone'}, {item: 'Oxymètre', target: 'Mesure du dioxygène'}],
    hint: 'Ne compare pas directement une valeur en % à une valeur en mg/L.',
    explanation: 'Le pourcentage décrit une proportion dans l’air. Les mg/L expriment ici une masse d’O₂ par litre d’eau. L’oxymètre mesure l’O₂ ; l’eau de chaux teste le CO₂.'
  },
  {
    id: 'd8', module: 'd', type: 'predict',
    prompt: 'Une élodée, plante aquatique, est placée dans l’obscurité. Sans autre échange avec l’extérieur, que prévoit-on pour l’O₂ dissous ?',
    options: ['Il diminue avec la respiration', 'Il augmente grâce à une photosynthèse intense dans le noir', 'Il est toujours exactement nul'],
    answer: 0, hint: 'Une plante aquatique respire aussi.',
    explanation: 'L’élodée prélève de l’O₂ dissous pour respirer. Dans l’obscurité, la photosynthèse ne produit pas d’O₂. Un témoin sans plante aiderait à comparer les résultats d’une expérience réelle.'
  },
  {
    id: 'e1', module: 'e', type: 'mcq',
    prompt: 'Quel trajet suit l’air pour atteindre les alvéoles ?',
    options: ['Nez ou bouche → pharynx → larynx → trachée → bronches → bronchioles → alvéoles', 'Nez → estomac → intestin → alvéoles', 'Alvéoles → bouche → branchies'],
    answer: 0, hint: 'Les grosses voies aériennes se divisent en conduits de plus en plus petits.',
    explanation: 'L’air passe par ces voies aériennes avant d’atteindre les alvéoles, petites poches où ont lieu les échanges avec le sang.'
  },
  {
    id: 'e2', module: 'e', type: 'match',
    prompt: 'Dans une alvéole, retrouve le sens des échanges.',
    options: [], answer: 0, targets: ['De l’air alvéolaire vers le sang', 'Du sang vers l’air alvéolaire'],
    pairs: [{item: 'Dioxygène O₂', target: 'De l’air alvéolaire vers le sang'}, {item: 'Dioxyde de carbone CO₂', target: 'Du sang vers l’air alvéolaire'}],
    hint: 'Le sang reçoit l’O₂ qui pourra être transporté aux organes.',
    explanation: 'L’O₂ traverse les fines parois de l’alvéole et des capillaires vers le sang. Le CO₂ effectue le trajet inverse, puis est expulsé avec l’air expiré.'
  },
  {
    id: 'e3', module: 'e', type: 'mcq',
    prompt: 'Qu’est-ce qui favorise les échanges au niveau des alvéoles ?',
    options: ['Des parois épaisses et aucun vaisseau', 'Des parois fines, une grande surface et de nombreux capillaires', 'Une seule petite surface fermée au sang'],
    answer: 1, hint: 'Les gaz traversent plus facilement une faible épaisseur et une grande surface.',
    explanation: 'Les parois fines réduisent la distance à traverser. La grande surface et le réseau de capillaires permettent de nombreux échanges entre l’air et le sang.'
  },
  {
    id: 'e4', module: 'e', type: 'mcq',
    prompt: 'Chez le criquet, comment le dioxygène atteint-il les tissus ?',
    options: ['Stigmates → trachées → trachéoles → tissus', 'Bouche → poumons → sang, comme chez l’être humain', 'Branchies → alvéoles → tissus'],
    answer: 0, hint: 'Les stigmates sont de petites ouvertures à la surface du corps.',
    explanation: 'Le réseau de trachées puis de trachéoles conduit l’air jusqu’aux tissus. Chez le criquet, ce réseau apporte directement le dioxygène ; le sang ne joue pas le rôle de transport de l’O₂ décrit chez l’être humain.'
  },
  {
    id: 'e5', module: 'e', type: 'mcq',
    prompt: 'Qu’est-ce qu’un stomate ?',
    options: ['Un petit pore de la surface de la feuille permettant des échanges gazeux', 'Le poumon d’un arbre', 'Une racine qui capture les insectes'],
    answer: 0, hint: 'Un pore est une petite ouverture.',
    explanation: 'Les stomates sont des pores, souvent présents sur les feuilles, qui permettent des échanges gazeux. La respiration utilise l’O₂ et rejette le CO₂ ; la photosynthèse, possible à la lumière, est un autre processus.'
  },
  {
    id: 'e6', module: 'e', type: 'predict',
    prompt: 'Chez le poisson osseux illustré, quel trajet suit l’eau ?',
    options: ['Elle entre par la bouche, passe sur les branchies et sort au niveau des opercules', 'Elle entre par les alvéoles et sort par les feuilles', 'Elle reste toujours dans la bouche'],
    answer: 0, hint: 'Les opercules sont les volets qui recouvrent les branchies.',
    explanation: 'Le passage d’eau sur les branchies renouvelle l’eau au contact des surfaces d’échange. L’O₂ dissous passe vers le sang, et le CO₂ du sang passe vers l’eau.'
  },
  {
    id: 'e7', module: 'e', type: 'match',
    prompt: 'Associe l’organisme à sa structure d’échange.',
    options: [], answer: 0, targets: ['Poumons et alvéoles', 'Trachées et trachéoles', 'Stomates', 'Branchies'],
    pairs: [{item: 'Être humain', target: 'Poumons et alvéoles'}, {item: 'Criquet', target: 'Trachées et trachéoles'}, {item: 'Feuille de plante terrestre', target: 'Stomates'}, {item: 'Poisson', target: 'Branchies'}],
    hint: 'Les branchies sont au contact de l’eau ; les alvéoles contiennent de l’air.',
    explanation: 'Des structures différentes permettent les échanges selon les organismes et leur milieu. Les stomates sont des pores : on ne les appelle pas des poumons.'
  },
  {
    id: 'e8', module: 'e', type: 'match',
    prompt: 'Retrouve le nom de chaque mode de respiration.',
    options: [], answer: 0, targets: ['Respiration pulmonaire', 'Respiration trachéenne', 'Respiration branchiale'],
    pairs: [{item: 'Échanges par les poumons chez l’être humain', target: 'Respiration pulmonaire'}, {item: 'Réseau de trachées chez le criquet', target: 'Respiration trachéenne'}, {item: 'Échanges par les branchies chez le poisson', target: 'Respiration branchiale'}],
    hint: 'Chaque nom rappelle la structure utilisée.',
    explanation: 'Pulmonaire renvoie aux poumons, trachéenne aux trachées des insectes, et branchiale aux branchies. Tous ces organismes prélèvent du dioxygène, mais leur trajet est différent.'
  }
];

export const finalQuestionIds = ['a2', 'a6', 'b2', 'b3', 'c2', 'c4', 'd3', 'd5', 'e2', 'e7'];
