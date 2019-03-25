  var visitors_signs = [];
  var visitors_transactions = [];

  var validform;

  function validatePhoto() {
    validform = true;
    var thisimage = document.getElementById("person_image").src;
    if (($("#capture_person_name").val().trim() === "") || (thisimage.indexOf("images/click_photo.jpg") > -1) || (thisimage.indexOf("images/recognize_photo.jpg") > -1)) {
      validform = false;
    }
    if ((window.location.href.indexOf("signin") > 0) && (document.getElementById("first_visit_no").checked === false) && (document.getElementById("first_visit_yes").checked === false)) {
      validform = false;
    }
    return validform;
  }

  function validateContactInfo() {
    validform = true;
    if (($("#person_name").val().trim() === "") || ($("#company").val().trim() === "") || ($("#phone").val().trim() === "") || ($("#email").val().trim() === "")) {
      validform = false;
    }
    return validform;
  }



  function validateVisitInfo() {
    validform = true;
    if ((document.getElementById("reason").selectedIndex === 0) || ($("#person_visiting").val().trim() === "") || ((document.getElementById("citizen_yes").checked === false) && (document.getElementById("citizen_no").checked === false)) || ((document.getElementById("classified_yes").checked === false) && (document.getElementById("classified_no").checked === false))) {
      validform = false;
    }
    if (personnel.indexOf($("#person_visiting").val().trim()) < 0) {
      $("#person_visiting").val("");
      validform = false;
    }
    return validform;
  }

  function styleRadios() {
    if (document.getElementById("first_visit_yes").checked === true) {
      document.getElementById("first_visit_yes_label").style.backgroundColor = "#5bc0de";
    } else {
      if (document.getElementById("first_visit_no").checked === true) {
        document.getElementById("first_visit_no_label").style.backgroundColor = "#5bc0de";
      }
    }
    if (document.getElementById("update_contact").checked === true) {
      document.getElementById("update_contact_label").style.backgroundColor = "#5bc0de";
    } else {
      document.getElementById("update_contact_label").style.backgroundColor = "#dddddd";
    }
    if (document.getElementById("citizen_yes").checked === true) {
      document.getElementById("citizen_yes_label").style.backgroundColor = "#5bc0de";
    } else {
      if (document.getElementById("citizen_no").checked === true) {
        document.getElementById("citizen_no_label").style.backgroundColor = "#5bc0de";
      }
    }
    if (document.getElementById("classified_yes").checked === true) {
      document.getElementById("classified_yes_label").style.backgroundColor = "#5bc0de";        
    } else {
      if (document.getElementById("classified_no").checked === true) {
        document.getElementById("classified_no_label").style.backgroundColor = "#5bc0de";        
      }
    }
  }

  function validateSignature() {
    validform = true;
    if ((window.location.href.indexOf("signin") > 0) && ($("#person_signature").val().trim() === "")) {
      validform = false;
    }
    return validform;
  }


  $(document).ready(function () {
    $("#capture_photo").hide();
    $("#contact_info").hide();
    $("#visit_info").hide();
    $("#visitor_signature").hide();
    $("#visit_summary").hide();

    var signinbtn = document.getElementById("signin_btn");
    var signoutbtn = document.getElementById("signout_btn");
    var missedbtn = document.getElementById("missed_btn");

    if (window.location.href.indexOf("signin") > 0) {
      $("#signin_capture_msg").show();
      $("#signin_check_visit").show();
      $("#signout_capture_msg").hide();
      signoutbtn.style.display = "none";
      $("#capture_photo").show();
    } else {
      document.getElementById("person_image").src = "images/recognize_photo.jpg";
      $("#signin_capture_msg").hide();
      $("#signin_check_visit").hide();
      $("#signout_capture_msg").show();
      missedbtn.style.display = "none";
      signinbtn.style.display = "none";
      $("#capture_photo").show();
    }

    function setupSummary() {
        if (window.location.href.indexOf("signin") > 0) {
          document.getElementById("display_company").innerHTML = $("#company").val().trim();
          document.getElementById("display_phone").innerHTML = $("#phone").val().trim();
          document.getElementById("display_email").innerHTML = $("#email").val().trim();
          var j = document.getElementById("reason").selectedIndex;
          document.getElementById("display_reason").innerHTML = document.getElementsByTagName("option")[j].value;
          document.getElementById("display_personvisit").innerHTML = $("#person_visiting").val().trim();
          if (document.getElementById("citizen_yes").checked === true) {
            document.getElementById("display_citizen").innerHTML = "yes";
          } else {
            document.getElementById("display_citizen").innerHTML = "no";
          }
          if (document.getElementById("classified_yes").checked === true) {
            document.getElementById("display_classified").innerHTML = "yes";
          } else {
            document.getElementById("display_classified").innerHTML = "no";
          }
        } else {
          document.getElementById("display_company").innerHTML = "Company Name";
          document.getElementById("display_phone").innerHTML = "000-000-0000";
          document.getElementById("display_email").innerHTML = "person@company.com";
          document.getElementById("display_reason").innerHTML = "reason reason reason";
          document.getElementById("display_personvisit").innerHTML = "John Doe";
          document.getElementById("display_citizen").innerHTML = "yes";
          document.getElementById("display_classified").innerHTML = "no";
          document.getElementById("display_date_in").innerHTML = "Apr. 25, 2018";
          document.getElementById("display_time_in").innerHTML = "09:30";
/*****  NOTE: Hold for when real input can be read from a record  
        const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
        var d = new Date(Number($("#datetime_in").val()));
        var thisvisit = monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
        document.getElementById("display_date_in").innerHTML = thisvisit;
        thisvisit = ("0" + d.getHours()).slice(-2) + ':' + ("0" + d.getMinutes()).slice(-2);
        document.getElementById("display_time_in").innerHTML = thisvisit;
*/
          $("#display_date_div").show();
          if (window.location.href.indexOf("missed") > 0) {

            $("#time_out_div").show();
            $("#datetime_out").prop("readOnly", false);
          } else {
            var thistime = Date.now();
            $("#datetime_out").val(thistime);
          }         
        }
        if (window.location.href.indexOf("missed") > 0) {
          $("#missed_signout_msg").show();
          $("#time_out_div").show();
          $("#datetime_out").prop("readOnly", false);
        } else {
          var thistime = Date.now();
          $("#datetime_out").val(thistime);          
        }
        if (window.location.href.indexOf("signout") > 0) {
          signinbtn.style.display = "none";
          signoutbtn.style.display = "inline-block";
          $("#display_date_div").show();
        } else {
          signinbtn.style.display = "inline-block";
          signoutbtn.style.display = "none";
        }
        if (window.location.href.indexOf("signin") < 0) {
          document.getElementById("summary_back_btn").style.display = "none";
        }
        document.getElementById("display_name").innerHTML = $("#capture_person_name").val().trim();
        $("#visit_summary").show();
    }



    $("#missed_btn").click(function(e) {
      e.preventDefault();
      var newurl = window.location.href.slice(0,-2) + "out_missed";
      window.history.pushState("", "", newurl);
      $("#capture_photo").hide();
      setupSummary();
    });



    $("#photo_div").click(function() {
      if (window.location.href.indexOf("signin") > 0) {
        var thisimage = document.getElementById("person_image").src;
        if (thisimage.indexOf("images/click_photo.jpg") > -1) {
          document.getElementById("person_image").src = "images/person.jpg";
        } else {
          alert("New Photo Capture!");
        }
      }
    });
    $("#visitor_sign_form input[name='first_visit']").click(function () {
      if (document.getElementById("first_visit_yes").checked === true) {
        document.getElementById("first_visit_yes_label").style.backgroundColor = "#5bc0de";
        document.getElementById("first_visit_no_label").style.backgroundColor = "#dddddd";
        document.getElementById("update_contact").checked = false;
        document.getElementById("update_contact_label").style.backgroundColor = "#dddddd";
        $("#update_contact_info_div").hide();
      } else {
        document.getElementById("first_visit_yes_label").style.backgroundColor = "#dddddd";
        document.getElementById("first_visit_no_label").style.backgroundColor = "#5bc0de";
        $("#update_contact_info_div").show();
      }
    });
    $("#visitor_sign_form #update_contact").click(function () {
      if (document.getElementById("update_contact").checked === true) {
        document.getElementById("update_contact_label").style.backgroundColor = "#5bc0de";
      } else {
        document.getElementById("update_contact_label").style.backgroundColor = "#dddddd";
      }
    });
    $("#capture_next_btn").click(function (e) {
      e.preventDefault();
      var validUser = validatePhoto();
      if (validUser === true) {
        $("#capture_complete_msg").hide();
        $("#capture_photo").hide();
        if (window.location.href.indexOf("signin") > 0) {
        /*
          if (document.getElementById("first_visit_no").checked === true) {
            alert('Returning visitor - prefill most form elements!');            
          } else {
            alert('Create New Visitor!');
          }
        */
          $("#person_name").val($("#capture_person_name").val().trim());
          if ((document.getElementById("first_visit_no").checked === true) && (document.getElementById("update_contact").checked === false)) {
            document.getElementById("company").readOnly = true;
            document.getElementById("phone").readOnly = true;
            document.getElementById("email").readOnly = true;
          } else {
            document.getElementById("company").readOnly = false;
            document.getElementById("phone").readOnly = false;
            document.getElementById("email").readOnly = false;
          }
          $("#contact_info").show();
        } else {
          setupSummary();
        }
      } else {
        $("#capture_complete_msg").show();
      }
    });
    $("#capture_person_name").change(function () {
      if ($("#capture_person_name").val().trim() !== "") {
        setTimeout(function () {
          document.getElementById("person_image").src = "images/person.jpg";
        }, 1200);
      } else {
        if (window.location.href.indexOf("signin") > 0) {
          document.getElementById("person_image").src = "images/click_photo.jpg";
        } else {
          document.getElementById("person_image").src = "images/recognize_photo.jpg";
        }       
      }
    });


    $("#contact_back_btn").click(function(e) {
      e.preventDefault();
      $("#contact_info").hide();
      styleRadios();
      $("#capture_photo").show();
    });
    $("#contact_cancel_btn").click(function (e) {
      e.preventDefault();
      alert('Log event that visitor canceled on Sign In - Contact Information screen');
      window.location.href = "visitors.html";
    });
    $("#contact_next_btn").click(function (e) {
      e.preventDefault();
      var validContact = validateContactInfo();
      if (validContact === true) {
        $("#contact_complete_msg").hide();
        $("#contact_info").hide();
        $("#visit_info").show();
        styleRadios();
      } else {
        $("#contact_complete_msg").show();
      }
    });


    $("#visitor_sign_form input[name='citizen']").click(function () {
      if (document.getElementById("citizen_yes").checked === true) {
        document.getElementById("citizen_yes_label").style.backgroundColor = "#5bc0de";
        document.getElementById("citizen_no_label").style.backgroundColor = "#dddddd";
      } else {
        document.getElementById("citizen_yes_label").style.backgroundColor = "#dddddd";
        document.getElementById("citizen_no_label").style.backgroundColor = "#5bc0de";
      }
    });
    $("#visitor_sign_form input[name='classified']").click(function () {
      if (document.getElementById("classified_yes").checked === true) {
        document.getElementById("classified_yes_label").style.backgroundColor = "#5bc0de";
        document.getElementById("classified_no_label").style.backgroundColor = "#dddddd";
      } else {
        document.getElementById("classified_yes_label").style.backgroundColor = "#dddddd";
        document.getElementById("classified_no_label").style.backgroundColor = "#5bc0de";
      }
    });
    $("#visit_back_btn").click(function (e) {
      e.preventDefault();
      $("#visit_complete_msg").hide();
      $("#visit_info").hide();
      $("#contact_info").show();
    });
    $("#visit_cancel_btn").click(function (e) {
      e.preventDefault();
      alert('Log event that visitor canceled on Sign In - Visit Information screen');
      window.location.href = "visitors.html";
    });
    $("#visit_next_btn").click(function (e) {
      e.preventDefault();
      var validVisit = validateVisitInfo();
      if (validVisit === true) {
        $("#visit_complete_msg").hide();
        $("#visit_info").hide();
        $("#visitor_signature").show();
      } else {
        $("#visit_complete_msg").show();
      }
    });

    $("#signature_back_btn").click(function (e) {
      e.preventDefault();
      $("#signature_complete_msg").hide();
      $("#visitor_signature").hide();
      $("#visit_info").show();
    });
    $("#signature_next_btn").click(function (e) {
      e.preventDefault();
      var validUser = validateSignature();
      if (validUser === true) {
        $("#signature_complete_msg").hide();
        $("#visitor_signature").hide();
        setupSummary();
      } else {
        $("#signature_complete_msg").show();        
      }
    });


    $("#summary_back_btn").click(function (e) {
      e.preventDefault();
      if (window.location.href.indexOf("signin") > 0) {
        $("#visit_summary").hide();
        $("#visitor_signature").show();
      }
    });


    $("#capture_cancel_btn, #signature_cancel_btn, #summary_cancel_btn").click(function (e) {
      e.preventDefault();
      var thisscreen, thiscancel = this.id.slice(0,-11);
      if (window.location.href.indexOf("signin") > 0) {
        thisprocess = "Sign In";
      } else if (window.location.href.indexOf("missed") > 0) {
        thisprocess = "Missed Sign Out";
      } else {
        thisprocess = "Sign Out";        
      }
      if (thiscancel === "capture") {
        thisscreen = "Photo Capture";
      } else if (thiscancel === "signature") {
        thisscreen = "Signature";
      } else if (thiscancel === "summary") {
        thisscreen = "Visit Summary";
      } else {
        thisscreen = "unsure";
      }
      alert('Log cancel event on ' + thisprocess + ' - ' + thisscreen + ' screen!');
      window.location.href = "visitors.html";
    });


    $("#signin_btn").click(function (e) {
      e.preventDefault();
      var thistime = Date.now();
      $("#datetime_in").val(thistime);
      //NOTE: Will be changed to submit form later, but for now just seed test
      var i, j, signin_status;
      if (visitors_signs.length > 0) {
        i = Number(visitors_signs[visitors_signs.length - 1].visitor_sign_id) + 1;
      } else {
        i = "0000";
      }
      var firstvisit = $("input[name='first_visit']:checked").val();
      if (document.getElementById("update_contact").checked === true) {
        updatecontact = true;
      } else {
        updatecontact = false;
      }
      var thissign = {visitor_sign_id: i, person_id: $("#person_id").val(), person_image_url: "images/person.jpg", first_visit: firstvisit, update_contact: updatecontact, person_name: $("#person_name").val().trim(), company: $("#company").val().trim(), phone: $("#phone").val().trim(), email: $("#email").val().trim(), reason: "2", person_visiting: $("#person_visiting").val().trim(), citizen: $("input[name='citizen']:checked").val(), classified: $("input[name='classified']:checked").val(), person_signature_url: "signatures/signature.jpg", datetime_in: $("#datetime_in").val(), datetime_out: $("#datetime_out").val()};
      visitors_signs.push(thissign);
    //  alert(visitors_signs[visitors_signs.length - 1].visitor_sign_id + "; " + visitors_signs[visitors_signs.length - 1].person_name + "; " + visitors_signs[visitors_signs.length - 1].first_visit + "; " + visitors_signs[visitors_signs.length - 1].update_contact + "; " + visitors_signs[visitors_signs.length - 1].company + "; " + visitors_signs[visitors_signs.length - 1].phone + "; " + visitors_signs[visitors_signs.length - 1].email + "; " + visitors_signs[visitors_signs.length - 1].person_visiting + "; " + visitors_signs[visitors_signs.length - 1].citizen + "; " + visitors_signs[visitors_signs.length - 1].classified + "; " + visitors_signs[visitors_signs.length - 1].datetime_in);
      if (visitors_transactions.length > 0) {
        j = Number(visitors_transactions[visitors_transactions.length - 1].trans_id) + 1;
      } else {
        j = "0000";
      }
      if (firstvisit === "yes") {
        signin_status = "00000";
      } else if (updatecontact === true) {
        signin_status = "20000";
      } else {
        signin_status = "10000";
      }
      var thistrans = {trans_id: j, visitor_sign_id: i, person_id: $("#person_id").val(), status: signin_status, recorded_by: "", datetime: ""};
      visitors_transactions.push(thistrans);
      localStorage.setItem("visitors_signs", visitors_signs);
      localStorage.setItem("visitors_transactions", visitors_transactions);
    //  alert(visitors_transactions[visitors_transactions.length - 1].trans_id + "; " + visitors_transactions[visitors_transactions.length - 1].person_id + "; " + visitors_transactions[visitors_transactions.length - 1].status);
      window.location.href = "visitor_badge.html?person_name=" + $("#person_name").val().trim() + "&person_visiting=" + $("#person_visiting").val().trim() + "&time_in=" + $("#datetime_in").val();
    });
    $("#signout_btn").click(function (e) {
      e.preventDefault();
      var thistime, validTimeout = true;
      if (window.location.href.indexOf("missed") < 0) {
        thistime = Date.now();
      } else {
        if ($("#datetime_out").val() !== "") {
          thistime = $("#datetime_out").val();
          thistime = Date.parse(thistime);
        } else {
          validTimeout = false;
          alert("Must input Time Out!");
        }
      }
      if (validTimeout === true) {
        $("#datetime_out").val(thistime);
        alert('Visitor Signed Out; Make Badge Inactive');
        window.location.href = "visitor_bye.html?person_name=" + document.getElementById("display_name").innerHTML + "&person_visiting=" + document.getElementById("display_personvisit").innerHTML + "&time_out=" + $("#datetime_out").val();
      }
    });

  });