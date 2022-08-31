var quoteNum = Math.floor(Math.random() * (6 - 1)) + 1;
var quoteArr = ["<b>ไม่พยายามก็เป็นไอ้ขี้แพ้นะเว้ย","<b>อย่าพึ่งหยุดดิวะ","<b>ถึงเราหยุดตอนนี้<br/>แต่คนอื่นยังทำอยู่นะ" ,"<b>กากจังวะ<br/>แค่นี้เองอ๋อ","<b>ขี้แพ้จังวะ","<b>จะหยุดแล้วหรอ"];

var div = document.createElement('div');
var img = document.createElement('img');
img.src = 'https://pbs.twimg.com/media/FbgUQtWVsAAS6m5?format=jpg&name=large';
var bg = document.createElement('div');
var idlediv = document.createElement('div');
var outer = document.createElement('div');
var inner = document.createElement('div');
outer.className ='outertext';
inner.className = 'innertext';
outer.appendChild(inner);
div.appendChild(outer);
inner.innerHTML = quoteArr[quoteNum];
idlediv.setAttribute('id', 'idle');
idlediv.appendChild(div);
idlediv.appendChild(bg);

// div.innerHTML = '<div class="outertext"><div class="innertext">เสี่ยวๆๆๆๆ</div></div>';
    bg.className = 'bg';
    bg.appendChild(img);
    img.className='backy';

    document.body.appendChild(idlediv);
    
    

        var mousetimeout;
var screensaver_active = false;
var idletime = 6;

function show_screensaver(){
    $('#idle').fadeIn();
        screensaver_active = true;
}

function stop_screensaver(){
    $('#idle').fadeOut();
    screensaver_active = false;
}

$(document).mousemove(function(){
    clearTimeout(mousetimeout);
	
    if (screensaver_active) {
        stop_screensaver();
    }

    mousetimeout = setTimeout(function(){
        show_screensaver();
    }, 1000 * idletime); // 5 secs			
});


        