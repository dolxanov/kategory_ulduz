


let marka = ['bmw', 'nissan', 'hundai']

let model = [
    ['f10', 'f30', 'm5', 'x5'],
    ['sunny', 'juke', 'maxima'],
    ['sonata', 'accent', 'elantra'],

]

let images = [
    ["https://images.unsplash.com/photo-1635770311293-b09d08a522fc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        'https://images.unsplash.com/photo-1655940645013-c2e6cd16b177?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1637610904926-ba7bf77de172?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    ["https://images.unsplash.com/photo-1592365559088-225c15dc3f10?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        'https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1611088135647-aa5eb1b5f390?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
    ["https://images.unsplash.com/photo-1681361270520-4cc3961d3b00?q=80&w=1457&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1633359064754-804ba55e733f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1654157925394-4b7809721149?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
]
// console.log(images[0][0])
markaSelect()

function markaSelect() {
    let marka_select = document.getElementById('marka');
    let data = `<option value="" selected disabled> Secin</option>`
    marka.forEach((item, index) => {
        data += `<option value="${index}">${item}</option>`
    });
    marka_select.innerHTML = data;
}

function modelSelect() {
    let model_select = document.getElementById('model');
    let marka_select_value = document.getElementById('marka').value;
    let data = `<option value="" selected disabled> Secin</option>`
    for (let i = 0; i < model[marka_select_value].length; i++) {
        data += `<option value="${i}"> ${model[marka_select_value][i]}</option>`

    };
    model_select.innerHTML = data;
}

function photoSelect() {
    let carsPhoto = document.getElementById('carsPhoto');
    let modelCar = document.getElementById('model').value;
    let data = ''
    for (let i = 0; i < images[modelCar].length; i++) {
        data = `<img src="" >${images[modelCar][i]}</img>`
        // console.log()
    }
    carsPhoto.innerHTML = data

console.log(modelCar)
}