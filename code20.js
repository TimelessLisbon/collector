gdjs.BicaCode = {};
gdjs.BicaCode.GDscoreObjects1= [];
gdjs.BicaCode.GDscoreObjects2= [];
gdjs.BicaCode.GDscoreObjects3= [];
gdjs.BicaCode.GDnext_95sceneObjects1= [];
gdjs.BicaCode.GDnext_95sceneObjects2= [];
gdjs.BicaCode.GDnext_95sceneObjects3= [];
gdjs.BicaCode.GDURLObjects1= [];
gdjs.BicaCode.GDURLObjects2= [];
gdjs.BicaCode.GDURLObjects3= [];
gdjs.BicaCode.GDURLdesvioObjects1= [];
gdjs.BicaCode.GDURLdesvioObjects2= [];
gdjs.BicaCode.GDURLdesvioObjects3= [];
gdjs.BicaCode.GDDesvioObjects1= [];
gdjs.BicaCode.GDDesvioObjects2= [];
gdjs.BicaCode.GDDesvioObjects3= [];
gdjs.BicaCode.GDokdesvioObjects1= [];
gdjs.BicaCode.GDokdesvioObjects2= [];
gdjs.BicaCode.GDokdesvioObjects3= [];
gdjs.BicaCode.GDprox_95localObjects1= [];
gdjs.BicaCode.GDprox_95localObjects2= [];
gdjs.BicaCode.GDprox_95localObjects3= [];
gdjs.BicaCode.GDnoObjects1= [];
gdjs.BicaCode.GDnoObjects2= [];
gdjs.BicaCode.GDnoObjects3= [];
gdjs.BicaCode.GDyesObjects1= [];
gdjs.BicaCode.GDyesObjects2= [];
gdjs.BicaCode.GDyesObjects3= [];
gdjs.BicaCode.GDfundoObjects1= [];
gdjs.BicaCode.GDfundoObjects2= [];
gdjs.BicaCode.GDfundoObjects3= [];
gdjs.BicaCode.GDtask_95confirmationObjects1= [];
gdjs.BicaCode.GDtask_95confirmationObjects2= [];
gdjs.BicaCode.GDtask_95confirmationObjects3= [];


gdjs.BicaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12770332);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), runtimeScene.getScene().getVariables().get("error"), true);
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


};gdjs.BicaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12778764);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.BicaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12781036);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.BicaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12782532);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.BicaCode.eventsList4 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.BicaCode.GDnext_95sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.BicaCode.GDnext_95sceneObjects1.length === 0 ) ? "" :gdjs.BicaCode.GDnext_95sceneObjects1[0].getString()), false);
}}

}


};gdjs.BicaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.BicaCode.GDnext_95sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(19);
}{for(var i = 0, len = gdjs.BicaCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDnext_95sceneObjects1[i].setString("Percurso Camoes");
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
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.BicaCode.GDnext_95sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.BicaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.BicaCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.BicaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.BicaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.BicaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.BicaCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDtask_95confirmationObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.BicaCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDnext_95sceneObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.BicaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.BicaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.BicaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.BicaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.BicaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.BicaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.BicaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.BicaCode.GDprox_95localObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BicaCode.GDprox_95localObjects1.length;i<l;++i) {
    if ( gdjs.BicaCode.GDprox_95localObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BicaCode.GDprox_95localObjects1[k] = gdjs.BicaCode.GDprox_95localObjects1[i];
        ++k;
    }
}
gdjs.BicaCode.GDprox_95localObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.BicaCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.BicaCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.BicaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.BicaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.BicaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.BicaCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDtask_95confirmationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.BicaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.BicaCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BicaCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.BicaCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.BicaCode.GDnoObjects1[k] = gdjs.BicaCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.BicaCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BicaCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.BicaCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BicaCode.GDnoObjects1[k] = gdjs.BicaCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.BicaCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.BicaCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.BicaCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.BicaCode.GDyesObjects1);
{for(var i = 0, len = gdjs.BicaCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.BicaCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.BicaCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDtask_95confirmationObjects1[i].hide();
}
}
{ //Subevents
gdjs.BicaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.BicaCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BicaCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.BicaCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.BicaCode.GDyesObjects1[k] = gdjs.BicaCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.BicaCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BicaCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.BicaCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BicaCode.GDyesObjects1[k] = gdjs.BicaCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.BicaCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.BicaCode.eventsList3(runtimeScene);} //End of subevents
}

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
gdjs.BicaCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.BicaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BicaCode.GDscoreObjects1.length = 0;
gdjs.BicaCode.GDscoreObjects2.length = 0;
gdjs.BicaCode.GDscoreObjects3.length = 0;
gdjs.BicaCode.GDnext_95sceneObjects1.length = 0;
gdjs.BicaCode.GDnext_95sceneObjects2.length = 0;
gdjs.BicaCode.GDnext_95sceneObjects3.length = 0;
gdjs.BicaCode.GDURLObjects1.length = 0;
gdjs.BicaCode.GDURLObjects2.length = 0;
gdjs.BicaCode.GDURLObjects3.length = 0;
gdjs.BicaCode.GDURLdesvioObjects1.length = 0;
gdjs.BicaCode.GDURLdesvioObjects2.length = 0;
gdjs.BicaCode.GDURLdesvioObjects3.length = 0;
gdjs.BicaCode.GDDesvioObjects1.length = 0;
gdjs.BicaCode.GDDesvioObjects2.length = 0;
gdjs.BicaCode.GDDesvioObjects3.length = 0;
gdjs.BicaCode.GDokdesvioObjects1.length = 0;
gdjs.BicaCode.GDokdesvioObjects2.length = 0;
gdjs.BicaCode.GDokdesvioObjects3.length = 0;
gdjs.BicaCode.GDprox_95localObjects1.length = 0;
gdjs.BicaCode.GDprox_95localObjects2.length = 0;
gdjs.BicaCode.GDprox_95localObjects3.length = 0;
gdjs.BicaCode.GDnoObjects1.length = 0;
gdjs.BicaCode.GDnoObjects2.length = 0;
gdjs.BicaCode.GDnoObjects3.length = 0;
gdjs.BicaCode.GDyesObjects1.length = 0;
gdjs.BicaCode.GDyesObjects2.length = 0;
gdjs.BicaCode.GDyesObjects3.length = 0;
gdjs.BicaCode.GDfundoObjects1.length = 0;
gdjs.BicaCode.GDfundoObjects2.length = 0;
gdjs.BicaCode.GDfundoObjects3.length = 0;
gdjs.BicaCode.GDtask_95confirmationObjects1.length = 0;
gdjs.BicaCode.GDtask_95confirmationObjects2.length = 0;
gdjs.BicaCode.GDtask_95confirmationObjects3.length = 0;

gdjs.BicaCode.eventsList5(runtimeScene);

return;

}

gdjs['BicaCode'] = gdjs.BicaCode;
