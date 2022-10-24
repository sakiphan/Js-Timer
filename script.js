var interval = 0;


function savetolocalstrage(currentTime)
{
    localStorage.setItem('time',currentTime)
    
}

if(!localStorage.getItem('time'))
{
    savetolocalstrage(0);
}

else{
   interval = parseInt((localStorage.getItem('time')))
}


setInterval(function()
{
    interval++
    savetolocalstrage(interval)
    if( interval === 100 || interval > 100  )
    {
        interval = 0
    } else
    {
        
    
        $('#timer').text(toHHMMSS(interval));
    }
}, 1000);

var toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}


