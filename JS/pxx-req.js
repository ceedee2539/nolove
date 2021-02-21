const body = $request.body;
$prefs.removeAllValues();

if ($request.body.match(/com.axis.cameraxis/)) {
    $prefs.setValueForKey("true", "pwmngr");
};

if ($request.body.match(/ch.ada.VSApp/)) {
    $prefs.setValueForKey("true", "pwmngr");
};

if ($request.body.match(/com.cpdigitaldarkroom.SongShift/)) {
    $prefs.setValueForKey("true", "sshift");
};

if ($request.body.match(/com.foundry63.tailor/)) {
    $prefs.setValueForKey("true", "tailor");
};

if ($request.body.match(/gemini.Filmmaker-Pro/)) {
    $prefs.setValueForKey("true", "filmmkr");
};

if ($request.body.match(/Hi-Mom-S.A.S.Typic-2/)) {
    $prefs.setValueForKey("true", "typic2");
};

if ($request.body.match(/com.fishmobi.geniusart/)) {
    $prefs.setValueForKey("true", "genart");
};

if ($request.body.match(/com.duy.CasioFx/)) {
    $prefs.setValueForKey("true", "turtle");
};

if ($request.body.match(/com.daily.pattern/)) {
    $prefs.setValueForKey("true", "pattern");
};

if ($request.body.match(/yec.bestwallpapers4k.app/)) {
    $prefs.setValueForKey("true", "pwmngr");
};

if ($request.body.match(/com.appliedphasor.working-copy/)) {
    $prefs.setValueForKey("true", "workingcoppy");
};

if ($request.body.match(/com.instantbits.cast.webvideo/)) {
    $prefs.setValueForKey("true", "webvideo");
};

if ($request.body.match(/com.simyasolutions.vocly.universal/)) {
    $prefs.setValueForKey("true", "vocly");
};

if ($request.body.match(/com.quvideo.XiaoYing/)) {
    $prefs.setValueForKey("true", "vivavideo");
};

if ($request.body.match(/com.lightricks.Enlight-Video/)) {
    $prefs.setValueForKey("true", "videoleap");
};

if ($request.body.match(/com.phoenixtree.XiaoGuiClip/)) {
    $prefs.setValueForKey("true", "turtle");
};

if ($request.body.match(/tflat.vn/)) {
    $prefs.setValueForKey("true", "tflat");
};

if ($request.body.match(/com.quvideo.VISO/)) {
    $prefs.setValueForKey("true", "tempo");
};

if ($request.body.match(/com.monoDesign.SYNESTHESIA/)) {
    $prefs.setValueForKey("true", "staella");
};

if ($request.body.match(/com.cleevio.spendee/)) {
    $prefs.setValueForKey("true", "spendee");
};

if ($request.body.match(/com.plusblog.smpro/)) {
    $prefs.setValueForKey("true", "screenmkrpro");
};

if ($request.body.match(/RNI.Rni-Films/)) {
    $prefs.setValueForKey("true", "rni");
};

if ($request.body.match(/com.lightricks.Enlight-Photos/)) {
    $prefs.setValueForKey("true", "quickshot");
};

if ($request.body.match(/com.playgendary.polyspherecoolgame/)) {
    $prefs.setValueForKey("true", "polysphere");
};

if ($request.body.match(/com.lightricks.Enlight-Phoenix/)) {
    $prefs.setValueForKey("true", "pixaloop");
};

if ($request.body.match(/com.lightricks.Enlight-Editor/)) {
    $prefs.setValueForKey("true", "photofox");
};

if ($request.body.match(/com.approver.passwordmanager/)) {
    $prefs.setValueForKey("true", "pwmngr");
};

if ($request.body.match(/com.nicegram.Telegram-iOS/)) {
    $prefs.setValueForKey("true", "nicegram");
};

if ($request.body.match(/com.ginnypix.kuni/)) {
    $prefs.setValueForKey("true", "kuni");
};

if ($request.body.match(/com.outerspaceapps.itranslate/)) {
    $prefs.setValueForKey("true", "itranslate");
};

if ($request.body.match(/polymath.IntroMaker/)) {
    $prefs.setValueForKey("true", "introtube");
};

if ($request.body.match(/me.imgbase.imgplay/)) {
    $prefs.setValueForKey("true", "imgplay");
};

if ($request.body.match(/com.kabigon.apps.hopamchuan/)) {
    $prefs.setValueForKey("true", "hac");
};

if ($request.body.match(/com.hipstamatic.HipstamaticFour/)) {
    $prefs.setValueForKey("true", "hipx");
};

if ($request.body.match(/com.hellochinese.main/)) {
    $prefs.setValueForKey("true", "hc");
};

if ($request.body.match(/com.netsigma.Glitch-Art-Studio/)) {
    $prefs.setValueForKey("true", "glitchstd");
};

if ($request.body.match(/com.lightricks.Facetune2/)) {
    $prefs.setValueForKey("true", "ft2");
};

if ($request.body.match(/dazz.camera.vintagecamera/)) {
    $prefs.setValueForKey("true", "dazz");
};

if ($request.body.match(/me.clarityapp/)) {
    $prefs.setValueForKey("true", "clarity");
};

if ($request.body.match(/com.commsource.BeautyPlus/)) {
    $prefs.setValueForKey("true", "bp");
};

if ($request.body.match(/com.h3d2.1998cam/)) {
    $prefs.setValueForKey("true", "1998cam");
};

if ($request.body.match(/com.innersloth.amongus/)) {
    $prefs.setValueForKey("true", "amongus");
};

if ($request.body.match(/com.tinysolutionsllc.babymonitor/)) {
    $prefs.setValueForKey("true", "bbmnt");
};

$done({body});
