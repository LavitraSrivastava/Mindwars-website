gdjs.Level_321_32_45_32passagesCode = {};
gdjs.Level_321_32_45_32passagesCode.GDNewSpriteObjects1= [];
gdjs.Level_321_32_45_32passagesCode.GDNewSpriteObjects2= [];
gdjs.Level_321_32_45_32passagesCode.GDwhiteObjects1= [];
gdjs.Level_321_32_45_32passagesCode.GDwhiteObjects2= [];
gdjs.Level_321_32_45_32passagesCode.GDwhitecoverObjects1= [];
gdjs.Level_321_32_45_32passagesCode.GDwhitecoverObjects2= [];
gdjs.Level_321_32_45_32passagesCode.GDPassageObjects1= [];
gdjs.Level_321_32_45_32passagesCode.GDPassageObjects2= [];
gdjs.Level_321_32_45_32passagesCode.GDPassage2Objects1= [];
gdjs.Level_321_32_45_32passagesCode.GDPassage2Objects2= [];
gdjs.Level_321_32_45_32passagesCode.GDPassage3Objects1= [];
gdjs.Level_321_32_45_32passagesCode.GDPassage3Objects2= [];
gdjs.Level_321_32_45_32passagesCode.GDHeartObjects1= [];
gdjs.Level_321_32_45_32passagesCode.GDHeartObjects2= [];
gdjs.Level_321_32_45_32passagesCode.GDWhite_9595HeartObjects1= [];
gdjs.Level_321_32_45_32passagesCode.GDWhite_9595HeartObjects2= [];
gdjs.Level_321_32_45_32passagesCode.GDRead_9595textObjects1= [];
gdjs.Level_321_32_45_32passagesCode.GDRead_9595textObjects2= [];
gdjs.Level_321_32_45_32passagesCode.GDenter_9595tostartObjects1= [];
gdjs.Level_321_32_45_32passagesCode.GDenter_9595tostartObjects2= [];
gdjs.Level_321_32_45_32passagesCode.GDNewTextObjects1= [];
gdjs.Level_321_32_45_32passagesCode.GDNewTextObjects2= [];
gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1= [];
gdjs.Level_321_32_45_32passagesCode.GDButton1Objects2= [];
gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1= [];
gdjs.Level_321_32_45_32passagesCode.GDButton2Objects2= [];
gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1= [];
gdjs.Level_321_32_45_32passagesCode.GDButton3Objects2= [];
gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.Level_321_32_45_32passagesCode.GDTime_9595holderObjects1= [];
gdjs.Level_321_32_45_32passagesCode.GDTime_9595holderObjects2= [];
gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1= [];
gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects2= [];
gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1= [];
gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects2= [];
gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1= [];
gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects2= [];


gdjs.Level_321_32_45_32passagesCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Passage"), gdjs.Level_321_32_45_32passagesCode.GDPassageObjects1);
gdjs.copyArray(runtimeScene.getObjects("Passage2"), gdjs.Level_321_32_45_32passagesCode.GDPassage2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Passage3"), gdjs.Level_321_32_45_32passagesCode.GDPassage3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Passage_img1"), gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Read_text"), gdjs.Level_321_32_45_32passagesCode.GDRead_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("Time_holder"), gdjs.Level_321_32_45_32passagesCode.GDTime_9595holderObjects1);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("enter_tostart"), gdjs.Level_321_32_45_32passagesCode.GDenter_9595tostartObjects1);
gdjs.copyArray(runtimeScene.getObjects("passage_img2"), gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1);
gdjs.copyArray(runtimeScene.getObjects("passage_img3"), gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1);
{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDRead_9595textObjects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDRead_9595textObjects1[i].getBehavior("Text_AutoTyping").StartAtBeginning((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDenter_9595tostartObjects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDenter_9595tostartObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDPassageObjects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDPassageObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDPassage2Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDPassage2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDPassage3Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDPassage3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDTime_9595holderObjects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDTime_9595holderObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1[i].hide();
}
for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1[i].hide();
}
for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("whitecover"), gdjs.Level_321_32_45_32passagesCode.GDwhitecoverObjects1);
{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDwhitecoverObjects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDwhitecoverObjects1[i].getBehavior("Opacity").setOpacity(gdjs.Level_321_32_45_32passagesCode.GDwhitecoverObjects1[i].getBehavior("Opacity").getOpacity() - (1.5));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Time_holder"), gdjs.Level_321_32_45_32passagesCode.GDTime_9595holderObjects1);
{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDTime_9595holderObjects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDTime_9595holderObjects1[i].setString("Time taken: " + gdjs.evtTools.string.subStr(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Main Timer")), 0, 4));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Passage_img1"), gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Time_holder"), gdjs.Level_321_32_45_32passagesCode.GDTime_9595holderObjects1);
gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1);
gdjs.copyArray(runtimeScene.getObjects("enter_tostart"), gdjs.Level_321_32_45_32passagesCode.GDenter_9595tostartObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Main Timer");
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDenter_9595tostartObjects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDenter_9595tostartObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDTime_9595holderObjects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDTime_9595holderObjects1[i].hide(false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Button1"), gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1.length;i<l;++i) {
    if ( gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1[k] = gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1[i];
        ++k;
    }
}
gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Passage_img1"), gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1);
gdjs.copyArray(runtimeScene.getObjects("passage_img2"), gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1);
gdjs.copyArray(runtimeScene.getObjects("passage_img3"), gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1);
{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1[i].hide();
}
for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1[i].hide();
}
for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button2"), gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1.length;i<l;++i) {
    if ( gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1[k] = gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1[i];
        ++k;
    }
}
gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Passage_img1"), gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1);
gdjs.copyArray(runtimeScene.getObjects("passage_img2"), gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1);
gdjs.copyArray(runtimeScene.getObjects("passage_img3"), gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1);
{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1[i].hide();
}
for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1[i].hide();
}
for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Button3"), gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1.length;i<l;++i) {
    if ( gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1[k] = gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1[i];
        ++k;
    }
}
gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Passage_img1"), gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1);
gdjs.copyArray(runtimeScene.getObjects("passage_img2"), gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1);
gdjs.copyArray(runtimeScene.getObjects("passage_img3"), gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1);
{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1[i].hide();
}
for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1[i].hide();
}
for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1.length ;i < len;++i) {
    gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1 - questions", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Main Timer"));
}}

}


};

gdjs.Level_321_32_45_32passagesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321_32_45_32passagesCode.GDNewSpriteObjects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDNewSpriteObjects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDwhiteObjects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDwhiteObjects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDwhitecoverObjects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDwhitecoverObjects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDPassageObjects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDPassageObjects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDPassage2Objects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDPassage2Objects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDPassage3Objects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDPassage3Objects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDHeartObjects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDHeartObjects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDWhite_9595HeartObjects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDWhite_9595HeartObjects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDRead_9595textObjects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDRead_9595textObjects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDenter_9595tostartObjects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDenter_9595tostartObjects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDNewTextObjects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDNewTextObjects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDButton1Objects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDButton1Objects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDButton2Objects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDButton2Objects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDButton3Objects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDButton3Objects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDTime_9595holderObjects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDTime_9595holderObjects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDPassage_9595img1Objects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img2Objects2.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects1.length = 0;
gdjs.Level_321_32_45_32passagesCode.GDpassage_9595img3Objects2.length = 0;

gdjs.Level_321_32_45_32passagesCode.eventsList0(runtimeScene);

return;

}

gdjs['Level_321_32_45_32passagesCode'] = gdjs.Level_321_32_45_32passagesCode;
