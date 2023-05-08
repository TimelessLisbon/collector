gdjs.Bolo_32de_32BacalhauCode = {};
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects2= [];
gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects1= [];
gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects2= [];


gdjs.Bolo_32de_32BacalhauCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
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
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
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
}}

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
}}

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
{runtimeScene.getGame().getVariables().get("score").add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Brasileira", false);
}}

}


};

gdjs.Bolo_32de_32BacalhauCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDscoreObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDprox_95localObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDnoObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDyesObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDfundoObjects2.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects1.length = 0;
gdjs.Bolo_32de_32BacalhauCode.GDtask_95confirmationObjects2.length = 0;

gdjs.Bolo_32de_32BacalhauCode.eventsList0(runtimeScene);

return;

}

gdjs['Bolo_32de_32BacalhauCode'] = gdjs.Bolo_32de_32BacalhauCode;
