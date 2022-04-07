export default [
  {
    filePath: 'forMentor/README',
    appRoute: 'for-mentor-readme',
    idx: 0,
    fileContent:
      '### Для ментора\n\n*Предварительно нужно прочитать всю доку для студента,\nчтобы понимать процесс обучения.*\n\nПредлагается ознакомиться с этой папкой для понимания,\nкак следует поступать ментору в различным ситуациях при работе со студентами.\n\n**Предлагается следующий порядок**:\n\n1. Вовлеченность студента\n2. TODO\n',
  },
  {
    filePath: 'forMentor/studentInvolvement',
    appRoute: 'for-mentor-student-involvement',
    idx: 1,
    fileContent:
      '### Вовлеченность студента\n\n#### Признаки, что студент не вовлечен учебу\n1. Студент постоянно фейлит или фейлит в тех же моментах, на которые ему явно указали.\n2. Студент крайне нестабилен времени на учебу, и не может это обосновать.\n3. Студент пропадает, не дает по себе обратной связи.\n4. Студент уделяет непропорционально больше времени своим "делам", особенно не учебе/работе, а, например, играм.\n\n#### Предлагаются следующие метрики для оценки вовлеченности\n1. Студент делает коммиты не в 1 день перед проверкой, а более стабильно.\n   Это видно по истории коммитов в github.\n2. Студент задает вопросы в чате или находит ответы сам.\n   Если студент говорит что не понял, и на вопрос "Почему не спросил об этом?" не может дать внятный ответ,\n   это может быть признаком того, что в работу над проблемой он и не погружался.\n3. Студент вовремя отправляет отчеты и все что от него требуется,\n   нет рецидивов по нарушению сроков или он может обосновать причину.\n4. Студент понимает, что от него ждут обратной связи и в курсе о процессах и новых событиях,\n   не вынуждает вас уточнять у него информацию лично.\n\n#### Как бороться с отсутствием вовлеченности?\n1. Явно указывать студенту, чем вы недовольны, может он просто что-то единовременно не понял.\n   При рецидивах не давать возможность студенту получать от вас ревью/прочие плюшки, пока он не исправит проблему.\n   Если эта мера не работает или в особых случаях - отстранять студента от учебы.\n2. Давать понять студентам, что не надо стесняться задавать вопросы и не ущемлять их комфорт в чате.\n3. Если студент не в курсе процессов, отправьте ему ссылку на документацию по его вопросу.\n   При рецидивах рекомендуется отвечать очень кратко и ссылаться на документацию без ссылок.\n   Если рецидивы не прекращаются и вас это не устраивает, нужно отстранять студента от учебы.\n4. Если вы знаете на что уходит ценное время студента (например, игры),\n   спросите его мнение и поделитесь своим. Сообщите ему, чем вы им недовольны.\n   Составьте с ним план ограничения этих активностей,\n   ведь возможно с помощью в виде вашего "кнута" он справится с этой проблемой.\n   Если не получается или нет встречного интереса, нужно отстранять студента от учебы.\n5. Если студент ссылается на свои "дела", чтобы оправдать свои проблемы.\n   В случае подозрений, попросите студента предоставить вам объективные доказательства его "дел"\n   или способ отслеживания его прогресса по этим "делам".\n   Если "дела" являются не верифицируемыми или личными и у них нет срока завершения,\n   то необходимо отстранять человека от учебы и запросить примерную дату, когда он исправит свои "дела".\n',
  },
  {
    filePath: 'forStudent/meetingsLogging',
    appRoute: 'for-student-meetings-logging',
    idx: 2,
    fileContent:
      '### Логирование посещения встреч\n\n#### Если вы пропустили запланированную встречу как член группы:\nТребованиям к посещению всех встреч в группе нет. Это ОК, если вас не было в плане на встречу.\n1. Нужно отправить отчет, если еще не отправили.\n2. Посмотреть запись встречи по вашему желанию или если вам скажут, что это необходимо.\n\n#### Если вы пропустили запланированную встречу, но вы не в группе:\n1. Требованиям к посещениям у вас тем более нет.\n2. Если хотите отметиться, вы можете это сделать, это приветствуется.\n\n#### Как отметиться, что посмотрел встречу?\nВ Notion есть колонка "Посмотрели" - добавляйте свое имя и (лайв/запись) к встрече.\n',
  },
  {
    filePath: 'forStudent/otherMeetings',
    appRoute: 'for-student-other-meetings',
    idx: 3,
    fileContent:
      '### Другие встречи\n\nНужно сразу оговорить, что никаких ограничений на голосовое общение нет.\nКогда хотим, тогда и общаемся. Однако у всех есть дела,\nи не всегда получится просто собраться вместе без календаря.\n\n*Встречи это **запланированное** на какое-то время общение.*\n\nВ группе могут проводиться встречи не только по JS,\nа также разные запланированные мероприятия, например:\n\n1. Ретро-встречи.\n2. Встречи для практики английского языка.\n3. Встречи по играм, просмотру фильмов и т.д.\n4. Если есть желание запланировать что-то другое - пожалуйста.\n\n**Что пробовали и не прижилось:**\n\n*1. Создавать опросы, когда кто-то сможет прийти на встречу.*\n\nЛучше создавать встречи на время, удобное вам самим. \nЕсли не уверены, будет ли ваша встреча кому-нибудь интересна,\nможно уточнить у 1-2х человек и договориться с ними о времени в частном порядке.\n\n*2. Стримы по играм не всегда могут зайти.*\n\nНе у всех есть игра или DLC к ней, нужные для игры.\nНо сыграть какую-нибудь Dota 2, как правило, не составляет проблем.\n\n**Как создать встречу в discord?**\n\nМожно легко сделать через интерфейс, если есть права на это. Скрин:\n[Создание события в Discord](https://disk.yandex.ru/i/Y-txT709kDitjA).\n\nПрава лучше давать всем, т.к. как правило желающих что-то сделать не так много.\nСтесняются, наверное. :)\n',
  },
  {
    filePath: 'forStudent/polls',
    appRoute: 'for-student-polls',
    idx: 4,
    fileContent:
      '### Опросы\n\n#### Вы можете сделать свой опрос.\n\n##### Опросы, если хотите что-то уточнить, узнать.\nНа эти опросы нет никаких ограничений, голосовать может и сам автор за что ему нравится.\nДействуйте как вам удобнее.\n\n##### Опросы по изменению общих процессов обучения/формата.\nИх также можно создавать, но это не означает, что ваше предложение гарантированно примут в случае победы.\nИтоговое решение за ментором(ами).\n\nМожно с уверенностью говорить, что менторы как минимум учтут ваши пожелания.\n\nВ своих опросах **автор** не может голосовать за конкретные варианты, нужно выбирать **все варианты**.\nИм можно отдать предпочтение в обсуждении, но не в голосовании.\n',
  },
  {
    filePath: 'forStudent/README',
    appRoute: 'for-student-readme',
    idx: 5,
    fileContent:
      '### Для студента\n\nНеобходимо ознакомиться с этой папкой для понимания всех процессов обучения.\nВ случае незнания процессов будет выдаваться атата.\n\n**Предлагается следующий порядок изучения**:\n\n1. Термины\n2. TODO: <Контент Артема>\n3. TODO: Посещение встреч\n4. Система баллов на кик\n5. Логирование посещения встреч\n6. Другие встречи\n7. Опросы\n8. TODO: Совместная разработка\n9. TODO: English\n10. TODO: Оффтоп\n',
  },
  {
    filePath: 'forStudent/studentKickSystem',
    appRoute: 'for-student-student-kick-system',
    idx: 6,
    fileContent:
      '### Система баллов на кик\n\n#### У нас есть **[Система баллов на кик]**:\n\n**От** 0 баллов - вы бог софт и хард скилов (ну или к вам нет вопросов и вы отлично учитесь).\n\n**До** 9-10 баллов - вас кикнут в течение суток или раньше, если ничего не изменится.\n\nБалы увеличиваются (плохо) из-за:\n+ **Не обновляющегося плана или плана не по формату. Плохие отчеты**\n+ **Не видно прогресса по моментам, на которые я явно указал вам**\n+ Не предоставили отчет перед встречей или несвоевременный отчет и не отписались почему так произошло\n+ Малого времени тратите на обучение (меньше плана на неделю и нет причины)\n+ Не в курсе общей информации и обновлений на сервере, не в курсе инфы в закрепах\n+ Нельзя достоверно определить, учитесь вы или нет (нет кода, коммиты раз в неделю, нет активности и вопросов)\n\nКак можно заметить, баллы можно получить из-за плохой учебы и отсутствия комментариев почему так происходит.\n\nБалы уменьшаются (хорошо) из-за:\n- Фикса моментов, из-за которых баллы были увеличены\n- Вы тратите больше времени на обучение и у этого виден прогресс\n- Вы держите в курсе, почему вы факапите, вы исправляете проблемы без рецедивов, у вас есть дедлайны\n- От вас есть обратная связь, на ping есть pong, а не timeout. От вас есть активность\n- Вы озвучиваете возникающие проблемы с обучением и не только, если они возникают\n- Вы общаетесь с коллегами по учебе, а не только с ментором\n\nКак можно заметить, баллы можно скинуть не только с помощью хорошей учебы,\nно и с помощью **общения/четкости/ясности** от вас\n\nПримерная формула начисления:\nЧем больше баллов, тем легче "заработать" больше.\nА если к вам вопросов немного то и баллы будет сложнее "заработать", тк есть кредит доверия к вам.\n\nВы можете спросить почему у вас столько баллов в оффтоп канале, но если баллов 4 или меньше,\nсмысла особо нет - это в рамках рабочего процесса\n\n#### Если хотите получать меньше баллов\n**Соблюдайте рекомендации выше** и рекомендации, описанные в статье **Чеклист**.\n',
  },
  {
    filePath: 'forStudent/terms',
    appRoute: 'for-student-terms',
    idx: 7,
    fileContent:
      '### Термины\nСервер, сообщество, чат - место, где происходит все общение.\n\nГруппа - сообщество внутри сообщества - обучающиеся в данный момент непосредственно под крылом ментора люди.\n\nВстреча, стрим, заседание - регулярные трансляции по основной тематике, проводимые, как правило, менторами.\n\nПомидор, сеньор-помидор - член группы, активный участник встреч, ради которого они в основном и делаются.\n\nRetired spriter, Retired, алкаш - человек, который был в группе, но пока не там по каким-либо причинам,\nлибо новичок, находящийся на ИС.\n\nИС, испытательный срок, тюрьма - период для новичка на сервере, чтобы ознакомиться с процессом и понять надо ли оно ему.\nА также срок для ментора, чтобы он решил, все ли ок с этим новичком.\n\nСпрайт, спринт, пленум - отрезок из встреч, после которого подводятся какие-либо итоги.\nУ нас он длится 3 недели по 2 встречи в неделю (6 встреч).\n\nОффтоп-встреча, другая встреча, событие, эвент - дополнительные регулярные или нерегулярные трансляции/общение голосом\nна разные темы. Могут проводиться и создаваться кем угодно.\n\nОффлайн-встреча - встреча в реале.\n\nОтчет - сообщение по строгому шаблону, отправляемое в назначенный срок перед встречей.\nОтправляются членами группы и теми, кто хочет туда вернуться, обязательно.\nОстальными по желанию, это приветствуется.\n\nРетро-встреча, ретроспектива, ретро - отдельная встреча по итогам спрайта\nдля подведения итогов и планирования целей.\n\nПлан встречи, план - очередь из людей, тем по которым они будут отвечать и примерного времени.\nФормируется за несколько часов до встречи по данным присланных отчетов.\nОтражает кто, в каком порядке, по каким темам и сколько времени будет общаться с ментором.\n\nСлот - пункт в плане встречи для отдельного человека. Можно сказать: "Приходи в четвертый слот".\nЭто значит, что вас будут ждать в плане на месте пункта 4.\n\nАтата, пиздюли - если вам сделано "атата", это значит что вас отчитали/поругали/вами недовольны.\nВыражается всегда с пояснениями, объясняющими, что не так.\nСерьезность и объем "атата" зависит от проступка и доходчиво понятна из слов выдающего. :)\n',
  },
  {
    filePath: 'Main',
    appRoute: 'main',
    idx: 8,
    fileContent:
      "### Personal info:\n* Name:           Andrei Kaimanov\n* Location:       Kaliningrad, Russia\n* Email:          an.cayman@ya.ru\n\n### Objective:\n* JS/Frontend developer\n\n### Education:\n> I don't have a Bachelor's, Master's or any relevant qualifications.\\\n> I finished a secondary school and then start working.\\\n> I am studying now at RS School on JS / Frontend [course](https://rs.school/js/).\n\n### Skills\n* HTML, CSS\n* JavaScript (Basic)\n* Git, [Github](https://github.com/ancaiman)\n* VS Code\n* Linux, Bash\n* English B1\n\n### Code example:\n```javascript\nfunction arithmetic(a, b, operator) {\n  switch(operator) {\n    case 'add':\n    return (a + b);\n    case 'subtract':\n    return (a - b);\n    case 'multiply':\n    return (a * b);\n    case 'divide':\n    return (a / b);\n  };\n}\n```\n",
  },
];
