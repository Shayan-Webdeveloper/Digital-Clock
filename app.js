function showTime() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    // let currentTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    console.log(tt);
    
    // let tt = ;
    if (hours > 12 && hours < 14 && hours > 11) {
        hours = 1;
        tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} PM`
    }
    else if (hours > 13 && hours < 15) {
        hours = 2;
        tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} PM`
    }
    else if (hours > 14 && hours < 16) {
        hours = 3;
        tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} PM`
    }
        else if (hours > 15 && hours < 17) {
            hours = 4;
            tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} PM`
        }
        else if (hours > 16 && hours < 18) {
            hours = 5;
            tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} PM`
        }
        else if (hours > 17 && hours < 19) {
            hours = 6;
            tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} PM`
        }
        else if (hours > 18 && hours < 20) {
            hours = 7;
            tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} PM`
        }
        else if (hours > 19 && hours < 21) {
            hours = 8;
            tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} PM`
        }
        else if (hours > 20 && hours < 22) {
            hours = 9;
            tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} PM`
        }
        else if (hours > 21 && hours < 23) {
            hours = 10;
            tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} PM`
        }
        else if (hours > 22 && hours < 24) {
            hours = 11;
            tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} PM`
        }
        else if (hours === 12) {
            hours = 12;
            tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} PM`
        }
    else if (hours === 0) {
        hours = 12;
        tt = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds} AM`
    }
    else {
        tt += " AM";
    }

    // if(hours < 12){
    //      tt += " AM";
    document.querySelector(".clock span").textContent = tt;
    
}
setInterval(showTime, 1000);