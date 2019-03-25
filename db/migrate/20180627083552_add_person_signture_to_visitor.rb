class AddPersonSigntureToVisitor < ActiveRecord::Migration[5.1]
  def change
    add_column :visitors, :person_signature, :text
  end
end
