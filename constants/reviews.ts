export interface Review {
  id: number;
  authorId: number;
  avatarUrl: string;
  stars: number;
  date: string;
  reviewerName: string;
  reviewTitle: string;
  reviewText: string;
  poemAuthor: string;
  icon: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    authorId: 3,
    avatarUrl: '/reviewers/elena-o.jpg',
    stars: 5,
    date: '31 августа 2024 г.',
    reviewerName: 'Елена Островская',
    reviewTitle: 'Тронули до слёз...',
    reviewText: 'ОГРОМНОЕ спасибо Татьяне! Мое поздравление дочери на 20-ти летие, которое я попросила облечь в стихотворную форму, было превращено в красивое, трогательное, очень личное стихотворение, до еще какое, онегинская строфа! Мое поздравление дочери на 20-ти летие, которое я попросила облечь в стихотворную форму, было превращено в красивое, трогательное, очень личное стихотворение, до еще какое, онегинская строфа!',
    poemAuthor: 'Татьяна Русина',
    icon: "/icons/ok.svg"
  },
  {
    id: 2,
    authorId: 4,
    avatarUrl: '/reviewers/katerina.jpg',
    stars: 5,
    date: '20 августа 2024 г.',
    reviewerName: 'Шалтабкина Катерина',
    reviewTitle: 'Вы молодец!..',
    reviewText: 'Дмитрий Улешский, спасибо большое вам за каштруд. Мне настолько понравилось стихотворение, которое написали на юбилей руководителя. Написано оперативно, очень просто читаемо и самое главное от души. Всем советую! Вы молодец!',
    poemAuthor: 'Дмитрий Улешский',
    icon: "/icons/vk.svg"
  },
  {
    id: 3,
    authorId: 4,
    avatarUrl: '/reviewers/vadim.jpg',
    stars: 5,
    date: '8 августа 2024 г.',
    reviewerName: 'Щелкунов Вадим',
    reviewTitle: 'С юмором и отражением эмоций...',
    reviewText: 'Благодарю Дмитрия за замечательное поздравление к стиху П. Филатова!!! Уместилось всё, что было предложено, с юмором и отражением эмоций и души юбиляра👍👍👍👍',
    poemAuthor: 'Дмитрий Улешский',
    icon: "/icons/ok.svg"
  },
  {
    id: 4,
    authorId: 3,
    avatarUrl: '/reviewers/tatiana.jpg',
    stars: 5,
    date: '31 августа 2024 г.',
    reviewerName: 'Шумова (Титова) Татьяна Шумова',
    reviewTitle: 'Замечательное поздравление...',
    reviewText: 'Хочу сказать Огромное Спасибо Дмитрию Улешскому за прекрасное, поэтичное, трепетное, душеливое стихотворение для моей Мамы в честь её Юбилея! Мама была так тронута, ей было очень приятно услышать такое замечательное поздравление!',
    poemAuthor: 'Татьяна Русина',
    icon: "/icons/ok.svg"
  },
  {
    id: 5,
    authorId: 4,
    avatarUrl: '/reviewers/marina.jpg',
    stars: 5,
    date: '20 августа 2024 г.',
    reviewerName: 'Харлина Марина',
    reviewTitle: 'Спасибо за ваш труд...',
    reviewText: 'Я в восторге от Ваших стихов. Даже не ожидала, что получится так шикарно. Огромное СПАСИБО за Ваш труд.👍👍👍',
    poemAuthor: 'Дмитрий Улешский',
    icon: "/icons/vk.svg"
  },
  {
    id: 6,
    authorId: 4,
    avatarUrl: '/reviewers/vadim.jpg',
    stars: 5,
    date: '8 августа 2024 г.',
    reviewerName: 'Щелкунов Вадим',
    reviewTitle: 'Лучше и не скажешь...',
    reviewText: 'Хочу выразить благодарность Дмитрию. Не первый раз он пишет для меня стихи. И всегда попадает в настроение. Лучше и не скажешь. Мысли передаются настолько точно, что практически ничего не нужно менять! Рада обращаться к таким творческим людям.',
    poemAuthor: 'Дмитрий Улешский',
    icon: "/icons/ok.svg"
  },
  {
    id: 7,
    authorId: 3,
    avatarUrl: '/reviewers/julia.jpg',
    stars: 5,
    date: '31 августа 2024 г.',
    reviewerName: 'Леонидовна Юлия',
    reviewTitle: 'Обязательно обращусь еще...',
    reviewText: 'Доброго времени суток. Заказала стих на свадьбу к брату. Моему восторгу нет предела. Спасибо огромное автору за такой стих. Чёткое попадание. Всё, как я хотела, и смех, и трогательно. Спасибо Вам огромное. Обязательно обращусь ещё!',
    poemAuthor: 'Татьяна Русина',
    icon: "/icons/ok.svg"
  },
  {
    id: 8,
    authorId: 4,
    avatarUrl: '/reviewers/anastasia.jpg',
    stars: 5,
    date: '20 августа 2024 г.',
    reviewerName: 'Настина Анастасия',
    reviewTitle: 'Безупречный стих...',
    reviewText: 'Заказывала стих на юбилей папы. Сначала написала своими словами, но понимала, что что-то не то и обратилась за помощью в "Рифмач". За малый срок был создан безупречный стих. Спасибо вам огромное, Алла!',
    poemAuthor: 'Дмитрий Улешский',
    icon: "/icons/vk.svg"
  },
  {
    id: 9,
    authorId: 4,
    avatarUrl: '/reviewers/andrey.jpg',
    stars: 5,
    date: '8 августа 2024 г.',
    reviewerName: 'Суворов Андрей',
    reviewTitle: 'Все было сделано качественно...',
    reviewText: 'Остался доволен, что обратился именно в эту компанию! Все было сделано качественно и мгновенно! Ребята, Вы огромные молодцы, спасибо Вам! Процветания Вам и больше благодарных клиентов!',
    poemAuthor: 'Дмитрий Улешский',
    icon: "/icons/vk.svg"
  },
  {
    id: 10,
    authorId: 3,
    avatarUrl: '/reviewers/serg.jpg',
    stars: 5,
    date: '31 августа 2024 г.',
    reviewerName: 'Bykov Serg',
    reviewTitle: 'Я в восторге...',
    reviewText: 'Огромнейшее спасибо за стихотворение, очень красивое, слова идеально легли на музыку. Я в восторге. Супер!!!',
    poemAuthor: 'Татьяна Русина',
    icon: "/icons/ok.svg"
  },
  {
    id: 11,
    authorId: 5,
    avatarUrl: '/reviewers/marina-k.jpg',
    stars: 5,
    date: '15 августа 2024 г.',
    reviewerName: 'Марина Ковалева',
    reviewTitle: 'Великолепная работа!',
    reviewText: 'Алёна создала чудесное стихотворение для моей дочери на выпускной. Каждая строчка пропитана теплом и любовью. Спасибо за такой профессиональный подход!',
    poemAuthor: 'Алёна Барабаш',
    icon: "/icons/vk.svg"
  },
  {
    id: 12,
    authorId: 6, 
    avatarUrl: '/reviewers/pavel-m.jpg',
    stars: 5,
    date: '12 августа 2024 г.',
    reviewerName: 'Павел Морозов',
    reviewTitle: 'Отличный юмор!',
    reviewText: 'Юлия написала невероятно веселое поздравление для корпоратива. Коллеги были в восторге, особенно порадовали тонкие отсылки к рабочим моментам и легкая самоирония. Теперь знаю, к кому обращаться за искрометным юмором в стихах!',
    poemAuthor: 'Юлия Шипулина',
    icon: "/icons/vk.svg"
  },
  {
    id: 13,
    authorId: 7, 
    avatarUrl: '/reviewers/svetlana-d.jpg',
    stars: 5,
    date: '5 августа 2024 г.',
    reviewerName: 'Светлана Демидова',
    reviewTitle: 'Настоящий профессионал!',
    reviewText: 'Заказывала у Вадима поздравление на золотую свадьбу родителей. Он смог так тонко передать и юмор, и лирику, что все гости плакали и смеялись одновременно. Восхищена талантом автора вплетать в текст семейные истории так органично и душевно.',
    poemAuthor: 'Вадим Барков',
    icon: "/icons/ok.svg"
  },
  {
    id: 14,
    authorId: 8, 
    avatarUrl: '/reviewers/igor-p.jpg',
    stars: 5,
    date: '18 августа 2024 г.',
    reviewerName: 'Игорь Петров',
    reviewTitle: 'Превзошло все ожидания',
    reviewText: 'Алла создала потрясающее поздравление для моей жены на годовщину свадьбы. Каждая строчка наполнена глубоким смыслом и нежностью. Жена была растрогана до слёз. Спасибо за такой чудесный подарок!',
    poemAuthor: 'Алла Стахеева',
    icon: "/icons/ok.svg"
  },
  {
    id: 15,
    authorId: 2, 
    avatarUrl: '/reviewers/natalia-k.jpg',
    stars: 5,
    date: '22 августа 2024 г.',
    reviewerName: 'Наталья Климова',
    reviewTitle: 'Великолепная работа!',
    reviewText: 'Елена создала замечательное стихотворение для юбилея компании. Удивительно, как точно она смогла отразить наш корпоративный дух и ценности в поэтической форме. Все сотрудники в восторге! Большое спасибо за профессионализм.',
    poemAuthor: 'Елена Юринова',
    icon: "/icons/vk.svg"
  },
  {
    id: 16,
    authorId: 5,
    avatarUrl: '/reviewers/dmitriy-s.jpg',
    stars: 5,
    date: '25 августа 2024 г.',
    reviewerName: 'Дмитрий Соколов',
    reviewTitle: 'Потрясающий детский стих',
    reviewText: 'Заказывал стихотворение для детского утренника. Алёна создала такой чудесный текст, что дети выучили его моментально! Особенно порадовало, как автор вплела образовательные элементы в веселую рифму. Родители просили контакты автора - все в восторге!',
    poemAuthor: 'Алёна Барабаш',
    icon: "/icons/ok.svg"
  },
  {
    id: 17,
    authorId: 6, 
    avatarUrl: '/reviewers/elena-v.jpg',
    stars: 5,
    date: '28 августа 2024 г.',
    reviewerName: 'Елена Волкова',
    reviewTitle: 'Сатира высшего класса',
    reviewText: 'Юлия написала великолепное шуточное поздравление коллеге на повышение. Тонкий юмор, профессиональные шутки и при этом очень добрая подача - это именно то, что нам было нужно! Текст разошелся на цитаты в офисе.',
    poemAuthor: 'Юлия Шипулина',
    icon: "/icons/vk.svg"
  },
  {
    id: 18,
    authorId: 1, 
    avatarUrl: '/reviewers/marina-s.jpg',
    stars: 5,
    date: '30 августа 2024 г.',
    reviewerName: 'Марина Сергеева',
    reviewTitle: 'Мастер своего дела',
    reviewText: 'Заказывала поздравление для мамы на юбилей. Дмитрий создал настолько глубокое и проникновенное произведение, что все гости слушали, затаив дыхание. Особенно тронуло, как он смог отразить характер мамы и её жизненный путь. Это настоящее искусство!',
    poemAuthor: 'Дмитрий Тютлин',
    icon: "/icons/ok.svg"
  },
  {
    id: 19,
    authorId: 7, // Вадим Барков
    avatarUrl: '/reviewers/alexander-k.jpg',
    stars: 5,
    date: '15 августа 2024 г.',
    reviewerName: 'Александр Козлов',
    reviewTitle: 'Креативно и точно в срок',
    reviewText: 'Срочно нужен был текст для поздравления партнёров компании. Вадим не только уложился в рекордно короткие сроки, но и создал настоящий шедевр. Идеальный баланс между деловым стилем и поэтической формой. Теперь только к нему!',
    poemAuthor: 'Вадим Барков',
    icon: "/icons/vk.svg"
  },
  {
    id: 20,
    authorId: 8, // Алла Стахеева
    avatarUrl: '/reviewers/olga-m.jpg',
    stars: 5,
    date: '10 августа 2024 г.',
    reviewerName: 'Ольга Михайлова',
    reviewTitle: 'Душевно и профессионально',
    reviewText: 'Благодарю Аллу за чудесное стихотворение к свадьбе дочери! Все гости были тронуты до глубины души. Особенно впечатлило, как автор смогла передать всю нежность материнских чувств и пожеланий. Будем хранить этот текст в семейном альбоме!',
    poemAuthor: 'Алла Стахеева',
    icon: "/icons/ok.svg"
  },
  {
    id: 21,
    authorId: 3, // Татьяна Русина
    avatarUrl: '/reviewers/vladimir-n.jpg',
    stars: 5,
    date: '20 августа 2024 г.',
    reviewerName: 'Владимир Николаев',
    reviewTitle: 'Превосходная работа!',
    reviewText: 'Татьяна создала потрясающее поздравление для корпоративного мероприятия. Удивительно точно подмечены все особенности нашей работы, при этом с таким тонким юмором! Коллеги до сих пор вспоминают и цитируют отдельные строки.',
    poemAuthor: 'Татьяна Русина',
    icon: "/icons/vk.svg"
  },
  {
    id: 22,
    authorId: 4, // Дмитрий Улешский
    avatarUrl: '/reviewers/sofia-r.jpg',
    stars: 5,
    date: '24 августа 2024 г.',
    reviewerName: 'София Романова',
    reviewTitle: 'Талант от Бога',
    reviewText: 'Заказывала поздравление на юбилей бабушки. Дмитрий создал такое трогательное произведение, что все плакали от счастья. Бабушка сказала, что это лучший подарок в её жизни. Спасибо за такой душевный подход к работе!',
    poemAuthor: 'Дмитрий Улешский',
    icon: "/icons/ok.svg"
  },
  {
    id: 23,
    authorId: 2, // Елена Юринова
    avatarUrl: '/reviewers/maxim-d.jpg',
    stars: 5,
    date: '27 августа 2024 г.',
    reviewerName: 'Максим Дмитриев',
    reviewTitle: 'Высший пилотаж',
    reviewText: 'Елена написала поздравление для открытия нового филиала компании. Текст получился одновременно торжественным и очень современным. Особенно впечатлило, как она смогла обыграть специфику нашей деятельности в поэтической форме.',
    poemAuthor: 'Елена Юринова',
    icon: "/icons/vk.svg"
  },
  {
    id: 24,
    authorId: 5, // Алёна Барабаш
    avatarUrl: '/reviewers/irina-k.jpg',
    stars: 5,
    date: '29 августа 2024 г.',
    reviewerName: 'Ирина Кузнецова',
    reviewTitle: 'Чудесные детские стихи',
    reviewText: 'Заказывала стихи для детского праздника в садике. Алёна создала целую серию замечательных стихотворений, которые дети выучили с удовольствием. Воспитатели просили контакты - теперь будут заказывать стихи для всех утренников!',
    poemAuthor: 'Алёна Барабаш',
    icon: "/icons/ok.svg"
  },
  {
    id: 25,
    authorId: 6, // Юлия Шипулина
    avatarUrl: '/reviewers/andrey-p.jpg',
    stars: 5,
    date: '31 августа 2024 г.',
    reviewerName: 'Андрей Петухов',
    reviewTitle: 'Блестящее чувство юмора',
    reviewText: 'Юлия написала серию стихов для корпоративного календаря. Каждый месяц - настоящий шедевр! Особенно удались профессиональные шутки и отсылки к нашей корпоративной культуре. Теперь сотрудники с нетерпением ждут нового месяца, чтобы прочитать следующий стих.',
    poemAuthor: 'Юлия Шипулина',
    icon: "/icons/vk.svg"
  },
  {
    id: 26,
    authorId: 7, // Вадим Барков
    avatarUrl: '/reviewers/ekaterina-s.jpg',
    stars: 5,
    date: '1 августа 2024 г.',
    reviewerName: 'Екатерина Смирнова',
    reviewTitle: 'Оригинально и со вкусом',
    reviewText: 'Заказывала поздравление на свадьбу сестры. Вадим создал потрясающий текст, где юмор элегантно сочетается с искренними пожеланиями. Особенно порадовало, как он обыграл историю знакомства молодожёнов. Гости просили копию текста на память!',
    poemAuthor: 'Вадим Барков',
    icon: "/icons/ok.svg"
  }
];