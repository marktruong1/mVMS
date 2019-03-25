class AddSigninoutToVisitorVisitInformation < ActiveRecord::Migration[5.1]
  def change
    add_column :visitor_visit_informations, :sign_in_date, :datetime
    add_column :visitor_visit_informations, :sign_out_date, :datetime
  end
end
