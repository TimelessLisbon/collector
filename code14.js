gdjs.Sta_32Catarina_32EnigmaCode = {};
gdjs.Sta_32Catarina_32EnigmaCode.GDscoreObjects1= [];
gdjs.Sta_32Catarina_32EnigmaCode.GDscoreObjects2= [];
gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1= [];
gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects2= [];
gdjs.Sta_32Catarina_32EnigmaCode.GDfundoObjects1= [];
gdjs.Sta_32Catarina_32EnigmaCode.GDfundoObjects2= [];
gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1= [];
gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects2= [];
gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1= [];
gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects2= [];


gdjs.Sta_32Catarina_32EnigmaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{runtimeScene.getScene().getVariables().get("clue").setNumber(0);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32Catarina_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32Catarina_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Sta_32Catarina_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].setString(gdjs.evtTools.string.toUpperCase((gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].getString())));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].getString() != "DRAMA" ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length = k;
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("clue").add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].setString("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].setString("");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "clue") > 0.3;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].setString("");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1);
/* Reuse gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].getString() == "DRAMA" ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 0;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sta Catarina Fim", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].getString() == "DRAMA" ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(7);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sta Catarina Fim", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].getString() == "DRAMA" ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(5);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sta Catarina Fim", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i].getString() == "DRAMA" ) {
        isConditionTrue_0 = true;
        gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[k] = gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(3);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sta Catarina Fim", false);
}}

}


};

gdjs.Sta_32Catarina_32EnigmaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Sta_32Catarina_32EnigmaCode.GDscoreObjects1.length = 0;
gdjs.Sta_32Catarina_32EnigmaCode.GDscoreObjects2.length = 0;
gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects1.length = 0;
gdjs.Sta_32Catarina_32EnigmaCode.GDokObjects2.length = 0;
gdjs.Sta_32Catarina_32EnigmaCode.GDfundoObjects1.length = 0;
gdjs.Sta_32Catarina_32EnigmaCode.GDfundoObjects2.length = 0;
gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects1.length = 0;
gdjs.Sta_32Catarina_32EnigmaCode.GDclueObjects2.length = 0;
gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects1.length = 0;
gdjs.Sta_32Catarina_32EnigmaCode.GDanswerObjects2.length = 0;

gdjs.Sta_32Catarina_32EnigmaCode.eventsList0(runtimeScene);

return;

}

gdjs['Sta_32Catarina_32EnigmaCode'] = gdjs.Sta_32Catarina_32EnigmaCode;
