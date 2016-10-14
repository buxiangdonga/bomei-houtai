					$(function() {
						var colors = Highcharts.getOptions().colors,
							categories = ['10%', '31%', '20%', '29%', ''],
							data = [{
								y: 10,
								color: colors[0],
								drilldown: {
									name: 'fenxiao1',
									categories: ['分销一级人员'],
									data: [10],
									color: colors[0]
								}
							}, {
								y: 31,
								color: colors[1],
								drilldown: {
									name: 'fenxiao2',
									categories: ['分销二级人员'],
									data: [31],
									color: colors[1]
								}
							}, {
								y: 20,
								color: colors[2],
								drilldown: {
									name: 'fenxiao3',
									categories: ['分销三级人员'],
									data: [20],
									color: colors[2]
								}
							}, {
								y: 29,
								color: colors[3],
								drilldown: {
									name: 'jiafang',
									categories: ['甲方'],
									data: [29],
									color: colors[3]
								}
								//      }, {
								//          y: 2.14,
								//          color: colors[4],
								//          drilldown: {
								//              name: 'nishi5',
								//              categories: ['Opera 9.x', 'Opera 10.x', 'Opera 11.x'],
								//              data: [ 0.12, 0.37, 1.65],
								//              color: colors[4]
								//          }
							}],
							browserData = [],
							versionsData = [],
							i,
							j,
							dataLen = data.length,
							drillDataLen,
							brightness;
							
//							console.debug(Highcharts.getOptions().colors)
//							for (i in colors) {
//								var span1=document.createElement("span");
//								span1.style.backgroundColor=colors[i];
//								span1.innerHTML="dfadf";
//								document.getElementById("divdiv").appendChild(span1)
//								console.debug(span1)
//							}
						// Build the data arrays
						for(i = 0; i < dataLen; i += 1) {
							// add browser data
							browserData.push({
								name: categories[i],
								y: data[i].y,
								color: data[i].color
							});
							// add version data
							drillDataLen = data[i].drilldown.data.length;
							for(j = 0; j < drillDataLen; j += 1) {
								brightness = 0.2 - (j / drillDataLen) / 5;
								versionsData.push({
									name: data[i].drilldown.categories[j],
									y: data[i].drilldown.data[j],
									color: Highcharts.Color(data[i].color).brighten(brightness).get()
								});
							}
						}
						// Create the chart
						$('#container').highcharts({
							chart: {
								type: 'pie'
							},
							title: {
								text: '分销比例人员分配'
							},
							yAxis: {
								title: {
									text: '分销比例人员分配'
								}
							},
							plotOptions: {
								pie: {
									shadow: false,
									center: ['50%', '50%']
								}
							},
							tooltip: {
								valueSuffix: '%'
							},
							series: [{
								name: '比例',
								data: browserData,
								size: '30%',
								dataLabels: {
									formatter: function() {
										return this.y > 5 ? this.point.name : null;
									},
									color: 'white',
									distance: -30
								}
							}, {
								name: '比例',
								data: versionsData,
								size: '80%',
								innerSize: '68%',
								dataLabels: {
									color: 'white',
									distance: 0,
									formatter: function() {
										// display only if larger than 1
										return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
									}
								}
							}, {
								name: '比例：',
								data: versionsData,
								size: '70%',
								innerSize: '68%',
								dataLabels: {
									distance: 50,
									formatter: function() {
										// display only if larger than 1
										return this.y > 1 ? '<b>' + this.point.name + ':</b> ' + this.y + '%' : null;
									}
								}
							}]
						});
					});

//					$("rect").eq(0).next().next().css("display", "none")
//					$("rect").css("display", "none")
//					$("rect").eq(0).next().css("display", "none")

