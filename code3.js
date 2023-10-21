gdjs.WelcomeCode = {};
gdjs.WelcomeCode.GDplatformObjects1= [];
gdjs.WelcomeCode.GDplatformObjects2= [];
gdjs.WelcomeCode.GDmystickObjects1= [];
gdjs.WelcomeCode.GDmystickObjects2= [];
gdjs.WelcomeCode.GDWelcome_9595textObjects1= [];
gdjs.WelcomeCode.GDWelcome_9595textObjects2= [];
gdjs.WelcomeCode.GDboundaryObjects1= [];
gdjs.WelcomeCode.GDboundaryObjects2= [];
gdjs.WelcomeCode.GDadvance_9595textObjects1= [];
gdjs.WelcomeCode.GDadvance_9595textObjects2= [];
gdjs.WelcomeCode.GDGain_9595textObjects1= [];
gdjs.WelcomeCode.GDGain_9595textObjects2= [];
gdjs.WelcomeCode.GDMINDWARSObjects1= [];
gdjs.WelcomeCode.GDMINDWARSObjects2= [];
gdjs.WelcomeCode.GDNewSpriteObjects1= [];
gdjs.WelcomeCode.GDNewSpriteObjects2= [];
gdjs.WelcomeCode.GDBorderObjects1= [];
gdjs.WelcomeCode.GDBorderObjects2= [];
gdjs.WelcomeCode.GDlevel1_9595textObjects1= [];
gdjs.WelcomeCode.GDlevel1_9595textObjects2= [];
gdjs.WelcomeCode.GDLEARN_9595buttonObjects1= [];
gdjs.WelcomeCode.GDLEARN_9595buttonObjects2= [];
gdjs.WelcomeCode.GDstart_9595buttonObjects1= [];
gdjs.WelcomeCode.GDstart_9595buttonObjects2= [];
gdjs.WelcomeCode.GDStick2Objects1= [];
gdjs.WelcomeCode.GDStick2Objects2= [];
gdjs.WelcomeCode.GDconvoObjects1= [];
gdjs.WelcomeCode.GDconvoObjects2= [];
gdjs.WelcomeCode.GDBookObjects1= [];
gdjs.WelcomeCode.GDBookObjects2= [];
gdjs.WelcomeCode.GDWhiteObjects1= [];
gdjs.WelcomeCode.GDWhiteObjects2= [];


gdjs.WelcomeCode.asyncCallback17049492 = function (runtimeScene, asyncObjectsList) {
}
gdjs.WelcomeCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.WelcomeCode.asyncCallback17049492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.WelcomeCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17046820);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.WelcomeCode.GDBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MINDWARS"), gdjs.WelcomeCode.GDMINDWARSObjects1);
gdjs.copyArray(runtimeScene.getObjects("Welcome_text"), gdjs.WelcomeCode.GDWelcome_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("convo"), gdjs.WelcomeCode.GDconvoObjects1);
gdjs.copyArray(runtimeScene.getObjects("mystick"), gdjs.WelcomeCode.GDmystickObjects1);
{for(var i = 0, len = gdjs.WelcomeCode.GDWelcome_9595textObjects1.length ;i < len;++i) {
    gdjs.WelcomeCode.GDWelcome_9595textObjects1[i].setString("Welcome " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.WelcomeCode.GDmystickObjects1.length ;i < len;++i) {
    gdjs.WelcomeCode.GDmystickObjects1[i].getBehavior("Animation").setAnimationName("fall0");
}
}{for(var i = 0, len = gdjs.WelcomeCode.GDWelcome_9595textObjects1.length ;i < len;++i) {
    gdjs.WelcomeCode.GDWelcome_9595textObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.WelcomeCode.GDWelcome_9595textObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.WelcomeCode.GDMINDWARSObjects1.length ;i < len;++i) {
    gdjs.WelcomeCode.GDMINDWARSObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.WelcomeCode.GDMINDWARSObjects1[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.WelcomeCode.GDconvoObjects1.length ;i < len;++i) {
    gdjs.WelcomeCode.GDconvoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.WelcomeCode.GDBorderObjects1.length ;i < len;++i) {
    gdjs.WelcomeCode.GDBorderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.WelcomeCode.GDconvoObjects1.length ;i < len;++i) {
    gdjs.WelcomeCode.GDconvoObjects1[i].getBehavior("Text_AutoTyping").Pause((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.WelcomeCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("White"), gdjs.WelcomeCode.GDWhiteObjects1);
gdjs.copyArray(runtimeScene.getObjects("mystick"), gdjs.WelcomeCode.GDmystickObjects1);
{for(var i = 0, len = gdjs.WelcomeCode.GDWhiteObjects1.length ;i < len;++i) {
    gdjs.WelcomeCode.GDWhiteObjects1[i].getBehavior("Opacity").setOpacity(gdjs.WelcomeCode.GDWhiteObjects1[i].getBehavior("Opacity").getOpacity() - (1.5));
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.WelcomeCode.GDmystickObjects1.length === 0 ) ? 0 :gdjs.WelcomeCode.GDmystickObjects1[0].getPointX("")) + 800, "", 0);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 0.8, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("start_button"), gdjs.WelcomeCode.GDstart_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WelcomeCode.GDstart_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.WelcomeCode.GDstart_9595buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.WelcomeCode.GDstart_9595buttonObjects1[k] = gdjs.WelcomeCode.GDstart_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.WelcomeCode.GDstart_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1 - passages", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mystick"), gdjs.WelcomeCode.GDmystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.WelcomeCode.GDmystickObjects1.length;i<l;++i) {
    if ( gdjs.WelcomeCode.GDmystickObjects1[i].getX() >= 4446 ) {
        isConditionTrue_0 = true;
        gdjs.WelcomeCode.GDmystickObjects1[k] = gdjs.WelcomeCode.GDmystickObjects1[i];
        ++k;
    }
}
gdjs.WelcomeCode.GDmystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("convo"), gdjs.WelcomeCode.GDconvoObjects1);
/* Reuse gdjs.WelcomeCode.GDmystickObjects1 */
{for(var i = 0, len = gdjs.WelcomeCode.GDmystickObjects1.length ;i < len;++i) {
    gdjs.WelcomeCode.GDmystickObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{gdjs.evtTools.camera.setCameraX(runtimeScene, 4900, "", 0);
}{for(var i = 0, len = gdjs.WelcomeCode.GDconvoObjects1.length ;i < len;++i) {
    gdjs.WelcomeCode.GDconvoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.WelcomeCode.GDconvoObjects1.length ;i < len;++i) {
    gdjs.WelcomeCode.GDconvoObjects1[i].getBehavior("Text_AutoTyping").Resume((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


};

gdjs.WelcomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WelcomeCode.GDplatformObjects1.length = 0;
gdjs.WelcomeCode.GDplatformObjects2.length = 0;
gdjs.WelcomeCode.GDmystickObjects1.length = 0;
gdjs.WelcomeCode.GDmystickObjects2.length = 0;
gdjs.WelcomeCode.GDWelcome_9595textObjects1.length = 0;
gdjs.WelcomeCode.GDWelcome_9595textObjects2.length = 0;
gdjs.WelcomeCode.GDboundaryObjects1.length = 0;
gdjs.WelcomeCode.GDboundaryObjects2.length = 0;
gdjs.WelcomeCode.GDadvance_9595textObjects1.length = 0;
gdjs.WelcomeCode.GDadvance_9595textObjects2.length = 0;
gdjs.WelcomeCode.GDGain_9595textObjects1.length = 0;
gdjs.WelcomeCode.GDGain_9595textObjects2.length = 0;
gdjs.WelcomeCode.GDMINDWARSObjects1.length = 0;
gdjs.WelcomeCode.GDMINDWARSObjects2.length = 0;
gdjs.WelcomeCode.GDNewSpriteObjects1.length = 0;
gdjs.WelcomeCode.GDNewSpriteObjects2.length = 0;
gdjs.WelcomeCode.GDBorderObjects1.length = 0;
gdjs.WelcomeCode.GDBorderObjects2.length = 0;
gdjs.WelcomeCode.GDlevel1_9595textObjects1.length = 0;
gdjs.WelcomeCode.GDlevel1_9595textObjects2.length = 0;
gdjs.WelcomeCode.GDLEARN_9595buttonObjects1.length = 0;
gdjs.WelcomeCode.GDLEARN_9595buttonObjects2.length = 0;
gdjs.WelcomeCode.GDstart_9595buttonObjects1.length = 0;
gdjs.WelcomeCode.GDstart_9595buttonObjects2.length = 0;
gdjs.WelcomeCode.GDStick2Objects1.length = 0;
gdjs.WelcomeCode.GDStick2Objects2.length = 0;
gdjs.WelcomeCode.GDconvoObjects1.length = 0;
gdjs.WelcomeCode.GDconvoObjects2.length = 0;
gdjs.WelcomeCode.GDBookObjects1.length = 0;
gdjs.WelcomeCode.GDBookObjects2.length = 0;
gdjs.WelcomeCode.GDWhiteObjects1.length = 0;
gdjs.WelcomeCode.GDWhiteObjects2.length = 0;

gdjs.WelcomeCode.eventsList1(runtimeScene);

return;

}

gdjs['WelcomeCode'] = gdjs.WelcomeCode;
