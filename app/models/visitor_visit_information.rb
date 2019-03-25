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
