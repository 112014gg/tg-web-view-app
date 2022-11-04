

function test(){
	var elo = Number(document.getElementsByTagName("input")[0].value)
	var matches = Number(document.getElementsByTagName("input")[1].value)

	let elos_list = ['1','801','801', '951', '951', '1101', '1101', '1251', '1251', '1401', '1401', '1551', '1551', '1701', '1701', '1851', '1851', '2001', '2001', '9999'];
	let lvls_list = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10];

	let prices = [60, 60, 70, 70, 80, 80, 100, 100, 120, 120, 140, 140, 160, 160, 180, 180, 200, 200, 280, 280];
	var inf = [];
	var total_price = 0;
	for (var n = 0; n < matches; n++){
		for (var i = 0; i < 20; i++){
			
			if (Number(elos_list[i]) <= elo && elo <= Number(elos_list[i+1])){
				inf[i] = lvls_list[i];
				
				total_price += prices[i];
				
				elo += 25
			}
			
		}
		
	}
	alert(inf)
	alert(total_price)
}