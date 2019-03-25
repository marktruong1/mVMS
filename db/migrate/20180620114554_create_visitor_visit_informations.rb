class CreateVisitorVisitInformations < ActiveRecord::Migration[5.1]
  def change
    create_table :visitor_visit_informations do |t|
      t.integer :visitor_id
      t.datetime :date
      t.string :visit_reason
      t.integer :person_visiting_id
      t.boolean :us_citizen
      t.boolean :classified

      t.timestamps
    end
    add_index :visitor_visit_informations, :visitor_id
  end
end
