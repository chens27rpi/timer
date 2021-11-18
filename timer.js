window.isEngaged = false

function engageTimer() {
    window.isEngaged = !window.isEngaged
    console.log('timer:' + window.isEngaged)
    if (window.isEngaged) {
        pushbreakingNews('TIMER STARTED')
    }
}

function updateTimer(time) {
    const d = new Date();
    window.crhour = d.getHours();
    window.crminute = d.getMinutes();
    document.getElementById('properTime').innerHTML = crhour + '<br>' + crminute + ''

    if (!window.isEngaged) {
        return
    }




    if (!window.isStarted) {
        let spareHr = window.beginTimehr - window.crhour
        let totalMin = spareHr * 60 + (window.beginTimemin - window.crminute)
        document.getElementById('preStartProgress').style.width = 100 * (1 - totalMin / window.originalSpare) + '%'
        console.log('prestart progress:' + 100 * (1 - totalMin / window.originalSpare))
        if (totalMin == 0) {
            forceStart()
        }
    }

    else {
        let spareHr = window.endTimehr - window.crhour
        let totalMin = spareHr * 60 + (window.endTimemin - window.crminute)
        document.getElementById('postStartProgress').style.width = 100 * (1 - totalMin / window.originalSpare) + '%'
        console.log('prestart progress:' + 100 * (1 - totalMin / window.originalSpare))
        if (totalMin == 0) {
            timesUp()
        }
    }


}

function forceStart() {

    document.getElementById('timeEnd').className = 'timeEndpost'
    document.getElementById('timeStart').className = 'timeStartpost'

    document.getElementById('beginTime').innerHTML = crhour + '<br>' + crminute + '<br>'
    window.isStarted = true
    startAlert()
    setTimeout(function () { pushbreakingNews('TEST START') }, 3000)

}

function timesUp() {
    window.isStarted = false
    startAlert()
    setTimeout(pushbreakingNews, 3000)
    document.getElementById('timeStart').className = 'timeStartPre'
    document.getElementById('timeEnd').className = 'timeEndPre'
    document.getElementById('dir').className = 'dirpost'
    document.getElementById('locationdir').className = 'locationdirpost'
}

function startAlert() {
    document.getElementById('attentionGrabber').style.display = ''
    setTimeout(function () { document.getElementById('attentionGrabber').style.display = 'none' }, 3000)
}



function pushbreakingNews(news = 'THE TEST HAS ENDED') {
    document.getElementById('breakNewsLabel').innerHTML = news
    document.getElementById('breakingNews').style.display = ''

    setTimeout(function () { document.getElementById('breakingNews').style.display = 'none' }, 6500)
    let time = window.crhour + ':' + window.crminute
    let temp = '<div class="smolNotifLog" style="background: rgb(161 161 161 / 64%);width:100%;height: 57px;position:relative;margin-top:14px;backdrop-filter: blur(2px);filter: drop-shadow(14px 10px 5px rgba(0,0,0,0.3));overflow:hidden;">\
    <div style="position:absolute;height:100%;width: 17%;background: #ff000030;">\
        <h1 style="width:100%;text-align:right;margin:0;font-size: 40px;position:absolute;top: 11px;color: white;font-family:JuneBug2;">\
            i</h1>\
    </div>\
    <p style="font-size: 22px;position:absolute;left: 3vw;margin:0;width: 12vw;position:absolute;color: white;font-weight:900;">\
        '+ news + '</p>\
        <p style="font-size: 48px;color: #9999996b;position:absolute;top: -37px;right:2px;font-weight:900;">'+ time + '</p>\
        <div class="logMasker" style="position:absolute;top:-50%;left:-50%;"></div>\
    </div>'
    var du = document.createElement('DIV')
    du.innerHTML = temp
    //et childElm=fromStr.parseFromString(temp,'text/xml')
    document.getElementById('logWrapper').append(du.firstChild)
}



tick = setInterval(updateTimer, 1000);