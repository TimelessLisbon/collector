gdjs.S_46_32CarlosCode = {};
gdjs.S_46_32CarlosCode.GDanswerObjects1_1final = [];

gdjs.S_46_32CarlosCode.GDscoreObjects1= [];
gdjs.S_46_32CarlosCode.GDscoreObjects2= [];
gdjs.S_46_32CarlosCode.GDscoreObjects3= [];
gdjs.S_46_32CarlosCode.GDnext_95sceneObjects1= [];
gdjs.S_46_32CarlosCode.GDnext_95sceneObjects2= [];
gdjs.S_46_32CarlosCode.GDnext_95sceneObjects3= [];
gdjs.S_46_32CarlosCode.GDURLObjects1= [];
gdjs.S_46_32CarlosCode.GDURLObjects2= [];
gdjs.S_46_32CarlosCode.GDURLObjects3= [];
gdjs.S_46_32CarlosCode.GDURLdesvioObjects1= [];
gdjs.S_46_32CarlosCode.GDURLdesvioObjects2= [];
gdjs.S_46_32CarlosCode.GDURLdesvioObjects3= [];
gdjs.S_46_32CarlosCode.GDDesvioObjects1= [];
gdjs.S_46_32CarlosCode.GDDesvioObjects2= [];
gdjs.S_46_32CarlosCode.GDDesvioObjects3= [];
gdjs.S_46_32CarlosCode.GDokdesvioObjects1= [];
gdjs.S_46_32CarlosCode.GDokdesvioObjects2= [];
gdjs.S_46_32CarlosCode.GDokdesvioObjects3= [];
gdjs.S_46_32CarlosCode.GDokObjects1= [];
gdjs.S_46_32CarlosCode.GDokObjects2= [];
gdjs.S_46_32CarlosCode.GDokObjects3= [];
gdjs.S_46_32CarlosCode.GDcameraObjects1= [];
gdjs.S_46_32CarlosCode.GDcameraObjects2= [];
gdjs.S_46_32CarlosCode.GDcameraObjects3= [];
gdjs.S_46_32CarlosCode.GDfundoObjects1= [];
gdjs.S_46_32CarlosCode.GDfundoObjects2= [];
gdjs.S_46_32CarlosCode.GDfundoObjects3= [];
gdjs.S_46_32CarlosCode.GDclueObjects1= [];
gdjs.S_46_32CarlosCode.GDclueObjects2= [];
gdjs.S_46_32CarlosCode.GDclueObjects3= [];
gdjs.S_46_32CarlosCode.GDanswerObjects1= [];
gdjs.S_46_32CarlosCode.GDanswerObjects2= [];
gdjs.S_46_32CarlosCode.GDanswerObjects3= [];


gdjs.S_46_32CarlosCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12720020);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12791860);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12790404);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12793020);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12781444);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12779132);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12815500);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12809612);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12810428);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12822876);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12825036);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12827372);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12829900);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32CarlosCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32CarlosCode.GDnext_95sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.S_46_32CarlosCode.GDnext_95sceneObjects1.length === 0 ) ? "" :gdjs.S_46_32CarlosCode.GDnext_95sceneObjects1[0].getString()), false);
}}

}


};gdjs.S_46_32CarlosCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("camera"), gdjs.S_46_32CarlosCode.GDcameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32CarlosCode.GDnext_95sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(23);
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDnext_95sceneObjects1[i].setString("Fim");
}
}{runtimeScene.getScene().getVariables().get("answer").setString("BOOK");
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDcameraObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDcameraObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32CarlosCode.GDcameraObjects1[i].getWidth())) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("camera"), gdjs.S_46_32CarlosCode.GDcameraObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32CarlosCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects1[k] = gdjs.S_46_32CarlosCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDcameraObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDcameraObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDcameraObjects1[k] = gdjs.S_46_32CarlosCode.GDcameraObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDcameraObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://mywebar.com/p/Project_0_rhmqfav9m2?_ga=2.83999833.171377781.1683759138-675099242.1683759138", runtimeScene);
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32CarlosCode.GDokObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDokObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32CarlosCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32CarlosCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{runtimeScene.getScene().getVariables().get("clue").setNumber(0);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32CarlosCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32CarlosCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32CarlosCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setString(gdjs.evtTools.string.toUpperCase((gdjs.S_46_32CarlosCode.GDanswerObjects1[i].getString())));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32CarlosCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDfundoObjects1[i].setAnimation((gdjs.S_46_32CarlosCode.GDfundoObjects1[i].getAnimation()) + 1);
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32CarlosCode.GDfundoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDfundoObjects1[i].getAnimation() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDfundoObjects1[k] = gdjs.S_46_32CarlosCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.S_46_32CarlosCode.GDfundoObjects1 */
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDfundoObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32CarlosCode.GDokObjects1);
gdjs.S_46_32CarlosCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32CarlosCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects1[k] = gdjs.S_46_32CarlosCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDokObjects1[k] = gdjs.S_46_32CarlosCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.S_46_32CarlosCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDanswerObjects2[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.S_46_32CarlosCode.GDanswerObjects2[k] = gdjs.S_46_32CarlosCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.S_46_32CarlosCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.S_46_32CarlosCode.GDanswerObjects1_1final.indexOf(gdjs.S_46_32CarlosCode.GDanswerObjects2[j]) === -1 )
            gdjs.S_46_32CarlosCode.GDanswerObjects1_1final.push(gdjs.S_46_32CarlosCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.S_46_32CarlosCode.GDanswerObjects1_1final, gdjs.S_46_32CarlosCode.GDanswerObjects1);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("clue").add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32CarlosCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects1[k] = gdjs.S_46_32CarlosCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDokObjects1[k] = gdjs.S_46_32CarlosCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
/* Reuse gdjs.S_46_32CarlosCode.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects1[k] = gdjs.S_46_32CarlosCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32CarlosCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects1[k] = gdjs.S_46_32CarlosCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32CarlosCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32CarlosCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32CarlosCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32CarlosCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects1[k] = gdjs.S_46_32CarlosCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDokObjects1[k] = gdjs.S_46_32CarlosCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDanswerObjects1[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDanswerObjects1[k] = gdjs.S_46_32CarlosCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDanswerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 0;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32CarlosCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32CarlosCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects1[k] = gdjs.S_46_32CarlosCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDokObjects1[k] = gdjs.S_46_32CarlosCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDanswerObjects1[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDanswerObjects1[k] = gdjs.S_46_32CarlosCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDanswerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(7);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32CarlosCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32CarlosCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects1[k] = gdjs.S_46_32CarlosCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDokObjects1[k] = gdjs.S_46_32CarlosCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDanswerObjects1[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDanswerObjects1[k] = gdjs.S_46_32CarlosCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDanswerObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(5);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32CarlosCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.S_46_32CarlosCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32CarlosCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32CarlosCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDclueObjects1[k] = gdjs.S_46_32CarlosCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDokObjects1[k] = gdjs.S_46_32CarlosCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32CarlosCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32CarlosCode.GDanswerObjects1[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32CarlosCode.GDanswerObjects1[k] = gdjs.S_46_32CarlosCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32CarlosCode.GDanswerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(3);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.3;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.S_46_32CarlosCode.eventsList12(runtimeScene);} //End of subevents
}

}


};

gdjs.S_46_32CarlosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S_46_32CarlosCode.GDscoreObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDscoreObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDscoreObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDnext_95sceneObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDnext_95sceneObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDnext_95sceneObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDURLObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDURLObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDURLObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDURLdesvioObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDURLdesvioObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDURLdesvioObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDDesvioObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDDesvioObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDDesvioObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDokdesvioObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDokdesvioObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDokdesvioObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDokObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDokObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDokObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDcameraObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDcameraObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDcameraObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDfundoObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDfundoObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDfundoObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDclueObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDclueObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDclueObjects3.length = 0;
gdjs.S_46_32CarlosCode.GDanswerObjects1.length = 0;
gdjs.S_46_32CarlosCode.GDanswerObjects2.length = 0;
gdjs.S_46_32CarlosCode.GDanswerObjects3.length = 0;

gdjs.S_46_32CarlosCode.eventsList13(runtimeScene);

return;

}

gdjs['S_46_32CarlosCode'] = gdjs.S_46_32CarlosCode;
