<?

 function g($var) {
     echo '<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.0.0/styles/default.min.css">
                <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.0.0/highlight.min.js"></script>
                <script>hljs.initHighlightingOnLoad();</script>';
     echo '<pre><code class="php" style="border: 1px solid black;">';
     if (is_array($var) || is_object($var)) {
//         echo gettype($var).'<br>';
         print_r($var);
     } else {
         echo $var;
     }
     echo '</code></pre>';
 }
 