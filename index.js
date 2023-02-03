let btn=document.querySelector('#quotes-btn');
let copyBtn=document.querySelector('#copy-btn');
let author=document.querySelector('.author');
let title_image=document.querySelector('.title-image');
let quote=document.querySelector('.quotes');
let image=document.querySelector('.title-image');

const quotesArr=[
    {
     image:`https://res.cloudinary.com/djeqmi99q/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1675424348/cld-sample-5.jpg`,
     quotes:"We cannot solve problems with the kind of thinking we employed when we came up with them.",
     Author:"Albert Einstein"
    },
    {
        image:"https://xsgames.co/randomusers/avatar.php?g=male",
        quotes:"Learn as if you will live forever, live like you will die tomorrow.",
        Author:"Mahatma Gandhi"
       },
       {
        image:"https://xsgames.co/randomusers/avatar.php?g=pixel",
        quotes:"“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a\n feeling that you can become great too.”",
        Author:"Mark Twain"
       },
       {
        image:"https://xsgames.co/randomusers/avatar.php?g=female",
        quotes:"“When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.”",
        Author: "Eleanor Roosevelt"
       }
       
];



let quoteIndex=randomNumber()

btn.addEventListener('click',(e)=>{
    console.log('jndjdjdkkdjdjdjdj')
     showQuotes(quoteIndex)
})

function showQuotes(person){
    for(let i=0; i<quotesArr.length;i++){
        let text=quotesArr[quoteIndex]
        author.textContent=text.Author;
        quote.textContent=text.quotes
        image.src=text.image;
        copyBtn.addEventListener('click',()=>{
            navigator.clipboard.writeText(`${text.quotes}`);
        })

    }
}
let right=document.querySelector('.right')
right.addEventListener('click',()=>{
    quoteIndex++
   showQuotes(quoteIndex)
})
let left=document.querySelector('.left')
left.addEventListener('click',()=>{
    quoteIndex--
  showQuotes(quoteIndex)
})
function randomNumber(){
    let random=Math.floor(Math.random()*4);
    return random
}
