function check(rm,index)
{
	const [occupy,size] = rm
	
	if(remChair==0 || occupy.length==size)
		return 0;
	else
	{
		let rem = size - occupy.length; // 3
		
		const r = remChair; // 8
		remChair = rem>remChair?0:remChair - rem;
		
		return rem>r?r:rem
	}	
}

var room = [
	['XXXX',4] , ['XXX',6] , ['XXXXX',8] , ['XX',5]
]

const reqChair = 8

var remChair = reqChair

res = room.map(check);


console.log(room)
console.log(reqChair)
console.log(res)
