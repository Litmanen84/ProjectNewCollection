const collection = [
    {
        title: 'À la recherche du temps perdu',
        author: 'Marcel Proust',
        releaseYear: '1913-1927',
        picture: 'assets/Proust.jpg',
        genre: ['Modernist', 'Novel'],
        summary: `"À la recherche du temps perdu" follows the narrator's recollections of childhood and experiences into adulthood in the late 19th-century and early 20th-century high-society France. Proust began to shape the novel in 1909; he continued to work on it until his final illness in the autumn of 1922 forced him to break off.`,
        link: 'https://www.goodreads.com/book/show/18796.In_Search_of_Lost_Time?ref=nav_sb_ss_3_10'
    },

    {
        title: 'Love in the Time of Cholera',
        author: 'Gabriel García Márquez',
        releaseYear: '1985',
        picture: 'assets/LoveInTheTimeOfCholera.jpg',
        genre: ['Romance Novel'],
        summary: 'In late 19th-century Cartagena, a river port in Colombia, Florentino Ariza falls in love at first sight with Fermina Daza. They secretly correspond, and she eventually agrees to marry him, but her father discovers their relationship and sends her to stay with distant relatives.',
        link: 'https://www.goodreads.com/book/show/9712.Love_in_the_Time_of_Cholera?ref=nav_sb_ss_1_11'
    },

    {
        title: 'Q',
        author: 'Luther Blisset',
        releaseYear: '1999',
        picture: 'assets/Q.jpg',
        genre: ['Historical novel'],
        summary: `The book follows the journey of an Anabaptist radical across Europe in the first half of the 16th century as he joins in various movements and uprisings that come as a result of the Protestant reformation. The book spans 30 years as he is pursued by 'Q' (short for "Qoèlet"), a spy for the Roman Catholic Church cardinal Giovanni Pietro Carafa.`,
        link: 'https://www.goodreads.com/book/show/94034.Q'
    },

    {
        title: 'Cancer Ward',
        author: 'Aleksandr Solzhenitsyn',
        releaseYear: '1968',
        picture: 'assets/CancerWard.jpg',
        genre: ['Semi-autobiographical novel', 'Political Fiction'],
        summary: `The plot focuses on a group of patients as they undergo crude and frightening treatment in a squalid hospital. The most complete and accurate fictional account of the nature of disease and its relation to love. It describes the characteristics of cancer; the physical, psychological, and moral effects on the victim; the conditions of the hospital; the relations of patients and doctors; the terrifying treatments; the possibility of death.`,
        link: 'https://www.goodreads.com/book/show/254316.Cancer_Ward?from_search=true&from_srp=true&qid=nYKlRkqYFy&rank=1'
    },

    {
        title: 'The Metamorphosis',
        author: 'Franz Kafka',
        releaseYear: '1915',
        picture: 'assets/Kafka.jpg',
        genre: ['Novella'],
        summary: `One of Kafka's best-known works, Metamorphosis tells the story of salesman Gregor Samsa, who wakes one morning to find himself inexplicably transformed into a huge insect (German: ungeheueres Ungeziefer, lit. "monstrous vermin") and subsequently struggles to adjust to this new condition. The novella has been widely discussed among literary critics, who have offered varied interpretations.`,
        link: 'https://www.goodreads.com/book/show/485894.The_Metamorphosis?ref=nav_sb_ss_1_8'
    },

    {
        title: 'Divine Comedy',
        author: 'Dante Alighieri',
        releaseYear: '1321',
        picture: 'assets/Commedia.jpg',
        genre: ['Narrative poem'],
        summary: `The poem discusses "the state of the soul after death and presents an image of divine justice meted out as due punishment or reward" and describes Dante's travels through Hell, Purgatory, and Heaven. The poem represents the soul's journey towards God, beginning with the recognition and rejection of sin (Inferno), followed by the penitent Christian life (Purgatorio), which is then followed by the soul's ascent to God (Paradiso).`,
        link: 'https://www.goodreads.com/book/show/6656.The_Divine_Comedy?ref=nav_sb_ss_1_13'
    },

    {
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        releaseYear: '1954',
        picture: 'assets/Rings.jpg',
        genre: ['Fantasy', 'Adventure'],
        summary: `In ancient times the Rings of Power were crafted by the Elven-smiths, and Sauron, the Dark Lord, forged the One Ring, filling it with his own power so that he could rule all others. But the One Ring was taken from him, and though he sought it throughout Middle-earth, it remained lost to him. After many ages it fell by chance into the hands of the hobbit Bilbo Baggins.`,
        link: 'https://www.goodreads.com/book/show/33.The_Lord_of_the_Rings?from_search=true&from_srp=true&qid=d1dd8TWp2K&rank=3'
    },

    {
        title: 'Guns, Germs, and Steel: The Fates of Human Societies',
        author: 'Jared Diamond',
        releaseYear: '1997',
        picture: 'assets/Diamond.jpg',
        genre: ['History', 'Anthropology'],
        summary: `Diamond has written a book of remarkable scope ... one of the most important and readable works on the human past published in recent years. Winner of the Pulitzer Prize and a national bestseller: the global account of the rise of civilization that is also a stunning refutation of ideas of human development based on race`,
        link: 'https://www.goodreads.com/book/show/1842.Guns_Germs_and_Steel?from_search=true&from_srp=true&qid=C3dMb2Ihi0&rank=1'
    },

    {
        title: 'The Name of the Rose',
        author: 'Umberto Eco',
        releaseYear: '1980',
        picture: 'assets/Rose.jpg',
        genre: ['Fiction', 'Historical'],
        summary: `The year is 1327. Benedictines in a wealthy Italian abbey are suspected of heresy, and Brother William of Baskerville arrives to investigate. When his delicate mission is suddenly overshadowed by seven bizarre deaths, Brother William turns detective. He collects evidence, deciphers secret symbols and coded manuscripts, and digs into the eerie labyrinth of the abbey, where “the most interesting things happen at night.`,
        link: 'https://www.goodreads.com/book/show/119073.The_Name_of_the_Rose?ref=nav_sb_ss_2_8'
    },

    {
        title: 'Blindness',
        author: 'José Saramago',
        releaseYear: '1995',
        picture: 'assets/Blindness.jpg',
        genre: ['Fiction', 'Dystopia'],
        summary: `A city is hit by an epidemic of "white blindness" that spares no one. Authorities confine the blind to an empty mental hospital, but there the criminal element holds everyone captive, stealing food rations, and assaulting women. There is one eyewitness to this nightmare who guides her charges through the barren streets. Blindness evokes the vivid and trembling horrors of the twentieth century, leaving readers with a powerful vision of the human spirit that's bound both by weakness and exhilarating strength.`,
        link: 'https://www.goodreads.com/book/show/40495148-blindness?ref=nav_sb_ss_2_5'
    }
]

function createCard(book) {
    let card = document.createElement('div');
    card.classList.add('card');

    let title = document.createElement('h2');
    title.textContent = book.title;
    title.classList.add('title');

    let author = document.createElement('h3');
    author.textContent = book.author;
    author.classList.add(`author`);

    let year = document.createElement('p');
    year.textContent = `Year of Release: ${book.releaseYear}`;
    year.classList.add('year');

    let image = document.createElement('img');
    image.src = book.picture;
    image.alt = book.title;
    image.classList.add('image');

    let genre = document.createElement('p');
    genre.textContent = Array.isArray(book.genre) ? book.genre.join(', ') : book.genre;
    genre.classList.add('genre');

    let summary = document.createElement('p');
    summary.textContent= book.summary;
    summary.classList.add('summary');

    let link = document.createElement('a');
    link.href = book.link;
    link.target = '_blank';
    link.classList.add('link');

    let linkIcon = document.createElement('img');
    linkIcon.src = 'assets/goodread.jpg';
    linkIcon.alt = 'GoodReads';
    linkIcon.classList.add('link-icon');

    let linkText = document.createElement('span');
    linkText.textContent = 'Check it on Goodreads';
    linkText.classList.add('link-text');

    link.appendChild(linkIcon);
    link.appendChild(linkText);


    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(year);
    card.appendChild(genre);
    card.appendChild(summary);
    card.appendChild(link);

    
    return card;
}

function displayCollection() {
    let container = document.getElementById('container');

    container.innerHTML = '';

    collection.forEach(book => {
        let card = createCard(book);
        container.appendChild(card);
    });
}

window.onload = displayCollection;