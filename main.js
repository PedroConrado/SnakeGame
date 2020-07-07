window.onload = function(){
            
    let table = document.getElementById("table");
    let context = table.getContext("2d");
    let points = 0;
    
    document.getElementById("points").innerHTML = points;
    
    const vel = 1;
    
    let vx = vy = 0;
    let px = py = 20;

    let lp = 25;
    let qp = 20;

    let ax = ay = 15;

    let trail = [];
    
    setInterval(game, 100);
    
    function game(){        
        
        px += vx;
        py += vy;

        if(px<0){
            px = qp-1;
        }
        if(px >qp-1){
            px = 0;
        }
        if(py<0){
            py = qp -1;
        }
        if(py >qp-1){
            py = 0;
        }

        context.fillStyle = "black";
        context.fillRect(0,0, table.width, table.height);
        
        context.fillStyle = "red";
        context.fillRect(ax*lp, ay*lp, lp, lp);

        context.fillStyle = "green";

        for(let i = 0; i < trail.length; i++){
            context.fillRect(trail[i].x*lp, trail[i].y*lp, lp, lp);
            if(trail[i].x == px && trail[i].y == py){
                vx = vy = 0;
                tail = 1;
                trail.shift();
                tail++;
                if(points != 0){
                    window.alert("You lose! Max points: " +points);
                    
                }
                points = 0;
                document.getElementById("points").innerHTML = points;
                                    
            }
        }
        trail.push({x:px, y:py})
        while(trail.length > tail){
            trail.shift();
        }
        if(ax==px && ay==py){
            tail++;
            ax = Math.floor(Math.random()*qp);
            ay = Math.floor(Math.random()*qp);
            points++;
            document.getElementById("points").innerHTML = points;
           
        }          
    }
    let lastInput = 0;
    document.addEventListener("keydown", keyPush);
    function keyPush(event){
        
        switch(event.keyCode){
        
            case 37:
                if(lastInput == 39) break;
                vx = -vel;
                vy = 0;
                lastInput = event.keyCode;
                break;
            
            case 38:
                if(lastInput == 40) break;
                vx = 0;
                vy = -vel;
                lastInput = event.keyCode;
                break;
            
            case 39:
                if(lastInput === 37) break;
                vx = vel;
                vy = 0;
                lastInput = event.keyCode;
                break;
            
            case 40:
                if(lastInput === 38) break;
                vx = 0;
                vy = vel;
                lastInput = event.keyCode;
                break;
            default:
                break;
        }
          
    }
}