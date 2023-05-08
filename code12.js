gdjs.ManteigariaCode = {};
gdjs.ManteigariaCode.GDscoreObjects1= [];
gdjs.ManteigariaCode.GDscoreObjects2= [];
gdjs.ManteigariaCode.GDokObjects1= [];
gdjs.ManteigariaCode.GDokObjects2= [];
gdjs.ManteigariaCode.GDfundoObjects1= [];
gdjs.ManteigariaCode.GDfundoObjects2= [];
gdjs.ManteigariaCode.GDanswerObjects1= [];
gdjs.ManteigariaCode.GDanswerObjects2= [];
gdjs.ManteigariaCode.GDwrongObjects1= [];
gdjs.ManteigariaCode.GDwrongObjects2= [];


gdjs.ManteigariaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.ManteigariaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.ManteigariaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.ManteigariaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.ManteigariaCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDwrongObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.ManteigariaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.ManteigariaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.ManteigariaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].setString(gdjs.evtTools.string.toUpperCase((gdjs.ManteigariaCode.GDanswerObjects1[i].getString())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.ManteigariaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.ManteigariaCode.GDwrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.ManteigariaCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDwrongObjects1[k] = gdjs.ManteigariaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.ManteigariaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDokObjects1[k] = gdjs.ManteigariaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.ManteigariaCode.GDanswerObjects1[i].getString() != "PASTEL DE NATA" ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDanswerObjects1[k] = gdjs.ManteigariaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDanswerObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "wrong");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.ManteigariaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.ManteigariaCode.GDwrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDwrongObjects1.length;i<l;++i) {
    if ( gdjs.ManteigariaCode.GDwrongObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDwrongObjects1[k] = gdjs.ManteigariaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.ManteigariaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDokObjects1[k] = gdjs.ManteigariaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
/* Reuse gdjs.ManteigariaCode.GDwrongObjects1 */
{for(var i = 0, len = gdjs.ManteigariaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 0.3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.ManteigariaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDwrongObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].setString("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "wrong") >= 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.ManteigariaCode.GDwrongObjects1);
{for(var i = 0, len = gdjs.ManteigariaCode.GDwrongObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDwrongObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ManteigariaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.ManteigariaCode.GDanswerObjects1[i].setDisabled(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "wrong");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "wrong");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.ManteigariaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.ManteigariaCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("wrong"), gdjs.ManteigariaCode.GDwrongObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDwrongObjects1.length;i<l;++i) {
    if ( !(gdjs.ManteigariaCode.GDwrongObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDwrongObjects1[k] = gdjs.ManteigariaCode.GDwrongObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDwrongObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.ManteigariaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDokObjects1[k] = gdjs.ManteigariaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ManteigariaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.ManteigariaCode.GDanswerObjects1[i].getString() == "PASTEL DE NATA" ) {
        isConditionTrue_0 = true;
        gdjs.ManteigariaCode.GDanswerObjects1[k] = gdjs.ManteigariaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.ManteigariaCode.GDanswerObjects1.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Percurso Sta Catarina", false);
}}

}


};

gdjs.ManteigariaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ManteigariaCode.GDscoreObjects1.length = 0;
gdjs.ManteigariaCode.GDscoreObjects2.length = 0;
gdjs.ManteigariaCode.GDokObjects1.length = 0;
gdjs.ManteigariaCode.GDokObjects2.length = 0;
gdjs.ManteigariaCode.GDfundoObjects1.length = 0;
gdjs.ManteigariaCode.GDfundoObjects2.length = 0;
gdjs.ManteigariaCode.GDanswerObjects1.length = 0;
gdjs.ManteigariaCode.GDanswerObjects2.length = 0;
gdjs.ManteigariaCode.GDwrongObjects1.length = 0;
gdjs.ManteigariaCode.GDwrongObjects2.length = 0;

gdjs.ManteigariaCode.eventsList0(runtimeScene);

return;

}

gdjs['ManteigariaCode'] = gdjs.ManteigariaCode;
