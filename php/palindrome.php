Returns true if the given string is a palindrome, false otherwise.

<?php
function palindrome($string)
{
  return strrev($string) === (string) $string;
}

palindrome('racecar'); // true
palindrome(2221222); // true
?>