function enableTextAreaCheckList()
{
    document.getElementById('textAreaCheckListTarea').style.display = '';
}

function disableTextAreaCheckList()
{
    document.getElementById('textAreaCheckList').innerHTML=document.getElementById('textAreaCheckListTarea').value.replace(/\\n/g, "</br>").replace(/\[/g, "<div style='background:red;color:white;opacity:0.5'>").replace(/\]/g, "</div>");

   if(window.isStarted){ pushbreakingNews('Test Notice Updated')}
    document.getElementById('textAreaCheckListTarea').style.display = 'none';
}

function enableTextAreaAnnouncement()
{
    document.getElementById('textAreaAnnouncementTarea').style.display = '';
}

function disableTextAreaAnnouncement()
{
    document.getElementById('textAreaAnnouncement').innerHTML=document.getElementById('textAreaAnnouncementTarea').value.replace(/\\n/g, "</br>").replace(/\[/g, "<div style='background:red;color:white;opacity:0.5'>").replace(/\]/g, "</div>");
    if(window.isStarted){pushbreakingNews('Test Notice Updated')}
    document.getElementById('textAreaAnnouncementTarea').style.display = 'none';
}

function setBeginTime(){
    document.getElementById('beginTimeTarea').style.display = '';
    document.getElementById('beginTime').style.display = 'none';
    document.getElementById('bTimeLabel').style.display = 'none';
}

function disablebTimeTarea(){
    beginTime=document.getElementById('beginTimeTarea').value;
    //get first 2 letters of beginTime
    window.beginTimehr=beginTime.substring(0,2);
    //get last 2 letters of beginTime
    window.beginTimemin=beginTime.substring(2,4);
    //hide text area
    document.getElementById('beginTimeTarea').style.display = 'none';
    document.getElementById('beginTime').style.display = '';
    document.getElementById('beginTime').innerHTML=beginTimehr+'<br>'+beginTimemin+'<br>'
    document.getElementById('bTimeLabel').style.display = '';
    if(window.isStarted){pushbreakingNews('Test Time Updated')}
    let spareHr=window.beginTimehr-window.crhour
    window.originalSpare=spareHr*60+(window.beginTimemin-window.crminute)
    window.isStarted=false
    
}

function setEndTime(){
    document.getElementById('endTimeTarea').style.display = '';
    document.getElementById('endTime').style.display = 'none';
    document.getElementById('eTimeLabel').style.display = 'none';
    if(window.isStarted){pushbreakingNews('Test Time Updated')}

    
}

function enableTextAreadoneList(){
    document.getElementById('textAreadoneListTarea').style.display = '';
}

function disableTextAreadoneList(){
    document.getElementById('textdoneList').innerHTML=document.getElementById('textAreadoneListTarea').value.replace(/\\n/g, "</br>").replace(/\[/g, "<div style='background:red;color:white;opacity:0.5'>").replace(/\]/g, "</div>");
    if(window.isStarted){pushbreakingNews('Test Notice Updated')}
    document.getElementById('textAreadoneListTarea').style.display = 'none';
}

function disableeTimeTarea(){
    endTime=document.getElementById('endTimeTarea').value;
    //get first 2 letters of endTime
    window.endTimehr=endTime.substring(0,2);
    //get last 2 letters of endTime
    window.endTimemin=endTime.substring(2,4);
    //hide text area
    document.getElementById('endTimeTarea').style.display = 'none';
    document.getElementById('endTime').style.display = '';
    document.getElementById('endTime').innerHTML=endTimehr+'<br>'+endTimemin+'<br>'
    document.getElementById('eTimeLabel').style.display = '';
    if(window.isStarted){pushbreakingNews('Test Time Updated')}
    let spareHr=window.endTimehr-window.crhour
    window.originalSpare=spareHr*60+(window.endTimemin-window.crminute)
    window.isStarted=false
}

function getDrName(){
    document.getElementById('drinput').style.display = '';
    
}

function disabledrname(){
    document.getElementById('drname').innerHTML=' <span style="color:white;background: #00000075;padding:3px;margin:2px;font-family:JuneBug;font-weight:900;">INSTRUCTOR</span>'+document.getElementById('drinput').value;
    document.getElementById('drinput').style.display = 'none';
}

function enablefacitarea(){
    document.getElementById('facitarea').style.display = '';
}

function disablefacitarea(){
    document.getElementById('facilist').innerHTML='<div style="color:white;background: #00000075;padding: 2px;margin: 0vh;font-family:JuneBug;font-weight:900;margin-bottom: 1.9vh;font-size: 2vh;">Facilitators</div>'+document.getElementById('facitarea').value.replace(/\\n/g, "</br>").replace(/\[/g, "<div style='background:red;color:white;opacity:0.5'>").replace(/\]/g, "</div>");

    document.getElementById('facitarea').style.display = 'none';
}