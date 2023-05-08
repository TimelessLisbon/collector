gdjs.RegistoCode = {};
gdjs.RegistoCode.GDanswerObjects1_1final = [];

gdjs.RegistoCode.GDscoreObjects1= [];
gdjs.RegistoCode.GDscoreObjects2= [];
gdjs.RegistoCode.GDscoreObjects3= [];
gdjs.RegistoCode.GDanswerObjects1= [];
gdjs.RegistoCode.GDanswerObjects2= [];
gdjs.RegistoCode.GDanswerObjects3= [];
gdjs.RegistoCode.GDokObjects1= [];
gdjs.RegistoCode.GDokObjects2= [];
gdjs.RegistoCode.GDokObjects3= [];
gdjs.RegistoCode.GDfundoObjects1= [];
gdjs.RegistoCode.GDfundoObjects2= [];
gdjs.RegistoCode.GDfundoObjects3= [];
gdjs.RegistoCode.GDinvalidObjects1= [];
gdjs.RegistoCode.GDinvalidObjects2= [];
gdjs.RegistoCode.GDinvalidObjects3= [];


gdjs.RegistoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8397972);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}}

}


};gdjs.RegistoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9329532);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.RegistoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9333700);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11620260);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.RegistoCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8383740);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9320212);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.RegistoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("invalid"), gdjs.RegistoCode.GDinvalidObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.RegistoCode.GDokObjects1);
{for(var i = 0, len = gdjs.RegistoCode.GDokObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.RegistoCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.RegistoCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.RegistoCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{runtimeScene.getGame().getVariables().get("score").setNumber(0);
}{for(var i = 0, len = gdjs.RegistoCode.GDinvalidObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDinvalidObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "invalid");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.RegistoCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.RegistoCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.RegistoCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.RegistoCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.RegistoCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.RegistoCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.RegistoCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.RegistoCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDanswerObjects1[i].setString(gdjs.evtTools.string.toUpperCase((gdjs.RegistoCode.GDanswerObjects1[i].getString())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("invalid"), gdjs.RegistoCode.GDinvalidObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.RegistoCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDinvalidObjects1.length;i<l;++i) {
    if ( !(gdjs.RegistoCode.GDinvalidObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.RegistoCode.GDinvalidObjects1[k] = gdjs.RegistoCode.GDinvalidObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDinvalidObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RegistoCode.GDokObjects1[k] = gdjs.RegistoCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects1[i].getString() != "SARDINHAS" ) {
        isConditionTrue_1 = true;
        gdjs.RegistoCode.GDanswerObjects1[k] = gdjs.RegistoCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects1[i].getString() != "PORTO" ) {
        isConditionTrue_1 = true;
        gdjs.RegistoCode.GDanswerObjects1[k] = gdjs.RegistoCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects1[i].getString() != "PASTEL DE NATA" ) {
        isConditionTrue_1 = true;
        gdjs.RegistoCode.GDanswerObjects1[k] = gdjs.RegistoCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects1[i].getString() != "BARCOS REBELOS" ) {
        isConditionTrue_1 = true;
        gdjs.RegistoCode.GDanswerObjects1[k] = gdjs.RegistoCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects1[i].getString() != "GALO DE BARCELOS" ) {
        isConditionTrue_1 = true;
        gdjs.RegistoCode.GDanswerObjects1[k] = gdjs.RegistoCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects1[i].getString() != "LADY OF FATIMA" ) {
        isConditionTrue_1 = true;
        gdjs.RegistoCode.GDanswerObjects1[k] = gdjs.RegistoCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects1[i].getString() != "TESTE" ) {
        isConditionTrue_1 = true;
        gdjs.RegistoCode.GDanswerObjects1[k] = gdjs.RegistoCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects1.length = k;
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.RegistoCode.GDanswerObjects1 */
/* Reuse gdjs.RegistoCode.GDinvalidObjects1 */
{for(var i = 0, len = gdjs.RegistoCode.GDinvalidObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDinvalidObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.RegistoCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.RegistoCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDanswerObjects1[i].setString("");
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "invalid");
}
{ //Subevents
gdjs.RegistoCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "invalid") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("invalid"), gdjs.RegistoCode.GDinvalidObjects1);
{for(var i = 0, len = gdjs.RegistoCode.GDinvalidObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDinvalidObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.RegistoCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.RegistoCode.GDanswerObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "invalid");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "invalid");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("invalid"), gdjs.RegistoCode.GDinvalidObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.RegistoCode.GDokObjects1);
gdjs.RegistoCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDinvalidObjects1.length;i<l;++i) {
    if ( !(gdjs.RegistoCode.GDinvalidObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.RegistoCode.GDinvalidObjects1[k] = gdjs.RegistoCode.GDinvalidObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDinvalidObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RegistoCode.GDokObjects1[k] = gdjs.RegistoCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.RegistoCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects2[i].getString() == "SARDINHAS" ) {
        isConditionTrue_1 = true;
        gdjs.RegistoCode.GDanswerObjects2[k] = gdjs.RegistoCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.RegistoCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.RegistoCode.GDanswerObjects1_1final.indexOf(gdjs.RegistoCode.GDanswerObjects2[j]) === -1 )
            gdjs.RegistoCode.GDanswerObjects1_1final.push(gdjs.RegistoCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects2[i].getString() == "PORTO" ) {
        isConditionTrue_1 = true;
        gdjs.RegistoCode.GDanswerObjects2[k] = gdjs.RegistoCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.RegistoCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.RegistoCode.GDanswerObjects1_1final.indexOf(gdjs.RegistoCode.GDanswerObjects2[j]) === -1 )
            gdjs.RegistoCode.GDanswerObjects1_1final.push(gdjs.RegistoCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects2[i].getString() == "PASTEL DE NATA" ) {
        isConditionTrue_1 = true;
        gdjs.RegistoCode.GDanswerObjects2[k] = gdjs.RegistoCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.RegistoCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.RegistoCode.GDanswerObjects1_1final.indexOf(gdjs.RegistoCode.GDanswerObjects2[j]) === -1 )
            gdjs.RegistoCode.GDanswerObjects1_1final.push(gdjs.RegistoCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects2[i].getString() == "BARCOS REBELOS" ) {
        isConditionTrue_1 = true;
        gdjs.RegistoCode.GDanswerObjects2[k] = gdjs.RegistoCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.RegistoCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.RegistoCode.GDanswerObjects1_1final.indexOf(gdjs.RegistoCode.GDanswerObjects2[j]) === -1 )
            gdjs.RegistoCode.GDanswerObjects1_1final.push(gdjs.RegistoCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects2[i].getString() == "GALO DE BARCELOS" ) {
        isConditionTrue_1 = true;
        gdjs.RegistoCode.GDanswerObjects2[k] = gdjs.RegistoCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.RegistoCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.RegistoCode.GDanswerObjects1_1final.indexOf(gdjs.RegistoCode.GDanswerObjects2[j]) === -1 )
            gdjs.RegistoCode.GDanswerObjects1_1final.push(gdjs.RegistoCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects2[i].getString() == "LADY OF FATIMA" ) {
        isConditionTrue_1 = true;
        gdjs.RegistoCode.GDanswerObjects2[k] = gdjs.RegistoCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.RegistoCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.RegistoCode.GDanswerObjects1_1final.indexOf(gdjs.RegistoCode.GDanswerObjects2[j]) === -1 )
            gdjs.RegistoCode.GDanswerObjects1_1final.push(gdjs.RegistoCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.RegistoCode.GDanswerObjects1_1final, gdjs.RegistoCode.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.RegistoCode.GDanswerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.RegistoCode.GDanswerObjects1.length === 0 ) ? "" :gdjs.RegistoCode.GDanswerObjects1[0].getString()));
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.RegistoCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.RegistoCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("invalid"), gdjs.RegistoCode.GDinvalidObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.RegistoCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDinvalidObjects1.length;i<l;++i) {
    if ( !(gdjs.RegistoCode.GDinvalidObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.RegistoCode.GDinvalidObjects1[k] = gdjs.RegistoCode.GDinvalidObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDinvalidObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RegistoCode.GDokObjects1[k] = gdjs.RegistoCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RegistoCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.RegistoCode.GDanswerObjects1[i].getString() == "TESTE" ) {
        isConditionTrue_0 = true;
        gdjs.RegistoCode.GDanswerObjects1[k] = gdjs.RegistoCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.RegistoCode.GDanswerObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.RegistoCode.GDanswerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.RegistoCode.GDanswerObjects1.length === 0 ) ? "" :gdjs.RegistoCode.GDanswerObjects1[0].getString()));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Coordenadas", false);
}
{ //Subevents
gdjs.RegistoCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Pedro Alcantara", false);
}}

}


};

gdjs.RegistoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RegistoCode.GDscoreObjects1.length = 0;
gdjs.RegistoCode.GDscoreObjects2.length = 0;
gdjs.RegistoCode.GDscoreObjects3.length = 0;
gdjs.RegistoCode.GDanswerObjects1.length = 0;
gdjs.RegistoCode.GDanswerObjects2.length = 0;
gdjs.RegistoCode.GDanswerObjects3.length = 0;
gdjs.RegistoCode.GDokObjects1.length = 0;
gdjs.RegistoCode.GDokObjects2.length = 0;
gdjs.RegistoCode.GDokObjects3.length = 0;
gdjs.RegistoCode.GDfundoObjects1.length = 0;
gdjs.RegistoCode.GDfundoObjects2.length = 0;
gdjs.RegistoCode.GDfundoObjects3.length = 0;
gdjs.RegistoCode.GDinvalidObjects1.length = 0;
gdjs.RegistoCode.GDinvalidObjects2.length = 0;
gdjs.RegistoCode.GDinvalidObjects3.length = 0;

gdjs.RegistoCode.eventsList4(runtimeScene);

return;

}

gdjs['RegistoCode'] = gdjs.RegistoCode;
