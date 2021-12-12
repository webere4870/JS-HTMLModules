
function slideShow(index, parent, slidesName)
{


    let slides = document.querySelectorAll(slidesName);
    let parentNode = document.querySelector(parent);
    let tempNode;


    if(index === 1)
    {
        parentNode.insertBefore(slides[slides.length - 1], slides[0]);
    }
    else
    {
        tempNode = slides[0];
        slides[0].remove();
        parentNode.appendChild(tempNode);
    }


}

/*
    NOTE: You will need to change the positions on the :nth-of-type() property
    Use the following HTML and CSS as an example

    <button onclick="slideShow(1, '#innerContainer', '.slide')">Left</button>
        <button onclick="slideShow(12, '#innerContainer', '.slide')">Right</button>
    <div id="container">
        
        <div id="innerContainer">
            <div class="slide" id="one"></div>
            <div class="slide" id="two"></div>
            <div class="slide" id="three"></div>
            <div class="slide" id="four"></div>
            <div class="slide" id="five"></div>
        </div>
    </div>
    <script src="./slideshow.js"></script>

    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }


    body{
        height: 100vh;
        overflow-x: hidden;
    }

    #container
    {
        height: 100vh;
        width: 100vw;
        position: relative;

    }


    .slide
    {
        width: 60vw;
        height: 75vh;
        animation-duration: 1s;
        animation-timing-function: ease;
        animation-fill-mode: forwards;
        position: absolute;
        top: 0;
        transition-property: all;
        transition-timing-function: ease;
        transition-duration: 1s;
        top: 12.5vh;

    }


    .slide:nth-of-type(1)
    {
        left: -120vw;
        z-index: 3;
    }
    .slide:nth-of-type(2)
    {
        left: -50vw;
        z-index: 4;
    }
    .slide:nth-of-type(3)
    {
        left: 20vw;
        z-index: 5;
    
    }
    .slide:nth-of-type(4)
    {
        left: 90vw;
        z-index: 2;
        
    }
    .slide:nth-of-type(5)
    {
        left: 160vw;
        z-index: 1;
    }

    button{
        position: absolute;
        
        z-index: 10;
    }

    button:hover{
        cursor: pointer;
    }

    button:nth-of-type(1)
    {
        top: 0;
        left: 0;
    }

    button:nth-of-type(2)
    {
        top: 0;
        right: 0;
    }
*/