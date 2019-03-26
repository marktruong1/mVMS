# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(full_name: 'admin', email: 'admin@example.com', password: 'admin@2018', admin: true)

if AdminLoginPage.count == 0
  AdminLoginPage.create(
    section_1_image: '',
    section_1_body: 'Need to share files with MicroHealth? If we are expecting a file from you, we will approve your account and you can send us a file.',
    section_1_file: '',
    section_2_image: '',
    section_3_title: 'About MicroHealth Send?',
    section_3_body: 'Microhealth Send is the easy way to move large files in and out of MicroHealth with encryption at rest and encryption in motion. Users can request files be sent to them securely or send a file securely. Up to 2 gigs in file size, you can have the file send at a future date. delete at a certain date or number of downloads.',
    section_4_title: 'Not just your average managed file transfer.',
    section_4_body: 'This isn\'t a shared system, this is a private one owned and managed by YOU. Easily configured to have your own branding. Its completely open source on github https://github.com/MicroHealthLLG/mSend so please contribute to make this better for everyone.'
  )
end