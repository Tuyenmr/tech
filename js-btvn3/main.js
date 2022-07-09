function isPrime(number){
    if(number>2)
    {
        for(let i=2;i<number;i++)
        {
            if(number %i==0 ) return false;
            else 
            return true;
        }
        
    }
    else
    return false;
}
console.log(isPrime(2))
console.log(isPrime(3))
//2
function sumOfPrimes(a, b){
    let sum=0;
    for(let i=a;i<=b;i++)
    {
        if(isPrime(i))
        {
            sum=sum+i;
        }
    }
    return sum;
}
console.log(sumOfPrimes(2,13))

// 3
function fibonacci(n){
   let a=0;
   let b=1;
   let sumtemp;
   for(let i=0;i<n;i++)
   {
    if(i==1)
    {
        sumtemp==i;
    }
    else{
        sumtemp=a+b;
    a=b;
    b=sumtemp;
    }
    console.log(sumtemp);
   }
  
}

fibonacci(8)

//4 
function isPalindrome(n)
{
    let kq=0;
    let temp;
        temp= n%10;
        n=(n-temp)/10;
        kq=kq*10+temp;
    if(kq==n){
        return true;
    }
    else return false;
    
}

console.log(isPalindrome(122))

//5
function sumOfPalindrome(n)
{
    let sumtemp=0;
    for(let i=1;i<=n;i++)
    {
        if(isPalindrome){
            sumtemp= sumtemp+i;
        }
    }
    return sumtemp;
}
console.log(sumOfPalindrome(1111))
//6
function reverseNumber(n) {
    let kq = 0;
    let temp;
      while(n>0)
      {
        temp = n % 10;
      n = (n - temp) / 10;
      kq = kq * 10 + temp;
      }
    return kq;
  }
  console.log(reverseNumber(123))
  