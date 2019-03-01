let context={
  date:{},
  getSuggestion(){
    let suggestions=[];
    suggestions.push({
      id:1,
      avator:"http://b261.photo.store.qq.com/psb?/c31ecf51-e421-4f10-a51b-7d954838bd81/2Ub.LFyVYNSdATrCmczdgbHW5pgfJUVSm2yTjlT5qJ0!/b/Yb2Yl5sBFQAAYn.ol5sAFQAA&n=1",
      name:"小汪汪",
      title:"推动党支部标准化建设",
      content:"按照有场所、有设施、有标志、有党旗、有书报、有制度的“六有”标准，他们全面加强支部阵地建设；通过基本组织、基本队伍、基本制度、基本阵地、基本活动、基本保障的“六基”工程建设，为企业文化建设奠定了坚强的组织保障。",
      time:new Date()
    });
    suggestions.push({
      id:2,
      avator: "http://b261.photo.store.qq.com/psb?/c31ecf51-e421-4f10-a51b-7d954838bd81/2Ub.LFyVYNSdATrCmczdgbHW5pgfJUVSm2yTjlT5qJ0!/b/Yb2Yl5sBFQAAYn.ol5sAFQAA&n=1",
      name: "小汪汪",
      title: "推动党支部标准化建设",
      content: "按照有场所、有设施、有标志、有党旗、有书报、有制度的“六有”标准，他们全面加强支部阵地建设；通过基本组织、基本队伍、基本制度、基本阵地、基本活动、基本保障的“六基”工程建设，为企业文化建设奠定了坚强的组织保障。",
      time: new Date()
    });
    this.setData({suggestions});
  },
  onLoad(){
    this.getSuggestion();
  }
}
Page(context);