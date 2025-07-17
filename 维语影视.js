globalThis.Openid='ocP1J7Ledemicr-bsNZf7BGfQXUc'
globalThis.UnionId='oONjg6j4W8Meh-mUYCX5uELZLXVA'
globalThis.Host='https://qutbay.bilimnur.cn/'
globalThis.Host1='qutbay.bilimnur.cn'
globalThis.Wxvplayurl='http://nurlantv.cn/wxv.php?vid='
globalThis.getHeaders= function(){
    let headers = {
        'Host': Host1,        
        'User-Agent': 'Mozilla/5.0 (Linux; Android 7.1.1; OPPO A83t Build/N6F26Q; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/116.0.0.0 Mobile Safari/537.36 XWEB/1160083 MMWEBSDK/20231202 MMWEBID/7764 MicroMessenger/8.0.47.2560(0x28002F50) WeChat/arm64 Weixin NetType/WIFI Language/zh_CN ABI/arm64',
        'Origin': Host,
        'token': token,
        'Content-Type': 'application/json',
    };
    return headers
}
globalThis.playsign= function(t){
    let url =Host+'/apis/vipsList?openid='+UnionId
    let html = request(url);
    let json = JSON.parse(html);
    let data =json.data.user;
    let openid =data.openid;
    let unionId =data.unionId;
    globalThis.token =data.token;
    let e=md5("Berip aqagnigkini mara"+openid+unionId+t+token+"Berip aqagnigkini mara");   
    let playsign=md5("Berip aqagnigkini mara"+e);
    return playsign
}
globalThis.get_other_episode= function(input){
    let url1 = Host+'/apis/get_other_episode';
    let body1 = JSON.stringify({
        id: input,
        openid: Openid,
        unionId: UnionId,
        time: '1729678266',
        sign: 'e1a4628bdd91b66a8eaeb7c6f4415b78',
    });
    let html1 =fetch(url1, {
        method: 'POST',
        headers: getHeaders(),
        body: body1,
    });
    print(html1);
    let json1 = JSON.parse(html1);
    let sites = json1.data[1];
    let currentIndex = 0;
    let d = sites.map(function (it) {
        let _uu = it.id+'￥'+it.mov_pid;
        let combinedString = `${currentIndex + 1}$${_uu}`;
        currentIndex++;
        return combinedString;
    });
    return d
}
globalThis.getMyEpisode= function(input){
    let url2 = Host+'/apis/getMyEpisode';
    let parts = input.split('￥');
    let curId = parseInt(parts[0], 10); 
    let pid = parseInt(parts[1], 10); 
    let body2 = JSON.stringify({
        curId: curId,
        openid: Openid,
        uid: UnionId,
        pid:pid
    }); 
    let html2 =fetch(url2, {
        method: 'POST',
        headers: getHeaders(),
        body:body2,
    });
    let json2 = JSON.parse(html2);
    let playurl = json2.data.url;  
    return playurl
}

var rule = {
    title: 'Tizkor',
    host: 'https://qutbay.bilimnur.cn/',
    detailUrl: 'fyid',
    searchUrl: '/apis/search?keyword=**&page=fypage&time=1729608610&sign=2216a0d88d697e0130455a06bd4d427a',
    url: '/apis/get_category_mov?page=fypage&fyfilter&time=1729608610&sign=2216a0d88d697e0130455a06bd4d427a',
    filterable: 1,
    filter_url: 'region={{fl.region}}&year={{fl.year}}&type={{fl.type}}&lan=fyclass',
    filter: {'كىنو':[{'key':'region','name':'region','value':[{'n':'ھەممە','v':''},{'n':'جۇڭگۇ','v':'جۇڭگۇ'},{'n':'باشقىلار','v':'باشقىلار'},{'n':'ئامېرىكا','v':'ئامېرىكا'},{'n':'ھېندىستان','v':'ھېندىستان'},{'n':'كورىيە','v':'كورىيە'},{'n':'ياپۇنيە','v':'ياپۇنيە'},{'n':'تايلاند','v':'تايلاند'},{'n':'يەرلىك','v':'يەرلىك'}]},{'key':'year','name':'year','value':[{'n':'ھەممە','v':''},{'n':'2024','v':'2024'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2011~2015','v':'2011~2015'},{'n':'2001~2010','v':'2001~2010'},{'n':'1990~2000','v':'1990~2000'},{'n':'90-يىلدىن بۇرۇن','v':'90-يىلدىن بۇرۇن'}]},{'key':'type','name':'type','value':[{'n':'ھەممە','v':''},{'n':'قىسقا تورفىلىم','v':'قىسقا تورفىلىم'},{'n':'يىڭىنىۋاتىدۇ','v':'يىڭىنىۋاتىدۇ'},{'n':'ئۆز تىل','v':'ئۆز تىل'},{'n':' قەدىمكى كىيىملىكلەر','v':' قەدىمكى كىيىملىكلەر'},{'n':'كومىدىيەلىك','v':'كومىدىيەلىك'},{'n':'فانتازىيەلىك','v':'فانتازىيەلىك'},{'n':'مۇھەببەتلىك','v':'مۇھەببەتلىك'},{'n':'قورقۇنۇچلۇق','v':'قورقۇنۇچلۇق'},{'n':'ھەركەتلىك','v':'ھەركەتلىك'},{'n':'جاسۇسلۇق','v':'جاسۇسلۇق'},{'n':'ئۇرۇش','v':'ئۇرۇش'},{'n':'ۋەقەلىك','v':'ۋەقەلىك'}]}],'قىسىملىق':[{'key':'region','name':'region','value':[{'n':'ھەممە','v':''},{'n':'جۇڭگۇ','v':'جۇڭگۇ'},{'n':'باشقىلار','v':'باشقىلار'},{'n':'ئامېرىكا','v':'ئامېرىكا'},{'n':'ھېندىستان','v':'ھېندىستان'},{'n':'كورىيە','v':'كورىيە'},{'n':'ياپۇنيە','v':'ياپۇنيە'},{'n':'تايلاند','v':'تايلاند'},{'n':'يەرلىك','v':'يەرلىك'}]},{'key':'year','name':'year','value':[{'n':'ھەممە','v':''},{'n':'2024','v':'2024'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2011~2015','v':'2011~2015'},{'n':'2001~2010','v':'2001~2010'},{'n':'1990~2000','v':'1990~2000'},{'n':'90-يىلدىن بۇرۇن','v':'90-يىلدىن بۇرۇن'}]},{'key':'type','name':'type','value':[{'n':'ھەممە','v':''},{'n':'قىسقا تورفىلىم','v':'قىسقا تورفىلىم'},{'n':'يىڭىنىۋاتىدۇ','v':'يىڭىنىۋاتىدۇ'},{'n':'ئۆز تىل','v':'ئۆز تىل'},{'n':' قەدىمكى كىيىملىكلەر','v':' قەدىمكى كىيىملىكلەر'},{'n':'كومىدىيەلىك','v':'كومىدىيەلىك'},{'n':'فانتازىيەلىك','v':'فانتازىيەلىك'},{'n':'مۇھەببەتلىك','v':'مۇھەببەتلىك'},{'n':'قورقۇنۇچلۇق','v':'قورقۇنۇچلۇق'},{'n':'ھەركەتلىك','v':'ھەركەتلىك'},{'n':'جاسۇسلۇق','v':'جاسۇسلۇق'},{'n':'ئۇرۇش','v':'ئۇرۇش'},{'n':'ۋەقەلىك','v':'ۋەقەلىك'}]}],'كارتۇن':[{'key':'region','name':'region','value':[{'n':'ھەممە','v':''},{'n':'جۇڭگۇ','v':'جۇڭگۇ'},{'n':'باشقىلار','v':'باشقىلار'},{'n':'ئامېرىكا','v':'ئامېرىكا'},{'n':'ھېندىستان','v':'ھېندىستان'},{'n':'كورىيە','v':'كورىيە'},{'n':'ياپۇنيە','v':'ياپۇنيە'},{'n':'تايلاند','v':'تايلاند'},{'n':'يەرلىك','v':'يەرلىك'}]},{'key':'year','name':'year','value':[{'n':'ھەممە','v':''},{'n':'2024','v':'2024'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2011~2015','v':'2011~2015'},{'n':'2001~2010','v':'2001~2010'},{'n':'1990~2000','v':'1990~2000'},{'n':'90-يىلدىن بۇرۇن','v':'90-يىلدىن بۇرۇن'}]},{'key':'type','name':'type','value':[{'n':'ھەممە','v':''},{'n':'قىسقا تورفىلىم','v':'قىسقا تورفىلىم'},{'n':'يىڭىنىۋاتىدۇ','v':'يىڭىنىۋاتىدۇ'},{'n':'ئۆز تىل','v':'ئۆز تىل'},{'n':' قەدىمكى كىيىملىكلەر','v':' قەدىمكى كىيىملىكلەر'},{'n':'كومىدىيەلىك','v':'كومىدىيەلىك'},{'n':'فانتازىيەلىك','v':'فانتازىيەلىك'},{'n':'مۇھەببەتلىك','v':'مۇھەببەتلىك'},{'n':'قورقۇنۇچلۇق','v':'قورقۇنۇچلۇق'},{'n':'ھەركەتلىك','v':'ھەركەتلىك'},{'n':'جاسۇسلۇق','v':'جاسۇسلۇق'},{'n':'ئۇرۇش','v':'ئۇرۇش'},{'n':'ۋەقەلىك','v':'ۋەقەلىك'}]}],'سەنئەت-پىروگرامما':[{'key':'region','name':'region','value':[{'n':'ھەممە','v':''},{'n':'جۇڭگۇ','v':'جۇڭگۇ'},{'n':'باشقىلار','v':'باشقىلار'},{'n':'ئامېرىكا','v':'ئامېرىكا'},{'n':'ھېندىستان','v':'ھېندىستان'},{'n':'كورىيە','v':'كورىيە'},{'n':'ياپۇنيە','v':'ياپۇنيە'},{'n':'تايلاند','v':'تايلاند'},{'n':'يەرلىك','v':'يەرلىك'}]},{'key':'year','name':'year','value':[{'n':'ھەممە','v':''},{'n':'2024','v':'2024'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2011~2015','v':'2011~2015'},{'n':'2001~2010','v':'2001~2010'},{'n':'1990~2000','v':'1990~2000'},{'n':'90-يىلدىن بۇرۇن','v':'90-يىلدىن بۇرۇن'}]},{'key':'type','name':'type','value':[{'n':'ھەممە','v':''},{'n':'قىسقا تورفىلىم','v':'قىسقا تورفىلىم'},{'n':'يىڭىنىۋاتىدۇ','v':'يىڭىنىۋاتىدۇ'},{'n':'ئۆز تىل','v':'ئۆز تىل'},{'n':' قەدىمكى كىيىملىكلەر','v':' قەدىمكى كىيىملىكلەر'},{'n':'كومىدىيەلىك','v':'كومىدىيەلىك'},{'n':'فانتازىيەلىك','v':'فانتازىيەلىك'},{'n':'مۇھەببەتلىك','v':'مۇھەببەتلىك'},{'n':'قورقۇنۇچلۇق','v':'قورقۇنۇچلۇق'},{'n':'ھەركەتلىك','v':'ھەركەتلىك'},{'n':'جاسۇسلۇق','v':'جاسۇسلۇق'},{'n':'ئۇرۇش','v':'ئۇرۇش'},{'n':'ۋەقەلىك','v':'ۋەقەلىك'}]}],'قىسقا تور فىلمى':[{'key':'region','name':'region','value':[{'n':'ھەممە','v':''},{'n':'جۇڭگۇ','v':'جۇڭگۇ'},{'n':'باشقىلار','v':'باشقىلار'},{'n':'ئامېرىكا','v':'ئامېرىكا'},{'n':'ھېندىستان','v':'ھېندىستان'},{'n':'كورىيە','v':'كورىيە'},{'n':'ياپۇنيە','v':'ياپۇنيە'},{'n':'تايلاند','v':'تايلاند'},{'n':'يەرلىك','v':'يەرلىك'}]},{'key':'year','name':'year','value':[{'n':'ھەممە','v':''},{'n':'2024','v':'2024'},{'n':'2023','v':'2023'},{'n':'2022','v':'2022'},{'n':'2021','v':'2021'},{'n':'2020','v':'2020'},{'n':'2019','v':'2019'},{'n':'2018','v':'2018'},{'n':'2017','v':'2017'},{'n':'2016','v':'2016'},{'n':'2011~2015','v':'2011~2015'},{'n':'2001~2010','v':'2001~2010'},{'n':'1990~2000','v':'1990~2000'},{'n':'90-يىلدىن بۇرۇن','v':'90-يىلدىن بۇرۇن'}]},{'key':'type','name':'type','value':[{'n':'ھەممە','v':''},{'n':'قىسقا تورفىلىم','v':'قىسقا تورفىلىم'},{'n':'يىڭىنىۋاتىدۇ','v':'يىڭىنىۋاتىدۇ'},{'n':'ئۆز تىل','v':'ئۆز تىل'},{'n':' قەدىمكى كىيىملىكلەر','v':' قەدىمكى كىيىملىكلەر'},{'n':'كومىدىيەلىك','v':'كومىدىيەلىك'},{'n':'فانتازىيەلىك','v':'فانتازىيەلىك'},{'n':'مۇھەببەتلىك','v':'مۇھەببەتلىك'},{'n':'قورقۇنۇچلۇق','v':'قورقۇنۇچلۇق'},{'n':'ھەركەتلىك','v':'ھەركەتلىك'},{'n':'جاسۇسلۇق','v':'جاسۇسلۇق'},{'n':'ئۇرۇش','v':'ئۇرۇش'},{'n':'ۋەقەلىك','v':'ۋەقەلىك'}]}]},
    filter_def: {},
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    class_name: 'كىنو&قىسىملىق&كارتۇن&سەنئەت-پىروگرامما&قىسقا تور فىلمى',
    class_url: 'كىنو&قىسىملىق&كارتۇن&سەنئەت-پىروگرامما&قىسقا تور فىلمى',
    searchable: 2,
    play_parse: true,
    lazy: $js.toString(() => {
        if (input.includes('https')) {
            input = { parse: 2, url: input, js: '' };
        } else if (input.startsWith('wxv')) {
            input = Wxvplayurl + input;
            input = { parse: 2, url: input, js: '' };
        } else if (input.includes('￥')) {
            input = getMyEpisode(input);
            input = { parse: 2, url: input, js: '' };
        };
    }),
    double: true,
    一级: 'json:data;mov_title;mov_img;mov_cate;id;mov_lang',
    二级: $js.toString(() => {
        let vodItems = [];
        input = input.split("/").pop();
        let url = Host+'/apis/get_mov_detail';
        let t = Math.floor(Date.now() / 1000);
        let body = JSON.stringify({
            id: input,
            openid: Openid,
            unionId: UnionId,
            time: t,
            sign: playsign(t),
            agent: 30565
        });
        log('gggggggvv'+token);
        let html =fetch(url, {
            method: 'POST',
            headers: getHeaders(),
            body:body,
        });
        log(html);
        let json = JSON.parse(html);
        let data = json.data.all;
        let tilte = data.mov_title;
        let img = data.mov_img;
        let vod_type = data.mov_cate;
        let area = data.mov_region;
        let content = data.mov_desc;
        let all = data.all;
        let base_vod = {
            vod_id: input,
            vod_name: tilte,
            type_name: vod_type,
            vod_year: '',
            vod_area: '',
            vod_actor: '',
            vod_director: '',
            vod_content: content,
            vod_remarks: area,
            vod_pic: img
        };
        if (all > 1) {
            vodItems.push(get_other_episode(input).join("#"));
        } else {
            let sites = json.data.epiplay;
            let currentIndex = 0;
            let d = sites.map(function (it) {
                let _uu = it.url;
                let combinedString = `${currentIndex + 1}$${_uu}`;
                currentIndex++;
                return combinedString;
            });
            vodItems.push(d.join("#")); 
        };
        let vod_play_url = vodItems.join("#");
        base_vod.vod_play_url = vod_play_url;
        let vod_play_from = 'Tizkor';
        base_vod.vod_play_from = vod_play_from;
        VOD = base_vod;
    }),
    搜索: 'json:data;mov_title;mov_img;mov_cate;id;mov_lang'
}
