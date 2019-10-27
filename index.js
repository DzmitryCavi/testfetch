
function draw(n,data){
    let canvas = document.querySelector("canvas"), 
        ctx = canvas.getContext("2d"),
        width = n, 
        height = n, 
        scale = canvas.width / n; 
    
    fetch(data)
        .then(response => response.json())
        .then(cdata => {
            
            let makeColor = function(d) {return d;};
            
            if(data == 'data/4x4.json'){
                makeColor = function(d){ return '#' + d; };
            }else if(data == 'data/32x32.json'){
                makeColor = function(d){ 
                 let [r,g,b,a] = d;
                    return `rgba(${r}, ${g}, ${b}, ${a})`; 
                };
            }

          
             for(var row = 0; row < height; row++) {
                 for(var col = 0; col < width; col++) {
                    ctx.fillStyle = makeColor(cdata[j][i]);
                    ctx.fillRect(col * scale, row * scale, scale, scale);
                }
            }
         });
}

let matrix32 = document.getElementById('32x32');
let matrix4 = document.getElementById('4x4');
matrix4.addEventListener('click', draw(4,'data/4x4.json'));
