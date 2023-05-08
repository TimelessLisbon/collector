gdjs.S_46_32Roque_32fimCode = {};
gdjs.S_46_32Roque_32fimCode.GDscoreObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDscoreObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDnoObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDnoObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDyesObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDyesObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDfundoObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDfundoObjects2= [];
gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects1= [];
gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects2= [];


gdjs.S_46_32Roque_32fimCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
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
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32fimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32fimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32fimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32fimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32fimCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
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
}}

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
}}

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
{runtimeScene.getGame().getVariables().get("score").add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Carmo", false);
}}

}


};

gdjs.S_46_32Roque_32fimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S_46_32Roque_32fimCode.GDscoreObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDscoreObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDprox_95localObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnoObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDnoObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDyesObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDyesObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundoObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDfundoObjects2.length = 0;
gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects1.length = 0;
gdjs.S_46_32Roque_32fimCode.GDtask_95confirmationObjects2.length = 0;

gdjs.S_46_32Roque_32fimCode.eventsList0(runtimeScene);

return;

}

gdjs['S_46_32Roque_32fimCode'] = gdjs.S_46_32Roque_32fimCode;
