const cropString = require('./cropString');
const fetch = require('./fetchposts');
const main = require('./fetch');

// test('cropping string', () => {
//     expect(cropString('DomDomDom', 3)).toBe('Dom ...');
//
//
// });
//
// test('empty string', () => {
//     expect(cropString('', 30)).toBe('');
// });
//
// test('lorem ipsum', () => {
//     expect(cropString('Lorem ipsum', 5)).toBe('Lorem ...');
// });
//
// test('number', () => {
//     expect(cropString(13, 5)).toBe(13);
// });
//
// test('number', () => {
//     expect(cropString('1377', 2)).toBe("13 ...");
// });

// test('json data', () => {
//     expect(fetch.posts("https://jsonplaceholder.typicode.com/posts")).resolve.toBeNull();
//     expect(fetch.posts("https://jsonplaceholder.typicode.com/posts")).resolve.toBeDefined();
//     expect(fetch.posts("https://jsonplaceholder.typicode.com/posts")).resolve.toBeTruthy();
//     expect(fetch.posts("")).resolve.toBeTruthy();
//
// });

test('testing spoiler', () => {
    document.body.innerHTML = `<div class="container-lg bg-secondary bg-gradient d-flex justify-content-center">
    <div class="row row-cols-sm-2 row-cols-md-4 g-2 g-md-4 py-2 py-md-4"></div></div>`;
    let row = document.querySelector('.row');
    main.render({
        id: 1,
        userId: 1,
        photo: "https://via.placeholder.com/400x300.jpg",
        title: "TITLE",
        body: "dswaaafassafsaf",
    }, row);
    let expectedResult = `<div class="col-6 col-md-3">
                    <div class="card w-100 h-100 bg-light border border-3 border-success rounded-3" data-id-post="1">
                        <img src="https://via.placeholder.com/400x300.jpg" alt="" class="card-img-top img-fluid w-100">
                        <div class="card-body">
                            <h5 class="card-title text-success">TITLE</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Аноним 1</h6>
                            <p class="card-text text-hidden">dswaaafassafsaf</p>
                        </div>
                    </div>
                </div>`;
    expect(row.innerHTML).toEqual(expectedResult);

    let cardTitle = document.querySelector('.card-title');
    let cardText = document.querySelector('.card-text');
    cardTitle.simulate('click');
    expect(cardText.classList.contains('text-hidden')).toBeFalsy();
    cardTitle.simulate('click');
    expect(cardText.classList.contains('text-hidden')).toBeTruthy();
});