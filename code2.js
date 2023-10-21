gdjs.Lore_32displayCode = {};
gdjs.Lore_32displayCode.GDlore1Objects1= [];
gdjs.Lore_32displayCode.GDlore1Objects2= [];
gdjs.Lore_32displayCode.GDlore2Objects1= [];
gdjs.Lore_32displayCode.GDlore2Objects2= [];
gdjs.Lore_32displayCode.GDlore3Objects1= [];
gdjs.Lore_32displayCode.GDlore3Objects2= [];
gdjs.Lore_32displayCode.GDlore4Objects1= [];
gdjs.Lore_32displayCode.GDlore4Objects2= [];
gdjs.Lore_32displayCode.GDlore5Objects1= [];
gdjs.Lore_32displayCode.GDlore5Objects2= [];
gdjs.Lore_32displayCode.GDlore6Objects1= [];
gdjs.Lore_32displayCode.GDlore6Objects2= [];
gdjs.Lore_32displayCode.GDlore7Objects1= [];
gdjs.Lore_32displayCode.GDlore7Objects2= [];
gdjs.Lore_32displayCode.GDlore8Objects1= [];
gdjs.Lore_32displayCode.GDlore8Objects2= [];
gdjs.Lore_32displayCode.GDlore9Objects1= [];
gdjs.Lore_32displayCode.GDlore9Objects2= [];
gdjs.Lore_32displayCode.GDCoverObjects1= [];
gdjs.Lore_32displayCode.GDCoverObjects2= [];
gdjs.Lore_32displayCode.GDMindwarsloreObjects1= [];
gdjs.Lore_32displayCode.GDMindwarsloreObjects2= [];
gdjs.Lore_32displayCode.GDWhiteObjects1= [];
gdjs.Lore_32displayCode.GDWhiteObjects2= [];
gdjs.Lore_32displayCode.GDSkip_9595buttonObjects1= [];
gdjs.Lore_32displayCode.GDSkip_9595buttonObjects2= [];
gdjs.Lore_32displayCode.GDaudioObjects1= [];
gdjs.Lore_32displayCode.GDaudioObjects2= [];


gdjs.Lore_32displayCode.asyncCallback17016628 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("White"), gdjs.Lore_32displayCode.GDWhiteObjects2);
{for(var i = 0, len = gdjs.Lore_32displayCode.GDWhiteObjects2.length ;i < len;++i) {
    gdjs.Lore_32displayCode.GDWhiteObjects2[i].getBehavior("Opacity").setOpacity(gdjs.Lore_32displayCode.GDWhiteObjects2[i].getBehavior("Opacity").getOpacity() - (2.5));
}
}}
gdjs.Lore_32displayCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Lore_32displayCode.asyncCallback17016628(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lore_32displayCode.asyncCallback17017292 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Mindwarslore"), gdjs.Lore_32displayCode.GDMindwarsloreObjects2);
gdjs.copyArray(runtimeScene.getObjects("audio"), gdjs.Lore_32displayCode.GDaudioObjects2);
{for(var i = 0, len = gdjs.Lore_32displayCode.GDMindwarsloreObjects2.length ;i < len;++i) {
    gdjs.Lore_32displayCode.GDMindwarsloreObjects2[i].play();
}
}{for(var i = 0, len = gdjs.Lore_32displayCode.GDaudioObjects2.length ;i < len;++i) {
    gdjs.Lore_32displayCode.GDaudioObjects2[i].play();
}
}}
gdjs.Lore_32displayCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Lore_32displayCode.asyncCallback17017292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lore_32displayCode.asyncCallback17017956 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Welcome", false);
}}
gdjs.Lore_32displayCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(26), (runtimeScene) => (gdjs.Lore_32displayCode.asyncCallback17017956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Lore_32displayCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Lore_32displayCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Lore_32displayCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Lore_32displayCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Skip_button"), gdjs.Lore_32displayCode.GDSkip_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Lore_32displayCode.GDSkip_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.Lore_32displayCode.GDSkip_9595buttonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Lore_32displayCode.GDSkip_9595buttonObjects1[k] = gdjs.Lore_32displayCode.GDSkip_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.Lore_32displayCode.GDSkip_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Welcome", false);
}}

}


};

gdjs.Lore_32displayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Lore_32displayCode.GDlore1Objects1.length = 0;
gdjs.Lore_32displayCode.GDlore1Objects2.length = 0;
gdjs.Lore_32displayCode.GDlore2Objects1.length = 0;
gdjs.Lore_32displayCode.GDlore2Objects2.length = 0;
gdjs.Lore_32displayCode.GDlore3Objects1.length = 0;
gdjs.Lore_32displayCode.GDlore3Objects2.length = 0;
gdjs.Lore_32displayCode.GDlore4Objects1.length = 0;
gdjs.Lore_32displayCode.GDlore4Objects2.length = 0;
gdjs.Lore_32displayCode.GDlore5Objects1.length = 0;
gdjs.Lore_32displayCode.GDlore5Objects2.length = 0;
gdjs.Lore_32displayCode.GDlore6Objects1.length = 0;
gdjs.Lore_32displayCode.GDlore6Objects2.length = 0;
gdjs.Lore_32displayCode.GDlore7Objects1.length = 0;
gdjs.Lore_32displayCode.GDlore7Objects2.length = 0;
gdjs.Lore_32displayCode.GDlore8Objects1.length = 0;
gdjs.Lore_32displayCode.GDlore8Objects2.length = 0;
gdjs.Lore_32displayCode.GDlore9Objects1.length = 0;
gdjs.Lore_32displayCode.GDlore9Objects2.length = 0;
gdjs.Lore_32displayCode.GDCoverObjects1.length = 0;
gdjs.Lore_32displayCode.GDCoverObjects2.length = 0;
gdjs.Lore_32displayCode.GDMindwarsloreObjects1.length = 0;
gdjs.Lore_32displayCode.GDMindwarsloreObjects2.length = 0;
gdjs.Lore_32displayCode.GDWhiteObjects1.length = 0;
gdjs.Lore_32displayCode.GDWhiteObjects2.length = 0;
gdjs.Lore_32displayCode.GDSkip_9595buttonObjects1.length = 0;
gdjs.Lore_32displayCode.GDSkip_9595buttonObjects2.length = 0;
gdjs.Lore_32displayCode.GDaudioObjects1.length = 0;
gdjs.Lore_32displayCode.GDaudioObjects2.length = 0;

gdjs.Lore_32displayCode.eventsList3(runtimeScene);

return;

}

gdjs['Lore_32displayCode'] = gdjs.Lore_32displayCode;
