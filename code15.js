gdjs.Brasileira_32EnigmaCode = {};
gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final = [];

gdjs.Brasileira_32EnigmaCode.GDscoreObjects1= [];
gdjs.Brasileira_32EnigmaCode.GDscoreObjects2= [];
gdjs.Brasileira_32EnigmaCode.GDscoreObjects3= [];
gdjs.Brasileira_32EnigmaCode.GDnext_95sceneObjects1= [];
gdjs.Brasileira_32EnigmaCode.GDnext_95sceneObjects2= [];
gdjs.Brasileira_32EnigmaCode.GDnext_95sceneObjects3= [];
gdjs.Brasileira_32EnigmaCode.GDURLObjects1= [];
gdjs.Brasileira_32EnigmaCode.GDURLObjects2= [];
gdjs.Brasileira_32EnigmaCode.GDURLObjects3= [];
gdjs.Brasileira_32EnigmaCode.GDokObjects1= [];
gdjs.Brasileira_32EnigmaCode.GDokObjects2= [];
gdjs.Brasileira_32EnigmaCode.GDokObjects3= [];
gdjs.Brasileira_32EnigmaCode.GDfundoObjects1= [];
gdjs.Brasileira_32EnigmaCode.GDfundoObjects2= [];
gdjs.Brasileira_32EnigmaCode.GDfundoObjects3= [];
gdjs.Brasileira_32EnigmaCode.GDclueObjects1= [];
gdjs.Brasileira_32EnigmaCode.GDclueObjects2= [];
gdjs.Brasileira_32EnigmaCode.GDclueObjects3= [];
gdjs.Brasileira_32EnigmaCode.GDanswerObjects1= [];
gdjs.Brasileira_32EnigmaCode.GDanswerObjects2= [];
gdjs.Brasileira_32EnigmaCode.GDanswerObjects3= [];


gdjs.Brasileira_32EnigmaCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_amarela"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_azul"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_castanha"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_rosa"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_roxa"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_verde"));
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Logout", false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14326020);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue"))), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().get("hour"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().get("minute"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14328516);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14333356);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14335148);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14339564);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Brasileira_32EnigmaCode.GDanswerObjects1, gdjs.Brasileira_32EnigmaCode.GDanswerObjects2);

{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", (( gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length === 0 ) ? "" :gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[0].getString()), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue"))), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14340540);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14342276);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14344108);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14345940);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14347628);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14351708);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14355292);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14356420);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14359188);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Answer", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Brasileira_32EnigmaCode.GDnext_95sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Brasileira_32EnigmaCode.GDnext_95sceneObjects1.length === 0 ) ? "" :gdjs.Brasileira_32EnigmaCode.GDnext_95sceneObjects1[0].getString()), false);
}}

}


};gdjs.Brasileira_32EnigmaCode.eventsList14 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("UID_atual").setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Amarela", runtimeScene.getScene().getVariables().get("UID_amarela"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Azul", runtimeScene.getScene().getVariables().get("UID_azul"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Castanha", runtimeScene.getScene().getVariables().get("UID_castanha"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Rosa", runtimeScene.getScene().getVariables().get("UID_rosa"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Roxa", runtimeScene.getScene().getVariables().get("UID_roxa"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Verde", runtimeScene.getScene().getVariables().get("UID_verde"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UID") > 5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Brasileira_32EnigmaCode.GDnext_95sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(13);
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDnext_95sceneObjects1[i].setString("Brasileira Fim");
}
}{runtimeScene.getScene().getVariables().get("answer").setString("BRASILEIRA");
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Brasileira_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Brasileira_32EnigmaCode.GDokObjects1);
{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Brasileira_32EnigmaCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].getWidth())) / 2);
}
}{runtimeScene.getScene().getVariables().get("clue").setNumber(0);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("hour")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("minute")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Brasileira_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Brasileira_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Brasileira_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].setString(gdjs.evtTools.string.toUpperCase((gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].getString())));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Brasileira_32EnigmaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDfundoObjects1[i].setAnimation((gdjs.Brasileira_32EnigmaCode.GDfundoObjects1[i].getAnimation()) + 1);
}
}
{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown object - skipped. */if (isConditionTrue_0) {
isConditionTrue_0 = false;
/* Unknown object - skipped. */}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Brasileira_32EnigmaCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDfundoObjects1[i].setAnimation((gdjs.Brasileira_32EnigmaCode.GDfundoObjects1[i].getAnimation()) - 1);
}
}
{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Brasileira_32EnigmaCode.GDfundoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDfundoObjects1[i].getAnimation() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDfundoObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Brasileira_32EnigmaCode.GDfundoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDfundoObjects1[i].getAnimation() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDfundoObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.Brasileira_32EnigmaCode.GDfundoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDfundoObjects1[i].getAnimation() == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDfundoObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
{/* Unknown object - skipped. */}{/* Unknown object - skipped. */}}

}


{

gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Brasileira_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Brasileira_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDclueObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDokObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].getString() != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].getString() != "A " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("clue").add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}
{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList4(runtimeScene);} //End of subevents
}

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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Brasileira_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList5(runtimeScene);} //End of subevents
}

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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Brasileira_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList6(runtimeScene);} //End of subevents
}

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
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Brasileira_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].setString("");
}
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].hide();
}
}
{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Brasileira_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Brasileira_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDclueObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDokObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects1);
/* Reuse gdjs.Brasileira_32EnigmaCode.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Brasileira_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDclueObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Brasileira_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDclueObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Brasileira_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Brasileira_32EnigmaCode.GDokObjects1);
gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDclueObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDokObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[k] = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i].getString() == "A " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[k] = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final, gdjs.Brasileira_32EnigmaCode.GDanswerObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 0;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Brasileira_32EnigmaCode.GDanswerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].setString("CORRECTO");
}
}
{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Brasileira_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Brasileira_32EnigmaCode.GDokObjects1);
gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDclueObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDokObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[k] = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i].getString() == "A " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[k] = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final, gdjs.Brasileira_32EnigmaCode.GDanswerObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Brasileira_32EnigmaCode.GDanswerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(7);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].setString("CORRECTO");
}
}
{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Brasileira_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Brasileira_32EnigmaCode.GDokObjects1);
gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDclueObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDokObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[k] = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i].getString() == "A " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[k] = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final, gdjs.Brasileira_32EnigmaCode.GDanswerObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Brasileira_32EnigmaCode.GDanswerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(5);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].setString("CORRECTO");
}
}
{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Brasileira_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Brasileira_32EnigmaCode.GDokObjects1);
gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDclueObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Brasileira_32EnigmaCode.GDokObjects1[k] = gdjs.Brasileira_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i].getString() == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[k] = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Brasileira_32EnigmaCode.GDanswerObjects2);
for (var i = 0, k = 0, l = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length;i<l;++i) {
    if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i].getString() == "A " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("answer")) ) {
        isConditionTrue_1 = true;
        gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[k] = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[i];
        ++k;
    }
}
gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.indexOf(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]) === -1 )
            gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final.push(gdjs.Brasileira_32EnigmaCode.GDanswerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Brasileira_32EnigmaCode.GDanswerObjects1_1final, gdjs.Brasileira_32EnigmaCode.GDanswerObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Brasileira_32EnigmaCode.GDanswerObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).add(3);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{for(var i = 0, len = gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Brasileira_32EnigmaCode.GDanswerObjects1[i].setString("CORRECTO");
}
}
{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.3;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Brasileira_32EnigmaCode.eventsList13(runtimeScene);} //End of subevents
}

}


};

gdjs.Brasileira_32EnigmaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Brasileira_32EnigmaCode.GDscoreObjects1.length = 0;
gdjs.Brasileira_32EnigmaCode.GDscoreObjects2.length = 0;
gdjs.Brasileira_32EnigmaCode.GDscoreObjects3.length = 0;
gdjs.Brasileira_32EnigmaCode.GDnext_95sceneObjects1.length = 0;
gdjs.Brasileira_32EnigmaCode.GDnext_95sceneObjects2.length = 0;
gdjs.Brasileira_32EnigmaCode.GDnext_95sceneObjects3.length = 0;
gdjs.Brasileira_32EnigmaCode.GDURLObjects1.length = 0;
gdjs.Brasileira_32EnigmaCode.GDURLObjects2.length = 0;
gdjs.Brasileira_32EnigmaCode.GDURLObjects3.length = 0;
gdjs.Brasileira_32EnigmaCode.GDokObjects1.length = 0;
gdjs.Brasileira_32EnigmaCode.GDokObjects2.length = 0;
gdjs.Brasileira_32EnigmaCode.GDokObjects3.length = 0;
gdjs.Brasileira_32EnigmaCode.GDfundoObjects1.length = 0;
gdjs.Brasileira_32EnigmaCode.GDfundoObjects2.length = 0;
gdjs.Brasileira_32EnigmaCode.GDfundoObjects3.length = 0;
gdjs.Brasileira_32EnigmaCode.GDclueObjects1.length = 0;
gdjs.Brasileira_32EnigmaCode.GDclueObjects2.length = 0;
gdjs.Brasileira_32EnigmaCode.GDclueObjects3.length = 0;
gdjs.Brasileira_32EnigmaCode.GDanswerObjects1.length = 0;
gdjs.Brasileira_32EnigmaCode.GDanswerObjects2.length = 0;
gdjs.Brasileira_32EnigmaCode.GDanswerObjects3.length = 0;

gdjs.Brasileira_32EnigmaCode.eventsList14(runtimeScene);

return;

}

gdjs['Brasileira_32EnigmaCode'] = gdjs.Brasileira_32EnigmaCode;
