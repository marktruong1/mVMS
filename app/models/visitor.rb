class Visitor < ApplicationRecord
  has_many :visitor_visit_informations, :dependent => :destroy

  validates_presence_of :name, :email
  validates_uniqueness_of :email

  def personvisiting
    visitor_visit_informations.last.try(:person_visiting)
  end

  def has_visit_missed?
    visitor_visit_informations.where(sign_out_date: nil).present?
  end

  def last_visit
    visitor_visit_informations.last || VisitorVisitInformation.new
  end

  def status
    if email.nil? || phone.nil? || company.nil? || us_citizen.nil?
      return '02222'
    end
    nil
  end

  def last_missed_visit
    visitor_visit_informations.where(sign_out_date: nil).last
  end

  def to_json
    {
        display_name: self.name,
        display_company: self.company,
        display_phone: self.phone,
        avatar: self.avatar,
        display_email: self.email,

        display_reason: self.last_missed_visit.visit_reason,
        display_personvisit: self.last_missed_visit.person.try(:name),
        display_citizen: self.us_citizen?,

        display_classified: self.last_missed_visit.classified?,
        display_date_in: self.last_missed_visit.sign_in_date.to_date,
        display_time_in: self.last_missed_visit.sign_in_date.strftime('%I:%M %p'),
    }
  end

end
