gdjs.Carmo_32EnigmaCode = {};
gdjs.Carmo_32EnigmaCode.GDscoreObjects1= [];
gdjs.Carmo_32EnigmaCode.GDscoreObjects2= [];
gdjs.Carmo_32EnigmaCode.GDokObjects1= [];
gdjs.Carmo_32EnigmaCode.GDokObjects2= [];
gdjs.Carmo_32EnigmaCode.GDseguinteObjects1= [];
gdjs.Carmo_32EnigmaCode.GDseguinteObjects2= [];
gdjs.Carmo_32EnigmaCode.GDfundoObjects1= [];
gdjs.Carmo_32EnigmaCode.GDfundoObjects2= [];
gdjs.Carmo_32EnigmaCode.GDclueObjects1= [];
gdjs.Carmo_32EnigmaCode.GDclueObjects2= [];
gdjs.Carmo_32EnigmaCode.GDanswerObjects1= [];
gdjs.Carmo_32EnigmaCode.GDanswerObjects2= [];


gdjs.Carmo_32EnigmaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Carmo_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Carmo_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Carmo_32EnigmaCode.GDokObjects1);
{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Carmo_32EnigmaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{runtimeScene.getScene().getVariables().get("clue").setNumber(0);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Carmo_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Carmo_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Carmo_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("seguinte"), gdjs.Carmo_32EnigmaCode.GDseguinteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDseguinteObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDseguinteObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDseguinteObjects1[k] = gdjs.Carmo_32EnigmaCode.GDseguinteObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDseguinteObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Carmo_32EnigmaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDfundoObjects1[i].setAnimation((gdjs.Carmo_32EnigmaCode.GDfundoObjects1[i].getAnimation()) + 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Carmo_32EnigmaCode.GDfundoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDfundoObjects1[i].getAnimation() == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDfundoObjects1[k] = gdjs.Carmo_32EnigmaCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Carmo_32EnigmaCode.GDfundoObjects1 */
{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDfundoObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Carmo_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Carmo_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Carmo_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDclueObjects1[k] = gdjs.Carmo_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].getString() != "7961" ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDanswerObjects1[k] = gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDokObjects1[k] = gdjs.Carmo_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDokObjects1.length = k;
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Carmo_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Carmo_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Carmo_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Carmo_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Carmo_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Carmo_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Carmo_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Carmo_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDclueObjects1[k] = gdjs.Carmo_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDokObjects1[k] = gdjs.Carmo_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Carmo_32EnigmaCode.GDanswerObjects1);
/* Reuse gdjs.Carmo_32EnigmaCode.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Carmo_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDclueObjects1[k] = gdjs.Carmo_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Carmo_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Carmo_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDclueObjects1[k] = gdjs.Carmo_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Carmo_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Carmo_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Carmo_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Carmo_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDclueObjects1[k] = gdjs.Carmo_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDokObjects1[k] = gdjs.Carmo_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].getString() == "7961" ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDanswerObjects1[k] = gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 0;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bolo de Bacalhau", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Carmo_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Carmo_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Carmo_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDclueObjects1[k] = gdjs.Carmo_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDokObjects1[k] = gdjs.Carmo_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].getString() == "7961" ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDanswerObjects1[k] = gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(7);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bolo de Bacalhau", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Carmo_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Carmo_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Carmo_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDclueObjects1[k] = gdjs.Carmo_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDokObjects1[k] = gdjs.Carmo_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].getString() == "7961" ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDanswerObjects1[k] = gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(5);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bolo de Bacalhau", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Carmo_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Carmo_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Carmo_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Carmo_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDclueObjects1[k] = gdjs.Carmo_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDokObjects1[k] = gdjs.Carmo_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i].getString() == "7961" ) {
        isConditionTrue_0 = true;
        gdjs.Carmo_32EnigmaCode.GDanswerObjects1[k] = gdjs.Carmo_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().get("score").add(3);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "fe060f70-b291-47b3-9d21-b3f56ce10567", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("score")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Bolo de Bacalhau", false);
}}

}


};

gdjs.Carmo_32EnigmaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Carmo_32EnigmaCode.GDscoreObjects1.length = 0;
gdjs.Carmo_32EnigmaCode.GDscoreObjects2.length = 0;
gdjs.Carmo_32EnigmaCode.GDokObjects1.length = 0;
gdjs.Carmo_32EnigmaCode.GDokObjects2.length = 0;
gdjs.Carmo_32EnigmaCode.GDseguinteObjects1.length = 0;
gdjs.Carmo_32EnigmaCode.GDseguinteObjects2.length = 0;
gdjs.Carmo_32EnigmaCode.GDfundoObjects1.length = 0;
gdjs.Carmo_32EnigmaCode.GDfundoObjects2.length = 0;
gdjs.Carmo_32EnigmaCode.GDclueObjects1.length = 0;
gdjs.Carmo_32EnigmaCode.GDclueObjects2.length = 0;
gdjs.Carmo_32EnigmaCode.GDanswerObjects1.length = 0;
gdjs.Carmo_32EnigmaCode.GDanswerObjects2.length = 0;

gdjs.Carmo_32EnigmaCode.eventsList0(runtimeScene);

return;

}

gdjs['Carmo_32EnigmaCode'] = gdjs.Carmo_32EnigmaCode;
