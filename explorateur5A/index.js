$(document).ready(function(){

	$(".btn-block-top").click(function(){
		$.get( "https://api.blockcypher.com/v1/btc/main", function(data1) {
			$.get("https://api.blockcypher.com/v1/btc/main/blocks/"+data1.height, function(data){
				var htmlOutput = ''; var htmlOutput2 = ''; var htmlOutput3 = '';

				htmlOutput += '<td>'+data.chain+'</td><td>'+data.height+'</td><td>'+data.fees+'</td><td>'+data.bits+'</td>';
				htmlOutput2 += '<td>'+data.hash+'</td>';
				htmlOutput3 += '<td>'+data.time+'</td><td>'+data.depth+'</td><td>'+data.total+'</td>';

			}
			$(".results1").html( htmlOutput );
			$(".results2").html( htmlOutput2 );
			$(".results3").html( htmlOutput3 );

		});
			
		});
	});

	$(".btn-block-height").click(function(){
		var htmlOutput = ''; var htmlOutput2 = ''; var htmlOutput3 = '';
		if($(".input-block-height").val() == ""){
			htmlOutput += "Block Height input is blank. Please fill it.";
			$(".results1").html( htmlOutput );
			$(".results2").html( htmlOutput );
			$(".results3").html( htmlOutput );
		}
		else{
			$.get( "https://api.blockcypher.com/v1/btc/main/blocks/"+$(".input-block-height").val(), function(data) {
				htmlOutput += '<td>'+data.chain+'</td><td>'+data.height+'</td><td>'+data.fees+'</td><td>'+data.bits+'</td>';
				htmlOutput2 += '<td>'+data.hash+'</td>';
				htmlOutput3 += '<td>'+data.time+'</td><td>'+data.depth+'</td><td>'+data.total+'</td>';
				$(".results1").html( htmlOutput );
				$(".results2").html( htmlOutput2 );
				$(".results3").html( htmlOutput3 );
			})
			.fail(function(){
				console.log('coucou');
				htmlOutput += 'Error - 404 not found';
				htmlOutput2 += 'Error - 404 not found';
				htmlOutput3 += 'Error - 404 not found';

				$(".results1").html( htmlOutput );
				$(".results2").html( htmlOutput2 );
				$(".results3").html( htmlOutput3 );

			});
		}
	});

	$(".btn-address-hash").click(function(){
		var htmlOutput = ''; var htmlOutput2 = ''; var htmlOutput3 = '';
		if($(".input-address-hash").val() == ""){
			htmlOutput += "Address Hash input is blank. Please fill it.";
			$(".results1").html( htmlOutput );
			$(".results2").html( htmlOutput );
			$(".results3").html( htmlOutput );
		}
		else{
			$.get( "https://api.blockcypher.com/v1/btc/main/addrs/"+$(".input-address-hash").val(), function(data) {
				htmlOutput += '<td>'+data.chain+'</td><td>'+data.height+'</td><td>'+data.fees+'</td><td>'+data.bits+'</td>';
				htmlOutput2 += '<td>'+data.hash+'</td>';
				htmlOutput3 += '<td>'+data.time+'</td><td>'+data.depth+'</td><td>'+data.total+'</td>';
				$(".results1").html( htmlOutput );
				$(".results2").html( htmlOutput2 );
				$(".results3").html( htmlOutput3 );
			})
			.fail(function(){
				console.log('coucou');
				htmlOutput += 'Error - 404 not found';
				htmlOutput2 += 'Error - 404 not found';
				htmlOutput3 += 'Error - 404 not found';

				$(".results1").html( htmlOutput );
				$(".results2").html( htmlOutput2 );
				$(".results3").html( htmlOutput3 );

			});
		}
	});

	$(".btn-transaction-hash").click(function(){
		var htmlOutput = ''; var htmlOutput2 = ''; var htmlOutput3 = '';
		if($(".input-transaction-hash").val() == ""){
			htmlOutput += "Transaction Hash input is blank. Please fill it.";
			$(".results1").html( htmlOutput );
			$(".results2").html( htmlOutput );
			$(".results3").html( htmlOutput );		}
			else{
				$.get( "https://api.blockcypher.com/v1/btc/main/txs/"+$(".input-transaction-hash").val(), function(data) {

					htmlOutput += '<td>'+data.chain+'</td><td>'+data.height+'</td><td>'+data.fees+'</td><td>'+data.bits+'</td>';
					htmlOutput2 += '<td>'+data.hash+'</td>';
					htmlOutput3 += '<td>'+data.time+'</td><td>'+data.depth+'</td><td>'+data.total+'</td>';
					$(".results1").html( htmlOutput );
					$(".results2").html( htmlOutput2 );
					$(".results3").html( htmlOutput3 );
				})
				.fail(function(){
					console.log('coucou');
					htmlOutput += 'Error - 404 not found';
					htmlOutput2 += 'Error - 404 not found';
					htmlOutput3 += 'Error - 404 not found';

					$(".results1").html( htmlOutput );
					$(".results2").html( htmlOutput2 );
					$(".results3").html( htmlOutput3 );

				});
			}
		});
});