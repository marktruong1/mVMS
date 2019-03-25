class AddRecordedbyToVisitorVisitInformation < ActiveRecord::Migration[5.1]
  def change
    add_column :visitor_visit_informations, :recorded_by, :string
  end
end
