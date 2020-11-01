Write a function that takes an integer as input, and returns the 
number of bits that are equal to one in the binary representation 
of that number. You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so 
the function should return 5 in this case

<?php

function countBits1($n) 
{
  $binary = decbin($n);
  return preg_match_all('/([1])/', $binary);
}


function countBits2($n) 
{
  $count = 0; 
  while ($n) { 
    $count += $n & 1; 
	  $n >>= 1; 
  }
  return $count; 
}


function countBits3($n) 
{
  return substr_count(decbin($n), 1);
}