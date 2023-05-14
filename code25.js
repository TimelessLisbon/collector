gdjs.FimCode = {};
gdjs.FimCode.GDscoreObjects1= [];
gdjs.FimCode.GDscoreObjects2= [];
gdjs.FimCode.GDnext_95sceneObjects1= [];
gdjs.FimCode.GDnext_95sceneObjects2= [];
gdjs.FimCode.GDURLObjects1= [];
gdjs.FimCode.GDURLObjects2= [];
gdjs.FimCode.GDURLdesvioObjects1= [];
gdjs.FimCode.GDURLdesvioObjects2= [];
gdjs.FimCode.GDDesvioObjects1= [];
gdjs.FimCode.GDDesvioObjects2= [];
gdjs.FimCode.GDokdesvioObjects1= [];
gdjs.FimCode.GDokdesvioObjects2= [];
gdjs.FimCode.GDvideoObjects1= [];
gdjs.FimCode.GDvideoObjects2= [];
gdjs.FimCode.GDNewSpriteObjects1= [];
gdjs.FimCode.GDNewSpriteObjects2= [];


gdjs.FimCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12736964);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.writeField("Users", gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))), runtimeScene.getScene().getVariables().get("error"), true);
}}

}


};gdjs.FimCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(24);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "video");
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


};

gdjs.FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FimCode.GDscoreObjects1.length = 0;
gdjs.FimCode.GDscoreObjects2.length = 0;
gdjs.FimCode.GDnext_95sceneObjects1.length = 0;
gdjs.FimCode.GDnext_95sceneObjects2.length = 0;
gdjs.FimCode.GDURLObjects1.length = 0;
gdjs.FimCode.GDURLObjects2.length = 0;
gdjs.FimCode.GDURLdesvioObjects1.length = 0;
gdjs.FimCode.GDURLdesvioObjects2.length = 0;
gdjs.FimCode.GDDesvioObjects1.length = 0;
gdjs.FimCode.GDDesvioObjects2.length = 0;
gdjs.FimCode.GDokdesvioObjects1.length = 0;
gdjs.FimCode.GDokdesvioObjects2.length = 0;
gdjs.FimCode.GDvideoObjects1.length = 0;
gdjs.FimCode.GDvideoObjects2.length = 0;
gdjs.FimCode.GDNewSpriteObjects1.length = 0;
gdjs.FimCode.GDNewSpriteObjects2.length = 0;

gdjs.FimCode.eventsList1(runtimeScene);

return;

}

gdjs['FimCode'] = gdjs.FimCode;
