gdjs.Percurso_32BicaCode = {};
gdjs.Percurso_32BicaCode.GDGMObjects1_1final = [];

gdjs.Percurso_32BicaCode.GDpercursoObjects1_1final = [];

gdjs.Percurso_32BicaCode.GDscoreObjects1= [];
gdjs.Percurso_32BicaCode.GDscoreObjects2= [];
gdjs.Percurso_32BicaCode.GDnoObjects1= [];
gdjs.Percurso_32BicaCode.GDnoObjects2= [];
gdjs.Percurso_32BicaCode.GDyesObjects1= [];
gdjs.Percurso_32BicaCode.GDyesObjects2= [];
gdjs.Percurso_32BicaCode.GDpercursoObjects1= [];
gdjs.Percurso_32BicaCode.GDpercursoObjects2= [];
gdjs.Percurso_32BicaCode.GDgmapsObjects1= [];
gdjs.Percurso_32BicaCode.GDgmapsObjects2= [];
gdjs.Percurso_32BicaCode.GDGMObjects1= [];
gdjs.Percurso_32BicaCode.GDGMObjects2= [];


gdjs.Percurso_32BicaCode.userFunc0x8393a8 = function(runtimeScene) {
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
gdjs.Percurso_32BicaCode.userFunc0x8396b8 = function(runtimeScene) {
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
gdjs.Percurso_32BicaCode.mapOfGDgdjs_46Percurso_9532BicaCode_46GDpercursoObjects2Objects = Hashtable.newFrom({"percurso": gdjs.Percurso_32BicaCode.GDpercursoObjects2});
gdjs.Percurso_32BicaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32BicaCode.GDgmapsObjects1);
/* Reuse gdjs.Percurso_32BicaCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32BicaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDgmapsObjects1[i].hide();
}
}}

}


};gdjs.Percurso_32BicaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32BicaCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32BicaCode.GDnoObjects1);
/* Reuse gdjs.Percurso_32BicaCode.GDyesObjects1 */
{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDgmapsObjects1[i].hide();
}
}{gdjs.evtTools.window.openURL("https://www.google.com/maps/dir/Miradouro+de+Santa+Catarina,+Lisbon/Bica+-+Lg.+Calhariz,+Funicular+da+Bica,+Largo+Calhariz,+Lisbon/@38.7102615,-9.1479813,18z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0xd193480f06596a3:0x96e9334cb717ce28!2m2!1d-9.1476043!2d38.7095364!1m5!1m1!1s0xd1935b86ddd4e6b:0x5d5220f53874bf4!2m2!1d-9.1458107!2d38.7107724!3e2", runtimeScene);
}}

}


};gdjs.Percurso_32BicaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32BicaCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32BicaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32BicaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDgmapsObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32BicaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32BicaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Percurso_32BicaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{



}


{


gdjs.Percurso_32BicaCode.userFunc0x8393a8(runtimeScene);

}


{


gdjs.Percurso_32BicaCode.userFunc0x8396b8(runtimeScene);

}


{

gdjs.Percurso_32BicaCode.GDpercursoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32BicaCode.GDpercursoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("percurso"), gdjs.Percurso_32BicaCode.GDpercursoObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.cursorOnObject(gdjs.Percurso_32BicaCode.mapOfGDgdjs_46Percurso_9532BicaCode_46GDpercursoObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32BicaCode.GDpercursoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32BicaCode.GDpercursoObjects1_1final.indexOf(gdjs.Percurso_32BicaCode.GDpercursoObjects2[j]) === -1 )
            gdjs.Percurso_32BicaCode.GDpercursoObjects1_1final.push(gdjs.Percurso_32BicaCode.GDpercursoObjects2[j]);
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
gdjs.copyArray(gdjs.Percurso_32BicaCode.GDpercursoObjects1_1final, gdjs.Percurso_32BicaCode.GDpercursoObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("gmaps"), gdjs.Percurso_32BicaCode.GDgmapsObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32BicaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32BicaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Percurso_32BicaCode.GDgmapsObjects1.length ;i < len;++i) {
    gdjs.Percurso_32BicaCode.GDgmapsObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Percurso_32BicaCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32BicaCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32BicaCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32BicaCode.GDnoObjects1[k] = gdjs.Percurso_32BicaCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32BicaCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32BicaCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32BicaCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32BicaCode.GDnoObjects1[k] = gdjs.Percurso_32BicaCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32BicaCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}
{ //Subevents
gdjs.Percurso_32BicaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Percurso_32BicaCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32BicaCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32BicaCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32BicaCode.GDyesObjects1[k] = gdjs.Percurso_32BicaCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32BicaCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Percurso_32BicaCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Percurso_32BicaCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Percurso_32BicaCode.GDyesObjects1[k] = gdjs.Percurso_32BicaCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Percurso_32BicaCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "maps");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "maps");
}
{ //Subevents
gdjs.Percurso_32BicaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.Percurso_32BicaCode.GDGMObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Percurso_32BicaCode.GDGMObjects1_1final.length = 0;
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
gdjs.copyArray(runtimeScene.getObjects("GM"), gdjs.Percurso_32BicaCode.GDGMObjects2);
for (var i = 0, k = 0, l = gdjs.Percurso_32BicaCode.GDGMObjects2.length;i<l;++i) {
    if ( gdjs.Percurso_32BicaCode.GDGMObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Percurso_32BicaCode.GDGMObjects2[k] = gdjs.Percurso_32BicaCode.GDGMObjects2[i];
        ++k;
    }
}
gdjs.Percurso_32BicaCode.GDGMObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Percurso_32BicaCode.GDGMObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Percurso_32BicaCode.GDGMObjects1_1final.indexOf(gdjs.Percurso_32BicaCode.GDGMObjects2[j]) === -1 )
            gdjs.Percurso_32BicaCode.GDGMObjects1_1final.push(gdjs.Percurso_32BicaCode.GDGMObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Percurso_32BicaCode.GDGMObjects1_1final, gdjs.Percurso_32BicaCode.GDGMObjects1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bica", false);
}}

}


};

gdjs.Percurso_32BicaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Percurso_32BicaCode.GDscoreObjects1.length = 0;
gdjs.Percurso_32BicaCode.GDscoreObjects2.length = 0;
gdjs.Percurso_32BicaCode.GDnoObjects1.length = 0;
gdjs.Percurso_32BicaCode.GDnoObjects2.length = 0;
gdjs.Percurso_32BicaCode.GDyesObjects1.length = 0;
gdjs.Percurso_32BicaCode.GDyesObjects2.length = 0;
gdjs.Percurso_32BicaCode.GDpercursoObjects1.length = 0;
gdjs.Percurso_32BicaCode.GDpercursoObjects2.length = 0;
gdjs.Percurso_32BicaCode.GDgmapsObjects1.length = 0;
gdjs.Percurso_32BicaCode.GDgmapsObjects2.length = 0;
gdjs.Percurso_32BicaCode.GDGMObjects1.length = 0;
gdjs.Percurso_32BicaCode.GDGMObjects2.length = 0;

gdjs.Percurso_32BicaCode.eventsList2(runtimeScene);

return;

}

gdjs['Percurso_32BicaCode'] = gdjs.Percurso_32BicaCode;
