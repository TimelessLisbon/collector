gdjs.FimCode = {};
gdjs.FimCode.GDscoreObjects1= [];
gdjs.FimCode.GDscoreObjects2= [];
gdjs.FimCode.GDnext_95sceneObjects1= [];
gdjs.FimCode.GDnext_95sceneObjects2= [];
gdjs.FimCode.GDURLObjects1= [];
gdjs.FimCode.GDURLObjects2= [];
gdjs.FimCode.GDvideoObjects1= [];
gdjs.FimCode.GDvideoObjects2= [];
gdjs.FimCode.GDNewSpriteObjects1= [];
gdjs.FimCode.GDNewSpriteObjects2= [];
gdjs.FimCode.GDhighlightObjects1= [];
gdjs.FimCode.GDhighlightObjects2= [];
gdjs.FimCode.GDlinkObjects1= [];
gdjs.FimCode.GDlinkObjects2= [];


gdjs.FimCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12736964);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), runtimeScene.getScene().getVariables().get("error"), true);
}{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


};gdjs.FimCode.mapOfGDgdjs_46FimCode_46GDlinkObjects1Objects = Hashtable.newFrom({"link": gdjs.FimCode.GDlinkObjects1});
gdjs.FimCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.FimCode.GDlinkObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FimCode.mapOfGDgdjs_46FimCode_46GDlinkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://drive.google.com/file/d/1P2WK5SXRBqiwyfkfwi7X34bczk8fza_6/view?usp=share_link", runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


};gdjs.FimCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("highlight"), gdjs.FimCode.GDhighlightObjects1);
gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.FimCode.GDlinkObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(25);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "video");
}{for(var i = 0, len = gdjs.FimCode.GDhighlightObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDhighlightObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.FimCode.GDhighlightObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.FimCode.GDlinkObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDlinkObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.FimCode.GDlinkObjects1[i].getWidth())) / 2);
}
}
{ //Subevents
gdjs.FimCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "video") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.FimCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("video"), gdjs.FimCode.GDvideoObjects1);
{for(var i = 0, len = gdjs.FimCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDNewSpriteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.FimCode.GDvideoObjects1.length ;i < len;++i) {
    gdjs.FimCode.GDvideoObjects1[i].play();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "video");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "video");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "video");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("video"), gdjs.FimCode.GDvideoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FimCode.GDvideoObjects1.length;i<l;++i) {
    if ( gdjs.FimCode.GDvideoObjects1[i].isEnded() ) {
        isConditionTrue_0 = true;
        gdjs.FimCode.GDvideoObjects1[k] = gdjs.FimCode.GDvideoObjects1[i];
        ++k;
    }
}
gdjs.FimCode.GDvideoObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("link"), gdjs.FimCode.GDlinkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FimCode.GDlinkObjects1.length;i<l;++i) {
    if ( gdjs.FimCode.GDlinkObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.FimCode.GDlinkObjects1[k] = gdjs.FimCode.GDlinkObjects1[i];
        ++k;
    }
}
gdjs.FimCode.GDlinkObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.FimCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FimCode.GDscoreObjects1.length = 0;
gdjs.FimCode.GDscoreObjects2.length = 0;
gdjs.FimCode.GDnext_95sceneObjects1.length = 0;
gdjs.FimCode.GDnext_95sceneObjects2.length = 0;
gdjs.FimCode.GDURLObjects1.length = 0;
gdjs.FimCode.GDURLObjects2.length = 0;
gdjs.FimCode.GDvideoObjects1.length = 0;
gdjs.FimCode.GDvideoObjects2.length = 0;
gdjs.FimCode.GDNewSpriteObjects1.length = 0;
gdjs.FimCode.GDNewSpriteObjects2.length = 0;
gdjs.FimCode.GDhighlightObjects1.length = 0;
gdjs.FimCode.GDhighlightObjects2.length = 0;
gdjs.FimCode.GDlinkObjects1.length = 0;
gdjs.FimCode.GDlinkObjects2.length = 0;

gdjs.FimCode.eventsList2(runtimeScene);

return;

}

gdjs['FimCode'] = gdjs.FimCode;