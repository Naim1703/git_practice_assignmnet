let input = 3;

let count = 0;
for (let i=1; i<=input; i++)
  {
    if (input%i==0)
    {
      count=count+1;
    }
  }
if (count==2)
{
  console.log("prime number");
}
else 
{
  console.log("not a prime number");
}