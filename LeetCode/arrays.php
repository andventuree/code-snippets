<?php
// Learning PHP! Comments are my observations

function removeDuplicates($nums) {
  $uniqueLength = 0;

  for( $i = 0; $i < count($nums); $i++) {
    $currentNum = $num[$i];
    if ($nums[$uniqueLength] !== $currentNum) { //if not the same, its unique, move unique index
      $uniqueLength++;
      // $a = $num[$i];
      // $b = $num[$umiqueLength];
      // $num[$umiqueLength] = $a;
      // $num[$i] = $b;
      swap($i, $uniqueLength, $nums);
    }
  }

  // var_dump($nums); // Doesn't need echo
  print_r($nums);

  return $uniqueLength + 1;
}

function swap($i, $j, &$arr) { //notice the &. Need to imply pass by reference
  $temp = $arr[$i];
  $arr[$i] = $arr[$j];
  $arr[$j] = $temp;
}

// echo removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

function rotate($nums, $k) {
  while ($k > 0) {
    $lastVal = array_pop($nums);

    // Docs - array_unshift ( array &$array [, mixed $... ] ) : int // note PBR & in declaration
    array_unshift($nums, $lastVal);
    $k--;
  }
  print_r($nums);
}

// echo rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]

function maxProfit(array $prices) : string {
  $profit = 0;
  echo isset($profit);
  // print_r($prices[-1]); //undefined so it doesn't show anything
  for ($i = 1; $i < count($prices); $i++) {
    //php does not have an undefined data type
    if ($prices[$i] > $prices[$i - 1]) { //in php, if (7 > empty_value) is technically true, wouldn't be for JS
      $profit += ($prices[$i] - $prices[$i - 1]);
      echo $profit;
    }
  }
  return 'profit ' . $profit;
}

echo maxProfit([7, 1, 5, 3, 6, 4]); //7

?>
