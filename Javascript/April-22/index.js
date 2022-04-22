const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

let indexToBeDisplayed = 0

const currentElement = reviews[indexToBeDisplayed]

const imageElement = document.querySelector("#image")
const nameElement = document.querySelector(".name")
const jobElement = document.querySelector(".job")
const textElement = document.querySelector(".text")

const nextBtn = document.querySelector("#next")
const prevBtn = document.querySelector("#prev")
const randomBtn = document.querySelector("#random")

nextBtn.addEventListener('click', displayNext)
prevBtn.addEventListener('click', displayPrev)

randomBtn.addEventListener('click', displayRandom)

function displayNext(){
    if(indexToBeDisplayed === reviews.length-1){
        indexToBeDisplayed = 0
    }else{
        indexToBeDisplayed++
    }
    console.log(indexToBeDisplayed)
    updateScreen( reviews[indexToBeDisplayed] )
}

function displayPrev(){
    if(indexToBeDisplayed === 0){
        indexToBeDisplayed = reviews.length-1
    }else{
        indexToBeDisplayed--
    }
    console.log(indexToBeDisplayed)
    updateScreen( reviews[indexToBeDisplayed] )
}

function displayRandom(){
    console.log("display random user details")
}

function updateScreen(virat){
    nameElement.innerText = virat.name
    jobElement.innerText = virat.job
    textElement.innerText = virat.text
    imageElement.src = virat.img
}

updateScreen(currentElement)