var vm = new Vue({
	el: "#app",
	data: {
		products: [
			{
				name: '日曆系列-賞鷹平台',
				price: 100,
				content: "選用臺灣本土人文特色、傳統建築為素材製作，賞鷹平台位於與八卦山大佛相對的另一個山頭的制高點，除了可以看見過境的灰面鵟鷹外，在兩個山頭間的山谷地形，更是灰面鵟鷹捕食的最佳觀賞場所，",
				thumb: "img/pd1.jpg",
				amount: 0,
				amountShow: 1,
				id: "tab1",
			},
			{
				name: '日曆系列-八家將',
				price: 100,
				content: "選用臺灣本土人文特色、傳統建築為素材製作，八家將是台灣民間信仰的陣頭之一的簡稱，傳統上具有強烈的宗教性質，臉譜各依其師法傳承，會有所不同，差異甚大。",
				thumb: "img/pd2.jpg",
				amount: 0,
				amountShow: 1,
				id: "tab2",
			},
			{
				name: '日曆系列-布袋戲(戲偶)',
				price: 100,
				content: "選用臺灣本土人文特色、傳統建築為素材製作，布偶的頭是用木頭雕刻成中空的人頭，布袋戲偶身之軀幹是用布料做出的服裝；演出時，將手套入戲偶的服裝中進行操偶表演。",
				thumb: "img/pd3.jpg",
				amount: 0,
				amountShow: 1,
				id: "tab3",
			},
			{
				name: '月曆系列-肉圓',
				price: 120,
				content: "選用臺灣本土人文特色、傳統美食為素材製作，肉圓是一種臺灣的特色街頭小吃，外皮透明有嚼勁，其內餡以豬肉、豬絞肉為主，其他配料依據店家會有所不同。",
				thumb: "img/pd4.jpg",
				amount: 0,
				amountShow: 1,
				id: "tab4",
			},
			{
				name: '月曆系列-GODIVA月餅',
				price: 120,
				content: "選用臺灣本土人文特色、傳統美食為素材製作，皓月當空相輝映，闔家團圓度良辰。滿載美好寓意的月餅，刻畫了晴空滿月的良辰美景，蘊含了其樂融融的美滿寄託。",
				thumb: "img/pd5.jpg",
				amount: 0,
				amountShow: 1,
				id: "tab5",
			},
			{
				name: '月曆系列-彰化火車站',
				price: 120,
				content: "選用臺灣本土人文特色、傳統建築為素材製作，彰化站設於1905年，是個年代久遠的大站；目前為一等站，並且是長途列車駕駛、列車長交班之地。",
				thumb: "img/pd6.jpg",
				amount: 0,
				amountShow: 1,
				id: "tab6",
			},
			{
				name: '月曆系列-鐵路',
				price: 120,
				content: "選用臺灣本土人文特色、傳統建築為素材製作，臺灣鐵路（簡稱臺鐵）為臺灣主要的鐵路運輸系統。目前由西部幹線、東部幹線、南迴線等3條幹線，以及10條客貨運支線所組成。",
				thumb: "img/pd7.jpg",
				amount: 0,
				amountShow: 1,
				id: "tab7",
			},
			{
				name: '明信片-彰化孔廟',
				price: 50,
				content: "選用臺灣本土人文特色、傳統建築為素材製作，彰化孔子廟，又稱彰化孔廟，是位於臺灣彰化縣彰化市的孔廟，建築為漳州風格，1983年被列為一級古蹟（國定古蹟）。",
				thumb: "img/pd8.jpg",
				amount: 0,
				amountShow: 1,
				id: "tab8",
			},
			{
				name: '明信片-彰化八卦山大佛',
				price: 50,
				content: "選用臺灣本土人文特色、傳統建築為素材製作，大佛風景區，台灣旅遊景點之一，位於彰化縣東北方八卦山半山腰，為國家級風景區，八卦山風景區內風景據點之一，故亦稱「八卦山大佛風景區」。",
				thumb: "img/pd9.jpg",
				amount: 0,
				amountShow: 1,
				id: "tab9",
			},
			{
				name: '明信片-鹿港老街',
				price: 50,
				content: "選用臺灣本土人文特色、傳統建築為素材製作，鹿港老街位於臺灣彰化縣鹿港鎮，鹿港老街保存早期商店門牌建築，長條型閩式建築，此為清代至民國初年建築特色，且古蹟數量僅次於台南。",
				thumb: "img/pd10.jpg",
				amount: 0,
				amountShow: 1,
				id: "tab10",
			},
		]
	},
	methods: {
		minusOne(product){
			product.amountShow--
			product.amountShow = (product.amountShow < 1) ? 1 : product.amountShow
		},
		addOne(product){
			product.amountShow++
			product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow
		},
		addToCart(product){
			product.amount += product.amountShow
		},
		remove(product){
			product.amount = 0
		},
	},
	computed: {
		productInCart(){
			return this.products
			.filter(p => p.amount)
			.map(p => {
				p.sum = p.price*p.amount
				p.num = p.amount
				return p
			})
		},
		total(){
			return this.productInCart
			.reduce((sum,p) => (sum + p.sum),0)
		},
		num(){
			return this.productInCart
			.reduce((num,p) => (num + p.num),0)
		}
	}
})