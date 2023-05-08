gdjs.Percurso_32S_46_32RoqueCode = {};
gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects1_1final = [];

gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1_1final = [];

gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1= [];
gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects2= [];
gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects3= [];
gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1= [];
gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects2= [];
gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects3= [];
gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1= [];
gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects2= [];
gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects3= [];
gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1= [];
gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects2= [];
gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects3= [];
gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1= [];
gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2= [];
gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects3= [];
gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects1= [];
gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects2= [];
gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects3= [];
gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects1= [];
gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects2= [];
gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects3= [];


gdjs.Percurso_32S_46_32RoqueCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8365516);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 0, 1);
}}

}


};gdjs.Percurso_32S_46_32RoqueCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8785900);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 100, 1);
}}

}


};gdjs.Percurso_32S_46_32RoqueCode.userFunc0x97c8b8 = function(runtimeScene) {
"use strict";
var myVar = runtimeScene.getVariables().get("Longitude");
function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        myVar.setNumber(`${longitude}`);
    }

    function error(error) {
        myVar.setString("unable to retrieve your location" + error.code + error.message);
    }

    if (!navigator.geolocation) {
        myVar.setString('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}
geoFindMe();
};
gdjs.Percurso_32S_46_32RoqueCode.userFunc0x978288 = function(runtimeScene) {
"use strict";
var myVar = runtimeScene.getVariables().get("Latitude");
function geoFindMe() {
    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        myVar.setNumber(`${latitude}`);
    }

    function error(error) {
        myVar.setString("unable to retrieve your location" + error.code + error.message);
    }

    if (!navigator.geolocation) {
        myVar.setString('Geolocation is not supported by your browser');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }

}
geoFindMe();
};
gdjs.Percurso_32S_46_32RoqueCode.mapOfGDgdjs_46Percurso_9532S_9546_9532RoqueCode_46GDpercursoObjects2Objects = Hashtable.newFrom({"percurso": gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects2});
gdjs.Percurso_32S_46_32RoqueCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2);
gdjs.copyArray(gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1, gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects2);

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects2);
{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects2.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects2.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11231532);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Percurso_32S_46_32RoqueCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11626028);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1);
/* Reuse gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1 */
{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1[i].hide();
}
}{gdjs.evtTools.window.openURL("https://www.google.com/maps/dir/Miradouro+de+S%C3%A3o+Pedro+de+Alc%C3%A2ntara,+Rua+de+S%C3%A3o+Pedro+de+Alc%C3%A2ntara,+Lisboa/38.713334,-9.1434176/@38.7137349,-9.144673,19.36z/data=!4m9!4m8!1m5!1m1!1s0xd19338037000861:0x1beb7972336de3a1!2m2!1d-9.1441708!2d38.7152302!1m0!3e2", runtimeScene);
}}

}


};gdjs.Percurso_32S_46_32RoqueCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Desvio"), gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "desvio");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Percurso_32S_46_32RoqueCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 100;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "desvio") >= 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Desvio"), gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Percurso_32S_46_32RoqueCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "desvio") >= 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Desvio"), gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "desvio");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "desvio");
}{gdjs.evtTools.window.openURL("https://www.google.com/maps/dir/Miradouro+de+S%C3%A3o+Pedro+de+Alc%C3%A2ntara,+Rua+de+S%C3%A3o+Pedro+de+Alc%C3%A2ntara,+Lisboa/38.713334,-9.1434176/@38.7137349,-9.144673,19.36z/data=!4m9!4m8!1m5!1m1!1s0xd19338037000861:0x1beb7972336de3a1!2m2!1d-9.1441708!2d38.7152302!1m0!3e2", runtimeScene);
}}

}


{



}


{


gdjs.Percurso_32S_46_32RoqueCode.userFunc0x97c8b8(runtimeScene);

}


{


gdjs.Percurso_32S_46_32RoqueCode.userFunc0x978288(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}}

}


{

gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("percurso"), gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.Percurso_32S_46_32RoqueCode.mapOfGDgdjs_46Percurso_9532S_9546_9532RoqueCode_46GDpercursoObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1_1final.indexOf(gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects2[j]) === -1 )
            gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1_1final.push(gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "maps") >= 3;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1_1final, gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1[k] = gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1[k] = gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}
{ //Subevents
gdjs.Percurso_32S_46_32RoqueCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1[k] = gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1[k] = gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}
{ //Subevents
gdjs.Percurso_32S_46_32RoqueCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Latitude")) > 38.713334;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Latitude")) < 38.713334;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Longitude")) > -(9.143394);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Longitude")) < -(9.143394);
}
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("GM"), gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects2);
for (var i = 0, k = 0, l = gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects2.length;i<l;++i) {
    if ( gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects2[k] = gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects1_1final.indexOf(gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects2[j]) === -1 )
            gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects1_1final.push(gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects1_1final, gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Roque Entrada", false);
}}

}


};

gdjs.Percurso_32S_46_32RoqueCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects2.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects3.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects1.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects2.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDnoObjects3.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects1.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects2.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDyesObjects3.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects2.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects3.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects3.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects1.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects2.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects3.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects1.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects2.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDDesvioObjects3.length = 0;

gdjs.Percurso_32S_46_32RoqueCode.eventsList4(runtimeScene);

return;

}

gdjs['Percurso_32S_46_32RoqueCode'] = gdjs.Percurso_32S_46_32RoqueCode;
