gdjs.Brasileira_32FimCode = {};
gdjs.Brasileira_32FimCode.GDscoreObjects1= [];
gdjs.Brasileira_32FimCode.GDscoreObjects2= [];
gdjs.Brasileira_32FimCode.GDprox_95localObjects1= [];
gdjs.Brasileira_32FimCode.GDprox_95localObjects2= [];
gdjs.Brasileira_32FimCode.GDnoObjects1= [];
gdjs.Brasileira_32FimCode.GDnoObjects2= [];
gdjs.Brasileira_32FimCode.GDyesObjects1= [];
gdjs.Brasileira_32FimCode.GDyesObjects2= [];
gdjs.Brasileira_32FimCode.GDfundoObjects1= [];
gdjs.Brasileira_32FimCode.GDfundoObjects2= [];
gdjs.Brasileira_32FimCode.GDtask_95confirmationObjects1= [];
gdjs.Brasileira_32FimCode.GDtask_95confirmationObjects2= [];


gdjs.Brasileira_32FimCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Brasileira_32FimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Brasileira_32FimCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Brasileira_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Brasileira_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32FimCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Brasileira_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32FimCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Brasileira_32FimCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32FimCode.GDtask_95confirmationObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Brasileira_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Brasileira_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32FimCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Brasileira_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Brasileira_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32FimCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Brasileira_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Brasileira_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32FimCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Brasileira_32FimCode.GDprox_95localObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32FimCode.GDprox_95localObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32FimCode.GDprox_95localObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32FimCode.GDprox_95localObjects1[k] = gdjs.Brasileira_32FimCode.GDprox_95localObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32FimCode.GDprox_95localObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Brasileira_32FimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Brasileira_32FimCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Brasileira_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Brasileira_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32FimCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Brasileira_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32FimCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Brasileira_32FimCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32FimCode.GDtask_95confirmationObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Brasileira_32FimCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32FimCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32FimCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32FimCode.GDnoObjects1[k] = gdjs.Brasileira_32FimCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32FimCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32FimCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32FimCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32FimCode.GDnoObjects1[k] = gdjs.Brasileira_32FimCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32FimCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Brasileira_32FimCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Brasileira_32FimCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Brasileira_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Brasileira_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32FimCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Brasileira_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32FimCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Brasileira_32FimCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32FimCode.GDtask_95confirmationObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Brasileira_32FimCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32FimCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32FimCode.GDyesObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32FimCode.GDyesObjects1[k] = gdjs.Brasileira_32FimCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32FimCode.GDyesObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32FimCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32FimCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32FimCode.GDyesObjects1[k] = gdjs.Brasileira_32FimCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32FimCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Manteigaria", false);
}}

}


};

gdjs.Brasileira_32FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Brasileira_32FimCode.GDscoreObjects1.length = 0;
gdjs.Brasileira_32FimCode.GDscoreObjects2.length = 0;
gdjs.Brasileira_32FimCode.GDprox_95localObjects1.length = 0;
gdjs.Brasileira_32FimCode.GDprox_95localObjects2.length = 0;
gdjs.Brasileira_32FimCode.GDnoObjects1.length = 0;
gdjs.Brasileira_32FimCode.GDnoObjects2.length = 0;
gdjs.Brasileira_32FimCode.GDyesObjects1.length = 0;
gdjs.Brasileira_32FimCode.GDyesObjects2.length = 0;
gdjs.Brasileira_32FimCode.GDfundoObjects1.length = 0;
gdjs.Brasileira_32FimCode.GDfundoObjects2.length = 0;
gdjs.Brasileira_32FimCode.GDtask_95confirmationObjects1.length = 0;
gdjs.Brasileira_32FimCode.GDtask_95confirmationObjects2.length = 0;

gdjs.Brasileira_32FimCode.eventsList0(runtimeScene);

return;

}

gdjs['Brasileira_32FimCode'] = gdjs.Brasileira_32FimCode;
