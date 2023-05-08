gdjs.S_46_32Roque_32EntradaCode = {};
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDokObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDokObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects2= [];


gdjs.S_46_32Roque_32EntradaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32EntradaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setString(gdjs.evtTools.string.toUpperCase((gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].getString())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32EntradaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].getString() != "SYSTEM" ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "wrong");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32EntradaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].getString() == "SYSTEM" ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S. Roque fim", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.S_46_32Roque_32EntradaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
/* Reuse gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1 */
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setString("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].setDisabled(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wrong");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.S_46_32Roque_32EntradaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects2.length = 0;

gdjs.S_46_32Roque_32EntradaCode.eventsList0(runtimeScene);

return;

}

gdjs['S_46_32Roque_32EntradaCode'] = gdjs.S_46_32Roque_32EntradaCode;
