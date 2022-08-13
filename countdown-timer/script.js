const olympicsTime = "26 Jul 2024"; //Olympics Date

const countDown = () => {

    
    const olymDate = new Date(olympicsTime);
    const currentDate = new Date();
    const totalSeconds = (olymDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    console.log(days, hours, minutes, seconds);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('mins').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (totalSeconds > 0) {
        document.getElementById('default-msg').style.display = 'none';
    }
    if (totalSeconds <= 0) {
        document.getElementById('timer').style.display = 'none';
        document.getElementById('default-msg').display = 'flex';
        
    }
};


setInterval(countDown, 1000);

