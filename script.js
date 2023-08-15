let container = document.getElementById("container")


const fetchChicken = async () => {
    let getData = await fetch("./chicken.json")
    let data = await getData.json()
    let html = ``
    data.forEach((element, index) => {
        html += `<div class="col-lg-4">
        <div class="item">
            <div class="item-title" id="title-1">
                <h3>${element.name}</h3>
            </div>
            <p>
                ${element.description}
            </p>
            
        </div>
    </div>
</div>`
    });
    console.log(data)
    container.innerHTML = html
    console.log("Click")
}

const fetchBeef = async () => {
    let getData = await fetch("./beef.json")
    let data = await getData.json()
    let html = ``
    data.forEach((element, index) => {
        html += `<div class="col-lg-4">
        <div class="item">
            <div class="item-title" id="title-2">
                <h3>${element.name}</h3>
            </div>
            <p>
                ${element.description}
            </p>
            
        </div>
    </div>
</div>`
    });
    console.log(data)
    container.innerHTML = html
    console.log("Click")
}

const fetchSushi = async () => {
    let getData = await fetch("./sushi.json")
    let data = await getData.json()
    let html = ``
    data.forEach((element, index) => {
        html += `<div class="col-lg-4">
        <div class="item">
            <div class="item-title" id="title-3">
                <h3>${element.name}</h3>
            </div>
            <p>
                ${element.description}
            </p>
            
        </div>
    </div>
</div>`
    });
    console.log(data)
    container.innerHTML = html
    console.log("Click")
}