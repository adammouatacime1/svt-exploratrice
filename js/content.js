// Contenus pédagogiques originaux. Voir docs/SOURCES.md pour les limites des sources.
export const modules = [
  {
    id: 'a',
    title: 'Explorer les milieux naturels',
    subtitle: 'Observer ce qui vit et ce qui l’entoure',
    icon: '🌿',
    question: 'Pourquoi ne rencontre-t-on pas les mêmes êtres vivants dans une forêt et dans un lac ?',
    intro: 'Un milieu naturel est un lieu avec des êtres vivants et des conditions physiques : eau, lumière, température… Pour le comprendre, on commence par observer. Une observation décrit ce que l’on voit ou mesure. Une interprétation propose une explication. Une conclusion répond à la question à partir des résultats.',
    lessons: [
      {
        title: 'Un lieu, des êtres vivants, des conditions',
        question: 'Pourquoi un nénuphar pousse-t-il dans une mare plutôt que dans une prairie ?',
        exerciseId: 'a3',
        observe: 'Une forêt porte beaucoup d’arbres. Une prairie est surtout couverte d’herbes. Le désert reçoit peu de pluie ou de neige. Un milieu aquatique est un milieu dans l’eau : le lac et la mare en sont des exemples, généralement d’eau douce ; la mare est plus petite et peu profonde. L’océan contient de l’eau salée. La plage est une zone de rencontre entre terre et mer.',
        interpret: 'Aquatique signifie « dans l’eau ». Terrestre signifie « sur les terres émergées ». La salinité est la quantité de sels dissous dans l’eau. La présence d’eau, sa salinité, la température et la lumière changent d’un lieu à l’autre. Ces conditions favorisent certains êtres vivants et en limitent d’autres.',
        conclude: 'Les milieux naturels sont variés. Une mare est un milieu aquatique, même si elle est petite. Une plage comprend des zones terrestres et des zones immergées selon la marée.',
        terms: [
          { word: 'Milieu naturel', definition: 'Lieu comprenant des êtres vivants et les conditions physiques dans lesquelles ils vivent.' },
          { word: 'Milieu aquatique', definition: 'Milieu où les êtres vivants vivent dans l’eau.' },
          { word: 'Milieu terrestre', definition: 'Milieu des terres émergées, par opposition au milieu aquatique.' },
          { word: 'Salinité', definition: 'Quantité de sels dissous dans l’eau.' }
        ]
      },
      {
        title: 'Vivant ou non vivant ?',
        question: 'Un arbre immobile est-il vivant ? Et une rivière qui coule ?',
        exerciseId: 'a2',
        observe: 'Dans la scène, les arbres, les herbes et les animaux sont vivants. L’eau, l’air et les roches ne sont pas vivants. Le sol contient des éléments non vivants, mais aussi des êtres vivants et des restes d’êtres vivants.',
        interpret: 'Les animaux et les végétaux sont des groupes d’êtres vivants. La présence de mouvement ne suffit pas à reconnaître le vivant : un arbre est vivant et une rivière coule sans être vivante. La lumière est une forme d’énergie. La température indique si le milieu est plus ou moins chaud. Ni l’une ni l’autre n’est une matière à classer en solide, liquide ou gaz.',
        conclude: 'Un milieu comporte des composantes vivantes et non vivantes. L’eau, l’air, les roches et une partie du sol sont de la matière non vivante. Lumière et température font aussi partie des conditions du milieu.',
        terms: [
          { word: 'Composante', definition: 'Élément qui fait partie d’un ensemble, ici d’un milieu.' },
          { word: 'Végétal', definition: 'Être vivant tel qu’un arbre, une herbe ou une mousse.' },
          { word: 'Condition du milieu', definition: 'Caractéristique comme la température, la lumière ou la quantité d’eau disponible.' }
        ]
      },
      {
        title: 'Choisir le bon outil',
        question: 'Comment observer un oiseau éloigné sans le déranger ?',
        exerciseId: 'a4',
        observe: 'Un échantillon est une petite partie d’un milieu prélevée pour l’étudier. La carte aide à se repérer. Les jumelles permettent d’observer à distance. Un bocal peut recueillir certains échantillons. Un filet permet de capturer temporairement des insectes pour les observer. Un carottier prélève une colonne de sol ou de sédiment, c’est-à-dire un dépôt de particules.',
        interpret: 'Un thermomètre mesure la température. Un pH-mètre mesure le pH, un indicateur de l’acidité. Le dioxygène, noté O₂, est un gaz utilisé lors de la respiration. Un oxymètre mesure sa teneur, c’est-à-dire sa quantité dans un volume donné. Une loupe grossit de petits objets. Un microscope permet d’observer des détails beaucoup plus petits, comme les cellules, les unités de base du vivant. Chaque outil répond donc à une question précise.',
        conclude: 'On choisit l’outil selon ce que l’on cherche : se repérer, observer, prélever ou mesurer. Sur le terrain, on respecte les êtres vivants et les règles de protection du lieu. Les captures se font avec un adulte et les animaux sont relâchés rapidement.',
        terms: [
          { word: 'Échantillon', definition: 'Petite partie d’un milieu prélevée pour l’étudier.' },
          { word: 'Carottier', definition: 'Outil qui prélève une colonne de sol ou de sédiment.' },
          { word: 'Oxymètre', definition: 'Appareil qui mesure la teneur en dioxygène d’un milieu.' },
          { word: 'pH', definition: 'Indicateur du caractère acide, neutre ou basique d’une solution.' }
        ]
      },
      {
        title: 'Que font les êtres vivants ?',
        question: 'Ton petit cousin grandit : quelle fonction du vivant observes-tu ?',
        exerciseId: 'a8',
        observe: 'Un jeune arbre grandit. Un oiseau mange. Un poisson réalise des échanges de gaz avec l’eau. Une plante peut donner des graines qui produiront de nouvelles plantes.',
        interpret: 'La nutrition est l’approvisionnement en matière nécessaire à la vie. Le dioxyde de carbone, noté CO₂, est un autre gaz. La respiration étudiée ici prélève du dioxygène O₂ et rejette du CO₂. La croissance est l’augmentation de la taille ou de la masse. La reproduction produit de nouveaux individus. Ces fonctions se réalisent différemment selon les êtres vivants et les conditions du milieu.',
        conclude: 'Nutrition, respiration, croissance et reproduction sont de grandes fonctions du vivant. Un individu ne les montre pas forcément toutes au même moment. Par exemple, une graine peut rester longtemps sans croissance visible.',
        terms: [
          { word: 'Nutrition', definition: 'Ensemble des processus qui fournissent à un être vivant la matière dont il a besoin.' },
          { word: 'Respiration', definition: 'Dans ce cours, processus au cours duquel un être vivant prélève du dioxygène et rejette du dioxyde de carbone.' },
          { word: 'Croissance', definition: 'Augmentation de la taille ou de la masse d’un être vivant.' },
          { word: 'Reproduction', definition: 'Production de nouveaux individus.' }
        ]
      }
    ],
    essentials: [
      'Un milieu naturel associe êtres vivants et conditions physiques.',
      'Forêt et prairie sont terrestres ; lac et mare sont aquatiques ; la plage est à la rencontre de la terre et de la mer.',
      'La lumière est une énergie. La température est une grandeur mesurée.',
      'On observe, on propose une interprétation, puis on conclut avec des preuves.',
      'Les conditions du milieu influencent la présence des êtres vivants.'
    ]
  },
  {
    id: 'b',
    title: 'Enquêter sous nos pieds',
    subtitle: 'Découvrir les petits animaux du sol',
    icon: '🔎',
    question: 'Une poignée de feuilles mortes semble vide. Cache-t-elle pourtant des animaux ?',
    intro: 'La litière est la couche de feuilles mortes et d’autres restes à la surface du sol. De petits animaux y vivent. Le dessèchement est la perte d’eau d’un milieu. L’appareil de Berlèse permet de récolter certains animaux qui se déplacent face à la chaleur et au dessèchement. Ici, tu manipules une simulation : un modèle pour comprendre, sans mesure réelle.',
    lessons: [
      {
        title: 'Comprendre le montage',
        question: 'Comment récupérer de minuscules animaux cachés entre des feuilles mortes ?',
        exerciseId: 'b3',
        observe: 'Une lampe se trouve au-dessus d’un échantillon de sol ou de litière. L’échantillon repose sur un tamis, une grille percée de petits trous. Le tamis est placé dans un entonnoir. Un récipient collecteur est situé sous l’entonnoir.',
        interpret: 'Le tamis retient les plus gros débris tout en laissant passer de petits animaux. L’entonnoir guide ceux qui descendent vers le récipient. La lampe réchauffe et assèche progressivement le haut de l’échantillon.',
        conclude: 'Chaque partie a un rôle : la lampe modifie les conditions, le tamis porte l’échantillon, l’entonnoir guide et le récipient recueille les animaux.',
        terms: [
          { word: 'Litière', definition: 'Couche de feuilles mortes et d’autres restes à la surface du sol.' },
          { word: 'Tamis', definition: 'Grille qui retient les gros éléments et laisse passer les plus petits.' },
          { word: 'Appareil de Berlèse', definition: 'Montage qui utilise chaleur et dessèchement pour faire descendre certains petits animaux d’un échantillon vers un récipient.' }
        ]
      },
      {
        title: 'Suivre le déplacement des animaux',
        question: 'Si le haut des feuilles devient chaud et sec, où les petits animaux vont-ils aller ?',
        exerciseId: 'b2',
        observe: 'Dans la simulation, les petits animaux se déplacent vers le bas lorsque la lampe chauffe. Ils traversent le tamis, puis tombent dans le récipient collecteur.',
        interpret: 'Le dessèchement est la perte d’eau d’un milieu. Certains petits animaux fuient les zones devenues trop chaudes ou trop sèches. Ils se dirigent vers des zones plus fraîches et plus humides, situées plus bas dans le montage.',
        conclude: 'Les animaux ne sont pas aspirés ni attirés par l’alcool. Leur déplacement face aux conditions du milieu permet la récolte. L’appareil ne recueille pas forcément tous les êtres vivants du sol.',
        terms: [
          { word: 'Dessèchement', definition: 'Diminution de la quantité d’eau présente dans un milieu.' },
          { word: 'Simulation', definition: 'Modèle qui aide à comprendre un phénomène ; ses résultats ne sont pas des mesures réelles.' }
        ]
      },
      {
        title: 'Observer la récolte',
        question: 'Tu distingues un tout petit point dans le récipient : comment voir ses pattes ?',
        exerciseId: 'b4',
        observe: 'On peut récolter de petits animaux tels que des collemboles ou des acariens. Ils sont souvent trop petits pour distinguer facilement leurs détails à l’œil nu.',
        interpret: 'Une loupe agrandit leur image et aide à observer le corps et les pattes. Les animaux récoltés montrent qu’un échantillon apparemment vide peut héberger une diversité d’êtres vivants.',
        conclude: 'La simulation sert à comprendre le principe du montage. Elle ne demande aucune manipulation réelle : pas d’alcool, pas de lampe chauffante, pas de capture à réaliser seul.',
        terms: [
          { word: 'Loupe', definition: 'Instrument qui grossit l’image d’un petit objet pour mieux en observer les détails.' },
          { word: 'Diversité', definition: 'Variété des éléments ou des êtres vivants présents.' }
        ]
      }
    ],
    essentials: [
      'La litière et le sol abritent de petits êtres vivants.',
      'La chaleur et le dessèchement font descendre certains petits animaux.',
      'Lampe → échantillon sur tamis → entonnoir → récipient collecteur.',
      'Une loupe permet d’examiner les animaux récoltés.',
      'La récolte ne représente pas tous les êtres vivants du sol. Ici, tout est simulé.'
    ]
  },
  {
    id: 'c',
    title: 'Voyager au cœur des cellules',
    subtitle: 'Changer d’échelle pour comprendre le vivant',
    icon: '🔬',
    question: 'Quel point commun existe entre une pelure d’oignon et l’intérieur de ta joue ?',
    intro: 'Une cellule est l’unité de base des êtres vivants. Elle est souvent trop petite pour être distinguée à l’œil nu. Un microscope est un instrument qui permet d’en observer une image agrandie. Les images de cette activité sont des schémas simplifiés, pas de véritables photographies microscopiques.',
    lessons: [
      {
        title: 'Observer avec le microscope',
        question: 'Pourquoi ne vois-tu pas les cellules quand tu regardes un oignon à l’œil nu ?',
        exerciseId: 'c1',
        observe: 'Le grossissement indique combien de fois l’image est agrandie. Dans la simulation, passe d’un faible à un fort grossissement : tu vois moins de cellules à la fois, mais chaque cellule paraît plus grande.',
        interpret: 'L’épiderme est une fine couche de cellules en surface. Un fragment d’épiderme du bulbe d’oignon montre des cellules jointives, c’est-à-dire côte à côte, souvent allongées. Un prélèvement de la face interne de la joue montre des cellules animales plus irrégulières, parfois séparées.',
        conclude: 'Oignon et être humain sont constitués de cellules. Un fort grossissement facilite l’observation de détails, mais réduit la zone visible. La coloration d’une préparation peut rendre certaines structures plus faciles à distinguer.',
        terms: [
          { word: 'Cellule', definition: 'Unité de base qui constitue les êtres vivants.' },
          { word: 'Microscope', definition: 'Instrument qui permet d’observer une image agrandie d’objets très petits.' },
          { word: 'Grossissement', definition: 'Rapport entre la taille de l’image observée et la taille réelle de l’objet.' },
          { word: 'Épiderme', definition: 'Couche de cellules située en surface ; ici celle d’une écaille du bulbe d’oignon.' }
        ]
      },
      {
        title: 'Les structures des cellules étudiées',
        question: 'Quels détails pourrais-tu retrouver dans une cellule de joue et une cellule d’oignon ?',
        exerciseId: 'c2',
        observe: 'La membrane est la fine limite qui entoure une cellule. Le noyau est une structure qui contient l’essentiel de l’information génétique : les instructions nécessaires au fonctionnement de ces cellules. Le cytoplasme est le contenu cellulaire situé à l’intérieur de la membrane, autour du noyau.',
        interpret: 'Dans les cellules de joue et d’oignon étudiées ici, on identifie une membrane, du cytoplasme et un noyau. Selon la préparation et le microscope, certaines limites sont plus difficiles à voir. Le schéma aide à les comprendre, mais il ne montre pas tous les détails d’une cellule réelle.',
        conclude: 'Ces cellules animales et végétales possèdent un noyau. Cela ne signifie pas que toutes les cellules du vivant en possèdent : les bactéries, par exemple, n’ont pas de noyau.',
        terms: [
          { word: 'Membrane', definition: 'Fine limite qui entoure la cellule et contrôle les échanges avec son milieu.' },
          { word: 'Cytoplasme', definition: 'Contenu de la cellule à l’intérieur de la membrane, autour du noyau lorsqu’il existe.' },
          { word: 'Noyau', definition: 'Structure qui contient l’essentiel de l’information génétique des cellules animales et végétales présentées.' }
        ]
      },
      {
        title: 'La cellule d’oignon',
        question: 'Pourquoi la cellule d’oignon dessinée contient-elle une si grande poche ?',
        exerciseId: 'c3',
        observe: 'La paroi est une enveloppe résistante située à l’extérieur de la membrane. La vacuole est un compartiment contenant un liquide. Une grande vacuole occupe une grande partie de la cellule d’oignon présentée.',
        interpret: 'La paroi contribue au maintien de la forme. La grande vacuole contient notamment de l’eau et des substances dissoutes. Dans l’épiderme du bulbe d’oignon habituellement observé, on ne voit pas de chloroplastes, les structures qui réalisent la photosynthèse. Ce processus utilise la lumière pour fabriquer de la matière organique, la matière produite par le vivant, à partir notamment de CO₂ et d’eau, avec libération d’O₂.',
        conclude: 'La cellule végétale présentée possède une paroi et une grande vacuole. Les cellules végétales n’ont pas toutes la même forme : elles ne sont pas systématiquement hexagonales. Une cellule d’oignon ne représente pas toutes les cellules végétales.',
        terms: [
          { word: 'Paroi', definition: 'Enveloppe résistante extérieure à la membrane, présente dans les cellules végétales étudiées.' },
          { word: 'Vacuole', definition: 'Compartiment cellulaire contenant un liquide ; elle est grande dans la cellule d’oignon représentée.' },
          { word: 'Chloroplaste', definition: 'Structure de certaines cellules végétales où se réalise la photosynthèse.' }
        ]
      },
      {
        title: 'Une seule cellule ou beaucoup ?',
        question: 'Un être vivant peut-il tenir tout entier dans une seule cellule ?',
        exerciseId: 'c4',
        observe: 'Une paramécie, une amibe ou une euglène est un être vivant formé d’une seule cellule. L’être humain et l’oignon sont constitués d’un très grand nombre de cellules.',
        interpret: 'Unicellulaire signifie « formé d’une seule cellule ». Pluricellulaire signifie « formé de plusieurs cellules ». Une cellule unique peut assurer les fonctions nécessaires à la vie d’un organisme. Chez un être pluricellulaire, les cellules peuvent avoir des formes et des rôles différents.',
        conclude: 'La cellule est l’unité de base du vivant. Un être vivant peut être unicellulaire ou pluricellulaire. « Microscopique » ne veut pas forcément dire « unicellulaire » : ce sont deux idées différentes.',
        terms: [
          { word: 'Unicellulaire', definition: 'Constitué d’une seule cellule.' },
          { word: 'Pluricellulaire', definition: 'Constitué de plusieurs cellules.' },
          { word: 'Organisme', definition: 'Un être vivant considéré dans son ensemble.' }
        ]
      }
    ],
    essentials: [
      'La cellule est l’unité de base des êtres vivants.',
      'Les cellules de joue et d’oignon étudiées possèdent membrane, cytoplasme et noyau.',
      'La cellule d’oignon présentée a aussi une paroi et une grande vacuole, sans chloroplastes représentés.',
      'Paramécie, amibe et euglène : une cellule. Être humain et oignon : de nombreuses cellules.',
      'Un schéma simplifie la réalité. Toutes les cellules n’ont ni la même forme ni les mêmes structures.'
    ]
  },
  {
    id: 'd',
    title: 'Mener l’enquête sur la respiration',
    subtitle: 'Prédire, comparer, puis conclure',
    icon: '🧪',
    question: 'Comment prouver qu’un être vivant respire, même quand on ne voit aucun mouvement ?',
    intro: 'Le dioxygène, noté O₂, et le dioxyde de carbone, noté CO₂, sont deux gaz différents. Lors de la respiration étudiée ici, un organisme prélève de l’O₂ et rejette du CO₂. Une expérience compare l’état initial, au début, et l’état final, à la fin. Le laboratoire utilise des valeurs illustratives : ce ne sont pas des mesures du cahier ni des mesures réelles.',
    lessons: [
      {
        title: 'Comparer l’air inspiré et l’air expiré',
        question: 'Quand tu souffles, reste-t-il du dioxygène dans l’air que tu rejettes ?',
        exerciseId: 'd2',
        observe: 'L’air inspiré est l’air qui entre dans les poumons. L’air expiré est l’air qui en sort. L’air expiré contient moins d’O₂ et plus de CO₂ que l’air inspiré. Il contient encore une quantité importante d’O₂.',
        interpret: 'Une partie de l’O₂ inspiré passe vers le sang. Du CO₂ apporté par le sang passe dans l’air qui sera expiré. Comparer les teneurs, c’est comparer les proportions de ces gaz dans l’air.',
        conclude: 'Chez l’être humain, les échanges respiratoires se traduisent par un prélèvement d’O₂ et un rejet de CO₂. L’expiration ne rejette pas uniquement du CO₂ : l’air expiré contient aussi du diazote, le gaz le plus abondant de l’air, de l’O₂ et de la vapeur d’eau.',
        terms: [
          { word: 'Dioxygène (O₂)', definition: 'Gaz prélevé au cours de la respiration étudiée dans ce cours.' },
          { word: 'Dioxyde de carbone (CO₂)', definition: 'Gaz rejeté au cours de la respiration étudiée dans ce cours.' },
          { word: 'Air inspiré', definition: 'Air qui entre dans l’appareil respiratoire.' },
          { word: 'Air expiré', definition: 'Air qui sort de l’appareil respiratoire.' }
        ]
      },
      {
        title: 'Mesurer le dioxygène dans l’air ou l’eau',
        question: 'Comment savoir si un poisson prélève du dioxygène sans voir de bulles ?',
        exerciseId: 'd7',
        observe: 'L’oxymètre mesure la teneur en O₂. Une enceinte est un récipient fermé pour l’expérience. Dans la simulation d’une enceinte contenant une plante terrestre placée dans l’obscurité, la teneur en O₂ diminue. Dans l’eau contenant un poisson ou une plante aquatique comme l’élodée, elle peut aussi diminuer pendant l’expérience dans l’obscurité.',
        interpret: 'Dissous signifie « réparti dans un liquide ». Le poisson prélève l’O₂ dissous dans l’eau. Il ne sépare pas les atomes des molécules d’eau. Dans l’air, on peut exprimer une proportion d’O₂ en pourcentage (%). Dans l’eau, on utilise ici des milligrammes d’O₂ par litre d’eau (mg/L).',
        conclude: 'Une baisse d’O₂ par rapport à l’état initial, et comparée à une enceinte témoin sans organisme, soutient l’idée d’un prélèvement d’O₂. On compare uniquement des valeurs exprimées dans la même unité et dans des conditions comparables.',
        terms: [
          { word: 'Dissous', definition: 'Réparti dans un liquide, sans former une phase séparée visible ; l’O₂ peut être dissous dans l’eau.' },
          { word: 'Témoin', definition: 'Montage de comparaison : ici la même enceinte, dans les mêmes conditions, sans l’organisme étudié.' },
          { word: 'mg/L', definition: 'Milligramme par litre : unité utilisée ici pour la masse de dioxygène dissous dans un litre d’eau.' }
        ]
      },
      {
        title: 'Rechercher le dioxyde de carbone',
        question: 'Un gaz invisible peut-il rendre un liquide trouble ?',
        exerciseId: 'd6',
        observe: 'L’eau de chaux est une solution qui peut devenir trouble en présence d’une quantité suffisante de CO₂. Dans le laboratoire virtuel, la mise en contact avec le CO₂ recueilli provoque ce trouble.',
        interpret: 'Le trouble est l’apparition de fines particules qui rendent la solution moins transparente. Il sert ici d’indice de la présence de CO₂. Si la solution reste limpide, il peut simplement y avoir trop peu de CO₂ ou un contact insuffisant.',
        conclude: 'L’eau de chaux troublée met en évidence du CO₂ dans les conditions du test. Une eau de chaux limpide ne prouve pas l’absence absolue de CO₂. Pour attribuer un rejet à l’organisme, on compare avec le témoin.',
        terms: [
          { word: 'Eau de chaux', definition: 'Solution utilisée pour rechercher le CO₂ : elle peut se troubler lorsqu’elle en reçoit suffisamment.' },
          { word: 'Limpide', definition: 'Transparent, sans trouble visible.' }
        ]
      },
      {
        title: 'Les plantes respirent aussi',
        question: 'Une plante posée près de la fenêtre cesse-t-elle de respirer quand le soleil se lève ?',
        exerciseId: 'd4',
        observe: 'Dans l’obscurité, une plante terrestre ou une élodée prélève de l’O₂ et rejette du CO₂. À la lumière, ses échanges peuvent être différents.',
        interpret: 'La photosynthèse est un processus qui, à la lumière, permet aux parties vertes de fabriquer de la matière organique en utilisant notamment du CO₂ et de l’eau ; elle libère de l’O₂. Les plantes respirent le jour et la nuit. À la lumière, la photosynthèse peut masquer les effets de la respiration sur les mesures.',
        conclude: 'Pour étudier séparément la respiration d’une plante, on la place dans l’obscurité. On précise toujours les conditions avant de conclure. Le résultat d’une simulation illustre un raisonnement ; il ne remplace pas une expérience réelle.',
        terms: [
          { word: 'Photosynthèse', definition: 'À la lumière, fabrication de matière organique par les parties vertes de nombreux végétaux, avec utilisation de CO₂ et d’eau et libération d’O₂.' },
          { word: 'État initial / final', definition: 'Situation au début / à la fin d’une expérience, à comparer pour repérer une évolution.' }
        ]
      }
    ],
    essentials: [
      'La respiration étudiée prélève de l’O₂ et rejette du CO₂.',
      'L’air expiré contient encore de l’O₂.',
      'Le poisson prélève l’O₂ dissous dans l’eau.',
      'L’oxymètre mesure l’O₂ ; l’eau de chaux peut révéler du CO₂.',
      'Les plantes respirent jour et nuit. L’obscurité évite que la photosynthèse masque la respiration.',
      'Toujours préciser les conditions, les unités et la comparaison avec un témoin.'
    ]
  },
  {
    id: 'e',
    title: 'Suivre le trajet du dioxygène',
    subtitle: 'Poumons, trachées, stomates et branchies',
    icon: '🫁',
    question: 'Un poisson, un criquet et toi : utilisez-vous le même chemin pour recevoir du dioxygène ?',
    intro: 'Un organe est une partie du corps qui remplit un rôle. Une surface d’échange est une zone où des substances passent d’un milieu à un autre. Selon l’organisme, les échanges respiratoires utilisent des poumons, un réseau de conduits, des pores ou des branchies. Suis les symboles O₂ et CO₂ : les couleurs ne sont que des repères supplémentaires.',
    lessons: [
      {
        title: 'Chez l’être humain : jusqu’aux alvéoles',
        question: 'Quel chemin suit l’air quand tu prends une grande inspiration ?',
        exerciseId: 'e1',
        observe: 'L’air entre par le nez ou la bouche. Il traverse le pharynx, passage au fond de la gorge, puis le larynx, situé à l’entrée de la trachée. La trachée est un conduit qui se divise en bronches. Celles-ci se ramifient en bronchioles, des conduits plus fins. L’air atteint enfin les alvéoles, de très petites poches dans les poumons.',
        interpret: 'Les capillaires sont de très fins vaisseaux sanguins autour des alvéoles. L’O₂ passe de l’air alvéolaire vers le sang. Le CO₂ passe du sang vers l’air alvéolaire, puis est expiré. Les parois très fines facilitent le passage des gaz. Les nombreuses alvéoles offrent une grande surface d’échange et leurs nombreux capillaires renouvellent le sang au contact de l’air.',
        conclude: 'On parle de respiration pulmonaire car les échanges se réalisent dans les poumons. L’air reste dans les conduits et les alvéoles : ce sont les gaz qui traversent la fine séparation entre l’air et le sang.',
        terms: [
          { word: 'Pharynx', definition: 'Passage situé au fond de la gorge, traversé par l’air avant le larynx.' },
          { word: 'Larynx', definition: 'Partie de l’appareil respiratoire située entre le pharynx et la trachée ; elle contient les cordes vocales.' },
          { word: 'Trachée', definition: 'Conduit qui conduit l’air du larynx vers les bronches.' },
          { word: 'Bronches / bronchioles', definition: 'Conduits ramifiés qui conduisent l’air dans les poumons ; les bronchioles sont les plus fins.' },
          { word: 'Alvéole pulmonaire', definition: 'Très petite poche d’air des poumons, au contact de capillaires, où s’effectuent les échanges gazeux.' },
          { word: 'Capillaire', definition: 'Très fin vaisseau sanguin à travers la paroi duquel des échanges sont possibles.' },
          { word: 'Respiration pulmonaire', definition: 'Respiration utilisant des poumons comme organes d’échanges avec le milieu.' }
        ]
      },
      {
        title: 'Chez le criquet : un réseau jusqu’aux tissus',
        question: 'Un criquet respire-t-il avec des poumons comme toi ?',
        exerciseId: 'e4',
        observe: 'Les stigmates sont de petites ouvertures sur le corps du criquet. Ils débouchent sur des trachées, des conduits d’air ramifiés. Les trachéoles sont leurs ramifications les plus fines. Elles atteignent les tissus, des ensembles de cellules.',
        interpret: 'L’air entre par les stigmates et circule dans le réseau. L’O₂ gagne directement les tissus par les trachéoles. Le CO₂ suit le trajet inverse vers l’extérieur. Chez le criquet, le réseau trachéen apporte ainsi l’O₂ aux organes sans transport par le sang comme chez l’être humain.',
        conclude: 'On parle de respiration trachéenne. Attention au vocabulaire : le réseau de trachées d’un insecte et la trachée humaine ont des organisations différentes.',
        terms: [
          { word: 'Stigmate', definition: 'Ouverture respiratoire à la surface du corps d’un insecte.' },
          { word: 'Trachées de l’insecte', definition: 'Réseau de conduits qui apporte l’air à l’intérieur du corps d’un insecte.' },
          { word: 'Trachéole', definition: 'Très fine ramification d’une trachée d’insecte, au voisinage des cellules.' },
          { word: 'Tissu', definition: 'Ensemble organisé de cellules qui participent à une même fonction.' },
          { word: 'Respiration trachéenne', definition: 'Respiration utilisant un réseau de trachées pour acheminer les gaz jusqu’aux tissus.' }
        ]
      },
      {
        title: 'Chez une plante terrestre : les stomates',
        question: 'Comment une feuille échange-t-elle des gaz alors qu’elle n’a ni nez ni bouche ?',
        exerciseId: 'e5',
        observe: 'Un stomate est un petit pore, c’est-à-dire une ouverture, dans l’épiderme d’un organe végétal comme la feuille. Deux cellules entourent cette ouverture. Les feuilles en portent souvent davantage sur leur face inférieure.',
        interpret: 'Les stomates permettent des échanges de gaz entre l’air et l’intérieur de la feuille. Pour la respiration, de l’O₂ entre et du CO₂ sort. À la lumière, la photosynthèse utilise du CO₂ et produit de l’O₂. Ces deux processus peuvent avoir lieu en même temps.',
        conclude: 'Un stomate n’est pas un poumon. C’est une structure d’échange. Les plantes respirent jour et nuit ; elles ne font la photosynthèse que lorsque les conditions, dont la lumière, le permettent. D’autres parties de la plante réalisent aussi des échanges gazeux.',
        terms: [
          { word: 'Stomate', definition: 'Petit pore de l’épiderme végétal permettant les échanges gazeux avec le milieu.' },
          { word: 'Pore', definition: 'Petite ouverture permettant le passage de substances.' }
        ]
      },
      {
        title: 'Chez le poisson : l’eau passe sur les branchies',
        question: 'Pourquoi vois-tu la bouche et les côtés de la tête d’un poisson bouger ?',
        exerciseId: 'e6',
        observe: 'Les branchies sont des organes d’échange avec l’eau. Chez le poisson osseux représenté, l’eau entre par la bouche, passe sur les branchies et ressort par les ouvertures situées sous les opercules. Les opercules sont les plaques qui protègent les branchies.',
        interpret: 'Les branchies possèdent une grande surface avec des parois fines et de nombreux vaisseaux sanguins. L’O₂ dissous passe de l’eau vers le sang. Le CO₂ passe du sang vers l’eau. Le poisson utilise l’O₂ déjà dissous ; il ne transforme pas les molécules d’eau en dioxygène.',
        conclude: 'On parle de respiration branchiale. La circulation de l’eau renouvelle le milieu au contact des branchies. L’O₂ rejoint le sang, qui le transporte vers les organes.',
        terms: [
          { word: 'Branchies', definition: 'Organes réalisant les échanges de gaz entre l’eau et l’organisme.' },
          { word: 'Opercule', definition: 'Plaque protectrice située sur le côté de la tête de nombreux poissons osseux, au-dessus des branchies.' },
          { word: 'Respiration branchiale', definition: 'Respiration utilisant des branchies pour les échanges avec l’eau.' },
          { word: 'Surface d’échange', definition: 'Zone où des substances passent d’un milieu à un autre, par exemple de l’air vers le sang.' }
        ]
      }
    ],
    essentials: [
      'Humain : air → nez ou bouche → pharynx → larynx → trachée → bronches → bronchioles → alvéoles → O₂ vers le sang.',
      'Aux alvéoles : O₂ de l’air vers le sang ; CO₂ du sang vers l’air.',
      'Criquet : air → stigmates → trachées → trachéoles → O₂ vers les tissus.',
      'Plante terrestre : les stomates permettent des échanges de gaz avec l’air.',
      'Poisson osseux : eau → bouche → branchies → sortie sous les opercules ; O₂ dissous vers le sang.',
      'Des parois fines et une grande surface facilitent les échanges.'
    ]
  }
];

export const glossary = [...new Map(modules.flatMap(module => module.lessons.flatMap(lesson => lesson.terms)).map(term => [term.word, term])).values()].sort((a, b) => a.word.localeCompare(b.word, 'fr'));

export const flashcards = [
  { front: 'Qu’est-ce qu’un milieu naturel ?', back: 'Un lieu comprenant des êtres vivants et des conditions physiques : eau, température, lumière…' },
  { front: 'Une mare est-elle un milieu terrestre ?', back: 'Non. C’est un milieu aquatique, même si elle est petite et peu profonde.' },
  { front: 'La lumière est-elle une matière solide, liquide ou gazeuse ?', back: 'Non. La lumière est une forme d’énergie. Ces états de la matière ne la décrivent pas.' },
  { front: 'Quel appareil mesure la teneur en dioxygène ?', back: 'L’oxymètre. Dans l’air on utilise ici des %, dans l’eau des mg/L.' },
  { front: 'Quatre grandes fonctions du vivant ?', back: 'Nutrition, respiration, croissance et reproduction. Elles ne sont pas toutes visibles au même moment.' },
  { front: 'Pourquoi les animaux descendent-ils dans le Berlèse ?', back: 'Certains fuient le haut de l’échantillon devenu plus chaud et plus sec.' },
  { front: 'À quoi sert le tamis du Berlèse ?', back: 'Il porte l’échantillon, retient les gros débris et laisse passer les petits animaux.' },
  { front: 'Quelle est l’unité de base du vivant ?', back: 'La cellule. Certains êtres vivants n’en ont qu’une ; d’autres en ont de nombreuses.' },
  { front: 'Quelles structures sont communes aux cellules de joue et d’oignon étudiées ?', back: 'Une membrane, du cytoplasme et un noyau. Attention : toutes les cellules du vivant n’ont pas de noyau.' },
  { front: 'Deux structures de la cellule végétale présentée ?', back: 'Une paroi à l’extérieur de la membrane et une grande vacuole.' },
  { front: 'Faut-il dessiner des chloroplastes dans l’épiderme du bulbe d’oignon ?', back: 'Non, pas dans la préparation habituelle présentée ici. Toutes les cellules végétales n’ont pas de chloroplastes.' },
  { front: 'Paramécie, amibe, euglène : une cellule ou plusieurs ?', back: 'Une seule cellule chacune : ce sont des organismes unicellulaires.' },
  { front: 'À plus fort grossissement, voit-on plus de cellules ?', back: 'On observe une zone plus petite : les cellules paraissent plus grandes mais on en voit moins à la fois.' },
  { front: 'Quels échanges met-on en évidence lors de la respiration ?', back: 'Un prélèvement de dioxygène O₂ et un rejet de dioxyde de carbone CO₂.' },
  { front: 'L’air expiré contient-il encore de l’O₂ ?', back: 'Oui. Il en contient moins que l’air inspiré, mais il n’en est pas dépourvu.' },
  { front: 'D’où vient l’O₂ prélevé par un poisson ?', back: 'Il est dissous dans l’eau. Le poisson ne décompose pas les molécules d’eau.' },
  { front: 'Pourquoi étudier la respiration d’une plante dans l’obscurité ?', back: 'Pour éviter que la photosynthèse masque les effets de la respiration. La plante respire jour et nuit.' },
  { front: 'Que signifie une eau de chaux troublée ?', back: 'Une quantité suffisante de CO₂ a été mise en contact avec elle dans les conditions du test.' },
  { front: 'Une eau de chaux limpide prouve-t-elle l’absence totale de CO₂ ?', back: 'Non. La quantité ou la durée de contact peut être insuffisante pour produire un trouble visible.' },
  { front: 'Quel est le rôle du montage témoin ?', back: 'Il permet de comparer les résultats avec les mêmes conditions sans l’organisme étudié.' },
  { front: 'Dans quel sens passent les gaz à travers une alvéole ?', back: 'O₂ : air alvéolaire → sang. CO₂ : sang → air alvéolaire.' },
  { front: 'Pourquoi les alvéoles sont-elles efficaces pour les échanges ?', back: 'Elles sont nombreuses, offrent une grande surface, ont des parois fines et sont entourées de nombreux capillaires.' },
  { front: 'Quel trajet suit l’O₂ chez le criquet ?', back: 'Air extérieur → stigmates → trachées → trachéoles → tissus. Le réseau apporte directement l’O₂ aux cellules.' },
  { front: 'Qu’est-ce qu’un stomate ?', back: 'Un petit pore de l’épiderme végétal permettant les échanges gazeux, notamment sur les feuilles.' },
  { front: 'Quel trajet suit l’eau chez le poisson osseux représenté ?', back: 'Entrée par la bouche → passage sur les branchies → sortie sous les opercules.' },
  { front: 'Une simulation est-elle une mesure réelle ?', back: 'Non. C’est un modèle pédagogique. Les valeurs illustratives servent à comprendre et à raisonner.' }
];
