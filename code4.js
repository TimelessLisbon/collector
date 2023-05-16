gdjs.Percurso_32S_46_32RoqueCode = {};
gdjs.Percurso_32S_46_32RoqueCode.GDGMObjects1_1final = [];

gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1_1final = [];

gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1_1final = [];

gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1= [];
gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects2= [];
gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects3= [];
gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects1= [];
gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects2= [];
gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects3= [];
gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects1= [];
gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects2= [];
gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects3= [];
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


gdjs.Percurso_32S_46_32RoqueCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13190740);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team_Name", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Hour", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Minutes", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5))), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13192660);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 0, 1);
}}

}


};gdjs.Percurso_32S_46_32RoqueCode.userFunc0x7f2ab0 = function(runtimeScene) {
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
gdjs.Percurso_32S_46_32RoqueCode.userFunc0x7f2b58 = function(runtimeScene) {
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
gdjs.Percurso_32S_46_32RoqueCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13201404);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 100, 1);
}}

}


};gdjs.Percurso_32S_46_32RoqueCode.eventsList2 = function(runtimeScene) {

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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13203772);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Percurso_32S_46_32RoqueCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13205516);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects1);
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
}{gdjs.evtTools.window.openURL((( gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects1.length === 0 ) ? "" :gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects1[0].getString()), runtimeScene);
}}

}


};gdjs.Percurso_32S_46_32RoqueCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13209548);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects1.length === 0 ) ? "" :gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects1[0].getString()), false);
}}

}


};gdjs.Percurso_32S_46_32RoqueCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(3);
}{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects1[i].setString("S. Roque Entrada");
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects1[i].setString("https://www.google.com/maps/dir/Miradouro+de+S%C3%A3o+Pedro+de+Alc%C3%A2ntara,+Rua+de+S%C3%A3o+Pedro+de+Alc%C3%A2ntara,+Lisboa/38.713334,-9.1434176/@38.7137349,-9.144673,19.36z/data=!4m9!4m8!1m5!1m1!1s0xd19338037000861:0x1beb7972336de3a1!2m2!1d-9.1441708!2d38.7152302!1m0!3e2");
}
}{runtimeScene.getScene().getVariables().get("latif").setNumber(38.7128);
}{runtimeScene.getScene().getVariables().get("latsup").setNumber(38.7136);
}{runtimeScene.getScene().getVariables().get("longsup").setNumber(-(9.1429));
}{runtimeScene.getScene().getVariables().get("longinf").setNumber(-(9.1437));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects1);
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
}{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "desvio");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32S_46_32RoqueCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 100;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


gdjs.Percurso_32S_46_32RoqueCode.userFunc0x7f2ab0(runtimeScene);

}


{


gdjs.Percurso_32S_46_32RoqueCode.userFunc0x7f2b58(runtimeScene);

}


{

gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1.length = 0;

gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1_1final.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2);
gdjs.copyArray(runtimeScene.getObjects("percurso"), gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2.length;i<l;++i) {
    if ( !(gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2[i].isVisible()) ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2[k] = gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.Percurso_32S_46_32RoqueCode.mapOfGDgdjs_46Percurso_9532S_9546_9532RoqueCode_46GDpercursoObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1_1final.indexOf(gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2[j]) === -1 )
            gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1_1final.push(gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects2[j]);
    }
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
gdjs.copyArray(gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1_1final, gdjs.Percurso_32S_46_32RoqueCode.GDgmapsObjects1);
gdjs.copyArray(gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1_1final, gdjs.Percurso_32S_46_32RoqueCode.GDpercursoObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "maps2");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "maps2") >= 0.1;
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
}
{ //Subevents
gdjs.Percurso_32S_46_32RoqueCode.eventsList1(runtimeScene);} //End of subevents
}

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
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
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
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
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
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Latitude")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("latinf"));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Latitude")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("latsup"));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Longitude")) < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("longsup"));
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Longitude")) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("longinf"));
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
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Percurso_32S_46_32RoqueCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("desviodone")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "SARDINHAS";
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setString("https://www.google.com/maps/dir/Miradouro+de+S%C3%A3o+Pedro+de+Alc%C3%A2ntara,+Rua+de+S%C3%A3o+Pedro+de+Alc%C3%A2ntara,+Lisbon/R.+do+Gremio+Lusitano,+1200-212+Lisboa/@38.7096385,-9.1423492,16.56z/data=!4m14!4m13!1m5!1m1!1s0xd19338037000861:0x1beb7972336de3a1!2m2!1d-9.1441708!2d38.7152302!1m5!1m1!1s0xd1933800c8ea64f:0xd440c22e6438a440!2m2!1d-9.1443372!2d38.7133613!3e2");
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Desvio");
}}

}


};

gdjs.Percurso_32S_46_32RoqueCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects1.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects2.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDscoreObjects3.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects1.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects2.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDnext_95sceneObjects3.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects1.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects2.length = 0;
gdjs.Percurso_32S_46_32RoqueCode.GDURLObjects3.length = 0;
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

gdjs.Percurso_32S_46_32RoqueCode.eventsList5(runtimeScene);

return;

}

gdjs['Percurso_32S_46_32RoqueCode'] = gdjs.Percurso_32S_46_32RoqueCode;
