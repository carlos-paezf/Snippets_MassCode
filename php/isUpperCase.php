Returns true if the given string is upper case, false otherwise.

<?php
function isUpperCase($string)
{
  return $string === strtoupper($string);
}

isUpperCase('MORNING SHOWS THE DAY!'); // true
isUpperCase('qUick Fox'); // false
?>