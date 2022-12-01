let str = "abdba"

let bag = "";
for (let i=str.length-1; i>=0; i--)
  {
    bag=bag+str[i];
  }
if (str==bag)
{
  console.log("string is palindrome");
}
else
{
  console.log(" string is not a palindrome");
}
