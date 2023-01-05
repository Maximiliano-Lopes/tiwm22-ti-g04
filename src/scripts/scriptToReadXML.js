
let url = "../data/dataset.xml"

$.ajax(url)
    .done(function(xml){
        $(xml).find("baleia").each(function(){
            console.log("Entrei")
            $("#corpoTable").append(`
            <tr>
                <td>${ $(this).find("nome").text()}</td>
                <td>${ $(this).find("alimento").text()}</td>
                <td>${ $(this).find("quantidade").text()}</td>
                <td>${ $(this).find("local").text()}</td>
            </tr>
            `);
        });

    })
    .fail(function(){
        alert("Falha na obtenção dos dados XMl.")
    })