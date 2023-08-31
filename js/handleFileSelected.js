function handleFileSelected(input) {
    let file = input.files[0]
    console.log(file)
    let reader = new FileReader()
    reader.readAsDataURL(file)
    
    reader.onload = function () {
        let wrapper = document.createElement('div')
        wrapper.classList.add("preload-wrap");
        let img = document.createElement('img')
        img.src = reader.result  
        img.classList.add("preload-img");

        wrapper.appendChild(img)

        input.insertAdjacentElement("afterend", wrapper)
    }
}