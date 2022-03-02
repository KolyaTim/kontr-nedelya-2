let students = []




function loadFromSite(){
	$.get('http://217.71.129.139:4035/students.php', function(data){
		students = JSON.parse(data)['response']
		show_table()
	});
}

function show_table(){
let tbody = $('#tbl_all>tbody')
tbody.html('')
for ( let i = 0; i < students.length; i++) {
	
	let tr = $('<tr></tr>')
	let td1 = $('<td>' + students[i].id + '</td>')
	
	let td2 = $('<td>' + students[i].surname + '</td>')
	let td3 = $('<td>' + students[i].name + '</td>')
	let td4 = $(`<td><button onclick ="show_info(${i})">Подробнее</button></td>`)
	tr.append(td1).append(td3).append(td2).append(td4)
	tbody.append(tr)

		}

}
function show_info(id){
	let div = $('#info')
	let header = $('<h1>Информация о студенте №'+(id+1)+'</h1>')
	let name = $('<h3>'+students[id].name+' '+students[id].surname+'</h3>')
	let img = $(`<img src="http://217.71.129.139:4035/${students[id].logo}>`)
	div.html('')
	div.append(header).append(name).append(img)
}