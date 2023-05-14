gdjs.ManteigariaCode = {};
gdjs.ManteigariaCode.GDscoreObjects1= [];
gdjs.ManteigariaCode.GDscoreObjects2= [];
gdjs.ManteigariaCode.GDscoreObjects3= [];
gdjs.ManteigariaCode.GDnext_95sceneObjects1= [];
gdjs.ManteigariaCode.GDnext_95sceneObjects2= [];
gdjs.ManteigariaCode.GDnext_95sceneObjects3= [];
gdjs.ManteigariaCode.GDURLObjects1= [];
gdjs.ManteigariaCode.GDURLObjects2= [];
gdjs.ManteigariaCode.GDURLObjects3= [];
gdjs.ManteigariaCode.GDURLdesvioObjects1= [];
gdjs.ManteigariaCode.GDURLdesvioObjects2= [];
gdjs.ManteigariaCode.GDURLdesvioObjects3= [];
gdjs.ManteigariaCode.GDDesvioObjects1= [];
gdjs.ManteigariaCode.GDDesvioObjects2= [];
gdjs.ManteigariaCode.GDDesvioObjects3= [];
gdjs.ManteigariaCode.GDokdesvioObjects1= [];
gdjs.ManteigariaCode.GDokdesvioObjects2= [];
gdjs.ManteigariaCode.GDokdesvioObjects3= [];
gdjs.ManteigariaCode.GDokObjects1= [];
gdjs.ManteigariaCode.GDokObjects2= [];
gdjs.ManteigariaCode.GDokObjects3= [];
gdjs.ManteigariaCode.GDfundoObjects1= [];
gdjs.ManteigariaCode.GDfundoObjects2= [];
gdjs.ManteigariaCode.GDfundoObjects3= [];
gdjs.ManteigariaCode.GDanswerObjects1= [];
gdjs.ManteigariaCode.GDanswerObjects2= [];
gdjs.ManteigariaCode.GDanswerObjects3= [];
gdjs.ManteigariaCode.GDwrongObjects1= [];
gdjs.ManteigariaCode.GDwrongObjects2= [];
gdjs.ManteigariaCode.GDwrongObjects3= [];


gdjs.ManteigariaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12833788);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12833948);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.ManteigariaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12839324);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.ManteigariaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12840860);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.ManteigariaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.ManteigariaCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12843676);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.ManteigariaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12846532);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.ManteigariaCode.GDnext_95sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.ManteigariaCode.GDnext_95sceneObjects1.length === 0 ) ? "" :gdjs.ManteigariaCode.GDnext_95sceneObjects1[0].getString()), false);
}}

}


};gdjs.ManteigariaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.ManteigariaCode.GDnext_95sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(13);
}{for(var i = 0, len = gdjs.ManteigariaCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDnext_95sceneObjects1[i].setString("Percurso Sta Catarina");
}
}{runtimeScene.getScene().getVariables().get("answer").setString("PASTEL DE NATA");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.ManteigariaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.ManteigariaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.ManteigariaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.ManteigariaCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDwrongObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.ManteigariaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.ManteigariaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.ManteigariaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.ManteigariaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].setString(gdjs.evtTools.string.toUpperCase((gdjs.ManteigariaCode.GDanswerObjects1[i].getString())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.ManteigariaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.ManteigariaCode.GDwrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.ManteigariaCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDwrongObjects1[k] = gdjs.ManteigariaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.ManteigariaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDokObjects1[k] = gdjs.ManteigariaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.ManteigariaCode.GDanswerObjects1[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDanswerObjects1[k] = gdjs.ManteigariaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDanswerObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "wrong");
}
{ //Subevents
gdjs.ManteigariaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.ManteigariaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.ManteigariaCode.GDwrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.ManteigariaCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDwrongObjects1[k] = gdjs.ManteigariaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.ManteigariaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDokObjects1[k] = gdjs.ManteigariaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.ManteigariaCode.GDanswerObjects1[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDanswerObjects1[k] = gdjs.ManteigariaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDanswerObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.ManteigariaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.ManteigariaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.ManteigariaCode.GDwrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDwrongObjects1.length;i<l;++i) {
    if ( gdjs.ManteigariaCode.GDwrongObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDwrongObjects1[k] = gdjs.ManteigariaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.ManteigariaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDokObjects1[k] = gdjs.ManteigariaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
/* Reuse gdjs.ManteigariaCode.GDwrongObjects1 */
{for(var i = 0, len = gdjs.ManteigariaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].setDisabled(true);
}
}
{ //Subevents
gdjs.ManteigariaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.ManteigariaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].setString("");
}
}
{ //Subevents
gdjs.ManteigariaCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.ManteigariaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].setDisabled(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wrong");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.ManteigariaCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.ManteigariaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ManteigariaCode.GDscoreObjects1.length = 0;
gdjs.ManteigariaCode.GDscoreObjects2.length = 0;
gdjs.ManteigariaCode.GDscoreObjects3.length = 0;
gdjs.ManteigariaCode.GDnext_95sceneObjects1.length = 0;
gdjs.ManteigariaCode.GDnext_95sceneObjects2.length = 0;
gdjs.ManteigariaCode.GDnext_95sceneObjects3.length = 0;
gdjs.ManteigariaCode.GDURLObjects1.length = 0;
gdjs.ManteigariaCode.GDURLObjects2.length = 0;
gdjs.ManteigariaCode.GDURLObjects3.length = 0;
gdjs.ManteigariaCode.GDURLdesvioObjects1.length = 0;
gdjs.ManteigariaCode.GDURLdesvioObjects2.length = 0;
gdjs.ManteigariaCode.GDURLdesvioObjects3.length = 0;
gdjs.ManteigariaCode.GDDesvioObjects1.length = 0;
gdjs.ManteigariaCode.GDDesvioObjects2.length = 0;
gdjs.ManteigariaCode.GDDesvioObjects3.length = 0;
gdjs.ManteigariaCode.GDokdesvioObjects1.length = 0;
gdjs.ManteigariaCode.GDokdesvioObjects2.length = 0;
gdjs.ManteigariaCode.GDokdesvioObjects3.length = 0;
gdjs.ManteigariaCode.GDokObjects1.length = 0;
gdjs.ManteigariaCode.GDokObjects2.length = 0;
gdjs.ManteigariaCode.GDokObjects3.length = 0;
gdjs.ManteigariaCode.GDfundoObjects1.length = 0;
gdjs.ManteigariaCode.GDfundoObjects2.length = 0;
gdjs.ManteigariaCode.GDfundoObjects3.length = 0;
gdjs.ManteigariaCode.GDanswerObjects1.length = 0;
gdjs.ManteigariaCode.GDanswerObjects2.length = 0;
gdjs.ManteigariaCode.GDanswerObjects3.length = 0;
gdjs.ManteigariaCode.GDwrongObjects1.length = 0;
gdjs.ManteigariaCode.GDwrongObjects2.length = 0;
gdjs.ManteigariaCode.GDwrongObjects3.length = 0;

gdjs.ManteigariaCode.eventsList6(runtimeScene);

return;

}

gdjs['ManteigariaCode'] = gdjs.ManteigariaCode;
