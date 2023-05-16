gdjs.Carmo_32EscadasCode = {};
gdjs.Carmo_32EscadasCode.GDscoreObjects1= [];
gdjs.Carmo_32EscadasCode.GDscoreObjects2= [];
gdjs.Carmo_32EscadasCode.GDscoreObjects3= [];
gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects1= [];
gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects2= [];
gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects3= [];
gdjs.Carmo_32EscadasCode.GDURLObjects1= [];
gdjs.Carmo_32EscadasCode.GDURLObjects2= [];
gdjs.Carmo_32EscadasCode.GDURLObjects3= [];
gdjs.Carmo_32EscadasCode.GDprox_95localObjects1= [];
gdjs.Carmo_32EscadasCode.GDprox_95localObjects2= [];
gdjs.Carmo_32EscadasCode.GDprox_95localObjects3= [];
gdjs.Carmo_32EscadasCode.GDnoObjects1= [];
gdjs.Carmo_32EscadasCode.GDnoObjects2= [];
gdjs.Carmo_32EscadasCode.GDnoObjects3= [];
gdjs.Carmo_32EscadasCode.GDyesObjects1= [];
gdjs.Carmo_32EscadasCode.GDyesObjects2= [];
gdjs.Carmo_32EscadasCode.GDyesObjects3= [];
gdjs.Carmo_32EscadasCode.GDfundoObjects1= [];
gdjs.Carmo_32EscadasCode.GDfundoObjects2= [];
gdjs.Carmo_32EscadasCode.GDfundoObjects3= [];
gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects1= [];
gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects2= [];
gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects3= [];


gdjs.Carmo_32EscadasCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13187308);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team_Name", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Hour", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Minutes", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team_Nr", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("team_nr")), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13155108);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}}

}


};gdjs.Carmo_32EscadasCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13147548);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Carmo_32EscadasCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13128012);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Carmo_32EscadasCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13142892);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Carmo_32EscadasCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13139468);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects1.length === 0 ) ? "" :gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects1[0].getString()), false);
}}

}


};gdjs.Carmo_32EscadasCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(7);
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects1[i].setString("Carmo Enigma");
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
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Carmo_32EscadasCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Carmo_32EscadasCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Carmo_32EscadasCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Carmo_32EscadasCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Carmo_32EscadasCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Carmo_32EscadasCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Carmo_32EscadasCode.GDprox_95localObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EscadasCode.GDprox_95localObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EscadasCode.GDprox_95localObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EscadasCode.GDprox_95localObjects1[k] = gdjs.Carmo_32EscadasCode.GDprox_95localObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EscadasCode.GDprox_95localObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Carmo_32EscadasCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Carmo_32EscadasCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Carmo_32EscadasCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Carmo_32EscadasCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EscadasCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EscadasCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EscadasCode.GDnoObjects1[k] = gdjs.Carmo_32EscadasCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EscadasCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EscadasCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EscadasCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EscadasCode.GDnoObjects1[k] = gdjs.Carmo_32EscadasCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EscadasCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Carmo_32EscadasCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Carmo_32EscadasCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects1[i].hide();
}
}
{ //Subevents
gdjs.Carmo_32EscadasCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Carmo_32EscadasCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EscadasCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EscadasCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EscadasCode.GDyesObjects1[k] = gdjs.Carmo_32EscadasCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EscadasCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EscadasCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EscadasCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EscadasCode.GDyesObjects1[k] = gdjs.Carmo_32EscadasCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EscadasCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Carmo_32EscadasCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(2);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Carmo_32EscadasCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Carmo_32EscadasCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Carmo_32EscadasCode.GDscoreObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDscoreObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDscoreObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDnext_95sceneObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDURLObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDURLObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDURLObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDprox_95localObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDprox_95localObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDprox_95localObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDnoObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDnoObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDnoObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDyesObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDyesObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDyesObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDfundoObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDfundoObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDfundoObjects3.length = 0;
gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects1.length = 0;
gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects2.length = 0;
gdjs.Carmo_32EscadasCode.GDtask_95confirmationObjects3.length = 0;

gdjs.Carmo_32EscadasCode.eventsList5(runtimeScene);

return;

}

gdjs['Carmo_32EscadasCode'] = gdjs.Carmo_32EscadasCode;
