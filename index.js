const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


  

let container = document.getElementById("container")


  let heart0 = document.getElementById("heart0")
   let heart1 = document.getElementById("heart1")
    let heart2 = document.getElementById("heart2")
   
   
   let like0 = document.getElementById("like0")
    let like1 = document.getElementById("like1")
     let like2 = document.getElementById("like2")
   

 let count0 =0  
 function addLike0(){
     count0 += 1
     like0.innerHTML =  `${posts[0].likes +count0},942 likes` 
 }
 
 
 let count1 =0
 function addLike1(){
     count1 += 1
     like1.innerHTML =  `${posts[1].likes +count1},942 likes` 
 }
 
 let count2 =0
 function addLike2(){
     count2 += 1
     like2.innerHTML =  `${posts[2].likes + count2},942 likes` 
 }  
    


