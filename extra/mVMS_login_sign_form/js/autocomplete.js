    var personnel = ["Frank Tucker", "Claude Hines", "Page McNall"];
    var companies = ["Mintonco", "Abco", "HealthFit", "Envirohealth", "Healthspin", "Healthy Nut", "Go Veterans", "Spartanco"]; 
    //NOT SURE IF THESE COMPANIES ALLOWED ONLY or just flag when company entry is not in array so might include

    $( "#menu" ).menu();


    // Hover states on the static widgets
    $( "#dialog-link, #icons li" ).hover(
      function() {
        $( this ).addClass( "ui-state-hover" );
      },
      function() {
        $( this ).removeClass( "ui-state-hover" );
      }
    );
