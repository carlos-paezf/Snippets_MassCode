Returns the last element in an array.

<?php
function last($items)
{
  return end($items);
}

last([1, 2, 3]); // 3
?>