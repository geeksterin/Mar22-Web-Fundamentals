
const userList = [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "first_name": "George",
      "last_name": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "first_name": "Janet",
      "last_name": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "first_name": "Emma",
      "last_name": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
      "id": 4,
      "email": "eve.holt@reqres.in",
      "first_name": "Eve",
      "last_name": "Holt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
      "id": 5,
      "email": "charles.morris@reqres.in",
      "first_name": "Charles",
      "last_name": "Morris",
      "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
      "id": 6,
      "email": "tracey.ramos@reqres.in",
      "first_name": "Tracey",
      "last_name": "Ramos",
      "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
  ]

  const h1 = document.querySelector('h1')

  for(let i = 0; i < userList.length; i++){
    console.log(userList[i])
    
    // const outerDiv = document.createElement('div')
    // const para = document.createElement('p')
    // para.innerText = "Name : " + userList[i].first_name + ' ' + userList[i].last_name
    // const email = document.createElement('p')
    // email.innerText = "Email : " + userList[i].email
    // const image = document.createElement('img')
    // image.src = userList[i].avatar

    // outerDiv.appendChild(para)
    // outerDiv.appendChild(image)
    // outerDiv.appendChild(email)
    // h1.appendChild(outerDiv)

    // const htmlContent = `
    // <p>Name in diff way : ${userList[i].first_name} ${userList[i].last_name}</p>
    // <img src=${userList[i].avatar} />
    // <p>Email : ${userList[i].email}</p>
    // `
    // outerDiv.innerHTML = htmlContent

    const element = 
    `
    <div class="user">
        <p>Name in diff way : ${userList[i].first_name} ${userList[i].last_name}</p>
        <img src=${userList[i].avatar} />
        <p>Email : ${userList[i].email}</p>
    </div>
    `
    h1.innerHTML = h1.innerHTML + element

  }

  