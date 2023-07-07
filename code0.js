gdjs.IntroCode = {};
gdjs.IntroCode.GDfundoObjects1_1final = [];

gdjs.IntroCode.GDscoreObjects1= [];
gdjs.IntroCode.GDscoreObjects2= [];
gdjs.IntroCode.GDscoreObjects3= [];
gdjs.IntroCode.GDnext_95sceneObjects1= [];
gdjs.IntroCode.GDnext_95sceneObjects2= [];
gdjs.IntroCode.GDnext_95sceneObjects3= [];
gdjs.IntroCode.GDURLObjects1= [];
gdjs.IntroCode.GDURLObjects2= [];
gdjs.IntroCode.GDURLObjects3= [];
gdjs.IntroCode.GDfundo2Objects1= [];
gdjs.IntroCode.GDfundo2Objects2= [];
gdjs.IntroCode.GDfundo2Objects3= [];
gdjs.IntroCode.GDokObjects1= [];
gdjs.IntroCode.GDokObjects2= [];
gdjs.IntroCode.GDokObjects3= [];
gdjs.IntroCode.GDyesObjects1= [];
gdjs.IntroCode.GDyesObjects2= [];
gdjs.IntroCode.GDyesObjects3= [];
gdjs.IntroCode.GDnoObjects1= [];
gdjs.IntroCode.GDnoObjects2= [];
gdjs.IntroCode.GDnoObjects3= [];
gdjs.IntroCode.GDchromeObjects1= [];
gdjs.IntroCode.GDchromeObjects2= [];
gdjs.IntroCode.GDchromeObjects3= [];
gdjs.IntroCode.GDandroidObjects1= [];
gdjs.IntroCode.GDandroidObjects2= [];
gdjs.IntroCode.GDandroidObjects3= [];
gdjs.IntroCode.GDfundoObjects1= [];
gdjs.IntroCode.GDfundoObjects2= [];
gdjs.IntroCode.GDfundoObjects3= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("iphone")) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://apps.apple.com/pt/app/google-chrome/id535886823", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("android2")) == 1;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://play.google.com/store/apps/details?id=com.android.chrome", runtimeScene);
}}

}


};gdjs.IntroCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("iphone")) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.IntroCode.GDfundoObjects1, gdjs.IntroCode.GDfundoObjects2);

{for(var i = 0, len = gdjs.IntroCode.GDfundoObjects2.length ;i < len;++i) {
    gdjs.IntroCode.GDfundoObjects2[i].setAnimationName("def iphone");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("android2")) == 1;
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDfundoObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDfundoObjects1[i].setAnimationName("def android");
}
}}

}


};gdjs.IntroCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13873708);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


};gdjs.IntroCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("android"), gdjs.IntroCode.GDandroidObjects1);
gdjs.copyArray(runtimeScene.getObjects("chrome"), gdjs.IntroCode.GDchromeObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.IntroCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.IntroCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.IntroCode.GDyesObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDokObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDokObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.IntroCode.GDokObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.IntroCode.GDandroidObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDandroidObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.IntroCode.GDandroidObjects1[i].getWidth())) / 2);
}
}{for(var i = 0, len = gdjs.IntroCode.GDchromeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDchromeObjects1[i].setX((gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.IntroCode.GDchromeObjects1[i].getWidth())) / 2);
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "fundo");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "yes_no");
}{for(var i = 0, len = gdjs.IntroCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDandroidObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDandroidObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDchromeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDchromeObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "android");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "chrome");
}{for(var i = 0, len = gdjs.IntroCode.GDokObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDokObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("android").setNumber(0);
}{runtimeScene.getScene().getVariables().get("chrome").setNumber(0);
}{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 720, 1280);
}{gdjs.evtsExt__Geolocation__LocatePlayer.func(runtimeScene, runtimeScene.getScene().getVariables().get("GPS"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.IntroCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDfundoObjects1[i].hide();
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "android") > 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("android"), gdjs.IntroCode.GDandroidObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDandroidObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDandroidObjects1[i].setOpacity(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "android") * 250);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("android"), gdjs.IntroCode.GDandroidObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDandroidObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDandroidObjects1[i].getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDandroidObjects1[k] = gdjs.IntroCode.GDandroidObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDandroidObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.IntroCode.GDokObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDokObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDokObjects1[i].hide(false);
}
}{runtimeScene.getScene().getVariables().get("android").setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "chrome") > 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("chrome"), gdjs.IntroCode.GDchromeObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDchromeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDchromeObjects1[i].setOpacity(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "chrome") * 250);
}
}{runtimeScene.getScene().getVariables().get("chrome").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("chrome"), gdjs.IntroCode.GDchromeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDchromeObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDchromeObjects1[i].getOpacity() >= 255 ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDchromeObjects1[k] = gdjs.IntroCode.GDchromeObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDchromeObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.IntroCode.GDokObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDokObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDokObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.IntroCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDokObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDokObjects1[k] = gdjs.IntroCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDokObjects1[k] = gdjs.IntroCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("android")) == 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("android"), gdjs.IntroCode.GDandroidObjects1);
/* Reuse gdjs.IntroCode.GDokObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "android");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "android");
}{for(var i = 0, len = gdjs.IntroCode.GDandroidObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDandroidObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.IntroCode.GDokObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDokObjects1[i].hide();
}
}{runtimeScene.getScene().getVariables().get("android").setNumber(0);
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "chrome");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.IntroCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDokObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDokObjects1[k] = gdjs.IntroCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDokObjects1[k] = gdjs.IntroCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("chrome")) == 1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("chrome"), gdjs.IntroCode.GDchromeObjects1);
/* Reuse gdjs.IntroCode.GDokObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "chrome");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "chrome");
}{for(var i = 0, len = gdjs.IntroCode.GDchromeObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDchromeObjects1[i].setOpacity(0);
}
}{runtimeScene.getScene().getVariables().get("chrome").setNumber(0);
}{for(var i = 0, len = gdjs.IntroCode.GDokObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDokObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "yes_no");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "yes_no") >= 0.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("fundo2"), gdjs.IntroCode.GDfundo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.IntroCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.IntroCode.GDyesObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDfundo2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDfundo2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDfundoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDnoObjects1[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "yes_no");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "yes_no");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects1[i].isCurrentAnimationName("instrucoes") ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDfundoObjects1[k] = gdjs.IntroCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.IntroCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.IntroCode.GDyesObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDnoObjects1[i].SetLabelText("OK", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.IntroCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDyesObjects1[i].SetLabelText("JÁ ESTÁ", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.IntroCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects1[i].isCurrentAnimationName("instrucoes") ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDfundoObjects1[k] = gdjs.IntroCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDyesObjects1[k] = gdjs.IntroCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.IntroCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects1[i].isCurrentAnimationName("instrucoes") ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDfundoObjects1[k] = gdjs.IntroCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDnoObjects1[k] = gdjs.IntroCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fundo");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "fundo") > 0.5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDfundoObjects1[i].setAnimation(gdjs.IntroCode.GDfundoObjects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "fundo");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "fundo");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects1[i].isCurrentAnimationName("equipamento") ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDfundoObjects1[k] = gdjs.IntroCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.IntroCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.IntroCode.GDyesObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDnoObjects1[i].SetLabelText("ANDROID", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.IntroCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDyesObjects1[i].SetLabelText("iPHONE", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.IntroCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects1[i].isCurrentAnimationName("equipamento") ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDfundoObjects1[k] = gdjs.IntroCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDyesObjects1[k] = gdjs.IntroCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fundo");
}{runtimeScene.getScene().getVariables().get("iphone").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.IntroCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects1[i].isCurrentAnimationName("equipamento") ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDfundoObjects1[k] = gdjs.IntroCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDnoObjects1[k] = gdjs.IntroCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fundo");
}{runtimeScene.getScene().getVariables().get("android2").setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects1[i].isCurrentAnimationName("download") ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDfundoObjects1[k] = gdjs.IntroCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.IntroCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.IntroCode.GDyesObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDnoObjects1[i].SetLabelText("NÃO", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.IntroCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDyesObjects1[i].SetLabelText("SIM", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.IntroCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects1[i].isCurrentAnimationName("download") ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDfundoObjects1[k] = gdjs.IntroCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDnoObjects1[k] = gdjs.IntroCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.IntroCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.IntroCode.GDyesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects1[i].isCurrentAnimationName("download") ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDfundoObjects1[k] = gdjs.IntroCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDyesObjects1[k] = gdjs.IntroCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.IntroCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.IntroCode.GDokObjects1);
/* Reuse gdjs.IntroCode.GDyesObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDokObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDokObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDokObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDokObjects1[i].setPosition(426,1142);
}
}
{ //Subevents
gdjs.IntroCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.IntroCode.GDokObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDfundoObjects1[k] = gdjs.IntroCode.GDfundoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDokObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDokObjects1[k] = gdjs.IntroCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDokObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDokObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDokObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDokObjects1[k] = gdjs.IntroCode.GDokObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDokObjects1.length = k;
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "fundo");
}}

}


{

gdjs.IntroCode.GDfundoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.IntroCode.GDfundoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects2);
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects2[i].isCurrentAnimationName("fim") ) {
        isConditionTrue_1 = true;
        gdjs.IntroCode.GDfundoObjects2[k] = gdjs.IntroCode.GDfundoObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.IntroCode.GDfundoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.IntroCode.GDfundoObjects1_1final.indexOf(gdjs.IntroCode.GDfundoObjects2[j]) === -1 )
            gdjs.IntroCode.GDfundoObjects1_1final.push(gdjs.IntroCode.GDfundoObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects2);
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects2[i].isCurrentAnimationName("fim2") ) {
        isConditionTrue_1 = true;
        gdjs.IntroCode.GDfundoObjects2[k] = gdjs.IntroCode.GDfundoObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.IntroCode.GDfundoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.IntroCode.GDfundoObjects1_1final.indexOf(gdjs.IntroCode.GDfundoObjects2[j]) === -1 )
            gdjs.IntroCode.GDfundoObjects1_1final.push(gdjs.IntroCode.GDfundoObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.IntroCode.GDfundoObjects1_1final, gdjs.IntroCode.GDfundoObjects1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.IntroCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.IntroCode.GDokObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.IntroCode.GDyesObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.IntroCode.GDokObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDokObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDnoObjects1[i].SetLabelText("NÃO. REVER", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.IntroCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDyesObjects1[i].SetLabelText("SIM", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.IntroCode.GDyesObjects1);
gdjs.IntroCode.GDfundoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.IntroCode.GDfundoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects2);
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects2[i].isCurrentAnimationName("fim") ) {
        isConditionTrue_1 = true;
        gdjs.IntroCode.GDfundoObjects2[k] = gdjs.IntroCode.GDfundoObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.IntroCode.GDfundoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.IntroCode.GDfundoObjects1_1final.indexOf(gdjs.IntroCode.GDfundoObjects2[j]) === -1 )
            gdjs.IntroCode.GDfundoObjects1_1final.push(gdjs.IntroCode.GDfundoObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects2);
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects2[i].isCurrentAnimationName("fim2") ) {
        isConditionTrue_1 = true;
        gdjs.IntroCode.GDfundoObjects2[k] = gdjs.IntroCode.GDfundoObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.IntroCode.GDfundoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.IntroCode.GDfundoObjects1_1final.indexOf(gdjs.IntroCode.GDfundoObjects2[j]) === -1 )
            gdjs.IntroCode.GDfundoObjects1_1final.push(gdjs.IntroCode.GDfundoObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.IntroCode.GDfundoObjects1_1final, gdjs.IntroCode.GDfundoObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDyesObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDyesObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDyesObjects1[k] = gdjs.IntroCode.GDyesObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDyesObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.IntroCode.GDnoObjects1);
gdjs.IntroCode.GDfundoObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.IntroCode.GDfundoObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects2);
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects2[i].isCurrentAnimationName("fim") ) {
        isConditionTrue_1 = true;
        gdjs.IntroCode.GDfundoObjects2[k] = gdjs.IntroCode.GDfundoObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.IntroCode.GDfundoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.IntroCode.GDfundoObjects1_1final.indexOf(gdjs.IntroCode.GDfundoObjects2[j]) === -1 )
            gdjs.IntroCode.GDfundoObjects1_1final.push(gdjs.IntroCode.GDfundoObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("fundo"), gdjs.IntroCode.GDfundoObjects2);
for (var i = 0, k = 0, l = gdjs.IntroCode.GDfundoObjects2.length;i<l;++i) {
    if ( gdjs.IntroCode.GDfundoObjects2[i].isCurrentAnimationName("fim2") ) {
        isConditionTrue_1 = true;
        gdjs.IntroCode.GDfundoObjects2[k] = gdjs.IntroCode.GDfundoObjects2[i];
        ++k;
    }
}
gdjs.IntroCode.GDfundoObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.IntroCode.GDfundoObjects2.length; j < jLen ; ++j) {
        if ( gdjs.IntroCode.GDfundoObjects1_1final.indexOf(gdjs.IntroCode.GDfundoObjects2[j]) === -1 )
            gdjs.IntroCode.GDfundoObjects1_1final.push(gdjs.IntroCode.GDfundoObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.IntroCode.GDfundoObjects1_1final, gdjs.IntroCode.GDfundoObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.IntroCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.IntroCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.IntroCode.GDnoObjects1[k] = gdjs.IntroCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.IntroCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.IntroCode.GDfundoObjects1 */
{for(var i = 0, len = gdjs.IntroCode.GDfundoObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDfundoObjects1[i].setAnimationName("equipamento");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("fundo2"), gdjs.IntroCode.GDfundo2Objects1);
gdjs.copyArray(runtimeScene.getObjects("ok"), gdjs.IntroCode.GDokObjects1);
{for(var i = 0, len = gdjs.IntroCode.GDokObjects1.length ;i < len;++i) {
    gdjs.IntroCode.GDokObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.IntroCode.GDfundo2Objects1.length ;i < len;++i) {
    gdjs.IntroCode.GDfundo2Objects1[i].hide(false);
}
}
{ //Subevents
gdjs.IntroCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 1;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Code", false);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDscoreObjects1.length = 0;
gdjs.IntroCode.GDscoreObjects2.length = 0;
gdjs.IntroCode.GDscoreObjects3.length = 0;
gdjs.IntroCode.GDnext_95sceneObjects1.length = 0;
gdjs.IntroCode.GDnext_95sceneObjects2.length = 0;
gdjs.IntroCode.GDnext_95sceneObjects3.length = 0;
gdjs.IntroCode.GDURLObjects1.length = 0;
gdjs.IntroCode.GDURLObjects2.length = 0;
gdjs.IntroCode.GDURLObjects3.length = 0;
gdjs.IntroCode.GDfundo2Objects1.length = 0;
gdjs.IntroCode.GDfundo2Objects2.length = 0;
gdjs.IntroCode.GDfundo2Objects3.length = 0;
gdjs.IntroCode.GDokObjects1.length = 0;
gdjs.IntroCode.GDokObjects2.length = 0;
gdjs.IntroCode.GDokObjects3.length = 0;
gdjs.IntroCode.GDyesObjects1.length = 0;
gdjs.IntroCode.GDyesObjects2.length = 0;
gdjs.IntroCode.GDyesObjects3.length = 0;
gdjs.IntroCode.GDnoObjects1.length = 0;
gdjs.IntroCode.GDnoObjects2.length = 0;
gdjs.IntroCode.GDnoObjects3.length = 0;
gdjs.IntroCode.GDchromeObjects1.length = 0;
gdjs.IntroCode.GDchromeObjects2.length = 0;
gdjs.IntroCode.GDchromeObjects3.length = 0;
gdjs.IntroCode.GDandroidObjects1.length = 0;
gdjs.IntroCode.GDandroidObjects2.length = 0;
gdjs.IntroCode.GDandroidObjects3.length = 0;
gdjs.IntroCode.GDfundoObjects1.length = 0;
gdjs.IntroCode.GDfundoObjects2.length = 0;
gdjs.IntroCode.GDfundoObjects3.length = 0;

gdjs.IntroCode.eventsList3(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
