gdjs.DesvioCode = {};
gdjs.DesvioCode.GDscoreObjects1= [];
gdjs.DesvioCode.GDscoreObjects2= [];
gdjs.DesvioCode.GDscoreObjects3= [];
gdjs.DesvioCode.GDnext_95sceneObjects1= [];
gdjs.DesvioCode.GDnext_95sceneObjects2= [];
gdjs.DesvioCode.GDnext_95sceneObjects3= [];
gdjs.DesvioCode.GDURLObjects1= [];
gdjs.DesvioCode.GDURLObjects2= [];
gdjs.DesvioCode.GDURLObjects3= [];
gdjs.DesvioCode.GDprox_95localObjects1= [];
gdjs.DesvioCode.GDprox_95localObjects2= [];
gdjs.DesvioCode.GDprox_95localObjects3= [];
gdjs.DesvioCode.GDnoObjects1= [];
gdjs.DesvioCode.GDnoObjects2= [];
gdjs.DesvioCode.GDnoObjects3= [];
gdjs.DesvioCode.GDokdesvioObjects1= [];
gdjs.DesvioCode.GDokdesvioObjects2= [];
gdjs.DesvioCode.GDokdesvioObjects3= [];
gdjs.DesvioCode.GDyesObjects1= [];
gdjs.DesvioCode.GDyesObjects2= [];
gdjs.DesvioCode.GDyesObjects3= [];
gdjs.DesvioCode.GDtask_95confirmationObjects1= [];
gdjs.DesvioCode.GDtask_95confirmationObjects2= [];
gdjs.DesvioCode.GDtask_95confirmationObjects3= [];
gdjs.DesvioCode.GDfundoObjects1= [];
gdjs.DesvioCode.GDfundoObjects2= [];
gdjs.DesvioCode.GDfundoObjects3= [];


gdjs.DesvioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13088428);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13089076);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}}

}


};gdjs.DesvioCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13085580);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.DesvioCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13084332);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.DesvioCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13083084);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.DesvioCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13081468);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("desviodone").setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.DesvioCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.DesvioCode.GDnext_95sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.DesvioCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.DesvioCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.DesvioCode.GDyesObjects1);
{for(var i = 0, len = gdjs.DesvioCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.DesvioCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.DesvioCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.DesvioCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.DesvioCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.DesvioCode.GDtask_95confirmationObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.DesvioCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.DesvioCode.GDnext_95sceneObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.DesvioCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.DesvioCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.DesvioCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.DesvioCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.DesvioCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.DesvioCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.DesvioCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.DesvioCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.DesvioCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.DesvioCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("okdesvio"), gdjs.DesvioCode.GDokdesvioObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DesvioCode.GDokdesvioObjects1.length;i<l;++i) {
    if ( gdjs.DesvioCode.GDokdesvioObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DesvioCode.GDokdesvioObjects1[k] = gdjs.DesvioCode.GDokdesvioObjects1[i];
        ++k;
    }
}
gdjs.DesvioCode.GDokdesvioObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(6)), runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.DesvioCode.GDprox_95localObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DesvioCode.GDprox_95localObjects1.length;i<l;++i) {
    if ( gdjs.DesvioCode.GDprox_95localObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DesvioCode.GDprox_95localObjects1[k] = gdjs.DesvioCode.GDprox_95localObjects1[i];
        ++k;
    }
}
gdjs.DesvioCode.GDprox_95localObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.DesvioCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.DesvioCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.DesvioCode.GDyesObjects1);
{for(var i = 0, len = gdjs.DesvioCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.DesvioCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.DesvioCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.DesvioCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.DesvioCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.DesvioCode.GDtask_95confirmationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.DesvioCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.DesvioCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DesvioCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.DesvioCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.DesvioCode.GDnoObjects1[k] = gdjs.DesvioCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.DesvioCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DesvioCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.DesvioCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DesvioCode.GDnoObjects1[k] = gdjs.DesvioCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.DesvioCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.DesvioCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.DesvioCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.DesvioCode.GDyesObjects1);
{for(var i = 0, len = gdjs.DesvioCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.DesvioCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.DesvioCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.DesvioCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.DesvioCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.DesvioCode.GDtask_95confirmationObjects1[i].hide();
}
}
{ //Subevents
gdjs.DesvioCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.DesvioCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DesvioCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.DesvioCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.DesvioCode.GDyesObjects1[k] = gdjs.DesvioCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.DesvioCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.DesvioCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.DesvioCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.DesvioCode.GDyesObjects1[k] = gdjs.DesvioCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.DesvioCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.DesvioCode.eventsList3(runtimeScene);} //End of subevents
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
gdjs.DesvioCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.DesvioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DesvioCode.GDscoreObjects1.length = 0;
gdjs.DesvioCode.GDscoreObjects2.length = 0;
gdjs.DesvioCode.GDscoreObjects3.length = 0;
gdjs.DesvioCode.GDnext_95sceneObjects1.length = 0;
gdjs.DesvioCode.GDnext_95sceneObjects2.length = 0;
gdjs.DesvioCode.GDnext_95sceneObjects3.length = 0;
gdjs.DesvioCode.GDURLObjects1.length = 0;
gdjs.DesvioCode.GDURLObjects2.length = 0;
gdjs.DesvioCode.GDURLObjects3.length = 0;
gdjs.DesvioCode.GDprox_95localObjects1.length = 0;
gdjs.DesvioCode.GDprox_95localObjects2.length = 0;
gdjs.DesvioCode.GDprox_95localObjects3.length = 0;
gdjs.DesvioCode.GDnoObjects1.length = 0;
gdjs.DesvioCode.GDnoObjects2.length = 0;
gdjs.DesvioCode.GDnoObjects3.length = 0;
gdjs.DesvioCode.GDokdesvioObjects1.length = 0;
gdjs.DesvioCode.GDokdesvioObjects2.length = 0;
gdjs.DesvioCode.GDokdesvioObjects3.length = 0;
gdjs.DesvioCode.GDyesObjects1.length = 0;
gdjs.DesvioCode.GDyesObjects2.length = 0;
gdjs.DesvioCode.GDyesObjects3.length = 0;
gdjs.DesvioCode.GDtask_95confirmationObjects1.length = 0;
gdjs.DesvioCode.GDtask_95confirmationObjects2.length = 0;
gdjs.DesvioCode.GDtask_95confirmationObjects3.length = 0;
gdjs.DesvioCode.GDfundoObjects1.length = 0;
gdjs.DesvioCode.GDfundoObjects2.length = 0;
gdjs.DesvioCode.GDfundoObjects3.length = 0;

gdjs.DesvioCode.eventsList5(runtimeScene);

return;

}

gdjs['DesvioCode'] = gdjs.DesvioCode;
