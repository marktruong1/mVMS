class AddColumnToVisitor < ActiveRecord::Migration[5.1]
  def change
    add_column :visitors, :us_citizen, :string
    add_column :visitors, :avatar, :text
  end
end
