var visitors_signs = [];
var visitors_transactions = [];

var validform;

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhoto() {
    validform = true;
    var thisimage = $(document.getElementById("person_image")).find('img').attr("src");
    if(thisimage === undefined)
        return 'You must provide picture screenshot'
    if ($("#capture_person_email").val().trim() === "") {
        return validform = 'Email should not be blank';
    }
    if (!validateEmail($("#capture_person_email").val().trim())){
        return validform = 'Email is not valid';
    }
    return validform;
}

function validateContactInfo() {
    validform = true;
    if ($("#person_name").val().trim() === "")
        validform = 'Name field should not be empty.';
    if ($("#company").val().trim() === "")
        validform = 'Company field should not be empty.';
    if ($("#phone").val().trim() === "")
        validform = 'Phone field should not be empty.';
    if($("#email").val().trim() === "")
    {
        validform = 'Email field should not be empty.';
    }
    return validform;
}



function validateVisitInfo() {
    validform = true;
    // if (document.getElementById("reason").selectedIndex === 0)
    //     validform = 'Reason should not be empty';
    if ($("#person_visiting").val().trim() === "")
        validform = 'Person visiting should not be empty';
    if ((document.getElementById("citizen_yes").checked === false) && (document.getElementById("citizen_no").checked === false))
        validform = 'Citizen visiting should not be empty';
    if ((document.getElementById("classified_yes").checked === false) && (document.getElementById("classified_no").checked === false)) {
        validform = 'Classified visiting should not be empty';
    }
    if (personnel.indexOf($("#person_visiting").val().trim()) < 0) {
        $("#person_visiting").val("");
        validform = 'Person visiting should not be empty';
    }
    return validform;
}

function styleRadios() {
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
        iOS =  /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
        if(iOS){
            // var cameras = new Array(); //create empty array to later insert available devices
            // navigator.mediaDevices.enumerateDevices() // get the available devices found in the machine
            //     .then(function(devices) {
            //         devices.forEach(function(device) {
            //             var i = 0;
            //             if(device.kind=== "videoinput"){ //filter video devices only
            //                 cameras[i]= device.deviceId; // save the camera id's in the camera array
            //                 i++;
            //             }
            //         });
            //     })

            Webcam.set({
                width: 280,
                constraints: { facingMode: { exact: "user" }  },
                height: 300,
                dest_width: 280,
                dest_height: 300,
                image_format: 'jpeg',
                jpeg_quality: 90,
                user_callback: function(data_uri) {
                    // display results in page

                    document.getElementById('person_image').innerHTML =      '<img src="'+data_uri+'"/>';
                    document.getElementById('display_photo_div').innerHTML = '<img src="'+data_uri+'"/>';
                    $('#person_image_camera').hide();
                    $( '#person_image' ).show()
                }
            });

            // Webcam.set( 'constraints', { //set the constraints and initialize camera device (0 or 1 for back and front - varies which is which depending on device)
            //     width: 1920,
            //     height: 1080,
            //
            // } );
        }

        else
        {
            Webcam.set({
                width: 280,
                height: 300,
                dest_width: 280,
                dest_height: 270,
                image_format: 'jpeg',
                jpeg_quality: 90
            });
            $('#person_image_camera').on('click', function(){
                $('#person_image_camera').hide()
                Webcam.snap( function(data_uri) {
                    // display results in page
                    document.getElementById('person_image').innerHTML = '<img src="'+data_uri+'"/>';
                    document.getElementById('display_photo_div').innerHTML = '<img src="'+data_uri+'"/>';
                } );
                $( '#person_image' ).show()
            })
        }


        Webcam.attach( '#person_image_camera' );

        $("#capture_photo").show();
    }
    else {
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
            document.getElementById("display_reason").innerHTML = $('#reason').val();
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
        } else {
            signinbtn.style.display = "inline-block";
            signoutbtn.style.display = "none";
        }
        if (window.location.href.indexOf("signin") < 0) {
            document.getElementById("summary_back_btn").style.display = "none";
        }
        document.getElementById("display_name").innerHTML = $("#person_name").val().trim();
        $("#visit_summary").show();
    }



    $("#missed_btn").click(function(e) {
        e.preventDefault();
        email = $("#capture_person_email").val().trim()
        if(email == "")
            alert("Please check your email")
        else {
            $.ajax({
                url: "/get_visitor_info.json",
                type: "post",
                data: {email: email},
                success: function (json, d) {
                    console.log(json);
                    if (json['success']) {
                        var newurl = window.location.href.slice(0, -2) + "out_missed";
                        window.history.pushState("", "", newurl);
                        $("#capture_photo").hide();
                        signinbtn.style.display = "none";
                        signoutbtn.style.display = "inline-block";
                        setupSummary();
                        person = json['data'];
                        document.getElementById('display_photo_div').innerHTML = '<img src="'+person['avatar']+'"/>';
                        document.getElementById("display_name").innerHTML = person['display_name'];
                        document.getElementById("display_company").innerHTML = person['display_company'];
                        document.getElementById("display_phone").innerHTML = person['display_phone'];
                        document.getElementById("display_email").innerHTML = person['display_email'];
                        document.getElementById("display_reason").innerHTML = person['display_reason'];
                        document.getElementById("display_personvisit").innerHTML = person['display_personvisit'];
                        document.getElementById("display_citizen").innerHTML = person['display_citizen'];
                        document.getElementById("display_classified").innerHTML = person['display_classified'];
                        document.getElementById("display_date_in").innerHTML = person['display_date_in'];
                        document.getElementById("display_time_in").innerHTML = person['display_time_in'];
                        /*****  NOTE: Hold for when real input can be read from a record
                         const monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
                         var d = new Date(Number($("#datetime_in").val()));
                         var thisvisit = monthNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
                         document.getElementById("display_date_in").innerHTML = thisvisit;
                         thisvisit = ("0" + d.getHours()).slice(-2) + ':' + ("0" + d.getMinutes()).slice(-2);
                         document.getElementById("display_time_in").innerHTML = thisvisit;
                         */
                        $("#display_date_div").show();

                        $("#time_out_div").show();
                        $("#datetime_out").prop("readOnly", false);
                    }
                    else {
                        alert(json['errors'])
                    }
                }

            })
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
        if (window.location.href.indexOf("signin") > 0) {
            var validUser = validatePhoto();
            if (validUser === true) {
                $.ajax({
                    url: "/check_visitor.json",
                    type: "post",
                    data: {email: $("#capture_person_email").val().trim(),
                    },
                    success: function(json, d){
                        if(!json['success'])
                            alert(json['message'])
                        document.getElementById("company").value = json['company']
                        document.getElementById("phone").value = json['phone']
                        document.getElementById("person_name").value = json['name']
                        document.getElementById("email").value = $("#capture_person_email").val().trim()
                        document.getElementById("citizen_yes").value = json['us_citizen']
                        document.getElementById("citizen_yes").value = !json['us_citizen']
                        $("#capture_complete_msg").hide();
                        $("#capture_photo").hide();
                        document.getElementById("company").readOnly = false;
                        document.getElementById("phone").readOnly = false;
                        document.getElementById("person_name").readOnly = false;

                        document.getElementById("email").readOnly = true;

                        $("#contact_info").show();

                    }
                })


            } else {
                $("#capture_complete_msg").html(validUser);
                $("#capture_complete_msg").show();
            }
        }
        else
        {
            $("#capture_complete_msg").hide();
            $("#capture_photo").hide();
            setupSummary();
        }
    });

    $("#capture_person_email").change(function () {
        if ($("#capture_person_email").val().trim() !== "") {
            setTimeout(function () {
                document.getElementById("person_image").src = "/images/person.jpg";
            }, 1200);
        } else {
            if (window.location.href.indexOf("signin") > 0) {
                document.getElementById("person_image").src = "/mages/click_photo.jpg";
            } else {
                document.getElementById("person_image").src = "/images/recognize_photo.jpg";
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
            $("#contact_complete_msg").html(validContact);
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
            $(document).ready(function() {
                var x = $('#person_signature_sig');
                x.jSignature();
                x.change(function(){
                    $('#person_signature').val(x.jSignature('getData'));
                });

            });
        } else {
            $("#visit_complete_msg").html(validVisit);
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

    $(document).keypress(function(e) {
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode == '13') {
            console.log('You pressed enter! - keypress');
            if($('#capture_photo').is(":visible")){
                $('#capture_next_btn').trigger('click')
            }
            else if($('#contact_info').is(":visible")){
                $('#contact_next_btn').trigger('click')
            }
            else if($('#visit_info').is(":visible")){
                $('#visit_next_btn').trigger('click')
            }
            else if($('#visit_summary').is(":visible")){
                $('#signin_btn').trigger('click')
            }
            else if($('#visitor_signature').is(":visible")){
                $('#signature_next_btn').trigger('click')
            }
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
        window.location.href = "/";
    });


    $('#person_image').on('click', function(){
        $( '#person_image' ).hide()
        $('#person_image_camera').show()
    })

    $("#signin_btn").click(function (e) {
        e.preventDefault();
        var thistime = Date.now();
        $("#datetime_in").val(thistime);
        //NOTE: Will be changed to submit form later, but for now just seed test
        updatecontact = true;

        var thissign = {
            person_id: $("#person_id").val(),
            person_image_url: $('#display_photo_div').find('img').attr('src'),
            update_contact: updatecontact,
            person_name: $("#person_name").val().trim(),
            company: $("#company").val().trim(),
            phone: $("#phone").val().trim(),
            email: $("#email").val().trim(),
            reason: $('#reason').val(),
            person_visiting: $("#person_visiting").val().trim(),
            citizen: $("input[name='citizen']:checked").val(),
            classified: $("input[name='classified']:checked").val(),
            person_signature_url: $('#person_signature').val(),
            datetime_in: $("#datetime_in").val(),
            datetime_out: $("#datetime_out").val()
        };
        $.ajax({
            url: "/create_visitor.json",
            type: "post",
            data: thissign,
            success: function(json, d){
                console.log(json);
                if(json['success'])
                    window.location.href = "/visitor_badge?visitor_id="+json["visitor"];
                else
                    alert(json['errors'])
            }
        })
    });

    $("#visitor_sign_form").submit(function (e) {
        e.preventDefault()
    })
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
            data = {email: $("#capture_person_email").val().trim(),
                datetime_out: $("#datetime_out").val()
            }

            $.ajax({
                url: "/update_visitor_visit.json",
                type: "post",
                data: data,
                success: function(json, d){
                    console.log(json);
                    if(json['success'])
                        window.location.href = "visitor_bye.html?person_name=" + document.getElementById("display_name").innerHTML + "&person_visiting=" + document.getElementById("display_personvisit").innerHTML + "&time_out=" + $("#datetime_out").val();

                    else
                        alert(json['errors'])
                }
            })
        }
    });


});