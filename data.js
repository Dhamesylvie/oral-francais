const data = {
    texts: [
    {
        id: 'ponge_le_pain',
        title: 'Le Pain',
        author: 'Francis Ponge',
        questions: [
             { id: 'pain_q1', type: 'QCM', question: 'Quel est le recueil dans lequel figure le poème "Le Pain" ?', options: ["Fleurs et Ronces", "Les Armes miraculeuses", "Le Parti pris des choses", "La Rage de l\'expression"], answer: [2], explanation: '"Le Pain" se trouve dans le recueil "Le Parti pris des choses", écrit en 1940 et publié en 1942.' },
             { id: 'pain_q2', type: 'VF', question: 'Le poème "Le Pain" est écrit en vers rimés.', answer: 'Faux', explanation: 'Le poème est écrit en prose poétique.' },
             { id: 'pain_q3', type: 'QCM', question: 'La fin du poème, "Mais brisons-la !", est une invitation à :', options: ["Respecter le pain comme un objet sacré.", "Ne plus jamais gaspiller de pain.", "Manger le pain et cesser de l\'idéaliser.", "Créer des œuvres d\'art à partir du pain."], answer: [2], explanation: 'L\'impératif final invite à revenir à la fonction première du pain : être mangé, mettant fin à l\'analyse et l\'idéalisation.' },
             { id: 'pain_q4', type: 'VF', question: 'Ponge idéalise le pain et en fait un symbole de perfection.', answer: 'Faux', explanation: 'Ponge cherche à décrire le pain objectivement, dans sa matérialité, avec ses qualités et ses défauts perçus ("mollesse ignoble"), sans idéalisation excessive.' },
             { id: 'pain_q5', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait ci-dessous, quelle figure de style est principalement utilisée pour décrire la surface du pain ?', extract: "La surface du pain est merveilleuse d\'abord à cause de cette impression quasi panoramique qu\'elle donne : comme si l\'on avait à sa disposition sous la main les Alpes, le Taurus ou la Cordillère des Andes.", options: ["Une métaphore", "Une comparaison", "Une personnification", "Une antithèse"], answer: [1], explanation: 'C\'est une comparaison. On le voit avec les mots  "comme si" qui introduit une comparaison explicite entre la surface du pain et des chaînes de montagnes.' },
             { id: 'pain_q6', type: 'VF', question: 'L\'expression "mollesse ignoble sous-jacente" décrit la mie du pain de manière péjorative.', answer: 'Vrai', explanation: 'L\'adjectif "ignoble" qualifie péjorativement la "mollesse" de la mie, contrastant avec l\'éloge préalable de la croûte.' },
             { id: 'pain_q7', type: 'QCM', question: 'En quelle année a été publié le recueil "Le Parti pris des choses" ?', options: ["1942", "1742"], answer: [0], explanation: 'Le recueil "Le Parti pris des choses" a été publié en 1942 et écrit en 1940.' },
             { id: 'pain_q8', type: 'QCM', question: 'Le titre du poème "Le Pain" fait penser à :', options: ["Une recette de cuisine", "Un article de dictionnaire"], answer: [1], explanation: 'Le titre évoque un article de dictionnaire : l\'auteur en donne une définition et une description organisée, commençant par la surface (la croûte).' },
             { id: 'pain_q9', type: 'QCM', question: 'L\'adjectif mélioratif "merveilleuse" est-il étonnant pour qualifier la croûte du pain ?', options: ["Oui, car la \"merveille\" désigne quelque chose d\'extraordinaire, or le pain est banal.", "Non, l\'adjectif est parfaitement adapté à cet objet quotidien."], answer: [0], explanation: 'L\'adjectif est surprenant car il élève un objet banal au rang d\'extraordinaire, montrant la volonté du poète de transformer notre regard.' },
             { id: 'pain_q10', type: 'QCM', question: 'Que montrent les connecteurs logiques ("ainsi", "donc", "d\'abord", "et", "dès lors") utilisés dans le poème ?', options: ["Rien de particulier", "La volonté du poète d'être précis et d'organiser sa description.", "Une surenchère d'arguments."], answer: [1], explanation: 'Ces connecteurs structurent la description et montrent l\'attention aux détails et la volonté de précision du poète, comme dans une démonstration.' },
             { id: 'pain_q11', type: 'QCM', question: 'Qu\'est-ce qu\'une cosmogonie ?', options: ["L\'étude scientifique de l\'origine de l\'univers.", "Un récit mythologique expliquant la formation du Monde."], answer: [1], explanation: 'Une cosmogonie est un récit mythologique sur la création du Monde (du grec cosmo- "monde" et gon- "engendrer").' },
             { id: 'pain_q12', type: 'QCM', question: 'Qu\'est-ce qui ressort de l\'expression "la masse ... fut glissée pour nous dans le four stellaire" ?', options: ["Le complément d'agent n'est pas nommé.", "Le four est réduit à sa fonction stellaire."], answer: [0], explanation: 'L\'absence de complément d\'agent (on ne sait pas QUI l\'a glissée) donne une dimension mystérieuse, voire divine, à l\'acte créateur ("pour nous").' },
             { id: 'pain_q13', type: 'QCM', question: 'L\'expression "la masse ... fut glissée pour nous dans le four stellaire" évoque une :', options: ["Gnose", "Genèse"], answer: [1], explanation: 'Cela évoque une Genèse (création), ici celle du pain comparée à celle du monde. L\'absence d\'agent suggère une origine mystérieuse ou divine.' },
             { id: 'pain_q14', type: 'QCM', question: 'À quoi la lumière qui "couche ses feux" sur la croûte fait-elle penser ?', options: ["La lumière d\'un feu de bois", "La lumière étudiée des tableaux ou d\'un coucher de soleil", "Simplement à la cuisson"], answer: [1], explanation: 'L\'expression "couche ses feux avec application" évoque une lumière travaillée, artistique, comme celle d\'un peintre ou la beauté poétique d\'un coucher de soleil, donnant une dimension esthétique à la croûte.' },
             { id: 'pain_q15', type: 'QCM', question: 'Pourquoi utiliser un tiret dans l\'extrait : "...couche ses feux, - sans un regard pour la mollesse ignoble sous-jacente" ?', options: ["Pour faire une liaison", "C'est une erreur", "Pour marquer une rupture et introduire un contraste."], answer: [2], explanation: 'Le tiret marque une rupture. Après l\'éloge de la croûte, il introduit brutalement la critique de la mie ("mollesse ignoble"), créant un effet de chute dans le paragraphe.' },
             { id: 'pain_q16', type: 'QCM', question: 'Pourquoi utiliser des métaphores et comparaisons de la nature pour décrire la mie ("éponges", "feuilles ou fleurs") ?', options: ["Pour parler pour ne rien dire", "Pour décrire de façon poétique la texture de la mie et son vieillissement.", "Par manque d\'idées."], answer: [1], explanation: 'Ces images servent à décrire poétiquement la structure alvéolée de la mie, puis son processus de vieillissement (rassissement), comparé au flétrissement végétal.' },
             { id: 'pain_q17', type: 'QCM', question: 'À quoi font allusion les verbes "rassit", "se détachent" et l\'adjectif "friable" en parlant du pain ?', options: ["À la friture", "À la frigidité", "Au processus de vieillissement, voire à une forme de mort."], answer: [2], explanation: 'Ces termes décrivent le processus de rassissement du pain, qui peut être vu comme une image du vieillissement et de la dégradation, faisant écho à la finitude après la création.' },
             { id: 'pain_q18', type: 'QCM', question: 'Que sont les points de suspension (...) et à quoi peuvent-ils servir dans un texte poétique ?', options: ["Des signes de ponctiation pour faciliter la lecture", "Une figure de style (aposiopèse) suggérant l\'inexprimé ou une interruption.", "Une simple pause."], answer: [1], explanation: 'Les points de suspension forment une figure de style appelée aposiopèse. Ils marquent une interruption, laissant une idée sous-entendue (ici, potentiellement la mort, la destruction, ou simplement la suite logique non dite).' },
             { id: 'pain_q19', type: 'QCM', question: 'Que peut signifier principalement l\'impératif "Brisons-la" à la fin ?', options: ["Qu'il faut terminer le poème et manger le pain.", "Que c'est une référence à la Cène biblique.", "Qu\'il faut tout casser."], answer: [0], explanation: 'Principalement, il signifie qu\'il faut cesser l\'analyse et revenir à l\'usage concret : manger le pain ("briser la croûte"). L\'allusion à la Cène (réponse b) est une interprétation possible mais secondaire dans le contexte direct du poème de Ponge.' },
             { id: 'pain_q20', type: 'QCM', question: 'Quelle figure de style principale est l\'expression "Mollesse ignoble sous-jacente" pour désigner la mie ?', options: ["Anamnèse", "Métaphore", "Oxymore"], answer: [1], explanation: 'C\'est une métaphore : la mie est comparée à une "mollesse ignoble sous-jacente". L\'association des termes "mollesse" et "ignoble" crée un effet péjoratif fort.' },
             { id: 'pain_q21', type: 'VF', question: 'AFFIRMATION : Cette métaphore ("mollesse ignoble") est une référence à la mie qui est qualifiée par un adjectif péjoratif.', answer: 'Vrai', explanation: 'Oui, "ignoble" est un adjectif péjoratif qui qualifie la "mollesse" (la mie), créant une image négative.' },
             { id: 'pain_q22', type: 'VF', question: 'AFFIRMATION : Dans l\'utilisation du verbe "déguster", on peut voir une invitation à apprécier le poème sensitivement plutôt qu\'à l\'analyser froidement.', answer: 'Vrai', explanation: 'Le choix de "déguster" peut suggérer une approche plus sensorielle et appréciative du langage poétique, similaire à la dégustation d\'un aliment.' },
             { id: 'pain_q23', type: 'VF', question: 'AFFIRMATION : La mie est désignée par une métaphore valorisante "mollesse ignoble sous-jacente".', answer: 'Faux', explanation: 'La métaphore utilise l\'adjectif péjoratif "ignoble", elle est donc dévalorisante pour la mie.' },
             { id: 'pain_q24', type: 'VF', question: 'AFFIRMATION : la métaphore "mollesse ignoble sous-jacente" est une référence à la mie', answer: 'Vrai', explanation: 'Cette métaphore est une référence à la mie qui est qualifié par un adjectif péjoratif. Cet ajout agit comme une chute au paragraphe.' },
             { id: 'pain_q25', type: 'VF', question: 'AFFIRMATION : La cuisson du pain est rapprochée d\'une cosmogonie, puis le poète s\'intéresse à l\'intérieur : la mie.', answer: 'Vrai', explanation: 'C\'est exact, le poème passe de la création (cosmogonie) de la croûte à l\'exploration de l\'intérieur (la mie).' },
             { id: 'pain_q26', type: 'VF', question: 'AFFIRMATION : La mie de pain est décrite de manière entièrement positive.', answer: 'Faux', explanation: 'La mie est d\'abord décrite négativement ("lâche et froid sous-sol", "mollesse ignoble"), puis associée à la nature ("éponges", "feuilles ou fleurs"), créant une vision ambivalente.' },
             { id: 'pain_q27', type: 'VF', question: 'AFFIRMATION : Dans "Le Pain", Ponge utilise un style d\'écriture simple et accessible à tous.', answer: 'Faux', explanation: 'Bien que le sujet (le pain) soit banal, le style de Ponge est recherché, utilisant des métaphores complexes, un vocabulaire précis et une syntaxe élaborée.' },
             { id: 'pain_q28', type: 'VF', question: 'AFFIRMATION : Le poète transforme le pain en objet poétique en décrivant le durcissement de la croûte ("dalles") et la lumière ("feux").', answer: 'Vrai', explanation: 'L\'utilisation de métaphores ("dalles") et la description poétique de la lumière ("couche ses feux") contribuent à élever le pain au rang d\'objet poétique.' },
             { id: 'pain_q29', type: 'VF', question: 'AFFIRMATION : L\'adjectif "panoramique" transforme le pain en un paysage à contempler.', answer: 'Vrai', explanation: 'Oui, "panoramique" évoque une vue large, un paysage, transformant ainsi la perception de la surface du pain.' },
             { id: 'pain_q30', type: 'VF', question: 'AFFIRMATION : Dans le texte, "panoramique" a potentiellement trois sens.', answer: 'Vrai', explanation: '1) Paysage (vue large). 2) Allusion à la peinture (style panoramique). 3) Jeu de mots possible avec la racine latine du mot "pain" ("panem").' },
             { id: 'pain_q31', type: 'VF', question: 'AFFIRMATION : L\'expression "Masse amorphe" est un pléonasme.', answer: 'Vrai', explanation: 'Un pléonasme (répétition d\'une idée) car "masse" implique souvent l\'absence de forme définie ("amorphe"). Cela insiste sur l\'état initial, indéfini, avant la création.' },
             { id: 'pain_q32', type: 'VF', question: 'AFFIRMATION : L\'expression "Four stellaire" est une personnification.', answer: 'Faux', explanation: 'C\'est une métaphore. Le four est comparé à un espace stellaire (étoilé), associant la création du pain à la création de l\'univers. Il n\'y a pas d\'action humaine attribuée au four.' },
             { id: 'pain_q33', type: 'VF', question: 'AFFIRMATION : Dans le dernier paragraphe, la conjonction "mais" introduit une idée de contradiction.', answer: 'Faux', explanation: 'Le "mais" ici marque une rupture, un changement de propos, une conclusion. Il ne contredit pas directement ce qui précède mais y met fin pour passer à l\'action.' },
             { id: 'pain_q34', type: 'VF', question: 'AFFIRMATION : La phrase "car le pain doit être dans notre bouche moins objet de respect que de consommation" utilise le participe passé.', answer: 'Faux', explanation: 'Le verbe principal est "doit être" (verbe devoir au présent + infinitif être). Il n\'y a pas de participe passé employé comme temps verbal principal ici. Le présent a une valeur de vérité générale ou de morale.' },
             { id: 'pain_q35', type: 'QCM_EXTRAIT', question: 'Quel est l\'effet principal de la comparaison dans cet extrait ?', extract: "La surface du pain est merveilleuse d\'abord à cause de cette impression quasi panoramique qu\'elle donne : comme si l\'on avait à sa disposition sous la main les Alpes, le Taurus ou la Cordillère des Andes.", options: ["Diminuer l\'importance du pain.", "Rendre le pain plus concret et réaliste.", "Exagérer les dimensions et l\'aspect du pain, le rendant grandiose.", "Créer une atmosphère mystérieuse."], answer: [2], explanation: 'En comparant la surface du pain à des montagnes célèbres, Ponge amplifie son importance et transforme un objet banal en un paysage impressionnant.' },
             { id: 'pain_q36', type: 'QCM_EXTRAIT', question: 'L\'utilisation du verbe "éructer" pour décrire la pâte en train de cuire est un exemple de :', extract: "Ainsi donc une masse amorphe en train d\'éructer fut glissée pour nous dans le four stellaire...", options: ["Une litote", "Une métaphore", "Une personnification", "Une allégorie"], answer: [2], explanation: 'La personnification attribue une action humaine (éructer) à la pâte non humaine, la rendant vivante.' },
             { id: 'pain_q37', type: 'QCM_EXTRAIT', question: 'Quel est l\'objectif principal de cette personnification ("éructer") ?', extract: "Ainsi donc une masse amorphe en train d\'éructer fut glissée pour nous dans le four stellaire...", options: ["Rendre le pain plus effrayant.", "Souligner le caractère vivant et dynamique de la cuisson.", "Simplifier la description.", "Ironiser sur la banalité du pain."], answer: [1], explanation: 'Le verbe "éructer" anime la pâte, soulignant la transformation dynamique et presque organique de la cuisson.' },
             { id: 'pain_q38', type: 'QCM_EXTRAIT', question: 'Que désignent "la masse amorphe en train d\'éructer" et quelles figures de style trouve-t-on principalement ?', extract: "Ainsi donc une masse amorphe en train d\'éructer fut glissée pour nous dans le four stellaire...", options: ["Métaphore / Personnification / Litote", "Métaphore / Allitération en \"r\" / Personnification"], answer: [1], explanation: 'C\'est une métaphore (désigne la pâte), l\'allitération en [r] peut mimer le son de la cuisson, et "éructer" est une personnification.' },
             { id: 'pain_q39', type: 'QCM_EXTRAIT', question: 'Pourquoi le poète utilise-t-il le participe présent "durcissant" ?', extract: "...où durcissant elle s\'est façonnée en vallées, crêtes, ondulations, crevasses...", options: ["Pour paraître intelligent", "Pour mettre l\'accent sur la durée et le processus en cours de la transformation."], answer: [1], explanation: 'Le participe présent "durcissant" insiste sur l\'action en train de se faire, sa continuité et sa durée pendant la métamorphose du pain.' },
             { id: 'pain_q40', type: 'QCM_EXTRAIT', question: 'Quel est l\'effet principal des comparaisons dans cet extrait ("sous-sol", "éponges", "sœurs siamoises") ?', extract: "Ce lâche et froid sous-sol que l\'on nomme la mie a son tissu pareil à celui des éponges : feuilles ou fleurs y sont comme des sœurs siamoises soudées par tous les coudes à la fois.", options: ["Clarifier la description de la mie.", "Rendre la mie plus appétissante.", "Créer un effet de surprise et d\'étrangeté par des associations inattendues.", "Simuler un discours scientifique."], answer: [2], explanation: 'Les rapprochements inattendus (mie/sous-sol, mie/éponges, alvéoles/sœurs siamoises) créent des images surprenantes qui renouvellent la perception de la mie.' },
             { id: 'pain_q41', type: 'QCM_EXTRAIT', question: 'L\'expression "sœurs siamoises soudées par tous les coudes à la fois" est principalement un exemple de :', extract: "...feuilles ou fleurs y sont comme des sœurs siamoises soudées par tous les coudes à la fois.", options: ["Une hyperbole", "Une anaphore", "Une antithèse", "Une allitération"], answer: [0], explanation: 'C\'est une hyperbole (exagération) pour décrire de manière imagée et frappante la façon dont les alvéoles de la mie sont interconnectées.' },
             { id: 'pain_q42', type: 'QCM_EXTRAIT', question: 'La structure "Mais brisons-la : car..." est un exemple de :', extract: "Mais brisons-la : car le pain doit être dans notre bouche moins objet de respect que de consommation.", options: ["Une antithèse", "Une injonction (ordre/conseil) suivie d\'une justification.", "Une métaphore filée", "Une litote"], answer: [1], explanation: 'La première partie ("Mais brisons-la") est une injonction impérative, la seconde (introduite par "car") en donne la raison.' },
             { id: 'pain_q43', type: 'QCM_EXTRAIT', question: 'Quel est l\'objectif principal de cette structure finale ("Mais brisons-la : car...") ?', extract: "Mais brisons-la : car le pain doit être dans notre bouche moins objet de respect que de consommation.", options: ["Accentuer le côté tragique.", "Donner une conclusion claire et pragmatique.", "Créer un effet de surprise.", "Mettre en avant la complexité."], answer: [1], explanation: 'Cette structure permet de conclure le poème de manière directe et affirmée, invitant à revenir à l\'usage concret du pain après l\'analyse poétique.' },
             { id: 'pain_q44', type: 'QCM_EXTRAIT', question: 'En quoi ce passage peut-il être vu comme une allégorie de la création poétique ?', extract: "Ce lâche et froid sous-sol que l\'on nomme la mie a son <b>tissu</b> pareil à celui des éponges : <b>feuilles</b> ou fleurs y sont comme des sœurs siamoises...", options: ["Les éponges lavent, les tissus habillent", "Le mot \"tissu\" (mie) partage son étymologie avec \"texte\" et \"feuilles\" peut renvoyer au papier."], answer: [1], explanation: 'Oui, "tissu" et "texte" ont la même racine latine ("textus"), et "feuilles" peut évoquer les feuilles de papier. Ponge jouerait sur les mots pour parler de l\'écriture en décrivant le pain. L\'allusion à son propre nom ("Ponge"/"éponge") est aussi une interprétation possible.' },
             { id: 'pain_q45', type: 'QCM_EXTRAIT', question: 'L\'utilisation du présent de vérité générale dans "le pain DOIT être..." permet principalement de :', extract: "car le pain doit être dans notre bouche moins objet de respect que de consommation.", options: ["Ancrer le texte dans le futur.", "Transformer la phrase en une sorte de morale ou de règle générale.", "Simplement décrire une action."], answer: [1], explanation: 'Le présent de vérité générale donne à l\'affirmation une portée universelle, comme une morale ou une conclusion définitive invitant le lecteur à agir (manger le pain) plutôt qu\'à seulement le contempler.' },
             { id: 'pain_q46', type: 'QCM', question: 'Qu\'est ce qu\'une allégorie?', options: ["Permet de parler d\'une notion abstraite aux moyens d\'éléments concrets", "Permet d\'éxagérer"], answer: [0], explanation: 'Le terme allégorie vient du mot grec allêgorein, qui signifie « parler par figures ». Une allégorie consiste à représenter une notion abstraite au moyen d\'éléments réels, concrets. Exemples : la colombe et le rameau représentent la paix.' }

        ]
    },
    {
        id: 'odg_preambule',
        title: 'Préambule de la Déclaration des Droits de la Femme et de la Citoyenne (DDFC)',
        author: 'Olympe de Gouges (ODG)',
        questions: [
            // --- Questions Générales et de Contexte ---
            { id: 'odg_preambule_q1', type: 'QCM', question: 'À qui ODG adresse-t-elle <b>principalement</b> ce Préambule de la DDFC ?', options: ["Au Roi Louis XVI", "À la Reine Marie-Antoinette", "À l\'Assemblée Nationale", "Aux femmes uniquement"], answer: [2], explanation: 'Bien qu\'une dédicace soit adressée à la Reine, le Préambule, comme la Déclaration qui suit, s\'adresse aux législateurs de l\'Assemblée Nationale pour réclamer l\'inscription des droits des femmes dans la Constitution.' },
            { id: 'odg_preambule_q2', type: 'VF', question: 'ODG a écrit la DDFC en 1791, en réaction à la Déclaration des Droits de l\'Homme et du Citoyen de 1789 qui excluait les femmes.', answer: 'Vrai', explanation: 'La DDFC est une réécriture critique et corrective de la DDHC de 1789, visant à inclure les femmes dans les droits proclamés.' },
            { id: 'odg_preambule_q3', type: 'QCM', question: 'Quel est l\'objectif principal de ce Préambule ?', options: ["Raconter la vie d\'ODG", "Critiquer la monarchie absolue", "Justifier la nécessité de déclarer les droits des femmes et présenter leur demande.", "Demander le droit de vote pour les hommes étrangers."], answer: [2], explanation: 'Le Préambule sert à légitimer la démarche d\'ODG et à exposer les raisons pour lesquelles une déclaration spécifique aux droits des femmes est indispensable.' },
            { id: 'odg_preambule_q4', type: 'VF', question: 'ODG considère que l\'ignorance, l\'oubli ou le mépris des droits de la femme sont les seules causes des malheurs publics.', answer: 'Vrai', explanation: 'C\'est l\'argument central avancé par ODG dans le Préambule pour justifier l\'urgence et la nécessité de cette déclaration.' },
            { id: 'odg_preambule_q5', type: 'QCM', question: 'Comment ODG qualifie-t-elle les droits de la femme qu\'elle veut exposer ?', options: ["Nouveaux et révolutionnaires", "Négociables et adaptables", "Naturels, inaliénables et sacrés", "Secondaires et complémentaires"], answer: [2], explanation: 'ODG reprend la terminologie de la DDHC pour affirmer que les droits des femmes possèdent la même légitimité universelle et fondamentale que ceux des hommes.' },

            // --- Questions sur le Vocabulaire et les Termes Clés ---
            { id: 'odg_preambule_q6', type: 'QCM', question: 'Que signifie le terme "inaliénable" utilisé par ODG ?', options: ["Qui peut être vendu", "Qui ne peut être retiré ou cédé", "Qui est spécifique aux étrangers", "Qui est temporaire"], answer: [1], explanation: '"Inaliénable" signifie qu\'un droit fait partie intégrante de la personne et ne peut lui être enlevé.' },
            { id: 'odg_preambule_q7', type: 'QCM', question: 'Dans l\'article 4, quand ODG parle de la "tyrannie perpétuelle" que l\'homme exerce sur la femme, que désigne-t-elle ?', options: ["Une loi spécifique récente", "Le système politique de la monarchie (despotisme)", "La domination masculine constante et historique dans tous les domaines.", "Les disputes conjugales"], answer: [2], explanation: 'Elle dénonce un système de domination masculin généralisé et ancré dans le temps, qui prive les femmes de leurs droits naturels.' },
            { id: 'odg_preambule_q8', type: 'VF', question: 'Le terme "décret" utilisé par ODG ("sous les auspices de l\'Être suprême") fait référence à une loi déjà votée par l\'Assemblée.', answer: 'Faux', explanation: 'Ici, "décret" a un sens plus proche de "décision solennelle" ou "volonté affirmée". ODG place sa déclaration sous une autorité morale supérieure (l\'Être suprême, concept déiste de l\'époque) pour lui donner plus de poids.' },

            // --- Questions sur la Structure et la Rhétorique ---
            { id: 'odg_preambule_q9', type: 'QCM', question: 'L\'accumulation "les mères, les filles, les sœurs" permet à ODG de :', options: ["Modifier clairement la DDHC", "Faire rentrer sa famille à l\'assemblée", "Montrer une certaine sororité (groupe, dimension familiale, communauté des femmes).", "Marquer l\'absence du mot épouse comme pour critiquer la soumission du mariage"], answer: [0,2,3], explanation: 'Accumulation "les mères, les filles, les sœurs" : modification de la DHC. Insiste sur la dimension familiale, montre une certaine sororité en mettant en avant une communauté de femmes. Absence du mot "épouse" qui aurait été attendue = critique implicite du mariage ?' },
            { id: 'odg_preambule_q10', type: 'QCM', question: 'De quelle figure de style s\'agit-il : "représentantes de la nation" ?', options: ["Métaphore", "Allégorie", "Personnification", "Périphrase"], answer: [3], explanation: 'Une périphrase consiste à exprimer en plusieurs mots ce qu\'on aurait pu dire en un seul terme. Insiste sur le rôle politique des femmes, rôle oublié dans la DHC de 1789. Plus loin, groupe nominal "des citoyennes" qui insiste aussi sur leur rôle politique.' },
            { id: 'odg_preambule_q11', type: 'VF', question: 'La périphrase "représentantes de la nation" et le groupe nominal "des citoyennes" insistent sur le rôle politique des femmes.', answer: 'Vrai', explanation: 'Ces éléments insistent sur le rôle politique des femmes, rôle oublié dans la DHC de 1789.' },
            { id: 'odg_preambule_q12', type: 'QCM', question: 'De quelles figures de style s\'agit-il : "l\'ignorance, l\'oubli ou le mépris ". ', options: ["Périphrase et Métaphore", "Gradation & Métaphore", "Accumulation & Gradation?", "Accumulation & Métaphore"], answer: [2], explanation: 'Cette gradation et accumulation et la réécriture des droits de la FEMME et non de l\'HOMME insiste sur la misogynie qui est désignée comme cause des malheurs de l\'Etat' },
            { id: 'odg_preambule_q13', type: 'QCM', question: 'Avec la gradation "l\'ignorance, l\'oubli ou le mépris " + l\'écriture DDFC et non DDHC: qu\'est-ce qui est désigné comme la cause des malheurs de l\'Etat', options: ["La croissance démographique", "La misogynie", "La femme", "La planète"], answer: [1], explanation: ' C\'est la misogynie qui est désignée comme la cause des malheurs de l\'État. Il est donc urgent de la corriger pour le bien public.' },
            { id: 'odg_preambule_q14', type: 'QCM', question: 'Pourquoi ODG utilise-t-elle l\'article défini "<b>LA</b> femme" ?', options: ["Pour lui donner une portée généralisante et désigner le sexe invisibilisé par le groupe nominal 'des Hommes'.", "Pour montrer que la femme est singulière et toujours mise en avant"], answer: [0], explanation: 'La : portée généralisante, désigne le sexe invisibilisé par le groupe nominal "des Hommes".' },
            { id: 'odg_preambule_q15', type: 'QCM', question: 'De quelles figures de style s\'agit-il et à quoi sert-elle ? "les droits naturels, inaliénables et sacrés"', options: ["Une énumération ternaire pour insister sur le caractère incontestable des droits de la femme", "Une énumération accumulative pour insister la faiblesse", "Une accumulation ternaire pour insister sur le caractère incontestable des droits de la femme"], answer: [0], explanation: 'Enumération ternaire qui insiste sur le caractère incontestable de ces droits. Comme les adjectifs "principes simples et incontestables" insistent aussi dessus' },
            { id: 'odg_preambule_q16', type: 'QCM', question: 'Dans le Préambule "Afin que" est répété 3 fois dans le texte. Quelle est cette figure de style et à quoi sert-elle ?', options: ["Une gradation pour faire monter la colère", "Une anaphore qui souligne les conséquences de cette déclaration pour les femmes.", "Une gradation qui souligne les conséquences de cette déclaration pour les femmes.", "Une anaphore qui souligne la colère des femmes."], answer: [1], explanation: 'Anaphore qui souligne les 3 conséquences de cette déclaration pour les femmes et la société. Donne aussi un caractère solennel, répétitif qui marque les esprits, pour qu\'on n\'oublie pas. Elle a donc une dimension argumentative.' },
            { id: 'odg_preambule_q17', type: 'QCM', question: '"constamment", "sans cesse", "à chaque instant" sont des ?', options: ["Groupes nominaux", "Compléments circonstanciels de temps", "Compléments circonstanciels de lieu", "Verbes pronominaux"], answer: [1], explanation: 'Se sont des Compléments circonstantiels de temps. Comme l\'anaphore "afin que" ils ont une dimension argumentative et ils marquent les esprits pour qu\'on oublie pas les conséquences de cette déclaration pour les femmes et la société' },
            { id: 'odg_preambule_q18', type: 'QCM', question: 'Avec les expressions "bonnes moeurs" + "le bonheur de tous", que veut montrer ODG ?', options: ["Les bienfaits de la DDHC", "Que l\'égalité Homme/femme sera bénéfique pour tous", "Que cette avancée sera uniquement bénéfique aux femmes."], answer: [1], explanation: ' l\'égalité hommes/femmes sera bénéfique à toute la société, pas seulement aux femmes, d\'où l\'importance d\'oeuvrer en sa faveur' },
            { id: 'odg_preambule_q19', type: 'VF', question: 'Pour donner une dimension solennelle et de la sacralité (=ref à dieu) ODG utilise le présent et l\'expression "sous les auspices de l\'Être suprême (=Dieu)"', answer: 'Vrai', explanation: ' Présent d\'énonciation "reconnaît et déclare" + "sous les auspices de l\'Être suprême (=Dieu)" : donne une solennité, sacralité à la déclaration.' },
            { id: 'odg_preambule_q20', type: 'QCM', question: '"reconnaît et déclare" de quel temps s\'agit\'il?', options: ["Du présent d\'énonciation", "Du présent de reconnexion", "Du présent de vérité générale"], answer: [0], explanation: 'Présent d\'énonciation "reconnaît et déclare" + "sous les auspices de l\'Être suprême (=Dieu)" : donne une solennité, sacralité à la déclaration.' },
            { id: 'odg_preambule_q21', type: 'QCM', question: 'Qui sont "les mères, les filles, les sœurs" mentionnées au début du Préambule ?', options: ["La famille d\'ODG uniquement", "Des figures allégoriques sans réalité", "Les représentantes de la nation (femmes) qui demandent à être constituées en Assemblée nationale.", "Des femmes nobles uniquement"], answer: [2], explanation: 'Par cette énumération, ODG désigne l\'ensemble des femmes françaises comme constituant une partie de la nation, légitimes à réclamer leurs droits et à participer à la vie politique.' },
            { id: 'odg_preambule_q22', type: 'VF', question: 'L\'utilisation de l\'expression "sexe supérieur en beauté comme en courage dans les souffrances maternelles" est une flatterie sans but argumentatif.', answer: 'Faux', explanation: 'C\'est un argument rhétorique. ODG valorise les femmes en soulignant leur beauté (stéréotype de l\'époque) mais surtout leur courage face aux douleurs de l\'enfantement, pour mieux revendiquer leur égalité en droits et leur participation politique. Cette périphrase dénonce les termes utilisés dans la DDHC. Périphrase qui fait référence à deux expressions : "le beau sexe" et "le sexe faible".' },
            { id: 'odg_preambule_q23', type: 'QCM', question: 'Quel est le registre principal (ton) employé par ODG dans ce Préambule ?', options: ["Comique et léger", "Lyrique et sentimental", "Solennel et revendicatif", "Didactique et neutre"], answer: [2], explanation: 'Le ton est grave, solennel (par l\'importance du sujet et le vocabulaire choisi) et clairement revendicatif (elle exige des droits).' },
            { id: 'odg_preambule_q24', type: 'VF', question: 'En affirmant que la déclaration des droits des femmes "tournera toujours au maintien de la Constitution", ODG cherche à rassurer les députés hommes.', answer: 'Vrai', explanation: 'Elle présente la reconnaissance des droits des femmes non comme une menace, mais comme une condition nécessaire à la stabilité politique, au bonheur de tous et au respect de la Constitution.' },

            // --- Questions basées sur des Extraits (QCM_EXTRAIT) ---
            { id: 'odg_preambule_q25', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait : "...les actes de pouvoir des femmes et ceux des hommes...", que symbolise la conjonction "et" ?', extract: "...les actes de pouvoir des femmes et ceux des hommes...", options: ["l\'égalité homme/femme", "L\'addition des genres ", "La beauté du moment"], answer: [0], explanation: 'Il y a peu de mentions des hommes. Ici, ils sont mentionnés pour montrer l\'égalité qui existe entre les deux sexes. "Et" symbolise cette égalité car la conjonction les met sur le même plan syntaxique.' },
            { id: 'odg_preambule_q26', type: 'QCM_EXTRAIT', question: 'Pourquoi ODG a utilisé la périphrase : "...le sexe supérieur en beauté comme en courage dans les souffrances maternelles..." pour désigner la femme?', extract: "... le sexe supérieur en beauté comme en courage dans les souffrances maternelles ...", options: ["Pour renverser les expressions \"le beau sexe\" et \"le sexe faible\" utilisées dans la DDHC", "Pour montrer que la femme est supérieure à l\'homme"], answer: [0], explanation: 'Périphrase qui fait référence à deux expressions : "le beau sexe" et "le sexe faible". ODG reprend la première et renverse la deuxième en montrant la force des femmes.' },
            { id: 'odg_preambule_q27', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait : "... Article premier. - La femme naît libre et demeure égale à l\'homme en droits. Les distinctions sociales ne peuvent être fondées que sur l\'utilité commune....", quel ton adopte ODG ?', extract: "...Article premier. - La femme naît libre et demeure égale à l\'homme en droits. Les distinctions sociales ne peuvent être fondées que sur l\'utilité commune....", options: ["Ironique", "Suspicieux", "Révérencieux", "Neutre"], answer: [0], explanation: 'Article 1 sonne comme une réécriture ironique de la DHC qui stipulait que "les Hommes nai[ssaient] libres et égaux en droits", ce qui est faux, puisque les femmes n\'ont pas les mêmes droits… ' },
            { id: 'odg_preambule_q28', type: 'QCM_EXTRAIT', question: 'Dans l\'article 2 : "...Article 2.- Le but de toute association politique est la conservation des droits naturels ...", que veut faire ODG ?', extract: "...Article 2.- Le but de toute association politique est la conservation des droits naturels et imprescriptibles de la femme et de l\'homme : ces droits sont la liberté, la propriété, la sûreté, et surtout la résistance à l\'oppression...", options: ["Insiste sur la dimension naturelle (et donc indiscutable) de ces droits par l'adjectif \"naturels\" et le verbe \"naît\".", "Insiste sur la dimension environnementale (et donc indiscutable) de ces droits par l'adjectif \"naturels\" et le verbe \"naît\"."], answer: [0], explanation: 'Ces droits sont naturels et donc indiscutables.' },
            { id: 'odg_preambule_q29', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait : "...la liberté, la propriété, la sûreté, et surtout la résistance à l\'oppression...", dans cette énumération ODG pour insister sur ces droits utilise 2 figures de style ?', extract: "...la liberté, la propriété, la sûreté, et surtout la résistance à l'oppression...", options: ["Allitération en [é] pour le dernier groupe de mots Assonance en [r]", "Assonance en [é] dans les trois premiers termes + allitération en [s] pour le dernier groupe de mots"], answer: [1], explanation: 'La répétition d\'une voyelle est une assonance / La répétition d\'une consonne est une allitération' },
            { id: 'odg_preambule_q30', type: 'QCM_EXTRAIT', question: 'Dans l\'énumération : "...la liberté, la propriété, la sûreté, et surtout la résistance à l\'oppression...", avec quoi résonne le dernier groupe "résistance à l\'oppression" ?', extract: "...la liberté, la propriété, la sûreté, et surtout la résistance à l'oppression...", options: ["L\'article 4 qui accuse les hommes de despotisme", "L\'article 4 qui accuse les hommes de négligence"], answer: [0], explanation: 'Despotisme = Régime politique dans lequel un seul homme gouverne de façon arbitraire et autoritaire. <br>Article 4. La liberté et la justice consistent à rendre tout ce qui appartient à autrui ; ainsi l\'exercice des droits naturels de la femme n\'a de bornes que la tyrannie perpétuelle que l\'homme lui oppose ; ces bornes doivent être réformées par les lois de la nature et de la raison.' },
            { id: 'odg_preambule_q31', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait : "...considérant que l\'ignorance, l\'oubli ou le mépris des droits de la femme, sont les seules causes des malheurs publics et de la corruption des gouvernements...", quelle figure de style est marquée par la succession "l\'ignorance, l\'oubli ou le mépris" ?', extract: "...considérant que l\'ignorance, l\'oubli ou le mépris des droits de la femme, sont les seules causes des malheurs publics...", options: ["Une métaphore", "Une gradation ou une accumulation", "Une personnification", "Une antithèse"], answer: [1], explanation: 'Cette énumération de termes négatifs (ignorance, oubli, mépris) constitue une accumulation (ou une légère gradation) qui insiste sur les causes multiples et graves de l\'oppression des femmes et de ses conséquences politiques.' },
            { id: 'odg_preambule_q32', type: 'QCM_EXTRAIT', question: 'Que signifie l\'affirmation que cette déclaration doit être "constamment présente à tous les membres du corps social" ?', extract: "...afin que cette déclaration, constamment présente à tous les membres du corps social, leur rappelle sans cesse leurs droits et leurs devoirs...", options: ["Qu\'elle doit être affichée dans tous les lieux publics.", "Qu\'elle doit être apprise par cœur par tous.", "Que les principes qu\'elle énonce doivent être connus de tous et servir de référence permanente.", "Qu\'elle doit être lue une fois par an."], answer: [2], explanation: 'ODG souhaite que les droits et devoirs (des femmes et des hommes) soient une référence constante pour tous les citoyens et pour le gouvernement, afin d\'assurer le respect des lois et la justice.' },
            { id: 'odg_preambule_q33', type: 'QCM_EXTRAIT', question: 'Quel est le but principal de la comparaison implicite entre les "actes du pouvoir des femmes" et "ceux du pouvoir des hommes" ?', extract: "...afin que les actes du pouvoir des femmes, et ceux du pouvoir des hommes pouvant être à chaque instant comparés avec le but de toute institution politique, en soient plus respectés...", options: ["Montrer la supériorité du pouvoir des femmes.", "Établir une compétition entre les sexes.", "Affirmer que les actions politiques des femmes doivent être évaluées selon les mêmes critères de justice et d\'utilité commune que celles des hommes.", "Suggérer que les femmes doivent avoir un pouvoir séparé."], answer: [2], explanation: 'ODG revendique que les actions politiques (réclamations, actes législatifs) émanant des femmes ou les concernant soient jugées à l\'aune des principes universels de justice et du bien commun, au même titre que celles initiées par les hommes.' },
            { id: 'odg_preambule_q34', type: 'QCM_EXTRAIT', question: 'Quelle est la fonction de la dernière partie de la phrase : "...que les réclamations des citoyennes, fondées désormais sur des principes simples et incontestables, tournent toujours au maintien de la Constitution, des bonnes mœurs, et au bonheur de tous." ?', extract: "...afin [...] que les réclamations des citoyennes [...] tournent toujours au maintien de la Constitution, des bonnes mœurs, et au bonheur de tous.", options: ["Exprimer un doute sur l\'efficacité des réclamations.", "Annoncer les articles de la déclaration qui vont suivre.", "Présenter les conséquences positives attendues de la reconnaissance des droits des femmes.", "Critiquer la Constitution existante."], answer: [2], explanation: 'Cette partie finale du Préambule expose les bénéfices collectifs attendus : la stabilité politique ("maintien de la Constitution"), l\'harmonie sociale ("bonnes mœurs") et le bien-être général ("bonheur de tous"), présentant ainsi la cause des femmes comme une cause universelle.' },
            { id: 'odg_preambule_q35', type: 'QCM', question: 'Par l\'expression "l\'Être suprême", ODG fait référence à :', options: ["Au Roi", "À Dieu (dans une perspective déiste)", "Au Peuple souverain", "À la Nature"], answer: [1], explanation: 'L\'invocation de l\'Être suprême est une référence déiste fréquente pendant la Révolution. Elle place la déclaration sous une autorité morale universelle, sans se référer à une religion spécifique.' }
        ]
    },
    {
        id: 'odg_postambule',
        title: 'Postambule de la Déclaration des Droits de la Femme et de la Citoyenne (DDFC)',
        author: 'Olympe de Gouges (ODG)',
        questions: [
            // --- Questions renumérotées et corrigées ---
            { id: 'odg_postambule_q1', type: 'QCM', question: 'Quel est l\'objectif des questions rhétoriques posées par Olympe de Gouges dans ce paragraphe ?', options: ["Encourager les femmes en explorant leurs peurs pour les rassurer", "Accuser directement les hommes de tous les maux", "Montrer l'indifférence des femmes face à leur situation"], answer: [0], explanation: 'Olympe de Gouges utilise ces questions rhétoriques pour encourager les femmes à dépasser leurs craintes et à se mobiliser dans leur combat pour l\'égalité. Elle cite toutes les peurs pour que les femmes dépassent ces peurs.' },
            { id: 'odg_postambule_q2', type: 'VF', question: 'La métaphore de la "branche" évoque le lien dépassé entre morale religieuse et politique après la Révolution.', answer: 'Vrai', explanation: 'La métaphore "cette morale longtemps accrochée aux <b>branches de la politique</b>" insiste sur une morale religieuse auparavant liée à la politique, mais jugée dépassée ("qui n\'est plus de saison") après la Révolution. La Révolution a mis fin aux liens entre le gouvernement et la religion chrétienne' },
            { id: 'odg_postambule_q3', type: 'VF', question: 'La réponse "tout" à la question "Femmes, qu\'y a-t-il de commun entre vous et nous ?" signifie que les <b>hommes et les femmes n\'ont rien en commun.</b>', answer: 'Faux', explanation: 'Le mot "tout" insiste sur l\'idée que femmes et hommes sont parfaitement identiques, et par conséquent, qu\'ils doivent avoir les mêmes droits.' },
            { id: 'odg_postambule_q4', type: 'QCM', question: 'Quel est l\'objectif principal du Postambule d\Olympe de Gouges ?', options: ["Inciter les femmes à prendre conscience et revendiquer leurs droits naturels.", "Demander l\'abolition définitive de la monarchie.", "Rappeler l\'autorité religieuse traditionnelle.", "Préserver l\'Ancien Régime."], answer: [0], explanation: 'Dans ce texte, Olympe de Gouges exhorte les femmes à se réveiller et à réclamer leurs droits naturels et légitimes.' },
            { id: 'odg_postambule_q5', type: 'VF', question: 'Olympe de Gouges affirme que la Révolution a amélioré la place des femmes dans la société.', answer: 'Faux', explanation: 'Olympe de Gouges constate amèrement que la Révolution a entraîné un mépris encore plus marqué vis-à-vis des femmes.' },
            { id: 'odg_postambule_q6', type: 'QCM', question: 'Par la métaphore du "tocsin de la raison", ODG se place dans la lignée de quel mouvement philosophique ?', options: ["Le Romantisme", "Les Lumières", "Le Surréalisme", "La Renaissance"], answer: [1], explanation: 'Le "tocsin de la raison" renvoie explicitement aux philosophes des Lumières diffusant la raison contre les préjugés.' },
            { id: 'odg_postambule_q7', type: 'VF', question: 'ODG considère la nature comme porteuse des lois égalitaires homme-femme.', answer: 'Vrai', explanation: 'La nature est, selon elle, un modèle d\'égalité naturelle que la société a corrompu.' }, 
            { id: 'odg_postambule_q8', type: 'QCM', question: 'ODG utilise l\'expression "homme esclave" pour illustrer quel paradoxe ?', options: ["L'homme est dominé par les femmes.", "L'homme libre opprime celles qui l'ont aidé à devenir libre.", "L'homme refuse d'être aidé par la femme.", "L'homme lutte contre la nature."], answer: [1], explanation: 'ODG montre ainsi que l\'homme libéré grâce au soutien des femmes devient injuste envers celles-ci dès qu\'il a récupéré sa liberté.' },
            { id: 'odg_postambule_q9', type: 'QCM', question: 'Pourquoi ODG évoque-t-elle l\'épisode biblique des noces de Cana ?', options: ["Pour anticiper une potentielle objection religieuse et la réfuter.", "Pour soutenir l\'autorité religieuse.", "Pour inviter à la célébration religieuse."], answer: [0], explanation: 'Elle anticipe et réplique à une potentielle objection religieuse en montrant l\'anachronisme de telles idées.' },
            { id: 'odg_postambule_q10', type: 'QCM', question: 'Quelle réponse ODG préconise-t-elle face à la question : "Femmes, qu\'y a-t-il de commun entre vous et nous ?"', options: ["Rien", "Que la différence physique", "Tout", "Peu de choses"], answer: [2], explanation: 'Elle préconise brièvement la réponse "Tout", qui affirme catégoriquement l\'identité fondamentale entre les deux sexes et légitime l\'égalité absolue.' },
            { id: 'odg_postambule_q11', type: 'VF', question: 'ODG appelle les femmes à dominer les hommes comme ces derniers les ont dominées auparavant.', answer: 'Faux', explanation: 'Elle appelle au contraire à une égalité réelle et non à une revanche ou supériorité féminine.' },
            { id: 'odg_postambule_q12', type: 'QCM', question: 'Selon ODG, quels sont les principaux moyens d\action pour les femmes ?', options: ["La violence physique contre les hommes.", "La soumission aux autorités masculines.", "La force de la raison, de la philosophie et l'union collective.", "La supériorité naturelle et l'isolement individuel."], answer: [2], explanation: 'ODG indique que les femmes doivent opposer la raison et la philosophie aux prétentions injustifiées de supériorité des hommes, en restant unies.' }, 
            { id: 'odg_postambule_q13', type: 'QCM', question: 'À quoi renvoie la polysémie (avoir plusieurs sens) du mot "affranchir" dans la conclusion du Postambule ?', options: ["Se soumettre volontairement aux hommes.", "Franchir les obstacles et se libérer des contraintes injustes.", "Ignorer les barrières sociales imposées aux femmes.", "Respecter toutes les barrières posées devant elles."], answer: [1], explanation: 'Le verbe "affranchir" a un double sens: franchir (dépasser les barrières physiques) et se libérer des contraintes sociales imposées injustement aux femmes.' },
            { id: 'odg_postambule_q14', type: 'QCM', question: 'En commençant par "Femme, réveille toi" que tente de faire ODG?', options: ["Elle apostrophe les femmes", "Elle dénigre les femmes.", "Elle plaint les femmes."], answer: [0], explanation: 'ODG interpelle les femmes pour les faire réagir, attirer leur attention.' },
            { id: 'odg_postambule_q15', type: 'QCM', question: 'Qu\'est-ce que le Tocsin et à quoi fait-il référence dans ce texte ?', options: ["Le Tocsin est une cloche utilisée en temps de guerre. Utilisé ici pour parler de la raison qui se répand partout.", "Il s\'agit d\'une trompette pour appeler les femmes comme en temps de guerre.", "Il s\'agit d\'une clochette à accrocher au cou des moutons pour rappeler les troupeaux."], answer: [0], explanation: 'Le tocsin est une cloche utilisée en temps de guerre. Il s\'agit ici de la cloche de la raison : ODG se place dans l\'héritage des Lumières. La raison se répand partout et la femme doit en profiter pour faire valoir ses droits.' },
            { id: 'odg_postambule_q17', type: 'QCM', question: 'Pourquoi ODG utilise la <b>Métaphore</b> du Tocsin (cloche utilisée en temps de guerre) pour désigner la raison?', options: ["Avec cette idée de cloche de la raison ODG se place dans l\'héritage des Lumières.", "Avec cette idée de cloche de la raison ODG se place dans l\'église."], answer: [0], explanation: 'Il s\'agit ici de la cloche de la raison : ODG se place dans l\'héritage des Lumières. La raison se répand partout et la femme doit en profiter pour faire valoir ses droits.' },
            { id: 'odg_postambule_q18', type: 'QCM', question: '"Le flambeau de la vérité", de quelle figure de style s\'agit-il ?', options: ["Métaphore", "Périphrase"], answer: [0], explanation: 'Métaphore qui renvoie à la lumière et donc au siècle des lumières qui ont dissipé les nuages de la sottise. <b>Métaphore</b> = Comparaison sans outil de comparaison (ex: "la route, long ruban") On compare à quelque chose de différent. / <b>Périphrase</b>: Expression en plusieurs mots pour décrire quelque chose de simple (ex: "Ile de Beauté" pour la Corse, "l\'astre du jour" pour le soleil).' },
            { id: 'odg_postambule_q19', type: 'QCM', question: 'Quel est l\'objectif de la question rhétorique <b>"Que vous reste-t-il?</b>', options: ["Rappeler qu\'il faut toujours chercher", "Montrer l\'impuissance des femmes après la révolution."], answer: [1], explanation: 'Elle montre l\'impuissance des femmes après la Révolution. Puis donne 2 réponses - 1re réponse : insiste sur l\'ingratitude des hommes - 2ème réponse : les femmes doivent réclamer encore se battre.' },
            { id: 'odg_postambule_q20', type: 'QCM', question: 'Quelle figure de style ODG utilise-t-elle avec l\'expression "le flambeau de la vérité" ?', options: ["Une personnification", "Une allitération", "Une métaphore", "Une hyperbole"], answer: [2], explanation: "Le 'flambeau de la vérité' constitue une métaphore lumineuse en lien avec l\'idée des Lumières, symbolisant l\'éclairage rationnel contre l\'ignorance." },
            { id: 'odg_postambule_q21', type: 'QCM', question: 'Que désigne cette périphrase "Le puissant empire de la nature"', options: ["Dieu", "Le roi", "L\'humanité"], answer: [2], explanation: 'La périphrase désigne l\'humanité qui valorise la nature par rapport à la civilisation (c\'est la société qui a perverti les règles de la nature, dans laquelle l\'égalité des sexes est inscrite).' },
            { id: 'odg_postambule_q22', type: 'VF', question: 'Une Question Rhétorique est une figure de style qui consiste à poser une question dont la réponse est connue ou suggérée par la personne qui formule l\'interrogation.', answer: 'Vrai', explanation: "On pose une fausse question pour tenir en haleine son auditoire." },
            { id: 'odg_postambule_q23', type: 'QCM', question: 'Quel est l\'objectif de la question rhétorique : "Quels sont les avantages que vous avez recueillis dans la Révolution ?" suivie de "Un mépris plus marqué..." ?', options: ["Rappeler que la Révolution aurait pu améliorer le sort des femmes, mais non...", "Que les avantages de la révolution ont été nombreux.", "Que les avantages ne servent à rien."], answer: [0], explanation: 'Cette 2e question rhétorique rappelle que la Révolution aurait pu améliorer le sort des femmes, mais cela n\'a pas été le cas comme le montre sa propre réponse.' },
            { id: 'odg_postambule_q24', type: 'QCM', question: 'Quelles sont les figures de style dans cette phrase "Un mépris plus marqué, un dédain plus signalé."?', options: ["Phrase verbale + comparaison", "Phrase nominale + parallélisme de construction."], answer: [1], explanation: 'La phrase est courte et donc d\'autant plus frappante. Avec le parallélisme de construction, ODG met en valeur un nouveau paradoxe : au lieu de les respecter davantage, les hommes les méprisent encore plus.' },
            { id: 'odg_postambule_q25', type: 'QCM', question: 'Avec ce parallélisme de construction : <b>"Un mépris plus marqué, un dédain plus signalé."</b>, quel paradoxe veut mettre en avant ODG ?', options: ["Au lieu de respecter davantage les femmes, les hommes les méprisent encore plus.", "Montrer que le mépris et le dédain vont faire avancer les choses."], answer: [0], explanation: 'Avec le parallélisme de construction, ODG met en valeur un nouveau paradoxe : au lieu de les respecter davantage, les hommes les méprisent encore plus. La phrase est courte et donc d\'autant plus frappante.' },
            { id: 'odg_postambule_q26', type: 'QCM', question: 'A quoi fait référence la périphrase <b>"Dans les siècles de corruption"</b>?"', options: ["L\'Ancien Régime", "Le siècle des lumières."], answer: [0], explanation: 'La périphrase "les siècles de corruptio" désigne l\'Ancien Régime qui était un monde corrompu, injustice et ignorance, ne respecte pas les règles de la nature qui sont bonnes.' },
            { id: 'odg_postambule_q27', type: 'VF', question: '"les sages décrets de la nature" est une périphrase.', answer: 'Faux', explanation: "C\'est une métaphore juridique qui rappelle que les droits de la femme sont inscrits dans la nature." },
            { id: 'odg_postambule_q28', type: 'VF', question: 'La métaphore de l\'aveuglement dans "quand cesserez-vous d\'être aveugles ?" appelle les femmes à la prise de conscience.', answer: 'Vrai', explanation: "Cette métaphore appelle les femmes à ouvrir les yeux sur leur oppression et leurs droits bafoués." },
            { id: 'odg_postambule_q29', type: 'QCM', question: 'Quel est l\'objectif de la question rhétorique <b>"Quels sont les avantages que vous avez recueillis dans la Révolution ?"</b> Un mépris plus marqué,', options: ["Rappeler que la Révolution aurait pu améliorer le sort des femmes, mais non...", "Que les avantages de la révolution ont été nombreux.", "Que les avantages ne servent à rien."], answer: [0], explanation: 'Cette 2e question rhétorique rappelle que la Révolution aurait pu améliorer le sort des femmes, mais cela n\'a pas été le cas comme le montre sa propre réponse.' },
            { id: 'odg_postambule_q30', type: 'QCM_EXTRAIT', question: 'Quelles figures de styles trouvent-on dans cet extrait?', extract: "Le puissant empire de la nature n\'est plus environné de préjugés, de fanatisme, de superstition et de mensonges.", options: ["Métaphore, Périphrase, Énumération", "Allitération, Périphrase, Négation", "Périphrase, Négation, Énumération."], answer: [2], explanation: 'Périphrase "Le puissant empire de la nature" = l\'humanité, Négation + Énumération : Par rapport au tocsin de la raison grâce à qui l\'humanité s\'est libérée de l\'obscurantisme que désignent les noms communs. La vérité règne. Toutes les conditions favorables sont donc réunies pour réclamer ses droits.' },
            { id: 'odg_postambule_q31', type: 'QCM_EXTRAIT', question: 'A quoi fait référence l\'énumération dans cet extrait?', extract: "Le puissant empire de la nature n\'est plus environné de préjugés, de fanatisme, de superstition et de mensonges.", options: ["Despotisme : Type de domination politique tyrannique où une seule personne exerce un pouvoir sans partage.", "Obscurantisme: attitude d\'opposition à la diffusion du savoir et de la connaissance"], answer: [1], explanation: 'Grâce au tocsin de la raison, l\'humanité s\'est libérée de l\'obscurantisme que désignent les noms communs. La vérité règne. Toutes les conditions favorables sont donc réunies pour réclamer ses droits. ' },
            { id: 'odg_postambule_q32', type: 'QCM_EXTRAIT', question: 'Que Montrent les 2 Métaphores de cet extrait ?', extract: "Le <b>flambeau de la vérité</b> a dissipé tous <b>les nuages de la sottise et de l\'usurpation</b>", options: ["Que les femmes veulent le pouvoir", "Que les conditions sont réunies pour permettre aux femmes de réclamer leurs droits"], answer: [1], explanation: 'La métaphore du "flambeau de la vérité" (Lumières, raison) dissipant "les nuages de la sottise et de l\'usurpation" (ignorance, pouvoir illégitime) signifie que la Révolution a créé les conditions intellectuelles pour que les femmes puissent comprendre leur situation et réclamer leurs droits légitimes.' },
            { id: 'odg_postambule_q33', type: 'QCM_EXTRAIT', question: 'Que trouve-t-on dans cette citation ?', extract: "L\'homme <b>esclave</b> a multiplié ses forces, a eu besoin de recourir aux tiennes pour <b>briser ses fers</b>. Devenu libre, il est devenu injuste envers sa compagne", options: ["Champ lexical de l\'esclavage & de la liberté / Métaphore", "Champ lexical de l\'esclavage & de la liberté / Parallélisme de construction"], answer: [1], explanation: 'Avant la révolution, les hommes étaient comme esclaves des nobles, des puissants. Pour se libérer (d\'où l\'image des fers brisés), ils ont eu recours aux forces des femmes ("des tiennes"). <br>Le parallélisme de construction souligne ainsi qu\'il est anormal que l\'homme soit ingrat envers la femme alors même qu\'elle l\'a aidé. La femme est restée esclave alors qu\'il s\'est libéré grâce à son aide… Elle met en lumière ce paradoxe. ' },
            { id: 'odg_postambule_q34', type: 'QCM_EXTRAIT', question: 'A quoi sert le parallélisme de construction dans cet extrait ?', extract: "L\'homme <b>esclave</b> a multiplié ses forces, a eu besoin de recourir aux <b>tiennes</b> pour <b>briser ses fers</b>. Devenu libre, il est devenu injuste envers sa compagne", options: ["Souligne que les hommes ne doivent rien aux femmes", "Qu\'il est anormal que l\'homme soit ingrat envers la femme"], answer: [1], explanation: 'Avant la révolution, les hommes étaient comme esclaves des nobles, des puissants. Pour se libérer (d\'où l\'image des fers brisées), ils ont eu recours aux forces des femmes ("des tiennes"). <br>Le parallélisme de construction souligne ainsi qu\'il est anormal que l\'homme soit ingrat envers la femme alors même qu\'elle l\'a aidé. La femme est restée esclave alors qu\'il s\'est libéré grâce à son aide… Elle met en lumière ce paradoxe. ' },
            { id: 'odg_postambule_q35', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, a qui fait référence l\'adjectif possessif "Tiennes" ?', extract: "L\'homme <b>esclave</b> a multiplié ses forces, a eu besoin de recourir aux <b>tiennes</b> pour <b>briser ses fers</b>. Devenu libre, il est devenu injuste envers sa compagne", options: ["Aux femmes", "Aux déesses"], answer: [0], explanation: 'Avant la révolution, les hommes étaient comme esclaves des nobles, des puissants. Pour se libérer (d\'où l\'image des fers brisées), ils ont eu recours aux forces des femmes ("des tiennes"). <br>Le parallélisme de construction souligne ainsi qu\'il est anormal que l\'homme soit ingrat envers la femme alors même qu\'elle l\'a aidé. La femme est restée esclave alors qu\'il s\'est libéré grâce à son aide… Elle met en lumière ce paradoxe. ' },
            { id: 'odg_postambule_q36', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, quelles sont les 3 figures de style qui relancent l\'attention des femmes?', extract: "Ô femmes ! femmes, quand cesserez-vous d\'être aveugles ? ", options: ["Apostrophe + exclamation / Question rhétorique / Métaphore de l\'aveuglement", "Apostrophe + exclamation / Question rhétorique / Comparaison de l\'aveuglement"], answer: [0], explanation: 'Ces figures de style relancent l\'attention des femmes. L\'<b>exclamation</b> a un ton de déploration (lamentation). <br>La <b>question est purement rhétorique</b> : elle n\'attend pas de réponse et vise simplement à faire réagir la femme. <br>La <b>métaphore</b> de l\'aveuglement appelle à une prise de conscience. Les femmes ne doivent plus se soumettre.' },
            { id: 'odg_postambule_q37', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, à quoi est comparé la métaphore de l\'aveuglement ?', extract: "Ô femmes ! femmes, <b>quand cesserez-vous d\'être aveugles</b> ? ", options: ["A l\'absence de prise de conscience des femmes", "A la loyauté des femmes"], answer: [0], explanation: 'La <b>métaphore</b> de l\'aveuglement appelle à une <b>prise de conscience</b>. Les femmes ne doivent plus se soumettre.' },
            { id: 'odg_postambule_q38', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, quelles sont les 3 figures de style ?', extract: "Dans les <b>siècles de corruption</b> vous <b>n</b>'avez régné <b>que</b> sur la faiblesse des hommes. Votre <b>empire</b> est détruit.", options: ["Métaphore, Négation restrictive / Présent de vérité générale & Métaphore de l\'empire.", "Périphrase, Négation restrictive / Présent de vérité générale & Métaphore de l\'empire."], answer: [1], explanation: '<b>Périphrase</b> "les siècles de corruption" = Ancien Régime qui était un monde corrompu, injustice et ignorance, ne respecte pas les règles de la nature qui sont bonnes.<br><b>Négation restrictive</b> les femmes avaient tout de même un pouvoir dans la sphère privée : "la faiblesse des hommes". <br> <b>Présent de vérité générale + Métaphore de l\'empire</b> : l\'empire se rapporte à la sphère privée dans laquelle la femme avait un peu de pouvoir mais elle a désormais tout perdu.' },
            { id: 'odg_postambule_q39', type: 'QCM_EXTRAIT', question: 'Dans cet extrait à quoi fait référence "votre empire" ?', extract: "Dans les <b>siècles de corruption</b> vous <b>n</b>'avez régné <b>que</b> sur la faiblesse des hommes. Votre <b>empire</b> est détruit.", options: ["A l\'ancien régime", "La sphère privée et familiale des femmes"], answer: [1], explanation: 'Dans la sphère privée elles avaient un semblant de pouvoir grâce à la faiblesse des hommes mais elles ont tout perdu.' },
            { id: 'odg_postambule_q40', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, il y a:', extract: "Que vous reste-t-il donc ? La conviction des injustices de l\'homme. La réclamation de votre patrimoine, fondée sur les sages décrets de la nature", options: ["Question Rhétorique / Phrase verbale", "Question Rhétorique / Phrase nominale"], answer: [1], explanation: '<b>Question rhétorique</b> qui montre l\'impuissance des femmes après la révolution.<br>Rpse 1 : Avec <b>une phrase nominale</b> frappante ODG insiste de nouveau sur l\'ingratitude des hommes.<br>Rpse 2: le mot "Réclamation" montre que ce qu\'il reste aux femmes c\'est leur combat pour des droits et biens (patrimoine).' },
            { id: 'odg_postambule_q41', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, a quoi font référence les mots en gras ', extract: " La <b>réclamation</b> de votre <b>patrimoine</b>, fondée sur les sages décrets de la nature.", options: ["Le combat des femmes pour leur droits / le porte-monnaie des femmes?", "Le combat des femmes pour leurs droits / Les biens matériels et l\'héritage naturel des femmes"], answer: [1], explanation: 'Le terme “patrimoine” englobe les biens matériels des femmes et leur héritage naturel. La métaphore juridique "les sages décrets de la nature" rappelle que les droits de la femme sont inscrits dans la nature.' },
            { id: 'odg_postambule_q42', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, combien de réponses sont apportées à la question rhétorique', extract: "Que vous reste-t-il donc ? <br>La conviction des injustices de l\'homme.<br>La réclamation de votre patrimoine, fondée sur les sages décrets de la nature", options: ["1", "2"], answer: [1], explanation: '<b>2 réponses :</b> <br>Rpse 1 : Avec une phrase nominale frappante ODG insiste de nouveau sur l\'ingratitude des hommes.<br>Rpse 2: le mot "Réclamation" montre que ce qu\'il reste aux femmes c\'est leur combat pour des droits et biens (patrimoine).' },
            { id: 'odg_postambule_q43', type: 'QCM_EXTRAIT', question: 'Que valorise ODG avec l\'expression en gras dans cet extrait (et l\'adverbe intensif "si") ?', extract: 'Qu\'auriez-vous à redouter pour une <b>si belle entreprise</b> ?', options: ["La facilité de la lutte des femmes", "La noblesse et l\'importance du combat des femmes", "La soumission des femmes à leur destin"], answer: [1], explanation: 'L\'adverbe intensif "si" valorise clairement le combat que mènent les femmes, insistant sur son importance et sa grandeur.' },
            { id: 'odg_postambule_q44', type: 'QCM_EXTRAIT', question: 'À quoi fait référence la <b>1ère crainte</b> des femmes qu\'évoque ODG dans la citation en gras ?', extract: '<b>Le bon mot du législateur des noces de Cana ?</b>', options: ["Une critique d\'un discours à l\'Assemblée Nationale", "Le regard ou jugement divin (épisode biblique des noces de Cana)", "Une crainte devant l\'échec politique"], answer: [1], explanation: 'ODG explore la crainte des femmes <b>du regard de DIEU</b>. Avec la référence au législateur biblique des noces de Cana (Jésus), elle évoque symboliquement la crainte des femmes face au regard ou jugement divin.' },
            { id: 'odg_postambule_q45', type: 'QCM_EXTRAIT', question: 'À quoi fait référence la <b>2ème crainte</b> des femmes qu\'évoque ODG dans la citation en gras ?', extract: ' Craignez-vous que nos <b>législateurs français, correcteurs de cette morale</b> longtemps accrochée aux branches de la politique,', options: ["La réaction méprisante des Hommes", "Le regard ou jugement divin (épisode biblique des noces de Cana)", "Une crainte devant l\'échec politique"], answer: [0], explanation: 'Les femmes auraient peur des hommes (“Législateurs français”) qui auraient pris le relais de Jésus (“Législateur des noces de Cana”) dans la correction de la morale. La morale religieuse et la politique ont longtemps été liées.' },
            { id: 'odg_postambule_q46', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, comment ODG suggère-t-elle aux femmes de réagir face au rejet des hommes ?', extract: '" Femmes, qu\'y a-t-il de commun entre vous et nous ? auriez-vous à répondre." " Tout ", auriez-vous à répondre.', options: ["Par la révolte violente", "Par l\'indifférence", "Par une affirmation ferme d\'une égalité totale"], answer: [2], explanation: 'Grâce au discours direct et à une réponse brève "Tout", ODG suggère une prise de position ferme et catégorique : les femmes doivent affirmer leur pleine égalité avec les hommes.' },
            { id: 'odg_postambule_q47', type: 'QCM', question: 'Quelle est la fonction du discours direct rapporté par ODG "Femmes, qu\'y a-t-il de commun entre vous et nous ? Tout." ?', options: ["Montrer explicitement une différence naturelle entre les sexes", "Donner vie au dialogue et suggérer l\'affirmation de l\'égalité", "Dénoncer uniquement le ton ironique des législateurs français"], answer: [1], explanation: 'Le discours direct rend vivant l\'échange, permet de donner plus de force à l\'argument d\'égalité des femmes face aux hommes.' },
            { id: 'odg_postambule_q48', type: 'VF', question: 'La question "Femmes, qu\'y-a-t-il de commun entre vous et nous ?"" représente une attitude d\'ouverture et d\'accueil des hommes envers les femmes.', answer: 'Faux', explanation: 'Cette question rhétorique représente une attitude de mépris et de rejet, suggérant faussement l\'absence de points communs entre hommes et femmes.' },
            { id: 'odg_postambule_q49', type: 'QCM', question: 'Que montre ODG avec la métaphore juridique "les sages décrets de la nature"?', options: ["Que les droits de la femme sont inscrits dans la nature", "Que la nature n\'a aucun pouvoir"], answer: [0], explanation: 'Avec cette métaphore, elle montre que la nature édicte des lois contre lesquelles on ne peut pas s\'opposer.' },
            { id: 'odg_postambule_q50', type: 'QCM_EXTRAIT', question: 'Quelle incohérence des hommes dénonce ODG dans cet extrait?', extract: 'S\'ils s\'obstinaient, dans leur faiblesse, à mettre cette inconséquence en contradiction avec leurs principes', options: [ "Le fait qu\'ils agissent conformément à leurs principes révolutionnaires", "Le fait qu\'ils prétendent combattre la tyrannie tout en gardant les femmes soumises", "Le fait qu\'ils règnent par la force physique uniquement" ], answer: [1], explanation: 'ODG dénonce l\'incohérence des hommes qui disent lutter contre la tyrannie mais limitent pourtant les droits des femmes en maintenant leur soumission.' },
            { id: 'odg_postambule_q51', type: 'QCM_EXTRAIT', question: 'De quel type de subordonnée s\'agit-il et à quoi sert-elle ?', extract: 'S\'ils s\'obstinaient, dans leur faiblesse, à mettre cette inconséquence en contradiction avec leurs principes ?', options: [ "Type : proposition subordonnée circonstancielle de temps <br> Objectif : Montrer que les hommes ont des principes révolutionnaires", "Type : proposition subordonnée circonstancielle de condition <br> Objectif : Montrer l\'incohérence des hommes qui prétendent combattre la tyrannie tout en gardant les femmes soumises", ], answer: [1], explanation: "La proposition subordonnée circonstancielle de condition dénonce l\'incohérence des hommes et particulièrement des députés, qui disent lutter contre la tyrannie mais qui maintiennent les femmes dans la soumission." },
            { id: 'odg_postambule_q52', type: 'QCM', question: 'Quel objectif poursuit ODG en employant la 2e personne du pluriel (vous) dans ce passage ?', options: [ "Parler directement aux députés", "Créer un sentiment d\'unité et de solidarité entre les femmes", "S\'adresser uniquement aux philosophes des Lumières" ], answer: [1], explanation: "Par l\'emploi du \"vous\", ODG s\'adresse directement aux femmes afin de susciter leur unité et leur solidarité dans le combat pour leurs droits." },
            { id: 'odg_postambule_q53', type: 'VF', question: 'ODG associe les hommes à des termes péjoratifs (faiblesse, inconséquence, vaines prétentions, orgueilleux...) afin de renforcer la confiance des femmes.', answer: "Vrai", explanation: "En assimilant les hommes à des termes péjoratifs, ODG dévalorise symboliquement leur prétendue supériorité afin de renforcer la confiance des femmes." },
            { id: 'odg_postambule_q54', type: 'VF', question: 'L\'auteure souhaite établir une supériorité féminine sur les hommes.', answer: "Faux", explanation: "ODG n\'appelle pas à la supériorité féminine, mais vise plutôt l\'égalité entre les femmes et les hommes : une alliance plutôt qu\'une soumission." },
            { id:'odg_postambule_q55', type:'QCM_EXTRAIT', question:'Quel est l\'effet recherché par l\'utilisation répétée de termes en gras dans cet extrait ?', extract:'<b>opposez</b> courageusement la force de la raison […], <b>réunissez-vous</b> sous les étendards de la philosophie, <b>déployez</b> toute l\'énergie de votre caractère', options:[ "Donner des ordres aux députés.", "Inviter à l\'action collective des femmes.", "Critiquer la passivité des philosophes." ], answer: [1], explanation:'Les impératifs "opposez", "réunissez-vous", et "déployez", visent directement à galvaniser les femmes, à les inviter à une action collective pour revendiquer leurs droits.' },
            { id:'odg_postambule_q56', type:'QCM_EXTRAIT', question:'Dans cet extrait, quelle attitude ODG propose-t-elle d\'opposer face aux hommes ?', extract:'opposez courageusement la <b>force de la raison</b> aux vaines prétentions de supériorité', options:[ "La force physique et guerrière", "La violence verbale", "Une supériorité intellectuelle et morale fondée sur la raison" ], answer: [2], explanation:'ODG propose aux femmes d\'opposer une supériorité intellectuelle et morale basée sur la raison ("force de la raison") aux prétentions injustifiées des hommes.' },
            { id:'odg_postambule_q57', type:'QCM_EXTRAIT', question:'Quelle est l\'idée suggérée par l\'expression en gras dans cette citation ?', extract:'vous verrez bientôt ces orgueilleux, <b>non serviles adorateurs rampants à vos pieds, mais fiers de partager avec vous les trésors de l\'Être suprême</b>', options:[ "Une future domination des femmes sur les hommes.", "Une égalité fondée sur l\'alliance plutôt que sur la soumission.", "Une séparation définitive entre les femmes et les hommes." ], answer: [1], explanation:'En utilisant une métaphore qui montre les hommes non comme "adorateurs rampants", mais au contraire comme "fiers de partager", ODG insiste sur une égalité envisagée comme une réelle alliance, sans soumission.' },
            { id:'odg_postambule_q58', type:'VF', question:'L\'expression "les trésors de l\'Être suprême" fait référence aux valeurs universelles prônées par la philosophie des Lumières.', answer:'Vrai', explanation:'Cette expression symbolique fait bien référence aux valeurs universelles comme la raison, l\'égalité et le respect mutuel, issues notamment de la philosophie des Lumières.' },
            { id:'odg_postambule_q59', type:'QCM', question:'Quel temps verbal ODG utilise-t-elle dans "vous verrez bientôt", et pourquoi ?', options:[ "Présent : pour rendre la situation actuelle plus vivante.", "Futur de certitude : pour souligner une issue positive si les femmes agissent.", "Conditionnel : pour exprimer une hypothèse irréelle." ], answer: [1], explanation:'ODG emploie ici un futur de certitude ("vous verrez bientôt") afin d\'affirmer que les femmes obtiendront certainement une situation positive si elles luttent activement pour leurs droits.' },
            { id: 'odg_postambule_q60', type: 'QCM', question: 'Quel message principal ODG transmet-elle dans ce passage "il est en votre pouvoir de les affranchir ; vous n\'avez qu\'à le vouloir" ?', options: [ "Les femmes doivent accepter passivement les obstacles.", "Les femmes peuvent surmonter les obstacles à condition de vouloir se libérer.", "Les femmes doivent attendre une autorisation des hommes pour agir." ], answer: [1], explanation: 'ODG insiste sur la capacité d\'action des femmes : leur libération dépend principalement et avant tout de leur volonté.' },
            { id: 'odg_postambule_q61', type: 'QCM', question: 'À quoi sert la proposition subordonnée circonstancielle de concession "Quelles que soient les barrières que l\'on vous oppose" ?', options: [ "À rappeler le soutien inconditionnel des hommes.", "À présenter les obstacles éventuels tout en affirmant leur dépassement possible.", "À exprimer l\'exclusion définitive des femmes." ], answer: [1], explanation: 'La subordonnée circonstancielle de concession ("quelles que soient les barrières") indique l\'existence d\'obstacles éventuels, tout en soulignant immédiatement que les femmes peuvent les dépasser.' },
            { id: 'odg_postambule_q62', type: 'VF', question: 'La négation restrictive "ne... que…" dans le passage ("vous n\'avez qu\'à le vouloir") insiste sur la difficulté à vaincre les obstacles.', answer: 'Faux', explanation: 'La négation restrictive "ne... que…" insiste sur le fait que la possibilité de liberté dépend uniquement de la volonté des femmes, et non pas sur la difficulté elle-même.' },
            { id:'odg_postambule_q63', type:'QCM_EXTRAIT', question:'Que signifie principalement le terme en gras dans cet extrait ?', extract:'il est en votre pouvoir de les <b>affranchir</b>', options:[ "Créer davantage d\'obstacles.", "Dépasser physiquement les barrières et se libérer d\'une sujétion.", "Demander une aide extérieure pour franchir ces barrières." ], answer: [1], explanation:'Le terme "affranchir" est polysémique. Ici, il désigne à la fois l\'idée concrète de passer au-dessus des barrières, et surtout symboliquement de se libérer d\'une soumission sociale.' },
            { id:'odg_postambule_q64', type:'VF', question:'Le mot "affranchir" est polysémique (il possède un double sens) : franchir physiquement et libérer symboliquement.', answer:'Vrai', explanation:'Le verbe "affranchir" est polysémique : il désigne à la fois le franchissement matériel d\'obstacles et la libération symbolique d\'une oppression.' },
            { id:'odg_postambule_q65', type:'QCM', question:'Sur quoi insiste la négation restrictive "vous n\'avez qu\'à le vouloir"?', options:[ "Sur la difficulté extrême de la lutte des femmes.", "Sur le découragement face à l\'inaction des législateurs.", "Sur le fait essentiel que seule la volonté des femmes est nécessaire à leur libération." ], answer: [2], explanation:'La négation restrictive ("ne...que...") met en avant l\'idée essentielle selon laquelle leur volonté seule suffit à leur libération.' },
            { id:'odg_postambule_q66', type:'QCM_EXTRAIT', question:'Quel effet produit l\'expression en gras dans : "<b>il est en votre pouvoir</b>"?', extract:'Quelles que soient les barrières que l\'on vous oppose, <b>il est en votre pouvoir</b> de les affranchir ; vous n\'avez qu\'à le vouloir', options:[ "Cela valorise la force et la capacité d\'action des femmes.", "Cela souligne la supériorité naturelle des hommes.", "Cela met en évidence l\'impuissance des femmes." ], answer: [0], explanation:'L\'expression "il est en votre pouvoir" insiste sur la capacité des femmes à agir et souligne leur force intrinsèque.' },
            { id:'odg_postambule_q67', type:'QCM', question:'Quel est le but principal de la fin du Postambule ?', options: ["Décrire les lois existantes.", "Exprimer un découragement final.", "Exhorter les femmes à l\'action et affirmer leur capacité à se libérer."], answer: [2], explanation:'La fin du Postambule est un appel vibrant à l\'action, insistant sur la volonté et le pouvoir des femmes de surmonter les obstacles pour atteindre l\'égalité.' }
        ]
    },
    {
    id: 'rimbaud_venus_anadyomene',
    title: 'Vénus Anadyomène',
    author: 'Arthur Rimbaud',
    questions: [
        {
            id: 'venus_q1',
            type: 'QCM',
            question: 'À quoi renvoie le titre "Vénus Anadyomène" dans ce poème de Rimbaud ?',
            options: ["Une plante rare", "Vénus sortant des eaux", "Une étoile brillante", "Une technique picturale"],
            answer: [1],
            explanation: '"Vénus Anadyomène" désigne littéralement Vénus sortant des eaux, en référence au mythe antique représentant Vénus née de l\'écume marine.'
        },
        {
            id: 'venus_q2',
            type: 'VF',
            question: 'Le titre "Vénus Anadyomène" est utilisé par Rimbaud pour célébrer la beauté féminine traditionnelle.',
            answer: 'Faux',
            explanation: 'Rimbaud utilise ce titre de manière ironique, détournant la beauté traditionnelle par une description grotesque et caricaturale.'
        },
        {
            id: 'venus_q3',
            type: 'QCM_EXTRAIT',
            question: "Quelle figure de style domine dans l\'expression : 'Comme d\'un cercueil vert en fer blanc, une tête'",
            extract: "Comme d\'un cercueil vert en fer blanc, une tête",
            options: ["Métaphore", "Comparaison", "Allégorie", "Hyperbole"],
            answer: [1],
            explanation: "La présence du terme comparatif 'Comme' indique explicitement une comparaison. La tête est comparée de manière grotesque à quelque chose émergeant d\'un 'cercueil' vert en fer blanc, insistant sur l\'aspect lugubre."
        },
        {
            id: 'venus_q4',
            type: 'VF',
            question: "Dans l\'extrait 'Comme d\'un cercueil vert en fer blanc, une tête', la comparaison renvoie à une idée positive et attrayante.",
            answer: 'Faux',
            explanation: "Cette comparaison donne une impression macabre et grotesque ; elle renvoie à une idée négative et repoussante. Vénus = seulement 'une tête' indéfinie."
        },
        {
            id: 'venus_q5',
            type: 'QCM',
            question: "Quelle impression crée la description initiale par le choix lexical 'cercueil vert en fer blanc' ?",
            options: ["Impression d\'élégance", "Atmosphère chaleureuse", "Impression d\'élégance et bon marché"],
            answer: [2],
            explanation: "<b>Elegance</b> (Les couleurs peuvent renvoyer au tableau de Botticelli). Bon marché ('fer' fait penser à une baignoire bon marché, rompt avec l\'idéal)."
        },
        {
            id: 'venus_q6',
            type: 'QCM_EXTRAIT',
            question: "A quel oeuvre fait référence le vers : 'Comme d\'un cercueil vert en fer blanc, une tête' ?",
            extract: "Comme d\'un cercueil vert en fer blanc, une tête",
            options: ["Tableau 'La naissance de Venus' de Botticelli 1485.", "Sculpture Victoire de Samotrace II avant JC."],
            answer: [0],
            explanation: "C\'est un traitement parodique du tableau 'La naissance de Venus' de Botticelli 1485. Le noble coquillage est devenu un accessoire prosaïque (commun, dépourvu d\'élégance)."
        },
        {
            id: 'venus_q7',
            type: 'QCM_EXTRAIT',
            question: "Quelle figure de style se cache derrière l\'adjectif '<b>vieille</b> baignoire'",
            extract: "Vieille baignoire",
            options: ["Hypallage (mettre dans une autre phrase un terme qui se rapporte à la 1ere phrase).", "Allitération (répétition d\'une consonne)"],
            answer: [0],
            explanation: "L\'adjectif peut être une hypallage. En effet, l\'adj ne désigne-t-il que la baignoire ou aussi la déesse qui est pourtant censée naître ? Cette interprétation va avec le 'cercueil' qui montre une Vénus non pas naissante (ce qul\'annonçait pourtant le titre avec l\'adjectif 'anadyomène'), mais proche de la mort. Le traitement de Vénus est bien parodique. "
        },
        {
            id: 'venus_q8',
            type: 'QCM',
            question: " La blondeur de Vénus est aussi transformée : Venus est 'brune'. pourquoi ?",
            options: ["Lui donner plus de puissance + connotation luxueuse","Briser le mythe + connotation de la couleur : sombre, plus lugubre."],
            answer: [1],
            explanation: "La blondeur de Vénus est aussi transformée : 'brune' → brise le mythe + connotation de la couleur : sombre, plus lugubre."        
        },
        {
            id: 'venus_q9',
            type: 'QCM',
            question: "Le premier quatrain du poème appartient clairement à quel registre littéraire ?",
            options: ["Pathétique", "Satirique et caricatural", "Lyrique", "Épique"],
            answer: [1],
            explanation: "Dès le début, le quatrain instaure un registre satirique et caricatural, rejetant la traditionnelle admiration pour la beauté féminine avec ironie et humour noir."
        },
        {
            id: 'venus_q10',
            type: 'QCM_EXTRAIT',
            question: "Qu\'apportent les expressions 'fortement pommadés' et 'déficits mal ravaudés' ?",
            extract: "De femme à cheveux bruns <b>fortement pommadés</b><br> D\'une vieille baignoire émerge, lente et bête,<br> Avec des <b>déficits assez mal ravaudés</b>",
            options: ["La rendent belle et mystérieuse", "Déprécient son apparence"],
            answer: [1],
            explanation: "L\'adverbe 'fortement' montre que c\'est trop, ridicule (contraire à la représentation faite par Botticelli où les cheveux volent au vent). 'Déficits mal ravaudés' devient symbole de laideur et de lacunes."
        },
        {
            id: 'venus_q11',
            type: 'QCM',
            question: "Avec les adjectifs <b>'Lente et bête'</b> quelle apparence est donné à Venus ?",
            options: ["L\'apparence d\'une déesse", "l\'apparence d\'un animal."],
            answer: [1],
            explanation: "Vénus a plus l\'apparence d\'un animal que d\'une déesse. Polysémie du nom 'bête' qui est rapproché du nom 'tête' par la rime (pauvreté intellectuelle?)"
        },
        {
            id: 'venus_q12',
            type: 'QCM',
            question: "Pourquoi Rimbaud utilise le mot 'bête' ?",
            options: ["Pour se rapprocher du Loup Garoup", "Pour jouer sur la Polysémie du terme (une bête / être bête)."],
            answer: [1],
            explanation: "Polysémie du nom 'bête' qui est rapproché du nom 'tête' par la rime (Veut-il parler de la pauvreté intellectuelle de Venus?)"
        },
        {
            id: 'venus_q13',
            type: 'QCM_EXTRAIT',
            question: "Dans 'Comme d\'un cercueil vert en fer blanc', l\'association du 'cercueil' produit immédiatement quelle sensation chez le lecteur ?",
            extract: "Comme d\'un cercueil vert en fer blanc",
            options: ["Une sensation d\'harmonie", "Une sensation agréable et rassurante", "Une sensation d\'inconfort et d\'étrangeté morbide", "Une sensation d\'admiration traditionnelle"],
            answer: [2],
            explanation: "L\'association à un cercueil produit instantanément un effet de malaise, de morbide étrangeté et d\'inconfort chez le lecteur."
        },
       {
            id: 'venus_q14',
            type: 'VF',
            question: "Le <b>premier quatrain</b> est malmené comme Venus ?",
            answer: 'Faux',
            explanation: " les rimes sont croisées et non embrassées + syntaxe disloquée qui renvoie à la dislocation du corps de la femme"
        },
        {
            id: 'venus_q15',
            type: 'QCM',
            question: "Quel effet le présent de l\'indicatif a-t-il dans la description du corps de Vénus ?",
            options: ["Il atténue la vivacité de la scène", "Il renforce l\'impression d\'immédiateté et de présence", "Il donne une dimension intemporelle à la scène", "Il n\'a pas d\'effet particulier"],
            answer: [1],
            explanation: "Le présent de l\'indicatif dans ce contexte renforce l\'hypotypose sordide (décrire de manière précise pour rendre la scene plus réelle), donnant l\'impression que le lecteur voit Vénus émerger de l\'eau en temps réel."
        },
        {
            id: 'venus_q16',
            type: 'VF',
            question: "AFFIRMATION : L\'anaphore de l\'adverbe 'puis' suggère une progression harmonieuse et esthétique.",
            answer: 'Faux',
            explanation: "L\'anaphore de 'puis' montre une progression dans la description du corps qui, au contraire, révèle toute la laideur de Vénus au fur et à mesure de son émergence de la baignoire."
        },
       {
            id: 'venus_q17',
            type: 'QCM_EXTRAIT',
            question: "Dans cet extrait, la répétition de l\'adverbe 'puis' est une figure de style. Laquelle ?",
            extract: "<b>Puis</b> le col gras et gris, les larges omoplates <br> Qui saillent ; le dos court qui rentre et qui ressort ; <br> <b>Puis</b> les rondeurs des reins semblent prendre l\'essor.",
            options: ["Assonance pour répeter des voyelles", "Une anaphore pour montrer la laideur de haut en bas."],
            answer: [1],
            explanation: "Description progressive du corps à travers l\'anaphore de l\'adverbe 'puis' → le poète va montrer toute sa laideur au fur et à mesure que Vénus émerge de la baignoire. Hypotypose sordide : le présent donne l\'impression qu\'on voit Vénus sortir de l\'eau."
        },
       {
            id: 'venus_q18',
            type: 'QCM_EXTRAIT',
            question: "Pourquoi le corps paraît-il difforme ?",
            extract: "Les <b>larges</b> omoplates <br> Qui <b>saillent</b> ; le dos <b>court</b> qui rentre et qui ressort ; <br> Puis les <b>rondeurs</b> des reins semblent prendre l\'essor.",
            options: ["Utilisation d\'antithèses (termes opposés)", "Répétition de l\'adverbe 'puis'"],
            answer: [0],
            explanation: "antithèses : 'large' et 'court', omoplates qui  'saillent' (=maigreur mise en valeur par le rejet de la proposition subordonnée relative 'qui saillent') mais 'graisse' => le corps paraît difforme. Description à l\'opposé des codes esthétiques traditionnels."
        },
        {
            id: 'venus_q19',
            type: 'QCM',
            question: "Quel effet produit l\'allitération en [r] dans les mots 'gras', 'gris', 'large', 'court' ?",
            options: ["Un son doux et mélodieux", "Un son dur et désagréable", "Un rythme apaisant", "Un effet dramatique"],
            answer: [1],
            explanation: "L\'allitération en [r] produit un son dur et désagréable, accentuant la tonalité laide et grotesque de la description."
        },
        {
            id: 'venus_q20',
            type: 'QCM',
            question: "La mention des 'omoplates' dans ce quatrain relève de quel procédé poétique ?",
            options: ["Une métaphore classique", "Un blason traditionnel", "Un contre-blason", "Une allégorie"],
            answer: [2],
            explanation: "La mention des 'omoplates', partie inattendue et non érotique, relève du contre-blason, opposé à la tradition de valoriser les belles parties du corps féminin."
        },
        {
            id: 'venus_q21',
            type: 'VF',
            question: "AFFIRMATION : Le rythme binaire des expressions 'qui rentre et qui ressort'» évoque une danse élégante et harmonieuse.",
            answer: 'Faux',
            explanation: "Le rythme binaire ici évoque une danse sordide, renforçant l\'aspect grotesque du corps en mouvement."
        },
        {
            id: 'venus_q22',
            type: 'QCM',
            question: "Quel motif poétique traditionnel Rimbaud subvertit-il par le choix de rimes embrassées dans ce quatrain ?",
            options: ["Il renforce le schéma poétique classique", "Il respecte les canons de l\'esthétique traditionnelle", "Il s\'éloigne des codes poétiques traditionnels", "Il sublime la beauté classique"],
            answer: [2],
            explanation: "En choisissant des rimes embrassées et en changeant le schéma de rimes entre les quatrains, Rimbaud s\'éloigne volontairement des codes poétiques traditionnels pour traiter un sujet anti-conventionnel."
        },
        {
            id: 'venus_q23',
            type: 'QCM',
            question: "Comment le rejet de la subordonnée relative 'qui saillent' contribue-t-il à l\'impression du corps de Vénus ?",
            options: ["Il met en valeur une harmonie parfaite", "Il insiste sur la maigreur et l\'étrangeté", "Il adoucit la description", "Il évoque la douceur des courbes"],
            answer: [1],
            explanation: "Le rejet de 'qui saillent' met en valeur la maigreur des omoplates, en accentuant leur caractère saillant et déshumanisé."
        },
        {
            id: 'venus_q24',
            type: 'VF',
            question: "AFFIRMATION : L\'utilisation d\'antithèses comme 'large' et 'court' donne une image harmonieuse du corps.",
            answer: 'Faux',
            explanation: "Les antithèses 'large' et 'court' accentuent la nature difforme et non-harmonieuse du corps de Vénus, renforçant le caractère grotesque."
        },
        {
            id: 'venus_q25',
            type: 'QCM',
            question: "Quelle est la nature du détail mis en avant par l\'adverbe 'surtout' et l\'expression 'à la loupe' ?",
            options: ["La grâce divine", "Une imperfection choquante et vulgaire", "Un détail érotique sublimé", "Un sentiment sublime"],
            answer: [1],
            explanation: "Le détail 'à la loupe' met en avant un aspect vulgaire et choquant, à savoir la relation avec 'Clara Vénus', une quasi-anagramme de 'ulcère à l\'anus', soulignant une provocation scatologique."
        },
        {
            id: 'venus_q26',
            type: 'VF',
            question: "AFFIRMATION : L\'usage du pronom 'on' au lieu de 'je' lyrique traditionnel permet de renforcer le côté impersonnel et objectivement grotesque du poème.",
            answer: 'Vrai',
            explanation: "En utilisant le pronom 'on', Rimbaud rejette le lyrisme traditionnel et intensifie l\'observation distante et impersonnelle de la vulgarité apparente de la scène."
        },
        {
            id: 'venus_q27',
            type: 'QCM',
            question: "L\'expression 'Clara Vénus' se rapproche par sa forme de quelle idée inattendue ?",
            options: ["L\'élévation spirituelle", "La déchéance vulgaire", "La magnificence artistique", "La mélodie douce"],
            answer: [1],
            explanation: "'Clara Vénus' (signifiant \"illustre Venus\") est presque une anagramme subtile de 'ulcère à l\'anus', indiquant une chute volontaire dans le bas et le vulgaire."
        },
        {
            id: 'venus_q28',
            type: 'QCM',
            question: "Que signifie l\'expression 'Clara Vénus' et pourquoi introduit-t-elle l\'idée de  la \"déchéance vulgaire\" ?",
            options: ["Clara Vénus = Claire de Venus / Déchéance vulgaire car il y a le mot nu", "Clara Vénus = Illustre Venus / Déchéance car contient un anagramme"],
            answer: [1],
            explanation: "'Clara Vénus' signifie \"illustre Venus\". Déchéance car c\'est presque une anagramme subtile de 'ulcère à l\'anus', indiquant une chute volontaire dans le bas et le vulgaire."
        },
        {
            id: 'venus_q29',
            type: 'QCM',
            question: "Quelle association synesthétique (association involontaire de 2 sens) crée une image de dégoût dans le poème ?",
            options: ["L\'éclat doré et enivrant", "La lumière douce et paisible", "La couleur rouge, l\'odeur et le goût dit 'horrible'", "Le parfum délicat et apaisant"],
            answer: [2],
            explanation: "La couleur 'rouge' associée à l\'odeur et au goût crée une synesthésie qui évoque la boucherie et génère un sentiment de dégoût."
        },
        {
            id: 'venus_q30',
            type: 'VF',
            question: "AFFIRMATION : L\'expression 'belle hideusement' est un exemple d\'oxymore rappelant Baudelaire.",
            answer: 'Vrai',
            explanation: "\'expression 'belle hideusement' combine des termes contradictoires, exprimant une beauté paradoxale et rappelle le style de Baudelaire, notamment 'Les Fleurs du Mal'."
        },
        {
            id: 'venus_q31',
            type: 'QCM',
            question: "Quel est l\'effet du tiret dans la phrase: '- Et tout ce corps remue et tend sa large croupe' ?",
            options: ["Agrémente le rythme poétique harmonieux", "Ajoute une dimension philosophique au poème", "Met un focus abrupt sur le mouvement obscène du corps", "Met en valeur la douceur de la description"],
            answer: [2],
            explanation: "Le tiret met en exergue le mouvement obscène par une transition abrupte, accentuant ainsi la vision vulgaire et grotesque du corps en mouvement."
        },
        {
            id: 'venus_q32',
            type: 'VF',
            question: "AFFIRMATION : La rime 'Vénus' avec 'anus' est un exemple de traitement noble et artistique.",
            answer: 'Faux',
            explanation: "La rime de 'Vénus' avec 'anus' représente une chute dans le vulgaire, faisant partie de la satire burlesque où un sujet noble est traité avec un ton bas."
        },
        {
            id: 'venus_q33',
            type: 'QCM',
            question: "Comment la 'large croupe' participe-t-elle à l\'effet satirique du poème ?",
            options: ["En rendant la représentation de Vénus élégante", "En ajoutant une ambiguïté sensuelle", "En renforçant l\'animalisation et la vulgarité", "En illustrant un idéal classique"],
            answer: [2],
            explanation: "La 'large croupe' animalise et vulgarise la figure de Vénus, détournant les attentes de sensualité et d\'élévation pour renforcer l\'effet satirique."
        },
        {
            id: 'venus_q34',
            type: 'VF',
            question: "AFFIRMATION : L\'ouverture possible pour conclure l\'analyse linéaire de Venus Anadyomène pourrait se faire sur 'Une Charogne de Baudelaire'.",
            answer: 'Vrai',
            explanation: "Car : 1- Similitude thématique : la beauté dégradée (dans 'Une Charogne', Baudelaire décrit de manière paradoxalement esthétique une charogne en décomposition)<br>2- Dimension provocatrice et anticonformiste (Rimbaud et Baudelaire provoquent le lecteur en déconstruisant des figures classiques de beauté pour remettre en cause les conventions artistiques et sociales)<br>3-Esthétique de la laideur et modernité poétique (Les deux auteurs utilisent la poésie pour explorer une esthétique moderne où le laid devient une source d\'inspiration et de fascination poétique.)<br>4-Technique littéraire et figures de style (procédés stylistiques (oxymores, antithèses, images fortes, et descriptions précises) dans les deux poèmes sont similaires)" 
        },
        {
            id: 'venus_q35',
            type: 'VF',
            question: "AFFIRMATION : Vénus est perçue selon un mouvement descendant (de la tête vers le bas). Le 1er Quatrain présente mise en scène provocatrice de la laideur du corps (il en fait un contre-blason).",
            answer: 'Faux',
            explanation: "Vénus est perçue selon un mouvement descendant (de la tête vers le bas). <br>Quatrain 1 : apparition sordide de la tête d\'une étrange Vénus<br>Quatrain 2 : mise en scène provocatrice de la laideur du corps (il en fait un contre-blason)<br>Tercets : Le regard se resserre sur un détail du corps de Vénus, ce qui prépare peu à peu la chute burlesque (ou parodique) du sonnet et la rupture totale avec l\'idéal féminin."
        }
    ]
},
{
    id: 'lettre-persanes',
    title: 'Lettres Persanes',
    author: 'Montesquieu',
    questions: [
        {
            id: 'persane_q1',
            type: 'QCM',
            question: "À quel siècle Montesquieu a-t-il écrit Les Lettres persanes ?",
            options: ["XVIIe siècle", "XVIIIe siècle", "XIXe siècle", "XXe siècle"],
            answer: [1],
            explanation: "Les Lettres persanes ont été publiées en 1720, inscrivant Montesquieu parmi les philosophes des Lumières qui s\'intéressaient aux réformes politiques et sociales."
        },
        {
            id: 'persane_q2',
            type: 'QCM',
            question: 'Quels thèmes Montesquieu aborde-t-il dans ses œuvres ?',
            options: ["La lutte contre l\'esclavage", "La conquête spatiale", "La théorie politique", "L\'impressionnisme en peinture"],
            answer: [0, 2],
            explanation: "La lutte contre l\'esclavage & La théorie politique"
        },
        {
            id: 'persane_q3',
            type: 'QCM',
            question: 'Quel est le genre littéraire des Lettres persanes ?',
            options: ["Roman épistolaire", "Roman policier", "Roman historique", "Poésie"],
            answer: [0],
            explanation: "Les Lettres persanes relèvent du genre épistolaire, un roman construit à travers la correspondance entre les personnages, notamment Usbek et ses amis."
        },
       {
            id: 'persane_q4',
            type: 'VF',
            question: "AFFIRMATION : Le voyage d\'Usbek en Europe lui fait découvrir la culture occidentale tout en lui permettant de critiquer sa propre société.",
            answer: "Vrai",
            explanation: "A travers le regard d\'un étranger, Montesquieu offre une satire de la société française et une réflexion sur les coutumes persanes, soulignant les contradictions sociétales."
        },
        {
            id: 'persane_q5',
            type: 'QCM_EXTRAIT',
            question: "Quel personnage féminin parmi le harem d\'Usbek se rebelle contre sa tyrannie ?",
            extract: "Mais on suit également les femmes de son harem restées dans son sérail en Iran qui se rebellent contre sa tyrannie.",
            options: ["Roxane", "Zetila", "Firmin", "Narcisse"],
            answer: [0],
            explanation: "Roxane, la favorite d\'Usbek, est celle qui se rebelle de manière la plus marquante en affirmant son autonomie et en trahissant Usbek."
        },
        {
            id: 'persane_q6',
            type: 'VF',
            question: "AFFIRMATION : Dans le mouvement 1, Roxane renverse les rapports de force en se donnant la mort mais reste toujours fidèle à Usbek.",
            answer: "Faux",
            explanation: "Dans le mouvement 1, Roxane renverse effectivement les rapports de force en se donnant la mort, mais elle avoue son infidélité à Usbek pour revendiquer son indépendance."
        },
        {
            id: 'persane_q7',
            type: 'QCM',
            question: 'Quel acte fort Roxane réalise-t-elle dans le mouvement 1?',
            options: ["Elle s\'enfuit du sérail", "Elle se donne la mort", "Elle épouse un autre homme", "Elle fait un discours public"],
            answer: [1],
            explanation: 'Roxane se donne la mort dans un geste symbolique fort pour affirmer son indépendance et sa volonté de ne pas être contrôlée par Usbek.'
        },
        {
            id: 'persane_q8',
            type: 'VF',
            question: "AFFIRMATION : Dans le mouvement 2, Roxane écrit à Usbek pour le remercier de son dévouement envers elle.",
            answer: "Faux",
            explanation: "Dans le mouvement 2, Roxane écrit un réquisitoire contre Usbek, lui montrant qu\'elle a toujours été une femme libre et remise en cause son autorité."
        },
        {
            id: 'persane_q9',
            type: 'QCM',
            question: "Quel est le but de la lettre de Roxane dans le mouvement 2?",
            options: ["Demander pardon à Usbek", "Revendiquer son statut de femme libre", "Informer Usbek de sa mort", "Demander la protection d\'Usbek"],
            answer: [1],
            explanation: "La lettre de Roxane dans le mouvement 2 vise à revendiquer son statut de femme libre, malgré les restrictions imposées par Usbek."
        },
        {
            id: 'persane_q10',
            type: 'VF',
            question: "AFFIRMATION : L\'utilisation de l\'adverbe 'oui' au début de la phrase adoucit l\'aveu de Roxane.",
            answer: "Faux",
            explanation: "L\'adverbe d\'affirmation oui' au début crée au contraire une impression forte et capte immédiatement l\'attention du lecteur, soulignant le caractère franc et direct de l\'aveu de Roxane."
        },
        {
            id: 'persane_q11',
            type: 'QCM',
            question: "Quelle technique littéraire Roxane utilise-t-elle en enchaînant les phrases 'j\'ai trompé', 'j\'ai séduit tes eunuques', 'je me suis jouée de ta jalousie', 'j\'ai su de ton affreux sérail faire un lieu de délices' ?",
            options: ["Elle confère un ton léger et humoristique.", "Elle accentue l\'accablement d\'Usbek par la révélation de la vérité.", "Elle aplanit le discours pour diminuer l\'impact de l\'aveu.", "Elle détourne l\'attention de l\'auditeur."],
            answer: [1],
            explanation: "L\'énumération, appuyée par le rythme ternaire et l\'allitération en [t], accentue l\'accablement d\'Usbek, puisque chaque phrase ajoute à la force de l\'aveu de Roxane, culminant dans son triomphe face à sa jalousie."
        },
        {
            id: 'persane_q12',
            type: 'QCM',
            question: "Quel est l\'effet de l\'utilisation du champ lexical de la tromperie dans ce passage ('j\'ai trompé', 'je me suis jouée') ?",
            options: ["Il suggère la soumission de Roxane à Usbek.", "Il conforte Usbek dans son rôle de maître.", "Il révèle l\'inversion des rapports de force entre Roxane et Usbek.", "Il évoque le désir nostalgique de Roxane."],
            answer: [2],
            explanation: "Le champ lexical de la tromperie montre que Roxane a renversé les rapports de force en s\'appropriant sa liberté et en se jouant de l\'autorité d\'Usbek."
        },
        {
            id: 'persane_q13',
            type: 'QCM',
            question: "Quel est l\'effet de l\'antithèse entre 'affreux sérail' et 'lieu de délices et de plaisir' ?",
            options: ["Elle souligne la beauté constante de l\'environnement.", "Elle met en évidence l\'ingéniosité de Roxane face à la tyrannie d\'Usbek.", "Elle prouve la richesse du sérail d\'Usbek.", "Elle atténue le conflit entre Usbek et Roxane."],
            answer: [1],
            explanation: "L\'antithèse entre 'affreux sérail' et 'lieu de délices et de plaisir' critique la tyrannie d\'Usbek. Roxane utilise cet opposé pour montrer comment elle a transformé un lieu oppressant en espace agréable, affichant sa résistance et ingéniosité."
        },
        {
        id: 'persane_q14',
        type: 'VF',
        question: "AFFIRMATION : Dans le passage 'Je vais mourir ; le poison va couler dans mes veines', l\'utilisation du présent dramatise la lettre par son effet d\'inéluctabilité.",
        answer: 'Vrai',
        explanation: "Le présent à valeur de futur proche confère au début de ce passage une tonalité tragique. Le destin de Roxane semble inéluctable, ajoutant une dimension dramatique à la lettre."
        },
        {
        id: 'persane_q15',
        type: 'QCM',
        question: "Quel est l\'effet de la question rhétorique 'que ferais-je ici, puisque le seul homme qui me retenait à la vie n\'est plus' ?",
        options: ["Elle évoque une décision à venir pour Roxane.", "Elle souligne le désespoir et l\'absence de raison de vivre de Roxane.", "Elle indique une incertitude sur la mort de son amant.", "Elle décrit les projets futurs de Roxane."],
        answer: [1],
        explanation: "La question rhétorique souligne le désespoir de Roxane et l\'absence de raison de vivre suite à la mort de son amant. Elle se place ainsi dans le sillage des tragiques héros et héroïnes, renforçant l\'aspect tragique de la situation."
        },
        {
        id: 'persane_q16',
        type: 'VF',
        question: "AFFIRMATION : Dans le passage 'Je vais mourir ; le poison va couler dans mes veines', l\'utilisation du présent dramatise la lettre par son effet d\'inéluctabilité.",
        answer: 'Vrai',
        explanation: "Le présent à valeur de futur proche confère au début de ce passage une tonalité tragique. Le destin de Roxane semble inéluctable, ajoutant une dimension dramatique à la lettre."
        },
        {
        id: 'persane_q17',
        type: 'QCM',
        question: "A quelle histoire fait penser la question rhétorique 'que ferais-je ici, puisque le seul homme qui me retenait à la vie n\'est plus' ?",
        options: ["Bonnie & Clyde", "La belle et la Bête", "Romeo & Juliette"],
        answer: [2],
        explanation: "Roméo & Juliette. La question rhétorique souligne le désespoir de Roxane et l\'absence de raison de vivre suite à la mort de son amant. Elle se place ainsi dans le sillage des tragiques héros et héroïnes, renforçant l\'aspect tragique de la situation."
        },
        {
        id: 'persane_q18',
        type: 'VF',
        question: "AFFIRMATION : Dans le passage 'Je meurs; mais mon ombre s\'envole bien accompagnée', le présent d\'énonciation accentue le caractère tragique de la mort de Roxane.",
        answer: 'Vrai',
        explanation: "Le présent d\'énonciation succède au présent à valeur de futur proche, rendant la mort de Roxane réelle et immédiate. La métaphore de l\'ombre accentue le caractère paisible de cette mort, apportant un réconfort dans son acte final de vengeance."
        },
        {
        id: 'persane_q19',
        type: 'QCM',
        question: "Quel est l\'effet de la métaphore de l\'ombre dans 'mon ombre s\'envole bien accompagnée' ?",
        options: ["Elle suggère la confusion de Roxane sur sa mort.", "Elle exprime la paix de Roxane face à la mort qui va retrouver son amont.", "Elle induit un paradoxe temporel.", "Elle démontre le chaos intérieur de Roxane."],
        answer: [1],
        explanation: "La métaphore de l\'ombre évoque une mort paisible, suggérant que Roxane trouve du réconfort dans sa vengeance et la compagnie de son amant dans l\'au-delà."
        },
        {
         id: 'persane_q20',
         type: 'QCM_EXTRAIT',
         question: "Dans la citations ci-dessous qui désigne les périphrases 'gardiens sacrilèges' & 'le plus beau sang du monde'",
         extract: "Je meurs; mais mon ombre s\'envole bien accompagnée: je viens d\'envoyer devant moi ces <b>gardiens sacrilèges</b>,qui ont répandu le <b>plus beau sang du monde</b>.",
         options: ["Les meurtriers & son amant", "le diable & les anges"],
         answer: [0],
         explanation: "Terme pejoratif 'gardiens sacrilèges' = les meurtriers & Terme mélioratif 'plus beau sang du monde' = son amant"
        },
        {
        id: 'persane_q21',
        type: 'QCM',
        question: "Comment la description des gardiens 'sacrilèges' contribue-t-elle à l\'accusation contre Usbek ?",
        options: ["Elle justifie leurs actions.", "Elle atténue la culpabilité d\'Usbek.", "Elle renforce leur responsabilité et la critique envers Usbek.", "Elle glorifie leurs actions."],
        answer: [2],
        explanation: "Le terme 'sacrilèges' est péjoratif, soulignant l\'horreur de leurs actes commandités par Usbek, ce qui rend ses crimes d\'autant plus condamnables."
        },
        {
         id: 'persane_q22',
         type: 'QCM',
         question: "Dans le 1er mouvement pour renverser le pouvoir de force Roxane fait plusieurs aveux",
         options: ["Elle a trompé Usbek", "Elle a eu un enfant", "Elle a tué les gardiens sacrilèges", "Elle s\'est donnée la mort"],
         answer: [0, 2, 3],
         explanation: "En avouant elle se venge d\'Usbek et de sa tyranie"
        },
        {
        id: 'persane_q23',
        type: 'QCM_EXTRAIT',
        question: "Que permettent les 2 questions rhétoriques dans ce passage?",
        extract: "Comment as-tu pensé ....que je ne fusse dans le monde que pour adorer tes caprices ? <br>que, pendant que ...eusses le droit d\'affliger tous mes désirs ?",
        options: ["Elles soulignent l\'accord harmonieux entre Roxane et Usbek", "Elles ont une valeur polémique pour permettre a Roxane de s\'opposer à Usbek"],
        answer: [1],
        explanation: "<b>Les questions rhétoriques</b> ont une valeur polémique ; elles permettent à Roxane de s\'opposer à Usbek, de l\'accuser de manière virulente et d\'exprimer son indignation."
        },
        {
        id: 'persane_q24',
        type: 'QCM_EXTRAIT',
        question: "Comment les pronoms personnels 'je' et 'tu' sont-ils utilisés dans ce passage ?",
        extract: "Comment as-tu pensé que <b>je</b> fusse assez crédule, pour m\'imaginer que <b>je</b> ne fusse dans le monde que pour adorer tes caprices ? que, pendant que <b>tu</b> te permets tout, <b>tu</b> eusses le droit d\'affliger tous mes désirs ?",
        options: ["Pour exprimer une harmonie conjugale.", "Pour montrer l\'égalité des sexes.", "Pour révéler l\'hypocrisie et la tyrannie d\'Usbek.", "Pour introduire un discours indirect."],
        answer: [2],
        explanation: "Les pronoms personnels <b>'je'</b> et <b>'tu'</b> s\'opposent, montrant l\'hypocrisie et la tyrannie d\'Usbek. Roxane utilise ce jeu des pronoms pour dénoncer l\'inégalité entre l\'homme et la femme et renverser ce rapport de force."
        },
        {
        id: 'persane_q25',
        type: 'QCM_EXTRAIT',
        question: "Que montre le 'Non' en réponses aux 2 questions réthoriques ?",
        extract: "Comment as-tu pensé ....que je ne fusse dans le monde que pour adorer tes caprices ? <br>que, pendant que ...eusses le droit d\'affliger tous mes désirs ? <b>Non</b>",
        options: ["La maladresse de Roxane", "Le bonheur de Roxanne", "La révolte de Roxane"],
        answer: [2],
        explanation: "Après le oui du début ce NON en réponse aux questions réthoriques symbolise la révolte de Roxane."
        },
        {
        id: 'persane_q26',
        type: 'QCM_EXTRAIT',
        question: "Dans cet extrait à quoi sert l\'utilisation du champ lexical de l\''ESCLAVAGE', de la 'LIBERTE' et l\'utilisation de la conjonction 'MAIS' ?",
        extract: "Non : j\'ai pu vivre dans la <b>servitude</b>; toujours été <u>mais</u> j\'ai toujours été libre: j\'ai réformé tes lois sur celles de la nature; et mon esprit s\'est toujours tenu dans l\'<b>indépendance</b>.",
        options: ["A opposer sa servitude apparente à sa véritable liberté", "A montrer son indécision"],
        answer: [0],
        explanation: "Avec ces champs lexicaux et la conjonction « mais », elle lui oppose sa servitude apparente à sa véritable liberté. D\'ailleurs elle dit ' j\'ai réformé tes lois sur celles de la nature' "
        },
        {
        id: 'persane_q27',
        type: 'QCM_EXTRAIT',
        question: "Quand Roxane revendique que la liberté est une loi naturelle, à qui peut-on la comparer ?",
        extract: "Non : j\'ai pu vivre dans la <b>servitude</b>; toujours été <u>mais</u> j\'ai libre: j\'ai réformé <b>tes lois sur celles de la nature</b>; et mon esprit s\'est toujours tenu dans l\'<b>indépendance</b>.",
        options: ["Olyme de Gouges", "Ponge", "Baudelaire"],
        answer: [0],
        explanation: "Roxane (comme Olympe de Gouges) revendique que la liberté est une loi naturelle. Alors que les lois d\'Usbek sont contre-natures, ce qu\'elle a corrigé.  "
        },
        {
        id: 'persane_q28',
        type: 'QCM_EXTRAIT',
        question: "Quels sont les effets de l\'anaphore (repetition) <b>'de ce que'</b> dans les propos de Roxane ?",
        extract: "Tu devrais me rendre grâces... <b>de ce que</b> je me suis abaissée... paraître fidèle ; <b>de ce que</b> j\'ai lâchement gardé dans mon cœur ...<b>de ce que</b> j\'ai profané la vertu en souffrant ...",
        options: ["ll renforce la continuité de son amour", "Elle accentue l\'énumération des sacrifices faits pour Usbek", "Elle trie des actions indépendantes", "Elle réduit l\'impact émotionnel"],
        answer: [1],
        explanation: "L\'anaphore 'de ce que' crée une cadence insistante qui met en avant l\'énumération des sacrifices que Roxane a fait pour Usbek, soulignant leur poids."
        },
        {
        id: 'persane_q29',
        type: 'QCM_EXTRAIT',
        question: "Quel sentiment principal l\'utilisation de termes péjoratifs évoquent-ils dans le discours de Roxane ?",
        extract: "Tu devrais me rendre grâces encore du <b>sacrifice</b> que je t\'ai fait ; de ce que je me suis <b>abaissée</b> jusqu\'à te paraître fidèle ; de ce que j\'ai lâchement gardé dans mon cœur ce que j`\'aurais dû faire paraître à toute la terre ; enfin de ce que j'ai <b>profané</b> la vertu en souffrant qu\'on appelât de ce nom ma soumission à tes fantaisies",
        options: ["Regret et accusation d\'Usbek", "Admiration de son sacrifice", "Joie de la soumission", "Indifférence envers son passé"],
        answer: [0],
        explanation: "Les termes péjoratifs reflètent le regret et l\'accusation envers Usbek, exprimant ses sentiments amers quant à ses sacrifices."
        },
        {
        id: 'persane_q30',
        type: 'QCM',
        question: "Comment le champ lexical du sacré 'sacrifice .... j\'ai profané la vertu' est-il utilisé pour exprimer la souffrance de Roxane ?",
        options: ["Il exalte la pureté de sa soumission", "Il banalise ses actions", "Il transforme ses sacrifices en actes de profanation", "Il sanctifie Usbek"],
        answer: [2],
        explanation: "Le champ lexical du sacré montre que ses sacrifices sont comme une profanation, exprimant ainsi la dégradation et la souffrance de Roxane."
        },
        {
        id: 'persane_q31',
        type: 'QCM_EXTRAIT',
        question: "Dans cet extrait qu\'est ce qui montre que Roxane a du regret par rapport à ce qu\'elle a fait ?",
        extract: "Je me suis <b>abaissée</b> jusqu\'à te paraître fidèle; de ce que j\'ai <b>lâchement</b> gardé dans mon coeur ce que j\'<b>aurais dû</b> faire paraître à toute la terre...",
        options: ["Le conditionnel passé", "le présent", "Le champ lexical du sacré", "L\'allitération en f", "les termes péjoratifs"],
        answer:[0, 4],
        explanation: "Le conditionnel passé et les termes péjoratifs. Les propositions sont accusatrices, mais  sonnent aussi comme des regrets comme le prouvent les termes péjoratifs qui désignent son attitude et l\'usage du conditionnel passé."
        },
        {
        id: 'persane_q32',
        type: 'QCM_EXTRAIT',
        question: "Comment s\'appelle la figure de style qui consiste à répéter un mot sous des forme grammaticales différentes ?",
        extract: "Tu étais étonné de ne point <b>trouver</b> en moi les transports de l\'amour : si tu m\'avais bien connue, tu y <b>aurais trouvé</b> toute la violence de la haine. Mais tu as eu longtemps l\'avantage de <b>croire</b> qu\'un coeur comme le mien t\'était soumis. Nous étions tous deux heureux; tu (A) me (B) <b>croyais</b> trompée, et je (B) te (A) trompais.",
        options: ["Polysémie", "Polyacétate", "Polygone", "Polyptote"],
        answer: [3],
        explanation: "Polyptote (poly = plusieurs) Par la répétition des verbes 'tromper' et 'croire' elle montre l\'écart qu\'il y avait entre ce qu\'il croyait et la réalité."
        },
        {
        id: 'persane_q33',
        type: 'VF',
        question: "AFFIRMATION : Roxane est sincère lorsqu\'elle dit 'Nous étions tous deux heureux'.",
        answer: 'Faux',
        explanation: "Faux c\'est de l\'ironie. Dans ce passage, avec ironie  elle oppose à l\'amour qu\'il pensait trouver en elle toute la colère qu\'elle ressent à son égard. "
        },
        {
        id: 'persane_q34',
        type: 'QCM_EXTRAIT',
        question: "Pourquoi a-t-on ici une antithèse et une hyperbole (exagération)?",
        extract: "Tu étais étonné de ne point trouver en moi les <b>transports de l\'amour</b> : si tu m\'avais bien connue, tu y aurais trouvé <b>toute la violence de la haine</b>... Tu (A) me (B) <b>croyais</b> trompée, et je (B) te (A) trompais.",
        options: ["Antithèse car elle oppose l\'amour qu\'il pensait trouver à la colère qu\'elle ressent à son égard ", "Hyperbole car elle exagere le sentiment de haine", "Hyperbole car elle exagere le sentiment de l\'amour"],
        answer: [0, 1],
        explanation: "Avec l\'antithèse et l\'hyperbole, elle oppose avec ironie l\'amour qu\'il pensait trouver en elle toute la colère qu\'elle ressent à son égard."
        },
        {
        id: 'persane_q35',
        type: 'QCM_EXTRAIT',
        question: "Comment s\'appelle la figure de style qui dispose au moins 2 éléments en miroir dans une phrase ?",
        extract: "... <b>Tu</b> (A) <b>me</b> (B) croyais trompée, et <b>je</b> (B) <b>te</b> (A) trompais.",
        options: ["Antithèse", "Hyperbole", "Chiasme"],
        answer: [2],
        explanation: "Le chiasme des pronoms montre encore l\'aveuglement d’\Usbek et de nouveau, renverse les rapports de force : alors qu\'il croyait dominer la situation, c\'est elle qui l\'a dominée. "
        },
        {
        id: 'persane_q36',
        type: 'QCM_EXTRAIT',
        question: "Quels sont les verbes en polyptote dans cette phrase ?",
        extract: "Tu étais étonné de ne point <b>trouver</b> en moi les transports de l\'amour : si tu m\'avais bien connue, tu y <b>aurais trouvé</b> toute la violence de la haine. Mais tu as eu longtemps l\'avantage de <b>croire</b> qu\'un coeur comme le mien t\'était soumis. Nous étions tous deux heureux; tu (A) me (B) <b>croyais trompée</b>, et je (B) te (A) <b>trompais</b>.",
        options: ["Etre", "Trouver", "Avoir", "Croire", "Tromper"],
        answer: [1, 3, 4],
        explanation: "Polyptote (poly = plusieurs) Par la répétition des verbes 'tromper', 'croire', 'trouver' elle montre l\'écart qu\'il y avait entre ce qu\'il croyait et la réalité."
        },
        {
        id: 'persane_q37',
        type: 'QCM_EXTRAIT',
        question: "Que montre encore une fois la question réthorique de cet extrait ?",
        extract: "Ce langage, sans doute, te paraît nouveau. <b>Serait-il possible qu\'après t\'avoir accablé de douleurs, je te forçasse encore d\'admirer mon courage?</b>",
        options: ["Renverse le rapport de force", "Remet les idées en place", "Apporte de la légèreté"],
        answer: [0],
        explanation: "Cette question rhétorique montre encore une fois qu\'elle <b>renverse les rapports de force</b> : alors qu\'il la pensait soumise à son pouvoir, <b>c\'est elle qui le soumet</b> à admirer son courage. Elle est d\'ailleurs en position de <b>« sujet »</b> dans la phrase alors que lui, avec le  tu », est en fonction de <b>COD</b>. Syntaxiquement, il lui est là aussi soumis. Cette question annonce et prépare le coup de grâce final. Elle s\'attribue également la qualité de « courage » qui est une qualité traditionnellement masculine pour renverser les rapports de force. En se tuant comme une héroïne tragique : elle se libère définitivement de lui et lui vole la possibilité de se venger contre elle."
        },
        {
        id: 'persane_q38',
        type: 'QCM_EXTRAIT',
        question: "Comment s\'appelle la figure de style consistant à répéter une consonne plusieurs fois et à quoi sert-elle ici ?",
        extract: "<b>m</b>ais c\'en est fait, le poison force <b>m</b>'abandonne  <b>m</b>e consu<b>m</b>e, <b>m</b>a force <b>m</b>'abandonne; la plu<b>m</b>e <b>m</b>e tombe des <b>m</b>ains ; je sens affaiblir jusqu\'à <b>m</b>a haine ; je <b>m</b>e <b>m</b>eurs.",
        options: ["Assonance qui sert à ajouter du rythme", "Allitération en 'm' douce pour imiter le silence qui gagne Roxane qui meurt"],
        answer: [0],
        explanation: "L\'allitération en [m] est douce et imite le silence qui gagne Roxane alors qu\'elle est en train de mourir. "
        },
        {
        id: 'persane_q39',
        type: 'QCM_EXTRAIT',
        question: "Pourquoi le reste de cette phrase est composé de propositions juxtaposées courtes et simples ?",
        extract: "mais c\'en est fait<b>,</b> le poison force m\'abandonne me consume<b>,</b> ma force m\'abandonne<b>;</b> la plume me tombe des mains <b>;</b> je sens affaiblir jusqu\'à ma haine <b>;</b> je me meurs<b>.</b>",
        options: ["Pour montrer la rapidité de la scène", "Pour mimer la difficulté de Roxane pour écrire"],
        answer: [1],
        explanation: "Le reste de la phrase est composé de propositions juxtaposées courtes et simples comme pour mimer la difficulté qu\'a Roxane pour écrire. "
        },
        {
        id: 'persane_q40',
        type: 'QCM_EXTRAIT',
        question: "Quelles sont les figures de style que l\'on retrouve dans cette phrase ?",
        extract: "mais c\'en est fait<b>,</b> le poison force m\'abandonne me consume<b>,</b> ma force m\'abandonne<b>;</b> la plume me tombe des mains <b>;</b> je sens affaiblir jusqu\'à ma haine <b>;</b> je me meurs<b>.</b>",
        options: ["Rythme ternaire", "Assonance", "Allitération", "Gradation", "Verbe pronominal"],
        answer: [0, 2, 3, 4], 
        explanation: "Le reste de la phrase est composé de propositions juxtaposées courtes et simples comme pour mimer la difficulté qu\'a Roxane pour écrire. "
        },
        {
        id: 'persane_q41',
        type: 'QCM_EXTRAIT',
        question: "Qu\'annonce la conjonction de coordination 'Mais' ?",
        extract: "<u>mais</u> c\'en est fait<b>,</b> le poison force m\'abandonne me consume<b>,</b> ma force m\'abandonne<b>;</b> la plume me tombe des mains <b>;</b> je sens affaiblir jusqu\'à ma haine <b>;</b> je me meurs<b>.</b>",
        options: ["Annonce la fin de la lettre", "Annonce qu\'elle est obligée de conclure car la mort la gagne", "Annonce le recommencement", "Annonce la défaite"],
        answer: [0, 1], 
        explanation: "La conjonction de coordination « mais » annonce la fin de la lettre : elle est obligée de conclure à cause de la mort qui la gagne. Cette mort est à la fois progressive et rapide. Le reste de la phrase est composé de propositions juxtaposées courtes et simples comme pour mimer la difficulté qu\'a Roxane pour écrire. "
        },
        {
        id: 'persane_q42',
        type: 'QCM_EXTRAIT',
        question: "A la fin du texte, l\'utilisation du verbe pronominal est intéressante pourquoi?",
        extract: "Je me meurs",
        options: ["Le je : me est à la fois sujet et COD", "Elle subit son destin fatal  / mais elle en est aussi à l\'origine", "Meuh font les vaches", "Par la mort elle se libère de son état de soumision"],
        answer: [0, 1, 3],
        explanation: "L\'usage final du verbe « mourir » sous sa forme pronominale est intéressante car le « je » est à la fois sujet et COD ici. Elle subit son destin fatal, tragique, mais elle en est aussi à l\'origine. Par la mort, elle se libère donc définitivement de son état de soumission et fait acte de liberté. "
        }
    ]
},
{
    id: 'manon-lescaut',
    title: 'Manon Lescaut La Rencontre',
    author: 'Abbé Prévost',
    questions: [
        {
            id: 'manon_q1',
            type: 'QCM',
            question: 'Dans quel contexte s\'inscrit Manon Lescaut ? (Plusieurs réponses possibles)',
            options: [
                'Le siècle des Lumières',
                'Une époque de réflexion sur le bonheur individuel',
                'Une période d\'oppression religieuse',
                'L\'époque du romantisme'
            ],
            answer: [0, 1],
            explanation: 'Manon Lescaut est publié en 1731, en plein siècle des Lumières, période où les philosophes réfléchissent sur la notion de bonheur individuel.'
        },
        {
            id: 'manon_q2',
            type: 'QCM',
            question: 'Quelles caractéristiques littéraires définissent cette œuvre ? (Plusieurs réponses possibles)',
            options: [
                'Un roman-mémoires',
                'Un récit enchâssé',
                'Une narration à la première personne',
                'Un roman épistolaire'
            ],
            answer: [0, 1, 2],
            explanation: 'C\'est un roman-mémoires utilisant un récit enchâssé (récit dans lequel sont insérés un ou plusieurs autres récits) où des Grieux raconte son histoire à la première personne à Renancour.'
        },
        {
            id: 'manon_q3',
            type: 'QCM',
            question: 'Quels mouvements structurent cet extrait ? (Plusieurs réponses possibles)',
            options: [
                'L\'apparition mystérieuse du coche',
                'La rencontre passionnée avec Manon',
                'Le portrait ambigu de Manon',
                'Le départ définitif des amants'
            ],
            answer: [0, 1, 2],
            explanation: 'L\'extrait se structure en trois mouvements : l\'arrivée du coche, la rencontre amoureuse, et le portrait ambigu de Manon.'
        },
        {
            id: 'manon_q4',
            type: 'QCM',
            question: 'Qu\'est ce qui pousse les deux amants à dévenir marginaux',
            options: [
                'Pour se faire remarquer',
                'Pour se faire oublier',
                'Pour une quête du bonheur',
            ],
            answer: [2],
            explanation: 'c\'est la quête du bonheur individuel qui pousse les deux amants à devenir des marginaux'
        },
        {
            id: 'manon_q5',
            type: 'QCM',
            question: 'En quelle année est publié le roman-mémoires de l\'abbé Prevost',
            options: [
                '1731',
                '1831',
                '1931',
            ],
            answer: [0],
            explanation: 'Dans le roman-mémoires Manon Lescaut de l\'abbé Prévost, publié en 1731. Au XVII siècle avec l\'apparition du siècle des lumières.'
        },
        {
            id: 'manon_q6',
            type: 'QCM_EXTRAIT',
            question: 'Quel temps utilise le narrateur pour décrire le moment de son départ d\'Amiens et montrer qu\'il s\agit de souvenirs ?',
            extract: "La rencontre avec Manon Lescaut J\'<b>avais marqué</b> le temps de mon départ d\'Amiens.",
            options: [
                'Présent',
                'Passé composé',
                'Plus-que-parfait',
                'Imparfait'
            ],
            answer: [2],
            explanation: 'Le récit est rétrospectif.Le plus-que-parfait est utilisé pour montrer que le narrateur relate des événements passés antérieurs à son récit principal.'
        },
        {
            id: 'manon_q7',
            type: 'VF',
            question: 'Le narrateur regrette de ne pas être parti un jour plus tôt.',
            answer: 'Vrai',
            explanation: 'Le narrateur exprime son regret par l\'interjection "Hélas !".'
        },
            {
            id: 'manon_q8',
            type: 'VF',
            question: 'Affirmation : ce roman est retrospectif.',
            answer: 'Vrai',
            explanation: 'Le narrateurraconte un souvenir".'
        },
            {
            id: 'manon_q9',
            type: 'QCM_EXTRAIT',
            question: 'Comment voit-on qu\'il s\'agit d\'un roman <b>RETROSPECTIF</b>? (plusieurs réponses possibles)',
            extract: "La rencontre avec Manon Lescaut J\'avais marqué le temps de mon départ d\'Amiens. Hélas ! que ne le marquai-je un jour plus tôt ! j\'aurais porté chez mon père toute mon innocence. La veille même de celui que je devais quitter cette <b>ville</b>, étant à me promener avec mon ami, qui s\'appelait Tiberge, nous vîmes arriver le <b>coche</b> d\'<b>Arras</b>, et nous le suivîmes jusqu\'à l\'hôtellerie où ces voitures descendent. Nous n\'avions pas d\'autre motif que la curiosité",
            options: [
                'Utilisation Pronom Personel je',
                'Début au plus-que-parfait',
                'Le narrateur est interne à l\'histoire',
                'Champ lexical de la nature'
            ],
            answer: [0, 1, 2],
            explanation: " Je + plus-que-parfait : le narrateur est interne à l\'histoire. Il raconte un souvenir a posteriori. Le récit est rétrospectif. "
        },
        {
            id: 'manon_q10',
            type: 'QCM_EXTRAIT',
            question: 'Quel champ lexical est principalement utilisé dans ce passage ?',
            extract: "J\'avais marqué le temps de mon départ d\'<b>Amiens</b>. Hélas ! que ne le marquai-je un jour plus tôt ! j\'aurais porté chez mon père toute mon innocence. La veille même de celui que je devais quitter cette <b>ville</b>, étant à me promener avec mon ami, qui s\'appelait Tiberge, nous vîmes arriver le <b>coche</b> d\'<b>Arras</b>, et nous le suivîmes jusqu\'à l\'<b>hôtellerie</b> où ces voitures descendent. Nous n\'avions pas d\'autre motif que la curiosité",
            options: [
                'Champ lexical de l\'amour',
                'Champ lexical de la ville',
                'Champ lexical de la guerre',
                'Champ lexical de la nature'
            ],
            answer: [1],
            explanation: "Le texte utilise un champ lexical de la ville avec des mots comme 'ville', 'coche', 'Arras'."
        },
        {
            id: "manon_q11",
            type: "VF",
            question: "Affirmation : le cadre urbain et réaliste est important dans le passage",
            answer: "Vrai",
            explanation: "Le cadre urbain et réaliste donne du crédit à l\'histoire de Des Grieux et prépare la rencontre exceptionnelle. Il permet d\'ancrer l\'histoire dans un cadre réaliste, accroissant l\'authenticité du récit."
        },
        {
            id: 'manon_q12',
            type: 'QCM_EXTRAIT',
            question: 'Dans ce passage, il insiste sur le cadre temporel avec les indications de lieu et le CC de temps (en gras ci-dessous) et précise qu\'il était sur le point de partir, Pourquoi ?',
            extract: "J\'avais marqué le temps de <b>mon départ d\'Amiens</b>. Hélas ! que ne le marquai-je un jour plus tôt ! j\'aurais porté chez mon père toute mon innocence. <b>La veille même de celui que je devais quitter cette ville</b>, étant à me promener avec mon ami, qui s\'appelait Tiberge, nous vîmes arriver le coche d\'Arras, et nous le suivîmes jusqu\'à l\'hôtellerie où ces voitures descendent. Nous n\'avions pas d\'autre motif que la curiosité",
            options: [
                'Pour montrer que la rencontre relève du hasard et du destin',
                'Pour que tout le monde sache où il était'
            ],
            answer: [0],
            explanation: "« mon départ à Amiens » + CC de temps « la veille même de celui que je devais quitter cette ville » : Il insiste sur le cadre temporel → il est sur le point de partir. La rencontre relève donc du hasard et du destin, aurait pu être manquée à un jour près. Il insiste sur le hasard temporel. Cette rencontre sera donc nécessairement exceptionnelle."
        },
        {
            id: "manon_q13",
            type: "QCM",
            question: "Quelle est l\'interjection utilisée par le narrateur pour exprimer son regret ?",
            options: [
                "Hélas",
                "Oh",
                "Ah",
                "Oups"
            ],
            answer: [0],
            explanation: " Interjection « Hélas ! », l\'exclamation et le conditionnel « j\'aurais porté chez mon père tout mon innocence » : ton de la plainte, du regret. On comprend que cela n\'a pas été le cas. Cela prépare la rencontre, suscite la curiosité du lecteur et crée un effet d\'annonce tragique. Que s\'est-il passé ? "
        },
        {
            id: 'manon_q14',
            type: 'QCM_EXTRAIT',
            question: 'Quel procédés utilise l\'auteur dans ce passage pour susciter la curiosité du lecteur? (plusieurs réponses possibles)',
            extract: "Hélas ! que ne le marquai-je un jour plus tôt ! j\'aurais porté chez mon père toute mon innocence.",
            options: [
                'Des points de suspension',
                'Une interjection',
                'Une exclamation',
                'Une le conditionnel'
            ],
            answer: [1, 2, 3],
            explanation: "Interjection « Hélas ! », l\'exclamation et le conditionnel « j\'aurais porté chez mon père tout mon innocence » : ton de la plainte, du regret. On comprend que cela n\'a pas été le cas. Cela prépare la rencontre, suscite la curiosité du lecteur et crée un effet d\'annonce tragique. Que s\'est-il passé ?"
        },

        {
            id: "manon_q15",
            type: "Vrai/Faux",
            question: "La scène de la promenade est décrite comme une scène exceptionnelle dès le début.",
            answer: "Faux",
            explanation: "La scène est décrite d\'abord comme anodine (cadre urbain réaliste & banal) avant de devenir exceptionnelle."
        },
        {
            id: "manon_q16",
            type: "QCM",
            question: "Pourquoi décrit-il un cadre urbain banal (« ville », « coche », « Arras », « hôtellerie », « voitures ») ?",
            options: [
                "Ces <b>précisions</b> donnent du crédit à l\'histoire",
                "Pour faire pitié",
            ],
            answer: [0],
            explanation: "Champ lexical de la ville « ville », « coche », « Arras », « hôtellerie », « voitures » + scène de promenade anodine : cadre urbain, réaliste et banal. Ce cadre commun permet d\'abord de donner des précisions et donc du crédit à l\'histoire de Des Grieux (on rappelle que Manon Lescaut est un roman-mémoires, une fausse autobiographie). Cela prépare également de nouveau la rencontre. Cette scène banale va se transformer en scène exceptionnelle."
        },
        {
            id: "manon_q17",
            type: "QCM",
            question: "Quels types de verbes annoncent la rencontre ?",
            options: [
                "Verbes de sensation",
                "Verbes de vue",
            ],
            answer: [1],
            explanation: "Champ lexical de la ville « ville », « coche », « Arras », « hôtellerie », « voitures » + scène de promenade anodine : cadre urbain, réaliste et banal. Ce cadre commun permet d\'abord de donner des précisions et donc du crédit à l\'histoire de Des Grieux (on rappelle que Manon Lescaut est un roman-mémoires, une fausse autobiographie). Cela prépare également de nouveau la rencontre. Cette scène banale va se transformer en scène exceptionnelle."
        },
        {
            id: 'manon_q18',
            type: 'QCM_EXTRAIT',
            question: 'Comment sait-on que l\'apparition du coche est importante  (que c\'est un élément perturbateur)?',
            extract: "...nous vîmes arriver le coche d\'Arras, et nous le suivîmes jusqu\'à l\'hôtellerie où ces voitures descendent.",
            options: [
                'Utilisation de l\'article défini "le" et pas "un"',
                'Temps utilisé',
            ],
            answer: [0],
            explanation: "L\'article est défini (« le » et pas « un »), ce qui laisse présager qu\'il est important, que son apparition est un élément perturbateur. Les actions instaurent du suspense et créent le mystère : qui est dans ce coche ? Le lecteur veut le découvrir."
        },
            {
            id: 'manon_q19',
            type: 'QCM_EXTRAIT',
            question: 'Comment se déresponsabilise -t-il avec cette phrase?',
            extract: "Nous n\'avions pas d\'autre motif que la curiosité.",
            options: [
                'Il se justifie en disant que le suivre n\'est que curiosité',
                'Négation restrictive (il ne pouvait faire que ça)',
                'utilisation du present'
            ],
            answer: [0,1],
            explanation: "Il se deresponsabilise d\'emblé avec cette négation restrictive. Son intention est donc tout à fait innocente. Cependant, le mot « curiosité » rappelle le péché originel : Adam, tenté par Eve, a été trop curieux et a mangé le fruit interdit, ce qui a conduit à sa perte. L\'abbé Prévost semble ici réécrire cet épisode biblique.  "
        },
        {
            id: 'manon_q20',
            type: 'QCM_EXTRAIT',
            question: 'A quoi fait allusion le mot "curiosité" dans cette phrase?',
            extract: "Nous n\'avions pas d\'autre motif que la curiosité.",
            options: [
                'Le péché originel d\'Adan et Eve',
                'Au film les 5 curiosotés',
                'A la chambre des curiosités',
            ],
            answer: [0],
            explanation: "La « curiosité » rappelle le péché originel : Adam, tenté par Eve, a été trop curieux et a mangé le fruit interdit, ce qui a conduit à sa perte. L\'abbé Prévost semble ici réécrire cet épisode biblique.  "
        },
        {
            id: 'manon_q21',
            type: 'QCM_EXTRAIT',
            question: 'De quoi parle le mouvement 2 de ce texte?',
            extract: "Il en sortit quelques femmes […] maîtresse de mon coeur.",
            options: [
                'L\'arrivée du coche',
                'La banalité des lieux',
                'La rencontre et avec Manon Lescaut',
                'La violente passion amoureuse pour Manon Lescaut',
            ],
            answer: [2,3],
            explanation: "Mouvement 2 = Le narrateur rencontre Manon Lescaut et est pris d\'une violente passion amoureuse."
        },
        {
            id: 'manon_q22',
            type: 'QCM_EXTRAIT',
            question: 'Quelles figures de styles permettent de monterer que l\'observation des femmes est <b>anodine</b> mais l\'apparition de Manon est <b>extraordinaire</b>?',
            extract: "Il en sortit <b>quelques</b> <u>femmes</u> qui se retirèrent aussitôt; <i>mais</i> il en resta <b>une</b>, <u>fort jeune</u>, qui s\'arrêta seule dans la cour, pendant qu\'un homme d\'un âge avancé, qui paraissait lui servir de conducteur, s\'empressait de faire tirer son équipage des paniers.",
            options: [
                'Des antithèses',
                'Des periphrases',
                'Une conjonction de coordination à valeur d\'opposition',
                'l\'adverbe "quelques" opposé au déterminant "une"',
                'l\'exclamation',
            ],
            answer: [0,2,3],
            explanation: "Déterminant indéfini : 'quelques femmes' qui s\'oppose à la singularité de Manon 'une, fort jeune...'<br> Plusieurs antithèses « quelques » / « une », « se retirèrent »/ « resta », « femmes »/ « fort jeune » <br>Conjonction de coordination à valeur d\'opposition « mais » : L\'observation des femmes était anodine, mais l\'apparition de Manon est extraordinaire. Elle est mise en valeur. La cour est comme une scène de théâtre."
        },
        {
            id: "manon_q23",
            type: "QCM",
            question: "Sur quoi insiste l\'auteur avec l\'adverbe intensif 'fort' et l\'adjectif 'jeune' ?",
            options: [
                "La musculture de Manon",
                "La jeunesse et l\'innocence de Manon",
            ],
            answer: [1],
            explanation: "Se sont les seules caractéristiques connues a ce niveau du texte : insistent sur sa jeunesse et donc sur son innocence, mais on verra qu\'elle n\'est pas si innocente…"
        },
        {
            id: 'manon_q24',
            type: 'QCM_EXTRAIT',
            question: 'L\'antithèse "jeune" / "homme d\'un age avancé, peut être un indice pour la suite, lequel ?',
            extract: "...mais il en resta une, <b>fort jeune</b>, qui s\'arrêta seule dans la cour, pendant qu\'un homme d\'un <b>âge avancé</b>.",
            options: [
                'Ce viel homme peut représenter le type du vieux barbon',
                'Il va y avoir un choc des génération',
            ],
            answer: [0],
            explanation: " Antithèse « jeune » / « homme d\'un âge avancé » qui peut être un indice de la suite de l\'histoire. Ce vieil homme peut représenter : <br>le type du vieux barbon (=type de comédie, vieil homme qui se croit aimé de femmes plus jeunes), <br>les futurs courtisans de Manon.."
        },
        {
            id: 'manon_q25',
            type: 'QCM_EXTRAIT',
            question: 'De quelle figure de style s\'agit-il?',
            extract: "je me trouvai enflammé tout d\'un coup jusqu\'au transport (=extase)",
            options: [
                'Periphrase où le feu exprime la chaleur',
                'Metaphore hyperbolique où le feu exprime la force de manon',
                'Metaphore hyperbolique où le feu exprime la force de cette passion',
            ],
            answer: [2],
            explanation: "Métaphore hyperbolique. Le feu exprime la force de cette passion + CC « tout d\'un coup » exprime  son caractère soudain. « Transport » fait également partie du vocabulaire de la tragédie. De nouveau, cette rencontre paraît être sous le signe du destin et de la fatalité."
        },
        {
            id: 'manon_q26',
            type: 'QCM_EXTRAIT',
            question: 'Comment s\'appelle la figure de style qui consiste à répéter un mot et à quoi sert-elle?',
            extract: "Elle me parut si charmante, que <b>moi</b>, qui n\'avais jamais pensé à la différence des sexes, ni ...<b>moi</b>, dis-je, dont tout le monde...fût encore moins âgée que <b>moi,</b> elle reçut mes politesses sans paraître ...entée que <b>moi</b>",
            options: [
                'Métonimie pour souligner que la passion ressentie est contraire au caractère de l\'auteur',
                'Anaphore pour souligner que la passion ressentie est contraire au caractère de l\'auteur',
                'Synecdote pour souligner que la passion ressentie est contraire au caractère de l\'auteur',
            ],
            answer: [1],
            explanation: "L'anaphore 'moi' souligne que le sentiment amoureux est contraire au caractère du narrateur."
        },
        {
        id: 'manon_q27',
            type: 'QCM_EXTRAIT',
            question: 'L\'auteur fait son autoportrait avec des mots mélioratif (à son avantage), lequels?',
            extract: "moi, dis-je, dont tout le monde admirait la sagesse et la retenue, je me trouvai enflammé tout d\'un coup jusqu\'au transport.",
            options: [
                'monde',
                'sagesse',
                'retenue',
                'enflamé',
            ],
            answer: [1,2],
            explanation: "Mots mélioratifs à son avantage: sagesse, retenue"
        },
        {
        id: 'manon_q28',
            type: 'QCM_EXTRAIT',
            question: 'Dans cette expression, il reprends les propos des autres de façon hyperbolique, Pourquoi?',
            extract: "tout le monde admirait",
            options: [
                'Pour faire de lui un exemple de vertu',
                'Pour faire un parallele avec sa grande taille',
                'Pour montrer qu\'au vue de sa vertue, il est exceptionnel qu\il tombe amoureux',
            ],
            answer: [0,2],
            explanation: "Il reprend les propos des autres de façon hyperbolique (« tout le monde admirait ») pour faire de lui un exemple de vertu. Il est donc exceptionnel qu\'il soit tombé amoureux."
        },
        {
        id: 'manon_q29',
            type: 'QCM_EXTRAIT',
            question: 'A travers la série de négation sur quoi insiste-t-il?',
            extract: "moi, qui <b>n</b>\'avais <b>jamais</b> pensé à la différence des sexes, <b>ni</b> regardé une fille avec un peu d\'attention",
            options: [
                'Qu\'il n\'avait jamais été intéréssé par les femmes',
                'Que les femme sont l\'égale de l\'homme',
            ],
            answer: [0],
            explanation: "Avec ces négations, il insiste sur le fait qu\'il n\'avait jamais été intéressé par les femmes. "
        },
        {
        id: 'manon_q30',
            type: 'QCM_EXTRAIT',
            question: 'Il se décrit plûtot comme une personne:',
            extract: "moi, qui <b>n</b>l\'avais <b>jamais</b> pensé à la différence des sexes, <b>ni</b> regardé une fille avec un peu d\'attention...j\'avais le défaut d\'être excessivement timide et facile à déconcerter ",
            options: [
                'Virile',
                'Confiante',
                'Ingénue',
            ],
            answer: [2],
            explanation: "Avec les <b>négations</b>, il insiste sur le fait qu\'il n\'avait jamais été intéressé par les femmes.<br>Avec l\'hyperbole 'j\'avais le défaut d\'être excessivement timide et facile à déconcerter' il se peint aussi comme inocent "
        },
        {
            id: "manon_q31",
            type: "QCM",
            question: "Manon L. est décrite comme 'si charmante', pourquoi utiliser l\'adjectif intensif si?",
            options: [
                "Pour insister l\'adjectif mélioratif 'charmante'",
                "Pour semer le doute",
            ],
            answer: [0],
            explanation: "L\'adverbe intensif « si » insiste sur l\'adjectif mélioratif. Elle a donc un physique avantageux. Cest tout ce que l'on sait d'elle, avec le fait qu\'elle soit jeune, ce qui la rend mystérieuse. Mais elle n\'est pas simplement belle, elle est « charmante ». L\'adjectif vient du latin carmen qui signifie le chant, l\'envoûtement. Le narrateur est donc comme ensorcelé. La périphrase « la maîtresse de mon coeur » montre qu\'il lui appartient. Il est comme prisonnier de cet amour."
        },
        {
            id: "manon_q32",
            type: "QCM",
            question: "Pourquoi l\'auteur choisit d\'utiliser le terme 'charmante' pour la décrire?",
            options: [
                "Charmante : adjectif qui vient du latin et qui signifie femme des champs",
                "Charmante : adjectif qui vient du latin et qui signifie la jeneusse éternelle",
                "Charmante : adjectif qui vient du latin et qui signifie le chant et l\'envoutement",
            ],
            answer: [0],
            explanation: "L\'adjectif vient du latin carmen qui signifie le chant, l\'envoûtement. Le narrateur est donc comme ensorcelé. La périphrase « la maîtresse de mon coeur » montre qu\'il lui appartient. Il est comme prisonnier de cet amour."
        },
        {
            id: "manon_q33",
            type: "QCM_EXTRAIT",
            question: "En se présentant comme un innocent ensorcelé par une séductrice, il veut excuser ses futures actions. Mais l\'est-il vraiment",
            extract: "<b>mais</b>, loin d\'être arrêté alors par cette faiblesse, je m\'avançai vers la maîtresse de mon cœur.",
            options: [
                "Non, il n\'est pas vraiment innocent comme le montre la conjonction de coordination mais (malgré sa timidité, il s\'avance)",
                "Oui, Manon Lescault est la seule responsable",
            ],
            answer: [0],
            explanation: "Il n\'est pas si naïf comme le montre la conjonction de coordination « mais » : malgré sa timidité, il s\'avance vers elle. Ses actions ne concordent pas avec son portrait. Cela laisse entrevoir que la narration serait biaisée"
        },
        {
            id: "manon_q34",
            type: "QCM",
            question: "Le mouvement 3 concerne : ",
            options: [
                "La scene de rencontre",
                "L\'echange avec Manon L. pour dresser son portrait ambigu",
                "Le coup de foudre",
            ],
            answer: [1],
            explanation: "Mouvement 3 = L\'échange avec Manon permet de brosser un portrait ambigu du personnage qui apparaît comme la cause d\'un destin tragique"
        },
        {
            id: "manon_q35",
            type: "QCM_EXTRAIT",
            question: "Pourquoi le verbe envoyer est répété 2 fois.",
            extract: "elle y était <b>envoyée</b> par ses parents pour être religieuse..., que je regardai ce dessein ... <u>c\'était malgré elle</u> qu\'on l\'<b>envoyait</> au couvent,",
            options: [
                "Pour faire un parallele avec l\'envoi d\'un courrier",
                "Pour insister sur sa situation",
            ],
            answer: [0],
            explanation: "Avec la répétition de envoyer et l\'expression 'c\'était malgre elle': l\'auteur montre que Manon est victime d\'une décision de ses parents. Elle est menacée d\'enfermement. On enfermait des filles de force au couvant, ce qui a été critiqué par Diderot dans son roman La Religieuse au XVIIIe siècle. Elle le type de la demoiselle en détresse. Le narrateur va se sentir obligé de la sauver."
        },
        {
            id: "manon_q36",
            type: "QCM",
            question: "La description de Manon L. concorde-t-elle avec l\'expression 'répondit ingénument'",
            options: [
                "Oui",
                "Non",
            ],
            answer: [1],
            explanation: "Avec l\'expression 'répondit ingénument' elle parait naive. Mais cette adverbe  avec le reste de son portrait. Son portrait est donc très ambigu, ce qui la rend d\'autant plus mystérieuse. En effet, elle n\'est en réalité pas si ingénue.  "
        },
        {
            id: "manon_q37",
            type: "QCM_EXTRAIT",
            question: "Que montre la proposition circonstancielle de concession 'quoiqu\'elle",
            extract: "Quoiqu\'elle fût encore moins âgée que moi, elle reçut mes politesses sans paraître embarrassée.",
            options: [
                "Un parallèle",
                "Une similitude",
                "Un paradoxe",
            ],
            answer: [2],
            explanation: "'quoiqu’elle' → paradoxe. Malgré sa jeunesse, son innocence apparente, elle reçoit ses compliments comme si elle y était habituée. Puis à travers une comparaison, on apprend qu\'« est bien plus expérimentée », ce qui est de nouveau paradoxal, puisqu\'elle a été envoyée de force au couvent pour arrêter « son penchant au plaisir », « qui s\'était déjà déclaré » → l\'adverbe « déjà » montre que c\'est surprenant. Manon = séductrice voire une libertine. DG = sa victime"
        },
        {
            id: "manon_q38",
            type: "QCM_EXTRAIT",
            question: "Que montre l\'adverbe déjà?",
            extract: " son penchant au plaisir ... qui s\'était déjà déclaré",
            options: [
                "que c\'est surprenant",
                "que c\'est exceptionel",
            ],
            answer: [0],
            explanation: "L\'adverbe « déjà » montre que c\'est surprenant. Manon = séductrice voire une libertine. DG = sa victime"
        },
        {
            id: "manon_q39",
            type: "QCM_EXTRAIT",
            question: "Pourquoi ajouter l\'adjectif possessif 'miens' à la fin?",
            extract: "qui a causé par la suite tous ses malheurs et les miens",
            options: [
                "Pour mettre en valeur que le narrateur n\'a été que victime",
                "Pour montrer sn implication",
            ],
            answer: [0],
            explanation: "Pronom possessif « miens » à la fin comme pour mettre en valeur que le narrateur n\'a été que sa victime. "
        },
        {
            id: "manon_q40",
            type: "QCM_EXTRAIT",
            question: "Dans cette phrase qui est le sujet et qu\'est ce que cela montre ?",
            extract: "L\'amour me rendait déjà si éclairé depuis un moment qu\'il était dans mon cœur, que je regardai ce dessein comme un coup mortel pour mes désirsqui a causé par la suite tous ses malheurs et les miens",
            options: [
                "L\'amour est le sujet et le narrateur (me) est le COI",
                "L\'amour est epithète et le narrateur (me) est le sujet",
            ],
            answer: [0],
            explanation: "L\'amour est le sujet et 'me' le COI : ce qui montre qu\'il agit uniquement par amour, emporté malgré lui, sans véritable maîtrise de ses actes"
        },
        {
            id: "manon_q41",
            type: "QCM",
            question: "Pourquoi cette narration est subjective et biaisé?",
            options: [
                "Car c\'est écrit au passé",
                "Car on ne sait rien de ce que pense Manon L.",
            ],
            answer: [1],
            explanation: "cette narration est subjective et paraît biaisée : peut-on vraiment faire confiance ce qu\'il raconte ? On ne sait rien du point de vue de Manon. On ne sait même pas ce qu\'elle lui dit exactement puisque le discours indirect est beaucoup moins précis que le discours direct."
        }
    ]                          
},
{
    "id": "on-ne-badine-pas",
    "title": "On ne badine pas avec l'amour - Acte II, scène 5",
    "author": "Alfred de Musset",
    "questions": [
        {
            "id": "badine_q1",
            "type": "QCM",
            "question": "À quelle époque Alfred de Musset a-t-il écrit *On ne badine pas avec l'amour* ?",
            "options": ["Fin XVIIIe siècle", "Années 1830", "Années 1850", "Fin XIXe siècle"],
            "answer": [1],
            "explanation": "La pièce a été écrite après le retour d'Italie de Musset et sa rupture avec George Sand, dans les années 1830."
        },
        {
            "id": "badine_q2",
            "type": "QCM",
            "question": "Après l'échec cuisant de sa pièce La Nuit Vénitienne qui n'attire pas le public populaire. Il décide alors de s'émanciper des contraintes scéniques et cré un théatre destiné à être lu et non joué. Lequel ?",
            "options": ["Un spectabcle dans un fauteuil", "Divan et fauteuils", "La fauteuil attitude"],
            "answer": [0],
            "explanation": "Un spectacle dans un fauteuil qui contient On ne badine pas avec l'amour, pièce composée après le retour d'Italie de Musset et sa rupture avec la romancière George Sand."
        },
        {
            "id": "badine_q3",
            "type": "QCM",
            "question": "De quoi parle le mouvement 1 ?",
            "options": ["Mouvement 1 : Un plaidoyer pour le mariage", "Mouvement 1: Un réquisitoire contre le couvent et l'amour divin", "Mouvement 2 : Un plaidoyer pour le mariage", "Mouvement 2: Un réquisitoire contre le couvent et l'amour divin"],
            "answer": [1,2],
            "explanation": "D'abord il dénonce avec un réquisitoire contre le couvent dans le mouvement 1 puis il fait l'éloge de l'amour humain dans le mouvement 2 "
        },
        {
            "id": "badine_q4",
            "type": "VF",
            "question": "AFFIRMATION : Perdican vouvoie Camille et Camille tutoie Perdican",
            "answer": "Faux",
            "explanation": " le « vous » de Camille montre la distance qu'elle met entre elle et Perdican depuis le début de la pièce. Le « tu » de Perdican peut ici montrer sa posture de supériorité : il entend lui faire la « leçon » pour contrer celle des religieuses (le terme est plus bas). Il se sert de la parole dans un but critique et didactique."
        },
        {
            "id": "badine_q5",
            "type": "QCM_EXTRAIT",
            "question": "Cette réplique est une didascalie interne qui évoque des sentiments négatifs pour indiquer implicitement quoi?",
            "extract": "Vous me faites <u>peur</u> ; la La réplique est <u>colère</u> vous prend aussi.",
            "options": ["L'arrivée prochaine d'une tempête", "L'implication de perdican","l'emportement de Perdican"],
            "answer": [2],
            "explanation": "La réplique est colère vous prend aussi. une didascalie interne qui indique implicitement le ton et l'emportement de Perdican à travers l'évocation de sentiments négatifs"
        },
        {
            "id": "badine_q6",
            "type": "VF",
            "question": "AFFIRMATION : Camille et Perdican se réconcilient à la fin de la scène.",
            "answer": "Faux",
            "explanation": "La scène se termine par le départ de Perdican, qui ne laisse pas de place à la réconciliation."
        },
        {
            "id": "badine_q6b",
            "type": "QCM_EXTRAIT",
            "question": "Par quoi débute la leçon que donne Perdican à Camille dans le premier mouvement ?",
            "extract": " Sais-tu ce que c'est que des nonnes, malheureuse fille <b>?</b> Elles qui te représentent l'amour des hommes comme un mensonge <b>?</b> Savent-elles que c'est un crime qu'elles font de venir chuchoter un mensonge, savent-elles qu'il y a pis encore, le à une vierge des paroles de femme <b>?</b>",
            "options": ["Une explication paternelle", "Une succession de questions rhétoriques","l'évocation du paradis"],
            "answer": [1],
            "explanation": "Cette « leçon » débute par une succession de questions rhétoriques qui s'allongent progressivement. Perdican dénonce la fausseté de l'amour divin et veut éclairer Camille digne de pitié, comme le souligne l'adjectif pathétique « malheureuse », pour avoir été la victime des religieuses. "
        },
        {
            "id": "badine_q7",
            "type": "QCM_EXTRAIT",
            "question": "Pourquoi Perdican utilise l'adjectif pathétique 'Malheureuse' pour parler à Camille ?",
            "extract": " Sais-tu ce que c'est que des nonnes, mensonge de <b>malheureuse</b> fille ?",
            "options": ["Pour la placer comme une victime et ainsi dénoncer l'amour divin", "Pour humilier camille qui n'est pas digne de pitié"],
            "answer": [0],
            "explanation": "l'adjectif pathétique « malheureuse », est utilisé pour montrer qu'elle a été la victime des religieuses. Perdican dénonce la fausseté de l'amour divin et veut éclairer Camille digne de pitié. "
        },
        {
            "id": "badine_q8",
            "type": "QCM_EXTRAIT",
            "question": "Comment voit-on que Perdican est particulièrement accusateur à l'égard de la religion ?",
            "extract": "Sais-tu ce que c'est que <b>des nonnes</b>, mensonge de malheureuse fille ? Elles qui te représentent l'amour des hommes comme un mensonge ? Savent-elles que c'est un <u>crime</u> qu'elles font de venir chuchoter un <u>mensonge</u>, savent-elles qu'il y a pis encore, le à une vierge des paroles de femme ?",
            "options": ["Il se fait passer pour une victime", "Il nomme les religieuse par un nom péjoratif 'nonnes'","Il utilise un champ lexical flateur","Il utilise un champ lexical péjoratif","il enchaine des questions rhétoriques"],
            "answer": [1,3,4],
            "explanation": "Le propos de Perdican est particulièrement accusateur à l'égard de la religion : il nomme les religieuses à travers un nom péjoratif et utilise un champ lexical péjoratif pour décrire leurs actions. Le chiasme souligne la fausseté de leur enseignement tout comme l'antithèse."
        },
        {
            "id": "badine_q9",
            "type": "QCM_EXTRAIT",
            "question": "Comment s'appelle cette figure de style qui consiste à disposer en mirroir des éléments d'une phrase ?",
            "extract": "Elles qui te représentent <b>l'amour des hommes</b> comme un <u>mensonge</u> ? Savent-elles qu'il y a pis encore, le <u>mensonge</u> de l'<b>amour divin</b> ?",
            "options": ["Une rododindronade qui montre que l'enseignement des nonnes est faux", "Un croisillon qui montre l'inexactitude de l'enseignement","Un chiasme qui souligne la fausseté de l'enseignement des nonnes"],
            "answer": [2],
            "explanation": "Le chiasme souligne la fausseté de l'enseignement tout comme l'antithèse. 'Chuchoter à une vierge des paroles de femme'"
        },
        {
            "id": "badine_q10",
            "type": "QCM_EXTRAIT",
            "question": "Que déplore Perdican avec l'interjection 'Ah !', l'exclamation et l'adverbe d'intensité 'comme' repris en début de phrase (=anaphore) ?",
            "extract": "<b>Ah!</b> Comme elles t'ont fait la leçon ! Comme j'avais prévu tout cela quand tu t'es arrêtée devant le portrait de notre vieille tante.",
            "options": ["De ne pas pouvoir accueillir Camille", "Que les nonnes aient imposé leur conception de l'amour à camille","Que camille ait quittée le monde de l'enfance et de l'innocence et croit les nonnes"],
            "answer": [1,2],
            "explanation": "l'interjection 'Ah !', l'exclamation et l'anaphore de l'adverbe d'intensité 'comme' montrent que Perdican déplore que Camille ait quitté le monde de l'enfance et de l'innocence pour plonger dans celui de l'aveuglement et l'obstination.  Le tableau de la vieille tante est une référence à la scène 2 de l'acte I (scène de leurs retrouvailles)"
        },
        {
            "id": "badine_q11",
            "type": "QCM_EXTRAIT",
            "question": "Dans cet extrait à quoi sert l'utilisation de l'imparfait, l'anaphore du 'tu' et les <i>propositions juxtaposées</i>?",
            "extract": "<u>Tu</u> <b>voulais</b> partir sans me serrer la main; <u>tu</u> ne <b>voulais</b> revoir ni ce bois, ni <i>cette pauvre petite</i> fontaine qui nous regarde tout en larmes; <u>tu</u> reniais les jours de ton enfance et le <i>masque de plâtre</i> que les nonnes t'ont placé sur les joues me refusait un baiser de frère; mais ton coeur a battu; il a oublié la leçon, lui qui ne sait pas lire, et <u>tu</u> es revenue t'asseoir sur l'herbe où nous voilà. ",
            "options": ["A donner des exemples qui justifient son argumentation", "A se donner du temps pour savoir ce qu'il va dire ensuite"],
            "answer": [0],
            "explanation": "Perdican revient sur l'attitude de Camille à son égard et dresse une succession d'exemples grâce aux <b>imparfaits</b> et à l'<u>anaphore</u> en « tu ». Ces exemples illustrent son argumentation. Les <i>propositions sont juxtaposées</i>, donne l'impression qu'il déverse un flot d’exemples qui accablent Camille. Il l'accuse notamment d'avoir oublié leur enfance représentée par le champ lexical d’une nature bucolique. La personnification donne aussi une tonalité pathétique et exprime le regret de Perdican ; elle est lyrique et très romantique (nature + sentiment). A nouveau, il accuse les religieuses comme le montre la métaphore : le plâtre évoque la froideur, le masque la fausseté"
        },
        {
            "id": "badine_q12",
            "type": "VF",
            "question": "AFFIRMATION : La métaphore du masuque ('le masque de plâtre que les nonnes t'on placé') évoque la froideur et la fausseté",
            "answer": "Vrai",
            "explanation": "A nouveau, il accuse les religieuses avec la métaphore du maque de plâtre qui évoque la froideur et la fausseté."
        },
        {
            "id": "badine_q13",
            "type": "QCM_EXTRAIT",
            "question": "Quelle figure de style retrouve-t-on ici?",
            "extract": "<u>... revoir ni ce bois, ni <span style=\"background-color: #f4cccc;\">cette pauvre petite fontaine qui nous regarde tout en larmes</span>. ",
            "options": ["Anaphore", "Chiasme", "Metaphore", "Personnification"],
            "answer": [3],
            "explanation": "<span style=\"background-color: #f4cccc;\">Personnification de la fontaine</span> pour donner une tonalité pathétique e exprimer le regret de Perdican"
        },
        {
            "id": "badine_q14",
            "type": "QCM_EXTRAIT",
            "question": "La conjonction de coordination 'mais' annonce un changement, Camille est finalement venu. Quelle figure de style explique ce changement?",
            "extract": "Tu voulais partir sans me serrer la main; ... <b>mais</b> <span style=\"background-color: #f4cccc;\">ton coeur</span> a battu; il a oublié <span style=\"background-color: #b6d7a8;\">sa leçon</span>, lui qui ne sait pas <b>lire</b>",
            "options": ["Des métaphores", "Des anaphores", "des periphrases"],
            "answer": [0],
            "explanation": "Le coeur est la <span style=\"background-color: #f4cccc;\">métaphore des sentiments</span>, il est personnifié et il prend le dessus sur la <span style=\"background-color: #b6d7a8;\">métaphore de l'éducation</span> qui traduit la doxa de la religion"
        },
        {
            "id": "badine_q15",
            "type": "VF",
            "question": "AFFIRMATION : 'tu es revenue t'asseoir sur l'herbe où nous voilà' le pronom nous évoque l'union des 2 jeunes gens.",
            "answer": "Vrai",
            "explanation": "Nous évoque l'union de Camille et Perdican."
        },
        {
            "id": "badine_q16",
            "type": "QCM",
            "question": "De quoi parle le mouvement 2 ?",
            "options": ["Un éloge de l'amour humain", "Un réquisitoire contre le couvent et l'amour divin"],
            "answer": [0],
            "explanation": "Après avoir dénocé et fait un réquisitoire contre le couvent dans le mouvement, il fait l'éloge de l'amour humain dans le mouvement 2 "
        },
        {
            "id": "badine_q17",
            "type": "VF",
            "question": "AFFIRMATION : Perdican est ironique qand il dit '<span style=\"background-color: #f4cccc;\">Eh bien !</span> Camille, <span style=\"background-color: #b6d7a8;\"><u>ces</u> femmes ont bien parlé</span> ; <span style=\"background-color: #b6d7a8;\">elles t'ont mise dans le vrai chemin</span> ' ",
            "answer": "Vrai",
            "explanation": "On note un changement de ton avec l'<span style=\"background-color: #f4cccc;\">interjection 'Eh bien'</span> il accuse les religieuses et leur discours avec l'ironie. Le <u>determinant démonstratif</u> montre qu'il met une distance critique entre lui et ces religieuses"
        },
        {
            "id": "badine_q18",
            "type": "QCM_EXTRAIT",
            "question": "Quelle est la figure de style ici?",
            "extract": "Il pourra m'en couter le <span style=\"background-color: #b6d7a8;\">bonheur de ma vie</span>; mais <u>dis</u>-leur cela de ma part: le ciel n'<b>est</b> pas pour elles",
            "options": ["Métaphores", "Anaphores", "Periphrases", "Hyperbole"],
            "answer": [3],
            "explanation": "C'est une <span style=\"background-color: #b6d7a8;\">hyperbole (exagération)</span> qui marque l'impossible union des deux jeunes. il accuse les religieuses et leur discours en utilisant l'ironie. Le déterminant démonstratif montre aussi qu’il met une distance critique entre lui et ces femmes, qu'il les méprise et dédaigne. L'impératif sonne comme une provocation et une vengeance à leur égard. Il utilise le présent de vérité générale pour les achever : le ciel, image du paradis, de Dieu qu'elles adorent, ne serait pas pour elles ; elles seraient donc dans le mensonge depuis toujours"
        },
        {
            "id": "badine_q19",
            "type": "QCM",
            "question": "Quelle est la fonction des nombreuses questions rhétoriques utilisées par Perdican ?",
            "options": [
                "Exprimer un doute sincère",
                "Créer une tension dramatique et persuader Camille",
                "Introduire une réflexion philosophique détachée",
                "Démontrer sa connaissance du dogme religieux"
            ],
            "answer": [1],
            "explanation": "Les questions rhétoriques servent à créer une tension et à ébranler les certitudes de Camille."
        },
        {
            "id": "badine_q20",
            "type": "QCM_EXTRAIT",
            "question": "Que veut dire Camille avec le pronom moi?",
            "extract": "...mais dis-leur cela de ma part : le ciel n'est pas pour elles.<br>Camille : Ni pour <b>moi</b>, n'est ce pas?",
            "options": ["Elle s'inclu dans le groupe de réligieuse que Perdican critique", "Elle veut le provoquer", "Elle voudrait qu'il revienne sur ses propos", "Elle n'a rien compris et interroge Perdican"],
            "answer": [3],
            "explanation": "Camille s'inclut dans ce groupe de femmes avec le pronom, tenant ainsi tête à Perdican, le provoquant. La question rhétorique peut laisser penser que Camille voudrait l'entendre revenir sur ses propos."
        },
        {
            "id": "badine_q21",
            "type": "QCM_EXTRAIT",
            "question": "Comment Perdican montre sa détermination dans cet extrait?",
            "extract": "CAMILLE : Ni pour moi, n'est ce pas?<br>PERDICAN. Adieu, Camille, <b>retourne</b> à ton couvent, et lorsqu'on te fera de ces récits hideux qui t'ont empoisonnée, <b>réponds</b> ce que je vais te dire : Tous les hommes sont menteurs, inconstants, faux, bavards, hypocrites, orgueilleux ou lâches, méprisables et sensuels ; toutes les femmes sont perfides, artificieuses, vaniteuses, curieuses et dépravées ; le monde n'est qu'un égout sans fond où les phoques les plus informes rampent et se tordent sur des montagnes de fange",
            "options": ["En ne répondant pas à camille", "En la saluant", "Avec l'utilisation de l'impératif"],
            "answer": [0,2],
            "explanation": " L'emploi de l'impératif montre la détermination du personnage qui ne relève pas la question rhétorique de Camille. Perdican gagne en virulence. En disant « Adieu » à Camille, le jeune homme marque le souhait de mettre fin à leur échange et de la laisser à sa condition. Cela est confirmé par l'emploi de l'impératif : « retourne à ton couvent », particulièrement violent en sachant qu'il décrit le couvent comme l'image de la mort et de l'emprisonnement de l'être."
        },
        {
            "id": "badine_q22",
            "type": "QCM_EXTRAIT",
            "question": "A travers quels mots et figure de style voit-on sa haine pour les discours religieux?",
            "extract": "PERDICAN. Adieu, Camille, retourne à ton couvent, et lorsqu'on te fera de ces récits <span style=\"background-color: #f4cccc;\">hideux</span> qui t'ont <span style=\"background-color: #b6d7a8;\">empoisonnée</span>, réponds ce que je vais te dire : Tous les hommes sont menteurs, inconstants, faux, bavards, hypocrites, orgueilleux ou lâches, méprisables et sensuels ; toutes les femmes sont perfides, artificieuses, vaniteuses, curieuses et dépravées ; le monde n'est qu'un égout sans fond où les phoques les plus informes rampent et se tordent sur des montagnes de fange",
            "options": ["Une périphrase", "Un chiasme", "Un adjectif péjoratif", "Une metaphore"],
            "answer": [2,3],
            "explanation": "L'<span style='background-color: #f4cccc;'>adjectif péjoratif</span> employé, ainsi que la <span style='background-color: #b6d7a8;'>métaphore de l'empoisonnement</span>, marquent alors sa haine à l'égard des discours religieux hypocrites. Il se lance dans un discours au présent de vérité générale et emploie le pronom indéfini « tous » généralisant dans un parallélisme de construction."
        },
        {
            "id": "badine_q23",
            "type": "QCM_EXTRAIT",
            "question": "Comment voit-on qu'a partir de cet extrait il ne parle plus de camille mais qu'il parle en géneral du monde",
            "extract": "PERDICAN. Adieu, Camille, retourne à ton couvent, ...réponds ce que je vais te dire : <span style='background-color: #c9daf8;'>Tous</span> <u>les hommes sont</u> <span style='background-color: #f4cccc;'>menteurs, inconstants, faux, bavards, hypocrites, orgueilleux ou lâches, méprisables et sensuels</span> ; <span style=\"background-color: #c9daf8;\"><u>toutes</span> les femmes sont</> <span style=\"background-color: #f4cccc;\">perfides, artificieuses, vaniteuses, curieuses et dépravées</span> ; le monde n'est qu'un égout sans fond où les phoques les plus informes <span style=\"background-color: #a2c4c9;\">rampent</span> et <span style=\"background-color: #a2c4c9;\">se tordent</span> sur des montagnes de fange",
            "options": ["Utilisation du pronom indéfini tous", "Enumération d'adjectifs péjoratifs", "Parallélisme de construction", "Utlisation du présent de vérité générale"],
            "answer": [0,1,2,3],
            "explanation": "Il dresse un portrait peu valorisant de la condition humaine. Il se lance dans un discours au présent de vérité générale et emploie le <span style='background-color: #c9daf8;'>pronom indéfini 'tous'</span> généralisant dans un parallélisme de construction entre les hommes et les femmes. Il crée une sorte d'égalité entre les deux sexes. Camille a une image peu positive des hommes, Perdican ne la contredit pas, mais fait un portrait négatif des 2 sexes avec une <span style=\"background-color: #f4cccc;\">énumération d'adjectifs péjoratifs</span>. Les défauts sont propres à l'être humain, peu importe le sexe."
        },
        {
            "id": "badine_q24",
            "type": "QCM_EXTRAIT",
            "question": "Dans cet extrait, quelles figures de style utilise Perdican pour critiquer le monde ?",
            "extract": "...le monde n'est qu'un <span style='background-color: #f4cccc;'>égout sans fond</span> où les phoques <span style=\"background-color: #c9daf8;\">les plus informes</span> <span style=\"background-color: #b6d7a8;\">rampent</span> et <span style=\"background-color: #a2c4c9;\">se tordent</span> sur <span style=\"background-color: #b6d7a8;\">des montagnes de fange</span>",
            "options": ["Hyperbole : exagerer pour mieux marquer les esprits", "Métaphore", "Verbes d'action peu flateurs", "Parallélisme de construction", "Superlatif péjoratif : comparaison 'le plus ou les plus'", "Antithèse"],
            "answer": [0,1,2,4],
            "explanation": "Il compare le monde à un égout à travers la métaphore et l'hyperbole « des montagnes de fange ».  On note aussi le <span style=\"background-color: #c9daf8;\">superlatif péjoratif</span> et les verbes d'action peu flatteurs. Ce pessimisme n'est pas sans rappeler le « Mal du siècle » romantique et au sentiment de désespérance qui disent le dégoût de vivre. "
        },
        {
            "id": "badine_q26",
            "type": "QCM_EXTRAIT",
            "question": "Dans cet extrait, quelles figures de style utilise Perdican pour critiquer le monde ?",
            "extract": "...<u>mais</u> <span style=\"background-color: #f4cccc;\">il y a</span> au monde une chose <span style=\"background-color: #b6d7a8;\">sainte et sublime</span>, <span style=\"background-color: #f4cccc;\">c'est</span> l'union de deux de <span style=\"background-color: #b6d7a8;\">ces êtres <b>si</b> imparfaits et <b>si</b> affreux.</span>",
            "options": ["Métaphore : substituer un mot pour un autre", "Présentatifs", "Exagération", "Anthitèse", "adverbe intensif"],
            "answer": [1,2,3,4],
            "explanation": "il reprend une encore la <u>conjonction de coordination</u> à valeur d'opposition « mais ». <span style=\"background-color: #f4cccc;\">Les présentatifs « il y a » et « c'est »</span> crée un effet d'annonce. Ce propos est une <span style=\"background-color: #b6d7a8;\">antithèse<span> : d'un côté le sublime, le Beau, de l'autre le Laid accentué par les adverbes intensifs \"si\". Cette opposition n'est pas sans rappeler les romantiques qui allient le sublime et le grotesque, le beau et le laid. Permet surtout de montrer la vision de Perdican sur l'amour : il faut accepter l'imperfection des êtres et l'amour terrestre qui, bien qu'imparfait, est plus sacré (il reprend en effet un vocabulaire religieux avec l'adjectif « sainte ») que l'amour céleste décrit par les religieuses. "
        },
        {
            "id": "badine_q27",
            "type": "QCM_EXTRAIT",
            "question": "Que montre l'antithèse de cet extrait ?",
            "extract": "...mais il y a au monde une chose <span style=\"background-color: #b6d7a8;\">sainte et sublime</span>, c'est l'union de deux de <span style=\"background-color: #b6d7a8;\">ces êtres si imparfaits et si affreux.</span>",
            "options": ["Que l'amour c'est comme l'amitié", "La vision de Perdican sur l'amour", "Elle rappelle les romantiques qui allient sublime et grotesque : beau et laid", "Sa foi en la bonté divine"],
            "answer": [1,2],
            "explanation": "il reprend une encore la <u>conjonction de coordination</u> à valeur d'opposition « mais ». <span style=\"background-color: #f4cccc;\">Les présentatifs « il y a » et « c'est »</span> crée un effet d'annonce. Cette <span style=\"background-color: #b6d7a8;\">antithèse</span> : d'un côté le sublime, le Beau, de l'autre le Laid est accentué par les adverbes intensifs \"si\". <br>- Elle rappelle les romantiques qui allient le sublime et le grotesque, le beau et le laid. <br>- Elle permet de montrer la vision de Perdican sur l'amour : il faut accepter l'imperfection des êtres et l'amour terrestre qui, bien qu'imparfait, est plus sacré (il reprend en effet un vocabulaire religieux avec l'adjectif « sainte ») que l'amour céleste décrit par les religieuses. "
        },
        {
            "id": "badine_q28",
            "type": "VF",
            "question": "AFFIRMATION : Perdican a une sision de l'amour selon laquelle, il faut accepter l'imperfection des êtres",
            "answer": "Vrai",
            "explanation": "Vision de Perdican sur l'amour : il faut accepter l'imperfection des êtres et l'amour terrestre qui, bien qu'imparfait, est plus sacré (il reprend en effet un vocabulaire religieux avec l'adjectif « sainte ») que l'amour céleste décrit par les religieuses."
        },
        {
            "id": "badine_q29",
            "type": "QCM_EXTRAIT",
            "question": "Que veut faire Perdican dans cet extrait ?",
            "extract": "On est souvent trompé en amour, souvent blessé et souvent malheureux ; mais on aime, et quand on est sur le bord de sa tombe, on se retourne pour regarder en arrière, et on se dit : J'ai souffert souvent, je me suis trompé quelquefois, mais j'ai aimé.",
            "options": ["Tromper Camille", "Obliger Camille à le croire", "Convaincre Camille"],
            "answer": [2],
            "explanation": "Il continue d'expliquer sa vision de l'amour avec le présent de vérité générale pour en persuader Camille."
        },
        {
            "id": "badine_q30",
            "type": "QCM_EXTRAIT",
            "question": "Comment est décrit l'amour avant la conjonction de coordination 'mais'?",
            "extract": "On est souvent trompé en amour, souvent blessé et souvent malheureux ; mais on aime, et quand on est sur le bord de sa tombe, on se retourne pour regarder en arrière, et on se dit : J'ai souffert souvent, je me suis trompé quelquefois, mais j'ai aimé.",
            "options": ["De façon négative avec un champ lexical de la soufrance", "De facon positive avec un champ lexical du bonheur"],
            "answer": [0],
            "explanation": "Le rythme ternaire, la répétition de «souvent» et le champ lexical de la souffrance peint l'amour de façon négative, mais la conjonction de coordination « mais » vient renverser tout cela. L'amour vaut toutes les souffrances du monde."
        },
        {
            "id": "badine_q31",
            "type": "QCM",
            "question": "Perdican pense que l'amour vaut toutes les souffrances du monde. De quoi parle-t-il pour imager cela?",
            "options": [
                "De la joie d'avoir des enfants",
                "De l'amour divin",
                "De la mort",
                "De la paix sur terre"
            ],
            "answer": [2],
            "explanation": "Pour imager son propos, il évoque le moment où, à l'aube de notre mort, nous faisons le bilan de notre vie, et pour lui, l'existence ne saurait avoir de sens sans la passion, ce que prouve le rythme ternaire final et le passé composé, temps de l'accompli, du bilan. <br> Ces propos sont directement inspirés d'une lettre que George Sand a écrite à l'auteur."
        },
        {
            "id": "badine_q32",
            "type": "QCM_EXTRAIT",
            "question": "Quelle est la figure de style dans cet extrait?",
            "extract": "C'est <span style=\"background-color: #c9daf8;\">moi</span> qui ai vécu, et non pas <span style=\"background-color: #c9daf8;\">un être factice</span> créé par mon orgueil et mon ennui.",
            "options": ["Metaphore", "Antithèse", "Parallélisme"],
            "answer": [1],
            "explanation": "Antithèse entre le pronom 'moi' et le GN 'être factice' scinde les individus en deux catégories : ceux qui acceptent de vivre leur passion et ceux la renient, mais qui ne sont pas fidèles à eux mêmes."
        },
        {
            "id": "badine_q33",
            "type": "QCM_EXTRAIT",
            "question": "Après son pladoyer, dans cette dernière phrase, quelle thèse réafirme Perdican?",
            "extract": "C'est <span style=\"background-color: #c9daf8;\">moi</span> qui ai vécu, et non pas <span style=\"background-color: #c9daf8;\">un être factice</span> créé par mon orgueil et mon ennui.",
            "options": ["Les êtres sont avares et hypocrytes", "L'amour divin peut nous combler", "L'amour seul exprime la vérité de l'être"],
            "answer": [2],
            "explanation": "Il réaffirme la thèse suivante : l'amour seul exprime la vérité de l'être. L'Antithèse entre le pronom 'moi' et le GN 'être factice' scinde les individus en deux catégories : ceux qui acceptent de vivre leur passion et ceux la renient, mais qui ne sont pas fidèles à eux mêmes. "
        }
    ]
},
{
    "id": "Cyrano",
    "title": "Cyrano de Bergerac - Acte3_scene7",
    "author": "Edmond Rostand",
    "questions": [
        {
            "id": "cyrano_q1",
            "type": "QCM",
            "question": "Quel est le thème du mouvement 1?",
            "options": [
                "Cyrano devient le souffleur de Christian.",
                "Cyrano est le metteur en scène d'une scène de séduction amoureuse qui tourne mal",
                "Cyrano prend la place de Christian et devient acteur de la scène de séduction."
            ],
            "answer": [1],
            "explanation": "Cyrano est le metteur en scène d'une scène de séduction amoureuse qui tourne mal"
        },
        {
            "id": "cyrano_q2",
            "type": "VF",
            "question": "Dans la scene 6 mouvement 1 Roxane se trouve à la fenêtre. Elle domine donc la scène et peut y mettre fin lorsqu'elle le souhaite.",
            "answer": "Vrai",
            "explanation": "Roxane est à « sa fenêtre » comme l'indique la première didascalie. Elle est donc en position de supériorité par rapport à son amant. C'est elle qui mène le dialogue et qui, à tout moment, peut y mettre fin en fermant la fenêtre qui n'est qu' « entrouverte »."
        },
        {
            "id": "cyrano_q3",
            "type": "QCM",
            "question": "Dans le mouvement 1, comment voit-on que Christian manque d'éloquence et que ses répliques sont sèches?",
            "options": [
                "Le premier vers est divisé en plusieurs répliques rapide.",
                "le texte est long",
                "il utilise un langage soutenu",
                "Il limite ses réponses à des monosylabes 'moi' ou son prénom"
            ],
            "answer": [0,3],
            "explanation": "Le premier vers est décomposé en plusieurs répliques : l'échange est vif, rapide, ce qui met en avant la sécheresse des répliques de Christian qui manque cruellement d'éloquence. Ses réponses se réduisent à un monosyllabe « moi » ou à son prénom. "
        },
        {
            "id": "cyrano_q4",
            "type": "QCM",
            "question": "Dans le mouvement 1, que mettent en évidence la didascalie 'avec dédain' et les interrogatives 'Qui, moi?', 'c'est vous'?",
            "options": [
                "La joie de Roxane",
                "la déception de Roxane"
            ],
            "answer": [1],
            "explanation": "La déception de Roxane, femme lettrée, est visible grâce à la didascalie « avec dédain » et ses interrogatives 'Qui, moi ?', 'C'est vous' qui cherchent à encourager Christian à être plus éloquent, en vain.."
        },
        {
            "id": "cyrano_q5",
            "type": "QCM",
            "question": "Que cherche à faire Roxane dans le mouvement 1 avec les interrogatives 'qui, moi?', 'c'est vous'?",
            "options": [
                "A savoir qui est là.",
                "A tenter d'encourager Christian pour qu'il soit plus éloquent."
            ],
            "answer": [1],
            "explanation": "Avec les interrogatives 'Qui, moi ?', 'C'est vous' Roxane cherche à encourager Christian à être plus éloquent, en vain. "
        },
        {
            "id": "cyrano_q6",
            "type": "QCM",
            "question": "Comment voit-on que le dialogue amoureux dans le mouvement 1 est un échec?",
            "options": [
                "Exclamations",
                "Contradictions",
                "Répétition de l'adverbe de négation 'non'",
                "utilisation de phrases courtes et simples"
            ],
            "answer": [0,2,3],
            "explanation": "Les exclamations de Roxane et la répétition de l'adverbe de négation « non », ainsi que l'utilisation de phrases courtes et simples (« Vous parlez trop mal. », « Vous ne m'aimez plus ! ») montrent bien l'échec du dialogue amoureux. "
        },
        {
            "id": "cyrano_q7",
            "type": "VF",
            "question": "Roxane pense que Christian ne sait plus dire l'amour.",
            "answer": "Vrai",
            "explanation": " Roxane pense qu'il ne sait plus dire l'amour, mais ce qu'elle ignore, contrairement au spectateur grâce au procédé de la double énonciation, c'est qu'elle avait été charmée en premier lieu par les mots de Cyrano et non par ceux de Christian. Ses répliques peuvent donc créer un effet comique pour le spectateur témoin du stratagème des deux amis."
        },
        {
            "id": "cyrano_q8",
            "type": "QCM",
            "question": "Quel mot utilise Christian pour suplier Roxane (mot qui va la diviniser)?",
            "options": [
                "Mon Dieu",
                "Doux Jésus",
                "De grâce"
            ],
            "answer": [2],
            "explanation": "Christian est réduit à supplier Roxane avec l'expression « de grâce ! » qui appartient au lexique religieux. Roxane est ainsi divinisée. Elle représente la belle dame sans merci, issue de l'amour courtois, alors que Christian est l'amoureux transi qui ne parvient pas à passer les épreuves de sa belle afin de gagner son amour."
        },
        {"id": "cyrano_q9",
            "type": "QCM",
            "question": "Pour aider Christian dans son discours amoureux Cyrano intérvient de 2 façons. Lesquelles?",
            "options": [
                "Il utilise des ficelles pour faire bouger christian comme un pantin",
                "Il devient le souffleur de Christian",
                "Il devient le metteur en scène de la scène de séduction"
            ],
            "answer": [1,2],
            "explanation": "Cyrano met enscène le premier discours mais c'est un echec, il devient alors souffleur puis sera contraint d'intervenir."
        },
        {
                "id": "cyrano_q10",
                "type": "QCM_EXTRAIT",
                "question": "Qu'est ce qui nous montre que Cyrano devient souffleur de théatre ?",
                "extract": "Christian, <span style=\"background-color: #c9daf8;\">à qui Cyrano souffle ses mots</span>.- M'accuser, — justes dieux ! — De n'aimer plus… quand… j'aime plus !<br> Roxane, qui allait refermer sa fenêtre, s'arrêtant.- Tiens ! mais cest mieux !<br> Christian, <span style=\"background-color: #c9daf8;\">même jeu</span>.- L'amour grandit bercé dans mon âme inquiète…<br>Christian, même jeu.- L'amour grandit bercé dans mon âme inquiète…",
                "options": [
                    "Les didascalies",
                    "L'expression 'même jeu'",
                    "La négation"
                ],
                "answer": [0,1],
                "explanation": " <span style=\"background-color: #c9daf8;\">les didascalies</span> 'à qui Christian souffle ses mots' puis <span style=\"background-color: #c9daf8;\">'même jeu'</span> montrent qu'il devient un souffleur de théâtre.  "
            },
            {
                "id": "cyrano_q11",
                "type": "QCM",
                "question": "Pourquoi y a-t-il des points de suspension, à quoi servent-ils?",
                "options": [
                    "Pour décorer la page",
                    "Pour mimer quelqu'un qui respire",
                    "Pour montrer les temps où Cyrano lui souffle ce qu'il doit dire"
                ],
                "answer": [2],
                "explanation": "Les points de suspension miment les pauses nécessaires pour que Cyrano lui souffle ses mots."
            },
            {
                "id": "cyrano_q12",
                "type": "QCM_EXTRAIT",
                "question": "Dans le mouvement 2 (Cyrano souffleur) Que montre les didascalies associées à Roxane ?",
                "extract": "Roxane : 'qui allait refermer sa fenêtre, s'arrêtant' puis 's'avançant sur le balcon' et 's'accoudant au balcon ». ",
                "options": [
                    "Qu'elle perd patience",
                    "Son intérêt pour les nouveaux mots qu'elle entend",
                    "Qu'elle est triste"
                ],
                "answer": [1],
                "explanation": "Son mouvement monte son intérêt pour les nouveaux mots qu'elle entend. Elle commente d'ailleurs les propos de Christian à travers l'expression 'c'est mieux', répétée, qui illustre son contentement."
            },
            {
                "id": "cyrano_q13",
                "type": "QCM_EXTRAIT",
                "question": "Dans le mouvement 2 (Cyrano souffleur) Comme les didascalies associées aux mouvements de Roxane quels autres éléments montrent son intérêt pour les nouveaux mots ?",
                "extract": "Roxane, <i>savançant sur le balcon.</i> - C est mieux ! — Mais, puisqu il est cruel, vous fûtes sot De ne pas, cet amour, létouffer au berceau !<br>Christian, <i>même jeu.</i> - Aussi lai-je tenté, mais… tentative nulle :Ce… nouveau-né, Madame, est un petit… Hercule.<br>Roxane.- <span style=\"background-color: #c9daf8;\">C'est mieux !</span><br>Christian, même jeu.- De sorte qu'il… strangula comme rien…Les deux serpents… Orgueil et… Doute.<br>Roxane, <i>saccoudant au balcon.</i>- <span style=\"background-color: #f4cccc;\">Ah !</span> <span style=\"background-color: #c9daf8;\">c'est très bien</span>.",
                "options": [
                    "le mot cruel",
                    "Une interjection",
                    "Des expressions du type 'c'est mieux'"
                ],
                "answer": [1,2],
                "explanation": "L'exclamation et l'interjection « Ah ! » (v.13) montrent son contentement (comme les didascalie qui décrive les mouvement de Roxane 's'avançant/s'arrêtant/s'accoudant...). À nouveau, ces réactions peuvent avoir un tour comique puisque le spectateur sait très bien que ce n'est pas le simple d'esprit Christian qui s'améliore, mais Cyrano qui s'exprime."
            },
            {
                "id": "cyrano_q14",
                "type": "QCM_EXTRAIT",
                "question": "Le public s'aperçoit vite de la maîtrise de Cyrano du langage de l'amour. Quelle est la première figure de style qu'il souffle à Christian?",
                "extract": "<b>Christian</b>, <i>à qui Cyrano souffle ses mots.</i>- M'accuser, — justes dieux ! —<br>De n'aimer plus… quand… jaime plus !",
                "options": [
                    "Une métaphore",
                    "Une antithèse",
                    "Un chiasme"
                ],
                "answer": [1],
                "explanation": "On observe dans la première réplique soufflée à Christian une antithèse « De n'aimer plus quand j'aime plus » (v.5). L'adverbe de négation 'plus' devient adverbe intensif. Il poursuit avec un langage imagé pour exprimer son amour."
            },
            {
                "id": "cyrano_q15",
                "type": "QCM_EXTRAIT",
                "question": "Dans la métaphore ci-dessous à quoi Cyrano compare-t-il l'amour?",
                "extract": "L'amour grandit bercé dans mon âme inquiète / Que ce cruel marmot prit pour barcelonnette ",
                "options": [
                    "A une âme",
                    "A un enfant"
                ],
                "answer": [1],
                "explanation": " Il utilise une métaphore qui compare l'amour à un enfant pour dire sa naissance et son épanouissement. Il complète cette métaphore grâce au champ lexical de la naissance (« grandit », « bercé », « marmot », « barcelonnette »). "
            },
            {
                "id": "cyrano_q16",
                "type": "VF",
                "question": "AFFIRMATION : On perçoit la maîtrise du langage de l'amour de Cyrano à travers les figures de style, les mots rares (comme 'bercelonnette') et la diérèse 'in-qui-è-te'.",
                "answer": "Vrai",
                "explanation": "Rappel. La dièrèse consiste à prononcer une syllabe en 2 sonorités distinctes."
            },
            {
                "id": "cyrano_q17",
                "type": "QCM_EXTRAIT",
                "question": "Comment voit-on qu'un jeu galant s'instaure entre Roxane et Christian?",
                "extract": "« Mais, puisqu'il est c<b>r</b>uel, vous fûtes sot / De ne pas, cet amou<b>r</b>, l'étouffer au be<b>r</b>ceau »",
                "options": [
                    "Roxane reprend la métaphore avec le mot berceau",
                    "Roxane écoute béate"
                ],
                "answer": [0],
                "explanation": "Les deux esprits se répondent. Roxane reprend la métaphore avec le mot « berceau ». Elle parle de la cruauté de cet amour qui ne fait que grandir en faisant une allitération en [r] qui la souligne et la met en avant "
            },
            {
                "id": "cyrano_q18",
                "type": "QCM_EXTRAIT",
                "question": "Dans cet extrait, il y a une référence à hercule à travers un mot lequel?",
                "extract": "« Mais, puisqu'il est c<b>r</b>uel, vous fûtes sot / De ne pas, cet amou<b>r</b>, l'étouffer au be<b>r</b>ceau »",
                "options": [
                    "cruel",
                    "amour",
                    "étouffer",
                    "berceau"
                ],
                "answer": [2],
                "explanation": "Dans la légende d'Hercule (ou Héraclès en grec), lorsqu'il était bébé, Héra (jalouse de l'enfant né des infidélités de Zeus) lui envoie deux énormes serpents dans son berceau pour l'étouffer et le tuer. Mais au lieu de se laisser faire, le petit Hercule, doté d'une force surnaturelle même tout jeune, attrape les serpents à mains nues… et les étouffe lui-même.<br>C'est pour cela que le verbe « étouffer » évoque cette référence mythologique : dans l'histoire, ce sont les serpents qui devaient l'étouffer, mais c'est lui qui les étouffe — cela devient un symbole de sa force prodigieuse dès la naissance. Cette référence met en avant la force de son amour"
            },
            {
                "id": "cyrano_q19",
                "type": "QCM_EXTRAIT",
                "question": "Que fait Cyrano suite à l'évocation de la légende d'Hercule avec le verbe 'étouffer' dans cet extrait ?",
                "extract": "Mais, puisqu'il est cruel, vous fûtes sot / De ne pas, cet amour, l'<b>étouffer</b> au berceau",
                "options": [
                    "Il change de sujet",
                    "Il se saisit de cette réplique"
                ],
                "answer": [1],
                "explanation": "Cyrano, à travers Christian, se saisit de cette réplique et notamment du verbe « étouffer » pour faire une référence mythologique à Hercule tout en continuant de filer la métaphore de la naissance (« nouveau-né », « petit »). Hercule, né de la relation adultère de Zeus avec une mortelle, s'attire les foudres d'Héra, la femme de Zeus qui lui envoie deux énormes serpents pour le tuer. Cependant, Hercule les tue et devient un symbole de sa force prodigieuse dès la naissance. Cette référence met en avant la force de son amour"
            },
            {
                "id": "cyrano_q20",
                "type": "QCM_EXTRAIT",
                "question": " Dans cette réplique où il poursuit avec la référence à la légende d'Hercule que continue-t-il de mettre en avant?",
                "extract": "<b>Christian</b>, <i>même jeu.</i>- De so<span style=\"background-color: #c9daf8;\">r</span>te qu'il… st<span style=\"background-color: #c9daf8;\">r</span>angula comme <span style=\"background-color: #c9daf8;\">r</span>ien…Les deux se<span style=\"background-color: #c9daf8;\">r</span>pents… O<span style=\"background-color: #c9daf8;\">r</span>gueil et… Doute.",
                "options": [
                    "L'importance d'une naissance",
                    "La force de son amour",
                    "La force d'Hercule"
                ],
                "answer": [1],
                "explanation": "Cette réplique continue de faire réference à la légende d'hercule pour exprimer la force de son amour mise en avant par l'allitération en [r], et deux allégories (discours qui utilise des métaphores) : « Orgueil » et « Doute »."
            },
            {
                "id": "cyrano_q21",
                "type": "QCM_EXTRAIT",
                "question": "A la fin du mouvement 2, Cyrano parvient à charmer Roxane mais cela risque de ne pas durer, comment le voit-on?",
                "extract": "Roxane, <i>s'accoudant au balcon.</i>- Ah ! c'est très bien. — Mais pourquoi parlez-vous de façon peu hâtive ? Auriez-vous donc la goutte à l'imaginative ?",
                "options": [
                    "Elle semble étonnée par ses hésitations",
                    "Elle lui demande s'il a une maladie de l'imagination",
                    "Elle a des gouttes de sueur"
                ],
                "answer": [0,1],
                "explanation": "Les deux interrogatives de Roxane expriment son étonnement de le voir parler avec hésitation. La métaphore de la goutte (au sens de maladie) peut traduire son agacement face à la situation. Le jeu amoureux manque cruellement de fluidité ! Ces répliques, encore une fois, peuvent être comiques car le spectateur sait très bien pourquoi Christian hésite, ce qui peut le prêter à sourire"
            },
            {
                "id": "cyrano_q22",
                "type": "QCM",
                "question": "Que fait Cyrano dans le mouvement 3 ?",
                "options": [
                    "Il prend la place de Christian et devient acteur de la scène de séduction",
                    "Il continue de se cacher pour souffler le discours amoureux à Christian"
                ],
                "answer": [0],
                "explanation": " La didascalie indique le changement qui s'opère. Cyrano devient acteur et prend le rôle de Christian."
            },
            {
                "id": "cyrano_q23",
                "type": "QCM_EXTRAIT",
                "question": "Quelle est donc cette figure de style ?",
                "extract": "<b>Roxane</b>.-       Aujourd'hui...,<br>Pourquoi ?",
                "options": [
                    "Chiasme",
                    "Allégorie",
                    "Aposiopèse"
                ],
                "answer": [2],
                "explanation": "Une aposiopèse : comme son nom l'indique (pause) c'est une longue pause. Cette aposiopèse et l'interrogation pourquoi exprime le trouble de Roxane. Mais Cyrano va reprendre le control en devenant acteur."
            }
            {
                "id": "cyrano_q24",
                "type": "QCM_EXTRAIT",
                "question": "Après la longue pause de Roxane (Aposiopèse) et son 'Pourquoi' comment voit-on que Cyrano reprend le control de la dicussion?",
                "extract": "<b>Cyrano</b>, <i>parlant à mi-voix, comme Christian.<:i>- C'est qu'il fait nuit, Dans cette ombre, à tâtons, ils cherchent votre oreille.<br>Roxane.- Les miens n'éprouvent pas difficulté pareille.<br>Cyrano.- Ils trouvent tout de suite ? oh ! cela va de soi, <br>Puisque c'est dans mon cœur, eux, que je les reçoi3 ; <br>Or, moi, j'ai le cœur grand, vous, l'oreille petite. <br>D'ailleurs vos mots à vous, descendent : ils vont vite, <br>Les miens montent, Madame : il leur faut plus de temps !",
                "options": [
                    "Il entame un jeu d'acteur",
                    "Ses réponses sont brèves et assurées",
                    "Ses réponses sont plus longues et assurées"
                ],
                "answer": [0,2],
                "explanation": "Cyrano reprend le contrôle de la scène. Ses répliques se font plus assurées et plus longues que celles de Roxane : c'est lui qui domine maintenant le dialogue. La didascalie « parlant à mi-voix, comme Christian » montre son jeu d'acteur."
            }
            {
                "id": "cyrano_q25",
                "type": "QCM_EXTRAIT",
                "question": "Pourquoi insiste-t-il sur le cadre temporel avec les mots 'nuit' et 'ombre'?",
                "extract": "<b>Cyrano</b>, <i>parlant à mi-voix, comme Christian.<:i>-       C'est qu'il fait <span style=\"background-color: #c9daf8;\">nuit,</span> <br>Dans cette <span style=\"background-color: #c9daf8;\">ombre</span>, à tâtons, ils cherchent votre oreille.<br>Roxane.- Les miens n'éprouvent pas difficulté pareille.<br>Cyrano.- Ils trouvent tout de suite ? oh ! cela va de soi, <br>Puisque c'est dans mon cœur, eux, que je les reçoi3 ; <br>Or, moi, j'ai le cœur grand, vous, l'oreille petite. <br>D'ailleurs vos mots à vous, descendent : ils vont vite, <br>Les miens montent, Madame : il leur faut plus de temps !",
                "options": [
                    "Car la nuit les loups garous de réveillent",
                    "Car la nuit est le cadre des confidences et du secret amoureux"
                ],
                "answer": [1],
                "explanation": "Il insiste sur le cadre temporel avec le mot « nuit » et « ombre » : c'est le cadre de la confidence et du secret amoureux, courant dans la littérature courtoise. "
            }
            {
                "id": "cyrano_q26",
                "type": "QCM_EXTRAIT",
                "question": "Dans cette phrase que désigne le pronom 'Ils?",
                "extract": "<b>Cyrano</b>, <i>parlant à mi-voix, comme Christian.<:i>-       C'est qu'il fait nuit, <br>Dans cette ombre, à tâtons, <span style=\"background-color: #c9daf8;\">ils</span> cherchent votre oreille.<br>Roxane.- Les miens n'éprouvent pas difficulté pareille.<br>Cyrano.- Ils trouvent tout de suite ? oh ! cela va de soi, <br>Puisque c'est dans mon cœur, eux, que je les reçoi3 ; <br>Or, moi, j'ai le cœur grand, vous, l'oreille petite. <br>D'ailleurs vos mots à vous, descendent : ils vont vite, <br>Les miens montent, Madame : il leur faut plus de temps !",
                "options": [
                    "Ils = les admirateurs de Roxanes",
                    "Ils = cheuveux de roxanes",
                    "Ils = les mots de cyrano"
                ],
                "answer": [2],
                "explanation": "Pour justifié son hésitation de la première partie il personnifie les mots Ce sont les mots ou les paroles de Cyrano qui, métaphoriquement, 'cherchent' loreille de Roxane. ",
            }
            {
                "id": "cyrano_q27",
                "type": "QCM_EXTRAIT",
                "question": "Roxane est-elle d'accord quand Cyrano personnifie les mots pour dire qu'ils ont besoin de temps pour monter?",
                "extract": "<b>Cyrano</b>, <i>parlant à mi-voix, comme Christian.<:i>-       C'est qu'il fait nuit, <br>Dans cette ombre, à tâtons, <span style=\"background-color: #c9daf8;\">ils</span> cherchent votre oreille.<br>Roxane.- <span style=\"background-color: #f4cccc;\">Les miens n'éprouvent pas difficulté pareille.</span><br>Cyrano.- Ils trouvent tout de suite ? oh ! cela va de soi, <br>Puisque c'est dans mon cœur, eux, que je les reçoi ; <br>Or, moi, j'ai le cœur grand, vous, l'oreille petite. <br>D'ailleurs vos mots à vous, descendent : ils vont vite, <br>Les miens montent, Madame : il leur faut plus de temps !",
                "options": [
                    "Oui, elle est d'accord",
                    "Non, elle objecte"
                ],
                "answer": [1],
                "explanation": "Roxane objecte avec la négation, mais Cyrano rebondit immédiatement et propose un discours convaincant, organisé avec des connecteurs logiques (« puisque », « or », « d'ailleurs »). Il utilise aussi des antithèses pour opposer leur deux façons de parler, leurs deux postures d'amant à travers les pronoms « moi » et « vous » qui structurent le vers 22. "
            }
            {
                "id": "cyrano_q28",
                "type": "QCM_EXTRAIT",
                "question": "Dans ce vers comment s'appelle la figure de style utilisée par Cyrano de Bergerac pour opposer leur 2 façons de parler et donc justifier ses hésitations?",
                "extract": "<b>Cyrano</b>, <i>parlant à mi-voix, comme Christian.<:i>-       C'est qu'il fait nuit, <br>Dans cette ombre, à tâtons, ils cherchent votre oreille.<br>Roxane.- Les miens n'éprouvent pas difficulté pareille.<br>Cyrano.- Ils trouvent tout de suite ? oh ! cela va de soi, <br>Puisque c'est dans mon cœur, eux, que je les reçoi ; <br>Or, moi, j'ai le <span style=\"background-color: #c9daf8;\">cœur grand</span>, vous, l'<span style=\"background-color: #c9daf8;\">oreille petite</span>. <br>D'ailleurs vos mots à vous, <span style=\"background-color: #a2c4c9;\">descendent</span> : ils <span style=\"background-color: #f4cccc;\">vont vite</span>, <br>Les miens <span style=\"background-color: #a2c4c9;\">montent</span>, Madame : il leur faut <span style=\"background-color: #f4cccc;\">plus de temps</span> !",
                "options": [
                    "Hyperbole",
                    "Gradation",
                    "Anthitèse"
                ],
                "answer": [2],
                "explanation": "Ce sont des antithèses qu'il utilise pour pour opposer leur deux façons de parler, leurs deux postures d'amant marqués par les pronoms « moi » et « vous » qui structurent le vers 22. . "
            }
            {
                "id": "cyrano_q29",
                "type": "QCM_EXTRAIT",
                "question": "Dans ce vers que veut faire Cyrano avec les alexandrins et les pronom 'vous' et 'moi'?",
                "extract": "<b>Cyrano</b>, <i>parlant à mi-voix, comme Christian.<:i>-      <br>Roxane.- Les miens n'éprouvent pas difficulté pareille.<br>Cyrano.- .... oh ! cela va de soi, <br>Puisque c'est dans mon cœur, eux, que je les reçoi ; <br>Or, <b>moi</b>, j'ai le <span style=\"background-color: #c9daf8;\">cœur grand</span>, <b>vous</b>, l'<span style=\"background-color: #c9daf8;\">oreille petite</span>. <br>D'ailleurs <b>vos mots à vous</b>, <span style=\"background-color: #a2c4c9;\">descendent</span> : ils <span style=\"background-color: #f4cccc;\">vont vite</span>, <br><b>Les miens</b> <span style=\"background-color: #a2c4c9;\">montent</span>, Madame : il leur faut <span style=\"background-color: #f4cccc;\">plus de temps</span> !",
                "options": [
                    "Hyperbole",
                    "Gradation",
                    "Anthitèse"
                ],
                "answer": [2],
                "explanation": "Il structure le vers avec des antithèses et les pronoms « moi » et « vous » pour opposer leur deux façons de parler, leurs deux postures d'amant. Le but visé est toujours d'expliquer ses hésitations et de mener à bien la séduction amoureuse. "
            }
            {
                "id": "cyrano_q30",
                "type": "QCM_EXTRAIT",
                "question": "A quoi servent les alitération en 'v' et en 'm' dans cet extrait?",
                "extract": "<b>Cyrano</b> ...D'ailleurs <span style=\"background-color: #f4cccc;\">v</span>os mots à <span style=\"background-color: #f4cccc;\">vous</span>, descendent : ils <span style=\"background-color: #f4cccc;\">v</span>ont <span style=\"background-color: #f4cccc;\">v</span>ite, <br>Les miens <span style=\"background-color: #a2c4c9;\">m</span>ontent, <span style=\"background-color: #a2c4c9;\">M</span>ada<span style=\"background-color: #a2c4c9;\">m</span>e : il leur faut <span style=\"background-color: #f4cccc;\">plus de temps</span> !",
                "options": [
                    "A montrer la rapidité du langage de Roxane et la lenteur de celui de Cyrano",
                    "A donner un ton plus poétique à l'extrait"
                ],
                "answer": [0],
                "explanation": "La rapidité du langage de Roxane est mise en avant par l'allitération en [v] et la lenteur de celui de Cyrano est mise en avant par l'allitération en [m]."
            }

    ]
}
]
};



/* Prochaine = curiosité= peche originel..
/*{
    id: 'test-multiple',
    title: 'Modele',
    author: 'tes',
    questions: [
 {
                 id: 'pain_q_multi_example', // Nouvel ID exemple
                 type: 'QCM', // Ou QCM_EXTRAIT
                 question: 'Quelles caractéristiques Ponge attribue-t-il à la croûte du pain dans le poème ? (Plusieurs réponses possibles)',
                 options: ["Merveilleuse", "Panoramique", "Mollesse ignoble", "Stellaire"],
                 // Options A et B sont correctes
                 answer: [0, 1], // <<<<---- CHANGEMENT ICI : Tableau d'indices
                 explanation: 'Ponge décrit la surface (croûte) comme "merveilleuse" et lui donne une "impression quasi panoramique". La "mollesse ignoble" concerne la mie, et "stellaire" qualifie le four.'
             }
    ]
}*/
    // Ajoutez d'autres textes ici en suivant la même structure { id: ..., title: ..., author: ..., questions: [...] },
