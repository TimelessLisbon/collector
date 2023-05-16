gdjs.S_46_32Roque_32fimCode = {};
gdjs.S_46_32Roque_32fimCode.GDscoreObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDscoreObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDscoreObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDURLObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDURLObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDURLObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDnoObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDnoObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDnoObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDyesObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDyesObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDyesObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDfundoObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDfundoObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDfundoObjects3= [];
gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects3= [];


gdjs.S_46_32Roque_32fimCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12770332);
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12772276);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}}

}


};gdjs.S_46_32Roque_32fimCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12778764);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32fimCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12781036);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32fimCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12782532);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32fimCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12785700);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects1.length === 0 ) ? "" :gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects1[0].getString()), false);
}}

}


};gdjs.S_46_32Roque_32fimCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(5);
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects1[i].setString("Percurso Carmo");
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
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.S_46_32Roque_32fimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.S_46_32Roque_32fimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32Roque_32fimCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32fimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32fimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32fimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects1[k] = gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.S_46_32Roque_32fimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.S_46_32Roque_32fimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.S_46_32Roque_32fimCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.S_46_32Roque_32fimCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32fimCode.GDnoObjects1[k] = gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32fimCode.GDnoObjects1[k] = gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.S_46_32Roque_32fimCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.S_46_32Roque_32fimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects1[i].hide();
}
}
{ //Subevents
gdjs.S_46_32Roque_32fimCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.S_46_32Roque_32fimCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32fimCode.GDyesObjects1[k] = gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32fimCode.GDyesObjects1[k] = gdjs.S_46_32Roque_32fimCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32Roque_32fimCode.eventsList3(runtimeScene);} //End of subevents
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
gdjs.S_46_32Roque_32fimCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.S_46_32Roque_32fimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S_46_32Roque_32fimCode.GDscoreObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDscoreObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDscoreObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnext_95sceneObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDURLObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDURLObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDURLObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnoObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnoObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDyesObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDyesObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundoObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundoObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundoObjects3.length = 0;
gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects3.length = 0;

gdjs.S_46_32Roque_32fimCode.eventsList5(runtimeScene);

return;

}

gdjs['S_46_32Roque_32fimCode'] = gdjs.S_46_32Roque_32fimCode;
