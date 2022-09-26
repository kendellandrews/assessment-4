
//Step 1: select HTML elements
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneBtn");
const fortuneRack = document.getElementById("displayFortunes");
const addForm = document.getElementById("addForm");
const addFortune = document.getElementById("addFortune");
const deleteInput = document.getElementById("deleteInput");

//Step 2: write funtion
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getAllFortunes = () => {
    axios.get("http://localhost:4000/api/all/")
        .then((res) => {
            console.log(res.data);
            const fortune = res.data
            fortuneRack.innerHTML = ''

            for(let i = 0; i < fortune.length; i++) {
                let newFortunes = document.createElement('li')
                newFortunes.textContent = fortune[i]
                fortuneRack.appendChild(newFortunes)
            }
            })

};

const addNewFortune = (event) => {
    event.preventDefault()

    let bodyObj = {
        item: addFortune.value
    }
    axios.post(`http://localhost:4000/api/addFortune`, bodyObj)
    .then((res) => {
        console.log(res.data)
            const fortune = res.data
            fortuneRack.innerHTML = ''

            for(let i = 0; i < fortune.length; i++) {
                let newFortunes = document.createElement('li')
                newFortunes.textContent = fortune[i]
                fortuneRack.appendChild(newFortunes)
            }
            addFortune.value =''
    })
};

const deleteItem = (event) => {
    event.preventDefault()

    axios.delete(`http://localhost:4000/api/deleteFortune/${deleteInput.value}`)
        .then((res) =>{
            console.log(res.data)
            const fortune = res.data
            fortuneRack.innerHTML = ''

            for(let i = 0; i < fortune.length; i++) {
                let newFortunes = document.createElement('li')
                newFortunes.textContent = fortune[i]
                fortuneRack.appendChild(newFortunes)
            }

            deleteInput.value = ''

        })

 }

//Step 3: add event listioner 
complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune)
allFortunesBtn.addEventListener('click', getAllFortunes)
addForm.addEventListener('submit', addNewFortune)
deleteForm.addEventListener('submit', deleteItem)
