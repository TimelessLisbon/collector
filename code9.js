gdjs.Bolo_32de_32BacalhauCode = {};
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDURLObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDURLObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDURLObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDURLdesvioObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDURLdesvioObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDURLdesvioObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDDesvioObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDDesvioObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDDesvioObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDokdesvioObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDokdesvioObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDokdesvioObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects3= [];
gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects3= [];


gdjs.Bolo_32de_32BacalhauCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10724700);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10726644);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}}

}


};gdjs.Bolo_32de_32BacalhauCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10733132);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Bolo_32de_32BacalhauCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10735404);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Bolo_32de_32BacalhauCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10736900);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Bolo_32de_32BacalhauCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10740068);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects1.length === 0 ) ? "" :gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects1[0].getString()), false);
}}

}


};gdjs.Bolo_32de_32BacalhauCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(8);
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects1[i].setString("Percurso Brasileira");
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
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Bolo_32de_32BacalhauCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects1.length;i<l;++i) {
    if ( gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects1[k] = gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects1[i];
        ++k;
    }
}
gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Bolo_32de_32BacalhauCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[k] = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[k] = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects1[i].hide();
}
}
{ //Subevents
gdjs.Bolo_32de_32BacalhauCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1[k] = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1[k] = gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Bolo_32de_32BacalhauCode.eventsList3(runtimeScene);} //End of subevents
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
gdjs.Bolo_32de_32BacalhauCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Bolo_32de_32BacalhauCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnext_95sceneObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDURLObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDURLObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDURLObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDURLdesvioObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDURLdesvioObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDURLdesvioObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDDesvioObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDDesvioObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDDesvioObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDokdesvioObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDokdesvioObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDokdesvioObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects3.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects3.length = 0;

gdjs.Bolo_32de_32BacalhauCode.eventsList5(runtimeScene);

return;

}

gdjs['Bolo_32de_32BacalhauCode'] = gdjs.Bolo_32de_32BacalhauCode;
