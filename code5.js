gdjs.S_46_32Roque_32EntradaCode = {};
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDnext_95sceneObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDnext_95sceneObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDnext_95sceneObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDURLdesvioObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDURLdesvioObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDURLdesvioObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDDesvioObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDDesvioObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDDesvioObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDokdesvioObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDokdesvioObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDokdesvioObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDokObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDokObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDokObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects3= [];
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1= [];
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects2= [];
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects3= [];


gdjs.S_46_32Roque_32EntradaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12833788);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12833948);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12839324);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12840860);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12843676);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12846532);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32EntradaCode.GDnext_95sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.S_46_32Roque_32EntradaCode.GDnext_95sceneObjects1.length === 0 ) ? "" :gdjs.S_46_32Roque_32EntradaCode.GDnext_95sceneObjects1[0].getString()), false);
}}

}


};gdjs.S_46_32Roque_32EntradaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.S_46_32Roque_32EntradaCode.GDnext_95sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(4);
}{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDnext_95sceneObjects1[i].setString("S. Roque fim");
}
}{runtimeScene.getScene().getVariables().get("answer").setString("SYSTEM");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "PASTEL DE NATA";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1[i].setAnimationName("pastel de nata");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "PORTO";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1[i].setAnimationName("porto");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "SARDINHAS";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1[i].setAnimationName("sardinhas");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "BARCOS REBELOS";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1[i].setAnimationName("barcos rebelos");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "LADY OF FATIMA";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1[i].setAnimationName("lady of fatima");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "GALO DE BARCELOS";
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1[i].setAnimationName("galos de barcelos");
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
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
    if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
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
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList1(runtimeScene);} //End of subevents
}

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
    if ( gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_0 = true;
        gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[k] = gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList2(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList3(runtimeScene);} //End of subevents
}

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
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList4(runtimeScene);} //End of subevents
}

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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.S_46_32Roque_32EntradaCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.S_46_32Roque_32EntradaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDscoreObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDnext_95sceneObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDnext_95sceneObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDnext_95sceneObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLdesvioObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLdesvioObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDURLdesvioObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDDesvioObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDDesvioObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDDesvioObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokdesvioObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokdesvioObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokdesvioObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDokObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDfundoObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDanswerObjects3.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects1.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects2.length = 0;
gdjs.S_46_32Roque_32EntradaCode.GDwrongObjects3.length = 0;

gdjs.S_46_32Roque_32EntradaCode.eventsList6(runtimeScene);

return;

}

gdjs['S_46_32Roque_32EntradaCode'] = gdjs.S_46_32Roque_32EntradaCode;
