
$(document).foundation();

var resultados2015 = {
  total: 9439711,
  abstencao: 4059465,
  votantes: 5380246,
  brancos: 112658,
  nulos: 86467,
  partidos: {
    "PaF": 1981408,
    "PS": 1742002,
    "BE": 549838,
    "CDU": 444905,
    "Outros": 462968
  }
};

var resultados2011 = {
  total: 9624354,
  abstencao: 4039300,
  votantes: 5585054,
  brancos: 148618,
  nulos: 79399,
  partidos: {
    "PPD/PSD":2159181,
    "PS":1566347,
    "CDS-PP":653888,
    "CDU":441147,
    "BE":288923,
    "Outros": 247126
  }
};

var resultados2009 = {
  total: 9519921,
  abstencao: 3838663,
  votantes: 5681258,
  brancos: 99086,
  nulos: 76894,
  partidos: {
    "PS": 2077238,
    "PSD": 1653665,
    "CDS-PP": 592778,
    "BE": 557306,
    "CDU": 446279,
    "Outros": 178012
  }
};

var resultados2005 = {
  total: 8944508,
  abstencao: 3196674,
  votantes: 5747834,
  brancos: 103537,
  nulos: 65515,
  partidos: {
    "PS": 2588312,
    "PPD/PSD": 1653425,
    "CDU": 433369,
    "CDS-PP": 416415,
    "BE":364971,
    "Outros": 122127
  }
};

var resultados2002 = {
  total: 8902713,
  abstencao: 3429058,
  votantes: 5473655,
  brancos: 55121,
  nulos: 52653,
  partidos: {
    "PPD/PSD": 2200765,
    "PS": 2068584,
    "CDS-PP": 477350,
    "CDU": 379870,
    "BE": 149966,
    "Outros": 88542
  }
};

var resultados1999 = {
  total: 8864604,
  abstencao: 3449502,
  votantes: 5415102,
  brancos: 56964,
  nulos: 51230,
  partidos: {
    "PS": 2385922,
    "PPD/PSD": 1750158,
    "CDU": 487058,
    "CDS-PP": 451643,
    "BE": 132333,
    "Outros": 99842
  }
};

var resultados1995 = {
  total: 8906608,
  abstencao: 3001754,
  votantes: 5904854,
  brancos: 45793,
  nulos: 67300,
  partidos: {
    "PS": 2583755,
    "PPD/PSD": 2014589,
    "CDS-PP": 534470,
    "CDU": 506157,
    "PCTP/MRPP": 41137,
    "Outros": 111653
  }
};

var resultados1991 = {
  total: 8462357,
  abstencao: 2726926,
  votantes: 5735431,
  brancos: 47652,
  nulos: 63020,
  partidos: {
    "PPD/PSD": 2902351,
    "PS": 1670758,
    "CDU": 504583,
    "CDS": 254317,
    "PSN":	96096,
    "Outros": 196654
  }
};

var resultados1987 = {
  total: 7930668,
  abstencao: 2254310,
  votantes: 5676358,
  brancos: 50135,
  nulos: 73533,
  partidos: {
    "PPD/PSD": 2850784,
    "PS": 1262506,
    "CDU": 689137,
    "PRD": 278561,
    "CDS": 251987,
    "Outros": 219715
  }
};

var resultados1985 = {
  total: 7818981,
  abstencao: 2020052,
  votantes: 5798929,
  brancos: 48709,
  nulos: 96610,
  partidos: {
    "PPD/PSD": 1732288,
    "PS": 1204321,
    "PRD": 1038893,
    "APU": 898281,
    "CDS":	577580,
    "Outros": 202247
  }
};

var resultados1983 = {
  total: 7337064,
  abstencao: 1629369,
  votantes: 5707695,
  brancos: 42494,
  nulos: 104276,
  partidos: {
    "PS": 2061309,
    "PPD/PSD": 1554804,
    "APU": 1031609,
    "CDS":	716705,
    "PDC": 39180,
    "Outros": 157232
  }
};

var resultados1980 = {
  total: 7179023,
  abstencao: 1152628,
  votantes: 6026395,
  brancos: 34522,
  nulos: 103140,
  partidos: {
    "AD": 2706667,
    "FRS": 1606198,
    "APU": 1009505,
    "PPD/PSD": 147644,
    "UDP": 83204,
    "Outros": 335515
  }
};

var resultados1979 = {
  total: 7249346,
  abstencao: 1241893,
  votantes: 6007453,
  brancos: 42863,
  nulos: 120851,
  partidos: {
    "AD": 2554458,
    "PS": 1642136,
    "APU": 1129322,
    "PSD":	141227,
    "UDP": 130842,
    "Outros": 245754
  }
};

var resultados1976 = {
  total: 6564667,
  abstencao: 1081206,
  votantes: 5483461,
  brancos: 0,
  nulos: 257696,
  partidos: {
    "PS": 1912921,
    "PPD": 1335381,
    "CDS": 876007,
    "PCP":	788830,
    "UDP": 91690,
    "Outros": 220936
  }
};

var resultados1975 = {
  total: 6231372,
  abstencao: 519543,
  votantes: 5711829,
  brancos: 0,
  nulos: 396765,
  partidos: {
    "PS": 2162972,
    "PPD": 1507282,
    "PCP":	711935,
    "CDS": 434879,
    "MDP": 236318,
    "Outros": 261768
  }
};

var resultados = {
  "2015": resultados2015,
  "2011": resultados2011,
  "2009": resultados2009,
  "2005": resultados2005,
  "2002": resultados2002,
  "1999": resultados1999,
  "1995": resultados1995,
  "1991": resultados1991,
  "1987": resultados1987,
  "1985": resultados1985,
  "1983": resultados1983,
  "1980": resultados1980,
  "1979": resultados1979,
  "1976": resultados1976,
  "1975": resultados1975
};

var addResultados = function(ano){
  var rObject = resultados[ano];

  // antes
  for(var partido in rObject.partidos){
    var resultado = rObject.partidos[partido];
    var percentagem = (resultado/rObject.votantes)*100;
    var partidoCSS = partido.replace("/","").replace("-","");
    $("#antes"+ano+"Graph").append( "<span id='antes-"+ano+partidoCSS+"' data-tooltip aria-haspopup='true' title='" + partido + ": "+ percentagem.toFixed(2)+"%' class='has-tip partido "+partidoCSS+"' style='width:"+percentagem+"%;'></span>" );
    $("#antes"+ano+"Info").append( "<div class='label " + partidoCSS + "'>" + partido + ": "+ percentagem.toFixed(2)+"%</div>" );
  }
  percentagem = (rObject.brancos/rObject.votantes)*100;
  $("#antes"+ano+"Graph").append( "<span id='antes-"+ano+"brancos' data-tooltip aria-haspopup='true' title='Brancos: "+ percentagem.toFixed(2)+"%' class='has-tip partido brancos' style='width:"+percentagem+"%;'></span>" );
  $("#antes"+ano+"Info").append( "<div class='label brancos'>Brancos: "+ percentagem.toFixed(2)+"%</div>");
  percentagem = (rObject.nulos/rObject.votantes)*100;
  $("#antes"+ano+"Graph").append( "<span id='antes-"+ano+"nulos' data-tooltip aria-haspopup='true' title='Nulos: "+ percentagem.toFixed(2)+"%' class='has-tip partido nulos' style='width:"+percentagem+"%;'></span>" );
  $("#antes"+ano+"Info").append( "<div class='label nulos'>Nulos: "+ percentagem.toFixed(2)+"%</div>" );;

  // depois
  for(var partido in rObject.partidos){
    var resultado = rObject.partidos[partido];
    var percentagem = (resultado/rObject.total)*100;
    var partidoCSS = partido.replace("/","").replace("-","");
    $("#depois"+ano+"Graph").append( "<span id='depois-"+ano+partidoCSS+"' data-tooltip aria-haspopup='true' title='" + partido + ": "+ percentagem.toFixed(2)+"%' class='has-tip depois-"+ano+partidoCSS+" partido "+partidoCSS+"' style='width:"+percentagem+"%;'></span>" );
    $("#depois"+ano+"Info").append( "<div class='label " + partidoCSS + "'>" + partido + ": "+ percentagem.toFixed(2)+"%???</div>" );
  }
  percentagem = (rObject.brancos/rObject.total)*100;
  $("#depois"+ano+"Graph").append( "<span id='depois-"+ano+"brancos' data-tooltip aria-haspopup='true' title='Brancos: "+ percentagem.toFixed(2)+"%' class='has-tip partido brancos' style='width:"+percentagem+"%;'></span>" );
  $("#depois"+ano+"Info").append( "<div class='label brancos'>Brancos: "+ percentagem.toFixed(2)+"%</div>");
  percentagem = (rObject.nulos/rObject.total)*100;
  $("#depois"+ano+"Graph").append( "<span id='depois-"+ano+"nulos' data-tooltip aria-haspopup='true' title='Nulos: "+ percentagem.toFixed(2)+"%' class='has-tip partido nulos' style='width:"+percentagem+"%;'></span>" );
  $("#depois"+ano+"Info").append( "<div class='label nulos'>Nulos: "+ percentagem.toFixed(2)+"%</div>");

  percentagem = (rObject.abstencao/rObject.total)*100;
  $("#depois"+ano+"Graph").append( "<span id='depois-"+ano+"abstencao' data-tooltip aria-haspopup='true' title='Abstenção: "+ percentagem.toFixed(2)+"%' class='has-tip partido abstencao' style='width:"+percentagem+"%;'></span>" );
  $("#depois"+ano+"Info").append( "<div class='label abstencao'>Abstenção: "+ percentagem.toFixed(2)+"%</div>" );
};

var anos = [];
for (ano in resultados)
{
    if (resultados.hasOwnProperty(ano))
    {
        anos.push(ano);
    }
}
anos.sort().reverse();

for (i = 0; i < anos.length; i++){
  $("#container").append('\
    <div class="row">\
          <div class="small-5 columns text-right right-border anoGraph" id="antes'+anos[i]+'Graph"></div>\
          <div class="small-1 columns text-center label round anoLabel"><span>'+anos[i]+'</span></div>\
          <div class="small-5 columns text-left left-border anoGraph" id="depois'+anos[i]+'Graph"></div>\
    </div>');
  addResultados(anos[i]);
}

$('.anoGraph').foundation({
  tooltip: {
    selector : '.has-tip',
    additional_inheritable_classes : [],
    tooltip_class : '.tooltip',
    touch_close_text: 'tap to close',
    disable_for_touch: false,
    tip_template : function (selector, content) {
      return '<span data-selector="' + selector + '" class="'
        + Foundation.libs.tooltip.settings.tooltip_class.substring(1)
        + '">' + content + '<span class="nub"></span></span>';
    }
  }
});

var antes = 0;
var depois = 0;
$("[id^='antes-']").hover(function(e){
  if(depois == 1){ depois = 0; }
  else{
    var depoisID = '#' + e.target.id.replace("antes", "depois");
    antes = 1;
    $(depoisID).toggleClass('highlight').trigger(e.type);
  }
});

$("[id^='depois-']").hover(function(e){
  if(antes == 1){ antes = 0; }
  else{
    var antesID = '#' + e.target.id.replace("depois", "antes");
    depois = 1;
    $(antesID).toggleClass('highlight').trigger(e.type);
  }
});

$("[id^='antes-']").mouseleave(function(e){
  antes = 0; depois = 0;
});
$("[id^='depois-']").mouseleave(function(e){
  antes = 0; depois = 0;
});
