gdjs.Percurso_32CarmoCode = {};
gdjs.Percurso_32CarmoCode.GDGMObjects1_1final = [];

gdjs.Percurso_32CarmoCode.GDgmapsObjects1_1final = [];

gdjs.Percurso_32CarmoCode.GDpercursoObjects1_1final = [];

gdjs.Percurso_32CarmoCode.GDscoreObjects1= [];
gdjs.Percurso_32CarmoCode.GDscoreObjects2= [];
gdjs.Percurso_32CarmoCode.GDscoreObjects3= [];
gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects1= [];
gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects2= [];
gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects3= [];
gdjs.Percurso_32CarmoCode.GDURLObjects1= [];
gdjs.Percurso_32CarmoCode.GDURLObjects2= [];
gdjs.Percurso_32CarmoCode.GDURLObjects3= [];
gdjs.Percurso_32CarmoCode.GDURLdesvioObjects1= [];
gdjs.Percurso_32CarmoCode.GDURLdesvioObjects2= [];
gdjs.Percurso_32CarmoCode.GDURLdesvioObjects3= [];
gdjs.Percurso_32CarmoCode.GDDesvioObjects1= [];
gdjs.Percurso_32CarmoCode.GDDesvioObjects2= [];
gdjs.Percurso_32CarmoCode.GDDesvioObjects3= [];
gdjs.Percurso_32CarmoCode.GDokdesvioObjects1= [];
gdjs.Percurso_32CarmoCode.GDokdesvioObjects2= [];
gdjs.Percurso_32CarmoCode.GDokdesvioObjects3= [];
gdjs.Percurso_32CarmoCode.GDnoObjects1= [];
gdjs.Percurso_32CarmoCode.GDnoObjects2= [];
gdjs.Percurso_32CarmoCode.GDnoObjects3= [];
gdjs.Percurso_32CarmoCode.GDyesObjects1= [];
gdjs.Percurso_32CarmoCode.GDyesObjects2= [];
gdjs.Percurso_32CarmoCode.GDyesObjects3= [];
gdjs.Percurso_32CarmoCode.GDpercursoObjects1= [];
gdjs.Percurso_32CarmoCode.GDpercursoObjects2= [];
gdjs.Percurso_32CarmoCode.GDpercursoObjects3= [];
gdjs.Percurso_32CarmoCode.GDgmapsObjects1= [];
gdjs.Percurso_32CarmoCode.GDgmapsObjects2= [];
gdjs.Percurso_32CarmoCode.GDgmapsObjects3= [];
gdjs.Percurso_32CarmoCode.GDGMObjects1= [];
gdjs.Percurso_32CarmoCode.GDGMObjects2= [];
gdjs.Percurso_32CarmoCode.GDGMObjects3= [];


gdjs.Percurso_32CarmoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12790860);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12791660);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 0, 1);
}}

}


};gdjs.Percurso_32CarmoCode.userFunc0x8f15a8 = function(runtimeScene) {
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
gdjs.Percurso_32CarmoCode.userFunc0x8f1880 = function(runtimeScene) {
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
gdjs.Percurso_32CarmoCode.mapOfGDgdjs_46Percurso_9532CarmoCode_46GDpercursoObjects2Objects = Hashtable.newFrom({"percurso": gdjs.Percurso_32CarmoCode.GDpercursoObjects2});
gdjs.Percurso_32CarmoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12802892);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "notification-140376.mp3", false, 100, 1);
}}

}


};gdjs.Percurso_32CarmoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32CarmoCode.GDgmapsObjects2);
gdjs.copyArray(gdjs.Percurso_32CarmoCode.GDnoObjects1, gdjs.Percurso_32CarmoCode.GDnoObjects2);

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32CarmoCode.GDyesObjects2);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnoObjects2.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnoObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDyesObjects2.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDyesObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDgmapsObjects2.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDgmapsObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12805652);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Percurso_32CarmoCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12807540);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32CarmoCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32CarmoCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32CarmoCode.GDnoObjects1);
/* Reuse gdjs.Percurso_32CarmoCode.GDyesObjects1 */
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDgmapsObjects1[i].hide();
}
}{gdjs.evtTools.window.openURL((( gdjs.Percurso_32CarmoCode.GDURLObjects1.length === 0 ) ? "" :gdjs.Percurso_32CarmoCode.GDURLObjects1[0].getString()), runtimeScene);
}}

}


};gdjs.Percurso_32CarmoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12814940);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects1);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects1.length === 0 ) ? "" :gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects1[0].getString()), false);
}}

}


};gdjs.Percurso_32CarmoCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12818196);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "message-incoming-132126.mp3", false, 100, 1);
}}

}


};gdjs.Percurso_32CarmoCode.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "desvio") >= 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Desvio"), gdjs.Percurso_32CarmoCode.GDDesvioObjects2);
gdjs.copyArray(runtimeScene.getObjects("okdesvio"), gdjs.Percurso_32CarmoCode.GDokdesvioObjects2);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDDesvioObjects2.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDDesvioObjects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDokdesvioObjects2.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDokdesvioObjects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "desvio");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "desvio");
}
{ //Subevents
gdjs.Percurso_32CarmoCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Desvio"), gdjs.Percurso_32CarmoCode.GDDesvioObjects2);
gdjs.copyArray(runtimeScene.getObjects("okdesvio"), gdjs.Percurso_32CarmoCode.GDokdesvioObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDDesvioObjects2.length;i<l;++i) {
    if ( gdjs.Percurso_32CarmoCode.GDDesvioObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32CarmoCode.GDDesvioObjects2[k] = gdjs.Percurso_32CarmoCode.GDDesvioObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDDesvioObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDokdesvioObjects2.length;i<l;++i) {
    if ( gdjs.Percurso_32CarmoCode.GDokdesvioObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32CarmoCode.GDokdesvioObjects2[k] = gdjs.Percurso_32CarmoCode.GDokdesvioObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDokdesvioObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Percurso_32CarmoCode.GDDesvioObjects2 */
gdjs.copyArray(runtimeScene.getObjects("URLdesvio"), gdjs.Percurso_32CarmoCode.GDURLdesvioObjects2);
/* Reuse gdjs.Percurso_32CarmoCode.GDokdesvioObjects2 */
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDDesvioObjects2.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDDesvioObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDokdesvioObjects2.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDokdesvioObjects2[i].hide();
}
}{gdjs.evtTools.window.openURL((( gdjs.Percurso_32CarmoCode.GDURLdesvioObjects2.length === 0 ) ? "" :gdjs.Percurso_32CarmoCode.GDURLdesvioObjects2[0].getString()), runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}}

}


};gdjs.Percurso_32CarmoCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32CarmoCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("URLdesvio"), gdjs.Percurso_32CarmoCode.GDURLdesvioObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(6);
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects1[i].setString("Carmo Enigma");
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDURLObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDURLObjects1[i].setString("https://www.google.com/maps/dir/38.713334,-9.1434176/38.7121016,-9.1394391/@38.7120503,-9.1402725,19.32z/data=!4m9!4m8!1m5!3m4!1m2!1d-9.142538!2d38.7123942!3s0xd19347f775adce9:0x3555aca2ba0a55ae!1m0!3e2");
}
}{runtimeScene.getScene().getVariables().get("latif").setNumber(38.7116);
}{runtimeScene.getScene().getVariables().get("latsup").setNumber(38.7124);
}{runtimeScene.getScene().getVariables().get("longsup").setNumber(-(9.1393));
}{runtimeScene.getScene().getVariables().get("longinf").setNumber(-(9.1401));
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDURLdesvioObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDURLdesvioObjects1[i].setString("https://www.google.com/maps/dir/Igreja+de+S%C3%A3o+Roque,+Largo+Trindade+Coelho,+Lisbon/R.+da+Oliveira+ao+Carmo,+1200-309+Lisboa/@38.7118162,-9.1422618,17.32z/data=!4m14!4m13!1m5!1m1!1s0xd1933808785eccd:0x89da4a0e16eafcce!2m2!1d-9.1434533!2d38.7135965!1m5!1m1!1s0xd19338082abdd67:0xa0c3cf2fee570c0b!2m2!1d-9.1417341!2d38.7127247!3e2");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Desvio"), gdjs.Percurso_32CarmoCode.GDDesvioObjects1);
gdjs.copyArray(runtimeScene.getObjects("URL"), gdjs.Percurso_32CarmoCode.GDURLObjects1);
gdjs.copyArray(runtimeScene.getObjects("URLdesvio"), gdjs.Percurso_32CarmoCode.GDURLdesvioObjects1);
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32CarmoCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32CarmoCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("okdesvio"), gdjs.Percurso_32CarmoCode.GDokdesvioObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32CarmoCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDokdesvioObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDokdesvioObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDgmapsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDDesvioObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDDesvioObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDURLObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDURLObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDURLdesvioObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDURLdesvioObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "desvio");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDokdesvioObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDokdesvioObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Percurso_32CarmoCode.GDokdesvioObjects1[i].getWidth())) / 2);
}
}
{ //Subevents
gdjs.Percurso_32CarmoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32CarmoCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32CarmoCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32CarmoCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{



}


{


gdjs.Percurso_32CarmoCode.userFunc0x8f15a8(runtimeScene);

}


{


gdjs.Percurso_32CarmoCode.userFunc0x8f1880(runtimeScene);

}


{

gdjs.Percurso_32CarmoCode.GDgmapsObjects1.length = 0;

gdjs.Percurso_32CarmoCode.GDpercursoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32CarmoCode.GDgmapsObjects1_1final.length = 0;
gdjs.Percurso_32CarmoCode.GDpercursoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32CarmoCode.GDgmapsObjects2);
gdjs.copyArray(runtimeScene.getObjects("percurso"), gdjs.Percurso_32CarmoCode.GDpercursoObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDgmapsObjects2.length;i<l;++i) {
    if ( !(gdjs.Percurso_32CarmoCode.GDgmapsObjects2[i].isVisible()) ) {
        isConditionTrue_2 = true;
        gdjs.Percurso_32CarmoCode.GDgmapsObjects2[k] = gdjs.Percurso_32CarmoCode.GDgmapsObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDgmapsObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.Percurso_32CarmoCode.mapOfGDgdjs_46Percurso_9532CarmoCode_46GDpercursoObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32CarmoCode.GDgmapsObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32CarmoCode.GDgmapsObjects1_1final.indexOf(gdjs.Percurso_32CarmoCode.GDgmapsObjects2[j]) === -1 )
            gdjs.Percurso_32CarmoCode.GDgmapsObjects1_1final.push(gdjs.Percurso_32CarmoCode.GDgmapsObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.Percurso_32CarmoCode.GDpercursoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32CarmoCode.GDpercursoObjects1_1final.indexOf(gdjs.Percurso_32CarmoCode.GDpercursoObjects2[j]) === -1 )
            gdjs.Percurso_32CarmoCode.GDpercursoObjects1_1final.push(gdjs.Percurso_32CarmoCode.GDpercursoObjects2[j]);
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
gdjs.copyArray(gdjs.Percurso_32CarmoCode.GDgmapsObjects1_1final, gdjs.Percurso_32CarmoCode.GDgmapsObjects1);
gdjs.copyArray(gdjs.Percurso_32CarmoCode.GDpercursoObjects1_1final, gdjs.Percurso_32CarmoCode.GDpercursoObjects1);
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
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32CarmoCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32CarmoCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32CarmoCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32CarmoCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32CarmoCode.GDgmapsObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Percurso_32CarmoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32CarmoCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32CarmoCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32CarmoCode.GDnoObjects1[k] = gdjs.Percurso_32CarmoCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32CarmoCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32CarmoCode.GDnoObjects1[k] = gdjs.Percurso_32CarmoCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32CarmoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32CarmoCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32CarmoCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32CarmoCode.GDyesObjects1[k] = gdjs.Percurso_32CarmoCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32CarmoCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32CarmoCode.GDyesObjects1[k] = gdjs.Percurso_32CarmoCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps2");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps2");
}
{ //Subevents
gdjs.Percurso_32CarmoCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.Percurso_32CarmoCode.GDGMObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32CarmoCode.GDGMObjects1_1final.length = 0;
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
gdjs.copyArray(runtimeScene.getObjects("GM"), gdjs.Percurso_32CarmoCode.GDGMObjects2);
for (var i = 0, k = 0, l = gdjs.Percurso_32CarmoCode.GDGMObjects2.length;i<l;++i) {
    if ( gdjs.Percurso_32CarmoCode.GDGMObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Percurso_32CarmoCode.GDGMObjects2[k] = gdjs.Percurso_32CarmoCode.GDGMObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32CarmoCode.GDGMObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32CarmoCode.GDGMObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32CarmoCode.GDGMObjects1_1final.indexOf(gdjs.Percurso_32CarmoCode.GDGMObjects2[j]) === -1 )
            gdjs.Percurso_32CarmoCode.GDGMObjects1_1final.push(gdjs.Percurso_32CarmoCode.GDGMObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Percurso_32CarmoCode.GDGMObjects1_1final, gdjs.Percurso_32CarmoCode.GDGMObjects1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Percurso_32CarmoCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "PORTO";
if (isConditionTrue_0) {

{ //Subevents
gdjs.Percurso_32CarmoCode.eventsList6(runtimeScene);} //End of subevents
}

}


};

gdjs.Percurso_32CarmoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Percurso_32CarmoCode.GDscoreObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDscoreObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDscoreObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDnext_95sceneObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDURLObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDURLObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDURLObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDURLdesvioObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDURLdesvioObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDURLdesvioObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDDesvioObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDDesvioObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDDesvioObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDokdesvioObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDokdesvioObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDokdesvioObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDnoObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDnoObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDnoObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDyesObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDyesObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDyesObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDpercursoObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDpercursoObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDpercursoObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDgmapsObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDgmapsObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDgmapsObjects3.length = 0;
gdjs.Percurso_32CarmoCode.GDGMObjects1.length = 0;
gdjs.Percurso_32CarmoCode.GDGMObjects2.length = 0;
gdjs.Percurso_32CarmoCode.GDGMObjects3.length = 0;

gdjs.Percurso_32CarmoCode.eventsList7(runtimeScene);

return;

}

gdjs['Percurso_32CarmoCode'] = gdjs.Percurso_32CarmoCode;
