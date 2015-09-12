$(document).foundation();

// adicionar divs por cada partido
var resultados2011 = {
  total:9624354,
  abstencao: 4039300,
  votantes: 5585054,
  partidos: {
    "PSD":2159181,
    "PS":1566347,
    "CDS":653888,
    "CDU":441147,
    "BE":288923
  }
}

var graphSize = 400;
for(var partido in resultados2011.partidos){
  resultado = resultados2011.partidos[partido];
  $("#antes2011").append( "<span class='partido "+partido+"' style='width:"+(resultado/resultados2011.votantes)*graphSize+"px;'></span>" );
}

for(var partido in resultados2011.partidos){
  resultado = resultados2011.partidos[partido];
  $("#depois2011").append( "<span class='partido "+partido+"' style='width:"+(resultado/resultados2011.total)*graphSize+"px;'></span>" );
}
$("#depois2011").append( "<span class='partido abstencao' style='width:"+(resultados2011.abstencao/resultados2011.total)*graphSize+"px;'></span>" );
