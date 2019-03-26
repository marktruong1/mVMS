class CreateAdminLoginPages < ActiveRecord::Migration[5.1]
    def change
      create_table :admin_login_pages do |t|
        t.string :section_1_image
        t.text :section_1_body
        t.string :section_1_file
        t.string :section_2_image
        t.string :section_3_title
        t.text :section_3_body
        t.string :section_4_title
        t.text :section_4_body
  
        t.timestamps
      end
    end
end