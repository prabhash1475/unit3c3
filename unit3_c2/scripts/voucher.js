var wallet = JSON.parse(localStorage.getItem('user'))
// console.log(amount)
wallet.map(function (el) {
    document.getElementById("wallet_balance").innerText = el.amount
})

let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`

async function vaucher() {
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)

        console.log(data[0].vouchers)
        append(data[0].vouchers)

    }
    catch (err) {
        console.log('err:', err)

    }
}
vaucher()





let cart = []
const append = (data) => {
    // document.getElementById('voucher_list').innerText = null;
    data.forEach(function (el) {
        let div = document.createElement('div')
        div.setAttribute("class", "voucher")

        let title = document.createElement("p")
        title.innerText = el.name;

        let img = document.createElement('img')
        img.src = el.image;

        let price = document.createElement('p')
        price.innerText = el.price

        let btn = document.createElement('button')
        btn.innerText = "BUY"

        btn.setAttribute("class", "buy_voucher")
        btn.addEventListener("click", function () {
            cart.push(el)
            localStorage.setItem("purchase", JSON.stringify(cart))
        })

        div.append(img, title, price, btn)

        document.getElementById('voucher_list').append(div)
    })
}


