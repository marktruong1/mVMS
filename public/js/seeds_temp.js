
var visitors_signs = [
    {visitor_sign_id: "0001", person_id: "", person_image_url: "images/1527685900000_robert_johnson.jpg", first_visit: "yes", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1527685900000_robert_johnson.jpg", datetime_in: "1527685900000", datetime_out: "1527699900000"},

    {visitor_sign_id: "0012", person_id: "0002", person_image_url: "images/1527688800000_jane_smith.jpg", first_visit: "no", update_contact: false, person_name: "Jane Smith", company: "HealthFit", phone: "444-333-0000", email: "jane.smith@healthfit.org", reason: "1", person_visiting: "Claude Hines", citizen: "yes", classified: "no", person_signature_url: "signatures/1527688800000_jane_smith.jpg", datetime_in: "1527688800000", datetime_out: "1527690590000"},

    {visitor_sign_id: "0020", person_id: "0003", person_image_url: "images/1527690250000_luke_richards.jpg", first_visit: "no", update_contact: true, person_name: "Luke Richards", company: "Go Veterans", phone: "233-444-7700", email: "luke.richards@goveterans.org", reason: "2", person_visiting: "Page McNall", citizen: "yes", classified: "no", person_signature_url: "signatures/1527690250000_luke_richards.jpg", datetime_in: "1527690250000", datetime_out: ""},

    {visitor_sign_id: "0031", person_id: "0004", person_image_url: "images/1527697250000_mark_matthews.jpg", first_visit: "no", update_contact: false, person_name: "Mark Matthews", company: "Go Veterans", phone: "544-377-9870", email: "mark.matthews@goveterans.org", reason: "1", person_visiting: "Frank Tucker", citizen: "yes", classified: "no", person_signature_url: "signatures/1527697250000_mark_matthews.jpg", datetime_in: "1527697250000", datetime_out: "1527704950000"},
    {visitor_sign_id: "0032", person_id: "0004", person_image_url: "images/1527697250000_mark_matthews.jpg", first_visit: "no", update_contact: false, person_name: "Mark Matthews", company: "Go Veterans", phone: "544-377-9870", email: "mark.matthews@goveterans.org", reason: "1", person_visiting: "Frank Tucker", citizen: "yes", classified: "no", person_signature_url: "signatures/1527697250000_mark_matthews.jpg", datetime_in: "1527773490000", datetime_out: ""},
];


var visitors_transactions = [
    {trans_id: "0001", visitor_sign_id: "0001", person_id: "", status: "00000", recorded_by: "", datetime: ""},
    {trans_id: "0002", visitor_sign_id: "0001", person_id: "0001", status: "01000", recorded_by: "Mark Jones", datetime: "1527685980000"},
    {trans_id: "0003", visitor_sign_id: "0001", person_id: "0001", status: "01100", recorded_by: "Mark Jones", datetime: "1527686320000"},
    {trans_id: "0004", visitor_sign_id: "0001", person_id: "0001", status: "01110", recorded_by: "", datetime: ""},
    {trans_id: "0005", visitor_sign_id: "0001", person_id: "0001", status: "01111", recorded_by: "Mark Jones", datetime: "1527700305000"},

    {trans_id: "0006", visitor_sign_id: "0012", person_id: "0002", status: "10000", recorded_by: "", datetime: ""},
    {trans_id: "0007", visitor_sign_id: "0012", person_id: "0002", status: "10010", recorded_by: "", datetime: ""},
    {trans_id: "0008", visitor_sign_id: "0012", person_id: "0002", status: "10111", recorded_by: "Mark Jones", datetime: "1527691000000"},

    {trans_id: "0009", visitor_sign_id: "0020", person_id: "0003", status: "20000", recorded_by: "", datetime: ""},
    {trans_id: "0010", visitor_sign_id: "0020", person_id: "0003", status: "21000", recorded_by: "Mark Jones", datetime: "1527690450000"},
    {trans_id: "0011", visitor_sign_id: "0020", person_id: "0003", status: "21100", recorded_by: "Mark Jones", datetime: "1527690950000"},
    {trans_id: "0012", visitor_sign_id: "0020", person_id: "0003", status: "21102", recorded_by: "", datetime: ""},
    {trans_id: "0013", visitor_sign_id: "0020", person_id: "0003", status: "22222", recorded_by: "Mark Jones", datetime: "1527698450000"},

    {trans_id: "0014", visitor_sign_id: "0031", person_id: "0004", status: "10000", recorded_by: "", datetime: ""},
    {trans_id: "0015", visitor_sign_id: "0031", person_id: "0004", status: "10100", recorded_by: "Mark Jones", datetime: "1527697550000"},
    {trans_id: "0016", visitor_sign_id: "0031", person_id: "0004", status: "10102", recorded_by: "", datetime: ""},
    {trans_id: "0017", visitor_sign_id: "0031", person_id: "0004", status: "12222", recorded_by: "Mark Jones", datetime: "1527773290000"},

    {trans_id: "0018", visitor_sign_id: "0032", person_id: "0004", status: "10000", recorded_by: "", datetime: ""},
    {trans_id: "0019", visitor_sign_id: "0032", person_id: "0004", status: "10100", recorded_by: "Mark Jones", datetime: "1527773890000"},
];


var thisvisitortrans = [
    {thisvisitortransid: "0001", person_id: "0001", signin_ids: ["0001"]},
    {thisvisitortransid: "0002", person_id: "0002", signin_ids: ["0012"]},
    {thisvisitortransid: "0003", person_id: "0003", signin_ids: ["0020"]},
];
