gdjs.Sta_32Catarina_32FimCode = {};
gdjs.Sta_32Catarina_32FimCode.GDscoreObjects1= [];
gdjs.Sta_32Catarina_32FimCode.GDscoreObjects2= [];
gdjs.Sta_32Catarina_32FimCode.GDscoreObjects3= [];
gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects1= [];
gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects2= [];
gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects3= [];
gdjs.Sta_32Catarina_32FimCode.GDURLObjects1= [];
gdjs.Sta_32Catarina_32FimCode.GDURLObjects2= [];
gdjs.Sta_32Catarina_32FimCode.GDURLObjects3= [];
gdjs.Sta_32Catarina_32FimCode.GDprox_95localObjects1= [];
gdjs.Sta_32Catarina_32FimCode.GDprox_95localObjects2= [];
gdjs.Sta_32Catarina_32FimCode.GDprox_95localObjects3= [];
gdjs.Sta_32Catarina_32FimCode.GDnoObjects1= [];
gdjs.Sta_32Catarina_32FimCode.GDnoObjects2= [];
gdjs.Sta_32Catarina_32FimCode.GDnoObjects3= [];
gdjs.Sta_32Catarina_32FimCode.GDyesObjects1= [];
gdjs.Sta_32Catarina_32FimCode.GDyesObjects2= [];
gdjs.Sta_32Catarina_32FimCode.GDyesObjects3= [];
gdjs.Sta_32Catarina_32FimCode.GDfundoObjects1= [];
gdjs.Sta_32Catarina_32FimCode.GDfundoObjects2= [];
gdjs.Sta_32Catarina_32FimCode.GDfundoObjects3= [];
gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects1= [];
gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects2= [];
gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects3= [];


gdjs.Sta_32Catarina_32FimCode.eventsList0 = function(runtimeScene) {

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


};gdjs.Sta_32Catarina_32FimCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12778764);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32Catarina_32FimCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12781036);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32Catarina_32FimCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12782532);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Sta_32Catarina_32FimCode.eventsList4 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects1.length === 0 ) ? "" :gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects1[0].getString()), false);
}}

}


};gdjs.Sta_32Catarina_32FimCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(17);
}{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects1[i].setString("Percurso Bica");
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
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Sta_32Catarina_32FimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Sta_32Catarina_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Sta_32Catarina_32FimCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32Catarina_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32Catarina_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32Catarina_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Sta_32Catarina_32FimCode.GDprox_95localObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32FimCode.GDprox_95localObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32FimCode.GDprox_95localObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32FimCode.GDprox_95localObjects1[k] = gdjs.Sta_32Catarina_32FimCode.GDprox_95localObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32FimCode.GDprox_95localObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Sta_32Catarina_32FimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Sta_32Catarina_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Sta_32Catarina_32FimCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Sta_32Catarina_32FimCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32FimCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32FimCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32FimCode.GDnoObjects1[k] = gdjs.Sta_32Catarina_32FimCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32FimCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32FimCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32FimCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32FimCode.GDnoObjects1[k] = gdjs.Sta_32Catarina_32FimCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32FimCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Sta_32Catarina_32FimCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Sta_32Catarina_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects1[i].hide();
}
}
{ //Subevents
gdjs.Sta_32Catarina_32FimCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Sta_32Catarina_32FimCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32FimCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32FimCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32FimCode.GDyesObjects1[k] = gdjs.Sta_32Catarina_32FimCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32FimCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32FimCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32FimCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32FimCode.GDyesObjects1[k] = gdjs.Sta_32Catarina_32FimCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32FimCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Sta_32Catarina_32FimCode.eventsList3(runtimeScene);} //End of subevents
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
gdjs.Sta_32Catarina_32FimCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Sta_32Catarina_32FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sta_32Catarina_32FimCode.GDscoreObjects1.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDscoreObjects2.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDscoreObjects3.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects1.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects2.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDnext_95sceneObjects3.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDURLObjects1.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDURLObjects2.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDURLObjects3.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDprox_95localObjects1.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDprox_95localObjects2.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDprox_95localObjects3.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDnoObjects1.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDnoObjects2.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDnoObjects3.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDyesObjects1.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDyesObjects2.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDyesObjects3.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDfundoObjects1.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDfundoObjects2.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDfundoObjects3.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects1.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects2.length = 0;
gdjs.Sta_32Catarina_32FimCode.GDtask_95confirmationObjects3.length = 0;

gdjs.Sta_32Catarina_32FimCode.eventsList5(runtimeScene);

return;

}

gdjs['Sta_32Catarina_32FimCode'] = gdjs.Sta_32Catarina_32FimCode;
