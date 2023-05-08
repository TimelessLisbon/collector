gdjs.BicaCode = {};
gdjs.BicaCode.GDscoreObjects1= [];
gdjs.BicaCode.GDscoreObjects2= [];
gdjs.BicaCode.GDprox_95localObjects1= [];
gdjs.BicaCode.GDprox_95localObjects2= [];
gdjs.BicaCode.GDnoObjects1= [];
gdjs.BicaCode.GDnoObjects2= [];
gdjs.BicaCode.GDyesObjects1= [];
gdjs.BicaCode.GDyesObjects2= [];
gdjs.BicaCode.GDfundoObjects1= [];
gdjs.BicaCode.GDfundoObjects2= [];
gdjs.BicaCode.GDtask_95confirmationObjects1= [];
gdjs.BicaCode.GDtask_95confirmationObjects2= [];


gdjs.BicaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
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
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.BicaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.BicaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.BicaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.BicaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.BicaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.BicaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.BicaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
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
}}

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
}}

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
{runtimeScene.getGame().getVariables().get("score").add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Camoes", false);
}}

}


};

gdjs.BicaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BicaCode.GDscoreObjects1.length = 0;
gdjs.BicaCode.GDscoreObjects2.length = 0;
gdjs.BicaCode.GDprox_95localObjects1.length = 0;
gdjs.BicaCode.GDprox_95localObjects2.length = 0;
gdjs.BicaCode.GDnoObjects1.length = 0;
gdjs.BicaCode.GDnoObjects2.length = 0;
gdjs.BicaCode.GDyesObjects1.length = 0;
gdjs.BicaCode.GDyesObjects2.length = 0;
gdjs.BicaCode.GDfundoObjects1.length = 0;
gdjs.BicaCode.GDfundoObjects2.length = 0;
gdjs.BicaCode.GDtask_95confirmationObjects1.length = 0;
gdjs.BicaCode.GDtask_95confirmationObjects2.length = 0;

gdjs.BicaCode.eventsList0(runtimeScene);

return;

}

gdjs['BicaCode'] = gdjs.BicaCode;
