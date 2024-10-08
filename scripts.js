const qualities = ["1080p", "720p", "480p"];
const baseURLs = {
    "baseURL1": "https://fermovi2.xyz/Series/Iranian/",
    "baseURL2": "https://dl2.fermovi2.xyz/Series/Iranian/"
};
const movies = [
			{ id: "Dariush", name: "داریوش" , cover: "https://static.filmnet.ir/images/ec/7c/ec7c254f7a5f41d79f25fbcb73ac3d30.jpg?w=300", baseURLKey: "baseURL1"},
			{ id: "Jomung", name: "زخم کاری" , cover: "https://static.cdn.asset.filimo.com/flmt/mov_85436_170657.jpg?width=165&quality=100&secret=Y9Lue4jayy9alFguPUR96w", baseURLKey: "baseURL2"},
			{ id: "Dar%20Entehaye%20Shab", name: "در انتهای شب" , cover: "https://static.filmnet.ir/images/82/c2/82c29918547848acb8cf27db708fca0a.jpg?w=300", baseURLKey: "baseURL2"},
			{ id: "Jangal%20Asphalt", name: "جنگل آسفالت" , cover: "https://static.namava.ir/Content/Upload/Images/94ccbda1-f974-4bc9-8313-71f8a9e5215c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294", baseURLKey: "baseURL2"},
			{ id: "The%20North%20Pole", name: "قطب شمال" , cover: "https://static.cdn.asset.filimo.com/flmt/mov_146002_164300.jpg?width=300&quality=100&secret=OuarfokLwgbsvcaRCJjoaQ", baseURLKey: "baseURL2"},
			{ id: "Viper%20of%20Tehran", name: "افعی تهران" , cover: "https://static.filmnet.ir/images/9c/3d/9c3d30bf03a4409bab0ffe9cb1abc131.jpg?w=300", baseURLKey: "baseURL1"},
			{ id: "Oscar", name: "اسکار", cover: "https://static.cdn.asset.filimo.com/flmt/mov_142032_162838-b.jpg?width=300&quality=100&secret=nvECTk1REnGbneSiSIh1mg", baseURLKey: "baseURL1"},	
			{ id: "Fereshtehs%20Sin", name: "گناه فرشه", cover: "https://static.cdn.asset.filimo.com/flmt/mov_141218_164145-b.jpg?width=300&quality=100&secret=vXFLcw3KAVBroirPa2bdEw", baseURLKey: "baseURL1"},
			{ id: "Accomplice", name: "شریک جرم", cover: "https://static.namava.ir/Content/Upload/Images/de156139-8064-4d8b-8a9f-c110dfc58bd7.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294", baseURLKey: "baseURL1"},
			{ id: "Neysan%20Abi", name: "نیسان آبی", cover: "https://static.cdn.asset.filimo.com/flmt/mov_94069_164717.jpg?width=300&quality=100&secret=PJdoJymQkoELqUJrXpqlaQ", baseURLKey: "baseURL1"},
			{ id: "Notebook", name: "دفترچه یادداشت", cover: "https://static.filmnet.ir/images/08/9e/089e2c2562e54087924ce688855bb296.jpg?w=300", baseURLKey: "baseURL1"},
			{ id: "Sedato", name: "صداتو", cover: "https://static.cdn.asset.filimo.com/flmt/mov_134635_163307.jpg?width=300&quality=100&secret=mfZHyieRcEP_5PqmTCcd7g", baseURLKey: "baseURL1"},
			{ id: "Heysiat", name: "حیثیت گمشده", cover: "https://static.cdn.asset.filimo.com/flmt/mov_134633_164498.jpg?width=300&quality=100&secret=C2blmku7EM111LFH9-mLIw", baseURLKey: "baseURL1"},
			{ id: "The%20Marsh", name: "مرداب", cover: "https://static.filmnet.ir/images/90/9a/909a0d116dcb4b1ab408758e578f4bfa.jpg?w=300", baseURLKey: "baseURL1"},
			{ id: "Mage%20tamoom%20omr%20chandta%20bahare", name: "مگه تموم عمر چند تا بهاره", cover: "https://static.cdn.asset.filimo.com/flmt/mov_134634_164248.jpg?width=300&quality=100&secret=_ASAkaM-CKJXaVyML3t3Ww", baseURLKey: "baseURL1"},
			{ id: "MafiaNights%20RealityShow", name: "شب های مافیا: زودیاک", cover: "https://static.cdn.asset.filimo.com/flmt/mov_137093_164382.jpg?width=300&quality=100&secret=lT8xNSG8SukIx3tBtkQtUA", baseURLKey: "baseURL1"},
			{ id: "The%20Godfather", name: "پدر خوانده", cover: "https://static.filmnet.ir/images/ff/70/ff700a13ff7b4bc2aa3118acf00e83a2.jpg?w=300", baseURLKey: "baseURL1"},
			{ id: "Rahayam%20Kon", name: "رهایم کن" , cover: "https://static.cdn.asset.filimo.com/flmt/mov_131383_162828.jpg?width=300&quality=100&secret=BDqa65VyqLIiwAjFZBYsVg", baseURLKey: "baseURL1"},
			{ id: "Actor", name: "آکتور" , cover: "https://static.namava.ir/Content/Upload/Images/9f62f552-5dbc-459c-bf66-74d2c1f6fc2f.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294", baseURLKey: "baseURL1"},
			{ id: "Fall", name: "سقوط" , cover: "https://static.cdn.asset.filimo.com/flmt/mov_130216_51679-b.jpg?width=300&quality=100&secret=fPQWoXUtSPOy313x1DSWfw", baseURLKey: "baseURL1"},
			{ id: "The%20Lion%20Skin", name: "پوست شیر" , cover: "https://static.filmnet.ir/images/94/97/9497730193a244bbbc71ea8a10c97e65.jpg?w=300", baseURLKey: "baseURL1"},
			{ id: "The%20Innocent", name: "بی گناه" , cover: "https://static.cdn.asset.filimo.com/flmt/mov_101725_164761.jpg?width=300&quality=100&secret=GKUK_FrTA138ytbbRqY7HA", baseURLKey: "baseURL1"},
			{ id: "Cold%20Blooded", name: "خون سرد" , cover: "https://static.filmnet.ir/images/59/89/59899627417242c8aa79334201e2a721.jpg?w=300", baseURLKey: "baseURL1"},
			{ id: "Raze%20Bagha", name: "راز بقا" , cover: "https://static.filmnet.ir/images/c6/99/c69906215a1841049c0c612168ac1307.jpg?w=300", baseURLKey: "baseURL1"},
			{ id: "Jadoogar", name: "جادوگر" , cover: "https://static.cdn.asset.filimo.com/flmt/mov_113958_162934.jpg?width=300&quality=100&secret=gFb53-lZP3_pLwNWabAqVA", baseURLKey: "baseURL1"},
			{ id: "Joker", name: "جوکر" , cover: "https://static.cdn.asset.filimo.com/flmt/mov_97965_164574.jpg?width=300&quality=100&secret=zBuvOuBlUIKeag5w_ySO5Q", baseURLKey: "baseURL1"},
			{ id: "Jeyran", name: "جیران" , cover: "https://static.cdn.asset.filimo.com/flmt/mov_85469_164653.jpg?width=300&quality=100&secret=q7B4IxKk6V8s_1cDN9aScw", baseURLKey: "baseURL1"},
            { id: "Mehmani", name: "مهمانی" , cover: "https://static.namava.ir/Content/Upload/Images/fd0928c0-3e51-450a-aec4-608b74ca0dcc.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294", baseURLKey: "baseURL1"},
			{ id: "Nobat%20Leili", name: "نوبت لیلی" , cover: "https://zbcdn.cloud/files/cache/10369_nobate%20leyli-instagram-post%20%283%29.4ac18b.jpg", baseURLKey: "baseURL1"},
			{ id: "Yaghi", name: "یاغی" , cover: "https://static.cdn.asset.filimo.com/flmt/mov_94071_162920.jpg?width=165&quality=100&secret=RAG-M8nTuqPMn59M_l1VfA", baseURLKey: "baseURL1"},
			{ id: "Khosoof", name: "خسوف", cover: "https://static.namava.ir/Content/Upload/Images/6e7e393a-175b-48fb-b17d-87d5a76bd879.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294", baseURLKey: "baseURL1"},
			{ id: "Khatoon", name: "خاتون", cover: "https://static.namava.ir/Content/Upload/Images/af1c46f4-3a5a-43fc-8fcc-9447b4e7a957.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294", baseURLKey: "baseURL1"},

        ];

const moviesContainer = document.getElementById('movies');
const searchBox = document.getElementById('search');
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

function createMovieElement(movie) {
    const container = document.createElement('div');
    container.className = 'container';
    container.dataset.name = movie.name;

    const coverWrapper = document.createElement('div');
    coverWrapper.className = 'cover-wrapper';

    const cover = document.createElement('img');
    cover.src = movie.cover;
    cover.alt = movie.name;
    coverWrapper.appendChild(cover);

    container.appendChild(coverWrapper);

    const title = document.createElement('h1');
    title.innerText = `${movie.name}`;
    container.appendChild(title);

    const qualityLinks = document.createElement('div');
    qualityLinks.className = 'quality-links';

    const baseURL = baseURLs[movie.baseURLKey];

    qualities.forEach(quality => {
        const link = document.createElement('a');
        link.href = `${baseURL}${movie.id}/${quality}/`;
        link.dataset.quality = quality;
        link.dataset.baseURL = baseURL;
        link.dataset.movieId = movie.id;
        link.dataset.movieName = movie.name; // اضافه کردن نام سریال به dataset
        link.innerHTML = `<i class="fas fa-play icon"></i> کیفیت ${quality}`;
        link.addEventListener('click', openModal);
        qualityLinks.appendChild(link);
    });

    container.appendChild(qualityLinks);
    return container;
}

function renderMovies(filter = "") {
    moviesContainer.innerHTML = "";
    movies.filter(movie => movie.name.includes(filter)).forEach(movie => {
        moviesContainer.appendChild(createMovieElement(movie));
    });
}

async function openModal(event) {
    event.preventDefault();
    const quality = event.target.dataset.quality;
    const baseURL = event.target.dataset.baseURL;
    const movieId = event.target.dataset.movieId;
    const movieName = event.target.dataset.movieName; // دریافت نام سریال
    const contentURL = `${baseURL}${movieId}/${quality}/`;

    try {
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent(contentURL));
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, 'text/html');
        const rows = Array.from(doc.querySelectorAll('a')).filter(a => /\.(mp4|mkv)$/.test(a.href));
        let links = rows.map(a => {
            return {
                title: a.textContent,
                href: `${contentURL}${a.getAttribute('href')}`
            };
        });

        // Sort links from last to first
        links = links.reverse();

        modalContent.innerHTML = `
            <div class="modal-header">
                <h2>${movieName} - ${links.length} قسمت - کیفیت ${quality}</h2>
                <div>
                    <button class="sort-button" onclick="toggleSortOrder()">تغییر سورت</button>
                    <button class="close" onclick="closeModalFunction()">بستن</button>
                </div>
            </div>
            <div class="modal-buttons"></div>
        `;
	
        const modalButtons = modalContent.querySelector('.modal-buttons');
        links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.href;
            linkElement.target = '_blank';
            linkElement.className = 'button-link';
            linkElement.innerText = link.title;
            modalButtons.appendChild(linkElement);
        });

        modal.dataset.sorted = "desc";
        modal.style.display = "block";
    } catch (error) {
        console.error('Error fetching directory contents:', error);
    }
}

function toggleSortOrder() {
    const modalButtons = modalContent.querySelector('.modal-buttons');
    const links = Array.from(modalButtons.children);
    const sortedOrder = modal.dataset.sorted === "desc" ? "asc" : "desc";
    
    links.reverse();
    modalButtons.innerHTML = "";
    links.forEach(link => {
        modalButtons.appendChild(link);
    });

    modal.dataset.sorted = sortedOrder;
}

function closeModalFunction() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

searchBox.addEventListener('input', (e) => {
    renderMovies(e.target.value);
});

// Initial render
renderMovies();