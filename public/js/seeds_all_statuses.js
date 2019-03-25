
//TRANSACTION STATUS CODES
/*
00000  = first time visitor - Signed In:    visitor not created    sign-in not recorded   sign-out not recorded
01000  = first time visitor - Signed In:    visitor created        sign-in not recorded   sign-out not recorded
01100  = first time visitor - Signed In:    visitor created        sign-in recorded       sign-out not recorded
01110  = first time visitor - Signed Out:   visitor created        sign-in recorded       sign-out not recorded
01111  = first time visitor - Signed Out:   visitor created        sign-in recorded       sign-out recorded  (All transactions saved; not missed sign out)
00010  = first time visitor - Signed Out:   visitor not created    sign-in not recorded   sign-out not recorded
01010  = first time visitor - Signed Out:   visitor created        sign-in not recorded   sign-out not recorded
00002, 01002, 01102 = first time visitor - Missed Sign Out (and possibly other transactions not recorded)
02222 =  first time visitor - All transactions saved after missed sign out

10000  = return visitor - Signed In:    sign-in not recorded   sign-out not recorded
10100  = return visitor - Signed In:    sign-in recorded       sign-out not recorded
10110  = return visitor - Signed Out:   sign-in recorded       sign-out not recorded
10111  = return visitor - Signed Out:   sign-in recorded       sign-out recorded  (All transactions saved; not missed sign out)
10010  = return visitor - Signed Out:   sign-in not recorded   sign-out not recorded
10002, 10102 = return visitor - Missed Sign Out (and possibly other transactions not recorded)
12222 =  return visitor - All transactions saved after missed sign out

20000  = update visitor - Signed In:    update visitor not recorded     sign-in not recorded     sign-out not recorded
21000  = update visitor - Signed In:    update visitor recorded         sign-in not recorded     sign-out not recorded
21100  = update visitor - Signed In:    update visitor recorded         sign-in recorded         sign-out not recorded
21110  = update visitor - Signed Out:   update visitor recorded         sign-in recorded         sign-out not recorded
21111  = update visitor - Signed Out:   update visitor recorded         sign-in recorded         sign-out recorded  (All transactions saved; not missed sign out)
20010  = update visitor - Signed Out:   update visitor not recorded     sign-in not recorded     sign-out not recorded
21010  = update visitor - Signed Out:   update visitor recorded         sign-in not recorded     sign-out not recorded
20002, 21002, 21102 = update visitor - Missed Sign Out (and possibly other transactions not recorded)
22222 =  update visitor - All transactions saved after missed sign out
*/

// TEST FOR ALL SIGN IN STATUS/TRANSACTION STATUS
var visitors_signs = [
    {visitor_sign_id: "0001", person_id: "", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "yes", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0002", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "yes", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0003", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "yes", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0004", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "yes", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},
    {visitor_sign_id: "0005", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "yes", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},
    {visitor_sign_id: "0006", person_id: "", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "yes", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},
    {visitor_sign_id: "0007", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "yes", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},
    {visitor_sign_id: "0008", person_id: "", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "yes", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0009", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "yes", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0010", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "yes", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0011", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "yes", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},

    {visitor_sign_id: "0012", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0013", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0014", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},
    {visitor_sign_id: "0015", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},
    {visitor_sign_id: "0016", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},
    {visitor_sign_id: "0017", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0018", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0019", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: false, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},

    {visitor_sign_id: "0020", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: true, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0021", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: true, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0022", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: true, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0023", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: true, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},
    {visitor_sign_id: "0024", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: true, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},
    {visitor_sign_id: "0025", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: true, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},
    {visitor_sign_id: "0026", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: true, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},
    {visitor_sign_id: "0027", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: true, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0028", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: true, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0029", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: true, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: ""},
    {visitor_sign_id: "0030", person_id: "0001", person_image_url: "images/1526222222222_robert_johnson.jpg", first_visit: "no", update_contact: true, person_name: "Robert Johnson", company: "Go Veterans", phone: "233-444-7777", email: "robert.johnson@goveterans.org", reason: "2", person_visiting: "Frank Tucker", citizen: "yes", classified: "yes", person_signature_url: "signatures/1526222222222_robert_johnson.jpg", datetime_in: "1528222222222", datetime_out: "1528229000000"},
];


var visitors_transactions = [
    {trans_id: "0001", visitor_sign_id: "0001", person_id: "", status: "00000", recorded_by: "", datetime: ""},
    {trans_id: "0002", visitor_sign_id: "0002", person_id: "0001", status: "01000", recorded_by: "", datetime: ""},
    {trans_id: "0003", visitor_sign_id: "0003", person_id: "0001", status: "01100", recorded_by: "", datetime: ""},
    {trans_id: "0004", visitor_sign_id: "0004", person_id: "0001", status: "01110", recorded_by: "", datetime: ""},
    {trans_id: "0005", visitor_sign_id: "0005", person_id: "0001", status: "01010", recorded_by: "", datetime: ""},
    {trans_id: "0006", visitor_sign_id: "0006", person_id: "", status: "00010", recorded_by: "", datetime: ""},
    {trans_id: "0007", visitor_sign_id: "0007", person_id: "0001", status: "01111", recorded_by: "", datetime: ""},
    {trans_id: "0008", visitor_sign_id: "0008", person_id: "", status: "00002", recorded_by: "", datetime: ""},
    {trans_id: "0009", visitor_sign_id: "0009", person_id: "0001", status: "01102", recorded_by: "", datetime: ""},
    {trans_id: "0010", visitor_sign_id: "0010", person_id: "0001", status: "01002", recorded_by: "", datetime: ""},
    {trans_id: "0011", visitor_sign_id: "0011", person_id: "0001", status: "02222", recorded_by: "", datetime: ""},

    {trans_id: "0012", visitor_sign_id: "0012", person_id: "0001", status: "10000", recorded_by: "", datetime: ""},
    {trans_id: "0013", visitor_sign_id: "0013", person_id: "0001", status: "10100", recorded_by: "", datetime: ""},
    {trans_id: "0014", visitor_sign_id: "0014", person_id: "0001", status: "10110", recorded_by: "", datetime: ""},
    {trans_id: "0015", visitor_sign_id: "0015", person_id: "0001", status: "10010", recorded_by: "", datetime: ""},
    {trans_id: "0016", visitor_sign_id: "0016", person_id: "0001", status: "10111", recorded_by: "", datetime: ""},
    {trans_id: "0017", visitor_sign_id: "0017", person_id: "0001", status: "10102", recorded_by: "", datetime: ""},
    {trans_id: "0018", visitor_sign_id: "0018", person_id: "0001", status: "10002", recorded_by: "", datetime: ""},
    {trans_id: "0019", visitor_sign_id: "0019", person_id: "0001", status: "12222", recorded_by: "", datetime: ""},

    {trans_id: "0020", visitor_sign_id: "0020", person_id: "0001", status: "20000", recorded_by: "", datetime: ""},
    {trans_id: "0021", visitor_sign_id: "0021", person_id: "0001", status: "21000", recorded_by: "", datetime: ""},
    {trans_id: "0022", visitor_sign_id: "0022", person_id: "0001", status: "21100", recorded_by: "", datetime: ""},
    {trans_id: "0023", visitor_sign_id: "0023", person_id: "0001", status: "21110", recorded_by: "", datetime: ""},
    {trans_id: "0024", visitor_sign_id: "0024", person_id: "0001", status: "21010", recorded_by: "", datetime: ""},
    {trans_id: "0025", visitor_sign_id: "0025", person_id: "0001", status: "20010", recorded_by: "", datetime: ""},
    {trans_id: "0026", visitor_sign_id: "0026", person_id: "0001", status: "21111", recorded_by: "", datetime: ""},
    {trans_id: "0027", visitor_sign_id: "0027", person_id: "0001", status: "20002", recorded_by: "", datetime: ""},
    {trans_id: "0028", visitor_sign_id: "0028", person_id: "0001", status: "21102", recorded_by: "", datetime: ""},
    {trans_id: "0029", visitor_sign_id: "0029", person_id: "0001", status: "21002", recorded_by: "", datetime: ""},
    {trans_id: "0030", visitor_sign_id: "0030", person_id: "0001", status: "22222", recorded_by: "", datetime: ""},
];


