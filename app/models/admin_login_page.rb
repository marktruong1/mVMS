# == Schema Information
#
# Table name: admin_login_pages
#
#  id              :bigint(8)        not null, primary key
#  section_1_image :string(255)
#  section_1_body  :text(65535)
#  section_1_file  :string(255)
#  section_2_image :string(255)
#  section_3_title :string(255)
#  section_3_body  :text(65535)
#  section_4_title :string(255)
#  section_4_body  :text(65535)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class AdminLoginPage < ApplicationRecord
    mount_uploader :section_1_image, ImageUploader
    mount_uploader :section_1_file, FileUploader
    mount_uploader :section_2_image, ImageUploader
end