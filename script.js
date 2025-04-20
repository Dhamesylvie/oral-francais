// --- DONNÉES DES TEXTES ET QUESTIONS ---
const textsData = [
    {
        id: 'ponge_le_pain',
        title: 'Le Pain',
        author: 'Francis Ponge',
        questions: [
             { id: 'pain_q1', type: 'QCM', question: 'Quel est le recueil dans lequel figure le poème "Le Pain" ?', options: ["Fleurs et Ronces", "Les Armes miraculeuses", "Le Parti pris des choses", "La Rage de l'expression"], answer: 2, explanation: '"Le Pain" se trouve dans le recueil "Le Parti pris des choses", publié en 1942.' },
             { id: 'pain_q2', type: 'VF', question: 'Le poème "Le Pain" est écrit en vers rimés.', answer: 'Faux', explanation: 'Le poème est écrit en prose poétique.' },
             { id: 'pain_q3', type: 'QCM', question: 'La fin du poème, "Mais brisons-la !", est une invitation à :', options: ["Respecter le pain comme un objet sacré.", "Ne plus jamais gaspiller de pain.", "Manger le pain et cesser de l'idéaliser.", "Créer des œuvres d'art à partir du pain."], answer: 2, explanation: 'L\'impératif final invite à revenir à la fonction première du pain : être mangé, mettant fin à l\'analyse et l\'idéalisation.' },
             { id: 'pain_q4', type: 'VF', question: 'Ponge idéalise le pain et en fait un symbole de perfection.', answer: 'Faux', explanation: 'Ponge cherche à décrire le pain objectivement, dans sa matérialité, avec ses qualités et ses défauts perçus ("mollesse ignoble"), sans idéalisation excessive.' },
             { id: 'pain_q5', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait ci-dessous, quelle figure de style est principalement utilisée pour décrire la surface du pain ?', extract: "La surface du pain est merveilleuse d'abord à cause de cette impression quasi panoramique qu'elle donne : comme si l'on avait à sa disposition sous la main les Alpes, le Taurus ou la Cordillère des Andes.", options: ["Une métaphore", "Une comparaison", "Une personnification", "Une antithèse"], answer: 1, explanation: 'L\'outil "comme si" introduit une comparaison explicite entre la surface du pain et des chaînes de montagnes.' },
             { id: 'pain_q6', type: 'VF', question: 'L\'expression "mollesse ignoble sous-jacente" décrit la mie du pain de manière péjorative.', answer: 'Vrai', explanation: 'L\'adjectif "ignoble" qualifie péjorativement la "mollesse" de la mie, contrastant avec l\'éloge préalable de la croûte.' },
             { id: 'pain_q7', type: 'QCM', question: 'En quelle année a été publié le recueil "Le Parti pris des choses" ?', options: ["1942", "1742"], answer: 0, explanation: 'Le recueil "Le Parti pris des choses" a été publié en 1942.' },
             { id: 'pain_q8', type: 'QCM', question: 'Le titre du poème "Le Pain" fait penser à :', options: ["Une recette de cuisine", "Un article de dictionnaire"], answer: 1, explanation: 'Le titre évoque un article de dictionnaire : l\'auteur en donne une définition et une description organisée, commençant par la surface (la croûte).' },
             { id: 'pain_q9', type: 'QCM', question: 'L\'adjectif mélioratif "merveilleuse" est-il étonnant pour qualifier la croûte du pain ?', options: ["Oui, car la \"merveille\" désigne quelque chose d'extraordinaire, or le pain est banal.", "Non, l'adjectif est parfaitement adapté à cet objet quotidien."], answer: 0, explanation: 'L\'adjectif est surprenant car il élève un objet banal au rang d\'extraordinaire, montrant la volonté du poète de transformer notre regard.' },
             { id: 'pain_q10', type: 'QCM', question: 'Que montrent les connecteurs logiques ("ainsi", "donc", "d’abord", "et", "dès lors") utilisés dans le poème ?', options: ["Rien de particulier", "L’envie du poète d’être précis et d\'organiser sa description.", "Une surenchère d\'arguments."], answer: 1, explanation: 'Ces connecteurs structurent la description et montrent l\'attention aux détails et la volonté de précision du poète, comme dans une démonstration.' },
             { id: 'pain_q11', type: 'QCM', question: 'Qu\'est-ce qu\'une cosmogonie ?', options: ["L\'étude scientifique de l\'origine de l\'univers.", "Un récit mythologique expliquant la formation du Monde."], answer: 1, explanation: 'Une cosmogonie est un récit mythologique sur la création du Monde (du grec cosmo- "monde" et gon- "engendrer").' },
             { id: 'pain_q12', type: 'QCM', question: 'Qu\'est-ce qui ressort de l\'expression "la masse ... fut glissée pour nous dans le four stellaire" ?', options: ["Le complément d’agent n’est pas nommé.", "Le four est réduit à sa fonction stellaire."], answer: 0, explanation: 'L\'absence de complément d’agent (on ne sait pas QUI l\'a glissée) donne une dimension mystérieuse, voire divine, à l\'acte créateur ("pour nous").' },
             { id: 'pain_q13', type: 'QCM', question: 'L\'expression "la masse ... fut glissée pour nous dans le four stellaire" évoque une :', options: ["Gnose", "Genèse"], answer: 1, explanation: 'Cela évoque une Genèse (création), ici celle du pain comparée à celle du monde. L\'absence d\'agent suggère une origine mystérieuse ou divine.' },
             { id: 'pain_q14', type: 'QCM', question: 'À quoi la lumière qui "couche ses feux" sur la croûte fait-elle penser ?', options: ["La lumière d\'un feu de bois", "La lumière étudiée des tableaux ou d\'un coucher de soleil", "Simplement à la cuisson"], answer: 1, explanation: 'L\'expression "couche ses feux avec application" évoque une lumière travaillée, artistique, comme celle d\'un peintre ou la beauté poétique d\'un coucher de soleil, donnant une dimension esthétique à la croûte.' },
             { id: 'pain_q15', type: 'QCM', question: 'Pourquoi utiliser un tiret dans l\'extrait : "...couche ses feux, - sans un regard pour la mollesse ignoble sous-jacente" ?', options: ["Pour faire une liaison", "C\'est une erreur", "Pour marquer une rupture et introduire un contraste."], answer: 2, explanation: 'Le tiret marque une rupture. Après l\'éloge de la croûte, il introduit brutalement la critique de la mie ("mollesse ignoble"), créant un effet de chute dans le paragraphe.' },
             { id: 'pain_q16', type: 'QCM', question: 'Pourquoi utiliser des métaphores et comparaisons de la nature pour décrire la mie ("éponges", "feuilles ou fleurs") ?', options: ["Pour parler pour ne rien dire", "Pour décrire de façon poétique la texture de la mie et son vieillissement.", "Par manque d\'idées."], answer: 1, explanation: 'Ces images servent à décrire poétiquement la structure alvéolée de la mie, puis son processus de vieillissement (rassissement), comparé au flétrissement végétal.' },
             { id: 'pain_q17', type: 'QCM', question: 'À quoi font allusion les verbes "rassit", "se détachent" et l’adjectif "friable" en parlant du pain ?', options: ["À la friture", "À la frigidité", "Au processus de vieillissement, voire à une forme de mort."], answer: 2, explanation: 'Ces termes décrivent le processus de rassissement du pain, qui peut être vu comme une image du vieillissement et de la dégradation, faisant écho à la finitude après la création.' },
             { id: 'pain_q18', type: 'QCM', question: 'Que sont les points de suspension (...) et à quoi peuvent-ils servir dans un texte poétique ?', options: ["Des apostrophes pour faciliter la lecture", "Une figure de style (aposiopèse) suggérant l\'inexprimé ou une interruption.", "Une simple pause."], answer: 1, explanation: 'Les points de suspension forment une figure de style appelée aposiopèse. Ils marquent une interruption, laissant une idée sous-entendue (ici, potentiellement la mort, la destruction, ou simplement la suite logique non dite).' },
             { id: 'pain_q19', type: 'QCM', question: 'Que peut signifier principalement l\'impératif "Brisons-la" à la fin ?', options: ["Qu’il faut terminer le poème et manger le pain.", "Que c\'est une référence à la Cène biblique.", "Qu\'il faut tout casser."], answer: 0, explanation: 'Principalement, il signifie qu\'il faut cesser l\'analyse et revenir à l\'usage concret : manger le pain ("briser la croûte"). L\'allusion à la Cène (réponse b) est une interprétation possible mais secondaire dans le contexte direct du poème de Ponge.' },
             { id: 'pain_q20', type: 'QCM', question: 'Quelle figure de style principale est l\'expression "Mollesse ignoble sous-jacente" pour désigner la mie ?', options: ["Anamnèse", "Métaphore", "Oxymore"], answer: 1, explanation: 'C\'est une métaphore : la mie est comparée à une "mollesse ignoble sous-jacente". L\'association des termes "mollesse" et "ignoble" crée un effet péjoratif fort.' },
             { id: 'pain_q21', type: 'VF', question: 'AFFIRMATION : Cette métaphore ("mollesse ignoble") est une référence à la mie qui est qualifiée par un adjectif péjoratif.', answer: 'Vrai', explanation: 'Oui, "ignoble" est un adjectif péjoratif qui qualifie la "mollesse" (la mie), créant une image négative.' },
             { id: 'pain_q22', type: 'VF', question: 'AFFIRMATION : Dans l\'utilisation du verbe "déguster", on peut voir une invitation à apprécier le poème sensitivement plutôt qu\'à l\'analyser froidement.', answer: 'Vrai', explanation: 'Le choix de "déguster" peut suggérer une approche plus sensorielle et appréciative du langage poétique, similaire à la dégustation d\'un aliment.' },
             { id: 'pain_q23', type: 'VF', question: 'AFFIRMATION : La mie est désignée par une métaphore valorisante "mollesse ignoble sous-jacente".', answer: 'Faux', explanation: 'La métaphore utilise l\'adjectif péjoratif "ignoble", elle est donc dévalorisante pour la mie.' },
             { id: 'pain_q24', type: 'VF', question: 'AFFIRMATION : la méthaphore "mollesse ignoble sous-jacente" est une référence à la mie', answer: 'Vrai', explanation: 'Cette métaphore est une référence à la mie qui est qualifié par un adjectif péjoratif. Cet ajout agit comme une chute au paragraphe.' },
             { id: 'pain_q25', type: 'VF', question: 'AFFIRMATION : La cuisson du pain est rapprochée d\'une cosmogonie, puis le poète s’intéresse à l’intérieur : la mie.', answer: 'Vrai', explanation: 'C\'est exact, le poème passe de la création (cosmogonie) de la croûte à l\'exploration de l\'intérieur (la mie).' },
             { id: 'pain_q26', type: 'VF', question: 'AFFIRMATION : La mie de pain est décrite de manière entièrement positive.', answer: 'Faux', explanation: 'La mie est d\'abord décrite négativement ("lâche et froid sous-sol", "mollesse ignoble"), puis associée à la nature ("éponges", "feuilles ou fleurs"), créant une vision ambivalente.' },
             { id: 'pain_q27', type: 'VF', question: 'AFFIRMATION : Dans "Le Pain", Ponge utilise un style d\'écriture simple et accessible à tous.', answer: 'Faux', explanation: 'Bien que le sujet (le pain) soit banal, le style de Ponge est recherché, utilisant des métaphores complexes, un vocabulaire précis et une syntaxe élaborée.' },
             { id: 'pain_q28', type: 'VF', question: 'AFFIRMATION : Le poète transforme le pain en objet poétique en décrivant le durcissement de la croûte ("dalles") et la lumière ("feux").', answer: 'Vrai', explanation: 'L\'utilisation de métaphores ("dalles") et la description poétique de la lumière ("couche ses feux") contribuent à élever le pain au rang d\'objet poétique.' },
             { id: 'pain_q29', type: 'VF', question: 'AFFIRMATION : L\'adjectif "panoramique" transforme le pain en un paysage à contempler.', answer: 'Vrai', explanation: 'Oui, "panoramique" évoque une vue large, un paysage, transformant ainsi la perception de la surface du pain.' },
             { id: 'pain_q30', type: 'VF', question: 'AFFIRMATION : Dans le texte, "panoramique" a potentiellement trois sens.', answer: 'Vrai', explanation: '1) Paysage (vue large). 2) Allusion à la peinture (style panoramique). 3) Jeu de mots possible avec la racine latine du mot "pain" ("panem").' },
             { id: 'pain_q31', type: 'VF', question: 'AFFIRMATION : L\'expression "Masse amorphe" est un pléonasme.', answer: 'Vrai', explanation: 'Un pléonasme (répétition d\'une idée) car "masse" implique souvent l\'absence de forme définie ("amorphe"). Cela insiste sur l\'état initial, indéfini, avant la création.' },
             { id: 'pain_q32', type: 'VF', question: 'AFFIRMATION : L\'expression "Four stellaire" est une personnification.', answer: 'Faux', explanation: 'C\'est une métaphore. Le four est comparé à un espace stellaire (étoilé), associant la création du pain à la création de l\'univers. Il n\'y a pas d\'action humaine attribuée au four.' },
             { id: 'pain_q33', type: 'VF', question: 'AFFIRMATION : Dans le dernier paragraphe, la conjonction "mais" introduit une idée de contradiction.', answer: 'Faux', explanation: 'Le "mais" ici marque une rupture, un changement de propos, une conclusion. Il ne contredit pas directement ce qui précède mais y met fin pour passer à l\'action.' },
             { id: 'pain_q34', type: 'VF', question: 'AFFIRMATION : La phrase "car le pain doit être dans notre bouche moins objet de respect que de consommation" utilise le participe passé.', answer: 'Faux', explanation: 'Le verbe principal est "doit être" (verbe devoir au présent + infinitif être). Il n\'y a pas de participe passé employé comme temps verbal principal ici. Le présent a une valeur de vérité générale ou de morale.' },
             { id: 'pain_q35', type: 'QCM_EXTRAIT', question: 'Quel est l\'effet principal de la comparaison dans cet extrait ?', extract: "La surface du pain est merveilleuse d'abord à cause de cette impression quasi panoramique qu'elle donne : comme si l'on avait à sa disposition sous la main les Alpes, le Taurus ou la Cordillère des Andes.", options: ["Diminuer l'importance du pain.", "Rendre le pain plus concret et réaliste.", "Exagérer les dimensions et l'aspect du pain, le rendant grandiose.", "Créer une atmosphère mystérieuse."], answer: 2, explanation: 'En comparant la surface du pain à des montagnes célèbres, Ponge amplifie son importance et transforme un objet banal en un paysage impressionnant.' },
             { id: 'pain_q36', type: 'QCM_EXTRAIT', question: 'L\'utilisation du verbe "éructer" pour décrire la pâte en train de cuire est un exemple de :', extract: "Ainsi donc une masse amorphe en train d'éructer fut glissée pour nous dans le four stellaire...", options: ["Une litote", "Une métaphore", "Une personnification", "Une allégorie"], answer: 2, explanation: 'La personnification attribue une action humaine (éructer) à la pâte non humaine, la rendant vivante.' },
             { id: 'pain_q37', type: 'QCM_EXTRAIT', question: 'Quel est l\'objectif principal de cette personnification ("éructer") ?', extract: "Ainsi donc une masse amorphe en train d'éructer fut glissée pour nous dans le four stellaire...", options: ["Rendre le pain plus effrayant.", "Souligner le caractère vivant et dynamique de la cuisson.", "Simplifier la description.", "Ironiser sur la banalité du pain."], answer: 1, explanation: 'Le verbe "éructer" anime la pâte, soulignant la transformation dynamique et presque organique de la cuisson.' },
             { id: 'pain_q38', type: 'QCM_EXTRAIT', question: 'Que désignent "la masse amorphe en train d’éructer" et quelles figures de style trouve-t-on principalement ?', extract: "Ainsi donc une masse amorphe en train d'éructer fut glissée pour nous dans le four stellaire...", options: ["Métaphore / Personnification / Litote", "Métaphore / Allitération en \"r\" / Personnification"], answer: 1, explanation: 'C\'est une métaphore (désigne la pâte), l\'allitération en [r] peut mimer le son de la cuisson, et "éructer" est une personnification.' },
             { id: 'pain_q39', type: 'QCM_EXTRAIT', question: 'Pourquoi le poète utilise-t-il le participe présent "durcissant" ?', extract: "...où durcissant elle s'est façonnée en vallées, crêtes, ondulations, crevasses...", options: ["Pour paraître intelligent", "Pour mettre l'accent sur la durée et le processus en cours de la transformation."], answer: 1, explanation: 'Le participe présent "durcissant" insiste sur l\'action en train de se faire, sa continuité et sa durée pendant la métamorphose du pain.' },
             { id: 'pain_q40', type: 'QCM_EXTRAIT', question: 'Quel est l\'effet principal des comparaisons dans cet extrait ("sous-sol", "éponges", "sœurs siamoises") ?', extract: "Ce lâche et froid sous-sol que l'on nomme la mie a son tissu pareil à celui des éponges : feuilles ou fleurs y sont comme des sœurs siamoises soudées par tous les coudes à la fois.", options: ["Clarifier la description de la mie.", "Rendre la mie plus appétissante.", "Créer un effet de surprise et d'étrangeté par des associations inattendues.", "Simuler un discours scientifique."], answer: 2, explanation: 'Les rapprochements inattendus (mie/sous-sol, mie/éponges, alvéoles/sœurs siamoises) créent des images surprenantes qui renouvellent la perception de la mie.' },
             { id: 'pain_q41', type: 'QCM_EXTRAIT', question: 'L\'expression "sœurs siamoises soudées par tous les coudes à la fois" est principalement un exemple de :', extract: "...feuilles ou fleurs y sont comme des sœurs siamoises soudées par tous les coudes à la fois.", options: ["Une hyperbole", "Une anaphore", "Une antithèse", "Une allitération"], answer: 0, explanation: 'C\'est une hyperbole (exagération) pour décrire de manière imagée et frappante la façon dont les alvéoles de la mie sont interconnectées.' },
             { id: 'pain_q42', type: 'QCM_EXTRAIT', question: 'La structure "Mais brisons-la : car..." est un exemple de :', extract: "Mais brisons-la : car le pain doit être dans notre bouche moins objet de respect que de consommation.", options: ["Une antithèse", "Une injonction (ordre/conseil) suivie d'une justification.", "Une métaphore filée", "Une litote"], answer: 1, explanation: 'La première partie ("Mais brisons-la") est une injonction impérative, la seconde (introduite par "car") en donne la raison.' },
             { id: 'pain_q43', type: 'QCM_EXTRAIT', question: 'Quel est l\'objectif principal de cette structure finale ("Mais brisons-la : car...") ?', extract: "Mais brisons-la : car le pain doit être dans notre bouche moins objet de respect que de consommation.", options: ["Accentuer le côté tragique.", "Donner une conclusion claire et pragmatique.", "Créer un effet de surprise.", "Mettre en avant la complexité."], answer: 1, explanation: 'Cette structure permet de conclure le poème de manière directe et affirmée, invitant à revenir à l\'usage concret du pain après l\'analyse poétique.' },
             { id: 'pain_q44', type: 'QCM_EXTRAIT', question: 'En quoi ce passage peut-il être vu comme une allégorie de la création poétique ?', extract: "Ce lâche et froid sous-sol que l'on nomme la mie a son tissu pareil à celui des éponges : feuilles ou fleurs y sont comme des sœurs siamoises...", options: ["Les éponges lavent, les tissus habillent", "Le mot \"tissu\" (mie) partage son étymologie avec \"texte\" et \"feuilles\" peut renvoyer au papier."], answer: 1, explanation: 'Oui, "tissu" et "texte" ont la même racine latine ("textus"), et "feuilles" peut évoquer les feuilles de papier. Ponge jouerait sur les mots pour parler de l\'écriture en décrivant le pain. L\'allusion à son propre nom ("Ponge"/"éponge") est aussi une interprétation possible.' },
             { id: 'pain_q45', type: 'QCM_EXTRAIT', question: 'L\'utilisation du présent de vérité générale dans "le pain DOIT être..." permet principalement de :', extract: "car le pain doit être dans notre bouche moins objet de respect que de consommation.", options: ["Ancrer le texte dans le futur.", "Transformer la phrase en une sorte de morale ou de règle générale.", "Simplement décrire une action."], answer: 1, explanation: 'Le présent de vérité générale donne à l\'affirmation une portée universelle, comme une morale ou une conclusion définitive invitant le lecteur à agir (manger le pain) plutôt qu\'à seulement le contempler.' },
        ]
    },
    {
        id: 'odg_preambule',
        title: 'Préambule de la Déclaration des Droits de la Femme et de la Citoyenne (DDFC)',
        author: 'Olympe de Gouges (ODG)',
        questions: [
            // --- Questions Générales et de Contexte ---
            { id: 'odg_preambule_q1', type: 'QCM', question: 'À qui ODG adresse-t-elle <b>principalement</b> ce Préambule de la DDFC ?', options: ["Au Roi Louis XVI", "À la Reine Marie-Antoinette", "À l'Assemblée Nationale", "Aux femmes uniquement"], answer: 2, explanation: 'Bien qu\'une dédicace soit adressée à la Reine, le Préambule, comme la Déclaration qui suit, s\'adresse aux législateurs de l\'Assemblée Nationale pour réclamer l\'inscription des droits des femmes dans la Constitution.' },
            { id: 'odg_preambule_q2', type: 'VF', question: 'ODG a écrit la DDFC en 1791, en réaction à la Déclaration des Droits de l\'Homme et du Citoyen de 1789 qui excluait les femmes.', answer: 'Vrai', explanation: 'La DDFC est une réécriture critique et corrective de la DDHC de 1789, visant à inclure les femmes dans les droits proclamés.' },
            { id: 'odg_preambule_q3', type: 'QCM', question: 'Quel est l\'objectif principal de ce Préambule ?', options: ["Raconter la vie d'ODG", "Critiquer la monarchie absolue", "Justifier la nécessité de déclarer les droits des femmes et présenter leur demande.", "Demander le droit de vote pour les hommes étrangers."], answer: 2, explanation: 'Le Préambule sert à légitimer la démarche d\'ODG et à exposer les raisons pour lesquelles une déclaration spécifique aux droits des femmes est indispensable.' },
            { id: 'odg_preambule_q4', type: 'VF', question: 'ODG considère que l\'ignorance, l\'oubli ou le mépris des droits de la femme sont les seules causes des malheurs publics.', answer: 'Vrai', explanation: 'C\'est l\'argument central avancé par ODG dans le Préambule pour justifier l\'urgence et la nécessité de cette déclaration.' },
            { id: 'odg_preambule_q5', type: 'QCM', question: 'Comment ODG qualifie-t-elle les droits de la femme qu\'elle veut exposer ?', options: ["Nouveaux et révolutionnaires", "Négociables et adaptables", "Naturels, inaliénables et sacrés", "Secondaires et complémentaires"], answer: 2, explanation: 'ODG reprend la terminologie de la DDHC pour affirmer que les droits des femmes possèdent la même légitimité universelle et fondamentale que ceux des hommes.' },

            // --- Questions sur le Vocabulaire et les Termes Clés ---
            { id: 'odg_preambule_q6', type: 'QCM', question: 'Que signifie le terme "inaliénable" utilisé par ODG ?', options: ["Qui peut être vendu", "Qui ne peut être retiré ou cédé", "Qui est spécifique aux étrangers", "Qui est temporaire"], answer: 1, explanation: '"Inaliénable" signifie qu\'un droit fait partie intégrante de la personne et ne peut lui être enlevé.' },
            { id: 'odg_preambule_q7', type: 'QCM', question: 'Dans l\'article 4, quand ODG parle de la "tyrannie perpétuelle" que l\'homme exerce sur la femme, que désigne-t-elle ?', options: ["Une loi spécifique récente", "Le système politique de la monarchie (despotisme)", "La domination masculine constante et historique dans tous les domaines.", "Les disputes conjugales"], answer: 2, explanation: 'Elle dénonce un système de domination masculin généralisé et ancré dans le temps, qui prive les femmes de leurs droits naturels.' },
            { id: 'odg_preambule_q8', type: 'VF', question: 'Le terme "décret" utilisé par ODG ("sous les auspices de l\'Être suprême") fait référence à une loi déjà votée par l\'Assemblée.', answer: 'Faux', explanation: 'Ici, "décret" a un sens plus proche de "décision solennelle" ou "volonté affirmée". ODG place sa déclaration sous une autorité morale supérieure (l\'Être suprême, concept déiste de l\'époque) pour lui donner plus de poids.' },

            // --- Questions sur la Structure et la Rhétorique ---
            { id: 'odg_preambule_q9', type: 'QCM', question: 'L\'accumulation "les mères, les filles, les sœurs" permet à ODG de :', options: ["Modifier clairement la DDHC", "Faire rentrer sa famille à l'assemblée", "Montrer une certaine sororité (groupe, dimension familiale, communauté des femmes).", "Marquer l'absence du mot épouse comme pour critiquer la soumission du mariage"], answer: 2, explanation: 'Rpse 0, 2 et 3. Accumulation "les mères, les filles, les sœurs" : modification de la DHC. Insiste sur la dimension familiale, montre une certaine sororité en mettant en avant une communauté de femmes. Absence du mot "épouse" qui aurait été attendue = critique implicite du mariage ?' },
            { id: 'odg_preambule_q10', type: 'QCM', question: 'De quelle figure de style s\'agit-il : "représentantes de la nation" ?', options: ["Métaphore", "Allégorie", "Personnification", "Périphrase"], answer: 3, explanation: 'Une périphrase consiste à exprimer en plusieurs mots ce qu’on aurait pu dire en un seul terme. Insiste sur le rôle politique des femmes, rôle oublié dans la DHC de 1789. Plus loin, groupe nominal "des citoyennes" qui insiste aussi sur leur rôle politique.' },
            { id: 'odg_preambule_q11', type: 'VF', question: 'La périphrase "représentantes de la nation" et le groupe nominal "des citoyennes" insistent sur le rôle politique des femmes.', answer: 'Vrai', explanation: 'Ces éléments insistent sur le rôle politique des femmes, rôle oublié dans la DHC de 1789.' },
            { id: 'odg_preambule_q12', type: 'QCM', question: 'De quelles figures de style s\'agit-il : "l’ignorance, l’oubli ou le mépris ". ', options: ["Périphrase et Métaphore", "Gradation & Métaphore", "Accumulation & Gradation?", "Accumulation & Métaphore"], answer: 2, explanation: 'Cette gradation et accumulation et la réécriture des droits de la FEMME et non de l\'HOMME insiste sur la misogynie qui est désignée comme cause des malheurs de l\'Etat' },
            { id: 'odg_preambule_q13', type: 'QCM', question: 'Avec la gradation "l’ignorance, l’oubli ou le mépris " + l\'écriture DDFC et non DDHC: qu\'est qui est désigné comme la cause des malheurs de l\'Etat', options: ["La croissance démographique", "La misogynie", "La femme", "La planète"], answer: 1, explanation: ' C’est la misogynie qui est désignée comme la cause des malheurs de l’État. Il est donc urgent de la corriger pour le bien public.' },
            { id: 'odg_preambule_q14', type: 'QCM', question: 'Pourquoi ODG utilise-t-elle l\'article défini "<b>LA</b> femme" ?', options: ["Pour lui donner une portée généralisante et désigner le sexe invisibilisé par le groupe nominal 'des Hommes'.", "Pour montrer que la femme est singulière et toujours mise en avant"], answer: 0, explanation: 'La : portée généralisante, désigne le sexe invisibilisé par le groupe nominal "des Hommes".' },
            { id: 'odg_preambule_q15', type: 'QCM', question: 'De quelles figures de style s\'agit-il et à quoi sert-elle ? "les droits naturels, inaliénables et sacrés"', options: ["Une énumération ternaire pour insister sur le caractère incontestable des droits de la femme", "Une énumération accumulative pour insister la faiblesse", "Une accumulation ternaire pour insister sur le caractère incontestable des droits de la femme"], answer: 0, explanation: 'Enumération ternaire qui insiste sur le caractère incontestable de ces droits. Comme les adjectifs "principes simples et incontestables" insistent aussi dessus' },
            { id: 'odg_preambule_q16', type: 'QCM', question: 'Dans le Préambule "Afin que" est répété 3 fois dans le texte. Quelle est cette figure de style et à quoi sert-elle ?', options: ["Une gradation pour faire monter la colère", "Une anaphore qui souligne les conséquences de cette déclaration pour les femmes.", "Une gradation qui souligne les conséquences de cette déclaration pour les femmes.", "Une anaphore qui souligne la colère des femmes."], answer: 1, explanation: 'Anaphore qui souligne les 3 conséquences de cette déclaration pour les femmes et la société. Donne aussi un caractère solennel, répétitif qui marque les esprits, pour qu’on n’oublie pas. Elle a donc une dimension argumentative.' },
            { id: 'odg_preambule_q17', type: 'QCM', question: '"constamment", "sans cesse", "à chaque instant" sont des ?', options: ["Groupes nominaux", "Compléments circonstanciels de temps", "Compléments circonstanciels de lieu", "Verbes pronominaux"], answer: 1, explanation: 'Comme l\'anaphore "afin que" ils ont une dimension argumentative et ils marquent les esprits pour qu\'on oublie pas les conséquences de cette déclaration pour les femmes et la société' },
            { id: 'odg_preambule_q19', type: 'QCM', question: 'Avec les expressions "bonnes moeurs" + "le bonheur de tous", que veut montrer ODG ?', options: ["Les bienfaits de la DDHC", "Que l'égalité Homme/femme sera bénéfique pour tous", "Que cette avancée sera uniquement bénéfique aux femmes."], answer: 1, explanation: ' l’égalité hommes/femmes sera bénéfique à toute la société, pas seulement aux femmes, d’où l’importance d’oeuvrer en sa faveur' },
            { id: 'odg_preambule_q20', type: 'VF', question: 'Pour donner une dimension solennelle et de la sacralité (=ref à dieu) ODG utilise le présent et l\'expression "sous les auspices de l’Être suprême (=Dieu)"', answer: 'Vrai', explanation: ' Présent d’énonciation "reconnaît et déclare" + "sous les auspices de l’Être suprême (=Dieu)"" : donne une solennité, sacralité à la déclaration.' },
            { id: 'odg_preambule_q21', type: 'QCM', question: '"reconnaît et déclare" de quel temps s\'agit\'il?', options: ["Du présent d'énonciation", "Du présent de reconnexion", "Du présent de vérité générale"], answer: 0, explanation: 'Présent d’énonciation "reconnaît et déclare" + "sous les auspices de l’Être suprême (=Dieu)" : donne une solennité, sacralité à la déclaration.' },
            { id: 'odg_preambule_q22', type: 'QCM', question: 'Qui sont "les mères, les filles, les sœurs" mentionnées au début du Préambule ?', options: ["La famille d'ODG uniquement", "Des figures allégoriques sans réalité", "Les représentantes de la nation (femmes) qui demandent à être constituées en Assemblée nationale.", "Des femmes nobles uniquement"], answer: 2, explanation: 'Par cette énumération, ODG désigne l\'ensemble des femmes françaises comme constituant une partie de la nation, légitimes à réclamer leurs droits et à participer à la vie politique.' },
            { id: 'odg_preambule_q23', type: 'VF', question: 'L\'utilisation de l\'expression "sexe supérieur en beauté comme en courage dans les souffrances maternelles" est une flatterie sans but argumentatif.', answer: 'Faux', explanation: 'C\'est un argument rhétorique. ODG valorise les femmes en soulignant leur beauté (stéréotype de l\'époque) mais surtout leur courage face aux douleurs de l\'enfantement, pour mieux revendiquer leur égalité en droits et leur participation politique. Cette périphrase dénonce les termes utilisés dans la DDHC. Périphrase qui fait référence à deux expressions : "le beau sexe" et "le sexe faible".' },
            { id: 'odg_preambule_q24', type: 'QCM', question: 'Quel est le registre principal (ton) employé par ODG dans ce Préambule ?', options: ["Comique et léger", "Lyrique et sentimental", "Solennel et revendicatif", "Didactique et neutre"], answer: 2, explanation: 'Le ton est grave, solennel (par l\'importance du sujet et le vocabulaire choisi) et clairement revendicatif (elle exige des droits).' },
            { id: 'odg_preambule_q25', type: 'VF', question: 'En affirmant que la déclaration des droits des femmes "tournera toujours au maintien de la Constitution", ODG cherche à rassurer les députés hommes.', answer: 'Vrai', explanation: 'Elle présente la reconnaissance des droits des femmes non comme une menace, mais comme une condition nécessaire à la stabilité politique, au bonheur de tous et au respect de la Constitution.' },

            // --- Questions basées sur des Extraits (QCM_EXTRAIT) ---
            { id: 'odg_preambule_q26', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait : "...les actes de pouvoir des femmes et ceux des hommes...", que symbolise la conjonction "et" ?', extract: "...les actes de pouvoir des femmes et ceux des hommes...", options: ["l'égalité homme/femme", "L'addition des genres ", "La beauté du moment"], answer: 0, explanation: 'Il y a peu de mentions des hommes. Ici, ils sont mentionnés pour montrer l’égalité qui existe entre les deux sexes. "Et" symbolise cette égalité car la conjonction les met sur le même plan syntaxique.' },
            { id: 'odg_preambule_q27', type: 'QCM_EXTRAIT', question: 'Pourquoi ODG a utilisé la périphrase : "...le sexe supérieur en beauté comme en courage dans les souffrances maternelles..." pour désigner la femme?', extract: "... le sexe supérieur en beauté comme en courage dans les souffrances maternelles ...", options: ["Pour renverser les expressions \"le beau sexe\" et \"le sexe faible\" utilisées dans la DDHC", "Pour montrer que la femme est supérieure à l'homme"], answer: 0, explanation: 'Périphrase qui fait référence à deux expressions : "le beau sexe" et "le sexe faible". ODG reprend la première et renverse la deuxième en montrant la force des femmes.' },
            { id: 'odg_preambule_q28', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait : "... Article premier. - La femme naît libre et demeure égale à l\'homme en droits. Les distinctions sociales ne peuvent être fondées que sur l\'utilité commune....", quel ton adopte ODG ?', extract: "...Article premier. - La femme naît libre et demeure égale à l'homme en droits. Les distinctions sociales ne peuvent être fondées que sur l'utilité commune....", options: ["Ironique", "Suspicieux", "Révérencieux", "Neutre"], answer: 0, explanation: 'Article 1 sonne comme une réécriture ironique de la DHC qui stipulait que "les Hommes nai[ssaient] libres et égaux en droits", ce qui est faux, puisque les femmes n’ont pas les mêmes droits… ' },
            { id: 'odg_preambule_q29', type: 'QCM_EXTRAIT', question: 'Dans l\'article 2 : "...Article 2.- Le but de toute association politique est la conservation des droits naturels ...", que veut faire ODG ?', extract: "...Article 2.- Le but de toute association politique est la conservation des droits naturels et imprescriptibles de la femme et de l'homme : ces droits sont la liberté, la propriété, la sûreté, et surtout la résistance à l'oppression...", options: ["Insiste sur la dimension naturelle (et donc indiscutable) de ces droits par l’adjectif \"naturels\" et le verbe \"naît\".", "Insiste sur la dimension environnementale (et donc indiscutable) de ces droits par l’adjectif \"naturels\" et le verbe \"naît\"."], answer: 0, explanation: 'Ces droits sont naturels et donc indiscutables.' },
            { id: 'odg_preambule_q30', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait : "...la liberté, la propriété, la sûreté, et surtout la résistance à l’oppression...", dans cette énumération ODG pour insister sur ces droits utilise 2 figures de style ?', extract: "...la liberté, la propriété, la sûreté, et surtout la résistance à l’oppression...", options: ["Allitération en [é] pour le dernier groupe de mots Assonance en [r]", "Assonance en [é] dans les trois premiers termes + allitération en [s] pour le dernier groupe de mots"], answer: 1, explanation: 'La répétition d\'une voyelle est une assonance / La répétition d\'une consonne est une allitération' },
            { id: 'odg_preambule_q31', type: 'QCM_EXTRAIT', question: 'Dans l\'énumération : "...la liberté, la propriété, la sûreté, et surtout la résistance à l’oppression...", avec quoi résonne le dernier groupe "résistance à l\'oppression" ?', extract: "...la liberté, la propriété, la sûreté, et surtout la résistance à l’oppression...", options: ["L'article 4 qui accuse les hommes de despotisme", "L'article 4 qui accuse les hommes de négligence"], answer: 0, explanation: 'Despotisme = Régime politique dans lequel un seul homme gouverne de façon arbitraire et autoritaire. <br>Article 4. La liberté et la justice consistent à rendre tout ce qui appartient à autrui ; ainsi l\'exercice des droits naturels de la femme n\'a de bornes que la tyrannie perpétuelle que l\'homme lui oppose ; ces bornes doivent être réformées par les lois de la nature et de la raison.' },
            { id: 'odg_preambule_q32', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait : "...considérant que l\'ignorance, l\'oubli ou le mépris des droits de la femme, sont les seules causes des malheurs publics et de la corruption des gouvernements...", quelle figure de style est marquée par la succession "l\'ignorance, l\'oubli ou le mépris" ?', extract: "...considérant que l'ignorance, l'oubli ou le mépris des droits de la femme, sont les seules causes des malheurs publics...", options: ["Une métaphore", "Une gradation ou une accumulation", "Une personnification", "Une antithèse"], answer: 1, explanation: 'Cette énumération de termes négatifs (ignorance, oubli, mépris) constitue une accumulation (ou une légère gradation) qui insiste sur les causes multiples et graves de l\'oppression des femmes et de ses conséquences politiques.' },
            { id: 'odg_preambule_q33', type: 'QCM_EXTRAIT', question: 'Que signifie l\'affirmation que cette déclaration doit être "constamment présente à tous les membres du corps social" ?', extract: "...afin que cette déclaration, constamment présente à tous les membres du corps social, leur rappelle sans cesse leurs droits et leurs devoirs...", options: ["Qu'elle doit être affichée dans tous les lieux publics.", "Qu'elle doit être apprise par cœur par tous.", "Que les principes qu'elle énonce doivent être connus de tous et servir de référence permanente.", "Qu'elle doit être lue une fois par an."], answer: 2, explanation: 'ODG souhaite que les droits et devoirs (des femmes et des hommes) soient une référence constante pour tous les citoyens et pour le gouvernement, afin d\'assurer le respect des lois et la justice.' },
            { id: 'odg_preambule_q34', type: 'QCM_EXTRAIT', question: 'Quel est le but principal de la comparaison implicite entre les "actes du pouvoir des femmes" et "ceux du pouvoir des hommes" ?', extract: "...afin que les actes du pouvoir des femmes, et ceux du pouvoir des hommes pouvant être à chaque instant comparés avec le but de toute institution politique, en soient plus respectés...", options: ["Montrer la supériorité du pouvoir des femmes.", "Établir une compétition entre les sexes.", "Affirmer que les actions politiques des femmes doivent être évaluées selon les mêmes critères de justice et d'utilité commune que celles des hommes.", "Suggérer que les femmes doivent avoir un pouvoir séparé."], answer: 2, explanation: 'ODG revendique que les actions politiques (réclamations, actes législatifs) émanant des femmes ou les concernant soient jugées à l\'aune des principes universels de justice et du bien commun, au même titre que celles initiées par les hommes.' },
            { id: 'odg_preambule_q35', type: 'QCM_EXTRAIT', question: 'Quelle est la fonction de la dernière partie de la phrase : "...que les réclamations des citoyennes, fondées désormais sur des principes simples et incontestables, tournent toujours au maintien de la Constitution, des bonnes mœurs, et au bonheur de tous." ?', extract: "...afin [...] que les réclamations des citoyennes [...] tournent toujours au maintien de la Constitution, des bonnes mœurs, et au bonheur de tous.", options: ["Exprimer un doute sur l'efficacité des réclamations.", "Annoncer les articles de la déclaration qui vont suivre.", "Présenter les conséquences positives attendues de la reconnaissance des droits des femmes.", "Critiquer la Constitution existante."], answer: 2, explanation: 'Cette partie finale du Préambule expose les bénéfices collectifs attendus : la stabilité politique ("maintien de la Constitution"), l\'harmonie sociale ("bonnes mœurs") et le bien-être général ("bonheur de tous"), présentant ainsi la cause des femmes comme une cause universelle.' },
            { id: 'odg_preambule_q36', type: 'QCM', question: 'Par l\'expression "l\'Être suprême", ODG fait référence à :', options: ["Au Roi", "À Dieu (dans une perspective déiste)", "Au Peuple souverain", "À la Nature"], answer: 1, explanation: 'L\'invocation de l\'Être suprême est une référence déiste fréquente pendant la Révolution. Elle place la déclaration sous une autorité morale universelle, sans se référer à une religion spécifique.' }
        ]
    },
    {
        id: 'odg_postambule',
        title: 'Postambule de la Déclaration des Droits de la Femme et de la Citoyenne (DDFC)',
        author: 'Olympe de Gouges (ODG)',
        questions: [
            // --- Questions renumérotées et corrigées ---
            { id: 'odg_postambule_q1', type: 'QCM', question: 'Quel est l’objectif des questions rhétoriques posées par Olympe de Gouges dans ce paragraphe ?', options: ["Encourager les femmes en explorant leurs peurs pour les rassurer", "Accuser directement les hommes de tous les maux", "Montrer l’indifférence des femmes face à leur situation"], answer: 0, explanation: 'Olympe de Gouges utilise ces questions rhétoriques pour encourager les femmes à dépasser leurs craintes et à se mobiliser dans leur combat pour l’égalité. Elle cite toutes les peurs pour que les femmes dépassent ces peurs.' },
            { id: 'odg_postambule_q2', type: 'VF', question: 'La métaphore de la "branche" évoque le lien dépassé entre morale religieuse et politique après la Révolution.', answer: 'Vrai', explanation: 'La métaphore "cette morale longtemps accrochée aux <b>branches de la politique</b>" insiste sur une morale religieuse auparavant liée à la politique, mais jugée dépassée ("qui n’est plus de saison") après la Révolution. La Révolution a mis fin aux liens entre le gouvernement et la religion chrétienne' },
            { id: 'odg_postambule_q3', type: 'VF', question: 'La réponse "tout" à la question "Femmes, qu\'y a-t-il de commun entre vous et nous ?" signifie que les <b>hommes et les femmes n’ont rien en commun.</b>', answer: 'Faux', explanation: 'Le mot "tout" insiste sur l’idée que femmes et hommes sont parfaitement identiques, et par conséquent, qu’ils doivent avoir les mêmes droits.' },
            { id: 'odg_postambule_q4', type: 'QCM', question: 'Quel est l’objectif principal du Postambule d’Olympe de Gouges ?', options: ["Inciter les femmes à prendre conscience et revendiquer leurs droits naturels.", "Demander l’abolition définitive de la monarchie.", "Rappeler l’autorité religieuse traditionnelle.", "Préserver l'Ancien Régime."], answer: 0, explanation: 'Dans ce texte, Olympe de Gouges exhorte les femmes à se réveiller et à réclamer leurs droits naturels et légitimes.' },
            { id: 'odg_postambule_q5', type: 'VF', question: 'Olympe de Gouges affirme que la Révolution a amélioré la place des femmes dans la société.', answer: 'Faux', explanation: 'Olympe de Gouges constate amèrement que la Révolution a entraîné un mépris encore plus marqué vis-à-vis des femmes.' },
            { id: 'odg_postambule_q6', type: 'QCM', question: 'Par la métaphore du "tocsin de la raison", ODG se place dans la lignée de quel mouvement philosophique ?', options: ["Le Romantisme", "Les Lumières", "Le Surréalisme", "La Renaissance"], answer: 1, explanation: 'Le "tocsin de la raison" renvoie explicitement aux philosophes des Lumières diffusant la raison contre les préjugés.' },
            { id: 'odg_postambule_q7', type: 'VF', question: 'ODG considère la nature comme porteuse des lois égalitaires homme-femme.', answer: 'Vrai', explanation: 'La nature est, selon elle, un modèle d’égalité naturelle que la société a corrompu.' }, // Note: Usage de ’ typographique
            { id: 'odg_postambule_q8', type: 'QCM', question: 'ODG utilise l’expression "homme esclave" pour illustrer quel paradoxe ?', options: ["L’homme est dominé par les femmes.", "L’homme libre opprime celles qui l’ont aidé à devenir libre.", "L’homme refuse d’être aidé par la femme.", "L’homme lutte contre la nature."], answer: 1, explanation: 'ODG montre ainsi que l’homme libéré grâce au soutien des femmes devient injuste envers celles-ci dès qu’il a récupéré sa liberté.' },
            { id: 'odg_postambule_q9', type: 'QCM', question: 'Pourquoi ODG évoque-t-elle l’épisode biblique des noces de Cana ?', options: ["Pour critiquer explicitement la religion chrétienne.", "Pour anticiper une potentielle objection religieuse et la réfuter.", "Pour soutenir l’autorité religieuse.", "Pour inviter à la célébration religieuse."], answer: 1, explanation: 'Elle anticipe et réplique à une potentielle objection religieuse en montrant l\'anachronisme de telles idées.' },
            { id: 'odg_postambule_q10', type: 'QCM', question: 'Quelle réponse ODG préconise-t-elle face à la question : "Femmes, qu\'y a-t-il de commun entre vous et nous ?"', options: ["Rien", "Que la différence physique", "Tout", "Peu de choses"], answer: 2, explanation: 'Elle préconise brièvement la réponse "Tout", qui affirme catégoriquement l’identité fondamentale entre les deux sexes et légitime l’égalité absolue.' },
            { id: 'odg_postambule_q11', type: 'VF', question: 'ODG appelle les femmes à dominer les hommes comme ces derniers les ont dominées auparavant.', answer: 'Faux', explanation: 'Elle appelle au contraire à une égalité réelle et non à une revanche ou supériorité féminine.' },
            { id: 'odg_postambule_q12', type: 'QCM', question: 'Selon ODG, quels sont les principaux moyens d’action pour les femmes ?', options: ["La violence physique contre les hommes.", "La soumission aux autorités masculines.", "La force de la raison, de la philosophie et l’union collective.", "La supériorité naturelle et l’isolement individuel."], answer: 2, explanation: 'ODG indique que les femmes doivent opposer la raison et la philosophie aux prétentions injustifiées de supériorité des hommes, en restant unies.' }, 
            { id: 'odg_postambule_q13', type: 'QCM', question: 'À quoi renvoie la polysémie (avoir plusieurs sens) du mot "affranchir" dans la conclusion du Postambule ?', options: ["Se soumettre volontairement aux hommes.", "Franchir les obstacles et se libérer des contraintes injustes.", "Ignorer les barrières sociales imposées aux femmes.", "Respecter toutes les barrières posées devant elles."], answer: 1, explanation: 'Le verbe "affranchir" a un double sens: franchir (dépasser les barrières physiques) et se libérer des contraintes sociales imposées injustement aux femmes.' },
            { id: 'odg_postambule_q14', type: 'QCM', question: 'En commençant par "Femme, réveille toi" que tente de faire ODG?', options: ["Elle apostrophe les femmes", "Elle dénigre les femmes.", "Elle plaint les femmes."], answer: 0, explanation: 'ODG interpelle les femmes pour les faire réagir, attirer leur attention.' },
            { id: 'odg_postambule_q15', type: 'QCM', question: 'Qu\'est-ce que le Tocsin et à quoi fait-il référence dans ce texte ?', options: ["Le Tocsin est une cloche utilisée en temps de guerre. Utilisé ici pour parler de la raison qui se répand partout.", "Il s'agit d'une trompette pour appeler les femmes comme en temps de guerre.", "Il s'agit d'une clochette à accrocher au cou des moutons pour rappeler les troupeaux."], answer: 0, explanation: 'Le tocsin est une cloche utilisée en temps de guerre. Il s’agit ici de la cloche de la raison : ODG se place dans l’héritage des Lumières. La raison se répand partout et la femme doit en profiter pour faire valoir ses droits.' },
            { id: 'odg_postambule_q16', type: 'QCM', question: 'Pourquoi ODG utilise la <b>Métaphore</b> du Tocsin (cloche utilisée en temps de guerre) pour désigner la raison?', options: ["Avec cette idée de cloche de la raison ODG se place dans l’héritage des Lumières.", "Avec cette idée de cloche de la raison ODG se place dans l'église."], answer: 0, explanation: 'Il s’agit ici de la cloche de la raison : ODG se place dans l’héritage des Lumières. La raison se répand partout et la femme doit en profiter pour faire valoir ses droits.' },
            { id: 'odg_postambule_q17', type: 'QCM', question: '"Le flambeau de la vérité", de quelle figure de style s\'agit-il ?', options: ["Métaphore", "Périphrase"], answer: 0, explanation: 'Métaphore qui renvoie à la lumière et donc au siècle des lumières qui ont dissipé les nuages de la sottise. <b>Métaphore</b> = Comparaison sans outil de comparaison (ex: "la route, long ruban") On compare à quelque chose de différent. / <b>Périphrase</b>: Expression en plusieurs mots pour décrire quelque chose de simple (ex: "Ile de Beauté" pour la Corse, "l\'astre du jour" pour le soleil).' },
            { id: 'odg_postambule_q18', type: 'QCM', question: 'Quel est l\'objectif de la question rhétorique <b>"Que vous reste-t-il?</b>', options: ["Rappeler qu'il faut toujours chercher", "Montrer l'impuissance des femmes après la révolution."], answer: 1, explanation: 'Elle montre l’impuissance des femmes après la Révolution. Puis donne 2 réponses - 1re réponse : insiste sur l\'ingratitude des hommes - 2ème réponse : les femmes doivent réclamer encore se battre.' },
            { id: 'odg_postambule_q19', type: 'QCM', question: 'Quelle figure de style ODG utilise-t-elle avec l’expression "le flambeau de la vérité" ?', options: ["Une personnification", "Une allitération", "Une métaphore", "Une hyperbole"], answer: 2, explanation: "Le 'flambeau de la vérité' constitue une métaphore lumineuse en lien avec l'idée des Lumières, symbolisant l'éclairage rationnel contre l'ignorance." },
            { id: 'odg_postambule_q20', type: 'QCM', question: 'Que désigne cette périphrase "Le puissant empire de la nature"', options: ["Dieu", "Le roi", "L'humanité"], answer: 2, explanation: 'La périphrase désigne l’humanité qui valorise la nature par rapport à la civilisation (c’est la société qui a perverti les règles de la nature, dans laquelle l’égalité des sexes est inscrite).' },
            { id: 'odg_postambule_q21', type: 'VF', question: 'Une Question Rhétorique est une figure de style qui consiste à poser une question dont la réponse est connue ou suggérée par la personne qui formule l\'interrogation.', answer: 'Vrai', explanation: "On pose une fausse question pour tenir en haleine son auditoire." },
            { id: 'odg_postambule_q22', type: 'QCM', question: 'Quel est l\'objectif de la question rhétorique : "Quels sont les avantages que vous avez recueillis dans la Révolution ?" suivie de "Un mépris plus marqué..." ?', options: ["Rappeler que la Révolution aurait pu améliorer le sort des femmes, mais non...", "Que les avantages de la révolution ont été nombreux.", "Que les avantages ne servent à rien."], answer: 0, explanation: 'Cette 2e question rhétorique rappelle que la Révolution aurait pu améliorer le sort des femmes, mais cela n’a pas été le cas comme le montre sa propre réponse.' },
            { id: 'odg_postambule_q23', type: 'QCM', question: 'Quelles sont les figures de style dans cette phrase "Un mépris plus marqué, un dédain plus signalé."?', options: ["Phrase verbale + comparaison", "Phrase nominale + parallélisme de construction."], answer: 1, explanation: 'La phrase est courte et donc d’autant plus frappante. Avec le parallélisme de construction, ODG met en valeur un nouveau paradoxe : au lieu de les respecter davantage, les hommes les méprisent encore plus.' },
            { id: 'odg_postambule_q24', type: 'QCM', question: 'Avec ce parallélisme de construction : <b>"Un mépris plus marqué, un dédain plus signalé."</b>, quel paradoxe veut mettre en avant ODG ?', options: ["Au lieu de respecter davantage les femmes, les hommes les méprisent encore plus.", "Montrer que le mépris et le dédain vont faire avancer les choses."], answer: 0, explanation: 'Avec le parallélisme de construction, ODG met en valeur un nouveau paradoxe : au lieu de les respecter davantage, les hommes les méprisent encore plus. La phrase est courte et donc d’autant plus frappante.' },
            { id: 'odg_postambule_q25', type: 'QCM', question: 'A quoi fait référence la périphrase <b>"Dans les siècles de corruption"</b>?"', options: ["L'Ancien Régime", "Le siècle des lumières."], answer: 0, explanation: 'La périphrase "les siècles de corruptio" désigne l’Ancien Régime qui était un monde corrompu, injustice et ignorance, ne respecte pas les règles de la nature qui sont bonnes.' },
            { id: 'odg_postambule_q26', type: 'VF', question: '"les sages décrets de la nature" est une périphrase.', answer: 'Faux', explanation: "C'est une métaphore juridique qui rappelle que les droits de la femme sont inscrits dans la nature." },
            { id: 'odg_postambule_q27', type: 'VF', question: 'La métaphore de l’aveuglement dans "quand cesserez-vous d\'être aveugles ?" appelle les femmes à la prise de conscience.', answer: 'Vrai', explanation: "Cette métaphore appelle les femmes à ouvrir les yeux sur leur oppression et leurs droits bafoués." },
            { id: 'odg_postambule_q28', type: 'QCM', question: 'Quel est l\'objectif de la question rhétorique <b>"Quels sont les avantages que vous avez recueillis dans la Révolution ?"</b> Un mépris plus marqué,', options: ["Rappeler que la Révolution aurait pu améliorer le sort des femmes, mais non...", "Que les avantages de la révolution ont été nombreux.", "Que les avantages ne servent à rien."], answer: 0, explanation: 'Cette 2e question rhétorique rappelle que la Révolution aurait pu améliorer le sort des femmes, mais cela n’a pas été le cas comme le montre sa propre réponse.' },
            { id: 'odg_postambule_q29', type: 'QCM_EXTRAIT', question: 'Quelles figures de styles trouvent-on dans cet extrait?', extract: "Le puissant empire de la nature n'est plus environné de préjugés, de fanatisme, de superstition et de mensonges.", options: ["Métaphore, Périphrase, Énumération", "Allitération, Périphrase, Négation", "Périphrase, Négation, Énumération."], answer: 2, explanation: 'Périphrase "Le puissant empire de la nature" = l\'humanité, Négation + Énumération : Par rapport au tocsin de la raison grâce à qui l’humanité s’est libérée de l’obscurantisme que désignent les noms communs. La vérité règne. Toutes les conditions favorables sont donc réunies pour réclamer ses droits.' },
            { id: 'odg_postambule_q30', type: 'QCM_EXTRAIT', question: 'A quoi fait référence l\'énumération dans cet extrait?', extract: "Le puissant empire de la nature n'est plus environné de préjugés, de fanatisme, de superstition et de mensonges.", options: ["Despotisme : Type de domination politique tyrannique où une seule personne exerce un pouvoir sans partage.", "Obscurantisme: attitude d'opposition à la diffusion du savoir et de la connaissance"], answer: 1, explanation: 'Grâce au tocsin de la raison, l’humanité s’est libérée de l’obscurantisme que désignent les noms communs. La vérité règne. Toutes les conditions favorables sont donc réunies pour réclamer ses droits. ' },
            { id: 'odg_postambule_q31', type: 'QCM_EXTRAIT', question: 'Que Montrent les 2 Métaphores de cet extrait ?', extract: "Le <b>flambeau de la vérité</b> a dissipé tous <b>les nuages de la sottise et de l'usurpation</b>", options: ["Que les femmes veulent le pouvoir", "Que les conditions sont réunies pour permettre aux femmes de réclamer leurs droits"], answer: 1, explanation: 'La métaphore du "flambeau de la vérité" (Lumières, raison) dissipant "les nuages de la sottise et de l\'usurpation" (ignorance, pouvoir illégitime) signifie que la Révolution a créé les conditions intellectuelles pour que les femmes puissent comprendre leur situation et réclamer leurs droits légitimes.' },
            { id: 'odg_postambule_q32', type: 'QCM_EXTRAIT', question: 'Que trouve-t-on dans cette citation ?', extract: "L'homme <b>esclave</b> a multiplié ses forces, a eu besoin de recourir aux tiennes pour <b>briser ses fers</b>. Devenu libre, il est devenu injuste envers sa compagne", options: ["Champ lexical de l'esclavage & de la liberté / Métaphore", "Champ lexical de l'esclavage & de la liberté / Parallélisme de construction"], answer: 1, explanation: 'Avant la révolution, les hommes étaient comme esclaves des nobles, des puissants. Pour se libérer (d’où l’image des fers brisés), ils ont eu recours aux forces des femmes ("des tiennes"). <br>Le parallélisme de construction souligne ainsi qu’il est anormal que l’homme soit ingrat envers la femme alors même qu’elle l’a aidé. La femme est restée esclave alors qu’il s’est libéré grâce à son aide… Elle met en lumière ce paradoxe. ' },
            { id: 'odg_postambule_q33', type: 'QCM_EXTRAIT', question: 'A quoi sert le parallélisme de construction dans cet extrait ?', extract: "L'homme <b>esclave</b> a multiplié ses forces, a eu besoin de recourir aux <b>tiennes</b> pour <b>briser ses fers</b>. Devenu libre, il est devenu injuste envers sa compagne", options: ["Souligne que les hommes ne doivent rien aux femmes", "Qu'il est anormal que l'homme soit ingrat envers la femme"], answer: 1, explanation: 'Avant la révolution, les hommes étaient comme esclaves des nobles, des puissants. Pour se libérer (d’où l’image des fers brisées), ils ont eu recours aux forces des femmes ("des tiennes"). <br>Le parallélisme de construction souligne ainsi qu’il est anormal que l’homme soit ingrat envers la femme alors même qu’elle l’a aidé. La femme est restée esclave alors qu’il s’est libéré grâce à son aide… Elle met en lumière ce paradoxe. ' },
            { id: 'odg_postambule_q34', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, a qui fait référence l\'adjectif possessif "Tiennes" ?', extract: "L'homme <b>esclave</b> a multiplié ses forces, a eu besoin de recourir aux <b>tiennes</b> pour <b>briser ses fers</b>. Devenu libre, il est devenu injuste envers sa compagne", options: ["Aux femmes", "Aux déesses"], answer: 0, explanation: 'Avant la révolution, les hommes étaient comme esclaves des nobles, des puissants. Pour se libérer (d’où l’image des fers brisées), ils ont eu recours aux forces des femmes ("des tiennes"). <br>Le parallélisme de construction souligne ainsi qu’il est anormal que l’homme soit ingrat envers la femme alors même qu’elle l’a aidé. La femme est restée esclave alors qu’il s’est libéré grâce à son aide… Elle met en lumière ce paradoxe. ' },
            { id: 'odg_postambule_q35', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, quelles sont les 3 figures de style qui relancent l\'attention des femmes?', extract: "Ô femmes ! femmes, quand cesserez-vous d'être aveugles ? ", options: ["Apostrophe + exclamation / Question rhétorique / Métaphore de l'aveuglement", "Apostrophe + exclamation / Question rhétorique / Comparaison de l'aveuglement"], answer: 0, explanation: 'Ces figures de style relancent l’attention des femmes. L’<b>exclamation</b> a un ton de déploration (lamentation). <br>La <b>question est purement rhétorique</b> : elle n’attend pas de réponse et vise simplement à faire réagir la femme. <br>La <b>métaphore</b> de l’aveuglement appelle à une prise de conscience. Les femmes ne doivent plus se soumettre.' },
            { id: 'odg_postambule_q36', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, à quoi est comparé la métaphore de l\'aveuglement ?', extract: "Ô femmes ! femmes, <b>quand cesserez-vous d'être aveugles</b> ? ", options: ["A l'absence de prise de conscience des femmes", "A la loyauté des femmes"], answer: 0, explanation: 'La <b>métaphore</b> de l’aveuglement appelle à une <b>prise de conscience</b>. Les femmes ne doivent plus se soumettre.' },
            { id: 'odg_postambule_q37', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, quelles sont les 3 figures de style ?', extract: "Dans les <b>siècles de corruption</b> vous <b>n</b>'avez régné <b>que</b> sur la faiblesse des hommes. Votre <b>empire</b> est détruit.", options: ["Métaphore, Négation restrictive / Présent de vérité générale & Métaphore de l'empire.", "Périphrase, Négation restrictive / Présent de vérité générale & Métaphore de l'empire."], answer: 1, explanation: '<b>Périphrase</b> "les siècles de corruption" = Ancien Régime qui était un monde corrompu, injustice et ignorance, ne respecte pas les règles de la nature qui sont bonnes.<br><b>Négation restrictive</b> les femmes avaient tout de même un pouvoir dans la sphère privée : "la faiblesse des hommes". <br> <b>Présent de vérité générale + Métaphore de l\'empire</b> : l\'empire se rapporte à la sphère privée dans laquelle la femme avait un peu de pouvoir mais elle a désormais tout perdu.' },
            { id: 'odg_postambule_q38', type: 'QCM_EXTRAIT', question: 'Dans cet extrait à quoi fait référence "votre empire" ?', extract: "Dans les <b>siècles de corruption</b> vous <b>n</b>'avez régné <b>que</b> sur la faiblesse des hommes. Votre <b>empire</b> est détruit.", options: ["A l'ancien régime", "La sphère privée et familiale des femmes"], answer: 1, explanation: 'Dans la sphère privée elles avaient un semblant de pouvoir grâce à la faiblesse des hommes mais elles ont tout perdu.' },
            { id: 'odg_postambule_q39', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, il y a:', extract: "Que vous reste-t-il donc ? La conviction des injustices de l'homme. La réclamation de votre patrimoine, fondée sur les sages décrets de la nature", options: ["Question Rhétorique / Phrase verbale", "Question Rhétorique / Phrase nominale"], answer: 1, explanation: '<b>Question rhétorique</b> qui montre l\'impuissance des femmes après la révolution.<br>Rpse 1 : Avec <b>une phrase nominale</b> frappante ODG insiste de nouveau sur l\'ingratitude des hommes.<br>Rpse 2: le mot "Réclamation" montre que ce qu\'il reste aux femmes c\'est leur combat pour des droits et biens (patrimoine).' },
            { id: 'odg_postambule_q40', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, a quoi font référence les mots en gras ', extract: " La <b>réclamation</b> de votre <b>patrimoine</b>, fondée sur les sages décrets de la nature.", options: ["Le combat des femmes pour leur droits / le porte-monnaie des femmes?", "Le combat des femmes pour leurs droits / Les biens matériels et l'héritage naturel des femmes"], answer: 1, explanation: 'Le terme “patrimoine” englobe les biens matériels des femmes et leur héritage naturel. La métaphore juridique "les sages décrets de la nature" rappelle que les droits de la femme sont inscrits dans la nature.' },
            { id: 'odg_postambule_q41', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, combien de réponses sont apportées à la question rhétorique', extract: "Que vous reste-t-il donc ? <br>La conviction des injustices de l'homme.<br>La réclamation de votre patrimoine, fondée sur les sages décrets de la nature", options: ["1", "2"], answer: 1, explanation: '<b>2 réponses :</b> <br>Rpse 1 : Avec une phrase nominale frappante ODG insiste de nouveau sur l\'ingratitude des hommes.<br>Rpse 2: le mot "Réclamation" montre que ce qu\'il reste aux femmes c\'est leur combat pour des droits et biens (patrimoine).' },
            { id: 'odg_postambule_q42', type: 'QCM_EXTRAIT', question: 'Que valorise ODG avec l’expression en gras dans cet extrait (et l\'adverbe intensif "si") ?', extract: 'Qu\'auriez-vous à redouter pour une <b>si belle entreprise</b> ?', options: ["La facilité de la lutte des femmes", "La noblesse et l’importance du combat des femmes", "La soumission des femmes à leur destin"], answer: 1, explanation: 'L’adverbe intensif "si" valorise clairement le combat que mènent les femmes, insistant sur son importance et sa grandeur.' },
            { id: 'odg_postambule_q43', type: 'QCM_EXTRAIT', question: 'À quoi fait référence la <b>1ère crainte</b> des femmes qu\'évoque ODG dans la citation en gras ?', extract: '<b>Le bon mot du législateur des noces de Cana ?</b>', options: ["Une critique d’un discours à l’Assemblée Nationale", "Le regard ou jugement divin (épisode biblique des noces de Cana)", "Une crainte devant l’échec politique"], answer: 1, explanation: 'ODG explore la crainte des femmes <b>du regard de DIEU</b>. Avec la référence au législateur biblique des noces de Cana (Jésus), elle évoque symboliquement la crainte des femmes face au regard ou jugement divin.' },
            { id: 'odg_postambule_q44', type: 'QCM_EXTRAIT', question: 'À quoi fait référence la <b>2ème crainte</b> des femmes qu\'évoque ODG dans la citation en gras ?', extract: ' Craignez-vous que nos <b>législateurs français, correcteurs de cette morale</b> longtemps accrochée aux branches de la politique,', options: ["La réaction méprisante des Hommes", "Le regard ou jugement divin (épisode biblique des noces de Cana)", "Une crainte devant l’échec politique"], answer: 0, explanation: 'Les femmes auraient peur des hommes (“Législateurs français”) qui auraient pris le relais de Jésus (“Législateur des noces de Cana”) dans la correction de la morale. La morale religieuse et la politique ont longtemps été liées.' },
            { id: 'odg_postambule_q45', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, comment ODG suggère-t-elle aux femmes de réagir face au rejet des hommes ?', extract: '" Femmes, qu’y a-t-il de commun entre vous et nous ? auriez-vous à répondre." " Tout ", auriez-vous à répondre.', options: ["Par la révolte violente", "Par l’indifférence", "Par une affirmation ferme d’une égalité totale"], answer: 2, explanation: 'Grâce au discours direct et à une réponse brève "Tout", ODG suggère une prise de position ferme et catégorique : les femmes doivent affirmer leur pleine égalité avec les hommes.' },
            { id: 'odg_postambule_q46', type: 'QCM', question: 'Quelle est la fonction du discours direct rapporté par ODG "Femmes, qu\’y a-t-il de commun entre vous et nous ? Tout." ?', options: ["Montrer explicitement une différence naturelle entre les sexes", "Donner vie au dialogue et suggérer l\’affirmation de l’égalité", "Dénoncer uniquement le ton ironique des législateurs français"], answer: 1, explanation: 'Le discours direct rend vivant l\’échange, permet de donner plus de force à l\’argument d’égalité des femmes face aux hommes.' },
            { id: 'odg_postambule_q47', type: 'VF', question: 'La question "Femmes, qu\’y-a-t-il de commun entre vous et nous ?"" représente une attitude d\’ouverture et d’accueil des hommes envers les femmes.', answer: 'Faux', explanation: 'Cette question rhétorique représente une attitude de mépris et de rejet, suggérant faussement l\’absence de points communs entre hommes et femmes.' },
            { id: 'odg_postambule_q48', type: 'QCM', question: 'Que montre ODG avec la métaphore juridique "les sages décrets de la nature"?', options: ["Que les droits de la femme sont inscrits dans la nature", "Que la nature n'a aucun pouvoir"], answer: 0, explanation: 'Avec cette métaphore, elle montre que la nature édicte des lois contre lesquelles on ne peut pas s\'opposer.' },
            { id: 'odg_postambule_q49', type: 'QCM', question: 'Quelle incohérence des hommes dénonce ODG dans cet extrait \"S\'ils s\'obstinaient, dans leur faiblesse, à mettre cette inconséquence en contradiction avec leurs principes ?\"', options: [ "Le fait qu'ils agissent conformément à leurs principes révolutionnaires", "Le fait qu'ils prétendent combattre la tyrannie tout en gardant les femmes soumises", "Le fait qu'ils règnent par la force physique uniquement" ], answer: 1, explanation: 'ODG dénonce l\'incohérence des hommes qui disent lutter contre la tyrannie mais limitent pourtant les droits des femmes en maintenant leur soumission.' },
            { id: 'odg_postambule_q50', type: 'QCM', question: 'De quel type de subordonnée s\'agit-il et à quoi sert-elle ? \"S\'ils s\'obstinaient, dans leur faiblesse, à mettre cette inconséquence en contradiction avec leurs principes ?\"', options: [ "Type : proposition subordonnée circonstancielle de temps <br> Objectif : Montrer que les hommes ont des principes révolutionnaires", "Type : proposition subordonnée circonstancielle de condition <br> Objectif : Montrer l'incohérence des hommes qui prétendent combattre la tyrannie tout en gardant les femmes soumises", ], answer: 1, explanation: "La proposition subordonnée circonstancielle de condition dénonce l’incohérence des hommes et particulièrement des députés, qui disent lutter contre la tyrannie mais qui maintiennent les femmes dans la soumission." },
            { id: 'odg_postambule_q51', type: 'QCM', question: 'Quel objectif poursuit ODG en employant la 2e personne du pluriel (\"vous\") dans ce passage ?', options: [ "Parler directement aux députés", "Créer un sentiment d'unité et de solidarité entre les femmes", "S’adresser uniquement aux philosophes des Lumières" ], answer: 1, explanation: "Par l'emploi du \"vous\", ODG s’adresse directement aux femmes afin de susciter leur unité et leur solidarité dans le combat pour leurs droits." },
            { id: 'odg_postambule_q52', type: 'VF', question: 'ODG associe les hommes à des termes péjoratifs (\'faiblesse\', \'inconséquence\', \'vaines prétentions\', \'orgueilleux\'...) afin de renforcer la confiance des femmes.', answer: "Vrai", explanation: "En assimilant les hommes à des termes péjoratifs, ODG dévalorise symboliquement leur prétendue supériorité afin de renforcer la confiance des femmes." },
            { id: 'odg_postambule_q53', type: 'VF', question: 'L\'auteure souhaite établir une supériorité féminine sur les hommes.', answer: "Faux", explanation: "ODG n'appelle pas à la supériorité féminine, mais vise plutôt l’égalité entre les femmes et les hommes : une alliance plutôt qu'une soumission." },
            { id:'odg_postambule_q54', type:'QCM_EXTRAIT', question:'Quel est l\’effet recherché par l’utilisation répétée de termes en gras dans cet extrait ?', extract:'<b>opposez</b> courageusement la force de la raison […], <b>réunissez-vous</b> sous les étendards de la philosophie, <b>déployez</b> toute l\’énergie de votre caractère', options:[ "Donner des ordres aux députés.", "Inviter à l\’action collective des femmes.", "Critiquer la passivité des philosophes." ], answer: 1, explanation:'Les impératifs "opposez", "réunissez-vous", et "déployez", visent directement à galvaniser les femmes, à les inviter à une action collective pour revendiquer leurs droits.' },
            { id:'odg_postambule_q55', type:'QCM_EXTRAIT', question:'Dans cet extrait, quelle attitude ODG propose-t-elle d\’opposer face aux hommes ?', extract:'opposez courageusement la <b>force de la raison</b> aux vaines prétentions de supériorité', options:[ "La force physique et guerrière", "La violence verbale", "Une supériorité intellectuelle et morale fondée sur la raison" ], answer: 2, explanation:'ODG propose aux femmes d’opposer une supériorité intellectuelle et morale basée sur la raison ("force de la raison") aux prétentions injustifiées des hommes.' },
            { id:'odg_postambule_q56', type:'QCM_EXTRAIT', question:'Quelle est l\’idée suggérée par l\’expression en gras dans cette citation ?', extract:'vous verrez bientôt ces orgueilleux, <b>non serviles adorateurs rampants à vos pieds, mais fiers de partager avec vous les trésors de l\'Être suprême</b>', options:[ "Une future domination des femmes sur les hommes.", "Une égalité fondée sur l'alliance plutôt que sur la soumission.", "Une séparation définitive entre les femmes et les hommes." ], answer: 1, explanation:'En utilisant une métaphore qui montre les hommes non comme "adorateurs rampants", mais au contraire comme "fiers de partager", ODG insiste sur une égalité envisagée comme une réelle alliance, sans soumission.' },
            { id:'odg_postambule_q57', type:'VF', question:'L’expression "les trésors de l\’Être suprême" fait référence aux valeurs universelles prônées par la philosophie des Lumières.', answer:'Vrai', explanation:'Cette expression symbolique fait bien référence aux valeurs universelles comme la raison, l\’égalité et le respect mutuel, issues notamment de la philosophie des Lumières.' },
            { id:'odg_postambule_q58', type:'QCM', question:'Quel temps verbal ODG utilise-t-elle dans "vous verrez bientôt", et pourquoi ?', options:[ "Présent – pour rendre la situation actuelle plus vivante.", "Futur de certitude – pour souligner une issue positive si les femmes agissent.", "Conditionnel – pour exprimer une hypothèse irréelle." ], answer: 1, explanation:'ODG emploie ici un futur de certitude ("vous verrez bientôt") afin d\’affirmer que les femmes obtiendront certainement une situation positive si elles luttent activement pour leurs droits.' },
            { id: 'odg_postambule_q59', type: 'QCM', question: 'Quel message principal ODG transmet-elle dans ce passage "il est en votre pouvoir de les affranchir ; vous n\'avez qu\'à le vouloir" ?', options: [ "Les femmes doivent accepter passivement les obstacles.", "Les femmes peuvent surmonter les obstacles à condition de vouloir se libérer.", "Les femmes doivent attendre une autorisation des hommes pour agir." ], answer: 1, explanation: 'ODG insiste sur la capacité d\'action des femmes : leur libération dépend principalement et avant tout de leur volonté.' },
            { id: 'odg_postambule_q60', type: 'QCM', question: 'À quoi sert la proposition subordonnée circonstancielle de concession "Quelles que soient les barrières que l\'on vous oppose" ?', options: [ "À rappeler le soutien inconditionnel des hommes.", "À présenter les obstacles éventuels tout en affirmant leur dépassement possible.", "À exprimer l\’exclusion définitive des femmes." ], answer: 1, explanation: 'La subordonnée circonstancielle de concession ("quelles que soient les barrières") indique l’existence d’obstacles éventuels, tout en soulignant immédiatement que les femmes peuvent les dépasser.' },
            { id: 'odg_postambule_q61', type: 'VF', question: 'La négation restrictive "ne... que…" dans le passage ("vous n\'avez qu\'à le vouloir") insiste sur la difficulté à vaincre les obstacles.', answer: 'Faux', explanation: 'La négation restrictive "ne... que…" insiste sur le fait que la possibilité de liberté dépend uniquement de la volonté des femmes, et non pas sur la difficulté elle-même.' },
            { id:'odg_postambule_q62', type:'QCM_EXTRAIT', question:'Que signifie principalement le terme en gras dans cet extrait ?', extract:'il est en votre pouvoir de les <b>affranchir</b>', options:[ "Créer davantage d\’obstacles.", "Dépasser physiquement les barrières et se libérer d\’une sujétion.", "Demander une aide extérieure pour franchir ces barrières." ], answer: 1, explanation:'Le terme "affranchir" est polysémique. Ici, il désigne à la fois l\’idée concrète de passer au-dessus des barrières, et surtout symboliquement de se libérer d\’une soumission sociale.' },
            { id:'odg_postambule_q63', type:'VF', question:'Le mot "affranchir" est polysémique (il possède un double sens) : franchir physiquement et libérer symboliquement.', answer:'Vrai', explanation:'Le verbe "affranchir" est polysémique : il désigne à la fois le franchissement matériel d’obstacles et la libération symbolique d’une oppression.' },
            { id:'odg_postambule_q64', type:'QCM', question:'Sur quoi insiste la négation restrictive "vous n\’avez qu’à le vouloir"?', options:[ "Sur la difficulté extrême de la lutte des femmes.", "Sur le découragement face à l’inaction des législateurs.", "Sur le fait essentiel que seule la volonté des femmes est nécessaire à leur libération." ], answer: 2, explanation:'La négation restrictive ("ne...que...") met en avant l\’idée essentielle selon laquelle leur volonté seule suffit à leur libération.' },
            { id:'odg_postambule_q65', type:'QCM_EXTRAIT', question:'Quel effet produit l\’expression en gras dans : "<b>il est en votre pouvoir</b>"?', extract:'Quelles que soient les barrières que l\'on vous oppose, <b>il est en votre pouvoir</b> de les affranchir ; vous n\'avez qu\'à le vouloir', options:[ "Cela valorise la force et la capacité d’action des femmes.", "Cela souligne la supériorité naturelle des hommes.", "Cela met en évidence l\’impuissance des femmes." ], answer: 0, explanation:'L\’expression "il est en votre pouvoir" insiste sur la capacité des femmes à agir et souligne leur force intrinsèque.' },
            { id:'odg_postambule_q66', type:'QCM', question:'Quel est le but principal de la fin du Postambule ?', options: ["Décrire les lois existantes.", "Exprimer un découragement final.", "Exhorter les femmes à l'action et affirmer leur capacité à se libérer."], answer: 2, explanation:'La fin du Postambule est un appel vibrant à l\'action, insistant sur la volonté et le pouvoir des femmes de surmonter les obstacles pour atteindre l\'égalité.' }
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
            answer: 1,
            explanation: '"Vénus Anadyomène" désigne littéralement Vénus sortant des eaux, en référence au mythe antique représentant Vénus née de l’écume marine.'
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
            question: "Quelle figure de style domine dans l'expression : 'Comme d'un cercueil vert en fer blanc, une tête'",
            extract: "Comme d'un cercueil vert en fer blanc, une tête",
            options: ["Métaphore", "Comparaison", "Allégorie", "Hyperbole"],
            answer: 1,
            explanation: "La présence du terme comparatif 'Comme' indique explicitement une comparaison. La tête est comparée de manière grotesque à quelque chose émergeant d'un 'cercueil' vert en fer blanc, insistant sur l'aspect lugubre."
        },
        {
            id: 'venus_q4',
            type: 'VF',
            question: "Dans l'extrait 'Comme d'un cercueil vert en fer blanc, une tête', la comparaison renvoie à une idée positive et attrayante.",
            answer: 'Faux',
            explanation: "Cette comparaison donne une impression macabre et grotesque ; elle renvoie à une idée négative et repoussante. Vénus = seulement 'une tête' indéfinie."
        },
        {
            id: 'venus_q5',
            type: 'QCM',
            question: "Quelle impression crée la description initiale par le choix lexical 'cercueil vert en fer blanc' ?",
            options: ["Impression d'élégance", "Atmosphère chaleureuse", "Impression d'élégance et bon marché"],
            answer: 2,
            explanation: "<b>Elegance</b> (Les couleurs peuvent renvoyer au tableau de Botticelli). Bon marché ('fer' fait penser à une baignoire bon marché, rompt avec l’idéal)."
        },
        {
            id: 'venus_q6',
            type: 'QCM_EXTRAIT',
            question: "A quel oeuvre fait référence le vers : 'Comme d'un cercueil vert en fer blanc, une tête' ?",
            extract: "Comme d'un cercueil vert en fer blanc, une tête",
            options: ["Tableau 'La naissance de Venus' de Botticelli 1485.", "Sculpture Victoire de Samotrace II avant JC."],
            answer: 0,
            explanation: "C'est un traitement parodique du tableau 'La naissance de Venus' de Botticelli 1485. Le noble coquillage est devenu un accessoire prosaïque (commun, dépourvu d'élégance)."
        },
        {
            id: 'venus_q7',
            type: 'QCM_EXTRAIT',
            question: "Quelle figure de style se cache derrière l'adjectif '<b>vieille</b> baignoire'",
            extract: "Vieille baignoire",
            options: ["Hypallage (mettre dans une autre phrase un terme qui se rapporte à la 1ere phrase).", "Allitération (répétition d'une consonne)"],
            answer: 0,
            explanation: "L’adjectif peut être une hypallage. En effet, l’adj ne désigne-t-il que la baignoire ou aussi la déesse qui est pourtant censée naître ? Cette interprétation va avec le 'cercueil' qui montre une Vénus non pas naissante (ce qu’annonçait pourtant le titre avec l’adjectif 'anadyomène'), mais proche de la mort. Le traitement de Vénus est bien parodique. "
        },
        {
            id: 'venus_q8',
            type: 'QCM',
            question: " La blondeur de Vénus est aussi transformée : Venus est 'brune'. pourquoi ?",
            options: ["Lui donner plus de puissance + connotation luxueuse","Briser le mythe + connotation de la couleur : sombre, plus lugubre."],
            answer: 1,
            explanation: "La blondeur de Vénus est aussi transformée : 'brune' → brise le mythe + connotation de la couleur : sombre, plus lugubre."        
        },
        {
            id: 'venus_q9',
            type: 'QCM',
            question: "Le premier quatrain du poème appartient clairement à quel registre littéraire ?",
            options: ["Pathétique", "Satirique et caricatural", "Lyrique", "Épique"],
            answer: 1,
            explanation: "Dès le début, le quatrain instaure un registre satirique et caricatural, rejetant la traditionnelle admiration pour la beauté féminine avec ironie et humour noir."
        },
        {
            id: 'venus_q10',
            type: 'QCM_EXTRAIT',
            question: "Qu'apportent les expressions 'fortement pommadés' et 'déficits mal ravaudés' ?",
            extract: "De femme à cheveux bruns <b>fortement pommadés</b><br> D’une vieille baignoire émerge, lente et bête,<br> Avec des <b>déficits assez mal ravaudés</b>",
            options: ["La rendent belle et mystérieuse", "Déprécient son apparence"],
            answer: 1,
            explanation: "L’adverbe 'fortement' montre que c’est trop, ridicule (contraire à la représentation faite par Botticelli où les cheveux volent au vent). 'Déficits mal ravaudés' devient symbole de laideur et de lacunes."
        },
        {
            id: 'venus_q11',
            type: 'QCM',
            question: "Avec les adjectifs <b>'Lente et bête'</b> quelle apparence est donné à Venus ?",
            options: ["L'apparence d'une déesse", "l'apparence d'un animal."],
            answer: 1,
            explanation: "Vénus a plus l’apparence d’un animal que d’une déesse. Polysémie du nom 'bête' qui est rapproché du nom 'tête' par la rime (pauvreté intellectuelle?)"
        },
        {
            id: 'venus_q12',
            type: 'QCM',
            question: "Pourquoi Rimbaud utilise le mot 'bête' ?",
            options: ["Pour se rapprocher du Loup Garoup", "Pour jouer sur la Polysémie du terme (une bête / être bête)."],
            answer: 1, // `réponse` -> `answer`
            explanation: "Polysémie du nom 'bête' qui est rapproché du nom 'tête' par la rime (Veut-il parler de la pauvreté intellectuelle de Venus?)"
        },
        {
            id: 'venus_q13',
            type: 'QCM_EXTRAIT',
            question: "Dans 'Comme d'un cercueil vert en fer blanc', l'association du 'cercueil' produit immédiatement quelle sensation chez le lecteur ?",
            extract: "Comme d'un cercueil vert en fer blanc",
            options: ["Une sensation d'harmonie", "Une sensation agréable et rassurante", "Une sensation d'inconfort et d'étrangeté morbide", "Une sensation d'admiration traditionnelle"],
            answer: 2,
            explanation: "L'association à un cercueil produit instantanément un effet de malaise, de morbide étrangeté et d'inconfort chez le lecteur."
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
            question: "Quel effet le présent de l'indicatif a-t-il dans la description du corps de Vénus ?",
            options: ["Il atténue la vivacité de la scène", "Il renforce l'impression d'immédiateté et de présence", "Il donne une dimension intemporelle à la scène", "Il n'a pas d'effet particulier"],
            answer: 1,
            explanation: "Le présent de l'indicatif dans ce contexte renforce l'hypotypose sordide (décrire de manière précise pour rendre la scene plus réelle), donnant l'impression que le lecteur voit Vénus émerger de l'eau en temps réel."
        },
        {
            id: 'venus_q16',
            type: 'VF',
            question: "AFFIRMATION : L'anaphore de l’adverbe 'puis' suggère une progression harmonieuse et esthétique.",
            answer: 'Faux',
            explanation: "L’anaphore de 'puis' montre une progression dans la description du corps qui, au contraire, révèle toute la laideur de Vénus au fur et à mesure de son émergence de la baignoire."
        },
       {
            id: 'venus_q17',
            type: 'QCM_EXTRAIT',
            question: "Dans cet extrait, la répétition de l'adverbe 'puis' est une figure de style. Laquelle ?",
            extract: "<b>Puis</b> le col gras et gris, les larges omoplates <br> Qui saillent ; le dos court qui rentre et qui ressort ; <br> <b>Puis</b> les rondeurs des reins semblent prendre l’essor.",
            options: ["Assonance pour répeter des voyelles", "Une anaphore pour montrer la laideur de haut en bas."],
            answer: 1,
            explanation: "Description progressive du corps à travers l’anaphore de l’adverbe 'puis' → le poète va montrer toute sa laideur au fur et à mesure que Vénus émerge de la baignoire. Hypotypose sordide : le présent donne l’impression qu’on voit Vénus sortir de l’eau."
        },
       {
            id: 'venus_q18',
            type: 'QCM_EXTRAIT',
            question: "Pourquoi le corps paraît-il difforme ?",
            extract: "Les <b>larges</b> omoplates <br> Qui <b>saillent</b> ; le dos <b>court</b> qui rentre et qui ressort ; <br> Puis les <b>rondeurs</b> des reins semblent prendre l’essor.",
            options: ["Utilisation d'antithèses (termes opposés)", "Répétition de l'adverbe 'puis'"],
            answer: 0,
            explanation: "antithèses : 'large' et 'court', omoplates qui  'saillent' (=maigreur mise en valeur par le rejet de la proposition subordonnée relative 'qui saillent') mais 'graisse' => le corps paraît difforme. Description à l’opposé des codes esthétiques traditionnels."
        },
        {
            id: 'venus_q19',
            type: 'QCM',
            question: "Quel effet produit l'allitération en [r] dans les mots 'gras', 'gris', 'large', 'court' ?",
            options: ["Un son doux et mélodieux", "Un son dur et désagréable", "Un rythme apaisant", "Un effet dramatique"],
            answer: 1,
            explanation: "L'allitération en [r] produit un son dur et désagréable, accentuant la tonalité laide et grotesque de la description."
        },
        {
            id: 'venus_q20',
            type: 'QCM',
            question: "La mention des 'omoplates' dans ce quatrain relève de quel procédé poétique ?",
            options: ["Une métaphore classique", "Un blason traditionnel", "Un contre-blason", "Une allégorie"],
            answer: 2,
            explanation: "La mention des 'omoplates', partie inattendue et non érotique, relève du contre-blason, opposé à la tradition de valoriser les belles parties du corps féminin."
        },
        {
            id: 'venus_q21',
            type: 'VF',
            question: "AFFIRMATION : Le rythme binaire des expressions 'qui rentre et qui ressort'» évoque une danse élégante et harmonieuse.",
            answer: 'Faux',
            explanation: "Le rythme binaire ici évoque une danse sordide, renforçant l’aspect grotesque du corps en mouvement."
        },
        {
            id: 'venus_q22',
            type: 'QCM',
            question: "Quel motif poétique traditionnel Rimbaud subvertit-il par le choix de rimes embrassées dans ce quatrain ?",
            options: ["Il renforce le schéma poétique classique", "Il respecte les canons de l'esthétique traditionnelle", "Il s'éloigne des codes poétiques traditionnels", "Il sublime la beauté classique"],
            answer: 2,
            explanation: "En choisissant des rimes embrassées et en changeant le schéma de rimes entre les quatrains, Rimbaud s’éloigne volontairement des codes poétiques traditionnels pour traiter un sujet anti-conventionnel."
        },
        {
            id: 'venus_q23',
            type: 'QCM',
            question: "Comment le rejet de la subordonnée relative 'qui saillent' contribue-t-il à l'impression du corps de Vénus ?",
            options: ["Il met en valeur une harmonie parfaite", "Il insiste sur la maigreur et l'étrangeté", "Il adoucit la description", "Il évoque la douceur des courbes"],
            answer: 1,
            explanation: "Le rejet de 'qui saillent' met en valeur la maigreur des omoplates, en accentuant leur caractère saillant et déshumanisé."
        },
        {
            id: 'venus_q24',
            type: 'VF',
            question: "AFFIRMATION : L'utilisation d'antithèses comme 'large' et 'court' donne une image harmonieuse du corps.",
            answer: 'Faux',
            explanation: "Les antithèses 'large' et 'court' accentuent la nature difforme et non-harmonieuse du corps de Vénus, renforçant le caractère grotesque."
        },
        {
            id: 'venus_q25',
            type: 'QCM',
            question: "Quelle est la nature du détail mis en avant par l'adverbe 'surtout' et l'expression 'à la loupe' ?",
            options: ["La grâce divine", "Une imperfection choquante et vulgaire", "Un détail érotique sublimé", "Un sentiment sublime"],
            answer: 1,
            explanation: "Le détail 'à la loupe' met en avant un aspect vulgaire et choquant, à savoir la relation avec 'Clara Vénus', une quasi-anagramme de 'ulcère à l’anus', soulignant une provocation scatologique."
        },
        {
            id: 'venus_q26',
            type: 'VF',
            question: "AFFIRMATION : L'usage du pronom 'on' au lieu de 'je' lyrique traditionnel permet de renforcer le côté impersonnel et objectivement grotesque du poème.",
            answer: 'Vrai',
            explanation: "En utilisant le pronom 'on', Rimbaud rejette le lyrisme traditionnel et intensifie l'observation distante et impersonnelle de la vulgarité apparente de la scène."
        },
        {
            id: 'venus_q27',
            type: 'QCM',
            question: "L'expression 'Clara Vénus' se rapproche par sa forme de quelle idée inattendue ?",
            options: ["L’élévation spirituelle", "La déchéance vulgaire", "La magnificence artistique", "La mélodie douce"],
            answer: 1,
            explanation: "'Clara Vénus' (signifiant \"illustre Venus\") est presque une anagramme subtile de 'ulcère à l’anus', indiquant une chute volontaire dans le bas et le vulgaire."
        },
        {
            id: 'venus_q28',
            type: 'QCM',
            question: "Que signifie l'expression 'Clara Vénus' et pourquoi introduit-t-elle l'idée de  la \"déchéance vulgaire\" ?",
            options: ["Clara Vénus = Claire de Venus / Déchéance vulgaire car il y a le mot nu", "Clara Vénus = Illustre Venus / Déchéance car contient un anagramme"],
            answer: 1, // `réponse` -> `answer`
            explanation: "'Clara Vénus' signifie \"illustre Venus\". Déchéance car c'est presque une anagramme subtile de 'ulcère à l’anus', indiquant une chute volontaire dans le bas et le vulgaire."
        },
        {
            id: 'venus_q29',
            type: 'QCM',
            question: "Quelle association synesthétique (association involontaire de 2 sens) crée une image de dégoût dans le poème ?",
            options: ["L’éclat doré et enivrant", "La lumière douce et paisible", "La couleur rouge, l'odeur et le goût dit 'horrible'", "Le parfum délicat et apaisant"],
            answer: 2,
            explanation: "La couleur 'rouge' associée à l'odeur et au goût crée une synesthésie qui évoque la boucherie et génère un sentiment de dégoût."
        },
        {
            id: 'venus_q30',
            type: 'VF',
            question: "AFFIRMATION : L’expression 'belle hideusement' est un exemple d'oxymore rappelant Baudelaire.",
            answer: 'Vrai',
            explanation: "L’expression 'belle hideusement' combine des termes contradictoires, exprimant une beauté paradoxale et rappelle le style de Baudelaire, notamment 'Les Fleurs du Mal'."
        },
        {
            id: 'venus_q31',
            type: 'QCM',
            question: "Quel est l’effet du tiret dans la phrase: '- Et tout ce corps remue et tend sa large croupe' ?",
            options: ["Agrémente le rythme poétique harmonieux", "Ajoute une dimension philosophique au poème", "Met un focus abrupt sur le mouvement obscène du corps", "Met en valeur la douceur de la description"],
            answer: 2,
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
            question: "Comment la 'large croupe' participe-t-elle à l'effet satirique du poème ?",
            options: ["En rendant la représentation de Vénus élégante", "En ajoutant une ambiguïté sensuelle", "En renforçant l'animalisation et la vulgarité", "En illustrant un idéal classique"],
            answer: 2,
            explanation: "La 'large croupe' animalise et vulgarise la figure de Vénus, détournant les attentes de sensualité et d'élévation pour renforcer l'effet satirique."
        },
        {
            id: 'venus_q34',
            type: 'VF',
            question: "AFFIRMATION : L'ouverture possible pour conclure l'analyse linéaire de Venus Anadyomène pourrait se faire sur 'Une Charogne de Baudelaire'.",
            answer: 'Vrai',
            explanation: "Car : 1- Similitude thématique : la beauté dégradée (dans 'Une Charogne', Baudelaire décrit de manière paradoxalement esthétique une charogne en décomposition)<br>2- Dimension provocatrice et anticonformiste (Rimbaud et Baudelaire provoquent le lecteur en déconstruisant des figures classiques de beauté pour remettre en cause les conventions artistiques et sociales)<br>3-Esthétique de la laideur et modernité poétique (Les deux auteurs utilisent la poésie pour explorer une esthétique moderne où le laid devient une source d'inspiration et de fascination poétique.)<br>4-Technique littéraire et figures de style (rocédés stylistiques (oxymores, antithèses, images fortes, et descriptions précises) dans les deux poèmes sont similaires)" // typo Bodelaire -> Baudelaire, rocédés -> procédés
        },
        {
            id: 'venus_q35',
            type: 'VF',
            question: "AFFIRMATION : Vénus est perçue selon un mouvement descendant (de la tête vers le bas). Le 1er Quatrain présente mise en scène provocatrice de la laideur du corps (il en fait un contre-blason).",
            answer: 'Faux',
            explanation: "Vénus est perçue selon un mouvement descendant (de la tête vers le bas). <br>Quatrain 1 : apparition sordide de la tête d’une étrange Vénus<br>Quatrain 2 : mise en scène provocatrice de la laideur du corps (il en fait un contre-blason)<br>Tercets : Le regard se resserre sur un détail du corps de Vénus, ce qui prépare peu à peu la chute burlesque (ou parodique) du sonnet et la rupture totale avec l’idéal féminin." // Usage de ’ typographique
        }
    ]
}
    // Ajoutez d'autres textes ici en suivant la même structure { id: ..., title: ..., author: ..., questions: [...] },
];

// (Le reste du code JavaScript pour la logique du quiz semble correct au niveau syntaxique)
// ... (le code des fonctions initializeApp, showScreen, startRevision, etc.) ...
// J'ai juste corrigé une typo dans les messages de fin :
const endMessagesConfig = {
    mode1: {
        low: { title: "Oups...", messages: ["Je suis sûr que tu peux faire mieux."] },
        medium: { title: "Bien !", messages: ["C'est un bon résultat.", "Mais tu peux faire mieux. ;-)"] },
        high: { title: "Bravo !", messages: [
                "Très bons résultats. Félicitations !",
                "C'est dans la poche. Parfait !",
                "Bravo champion!",
                "Trop fort mon Loulou !",
                "Riqui Chiqui c'est le meilleur !",
                "Je t'aime Champion !!!!!"
             ]
        }
    },
    mode2: {
        success: { title: "Série 20/20 !", messages: [
                "Bravo, tu as répondu à 20 questions consécutives sans te tromper.\nYou are the Best !!!",
                "Épatant.\nObjectif atteint. T\'es trop fort.",
                "Bravo, bravo, c\'est parfait."
            ]
        },
        fail_low_streak: { title: "Essaie encore !", messages: ["Tu dois répondre à 20 questions consécutives sans te tromper.\n\nCourage !"] },
        fail_high_streak: { title: "{streak}/20", messages: ["Tu y es presque.", "Ce score est respectable mais tu peux mieux faire.\nContinue"] } // {streak} sera remplacé
    },
    mastery: {
        success: { title: "Maîtrise Complète !", messages: [
                "Félicitations ! Tu as répondu correctement à toutes les questions de ce texte au moins une fois.",
                "Excellent travail ! Toutes les questions sont maîtrisées.",
                "Objectif atteint ! Tu connais ce texte sur le bout des doigts."
            ]
        }
    }
};

// --- VARIABLES GLOBALES ---
let currentText = null;
let currentTextIndexForRestart = -1;
let currentQuestionIndex = 0;
let score = 0;
let questionsForCurrentText = [];
let selectedMode = 'total20'; // Mode par défaut au cas où
let questionsAnsweredThisSession = 0;
let consecutiveCorrectAnswers = 0;
let maxConsecutiveCorrectAnswersInSession = 0;
let masteredQuestionsCount = 0;
let quizEnded = false;

const encouragementMessages = [
    "Excellent !", "Continue comme ça !", "Bravo !", "Tu maîtrises !", "Impressionnant !",
    "C\'est bien !", "Encore un effort !", "Presque parfait !", "Super réponse !"
];

// --- RÉFÉRENCES AUX ÉLÉMENTS DU DOM ---
const selectionScreen = document.getElementById('selection-screen');
const revisionScreen = document.getElementById('revision-screen');
const endScreen = document.getElementById('end-screen');
const textListContainer = document.getElementById('text-list');
const currentTextTitle = document.getElementById('current-text-title');
const questionTextElement = document.getElementById('question-text');
const questionExtractElement = document.getElementById('question-extract');
const answerOptionsContainer = document.getElementById('answer-options');
const feedbackElement = document.getElementById('feedback');
const currentScoreElement = document.getElementById('current-score');
const questionsAnsweredElement = document.getElementById('questions-answered');
const correctStreakElement = document.getElementById('correct-streak');
const currentModeInfoElement = document.getElementById('current-mode-info');
const masteredCountElement = document.getElementById('mastered-count');
const totalQuestionsElement = document.getElementById('total-questions');
const nextQuestionBtn = document.getElementById('next-question-btn');
const backToSelectionBtn = document.getElementById('back-to-selection-btn');
const encouragementElement = document.getElementById('encouragement');
const finalScoreDisplayElement = document.getElementById('final-score-display');
const endTitleElement = document.getElementById('end-title');
const endMessageBodyElement = document.getElementById('end-message-body');
const restartBtn = document.getElementById('restart-btn');
const homeBtn = document.getElementById('home-btn');

// --- FONCTIONS ---

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- initializeApp (semble correcte) ---
function initializeApp() {
    textListContainer.innerHTML = ''; // Vide la liste précédente
    textsData.forEach((text, index) => {
        const button = document.createElement('button'); // Crée le bouton
        button.textContent = `${text.title} ${text.author ? '(' + text.author + ')' : ''}`; // Définit le texte
        // Définit l'action au clic
        button.onclick = () => {
            const selectedRadio = document.querySelector('input[name="gameMode"]:checked');
            if (!selectedRadio) {
                alert("Veuillez d'abord choisir un mode de révision.");
                return;
            }
            selectedMode = selectedRadio.value;
            currentTextIndexForRestart = index; // Stocke l'index pour le bouton recommencer
            startRevision(currentTextIndexForRestart, selectedMode);
        };
        textListContainer.appendChild(button); // Ajoute le bouton au conteneur HTML
    });
    showScreen('selection'); // Affiche l'écran de sélection
}
// --- FIN initializeApp ---

function showScreen(screenName) {
    selectionScreen.classList.add('hidden');
    revisionScreen.classList.add('hidden');
    endScreen.classList.add('hidden');

    if (screenName === 'selection') {
        selectionScreen.classList.remove('hidden');
    } else if (screenName === 'revision') {
        revisionScreen.classList.remove('hidden');
    } else if (screenName === 'end') {
        endScreen.classList.remove('hidden');
    }
}

function startRevision(textIndex, mode) {
    // Vérification que l'index est valide
     if (textIndex < 0 || textIndex >= textsData.length) {
        console.error("Index de texte invalide:", textIndex);
        alert("Erreur: Impossible de charger le texte sélectionné.");
        showScreen('selection');
        return;
    }
    currentText = textsData[textIndex];

    // Vérification que le texte et les questions existent
    if (!currentText || !currentText.questions) {
         console.error("Données de texte ou questions manquantes pour l'index:", textIndex, currentText);
         alert("Erreur: Données manquantes pour ce texte. Retour à la sélection.");
         showScreen('selection');
         return;
     }

    // Crée une copie profonde des questions pour éviter de modifier l'original
    // et réinitialise masteredInSession pour chaque nouvelle session
    questionsForCurrentText = JSON.parse(JSON.stringify(currentText.questions)).map(q => ({
        ...q,
        points: (q.type === 'VF' ? 1 : (q.type === 'QCM' || q.type === 'QCM_EXTRAIT' ? 2 : 1)), // Point par défaut si type inconnu
        masteredInSession: false // Important pour le mode Maîtrise
    }));

    shuffleArray(questionsForCurrentText);
    console.log(`Questions mélangées pour cette session (${questionsForCurrentText.length} questions) !`);

    if (questionsForCurrentText.length === 0) {
        alert("Ce texte n'a pas encore de questions ! Retour à la sélection.");
        showScreen('selection');
        return;
    }

    currentQuestionIndex = 0;
    score = 0;
    questionsAnsweredThisSession = 0;
    consecutiveCorrectAnswers = 0;
    maxConsecutiveCorrectAnswersInSession = 0;
    masteredQuestionsCount = 0;
    selectedMode = mode;
    quizEnded = false;

    currentTextTitle.textContent = `${currentText.title} ${currentText.author ? '(' + currentText.author + ')' : ''}`;
    if (mode === 'total20') currentModeInfoElement.textContent = 'Mode: Total 20 Questions';
    else if (mode === 'streak20') currentModeInfoElement.textContent = 'Mode: Série 20 Correctes';
    else if (mode === 'mastery') currentModeInfoElement.textContent = 'Mode: Maîtrise Complète';
    totalQuestionsElement.textContent = questionsForCurrentText.length;
    updateSessionInfoDisplay();
    feedbackElement.classList.add('hidden');
    encouragementElement.textContent = '';

    displayQuestion();
    showScreen('revision');
}

function updateSessionInfoDisplay() {
     currentScoreElement.textContent = score;
     questionsAnsweredElement.textContent = questionsAnsweredThisSession;
     correctStreakElement.textContent = consecutiveCorrectAnswers;
     masteredCountElement.textContent = masteredQuestionsCount;
}

function getRandomMessage(messagesArray) {
    if (!messagesArray || messagesArray.length === 0) return "";
    const randomIndex = Math.floor(Math.random() * messagesArray.length);
    return messagesArray[randomIndex];
}

function displayQuestion() {
    if (quizEnded) return;

    feedbackElement.classList.add('hidden');
    feedbackElement.innerHTML = '';
    encouragementElement.textContent = '';
    nextQuestionBtn.classList.add('hidden');
    // Cacher le bouton de validation QCM s'il existe
    const validateBtn = document.getElementById('validate-qcm-btn');
    if (validateBtn) validateBtn.classList.add('hidden');

     // Gestion du cas où on arrive à la fin de la liste
     if (currentQuestionIndex >= questionsForCurrentText.length) {
         if (selectedMode === 'mastery') {
             // En mode mastery, si on a fait le tour sans maîtriser, on cherche s'il en reste
             const nonMastered = questionsForCurrentText.filter(q => !q.masteredInSession);
             if (nonMastered.length === 0) {
                 // Normalement la fin est déjà déclenchée, mais sécurité
                 console.log("Fin de liste (Maîtrise) : toutes maîtrisées.");
                 if (!quizEnded) { // Double check
                    quizEnded = true;
                    showEndOfQuiz(true);
                 }
                 return;
             } else {
                 // Il reste des questions non maîtrisées, on recommence au début de la liste (mélangée au début)
                 currentQuestionIndex = 0;
                 // Optionnel : Re-mélanger seulement les non-maîtrisées ? Pour l'instant on boucle sur la liste initiale mélangée.
                 console.log("Fin de la liste (Maîtrise), retour au début pour les questions restantes.");
                 // S'assurer que la question à l'index 0 n'est pas déjà maîtrisée (si on a bouclé)
                 while(questionsForCurrentText[currentQuestionIndex] && questionsForCurrentText[currentQuestionIndex].masteredInSession) {
                     currentQuestionIndex++; // Trouver la première non maîtrisée
                     if (currentQuestionIndex >= questionsForCurrentText.length) {
                         // Sécurité extrême: impossible normalement d'arriver ici si nonMastered.length > 0
                         console.error("Erreur de logique en mode maîtrise : boucle infinie ?");
                         quizEnded = true;
                         showEndOfQuiz(false); // Fin sur erreur
                         return;
                     }
                 }
             }
         } else {
              // Pour les autres modes (total20, streak20), si on a fait le tour et que l'objectif n'est pas atteint, on arrête.
              console.log("Fin de la liste de questions pour ce tour (mode non-maîtrise).");
              if (!quizEnded) { // Vérifier si pas déjà terminé par une condition de mode (ex: 20/20)
                  quizEnded = true;
                  showEndOfQuiz(false); // Afficher l'écran de fin (échec ou fin normale sans objectif atteint)
              }
              return; // Arrêter l'exécution
         }
     }

    const question = questionsForCurrentText[currentQuestionIndex];

    // Sécurité: vérifier si la question existe
    if (!question) {
        console.error("Erreur: Tentative d'afficher une question indéfinie à l'index", currentQuestionIndex);
        handleNextQuestion(); // Essayer la suivante ou terminer
        return;
    }

    questionTextElement.textContent = `(${questionsAnsweredThisSession + 1}) ${question.question || 'Question manquante'}`; // Ajouter texte par défaut

    if (question.type === 'QCM_EXTRAIT' && question.extract) {
        questionExtractElement.innerHTML = question.extract; // Utiliser innerHTML pour <b> etc.
        questionExtractElement.classList.remove('hidden');
    } else {
        questionExtractElement.classList.add('hidden');
        questionExtractElement.textContent = ''; // Vider le contenu précédent
    }

    answerOptionsContainer.innerHTML = '';

    // Utiliser un switch pour plus de clarté et extensibilité
    switch (question.type) {
        case 'VF':
            const btnTrue = document.createElement('button');
            btnTrue.textContent = 'Vrai';
            btnTrue.classList.add('vf-true');
            btnTrue.onclick = () => checkAnswer('Vrai');
            answerOptionsContainer.appendChild(btnTrue);

            const btnFalse = document.createElement('button');
            btnFalse.textContent = 'Faux';
            btnFalse.classList.add('vf-false');
            btnFalse.onclick = () => checkAnswer('Faux');
            answerOptionsContainer.appendChild(btnFalse);
            break;

        case 'QCM':
        case 'QCM_EXTRAIT':
             // AMÉLIORATION: Validation des options
             if (!question.options || !Array.isArray(question.options) || question.options.length === 0) {
                 console.error("Options manquantes ou invalides pour la question QCM:", question.id);
                 answerOptionsContainer.textContent = "Erreur: Options non disponibles pour cette question.";
                 nextQuestionBtn.classList.remove('hidden'); // Permettre de passer
                 return; // Ne pas essayer de créer des boutons
             }
             
// Déterminer si c'est une question à réponses multiples
            const isMultipleChoice = Array.isArray(question.answer);

            if (isMultipleChoice) {
                 questionTextElement.textContent += " (Plusieurs réponses possibles)"; // Indiquer à l'utilisateur
            }

            question.options.forEach((option, index) => {
                const optionContainer = document.createElement('div');
                optionContainer.classList.add('option-container'); // Pour le style

                const inputElement = document.createElement('input');
                inputElement.type = isMultipleChoice ? 'checkbox' : 'radio'; // Checkbox ou Radio
                inputElement.name = `qcm_option_${question.id}`; // Nom commun pour les radios
                inputElement.value = index; // La valeur est l'index
                inputElement.id = `qcm_option_${question.id}_${index}`; // ID unique pour le label
                inputElement.classList.add('qcm-input'); // Classe pour sélection future

                const labelElement = document.createElement('label');
                labelElement.htmlFor = inputElement.id; // Lier le label à l'input
                 // Utiliser innerHTML pour les options contenant du HTML (comme <b>)
                labelElement.innerHTML = `${String.fromCharCode(65 + index)}. ${option}`;

                optionContainer.appendChild(inputElement);
                optionContainer.appendChild(labelElement);
                answerOptionsContainer.appendChild(optionContainer);

                // Si c'est une question à réponse unique (radio), on valide au clic
                if (!isMultipleChoice) {
                    optionContainer.onclick = () => checkAnswer(index); // Valider directemet
                     // On pourrait aussi mettre l'onclick sur l'input radio directement
                     // inputElement.onclick = () => checkAnswer(index);
                }
            });

            // Ajouter un bouton "Valider" SEULEMENT pour les questions à choix multiples
            if (isMultipleChoice) {
                let validateButton = document.getElementById('validate-qcm-btn');
                if (!validateButton) { // Créer le bouton s'il n'existe pas
                    validateButton = document.createElement('button');
                    validateButton.id = 'validate-qcm-btn';
                    validateButton.textContent = 'Valider mes réponses';
                    // Insérer le bouton après les options mais avant le bouton "Suivant" potentiel
                    // Trouvons un élément de référence stable, comme le conteneur de feedback ou le bouton Suivant lui-même
                    const referenceNode = feedbackElement || nextQuestionBtn; // Mettre avant le feedback ou le bouton Suivant
                    revisionScreen.insertBefore(validateButton, referenceNode);
                }
                 validateButton.onclick = () => checkAnswer(null); // Appel sans index spécifique
                 validateButton.classList.remove('hidden'); // Afficher le bouton
            }
            break;


        default:
            console.warn("Type de question non reconnu:", question.type, "pour la question:", question.id);
            answerOptionsContainer.textContent = "Type de question non supporté.";
            nextQuestionBtn.classList.remove('hidden'); // Permettre de passer
            break;
    }
}


function checkAnswer(selectedAnswer) {
    if (quizEnded) return;

    if (currentQuestionIndex < 0 || currentQuestionIndex >= questionsForCurrentText.length) {
        console.error("Index de question invalide dans checkAnswer:", currentQuestionIndex);
        return;
    }

    const question = questionsForCurrentText[currentQuestionIndex];

    if (!question) {
         console.error("Question indéfinie dans checkAnswer à l'index:", currentQuestionIndex);
         return;
    }

    const correctAnswer = question.answer;
    const points = question.points || 1;
    let isCorrect = false;

    questionsAnsweredThisSession++;

    if (question.type === 'VF') {
        isCorrect = String(selectedAnswer).toLowerCase() === String(correctAnswer).toLowerCase();
    } else if (question.type === 'QCM' || question.type === 'QCM_EXTRAIT') {
        // AMÉLIORATION: Validation du type de réponse sélectionnée pour QCM
        if (typeof selectedAnswer === 'number') {
            // Gérer le cas (improbable après corrections) où la réponse correcte serait un tableau
             if (Array.isArray(correctAnswer)) {
                 console.warn("Question QCM avec réponse multiple dans 'answer' (non géré comme multi-sélection):", question.id);
                 // Considère correct si l'index sélectionné est dans le tableau (comportement par défaut simple)
                 isCorrect = correctAnswer.includes(selectedAnswer);
             } else {
                 // Comparaison standard index vs index (converti de la donnée string/nombre)
                 isCorrect = selectedAnswer === parseInt(correctAnswer);
             }
        } else {
            console.error("Réponse sélectionnée invalide pour QCM (devrait être un index numérique):", selectedAnswer);
            isCorrect = false;
        }
    } else {
        console.warn("Vérification de réponse pour type inconnu:", question.type);
    }

    // Mise à jour du score et des compteurs
    if (isCorrect) {
        score += points;
        consecutiveCorrectAnswers++;
        if (consecutiveCorrectAnswers > maxConsecutiveCorrectAnswersInSession) {
            maxConsecutiveCorrectAnswersInSession = consecutiveCorrectAnswers;
        }
        if (!question.masteredInSession) {
            question.masteredInSession = true;
            // Recalculer proprement au lieu d'incrémenter (plus sûr si états complexes)
            masteredQuestionsCount = questionsForCurrentText.filter(q => q.masteredInSession).length;
        }
    } else {
        consecutiveCorrectAnswers = 0; // Réinitialiser la série
        // En mode Maîtrise, la question reste non maîtrisée.
    }

    updateSessionInfoDisplay();

    // --- Affichage du Feedback ---
    feedbackElement.innerHTML = '';
    feedbackElement.classList.remove('hidden', 'correct', 'incorrect');
    const feedbackText = document.createElement('span');
    feedbackText.style.fontWeight = 'bold'; // Mettre en gras Correct/Incorrect

    if (isCorrect) {
        feedbackText.textContent = `Correct ! (+${points} point${points > 1 ? 's' : ''})`;
        feedbackElement.classList.add('correct');
        if (Math.random() < 0.4) { // Augmenter un peu la chance d'encouragement
            encouragementElement.textContent = getRandomMessage(encouragementMessages);
        } else {
            encouragementElement.textContent = '';
        }
    } else {
        feedbackText.textContent = 'Incorrect.';
        feedbackElement.classList.add('incorrect');
        encouragementElement.textContent = '';

        // Montrer la bonne réponse si incorrect
         const correctAnswerPara = document.createElement('p');
         correctAnswerPara.style.marginTop = '5px'; // Ajouter un peu d'espace
         let readableAnswer = correctAnswer;

         if ((question.type === 'QCM' || question.type === 'QCM_EXTRAIT') && question.options) {
             if (Array.isArray(correctAnswer)) {
                 // Affichage pour réponse multiple (même si non géré à la sélection)
                 readableAnswer = correctAnswer
                    .map(idx => parseInt(idx))
                    .filter(idx => idx >= 0 && idx < question.options.length) // Filtrer index valides
                    .map(idx => `${String.fromCharCode(65 + idx)}. ${question.options[idx]}`)
                    .join('<br>'); // Afficher sur plusieurs lignes si multiple
             } else {
                 // Affichage pour réponse unique QCM
                 const correctIndex = parseInt(correctAnswer);
                 if (correctIndex >= 0 && correctIndex < question.options.length) {
                     readableAnswer = `${String.fromCharCode(65 + correctIndex)}. ${question.options[correctIndex]}`;
                 } else {
                    readableAnswer = `(Réponse invalide: index ${correctAnswer})`; // Message d'erreur si index hors limite
                 }
             }
         } else if (question.type === 'VF') {
             readableAnswer = correctAnswer; // Simplement 'Vrai' ou 'Faux'
         }
         // Utiliser innerHTML car readableAnswer peut contenir <br>
         correctAnswerPara.innerHTML = `<i>La bonne réponse était :<br>${readableAnswer}</i>`;
         feedbackElement.appendChild(correctAnswerPara);
    }
    feedbackElement.insertBefore(feedbackText, feedbackElement.firstChild); // Mettre Correct/Incorrect en premier

    // Afficher l'explication s'il y en a une
    if (question.explanation) {
        const explanationPara = document.createElement('p');
        explanationPara.style.marginTop = '5px';
        explanationPara.innerHTML = `<i>Explication : ${question.explanation}</i>`; // Mettre aussi en italique ?
        feedbackElement.appendChild(explanationPara);
    }
    feedbackElement.classList.remove('hidden');

    // Désactiver les boutons de réponse
    const answerButtons = answerOptionsContainer.querySelectorAll('button');
    answerButtons.forEach(button => button.disabled = true);

    // --- Vérification des conditions de fin ---
    let objectiveMet = false;
    if (selectedMode === 'total20' && questionsAnsweredThisSession >= 20) {
        objectiveMet = (score > 0); // Ou un seuil si nécessaire, ici on considère juste avoir fait les 20 questions
        quizEnded = true;
    } else if (selectedMode === 'streak20') {
        if (consecutiveCorrectAnswers >= 20) {
             objectiveMet = true;
             quizEnded = true;
        }
        // En cas d'erreur, on ne termine pas, la série est juste rompue
    } else if (selectedMode === 'mastery') {
        // Le recalcul de masteredQuestionsCount est déjà fait plus haut
        if (masteredQuestionsCount >= questionsForCurrentText.length) {
            objectiveMet = true;
            quizEnded = true;
        }
    }

    // Afficher le bouton "Suivant" ou terminer le quiz
    if (!quizEnded) {
        nextQuestionBtn.classList.remove('hidden');
        // Focus sur le bouton suivant pour faciliter la navigation clavier/mobile
        nextQuestionBtn.focus();
    } else {
        nextQuestionBtn.classList.add('hidden');
        // Laisser un petit délai avant d'afficher l'écran de fin
        setTimeout(() => showEndOfQuiz(objectiveMet), 500);
    }
}


function handleNextQuestion() {
    if (quizEnded) return;

    // Si on est en mode maîtrise, on cherche la prochaine question non maîtrisée
    if (selectedMode === 'mastery') {
        let searchIndex = (currentQuestionIndex + 1) % questionsForCurrentText.length;
        let initialSearchIndex = currentQuestionIndex; // Pour éviter boucle infinie si tout est maîtrisé

        // Cherche la prochaine question *non maîtrisée* en bouclant si nécessaire
        while (questionsForCurrentText[searchIndex] && questionsForCurrentText[searchIndex].masteredInSession) {
             searchIndex = (searchIndex + 1) % questionsForCurrentText.length;
             // Si on revient à l'index de départ + 1 (ou 0 si départ était la fin), c'est qu'on a fait un tour complet
             if (searchIndex === (initialSearchIndex + 1) % questionsForCurrentText.length) {
                  // Normalement, la condition de fin (masteredCount >= total) aurait dû être attrapée avant. Sécurité.
                  console.log("Mode Maîtrise: Tour complet effectué, toutes les questions semblent maîtrisées.");
                  if (!quizEnded) {
                      quizEnded = true;
                      showEndOfQuiz(true);
                  }
                  return;
             }
        }
        currentQuestionIndex = searchIndex;
    } else {
        // Pour les autres modes, passer simplement à la suivante dans la liste mélangée
        currentQuestionIndex++;
        // La vérification de fin de liste (currentQuestionIndex >= length) est gérée dans displayQuestion
    }

    displayQuestion();
}


function handleBackToSelection() {
    quizEnded = true;
    currentText = null;
    currentTextIndexForRestart = -1;
    // Optionnel: réinitialiser d'autres états si nécessaire
    showScreen('selection');
}

function showEndOfQuiz(objectiveAchieved) {
    let finalTitle = "";
    let finalMessage = "";
    let scoreText = "";

    // Logique spécifique à chaque mode
    switch (selectedMode) {
        case 'total20':
            const questionsAttempted = Math.min(questionsAnsweredThisSession, 20);
            // Calcule le % de bonnes réponses sur les questions tentées (max 20)
            let correctAnswersCount = 0;
            let totalPointsPossible = 0;
            // Note: On ne peut pas facilement compter les bonnes réponses sans stocker l'historique.
            // On va se baser sur le score / points possibles pour les questions répondues.
            for(let i=0; i < questionsAttempted; i++) {
                // Cette boucle est indicative, le calcul exact nécessiterait de stocker les points de chaque question répondue
                // Simplifions : on utilise le score final et une estimation.
            }
             scoreText = `Score final : ${score} (sur ${questionsAttempted} questions)`;

            // Seuil basé sur le score (supposons 1pt/VF, 2pt/QCM en moyenne ~1.5pt/q)
            const averagePossibleScore = questionsAttempted * 1.75; // Estimation grossière
            if (score <= averagePossibleScore * 0.5) {
                finalTitle = endMessagesConfig.mode1.low.title;
                finalMessage = getRandomMessage(endMessagesConfig.mode1.low.messages);
            } else if (score <= averagePossibleScore * 0.8) {
                finalTitle = endMessagesConfig.mode1.medium.title;
                finalMessage = getRandomMessage(endMessagesConfig.mode1.medium.messages);
            } else {
                finalTitle = endMessagesConfig.mode1.high.title;
                finalMessage = getRandomMessage(endMessagesConfig.mode1.high.messages);
            }
            break;

        case 'streak20':
            if (objectiveAchieved) { // Atteint 20 consécutives
                scoreText = `Objectif atteint : Série 20/20 !`;
                finalTitle = endMessagesConfig.mode2.success.title;
                finalMessage = getRandomMessage(endMessagesConfig.mode2.success.messages);
            } else { // N'a pas atteint 20 (fin des questions ou erreur)
                scoreText = `Série max : ${maxConsecutiveCorrectAnswersInSession} / 20`;
                if (maxConsecutiveCorrectAnswersInSession < 10) {
                    finalTitle = endMessagesConfig.mode2.fail_low_streak.title;
                    finalMessage = getRandomMessage(endMessagesConfig.mode2.fail_low_streak.messages);
                } else {
                    finalTitle = endMessagesConfig.mode2.fail_high_streak.title.replace('{streak}', maxConsecutiveCorrectAnswersInSession);
                    finalMessage = getRandomMessage(endMessagesConfig.mode2.fail_high_streak.messages);
                }
            }
            break;

        case 'mastery':
            scoreText = `Score final : ${score}`; // Le score accumulé
            if (objectiveAchieved) { // Toutes maîtrisées
                finalTitle = endMessagesConfig.mastery.success.title;
                finalMessage = getRandomMessage(endMessagesConfig.mastery.success.messages);
            } else {
                // Ce cas ne devrait pas arriver si le quiz continue jusqu'à maîtrise complète.
                 finalTitle = "Session terminée";
                 finalMessage = `Tu as maîtrisé ${masteredQuestionsCount} / ${questionsForCurrentText.length} questions dans cette session. Score : ${score}.`;
            }
            break;

        default:
            finalTitle = "Fin du Quiz";
            finalMessage = "Mode de jeu non reconnu.";
            scoreText = `Score : ${score}`;
            break;
    }

    finalScoreDisplayElement.textContent = scoreText;
    endTitleElement.textContent = finalTitle;
    endMessageBodyElement.innerHTML = finalMessage.replace(/\n/g, '<br>');

    showScreen('end');
}


function handleRestartQuiz() {
    if (currentTextIndexForRestart !== -1 && selectedMode) {
        console.log(`Redémarrage du quiz pour le texte ${currentTextIndexForRestart} en mode ${selectedMode}`);
        // Pas besoin de recharger les données, juste relancer la logique de startRevision
        startRevision(currentTextIndexForRestart, selectedMode);
    } else {
        console.warn("Impossible de redémarrer : index de texte ou mode manquant.");
        handleBackToSelection(); // Retour sécurisé
    }
}

// --- ÉCOUTEURS D'ÉVÉNEMENTS ---
nextQuestionBtn.addEventListener('click', handleNextQuestion);
backToSelectionBtn.addEventListener('click', handleBackToSelection);
restartBtn.addEventListener('click', handleRestartQuiz);
homeBtn.addEventListener('click', handleBackToSelection);

// --- DÉMARRAGE ---
document.addEventListener('DOMContentLoaded', initializeApp);
