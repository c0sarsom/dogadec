function maskify(cc) {
    let output = '';
    if (cc.lenght <= 4){ return cc; }
    for (let index = 0; index < cc.length - 4; index++) {
      output += "#";
  }
    output += cc.substr(cc.length-4,cc.length)
    return output
  }
  

function isTriangle(a,b,c)
{
  let max = Math.max(a, b, c);
  let sum = a + b + c;
  
  return sum - max > max;
}

function timeConvert(num) 
{ 
    if (num <= 0)
      {
        return "00:00"
      }
    const min = Math.floor(num/60);
    const sec = num % 60;
    const resultMinute = (min < 10) ? "0" + min : min;
    const resultSecound = (sec < 10) ? "0" + sec : sec;
    
    return `${resultMinute}:${resultSecound}`
}

function createArrayOfTiers(num) 
{
    let string = "" + num
    const array = string.split('')
    const vissz = []
    vissz[0] = array[0]
    for(let i = 1; i < array.length; i++)
      {
        vissz[i] = vissz[i-1] + array[i]
      }
    return vissz
}
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    array.forEach(element => {
        
    });
}