# == Schema Information
#
# Table name: visitor_visit_informations
#
#  id                 :bigint(8)        not null, primary key
#  visitor_id         :integer
#  date               :datetime
#  visit_reason       :string(255)
#  person_visiting_id :integer
#  us_citizen         :boolean
#  classified         :boolean
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  sign_in_date       :datetime
#  sign_out_date      :datetime
#  recorded_by        :string(255)
#

class VisitorVisitInformation < ApplicationRecord
  belongs_to :visitor

  belongs_to :person, foreign_key: :person_visiting_id

  def status

    if  classified.nil? or person.nil?
      return '02222'
    end
    if sign_out_date.nil?
      return '10002' if sign_in_date.nil?
      if sign_in_date.to_date < Date.today.to_date
        '10002'
      else
        if 2.hours.ago < sign_in_date
          "01100"
        else
          "01110"
        end
      end
    else
      '01111'
    end
  end
end
