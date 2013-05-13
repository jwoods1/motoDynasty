 $(function() {
    $( "#tabs" ).tabs({
      collapsible: true
    });
  });

   $(function() {
    var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 1 );
 
      if ( val < 99 ) {
        setTimeout( progress, 100 );
      }
    }
 
    setTimeout( progress, 3000 );
  });
 
$(window).ready(
 $("#twoFifty").on("click",function(){
   alert("250 SX");
    $("Seletion").replaceWith("<label for="first">1st:</label>
                    <select name="first" id="first" class="required" data-native-menu="false" data-theme="b">
                        <option data-placeholder="true">1ST place</option>
                        <option value="villopoto">Villopoto</option>
                        <option value="reed">Reed</option>
                        <option value="dungey">Dungey</option>
                        <option value="stewart">Stewart</option>
                        <option value="barcia">Barcia</option>
                        <option value="millsaps">Millsaps</option>
                        <option value="tickle">Tickle</option>
                        <option value="canard">Canard</option>
                        <option value="short">Short</option>
                        <option value="weimer">Weimer</option>
                    </select>
                    <label for="second">2nd:</label>
                    <select name="second" id="second" class="required" data-native-menu="false" data-theme="b">
                        <option data-placeholder="true">2nd place</option>
                        <option value="villopoto">Villopoto</option>
                        <option value="reed">Reed</option>
                        <option value="dungey">Dungey</option>
                        <option value="stewart">Stewart</option>
                        <option value="barcia">Barcia</option>
                        <option value="millsaps">Millsaps</option>
                        <option value="tickle">Tickle</option>
                        <option value="canard">Canard</option>
                        <option value="short">Short</option>
                        <option value="weimer">Weimer</option>
                    </select>
                    <label for="thrird">3rd:</label>
                    <select name="thrird" id="thrird" class="required" data-native-menu="false" data-theme="b">
                        <option data-placeholder="true">3rd place</option>
                        <option value="villopoto">Villopoto</option>
                        <option value="reed">Reed</option>
                        <option value="dungey">Dungey</option>
                        <option value="stewart">Stewart</option>
                        <option value="barcia">Barcia</option>
                        <option value="millsaps">Millsaps</option>
                        <option value="tickle">Tickle</option>
                        <option value="canard">Canard</option>
                        <option value="short">Short</option>
                        <option value="weimer">Weimer</option>
                    </select>
                    <label for="fourth">4th:</label>
                    <select name="fourth" id="fourth" class="required" data-native-menu="false" data-theme="b">
                        <option data-placeholder="true">4th place</option>
                        <option value="villopoto">Villopoto</option>
                        <option value="reed">Reed</option>
                        <option value="dungey">Dungey</option>
                        <option value="stewart">Stewart</option>
                        <option value="barcia">Barcia</option>
                        <option value="millsaps">Millsaps</option>
                        <option value="tickle">Tickle</option>
                        <option value="canard">Canard</option>
                        <option value="short">Short</option>
                        <option value="weimer">Weimer</option>
                    </select>
                    <label for="fifth">5th:</label>
                    <select name="fifth" id="fifth" class="required" data-native-menu="false" data-theme="b">
                        <option data-placeholder="true">5th place</option>
                        <option value="villopoto">Villopoto</option>
                        <option value="reed">Reed</option>
                        <option value="dungey">Dungey</option>
                        <option value="stewart">Stewart</option>
                        <option value="barcia">Barcia</option>
                        <option value="millsaps">Millsaps</option>
                        <option value="tickle">Tickle</option>
                        <option value="canard">Canard</option>
                        <option value="short">Short</option>
                        <option value="weimer">Weimer</option>
                    </select>
                    <label for="sixth">6th:</label>
                    <select name="sixth" id="sixth" class="required" data-native-menu="false" data-theme="b">
                        <option data-placeholder="true">6th place</option>
                        <option value="villopoto">Villopoto</option>
                        <option value="reed">Reed</option>
                        <option value="dungey">Dungey</option>
                        <option value="stewart">Stewart</option>
                        <option value="barcia">Barcia</option>
                        <option value="millsaps">Millsaps</option>
                        <option value="tickle">Tickle</option>
                        <option value="canard">Canard</option>
                        <option value="short">Short</option>
                        <option value="weimer">Weimer</option>
                    </select>
                    <label for="seventh">7th:</label>
                    <select name="seventh" id="seventh" class="required" data-native-menu="false" data-theme="b">
                        <option data-placeholder="true">7th place</option>
                        <option value="villopoto">Villopoto</option>
                        <option value="reed">Reed</option>
                        <option value="dungey">Dungey</option>
                        <option value="stewart">Stewart</option>
                        <option value="barcia">Barcia</option>
                        <option value="millsaps">Millsaps</option>
                        <option value="tickle">Tickle</option>
                        <option value="canard">Canard</option>
                        <option value="short">Short</option>
                        <option value="weimer">Weimer</option>
                    </select>
                    <label for="eighth">8th:</label>
                    <select name="eighth" id="eighth" class="required" data-native-menu="false" data-theme="b">
                        <option data-placeholder="true">8th place</option>
                        <option value="villopoto">Villopoto</option>
                        <option value="reed">Reed</option>
                        <option value="dungey">Dungey</option>
                        <option value="stewart">Stewart</option>
                        <option value="barcia">Barcia</option>
                        <option value="millsaps">Millsaps</option>
                        <option value="tickle">Tickle</option>
                        <option value="canard">Canard</option>
                        <option value="short">Short</option>
                        <option value="weimer">Weimer</option>
                    </select>
                    <label for="nineth">9th:</label>
                    <select name="nineth" id="nineth" class="required" data-native-menu="false" data-theme="b">
                        <option data-placeholder="true">9th place</option>
                        <option value="villopoto">Villopoto</option>
                        <option value="reed">Reed</option>
                        <option value="dungey">Dungey</option>
                        <option value="stewart">Stewart</option>
                        <option value="barcia">Barcia</option>
                        <option value="millsaps">Millsaps</option>
                        <option value="tickle">Tickle</option>
                        <option value="canard">Canard</option>
                        <option value="short">Short</option>
                        <option value="weimer">Weimer</option>
                    </select>
                    <label for="tenth">10th:</label>
                    <select name="tenth" id="tenth" class="required" data-native-menu="false" data-theme="b">
                        <option data-placeholder="true">10th place</option>
                       
                    </select>");

 });

);


