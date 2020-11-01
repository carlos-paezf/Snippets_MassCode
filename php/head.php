Returns the head of a list.

<?php
function head($items)
{
  return reset($items);
}

head([1, 2, 3]); // 1
?>