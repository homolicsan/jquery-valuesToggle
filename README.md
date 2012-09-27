[jQuery Form Plugin]


 Samples:
<form>
    <input type="text" class="mem" value="text to remember" >
    <textarea class="mem">text to remember</textarea>
</form>
<script type="text/javascript">
 $('form').valuesToggle();
 </script>

 <form>
    <input type="text" class="custom" value="text to remember" >
    <textarea class="custom">text to remember</textarea>
</form>

<script type="text/javascript">
 $('form').valuesToggle({
    selector: '.custom'
});
 </script>