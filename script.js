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
             { id: 'pain_q8', type: 'QCM', question: 'Le titre du poème "Le Pain" fait penser à :', options: ["Une recette de cuisine", "Un article de dictionnaire"], answer: 1, explanation: 'Le titre évoque un article de dictionnaire : l’auteur en donne une définition et une description organisée, commençant par la surface (la croûte).' },
             { id: 'pain_q9', type: 'QCM', question: 'L\'adjectif mélioratif "merveilleuse" est-il étonnant pour qualifier la croûte du pain ?', options: ["Oui, car la \"merveille\" désigne quelque chose d'extraordinaire, or le pain est banal.", "Non, l'adjectif est parfaitement adapté à cet objet quotidien."], answer: 0, explanation: 'L\'adjectif est surprenant car il élève un objet banal au rang d\'extraordinaire, montrant la volonté du poète de transformer notre regard.' },
             { id: 'pain_q10', type: 'QCM', question: 'Que montrent les connecteurs logiques (« ainsi », « donc », « d’abord », « et », « dès lors ») utilisés dans le poème ?', options: ["Rien de particulier", "L’envie du poète d’être précis et d'organiser sa description.", "Une surenchère d'arguments."], answer: 1, explanation: 'Ces connecteurs structurent la description et montrent l\'attention aux détails et la volonté de précision du poète, comme dans une démonstration.' },
             { id: 'pain_q11', type: 'QCM', question: 'Qu\'est-ce qu\'une cosmogonie ?', options: ["L'étude scientifique de l'origine de l'univers.", "Un récit mythologique expliquant la formation du Monde."], answer: 1, explanation: 'Une cosmogonie est un récit mythologique sur la création du Monde (du grec cosmo- « monde » et gon- « engendrer »).' },
             { id: 'pain_q12', type: 'QCM', question: 'Qu\'est-ce qui ressort de l\'expression "la masse ... fut glissée pour nous dans le four stellaire" ?', options: ["Le complément d’agent n’est pas nommé.", "Le four est réduit à sa fonction stellaire."], answer: 0, explanation: 'L\'absence de complément d’agent (on ne sait pas QUI l\'a glissée) donne une dimension mystérieuse, voire divine, à l\'acte créateur ("pour nous").' },
             { id: 'pain_q13', type: 'QCM', question: 'L\'expression "la masse ... fut glissée pour nous dans le four stellaire" évoque une :', options: ["Gnose", "Genèse"], answer: 1, explanation: 'Cela évoque une Genèse (création), ici celle du pain comparée à celle du monde. L\'absence d\'agent suggère une origine mystérieuse ou divine.' },
             { id: 'pain_q14', type: 'QCM', question: 'À quoi la lumière qui "couche ses feux" sur la croûte fait-elle penser ?', options: ["La lumière d'un feu de bois", "La lumière étudiée des tableaux ou d'un coucher de soleil", "Simplement à la cuisson"], answer: 1, explanation: 'L\'expression "couche ses feux avec application" évoque une lumière travaillée, artistique, comme celle d\'un peintre ou la beauté poétique d\'un coucher de soleil, donnant une dimension esthétique à la croûte.' },
             { id: 'pain_q15', type: 'QCM', question: 'Pourquoi utiliser un tiret dans l\'extrait : "...couche ses feux, - sans un regard pour la mollesse ignoble sous-jacente" ?', options: ["Pour faire une liaison", "C'est une erreur", "Pour marquer une rupture et introduire un contraste."], answer: 2, explanation: 'Le tiret marque une rupture. Après l\'éloge de la croûte, il introduit brutalement la critique de la mie ("mollesse ignoble"), créant un effet de chute dans le paragraphe.' },
             { id: 'pain_q16', type: 'QCM', question: 'Pourquoi utiliser des métaphores et comparaisons de la nature pour décrire la mie ("éponges", "feuilles ou fleurs") ?', options: ["Pour parler pour ne rien dire", "Pour décrire de façon poétique la texture de la mie et son vieillissement.", "Par manque d'idées."], answer: 1, explanation: 'Ces images servent à décrire poétiquement la structure alvéolée de la mie, puis son processus de vieillissement (rassissement), comparé au flétrissement végétal.' },
             { id: 'pain_q17', type: 'QCM', question: 'À quoi font allusion les verbes « rassit », « se détachent » et l’adjectif « friable » en parlant du pain ?', options: ["À la friture", "À la frigidité", "Au processus de vieillissement, voire à une forme de mort."], answer: 2, explanation: 'Ces termes décrivent le processus de rassissement du pain, qui peut être vu comme une image du vieillissement et de la dégradation, faisant écho à la finitude après la création.' },
             { id: 'pain_q18', type: 'QCM', question: 'Que sont les points de suspension (...) et à quoi peuvent-ils servir dans un texte poétique ?', options: ["Des apostrophes pour faciliter la lecture", "Une figure de style (aposiopèse) suggérant l'inexprimé ou une interruption.", "Une simple pause."], answer: 1, explanation: 'Les points de suspension forment une figure de style appelée aposiopèse. Ils marquent une interruption, laissant une idée sous-entendue (ici, potentiellement la mort, la destruction, ou simplement la suite logique non dite).' },
             { id: 'pain_q19', type: 'QCM', question: 'Que peut signifier principalement l\'impératif "Brisons-la" à la fin ?', options: ["Qu’il faut terminer le poème et manger le pain.", "Que c'est une référence à la Cène biblique.", "Qu'il faut tout casser."], answer: 0, explanation: 'Principalement, il signifie qu\'il faut cesser l\'analyse et revenir à l\'usage concret : manger le pain ("briser la croûte"). L\'allusion à la Cène (réponse b) est une interprétation possible mais secondaire dans le contexte direct du poème de Ponge.' },
             { id: 'pain_q20', type: 'QCM', question: 'Quelle figure de style principale est l\'expression « Mollesse ignoble sous-jacente » pour désigner la mie ?', options: ["Anamnèse", "Métaphore", "Oxymore"], answer: 1, explanation: 'C\'est une métaphore : la mie est comparée à une "mollesse ignoble sous-jacente". L\'association des termes "mollesse" et "ignoble" crée un effet péjoratif fort.' },
             { id: 'pain_q21', type: 'VF', question: 'AFFIRMATION : Cette métaphore ("mollesse ignoble") est une référence à la mie qui est qualifiée par un adjectif péjoratif.', answer: 'Vrai', explanation: 'Oui, "ignoble" est un adjectif péjoratif qui qualifie la "mollesse" (la mie), créant une image négative.' }, // Redondant avec pain_q6, mais gardé car formulé légèrement différemment.
             { id: 'pain_q22', type: 'VF', question: 'AFFIRMATION : Dans l\'utilisation du verbe "déguster", on peut voir une invitation à apprécier le poème sensitivement plutôt qu\'à l\'analyser froidement.', answer: 'Vrai', explanation: 'Le choix de "déguster" peut suggérer une approche plus sensorielle et appréciative du langage poétique, similaire à la dégustation d\'un aliment.' },
             { id: 'pain_q23', type: 'VF', question: 'AFFIRMATION : La mie est désignée par une métaphore valorisante « mollesse ignoble sous-jacente ».', answer: 'Faux', explanation: 'La métaphore utilise l\'adjectif péjoratif "ignoble", elle est donc dévalorisante pour la mie.' },
             { id: 'pain_q24', type: 'VF', question: 'AFFIRMATION : la méthaphore « mollesse ignoble sous-jacente » est une référence à la mie', answer: 'Vrai', explanation: 'Cette métaphore est une référence à la mie qui est qualifié par un adjectif péjoratif. Cet ajout agit comme une chute au paragraphe.' },
             { id: 'pain_q25', type: 'VF', question: 'AFFIRMATION : La cuisson du pain est rapprochée d\'une cosmogonie, puis le poète s’intéresse à l’intérieur : la mie.', answer: 'Vrai', explanation: 'C\'est exact, le poème passe de la création (cosmogonie) de la croûte à l\'exploration de l\'intérieur (la mie).' },
             { id: 'pain_q26', type: 'VF', question: 'AFFIRMATION : La mie de pain est décrite de manière entièrement positive.', answer: 'Faux', explanation: 'La mie est d\'abord décrite négativement ("lâche et froid sous-sol", "mollesse ignoble"), puis associée à la nature ("éponges", "feuilles ou fleurs"), créant une vision ambivalente.' },
             { id: 'pain_q27', type: 'VF', question: 'AFFIRMATION : Dans "Le Pain", Ponge utilise un style d\'écriture simple et accessible à tous.', answer: 'Faux', explanation: 'Bien que le sujet (le pain) soit banal, le style de Ponge est recherché, utilisant des métaphores complexes, un vocabulaire précis et une syntaxe élaborée.' },
             { id: 'pain_q28', type: 'VF', question: 'AFFIRMATION : Le poète transforme le pain en objet poétique en décrivant le durcissement de la croûte ("dalles") et la lumière ("feux").', answer: 'Vrai', explanation: 'L\'utilisation de métaphores ("dalles") et la description poétique de la lumière ("couche ses feux") contribuent à élever le pain au rang d\'objet poétique.' },
             { id: 'pain_q29', type: 'VF', question: 'AFFIRMATION : L\'adjectif "panoramique" transforme le pain en un paysage à contempler.', answer: 'Vrai', explanation: 'Oui, "panoramique" évoque une vue large, un paysage, transformant ainsi la perception de la surface du pain.' },
             { id: 'pain_q30', type: 'VF', question: 'AFFIRMATION : Dans le texte, "panoramique" a potentiellement trois sens.', answer: 'Vrai', explanation: '1) Paysage (vue large). 2) Allusion à la peinture (style panoramique). 3) Jeu de mots possible avec la racine latine du mot "pain" ("panem").' },
             { id: 'pain_q31', type: 'VF', question: 'AFFIRMATION : Ponge idéalise le pain et en fait un symbole de perfection.', answer: 'Faux', explanation: 'Ponge cherche à décrire le pain de manière objective, sans idéalisation.' }, // Répétition de pain_q4, retirée.
             { id: 'pain_q32', type: 'VF', question: 'AFFIRMATION : Le poème "Le Pain" est écrit en vers rimés.', answer: 'Faux', explanation: 'Le poeme est écrit en prose.' }, // Répétition de pain_q2, retirée.
             { id: 'pain_q33', type: 'VF', question: 'AFFIRMATION : L\'expression "Masse amorphe" est un pléonasme.', answer: 'Vrai', explanation: 'Un pléonasme (répétition d\'une idée) car "masse" implique souvent l\'absence de forme définie ("amorphe"). Cela insiste sur l\'état initial, indéfini, avant la création.' },
             { id: 'pain_q34', type: 'VF', question: 'AFFIRMATION : L\'expression "Four stellaire" est une personnification.', answer: 'Faux', explanation: 'C\'est une métaphore. Le four est comparé à un espace stellaire (étoilé), associant la création du pain à la création de l\'univers. Il n\'y a pas d\'action humaine attribuée au four.' },
             { id: 'pain_q35', type: 'VF', question: 'AFFIRMATION : Dans le dernier paragraphe, la conjonction "mais" introduit une idée de contradiction.', answer: 'Faux', explanation: 'Le "mais" ici marque une rupture, un changement de propos, une conclusion. Il ne contredit pas directement ce qui précède mais y met fin pour passer à l\'action.' },
             { id: 'pain_q36', type: 'VF', question: 'AFFIRMATION : La phrase "car le pain doit être dans notre bouche moins objet de respect que de consommation" utilise le participe passé.', answer: 'Faux', explanation: 'Le verbe principal est "doit être" (verbe devoir au présent + infinitif être). Il n\'y a pas de participe passé employé comme temps verbal principal ici. Le présent a une valeur de vérité générale ou de morale.' },
             { id: 'pain_q37', type: 'QCM_EXTRAIT', question: 'Quel est l\'effet principal de la comparaison dans cet extrait ?', extract: "La surface du pain est merveilleuse d'abord à cause de cette impression quasi panoramique qu'elle donne : comme si l'on avait à sa disposition sous la main les Alpes, le Taurus ou la Cordillère des Andes.", options: ["Diminuer l'importance du pain.", "Rendre le pain plus concret et réaliste.", "Exagérer les dimensions et l'aspect du pain, le rendant grandiose.", "Créer une atmosphère mystérieuse."], answer: 2, explanation: 'En comparant la surface du pain à des montagnes célèbres, Ponge amplifie son importance et transforme un objet banal en un paysage impressionnant.' },
             { id: 'pain_q38', type: 'QCM_EXTRAIT', question: 'L\'utilisation du verbe "éructer" pour décrire la pâte en train de cuire est un exemple de :', extract: "Ainsi donc une masse amorphe en train d'éructer fut glissée pour nous dans le four stellaire...", options: ["Une litote", "Une métaphore", "Une personnification", "Une allégorie"], answer: 2, explanation: 'La personnification attribue une action humaine (éructer) à la pâte non humaine, la rendant vivante.' },
             { id: 'pain_q39', type: 'QCM_EXTRAIT', question: 'Quel est l\'objectif principal de cette personnification ("éructer") ?', extract: "Ainsi donc une masse amorphe en train d'éructer fut glissée pour nous dans le four stellaire...", options: ["Rendre le pain plus effrayant.", "Souligner le caractère vivant et dynamique de la cuisson.", "Simplifier la description.", "Ironiser sur la banalité du pain."], answer: 1, explanation: 'Le verbe "éructer" anime la pâte, soulignant la transformation dynamique et presque organique de la cuisson.' },
             { id: 'pain_q40', type: 'QCM_EXTRAIT', question: 'Que désignent "la masse amorphe en train d’éructer" et quelles figures de style trouve-t-on principalement ?', extract: "Ainsi donc une masse amorphe en train d'éructer fut glissée pour nous dans le four stellaire...", options: ["Métaphore / Personnification / Litote", "Métaphore / Allitération en \"r\" / Personnification"], answer: 1, explanation: 'C\'est une métaphore (désigne la pâte), l\'allitération en [r] peut mimer le son de la cuisson, et "éructer" est une personnification.' },
             { id: 'pain_q41', type: 'QCM_EXTRAIT', question: 'Pourquoi le poète utilise-t-il le participe présent "durcissant" ?', extract: "...où durcissant elle s'est façonnée en vallées, crêtes, ondulations, crevasses...", options: ["Pour paraître intelligent", "Pour mettre l'accent sur la durée et le processus en cours de la transformation."], answer: 1, explanation: 'Le participe présent "durcissant" insiste sur l\'action en train de se faire, sa continuité et sa durée pendant la métamorphose du pain.' },
             { id: 'pain_q42', type: 'QCM_EXTRAIT', question: 'Quel est l\'effet principal des comparaisons dans cet extrait ("sous-sol", "éponges", "sœurs siamoises") ?', extract: "Ce lâche et froid sous-sol que l'on nomme la mie a son tissu pareil à celui des éponges : feuilles ou fleurs y sont comme des sœurs siamoises soudées par tous les coudes à la fois.", options: ["Clarifier la description de la mie.", "Rendre la mie plus appétissante.", "Créer un effet de surprise et d'étrangeté par des associations inattendues.", "Simuler un discours scientifique."], answer: 2, explanation: 'Les rapprochements inattendus (mie/sous-sol, mie/éponges, alvéoles/sœurs siamoises) créent des images surprenantes qui renouvellent la perception de la mie.' },
             { id: 'pain_q43', type: 'QCM_EXTRAIT', question: 'L\'expression "sœurs siamoises soudées par tous les coudes à la fois" est principalement un exemple de :', extract: "...feuilles ou fleurs y sont comme des sœurs siamoises soudées par tous les coudes à la fois.", options: ["Une hyperbole", "Une anaphore", "Une antithèse", "Une allitération"], answer: 0, explanation: 'C\'est une hyperbole (exagération) pour décrire de manière imagée et frappante la façon dont les alvéoles de la mie sont interconnectées.' },
             { id: 'pain_q44', type: 'QCM_EXTRAIT', question: 'La structure "Mais brisons-la : car..." est un exemple de :', extract: "Mais brisons-la : car le pain doit être dans notre bouche moins objet de respect que de consommation.", options: ["Une antithèse", "Une injonction (ordre/conseil) suivie d'une justification.", "Une métaphore filée", "Une litote"], answer: 1, explanation: 'La première partie ("Mais brisons-la") est une injonction impérative, la seconde (introduite par "car") en donne la raison.' },
             { id: 'pain_q45', type: 'QCM_EXTRAIT', question: 'Quel est l\'objectif principal de cette structure finale ("Mais brisons-la : car...") ?', extract: "Mais brisons-la : car le pain doit être dans notre bouche moins objet de respect que de consommation.", options: ["Accentuer le côté tragique.", "Donner une conclusion claire et pragmatique.", "Créer un effet de surprise.", "Mettre en avant la complexité."], answer: 1, explanation: 'Cette structure permet de conclure le poème de manière directe et affirmée, invitant à revenir à l\'usage concret du pain après l\'analyse poétique.' },
             { id: 'pain_q46', type: 'QCM_EXTRAIT', question: 'En quoi ce passage peut-il être vu comme une allégorie de la création poétique ?', extract: "Ce lâche et froid sous-sol que l'on nomme la mie a son tissu pareil à celui des éponges : feuilles ou fleurs y sont comme des sœurs siamoises...", options: ["Les éponges lavent, les tissus habillent", "Le mot \"tissu\" (mie) partage son étymologie avec \"texte\" et \"feuilles\" peut renvoyer au papier."], answer: 1, explanation: 'Oui, "tissu" et "texte" ont la même racine latine ("textus"), et "feuilles" peut évoquer les feuilles de papier. Ponge jouerait sur les mots pour parler de l\'écriture en décrivant le pain. L\'allusion à son propre nom ("Ponge"/"éponge") est aussi une interprétation possible.' },
             { id: 'pain_q47', type: 'QCM_EXTRAIT', question: 'L\'utilisation du présent de vérité générale dans "le pain DOIT être..." permet principalement de :', extract: "car le pain doit être dans notre bouche moins objet de respect que de consommation.", options: ["Ancrer le texte dans le futur.", "Transformer la phrase en une sorte de morale ou de règle générale.", "Simplement décrire une action."], answer: 1, explanation: 'Le présent de vérité générale donne à l\'affirmation une portée universelle, comme une morale ou une conclusion définitive invitant le lecteur à agir (manger le pain) plutôt qu\'à seulement le contempler.' },
        ]
    },
    {
        id: 'odg_preambule',
        title: 'Préambule de la Déclaration des Droits de la Femme et de la Citoyenne (DDFC)',
        author: 'Olympe de Gouges (ODG)',
        questions: [
// --- Questions Générales et de Contexte ---
            { id: 'odg_preambule_q1', type: 'QCM', question: 'À qui ODG adresse-t-elle <b>principalement</b> ce Préambule de la DDFC ?', options: ["Au Roi Louis XVI", "À la Reine Marie-Antoinette", "À l\'Assemblée Nationale", "Aux femmes uniquement"], answer: 2, explanation: 'Bien qu\'une dédicace soit adressée à la Reine, le Préambule, comme la Déclaration qui suit, s\'adresse aux législateurs de l\'Assemblée Nationale pour réclamer l\'inscription des droits des femmes dans la Constitution.' },
            { id: 'odg_preambule_q2', type: 'VF', question: 'ODG a écrit la DDFC en 1791, en réaction à la Déclaration des Droits de l\'Homme et du Citoyen de 1789 qui excluait les femmes.', answer: 'Vrai', explanation: 'La DDFC est une réécriture critique et corrective de la DDHC de 1789, visant à inclure les femmes dans les droits proclamés.' },
            { id: 'odg_preambule_q3', type: 'QCM', question: 'Quel est l\'objectif principal de ce Préambule ?', options: ["Raconter la vie d'ODG", "Critiquer la monarchie absolue", "Justifier la nécessité de déclarer les droits des femmes et présenter leur demande.", "Demander le droit de vote pour les hommes étrangers."], answer: 2, explanation: 'Le Préambule sert à légitimer la démarche d\'ODG et à exposer les raisons pour lesquelles une déclaration spécifique aux droits des femmes est indispensable.' },
            { id: 'odg_preambule_q4', type: 'VF', question: 'ODG considère que l\'ignorance, l\'oubli ou le mépris des droits de la femme sont les seules causes des malheurs publics.', answer: 'Vrai', explanation: 'C\'est l\'argument central avancé par ODG dans le Préambule pour justifier l\'urgence et la nécessité de cette déclaration.' },
            { id: 'odg_preambule_q5', type: 'QCM', question: 'Comment ODG qualifie-t-elle les droits de la femme qu\'elle veut exposer ?', options: ["Nouveaux et révolutionnaires", "Négociables et adaptables", "Naturels, inaliénables et sacrés", "Secondaires et complémentaires"], answer: 2, explanation: 'ODG reprend la terminologie de la DDHC pour affirmer que les droits des femmes possèdent la même légitimité universelle et fondamentale que ceux des hommes.' },

            // --- Questions sur le Vocabulaire et les Termes Clés ---
            { id: 'odg_preambule_q6', type: 'QCM', question: 'Que signifie le terme "inaliénable" utilisé par ODG ?', options: ["Qui peut être vendu", "Qui ne peut être retiré ou cédé", "Qui est spécifique aux étrangers", "Qui est temporaire"], answer: 1, explanation: '"Inaliénable" signifie qu\'un droit fait partie intégrante de la personne et ne peut lui être enlevé.' },
            { id: 'odg_preambule_q7', type: 'QCM', question: 'Dans l'article 4, quand ODG parle de la "tyrannie perpétuelle" que l\'homme exerce sur la femme, que désigne-t-elle ?', options: ["Une loi spécifique récente", "Le système politique de la monarchie (despotisme)", "La domination masculine constante et historique dans tous les domaines.", "Les disputes conjugales"], answer: 2, explanation: 'Elle dénonce un système de domination masculin généralisé et ancré dans le temps, qui prive les femmes de leurs droits naturels.' },
            { id: 'odg_preambule_q8', type: 'VF', question: 'Le terme "décret" utilisé par ODG ("sous les auspices de l\'Être suprême") fait référence à une loi déjà votée par l\'Assemblée.', answer: 'Faux', explanation: 'Ici, "décret" a un sens plus proche de "décision solennelle" ou "volonté affirmée". ODG place sa déclaration sous une autorité morale supérieure (l\'Être suprême, concept déiste de l\'époque) pour lui donner plus de poids.' },

            // --- Questions sur la Structure et la Rhétorique ---
            { id: 'odg_preambule_q9', type: 'QCM', question: 'L\'accumulation "les mères, les filles, les sœurs" permet à ODG de :', options: ["De modifier clairement la DHC", "De faire rentrer sa famille à l\'assemblée", "Montrer une certaine sororite =groupe(dimension familiale, communauté des femmes.", "Marquer l\'absence du mot épouse comme pour critiquer la soumission du marriage"], answer: [1, 2, 3], explanation: ' Accumulation « les mères, les filles, les sœurs » : modification de la DHC. Insiste sur la dimension familiale, montre une certaine sororité en mettant en avant une communauté de femmes. Absence du mot « épouse » qui aurait été attendue = critique implicite du mariage ?' },
            { id: 'odg_preambule_q10', type: 'QCM', question: 'De quelle figure de style s\'agit-il : "représentantes de la nation" ?', options: ["Metaphore", "Alégorie", "Personnification", "Périphrase"], answer: 4, explanation: 'Une periphrase consiste à exprimer en plusieurs mots ce qu’on aurait pu dire en un seul terme.  insiste sur le rôle politique des femmes, rôle oublié dans la DHC de 1789. Plus loin, groupe nominal « des citoyennes » qui insiste aussi sur leur rôle politique.' },
            { id: 'odg_preambule_q11', type: 'VF', question: 'La périphrase  "représentantes de la nation" et le groupe nominal "des citoyennes" insistent sur le rôle politique des femmes.', answer: 'Vrai', explanation: 'Ces elements insistent sur le rôle politique des femmes, rôle oublié dans la DHC de 1789. ' },
            { id: 'odg_preambule_q12', type: 'QCM', question: 'De quelles figures de style s\'agit-il : "l\’ignorance, l\’oubli ou le mépris ". ', options: ["Périphrase et Metaphore", "Gradation & Metaphore", "Accumulation & Gradation?", "Accumulation & Metaphore"], answer: 3, explanation: 'Cette gradation et accumulation et la réecriture des droits de la FEMME et non de l\'HOMME insiste sur la misogynie qui est désignée comme cause des malheurs de l'Etat' },
            { id: 'odg_preambule_q13', type: 'QCM', question: 'Avec la gradation "l\’ignorance, l\’oubli ou le mépris " + l'écriture DDFC et non DDHC: qu'est qui est désigné comme la cause des malheurs de l'Etat', options: ["La croissance démographique", "La mysoginie", "La femme", "La planète"], answer: 2, explanation: ' C\’est la misogynie qui est désignée comme la cause des malheurs de l\’État. Il est donc urgent de la corriger pour le bien public.' },
            { id: 'odg_preambule_q14', type: 'QCM', question: 'Pourquoi ODG utilise-t-elle l'article défini "<b>LA<b> femme" ?', options: ["Pour lui donner une portée généralisante et désigner le sexe invisibilisé par le groupe nominal « des Hommes ».", "Pour montrer que la femme est singulière et toujours mise en avant"], answer: 1, explanation: 'La : portée généralisante, désigne le sexe invisibilisé par le groupe nominal « des Hommes ».' },
            { id: 'odg_preambule_q15', type: 'QCM', question: 'De quelles figures de style s\'agit-il et à quoi sert-elle ? "les droits naturels, inaliénables et sacrés"', options: ["Une énumeration ternaire pour insister sur le caractère incontestable des droits de la femme", "Une énumeration accumulative pour insister la faiblesse", "Une accumulation ternaire pour insister sur le caractère incontestable des droits de la femme"], answer: 1, explanation: 'Enumération ternaire qui insiste sur le caractère incontestable de ces droits. Comme les adjectifs « principes simples et incontestables » insistent aussi dessus' },
            { id: 'odg_preambule_q16', type: 'QCM', question: 'Dans le Préambule "Afin que" est répété 3 fois dans le texte. Quelle est cette figure de style et à quoi sert-elle ?', options: ["Une gradation pour faire monter la colère", "Une anaphore qui souligne les conséquences de cette déclaration pour les femmes.", "Une gradation qui souligne les conséquences de cette déclaration pour les femmes.", "Une anaphore qui souligne la colère des femmes."], answer: 2, explanation: 'Anaphore qui souligne les 3 conséquences de cette déclaration pour les femmes et la société. Donne aussi un caractère solennel, répétitif qui marque les esprits, pour qu’on n’oublie pas. Elle a donc une dimension argumentative.' },
            { id: 'odg_preambule_q17', type: 'QCM', question: '"constamment", "sans cesse", "à chaque instant" sont des ?', options: ["Groupes nominaux", "Compléments circonstanciels de temps", "Complemet coconstantiels de lieu", "Verbes pronominaux"], answer: 2, explanation: 'Comme l'anaphore "afin que" il ont une dimension argumentative et ils marquent les esprit pour q'on oubli pas les conséquences de cette déclaration pour les femmes et la société' },
            { id: 'odg_preambule_q18', type: 'VF', question: 'Les hommes sont souvent mentionnés dans la DDFC.', answer: 'Faux', explanation: 'Ils sont peu mentionnés. Ici "les actes de pouvoir des femmes et ceux des hommes" l\'utilisation de la conjonction ET, les met sur un pied d\'égalité syntaxique.' },
            { id: 'odg_preambule_q19', type: 'QCM', question: 'Avec les expressions "bonnes moeurs" + "le bonheur de tous", que veut montrer ODG ?', options: ["Les bienfait de la DDHC", "Que l'égalité Homme/femme sera bénéfique pour tous", "Que cette avancé sera uniquement bénéfique aux femmes."], answer: 2, explanation: ' l’égalité hommes/femmes sera bénéfique à toute la société, pas seulement aux femmes, d’où l’importance d’oeuvrer en sa faveur' },
            { id: 'odg_preambule_q20', type: 'VF', question: 'Pour donner une dimension solennelle et de la sacralité (=ref à dieu) ODG uilise le présent et l'expresiion "sous les auspices de l’Être suprême (=Dieu)"', answer: 'Vrai', explanation: ' Présent d’énonciation « reconnaît et déclare » + « sous les auspices de l’Être suprême (=Dieu) » : donne une solennité, sacralité à la déclaration.' },
            { id: 'odg_preambule_q21', type: 'QCM', question: '"reconnaît et déclare" de quel temps s'agit'il?', options: ["Du présent d'énonciation", "Du présent de reconnection", "Du présent de vérité générale], answer: 3, explanation: 'Présent d’énonciation "reconnaît et déclare" + "sous les auspices de l’Être suprême (=Dieu)" : donne une solennité, sacralité à la déclaration.' },
            { id: 'odg_preambule_q22', type: 'QCM', question: 'Qui sont "les mères, les filles, les sœurs" mentionnées au début du Préambule ?', options: ["La famille d'ODG uniquement", "Des figures allégoriques sans réalité", "Les représentantes de la nation (femmes) qui demandent à être constituées en Assemblée nationale.", "Des femmes nobles uniquement"], answer: 2, explanation: 'Par cette énumération, ODG désigne l\'ensemble des femmes françaises comme constituant une partie de la nation, légitimes à réclamer leurs droits et à participer à la vie politique.' },
            { id: 'odg_preambule_q23', type: 'VF', question: 'L\'utilisation de l\'expression "sexe supérieur en beauté comme en courage dans les souffrances maternelles" est une flatterie sans but argumentatif.', answer: 'Faux', explanation: 'C\'est un argument rhétorique. ODG valorise les femmes en soulignant leur beauté (stéréotype de l\'époque) mais surtout leur courage face aux douleurs de l\'enfantement, pour mieux revendiquer leur égalité en droits et leur participation politique. Cette periphrase dennonce les termes utilisés dans la DDHC. Périphrase qui fait référence à deux expressions : « le beau sexe » et « le sexe faible ».' },
            { id: 'odg_preambule_q24', type: 'QCM', question: 'Quel est le registre principal (ton) employé par ODG dans ce Préambule ?', options: ["Comique et léger", "Lyrique et sentimental", "Solennel et revendicatif", "Didactique et neutre"], answer: 2, explanation: 'Le ton est grave, solennel (par l\'importance du sujet et le vocabulaire choisi) et clairement revendicatif (elle exige des droits).' },
            { id: 'odg_preambule_q25', type: 'VF', question: 'En affirmant que la déclaration des droits des femmes "tournera toujours au maintien de la Constitution", ODG cherche à rassurer les députés hommes.', answer: 'Vrai', explanation: 'Elle présente la reconnaissance des droits des femmes non comme une menace, mais comme une condition nécessaire à la stabilité politique, au bonheur de tous et au respect de la Constitution.' },

            // --- Questions basées sur des Extraits (QCM_EXTRAIT) ---
            { id: 'odg_preambule_q26', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait : "...les actes de pouvoir des femmes et ceux des hommes...", que symbolise la conjonction "et" ?', extract: "...les actes de pouvoir des femmes et ceux des hommes...", options: ["l'égalité homme/femme", "L'addition des genres ", "La beauté du moment"], answer: 1, explanation: 'Il y a peu de mentions des hommes. Ici, ils sont mentionnés pour montrer l’égalité qui existe entre les deux sexes. « Et » symbolise cette égalité car la conjonction les met sur le même plan syntaxique.?' },
            { id: 'odg_preambule_q27', type: 'QCM_EXTRAIT', question: 'Pourquoi ODG a utilisé la périphrase : "...le sexe supérieur en beauté comme en courage dans les souffrances maternelles..." pour désigner la femme?', extract: "... le sexe supérieur en beauté comme en courage dans les souffrances maternelles ...", options: ["Pour renverser les expresions "le beau sexe" et "le sexe faible" utilisées dans la DDHC", "P1ur montrer que la femme est supérieure à l'homme", "pour montrer que les femmes "le sexe faible" cité dans la DDHC"], answer: 1, explanation: 'Périphrase qui fait référence à deux expressions : « le beau sexe » et « le sexe faible ». ODG reprend la première et renverse la deuxième en montrant la force des femmes.' },
            { id: 'odg_preambule_q28', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait : "... Article premier. - La femme naît libre et demeure égale à l'homme en droits. Les distinctions sociales ne peuvent être fondées que sur l'utilité commune....", quel ton adopte ODG ?', extract: "...Article premier. - La femme naît libre et demeure égale à l'homme en droits. Les distinctions sociales ne peuvent être fondées que sur l'utilité commune....", options: ["Ironique", "Suspicieux", "Reverencieux", "Neutre"], answer: 1, explanation: 'article 1 sonne comme une réécriture ironique de la DHC qui stipulait que "les Hommes nai[ssaient] libres et égaux en droits", ce qui est faux, puisque les femmes n’ont pas les mêmes droits… ' },
            { id: 'odg_preambule_q29', type: 'QCM_EXTRAIT', question: 'Dans l\'article 2 : "...Article 2.- Le but de toute association politique est la conservation des droits naturels ...", que veut faire ODG ?', extract: "...Article 2.- Le but de toute association politique est la conservation des droits naturels et imprescriptibles de la femme et de l\'homme : ces droits sont la liberté, la propriété, la sûreté, et surtout la résistance à l\'oppression...", options: ["Insiste sur la dimension naturelle (et donc indiscutable) de ces droits par l’adjectif "naturels" et le verbe "naît".", "Insiste sur la dimension ennvironnementale (et donc indiscutable) de ces droits par l’adjectif "naturels" et le verbe "naît"."], answer: 1, explanation: 'Ces droits sont naturels et donc induscutables.' },
            { id: 'odg_preambule_q30', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait : "...la liberté, la propriété, la sûreté, et surtout la résistance à l’oppression...", dans cette énumération ODG pour insister sur ces droits utilise 2 figures de style ?', extract: "...la liberté, la propriété, la sûreté, et surtout la résistance à l’oppression...", options: ["Allitération en [é] pour le dernier groupe de mots Assonance en [r]", "Assonance en [é] dans les trois premiers termes + allitération en [s] pour le dernier groupe de mots"], answer: 2, explanation: 'La répétition d'une voyelle est une assonnance / La répétition d'une consonne est une allitération' },
            { id: 'odg_preambule_q31', type: 'QCM_EXTRAIT', question: 'Dans l\'énumération : "...la liberté, la propriété, la sûreté, et surtout la résistance à l’oppression...", avec quoi résonne le dernier groupe "résistance à l'oppréssion" ?', extract: "...la liberté, la propriété, la sûreté, et surtout la résistance à l’oppression...", options: ["L'article 4 qui accuse les hommes de despotisme", "L'article 4 qui accuse les hommes de négligence"], answer: 1, explanation: 'Despotisme = Régime politique dans lequel un seul homme gouverne de façon arbitraire et autoritaire. <br>Article 4. La liberté et la justice consistent à rendre tout ce qui appartient à autrui ; ainsi l'exercice des droits naturels de la femme n'a de bornes que la tyrannie perpétuelle que l'homme lui oppose ; ces bornes doivent être réformées par les lois de la nature et de la raison.' },
            { id: 'odg_preambule_q32', type: 'QCM_EXTRAIT', question: 'Dans l\'extrait : "...considérant que l\'ignorance, l\'oubli ou le mépris des droits de la femme, sont les seules causes des malheurs publics et de la corruption des gouvernements...", quelle figure de style est marquée par la succession "l\'ignorance, l\'oubli ou le mépris" ?', extract: "...considérant que l\'ignorance, l\'oubli ou le mépris des droits de la femme, sont les seules causes des malheurs publics...", options: ["Une métaphore", "Une gradation ou une accumulation", "Une personnification", "Une antithèse"], answer: 1, explanation: 'Cette énumération de termes négatifs (ignorance, oubli, mépris) constitue une accumulation (ou une légère gradation) qui insiste sur les causes multiples et graves de l\'oppression des femmes et de ses conséquences politiques.' },
            { id: 'odg_preambule_q33', type: 'QCM_EXTRAIT', question: 'Que signifie l\'affirmation que cette déclaration doit être "constamment présente à tous les membres du corps social" ?', extract: "...afin que cette déclaration, constamment présente à tous les membres du corps social, leur rappelle sans cesse leurs droits et leurs devoirs...", options: ["Qu'elle doit être affichée dans tous les lieux publics.", "Qu'elle doit être apprise par cœur par tous.", "Que les principes qu'elle énonce doivent être connus de tous et servir de référence permanente.", "Qu'elle doit être lue une fois par an."], answer: 2, explanation: 'ODG souhaite que les droits et devoirs (des femmes et des hommes) soient une référence constante pour tous les citoyens et pour le gouvernement, afin d'assurer le respect des lois et la justice.' },
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
    { id: 'odg_postambule_q1', type: 'QCM', question: 'Quel est l\’objectif des questions rhétoriques posées par Olympe de Gouges dans ce paragraphe ?', options: ["Encourager les femmes en explorant leurs peurs pour les rassurer", "Accuser directement les hommes de tous les maux", "Montrer l\’indifférence des femmes face à leur situation"], answer: 1, explanation: 'Olympe de Gouges utilise ces questions rhétoriques pour encourager les femmes à dépasser leurs craintes et à se mobiliser dans leur combat pour l’égalité. Elle cite toute les peurs pour que les femmes dépassent ces peurs.' },
    { 
        id: 'odg_postambule_q2', 
        type: 'VF', 
        question: 'La métaphore de la "branche" évoque le lien dépassé entre morale religieuse et politique après la Révolution.', 
        answer: 'Vrai', 
        explanation: 'La métaphore "cette morale longtemps accrochée aux <b>branches de la politique</b>" insiste sur une morale religieuse auparavant liée à la politique, mais jugée dépassée ("qui n\’est plus de saison") après la Révolution. la Révolution a mis fin aux liens entre le gouvernement et la religion chrétienne'},

    { 
        id: 'odg_postambule_q3', 
        type: 'VF', 
        question: 'La réponse "tout" à la question "Femmes, qu\'y a-t-il de commun entre vous et nous ?" signifie que les <b>hommes et les femmes n\’ont rien en commun.</b>',
        answer: 'Faux',
        explanation: 'Le mot "tout" insiste sur l\’idée que femmes et hommes sont parfaitement identiques, et par conséquent, qu\’ils doivent avoir les mêmes droits.'
    },

        { id: 'odg_postambule_q4', type: 'QCM', question: 'Quel est l\’objectif principal du Postambule d’Olympe de Gouges ?', options: ["Inciter les femmes à prendre conscience et revendiquer leurs droits naturels.", "Demander l\’abolition définitive de la monarchie.", "Rappeler l\’autorité religieuse traditionnelle.", "Préserver l\'Ancien Régime."], answer: 0, explanation: 'Dans ce texte, Olympe de Gouges exhorte les femmes à se réveiller et à réclamer leurs droits naturels et légitimes.' },
        { id: 'odg_postambule_q5', type: 'VF', question: 'Olympe de Gouges affirme que la Révolution a amélioré la place des femmes dans la société.', answer: 'Faux', explanation: 'Olympe de Gouges constate amèrement que la Révolution a entraîné un mépris encore plus marqué vis-à-vis des femmes.' },
        { id: 'odg_postambule_q6', type: 'QCM', question: 'Par la métaphore du "tocsin de la raison", ODG se place dans la lignée de quel mouvement philosophique ?', options: ["Le Romantisme", "Les Lumières", "Le Surréalisme", "La Renaissance"], answer: 1, explanation: 'Le "tocsin de la raison" renvoie explicitement aux philosophes des Lumières diffusant la raison contre les préjugés.' },
        { id: 'odg_postambule_q7', type: 'VF', question: 'ODG considère la nature comme porteuse des lois égalitaires homme-femme.', answer: 'Vrai', explanation: 'La nature est, selon elle, un modèle d’égalité naturelle que la société a corrompu.' },
        { id: 'odg_postambule_q8', type: 'QCM', question: 'ODG utilise l\’expression "homme esclave" pour illustrer quel paradoxe ?', options: ["L\’homme est dominé par les femmes.", "L\’homme libre opprime celles qui l\\’ont aidé à devenir libre.", "L\’homme refuse d’être aidé par la femme.", "L\’homme lutte contre la nature."], answer: 1, explanation: 'ODG montre ainsi que l\’homme libéré grâce au soutien des femmes devient injuste envers celles-ci dès qu\’il a récupéré sa liberté.' },
        { id: 'odg_postambule_q9', type: 'QCM', question: 'Pourquoi ODG évoque-t-elle l\’épisode biblique des noces de Cana ?', options: ["Pour critiquer explicitement la religion chrétienne.", "Pour anticiper une potentielle objection religieuse et la réfuter.", "Pour soutenir l’autorité religieuse.", "Pour inviter à la célébration religieuse."], answer: 1, explanation: 'Elle anticipe et réplique à une potentielle objection religieuse en montrant l\'anachronisme de telles idées.' },
        { id: 'odg_postambule_q10', type: 'QCM', question: 'Quelle réponse ODG préconise-t-elle face à la question : "Femmes, qu\'y a-t-il de commun entre vous et nous ?"', options: ["« Rien »", "« Que la différence physique »", "« Tout »", "« Peu de choses »"], answer: 2, explanation: 'Elle préconise brièvement la réponse « Tout », qui affirme catégoriquement l’identité fondamentale entre les deux sexes et légitime l’égalité absolue.' },
        { id: 'odg_postambule_q11', type: 'VF', question: 'ODG appelle les femmes à dominer les hommes comme ces derniers les ont dominées auparavant.', answer: 'Faux', explanation: 'Elle appelle au contraire à une égalité réelle et non à une revanche ou supériorité féminine.' },
        { id: 'odg_postambule_q12', type: 'QCM', question: 'Selon ODG, quels sont les principaux moyens d\’action pour les femmes ?', options: ["La violence physique contre les hommes.", "La soumission aux autorités masculines.", "La force de la raison, de la philosophie et l’union collective.", "La supériorité naturelle et l\’isolement individuel."], answer: 2, explanation: 'ODG indique que les femmes doivent opposer la raison et la philosophie aux prétentions injustifiées de supériorité des hommes, en restant unies.' },
        { id: 'odg_postambule_q13', type: 'QCM', question: 'À quoi renvoie la polysémie (avoir plusieurs sens) du mot "affranchir" dans la conclusion du Postambule ?', options: ["Se soumettre volontairement aux hommes.", "Franchir les obstacles et se libérer des contraintes injustes.", "Ignorer les barrières sociales imposées aux femmes.", "Respecter toutes les barrières posées devant elles."], answer: 1, explanation: 'Le verbe "affranchir" a un double sens: franchir (dépasser les barrières physiques) et se libérer des contraintes sociales imposées injustement aux femmes.' },
        { id: 'odg_postambule_q14', type: 'QCM', question: 'En commençant par "Femme, réveille toi" que tente de faire ODG?', options: ["Elle apostrophe les femmes", "Elle dénigre les femmes.", "Elle plaint les femmes."], answer: 1, explanation: 'ODG interpelle les femmes pour les faire réagir, attirer leur attention.' },
        { id: 'odg_postambule_q15', type: 'QCM', question: 'Qu\'ce que le Tocsin et a quoi fait-il référence dans ce texte ?', options: ["Le Tocsin est une cloche utilisée en temps de guerre. Utilisé ici pour parler de la raison qui se répand partourt.", "Il s\'agit d'une trompette pour appeler les femme comme en temps de guerre.", "Il s\'agit d'une clochette a accrocher au cou des mouton pour rappeler les troupeaux."], answer: 1, explanation: 'Le tocsin est une cloche utilisée en temps de guerre. Il s\’agit ici de la cloche de la raison : ODG se place dans l\’héritage des Lumières. La raison se répand partout et la femme doit en profiter pour faire valoir ses droits. ' },
        { id: 'odg_postambule_q16', type: 'QCM', question: 'Pourquoi ODG utilise la <b>Métaphore</b> du Tocsin (cloche utilisée en temps de guerre) pour désigner la raison?', options: ["Avec cette idée de cloche de la raison ODG se place dans l’héritage des Lumières.", "Avec cette idée de cloche de la raison ODG se place dans l'église."], answer: 1, explanation: 'Il s\’agit ici de la cloche de la raison : ODG se  place dans l\’héritage des Lumières. La raison se répand partout et la femme doit en profiter pour faire  valoir ses droits.' },
        { id: 'odg_postambule_q17', type: 'QCM', question: '"Le flambeau de la vérité", de quelle figure de style s\'agit-il ?', options: ["Metaphore", "Périphrase"], answer: 1, explanation: 'Metaphore qui renvoit à la lumière et donc au siècle des lumières qui ont dissipé les nuages de la sottise. <b>Métaphore</b> = Comparaison sans outil de comparaison (ex: "la route, long ruban") On compare à quelque chose de différent. / <b>Périphrase</b>: Expression en plusieurs mots pour décrire quelque chose de simple (ex: "Ile de Beauté" pour la Corse, "l\'astre du jour" pour le soleil).' },
        { id: 'odg_postambule_q18', type: 'QCM', question: 'Quel est l\'obectif de la question rhétorique <b>"Que vous reste-il?</b>', options: ["Rappeler qu\'il faut toujours chercher", "Montrer l\'impuissance des femmes après la révolution."], answer: 2, explanation: 'Elle montre l\’impuissance des femmes après la Révolution.Puis donne 2 réponses - 1re réponse : insiste sur l\'ingratitude des hommes - 2ème réponse : les femme doivent réclamer encore se battre.' },
        { id: 'odg_postambule_q19', type: 'QCM', question: 'Quelle figure de style ODG utilise-t-elle avec l’expression "le flambeau de la vérité" ?', options: ["Une personnification", "Une allitération", "Une métaphore", "Une hyperbole"], answer: 2, explanation: "Le « flambeau de la vérité » constitue une métaphore lumineuse en lien avec l\'idée des Lumières, symbolisant l'éclairage rationnel contre l\'ignorance." },
        { id: 'odg_postambule_q20', type: 'QCM', question: 'Que désigne cette périphrase "Le puissant empire de la nature"', options: ["Dieu", "Le roi??", "L'humanité"], answer: 3, explanation: 'La périphrase désigne l\’humanité qui valorise la nature par rapport à la civilisation (c\’est la société qui a perverti les règles de la nature, dans laquelle l\’égalité des sexes est inscrite).' },
        { id: 'odg_postambule_q21', type: 'VF', question: 'Une Question Rhétorique" est une figure de style qui consiste à poser une question dont la réponse est connue ou sugérée par la personne qui formule l\'interrogation.', answer: 'Vrai', explanation: "On pose une fausse question pour tenir en haleine son auditore." }
        { id: 'odg_postambule_q22', type: 'QCM', question: 'Quelles sont les figures de style dans cette phrase ', options: ["Rappeler que la Révolution aurait pu améliorer le sort des femmes, mais non...", "Que les avantages de la révolution ont été nombreux.", "Que les avantages ne servent à rien."], answer: 1, explanation: 'Cette 2e question rhétorique rappelle que la Révolution aurait pu améliorer le sort des femmes, mais cela n\’a pas été le cas comme le montre sa propre réponse.' },
        { id: 'odg_postambule_q23', type: 'QCM', question: 'Quelles sont les figures de style dans cette phrase "Un mépris plus marqué, un dédain plus signalé."', options: ["Prase verbale + comparaison", "Phrase pronominale + parallélisme de construction."], answer: 2, explanation: 'La phrase est courte et donc d’autant plus frappante. Avec le parallélisme de construction, ODG met en valeur un nouveau paradoxe : au lieu de les respecter davantage, les hommes les méprise encore plus. ' },
        { id: 'odg_postambule_q24', type: 'QCM', question: 'Avec ce paralelisme de construction : <b>"Un mépris plus marqué, un dédain plus signalé.</b> quel paradoxe veut mettre en avant ODG ?"', options: [" au lieu de respecter davantage les femmes, les hommes les méprise encore plus.", "montré que le mépris et le dédains vont faire avancer le choses."], answer: 1, explanation: 'Avec le parallélisme de construction, ODG met en valeur un nouveau paradoxe : au lieu de les respecter davantage, les hommes les méprise encore plus. La phrase est courte et donc d\’autant plus frappante.' },
        { id: 'odg_postambule_q25', type: 'QCM', question: 'A quoi fait référence la périphrase <b>"Dans les siècles de corruption"</b>?"', options: ["L'ancien régime", "Le siècle des lumières."], answer: 1, explanation: 'La périphrase « les siècles de corruption » désigne l\’Ancien Régime qui était un monde corrompu, injustice et ignorance, ne respecte pas les règles de la nature qui sont bonnes.' },
        { id: 'odg_postambule_q27', type: 'VF', question: 'La métaphore de l’aveuglement dans "quand cesserez-vous d\'être aveugles ?" appelle les femmes à la prise de conscience.', answer: 'Vrai', explanation: "Cette métaphore appelle les femmes à ouvrir les yeux sur leur oppression et leurs droits bafoués." }
        { id: 'odg_postambule_q28', type: 'VF', question: '"les sages décrets4 de la nature" est une periphrase', answer: 'Faux', explanation: "C\'est une métaphore juridique qui rappelle que les droits de la femme sont inscrits dans la nature." }
        { id: 'odg_postambule_q29', type: 'QCM', question: 'Quel est l'obectif de la question rhétorique <b>"Quels sont les avantages que vous avez recueillis dans la Révolution ?"</b> Un mépris plus marqué,', options: ["Rappeler que la Révolution aurait pu améliorer le sort des femmes, mais non...", "Que les avantages de la révolution ont été nombreux.", "Que les avantages ne servent à rien."], answer: 1, explanation: 'Cette 2e question rhétorique rappelle que la Révolution aurait pu améliorer le sort des femmes, mais cela n\’a pas été le cas comme le montre sa propre réponse.' },
        { id: 'odg_postambule_q30', type: 'VF', question: 'La métaphore de l’aveuglement dans "quand cesserez-vous d\'être aveugles ?" appelle les femmes à la prise de conscience.', answer: 'Vrai', explanation: "Cette métaphore appelle les femmes à ouvrir les yeux sur leur oppression et leurs droits bafoués." }
        { id: 'odg_postambule_q31', type: 'QCM_EXTRAIT', question: 'Quelles figures de styles trouvent-on dans cet extrait?', extract: "Le puissant empire de la nature n\'est plus environné de préjugés, de fanatisme, de superstition et de mensonges.", options: ["Metaphore, Periphrase, enonciation", "Allitération, Periprase, négation", "Périprase, Négation, Enumération."], answer: 3, explanation: 'Perihrase "Le puissant empire de la nature = l\'humanité, Négation + énumération : Par rapport au tocsin de la raison grâce à qui l’humanité s’est libérée de l\’obscurantisme que désignent les noms communs. La vérité règne. Toutes les conditions favorables sont donc réunies pour réclamer ses droits.' },
        { id: 'odg_postambule_q32', type: 'QCM_EXTRAIT', question: 'A quoi fait réference l'énumération dans cet extrait?', extract: "Le puissant empire de la nature n'est plus environné de préjugés, de fanatisme, de superstition et de mensonges.", options: ["Despotisme : Type de domination politique tyrannique où une seule personne exerce un pouvoir sans partage.", "Obscurantisme: attitude d\'opposition à la diffusion du savoir et de la conaissance "], answer: 2, explanation: 'Grâce au tocsin de la raison, l\’humanité s\’est libérée de l\’obscurantisme que désignent les noms communs. La vérité règne. Toutes les conditions favorables sont donc réunies pour réclamer ses droits. ' },
        { id: 'odg_postambule_q33', type: 'QCM_EXTRAIT', question: 'Que Montrent les 2 Métaphores de cet extrait ?', extract: "Le <b>flambeau de la vérité</b> a dissipé tous <b>les nuages de la sottise et de l\'usurpation</b>", options: ["Que les femmes veulent le pouvoir", "Que les conditions sont réunies pour permettre aux femmes de réclamer leurs droits"], answer: 2, explanation: '???' },
        { id: 'odg_postambule_q34', type: 'QCM_EXTRAIT', question: 'Que trouve-t-on dans cette citation ?', extract: "L\'homme <b>esclave</b> a multiplié ses forces, a eu besoin de recourir aux tiennes pour <b>briser ses fers</b>. Devenu libre, il est devenu injuste envers sa compagne", options: ["Champ lexical de l\'esclavage & de la liberté / Metaphore", "Champ lexical de l\'esclavage & de la liberté / Paralélisme de constriction"], answer: 1, explanation: 'Avant la révolution, les hommes étaient comme esclaves des nobles, des puissants. Pour se libérer (d\’où l\’image des fers brisées), ils ont eu recours aux forces des femmes (« des tiennes »). <br>Le parallélisme de construction souligne ainsi qu\’il est anormal que l\’homme soit ingrat envers la femme alors même qu’elle l\’a aidé. La femme est restée esclave alors qu’il s\’est libéré grâce à son aide… Elle met en lumière ce paradoxe. ' },
        { id: 'odg_postambule_q35', type: 'QCM_EXTRAIT', question: 'A quoi sert le parallélisme de construction dans cet extrait ?', extract: "L\'homme <b>esclave</b> a multiplié ses forces, a eu besoin de recourir aux <b>tiennes<b> pour <b>briser ses fers</b>. Devenu libre, il est devenu injuste envers sa compagne", options: ["Souligne que les hommes ne doivent rien aux femmes", "Qu\'il est anormale que l'homme soit ingrat envers la femme"], answer: 2, explanation: 'Avant la révolution, les hommes étaient comme esclaves des nobles, des puissants. Pour se libérer (d\’où l\’image des fers brisées), ils ont eu recours aux forces des femmes (« des tiennes »). <br>Le parallélisme de construction souligne ainsi qu\’il est anormal que l\’homme soit ingrat envers la femme alors même qu’elle l\’a aidé. La femme est restée esclave alors qu\’il s\’est libéré grâce à son aide… Elle met en lumière ce paradoxe. ' },
        { id: 'odg_postambule_q36', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, a qui fait référence l'adjectif possessif "Tienne" ?', extract: "L\'homme <b>esclave</b> a multiplié ses forces, a eu besoin de recourir aux <b>tiennes<b> pour <b>briser ses fers</b>. Devenu libre, il est devenu injuste envers sa compagne", options: ["Les femmes", "Les déesse"], answer: 2, explanation: 'Avant la révolution, les hommes étaient comme esclaves des nobles, des puissants. Pour se libérer (d’où l’image des fers brisées), ils ont eu recours aux forces des femmes (« des tiennes »). <br>Le parallélisme de construction souligne ainsi qu\’il est anormal que l\’homme soit ingrat envers la femme alors même qu’elle l\’a aidé. La femme est restée esclave alors qu\’il s’est libéré grâce à son aide… Elle met en lumière ce paradoxe. ' },
        { id: 'odg_postambule_q37', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, quelles sont les 3 figures de style qui relancent l\'attention des femmes?', extract: "Ô femmes ! femmes, quand cesserez-vous d\'être aveugles ? ", options: ["Apostrophe + exclamation / Question rhétorique : Methaphore de lv'aveuglement", "Apostrophe + exclamation / Question rhétorique : Comparaison de l\'aveuglement"], answer: 2, explanation: 'Ces figures de style relancent l’attention des femmes. L’<b>exclamation</b> a un ton de déploration (lamentation). <br>La <b>question est purement rhétorique</b> : elle n\’attend pas de réponse et vise simplement à faire réagir la femme. <br>La <b>métaphore</b> de l\’aveuglement appelle à une prise de conscience. Les femmes ne doivent plus se soumettre.' },
        { id: 'odg_postambule_q38', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, à quoi est comparé la métaphore de l\'aveuglement ?', extract: "Ô femmes ! femmes, <b>quand cesserez-vous d'être aveugles</b> ? ", options: ["A l\'absence de prise de conscience des femmes", "A la loyautée des femmes"], answer: 1, explanation: 'La <b>métaphore</b> de l\’aveuglement appelle à une <b>prise de conscience</b>. Les femmes ne doivent plus se soumettre.' },
        { id: 'odg_postambule_q39', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, quelles sont les 3 figures de style ?', extract: "Dans les <b>siècles de corruption<:b> vous <b>n</b>\'avez régné <b>que</b> sur la faiblesse des hommes. Votre <b>empire</b> est détruit.", options: ["Métaphore, Négations restrictive / Présent de vérité générale & Metaphore de l'empire.", "Périphrase, Négations restrictive / Présent de vérité générale & Metaphore de l'empire."], answer: 2, explanation: '<b>Périphrase</b> « les siècles de corruption » = Ancien Régime qui était un monde corrompu, injustice et ignorance, ne respecte pas les règles de la nature qui sont bonnes.<br><b>Négation restrictive</b> les femmes avaient tout de même un pouvoir dans la spere privée : « la faiblesse des hommes ». <br> <b>Présent de vérité générale +Métaphore de l'empire</b> : l\'empire se rapporte à la sphere privée dans la quelle la femme avait un peu de pouvoir mais elle a désormais tout perdu.' },
        { id: 'odg_postambule_q40', type: 'QCM_EXTRAIT', question: 'Dans cet extrait à quoi fait référence "votre empire"?', extract: "Dans les <b>siècles de corruption<:b> vous <b>n</b>\'avez régné <b>que</b> sur la faiblesse des hommes. Votre <b>empire</b> est détruit.", options: ["A l\'ancien régime", "La spère privée , familiale des femmes"], answer: 2, explanation: 'Dans la spère privée elles avaient un semblant de pouvoir grâce à la faiblesse des hommes mais elle ont tout perdu.' },
        { id: 'odg_postambule_q41', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, il y a:', extract: "Que vous reste-t-il donc ? La conviction des injustices de l\'homme. La réclamation de votre patrimoine, fondée sur les sages décrets de la nature", options: ["Question Réthorique / Phrase verbale", "Question Réthorique / Phrase nominale"], answer: 2, explanation: '<b>Question réthorique</b> qui montre l\'impuissance des femmes après la révolution.<br>Rpse 1 : Avec <b> une phrase nominale frappante ODG insiste de nouveau sur l\'ingratitude des hommes.<br>Rpse 2: le mot "Réclamation" montre que ce qu\'il reste aux femmes c\'est leur combat pour des droits et bien (patrimoine). ' },
        { id: 'odg_postambule_q42', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, a quoi font réference les mots en gras ', extract: " La <b>réclamation</b> de votre <b>patrimoine</b>, fondée sur les sages décrets4 de la nature.", options: ["Le combat des femmes pour leur droits / le porte-monnaie des femmes?", "Le combat des femmes pour leur droits /? Les bien matériels et l\'héritage naturel des femmes"], answer: 2, explanation: 'le terme “patrimoine” englobe les biens matériel des femmes et leur héritage naturel. La métaphore juridiques "les sages decrets de la nature"  rappelle que les droits de la femme sont inscrits dans la nature.' },
        { id: 'odg_postambule_q43', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, combien de réponses sont apportées à la question réthorique', extract: "Que vous reste-t-il donc ? <br>La conviction des injustices de l'homme.<br>La réclamation de votre patrimoine, fondée sur les sages décrets de la nature", options: ["1", "2"], answer: 2, explanation: '<b>2réponses : <br>Rpse 1 : Avec <b> une phrase nominale frappante ODG insiste de nouveau sur l\'ingratitude des hommes.<br>Rpse 2: le mot "Réclamation" montre que ce qu\'il reste aux femmes c'est leur combat pour des droits et bien (patrimoine). ' },
        { id: 'odg_postambule_q44', type: 'QCM_EXTRAIT', question: 'Que valorise ODG avec l\’expression en gras dans cet extrait (et l'adverbe intensif "si") ?', extract: 'Qu\'auriez-vous à redouter pour une <b>si belle entreprise</b> ?', 
        options: ["La facilité de la lutte des femmes", "La noblesse et l\’importance du combat des femmes", "La soumission des femmes à leur destin"],
        answer: 2,
        explanation: 'L’adverbe intensif "si" valorise clairement le combat que mènent les femmes, insistant sur son importance et sa grandeur.'
    },
    
    { 
        id: 'odg_postambule_q45',
        type: 'QCM_EXTRAIT',
        question: 'À quoi fait référence la <b>1ère crainte</b> des femmes qu'évoque ODG dans la citation en gras ?', 
        extract: '<b>Le bon mot du législateur des noces de Cana ?</b>', 
        options: ["Une critique d’un discours à l’Assemblée Nationale", "Le regard ou jugement divin (épisode biblique des noces de Cana)", "Une crainte devant l\’échec politique"],
        answer: 2,
        explanation: 'ODG explore la crainte des femmes <b>du regard de DIEU</b> . Avec la référence au législateur biblique des noces de Cana (Jésus), elle évoque symboliquement la crainte des femmes face au regard ou jugement divin.'
    },
    
       { 
        id: 'odg_postambule_q46',
        type: 'QCM_EXTRAIT',
        question: 'À quoi fait référence la <b>2ème crainte</b> des femmes qu'évoque ODG dans la citation en gras ?', 
        extract: ' Craignez-vous que nos <b>législateurs français, correcteurs de cette morale</b> longtemps accrochée aux branches de la politique,', 
        options: ["La réaction méprisante des Hommes", "Le regard ou jugement divin (épisode biblique des noces de Cana)", "Une crainte devant l\’échec politique"],
        answer: 1,
        explanation: 'Les femmes auraient peur des hommes (“Législateurs français”) qui auraient pris le relais de Jésus (“Législateur des noces deCana”) dans la correction de la morale. La morale religieuse et la politique ont longtemps été liées, '
    },

    { 
        id: 'odg_postambule_q47', 
        type: 'QCM_EXTRAIT',
        question: 'Dans cet extrait, comment ODG suggère-t-elle aux femmes de réagir face au rejet des hommes ?', 
        extract: '" Femmes, qu’y a-t-il de commun entre vous et nous ? auriez-vous à répondre." " Tout ", auriez-vous à répondre.', 
        options: ["Par la révolte violente", "Par l\’indifférence", "Par une affirmation ferme d\’une égalité totale"],
        answer: 3,
        explanation: 'Grâce au discours direct et à une réponse brève "Tout", ODG suggère une prise de position ferme et catégorique : les femmes doivent affirmer leur pleine égalité avec les hommes.'
    },

   { 
        id: 'odg_postambule_q48', 
        type: 'QCM', 
        question: 'Quelle est la fonction du discours direct rapporté par ODG "Femmes, qu\’y a-t-il de commun entre vous et nous ? Tout." ?', 
        options: ["Montrer explicitement une différence naturelle entre les sexes", "Donner vie au dialogue et suggérer l\’affirmation de l’égalité", "Dénoncer uniquement le ton ironique des législateurs français"],
        answer: 2, 
        explanation: 'Le discours direct rend vivant l’échange, permet de donner plus de force à l\’argument d’égalité des femmes face aux hommes.'
    },
    

    { 
        id: 'odg_postambule_q49',
        type: 'VF',
        question: 'La question « Femmes, qu\’y-a-t-il de commun entre vous et nous ? » représente une attitude d\’ouverture et d’accueil des hommes envers les femmes.',
        answer: 'Faux',
        explanation: 'Cette question rhétorique représente une attitude de mépris et de rejet, suggérant faussement l\’absence de points communs entre hommes et femmes.'
    },
 { 
        id: 'odg_postambule_q30',
        type: 'QCM',
        options: ["Que les droits de la femme sont inscrits dans la nature", "Que la nature n\'a aucun pouvoir"],
        answer: 1,
        explanation: 'Avec cette métaphore, elle montre que la nature edeicte des lois contre lesquelles on ne peut pas s\'opposer.'
    },

   { id: 'odg_postambule_q31', type: 'QCM', question: 'Quel est l'obectif de la question rhétorique <b>"Que vous reste-il?</b>', options: ["Rappeler qu\'il faut toujours chercher", "Montrer l\'impuissance des femmes après la révolution."], answer: 2, explanation: 'Elle montre l’impuissance des femmes après la Révolution.Puis donne 2 réponses - 1re réponse : insiste sur l'ingratitude des hommes - 2ème réponse : les femme doivent réclamer encore se battre.' },
   { id: 'odg_postambule_q32', type: 'VF', question: '"les sages décrets4 de la nature" est une periphrase', answer: 'Faux', explanation: "C'est une métaphore juridique qui rappelle que les droits de la femme sont inscrits dans la nature." }
   { id: 'odg_postambule_q33', type: 'VF', question: 'La métaphore de l\’aveuglement dans "quand cesserez-vous d\'être aveugles ?" appelle les femmes à la prise de conscience.', answer: 'Vrai', explanation: "Cette métaphore appelle les femmes à ouvrir les yeux sur leur oppression et leurs droits bafoués." }
   { id: 'odg_postambule_q34', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, il y a:', extract: "Que vous reste-t-il donc ? La conviction des injustices de l\'homme. La réclamation de votre patrimoine, fondée sur les sages décrets de la nature", options: ["Question Réthorique / Phrase verbale", "Question Réthorique / Phrase nominale"], answer: 2, explanation: '<b>Question réthorique</b> qui montre l'impuissance des femmes après la révolution.<br>Rpse 1 : Avec <b> une phrase nominale frappante ODG insiste de nouveau sur l'ingratitude des hommes.<br>Rpse 2: le mot "Réclamation" montre que ce qu'il reste aux femmes c'est leur combat pour des droits et bien (patrimoine). ' },
   { id: 'odg_postambule_q35', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, a quoi font réference les mots en gras ', extract: " La <b>réclamation</b> de votre <b>patrimoine</b>, fondée sur les sages décrets4 de la nature.", options: ["Le combat des femmes pour leur droits / le porte-monnaie des femmes", "Le combat des femmes pour leur droits /Les biens matériels et l\'héritage naturel des femmes"], answer: 2, explanation: 'le terme “patrimoine” englobe les biens matériel des femmes et leur héritage naturel. La métaphore juridiques "les sages decrets de la nature"  rappelle que les droits de la femme sont inscrits dans la nature.' },
   { id: 'odg_postambule_q36', type: 'QCM_EXTRAIT', question: 'Dans cet extrait, combien de réponses sont apportées à la question réthorique', extract: "Que vous reste-t-il donc ? <br>La conviction des injustices de l\'homme.<br>La réclamation de votre patrimoine, fondée sur les sages décrets de la nature", options: ["1", "2"], answer: 2, explanation: '<b>2réponses : <br>Rpse 1 : Avec <b> une phrase nominale frappante ODG insiste de nouveau sur l'ingratitude des hommes.<br>Rpse 2: le mot "Réclamation" montre que ce qu'il reste aux femmes c'est leur combat pour des droits et bien (patrimoine). ' },

    { 
        id: 'odg_postambule_q37', 
        type: 'QCM', 
        question: 'Quel est l\’objectif <b>des</b> questions rhétoriques posées par Olympe de Gouges dans ce paragraphe ?', 
        options: ["Encourager les femmes en explorant leurs peurs pour les rassurer", "Accuser directement les hommes de tous les maux", "Montrer l\’indifférence des femmes face à leur situation"], 
        answer: 1, 
        explanation: 'Olympe de Gouges utilise ces questions rhétoriques pour encourager les femmes à dépasser leurs craintes et à se mobiliser dans leur combat pour l’égalité. Elle cite toute les peurs pour que les femmes dépassent ces peurs.' 
    },

    { 
        id: 'odg_postambule_q38', 
        type: 'VF', 
        question: 'La métaphore de la "branche" évoque le lien dépassé entre morale religieuse et politique après la Révolution.', 
        answer: 'Vrai', 
        explanation: 'La métaphore "cette morale longtemps accrochée aux <b>branches de la politique</b>" insiste sur une morale religieuse auparavant liée à la politique, mais jugée dépassée ("qui n’est plus de saison") après la Révolution. la Révolution a mis fin aux liens entre le gouvernement et la religion chrétienne'},

    { 
        id: 'odg_postambule_q39', 
        type: 'VF', 
        question: 'La réponse "tout" à la question "Femmes, qu'y a-t-il de commun entre vous et nous ?" signifie que les <b>hommes et les femmes n\’ont rien en commun.</b>',
        answer: 'Faux',
        explanation: 'Le mot "tout" insiste sur l\’idée que femmes et hommes sont parfaitement identiques, et par conséquent, qu\’ils doivent avoir les mêmes droits.'
    },

    // --- Questions basées sur des extraits (QCM_EXTRAIT) ---
    { 
        id: 'odg_postambule_q40', 
        type: 'QCM_EXTRAIT',
        question: 'Que valorise ODG avec l\’expression en gras dans cet extrait (et l\'adverbe intensif "si") ?', 
        extract: 'Qu\'auriez-vous à redouter pour une <b>si belle entreprise</b> ?', 
        options: ["La facilité de la lutte des femmes", "La noblesse et l\’importance du combat des femmes", "La soumission des femmes à leur destin"],
        answer: 2,
        explanation: 'L\’adverbe intensif "si" valorise clairement le combat que mènent les femmes, insistant sur son importance et sa grandeur.'
    },
    
    { 
        id: 'odg_postambule_q41',
        type: 'QCM_EXTRAIT',
        question: 'À quoi fait référence la <b>1ère crainte</b> des femmes qu'évoque ODG dans la citation en gras ?', 
        extract: '<b>Le bon mot du législateur des noces de Cana ?</b>', 
        options: ["Une critique d’un discours à l’Assemblée Nationale", "Le regard ou jugement divin (épisode biblique des noces de Cana)", "Une crainte devant l\’échec politique"],
        answer: 2,
        explanation: 'ODG explore la crainte des femmes <b>du regard de DIEU</b> . Avec la référence au législateur biblique des noces de Cana (Jésus), elle évoque symboliquement la crainte des femmes face au regard ou jugement divin.'
    },
    
       { 
        id: 'odg_postambule_q42',
        type: 'QCM_EXTRAIT',
        question: 'À quoi fait référence la <b>2ème crainte</b> des femmes qu\'évoque ODG dans la citation en gras ?', 
        extract: ' Craignez-vous que nos <b>législateurs français, correcteurs de cette morale</b> longtemps accrochée aux branches de la politique,', 
        options: ["La réaction méprisante des Hommes", "Le regard ou jugement divin (épisode biblique des noces de Cana)", "Une crainte devant l\’échec politique"],
        answer: 1,
        explanation: 'Les femmes auraient peur des hommes (“Législateurs français”) qui auraient pris le relais de Jésus (“Législateur des noces deCana”) dans la correction de la morale. La morale religieuse et la politique ont longtemps été liées, '
    },

    { 
        id: 'odg_postambule_q43', 
        type: 'QCM_EXTRAIT',
        question: 'Dans cet extrait, comment ODG suggère-t-elle aux femmes de réagir face au rejet des hommes ?', 
        extract: '" Femmes, qu\’y a-t-il de commun entre vous et nous ? auriez-vous à répondre." " Tout ", auriez-vous à répondre.', 
        options: ["Par la révolte violente", "Par l’indifférence", "Par une affirmation ferme d’une égalité totale"],
        answer: 3,
        explanation: 'Grâce au discours direct et à une réponse brève "Tout", ODG suggère une prise de position ferme et catégorique : les femmes doivent affirmer leur pleine égalité avec les hommes.'
    },

   { 
        id: 'odg_postambule_q44', 
        type: 'QCM', 
        question: 'Quelle est la fonction du discours direct rapporté par ODG "Femmes, qu\’y a-t-il de commun entre vous et nous ? Tout." ?', 
        options: ["Montrer explicitement une différence naturelle entre les sexes", "Donner vie au dialogue et suggérer l’affirmation de l’égalité", "Dénoncer uniquement le ton ironique des législateurs français"],
        answer: 2, 
        explanation: 'Le discours direct rend vivant l\’échange, permet de donner plus de force à l\’argument d’égalité des femmes face aux hommes.'
    },
    
    
    
        {
        id: 'odg_postambule_q45',
        type: 'QCM',
        question: "Quelle incohérence des hommes dénonce ODG dans cet extrait "S\'ils s'obstinaient, dans leur faiblesse, à cette inconséquence8 mettre en contradiction avec leurs principes?",
        options: [
            "Le fait qu'ils agissent conformément à leurs principes révolutionnaires",
            "Le fait qu'ils prétendent combattre la tyrannie tout en gardant les femmes soumises",
            "Le fait qu'ils règnent par la force physique uniquement"
        ],
        answer: 2,
        explanation: "ODG dénonce l\'incohérence des hommes qui disent lutter contre la tyrannie mais limitent pourtant les droits des femmes en maintenant leur soumission."
    },
    
     {
        id: 'odg_postambule_q46',
        type: 'QCM',
        question: "De quel type de subordonnées s'agit-il et à quoi sert-elle ? "S\'ils s'obstinaient, dans leur faiblesse, à cette inconséquence8 mettre en contradiction avec leurs principes?",
        options: [
            "Type : proposition subordonnée circonstancielle de temps <br> Objectif : Montrer que les hommes ont des principes révolutionnaires",
            "Type : proposition subordonnée circonstancielle de condition <br> Objectif : Montrer l'incohérence des hommes qui prétendent combattre la tyrannie tout en gardant les femmes soumises",
        ],
        answer: 2,
        explanation: "La proposition subordonnée circonstancielle de condition dénonce l’incohérence des hommes et particulièrement des députés, qui disent lutter contre la tyrannie mais qui maintiennent les femmes dans la soumission."
    },
    
    
    {
        id: 'odg_postambule_q47',
        type: 'QCM',
        question: "Quel objectif poursuit ODG en employant la 2e personne du pluriel (\"vous\") dans ce passage ?",
        options: [
            "Parler directement aux députés",
            "Créer un sentiment d\'unité et de solidarité entre les femmes",
            "S\’adresser uniquement aux philosophes des Lumières"
        ],
        answer: 2,
        explanation: "Par l\'emploi du \"vous\", ODG s’adresse directement aux femmes afin de susciter leur unité et leur solidarité dans le combat pour leurs droits."
    },
    
    // --- Questions sur les Figures de Style ---
    {
        id: 'odg_postambule_q48',
        type: 'VF',
        question: "ODG associe les hommes à des termes péjoratifs (« faiblesse », « inconséquence », « vaines prétentions », « orgueilleux »...) afin de renforcer la confiance des femmes.",
        answer: "Vrai",
        explanation: "En assimilant les hommes à des termes péjoratifs, ODG dévalorise symboliquement leur prétendue supériorité afin de renforcer la confiance des femmes."
    },
    {
        id: 'odg_postambule_q49',
        type: 'VF',
        question: "L\'auteure souhaite établir une supériorité féminine sur les hommes.",
        answer: "Faux",
        explanation: "ODG n\'appelle pas à la supériorité féminine, mais vise plutôt l’égalité entre les femmes et les hommes : une alliance plutôt qu'une soumission."
    },

    //--- Questions basées sur des extraits (QCM_EXTRAIT) ---
    {
        id:'odg_postambule_q50',
        type:'QCM_EXTRAIT',
        question:'Quel est l\’effet recherché par l’utilisation répétée de termes en gras dans cet extrait ?',
        extract:'<b>opposez</b> courageusement la force de la raison […], <b>réunissez-vous</b> sous les étendards de la philosophie, <b>déployez</b> toute l\’énergie de votre caractère',
        options:[
            "Donner des ordres aux députés.",
            "Inviter à l\’action collective des femmes.",
            "Critiquer la passivité des philosophes."
        ],
        answer:2,
        explanation:'Les impératifs "opposez", "réunissez-vous", et "déployez", visent directement à galvaniser les femmes, à les inviter à une action collective pour revendiquer leurs droits.'
    },

    {
        id:'odg_postambule_q51',
        type:'QCM_EXTRAIT',
        question:'Dans cet extrait, quelle attitude ODG propose-t-elle d\’opposer face aux hommes ?',
        extract:'opposez courageusement la <b>force de la raison</b> aux vaines prétentions de supériorité',
        options:[
            "La force physique et guerrière",
            "La violence verbale",
            "Une supériorité intellectuelle et morale fondée sur la raison"
        ],
        answer:3,
        explanation:'ODG propose aux femmes d’opposer une supériorité intellectuelle et morale basée sur la raison ("force de la raison") aux prétentions injustifiées des hommes.'
    },

    {
        id:'odg_postambule_q52',
        type:'QCM_EXTRAIT',
        question:'Quelle est l\’idée suggérée par l\’expression en gras dans cette citation ?',
        extract:'vous verrez bientôt ces orgueilleux, <b>non serviles adorateurs rampants à vos pieds, mais fiers de partager avec vous les trésors de l\'Être suprême</b>',
        options:[
            "Une future domination des femmes sur les hommes.",
            "Une égalité fondée sur l'alliance plutôt que sur la soumission.",
            "Une séparation définitive entre les femmes et les hommes."
        ],
        answer:2,
        explanation:'En utilisant une métaphore qui montre les hommes non comme "adorateurs rampants", mais au contraire comme "fiers de partager", ODG insiste sur une égalité envisagée comme une réelle alliance, sans soumission.'
    },

    {
        id:'odg_postambule_q53',
        type:'VF',
        question:'L’expression « les trésors de l\’Être suprême » fait référence aux valeurs universelles prônées par la philosophie des Lumières.',
        answer:'Vrai',
        explanation:'Cette expression symbolique fait bien référence aux valeurs universelles comme la raison, l\’égalité et le respect mutuel, issues notamment de la philosophie des Lumières.'
    },

    {
        id:'odg_postambule_q54',
        type:'QCM',
        question:'Quel temps verbal ODG utilise-t-elle dans "vous verrez bientôt", et pourquoi ?',
        options:[
            "Présent – pour rendre la situation actuelle plus vivante.",
            "Futur de certitude – pour souligner une issue positive si les femmes agissent.",
            "Conditionnel – pour exprimer une hypothèse irréelle."
        ],
        answer:2,
        explanation:'ODG emploie ici un futur de certitude (« vous verrez bientôt ») afin d\’affirmer que les femmes obtiendront certainement une situation positive si elles luttent activement pour leurs droits.'
    }  ,

    {
        id: 'odg_postambule_q55',
        type: 'QCM',
        question: 'Quel message principal ODG transmet-elle dans ce passage "il est en votre pouvoir de les affranchir10 ; vous n'avez qu\'à le vouloir" ?',
        options: [
            "Les femmes doivent accepter passivement les obstacles.",
            "Les femmes peuvent surmonter les obstacles à condition de vouloir se libérer.",
            "Les femmes doivent attendre une autorisation des hommes pour agir."
        ],
        answer: 2,
        explanation: 'ODG insiste sur la capacité d\'action des femmes : leur libération dépend principalement et avant tout de leur volonté.'
    },

    {
        id: 'odg_postambule_q56',
        type: 'QCM',
        question: 'À quoi sert la proposition subordonnée circonstancielle de concession "Quelles que soient les barrières que l\'on vous oppose" ?',
        options: [
            "À rappeler le soutien inconditionnel des hommes.",
            "À présenter les obstacles éventuels tout en affirmant leur dépassement possible.",
            "À exprimer l\’exclusion définitive des femmes."
        ],
        answer: 2,
        explanation: 'La subordonnée circonstancielle de concession ("quelles que soient les barrières") indique l’existence d’obstacles éventuels, tout en soulignant immédiatement que les femmes peuvent les dépasser.'
    },

    {
        id: 'odg_postambule_q57',
        type: 'VF',
        question: 'La négation restrictive "ne... que…" dans le passage ("vous n'avez qu'à le vouloir") insiste sur la difficulté à vaincre les obstacles.',
        answer: 'Faux',
        explanation: 'La négation restrictive "ne... que…" insiste sur le fait que la possibilité de liberté dépend uniquement de la volonté des femmes, et non pas sur la difficulté elle-même.'
    },

    {
        id:'odg_postambule_q58',
        type:'QCM_EXTRAIT',
        question:'Que signifie principalement le terme en gras dans cet extrait ?',
        extract:'il est en votre pouvoir de les <b>affranchir</b>',
        options:[
            "Créer davantage d\’obstacles.",
            "Dépasser physiquement les barrières et se libérer d\’une sujétion.",
            "Demander une aide extérieure pour franchir ces barrières."
        ],
        answer:2,
        explanation:'Le terme "affranchir" est polysémique. Ici, il désigne à la fois l\’idée concrète de passer au-dessus des barrières, et surtout symboliquement de se libérer d\’une soumission sociale.'
    },

    {
        id:'odg_postambule_q59',
        type:'VF',
        question:'Le mot "affranchir" est polysémique (il possède un double sens) : franchir physiquement et libérer symboliquement.',
        answer:'Vrai',
        explanation:'Le verbe "affranchir" est polysémique : il désigne à la fois le franchissement matériel d’obstacles et la libération symbolique d’une oppression.'
    },

    {
        id:'odg_postambule_q60',
        type:'QCM',
        question:'Sur quoi insiste la négation restrictive "vous n\’avez qu’à le vouloir"?',
        options:[
            "Sur la difficulté extrême de la lutte des femmes.",
            "Sur le découragement face à l’inaction des législateurs.",
            "Sur le fait essentiel que seule la volonté des femmes est nécessaire à leur libération."
        ],
        answer:3,
        explanation:'La négation restrictive ("ne...que...") met en avant l\’idée essentielle selon laquelle leur volonté seule suffit à leur libération.'
    },

    {
        id:'odg_postambule_q61',
        type:'QCM_EXTRAIT',
        question:'Quel effet produit l\’expression en gras dans : "<b>il est en votre pouvoir</b>"?',
        extract:'Quelles que soient les barrières que l\'on vous oppose, <b>il est en votre pouvoir</b> de les affranchir ; vous n\'avez qu\'à le vouloir',
        options:[
            "Cela valorise la force et la capacité d’action des femmes.",
            "Cela souligne la supériorité naturelle des hommes.",
            "Cela met en évidence l\’impuissance des femmes."
        ],
        answer:1,
        explanation:'L\’expression "il est en votre pouvoir" insiste sur la capacité des femmes à agir et souligne leur force intrinsèque.'
    }
    ]

}




    // Ajoutez d'autres textes ici
];

// --- MESSAGES DE FIN ---
const endMessagesConfig = {
    mode1: {
        low: { title: "Oups...", messages: ["Je suis sûr que tu peux faire mieux."] },
        medium: { title: "Bien !", messages: ["C'est un bon résultat.", "Mais tu peux faire mieux. ;-)"] },
        high: { title: "Bravo !", messages: [
                "Très bon résultats. Félicitations !",
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
                "Épatant.\nObjectif atteint. T'es trop fort.",
                "Bravo, bravo, c'est parfait."
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
let selectedMode = 'total20';
let questionsAnsweredThisSession = 0;
let consecutiveCorrectAnswers = 0;
let maxConsecutiveCorrectAnswersInSession = 0;
let masteredQuestionsCount = 0;
let quizEnded = false;

const encouragementMessages = [
    "Excellent !", "Continue comme ça !", "Bravo !", "Tu maîtrises !", "Impressionnant !",
    "C'est bien !", "Encore un effort !", "Presque parfait !", "Super réponse !"
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

// --- initializeApp CORRIGÉE ---
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
        // *** LA LIGNE CRUCIALE EST ICI ***
        textListContainer.appendChild(button); // Ajoute le bouton au conteneur HTML
    });
    showScreen('selection'); // Affiche l'écran de sélection
}
// --- FIN initializeApp CORRIGÉE ---

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
    currentText = textsData[textIndex];
    questionsForCurrentText = currentText.questions.map(q => ({
        ...q,
        points: q.type === 'VF' ? 1 : 2,
        masteredInSession: false
    }));

    shuffleArray(questionsForCurrentText);
    console.log("Questions mélangées pour cette session !");

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
    if (mode === 'total20') currentModeInfoElement.textContent = 'Total 20 Questions';
    else if (mode === 'streak20') currentModeInfoElement.textContent = 'Série 20 Correctes';
    else if (mode === 'mastery') currentModeInfoElement.textContent = 'Maîtrise Complète';
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

    if (currentQuestionIndex >= questionsForCurrentText.length) {
        currentQuestionIndex = 0;
        console.log("Fin de la liste (mélangée), retour au début.");
    }

    const question = questionsForCurrentText[currentQuestionIndex];
    questionTextElement.textContent = `(${questionsAnsweredThisSession + 1}) ${question.question}`;

    if (question.type === 'QCM_EXTRAIT' && question.extract) {
        questionExtractElement.textContent = question.extract;
        questionExtractElement.classList.remove('hidden');
    } else {
        questionExtractElement.classList.add('hidden');
    }

    answerOptionsContainer.innerHTML = '';

    if (question.type === 'VF') {
        const btnTrue = document.createElement('button'); btnTrue.textContent = 'Vrai'; btnTrue.classList.add('vf-true'); btnTrue.onclick = () => checkAnswer('Vrai'); answerOptionsContainer.appendChild(btnTrue);
        const btnFalse = document.createElement('button'); btnFalse.textContent = 'Faux'; btnFalse.classList.add('vf-false'); btnFalse.onclick = () => checkAnswer('Faux'); answerOptionsContainer.appendChild(btnFalse);
    } else if (question.type === 'QCM' || question.type === 'QCM_EXTRAIT') {
        question.options.forEach((option, index) => {
            const button = document.createElement('button'); button.textContent = `${String.fromCharCode(65 + index)}. ${option}`; button.onclick = () => checkAnswer(index); answerOptionsContainer.appendChild(button);
        });
    }
}

function checkAnswer(selectedAnswer) {
    if (quizEnded) return;

    const question = questionsForCurrentText[currentQuestionIndex];
    const correctAnswer = question.answer;
    const points = question.points;
    let isCorrect = false;

    questionsAnsweredThisSession++;

    if (question.type === 'VF') { isCorrect = selectedAnswer === correctAnswer; }
    else if (question.type === 'QCM' || question.type === 'QCM_EXTRAIT') { isCorrect = parseInt(selectedAnswer) === parseInt(correctAnswer); }

    if (isCorrect) {
        score += points;
        consecutiveCorrectAnswers++;
        if (consecutiveCorrectAnswers > maxConsecutiveCorrectAnswersInSession) {
            maxConsecutiveCorrectAnswersInSession = consecutiveCorrectAnswers;
        }
        if (!question.masteredInSession) {
            question.masteredInSession = true;
            masteredQuestionsCount++;
        }
    } else {
        consecutiveCorrectAnswers = 0;
    }

    updateSessionInfoDisplay();

    feedbackElement.innerHTML = '';
    feedbackElement.classList.remove('hidden', 'correct', 'incorrect');
    const feedbackText = document.createElement('span');
    if (isCorrect) {
        feedbackText.textContent = `Correct ! (+${points} point${points > 1 ? 's' : ''})`;
        feedbackElement.classList.add('correct');
        if (Math.random() < 0.33) { encouragementElement.textContent = getRandomMessage(encouragementMessages); }
    } else {
        feedbackText.textContent = 'Incorrect.';
        feedbackElement.classList.add('incorrect');
        encouragementElement.textContent = '';
    }
    feedbackElement.appendChild(feedbackText);
    if (question.explanation) {
        const explanationPara = document.createElement('p');
        explanationPara.textContent = `Explication : ${question.explanation}`;
        feedbackElement.appendChild(explanationPara);
    }
    feedbackElement.classList.remove('hidden');

    const answerButtons = answerOptionsContainer.querySelectorAll('button');
    answerButtons.forEach(button => button.disabled = true);

    let objectiveMet = false;
    if (selectedMode === 'total20' && questionsAnsweredThisSession >= 20) {
        objectiveMet = true;
        quizEnded = true;
        showEndOfQuiz(objectiveMet);
    } else if (selectedMode === 'streak20' && consecutiveCorrectAnswers >= 20) {
        objectiveMet = true;
        quizEnded = true;
        showEndOfQuiz(objectiveMet);
    } else if (selectedMode === 'mastery') {
        // Utilise masteredQuestionsCount (plus simple que .every à chaque fois)
        if (masteredQuestionsCount >= questionsForCurrentText.length) {
            objectiveMet = true;
            quizEnded = true;
            showEndOfQuiz(objectiveMet);
        }
    }

    if (!quizEnded) {
        nextQuestionBtn.classList.remove('hidden');
    } else {
        nextQuestionBtn.classList.add('hidden');
    }
}

function handleNextQuestion() {
    if (quizEnded) return;
    currentQuestionIndex++;
    displayQuestion();
}

function handleBackToSelection() {
    quizEnded = true;
    showScreen('selection');
}

function showEndOfQuiz(objectiveAchieved) {
    let finalTitle = "";
    let finalMessage = "";
    let scoreText = "";

    if (selectedMode === 'total20') {
        let displayScore = Math.min(score, 20);
        scoreText = `${displayScore} / 20`;
        if (score <= 10) { finalTitle = endMessagesConfig.mode1.low.title; finalMessage = getRandomMessage(endMessagesConfig.mode1.low.messages); }
        else if (score <= 15) { finalTitle = endMessagesConfig.mode1.medium.title; finalMessage = getRandomMessage(endMessagesConfig.mode1.medium.messages); }
        else { finalTitle = endMessagesConfig.mode1.high.title; finalMessage = getRandomMessage(endMessagesConfig.mode1.high.messages); }
    }
    else if (selectedMode === 'streak20') {
        if (objectiveAchieved) {
            scoreText = `Série 20/20 !`;
            finalTitle = endMessagesConfig.mode2.success.title;
            finalMessage = getRandomMessage(endMessagesConfig.mode2.success.messages);
        } else {
             scoreText = `Série max ${maxConsecutiveCorrectAnswersInSession}`;
            if (maxConsecutiveCorrectAnswersInSession <= 10) { finalTitle = endMessagesConfig.mode2.fail_low_streak.title; finalMessage = getRandomMessage(endMessagesConfig.mode2.fail_low_streak.messages); }
            else { finalTitle = endMessagesConfig.mode2.fail_high_streak.title.replace('{streak}', maxConsecutiveCorrectAnswersInSession); finalMessage = getRandomMessage(endMessagesConfig.mode2.fail_high_streak.messages); }
        }
    }
    else if (selectedMode === 'mastery') {
        scoreText = `Score final : ${score}`; // Affiche simplement le score total accumulé
        finalTitle = endMessagesConfig.mastery.success.title;
        finalMessage = getRandomMessage(endMessagesConfig.mastery.success.messages);
    }

    finalScoreDisplayElement.textContent = scoreText;
    endTitleElement.textContent = finalTitle;
    endMessageBodyElement.textContent = finalMessage;
    endMessageBodyElement.innerHTML = endMessageBodyElement.innerHTML.replace(/\n/g, '<br>');

    showScreen('end');
}

function handleRestartQuiz() {
    if (currentTextIndexForRestart !== -1) {
        startRevision(currentTextIndexForRestart, selectedMode);
    } else {
        handleBackToSelection();
    }
}

// --- ÉCOUTEURS D'ÉVÉNEMENTS ---
nextQuestionBtn.addEventListener('click', handleNextQuestion);
backToSelectionBtn.addEventListener('click', handleBackToSelection);
restartBtn.addEventListener('click', handleRestartQuiz);
homeBtn.addEventListener('click', handleBackToSelection);

// --- DÉMARRAGE ---
document.addEventListener('DOMContentLoaded', initializeApp);
