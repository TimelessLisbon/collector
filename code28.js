gdjs.Camoes_32EnigmaCode = {};
gdjs.Camoes_32EnigmaCode.GDPos1Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos2Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final = [];

gdjs.Camoes_32EnigmaCode.GDPos3Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos4Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos5Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos6Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos7Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDPos8Objects1_1final = [];

gdjs.Camoes_32EnigmaCode.GDscoreObjects1= [];
gdjs.Camoes_32EnigmaCode.GDscoreObjects2= [];
gdjs.Camoes_32EnigmaCode.GDscoreObjects3= [];
gdjs.Camoes_32EnigmaCode.GDnext_95sceneObjects1= [];
gdjs.Camoes_32EnigmaCode.GDnext_95sceneObjects2= [];
gdjs.Camoes_32EnigmaCode.GDnext_95sceneObjects3= [];
gdjs.Camoes_32EnigmaCode.GDURLObjects1= [];
gdjs.Camoes_32EnigmaCode.GDURLObjects2= [];
gdjs.Camoes_32EnigmaCode.GDURLObjects3= [];
gdjs.Camoes_32EnigmaCode.GDokObjects1= [];
gdjs.Camoes_32EnigmaCode.GDokObjects2= [];
gdjs.Camoes_32EnigmaCode.GDokObjects3= [];
gdjs.Camoes_32EnigmaCode.GDfundoObjects1= [];
gdjs.Camoes_32EnigmaCode.GDfundoObjects2= [];
gdjs.Camoes_32EnigmaCode.GDfundoObjects3= [];
gdjs.Camoes_32EnigmaCode.GDclueObjects1= [];
gdjs.Camoes_32EnigmaCode.GDclueObjects2= [];
gdjs.Camoes_32EnigmaCode.GDclueObjects3= [];
gdjs.Camoes_32EnigmaCode.GDanswerObjects1= [];
gdjs.Camoes_32EnigmaCode.GDanswerObjects2= [];
gdjs.Camoes_32EnigmaCode.GDanswerObjects3= [];
gdjs.Camoes_32EnigmaCode.GDPos1Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos1Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos1Objects3= [];
gdjs.Camoes_32EnigmaCode.GDPos2Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos2Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos2Objects3= [];
gdjs.Camoes_32EnigmaCode.GDPos3Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos3Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos3Objects3= [];
gdjs.Camoes_32EnigmaCode.GDPos4Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos4Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos4Objects3= [];
gdjs.Camoes_32EnigmaCode.GDPos5Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos5Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos5Objects3= [];
gdjs.Camoes_32EnigmaCode.GDPos6Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos6Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos6Objects3= [];
gdjs.Camoes_32EnigmaCode.GDPos7Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos7Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos7Objects3= [];
gdjs.Camoes_32EnigmaCode.GDPos8Objects1= [];
gdjs.Camoes_32EnigmaCode.GDPos8Objects2= [];
gdjs.Camoes_32EnigmaCode.GDPos8Objects3= [];


gdjs.Camoes_32EnigmaCode.eventsList0 = function(runtimeScene) {

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


};gdjs.Camoes_32EnigmaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14338308);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
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
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14340348);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 0, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14347796);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue"))), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14348364);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos1Objects1Objects = Hashtable.newFrom({"Pos1": gdjs.Camoes_32EnigmaCode.GDPos1Objects1});
gdjs.Camoes_32EnigmaCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14349500);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos2Objects1Objects = Hashtable.newFrom({"Pos2": gdjs.Camoes_32EnigmaCode.GDPos2Objects1});
gdjs.Camoes_32EnigmaCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14351164);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos3Objects1Objects = Hashtable.newFrom({"Pos3": gdjs.Camoes_32EnigmaCode.GDPos3Objects1});
gdjs.Camoes_32EnigmaCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14353852);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos4Objects1Objects = Hashtable.newFrom({"Pos4": gdjs.Camoes_32EnigmaCode.GDPos4Objects1});
gdjs.Camoes_32EnigmaCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14356348);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos5Objects1Objects = Hashtable.newFrom({"Pos5": gdjs.Camoes_32EnigmaCode.GDPos5Objects1});
gdjs.Camoes_32EnigmaCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14358508);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos6Objects1Objects = Hashtable.newFrom({"Pos6": gdjs.Camoes_32EnigmaCode.GDPos6Objects1});
gdjs.Camoes_32EnigmaCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14360812);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos7Objects1Objects = Hashtable.newFrom({"Pos7": gdjs.Camoes_32EnigmaCode.GDPos7Objects1});
gdjs.Camoes_32EnigmaCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14362988);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos8Objects1Objects = Hashtable.newFrom({"Pos8": gdjs.Camoes_32EnigmaCode.GDPos8Objects1});
gdjs.Camoes_32EnigmaCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14365148);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14367300);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14368716);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14370340);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "wrong-47985.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14371788);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14375036);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14380348);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14384412);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14389724);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Clues", "", runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Camoes Fim", false);
}}

}


};gdjs.Camoes_32EnigmaCode.eventsList20 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}{gdjs.evtsExt__Geolocation__LocatePlayer.func(runtimeScene, runtimeScene.getScene().getVariables().get("GPS"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
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
gdjs.Camoes_32EnigmaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDokObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.Camoes_32EnigmaCode.GDokObjects1[i].getWidth())) / 2);
}
}{runtimeScene.getScene().getVariables().get("clue").setNumber(0);
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(25);
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("hour")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("minute")));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().get("next"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Camoes_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
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
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Camoes_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Camoes_32EnigmaCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = 0;

gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Camoes_32EnigmaCode.GDPos1Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos2Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos3Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos4Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos5Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos6Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos7Objects1_1final.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos8Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos1Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects2[i].getAnimation() != 4 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos1Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos1Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos1Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos1Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos1Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos1Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos1Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() != 6 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() != 5 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos3Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects2[i].getAnimation() != 0 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos3Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos3Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos3Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos3Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos3Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos3Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos3Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos4Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects2[i].getAnimation() != 7 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos4Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos4Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos4Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos4Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos4Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos4Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos4Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos5Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects2[i].getAnimation() != 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos5Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos5Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos5Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos5Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos5Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos5Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos5Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos6Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects2[i].getAnimation() != 3 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos6Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos6Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos6Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos6Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos6Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos6Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos6Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos7Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects2[i].getAnimation() != 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos7Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos7Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos7Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos7Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos7Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos7Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos7Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos8Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects2[i].getAnimation() != 2 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos8Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos8Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos8Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos8Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects1_1final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos8Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos8Objects1_1final.push(gdjs.Camoes_32EnigmaCode.GDPos8Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos1Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos1Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos2Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos2Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos3Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos3Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos4Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos4Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos5Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos5Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos6Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos6Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos7Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos7Objects1);
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos8Objects1_1final, gdjs.Camoes_32EnigmaCode.GDPos8Objects1);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("clue").add(1);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "clue");
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos1Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].getAnimation()) + 1);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos1Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos2Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos2Objects1[i].getAnimation()) + 1);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos2Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos2Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].getAnimation()) + 1);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos3Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos4Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos4Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].getAnimation()) + 1);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos4Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos4Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos5Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos5Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].getAnimation()) + 1);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos5Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos5Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos6Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos6Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].getAnimation()) + 1);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos6Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos6Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos7Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos7Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].getAnimation()) + 1);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos7Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos7Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Camoes_32EnigmaCode.mapOfGDgdjs_46Camoes_9532EnigmaCode_46GDPos8Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos8Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].setAnimation((gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].getAnimation()) + 1);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].getAnimation() == 8 ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDPos8Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDPos8Objects1 */
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].setAnimation(0);
}
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
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].setAnimation(0);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList11(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList12(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].setAnimation(2);
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Camoes_32EnigmaCode.GDclueObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "clue");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "clue");
}{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].hide();
}
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Camoes_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDanswerObjects1[i].setDisabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answer"), gdjs.Camoes_32EnigmaCode.GDanswerObjects1);
{for(var i = 0, len = gdjs.Camoes_32EnigmaCode.GDanswerObjects1.length ;i < len;++i) {
    gdjs.Camoes_32EnigmaCode.GDanswerObjects1[i].setDisabled(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].getAnimation() == 4 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 6 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 5 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final, gdjs.Camoes_32EnigmaCode.GDPos2Objects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].getAnimation() == 0 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].getAnimation() == 7 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos4Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].getAnimation() == 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos5Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].getAnimation() == 3 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos6Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].getAnimation() == 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos7Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].getAnimation() == 2 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos8Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = k;
}
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(10);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].getAnimation() == 4 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 6 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 5 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final, gdjs.Camoes_32EnigmaCode.GDPos2Objects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].getAnimation() == 0 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].getAnimation() == 7 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos4Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].getAnimation() == 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos5Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].getAnimation() == 3 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos6Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].getAnimation() == 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos7Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].getAnimation() == 2 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos8Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = k;
}
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(7);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList16(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].getAnimation() == 4 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 6 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 5 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final, gdjs.Camoes_32EnigmaCode.GDPos2Objects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].getAnimation() == 0 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].getAnimation() == 7 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos4Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].getAnimation() == 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos5Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].getAnimation() == 3 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos6Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].getAnimation() == 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos7Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].getAnimation() == 2 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos8Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = k;
}
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(5);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Pos1"), gdjs.Camoes_32EnigmaCode.GDPos1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos3"), gdjs.Camoes_32EnigmaCode.GDPos3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos4"), gdjs.Camoes_32EnigmaCode.GDPos4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos5"), gdjs.Camoes_32EnigmaCode.GDPos5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos6"), gdjs.Camoes_32EnigmaCode.GDPos6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos7"), gdjs.Camoes_32EnigmaCode.GDPos7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Pos8"), gdjs.Camoes_32EnigmaCode.GDPos8Objects1);
gdjs.copyArray(runtimeScene.getObjects("clue"), gdjs.Camoes_32EnigmaCode.GDclueObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.Camoes_32EnigmaCode.GDokObjects1);
gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDclueObjects1.length;i<l;++i) {
    if ( !(gdjs.Camoes_32EnigmaCode.GDclueObjects1[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDclueObjects1[k] = gdjs.Camoes_32EnigmaCode.GDclueObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Camoes_32EnigmaCode.GDokObjects1[k] = gdjs.Camoes_32EnigmaCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("clue")) >= 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i].getAnimation() == 4 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos1Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos1Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 6 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Pos2"), gdjs.Camoes_32EnigmaCode.GDPos2Objects2);
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i].getAnimation() == 5 ) {
        isConditionTrue_2 = true;
        gdjs.Camoes_32EnigmaCode.GDPos2Objects2[k] = gdjs.Camoes_32EnigmaCode.GDPos2Objects2[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.indexOf(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]) === -1 )
            gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final.push(gdjs.Camoes_32EnigmaCode.GDPos2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Camoes_32EnigmaCode.GDPos2Objects1_2final, gdjs.Camoes_32EnigmaCode.GDPos2Objects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i].getAnimation() == 0 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos3Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos3Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i].getAnimation() == 7 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos4Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos4Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i].getAnimation() == 5 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos5Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos5Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i].getAnimation() == 3 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos6Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos6Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i].getAnimation() == 1 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos7Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos7Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length;i<l;++i) {
    if ( gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i].getAnimation() == 2 ) {
        isConditionTrue_1 = true;
        gdjs.Camoes_32EnigmaCode.GDPos8Objects1[k] = gdjs.Camoes_32EnigmaCode.GDPos8Objects1[i];
        ++k;
    }
}
gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = k;
}
}
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(3);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Camoes_32EnigmaCode.eventsList19(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("next")) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().get("next").setString("");
}}

}


};

gdjs.Camoes_32EnigmaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Camoes_32EnigmaCode.GDscoreObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDscoreObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDscoreObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDnext_95sceneObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDnext_95sceneObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDnext_95sceneObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDURLObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDURLObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDURLObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDokObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDokObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDokObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDfundoObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDfundoObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDfundoObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDclueObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDclueObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDclueObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDanswerObjects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDanswerObjects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDanswerObjects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos1Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos1Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos1Objects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos2Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos2Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos2Objects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos3Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos3Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos3Objects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos4Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos4Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos4Objects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos5Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos5Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos5Objects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos6Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos6Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos6Objects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos7Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos7Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos7Objects3.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos8Objects1.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos8Objects2.length = 0;
gdjs.Camoes_32EnigmaCode.GDPos8Objects3.length = 0;

gdjs.Camoes_32EnigmaCode.eventsList20(runtimeScene);

return;

}

gdjs['Camoes_32EnigmaCode'] = gdjs.Camoes_32EnigmaCode;
