
$(document).foundation();

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
    "PCP-PEV":441147,
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
    "PCP-PEV": 446279,
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
    "PCP-PEV": 433369,
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
    "PCP-PEV": 379870,
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
    "PCP-PEV": 487058,
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
    "PCP-PEV": 506157,
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
    "PCP-PEV": 504583,
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
  for(var partido in rObject.partidos){
    var resultado = rObject.partidos[partido];
    var percentagem = (resultado/rObject.votantes)*99;
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

  for(var partido in rObject.partidos){
    var resultado = rObject.partidos[partido];
    var percentagem = (resultado/rObject.total)*100;
    var partidoCSS = partido.replace("/","").replace("-","");
    $("#depois"+ano+"Graph").append( "<span id='depois-"+ano+partidoCSS+"' data-tooltip aria-haspopup='true' title='" + partido + ": "+ percentagem.toFixed(2)+"%' class='has-tip partido "+partidoCSS+"' style='width:"+percentagem+"%;'></span>" );
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

for(ano in resultados){
  $("#container").append('\
    <div class="row">\
      <div class="hide">\
          <div class="small-5 columns text-center">&nbsp;</div>\
          <div class="small-2 columns text-center label round anoLabel">'+ano+'</div>\
          <div class="small-5 columns text-center">&nbsp;</div>\
      </div>\
      <div class="row">\
          <div class="small-5 columns text-right right-border anoGraph" id="antes'+ano+'Graph"></div>\
          <div class="small-1 columns text-center label round anoLabel"><span>'+ano+'</span></div>\
          <div class="small-5 columns text-left left-border anoGraph" id="depois'+ano+'Graph"></div>\
      </div>\
      <div class="hide">\
          <div class="small-5 columns text-center right-border anoInfo" id="antes'+ano+'Info">\
          </div>\
          <div class="small-5 columns text-center left-border anoInfo" id="depois'+ano+'Info">\
          </div>\
      </div>\
    </div>');
  addResultados(ano);
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

// ( "[attribute*='value']" )

$("[id*='antes']").hover(function(e) {
    console.log(e.target.id);
    $('#' + e.target.id.replace("antes", "depois")).trigger(e.type);
    e.preventDefault();
});
